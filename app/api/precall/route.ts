import { clean, getFieldIds, ghl, ghlToken, isContactId, LOCATION_ID, toCustomFields, toE164 } from "@/lib/ghl"
import { findTrade, formatJobValue, type PrecallAnswers, type QuestionId } from "@/lib/precall"

type Stage = "progress" | "partial" | "complete"

type PrecallPayload = {
  contactId?: string
  stage?: Stage
  answers?: PrecallAnswers
  /** Only used when the link had no contact id, to find their existing booking. */
  match?: { name?: string; email?: string; phone?: string }
}

const questionIds: QuestionId[] = [
  "trade",
  "jobs",
  "area",
  "jobValue",
  "capacity",
  "sources",
  "triedBefore",
  "website",
  "agenda",
]

function cleanList(value: unknown) {
  return Array.isArray(value) ? value.map((item) => clean(item, 120)).filter(Boolean).slice(0, 12) : []
}

function sanitise(raw: PrecallAnswers = {}): PrecallAnswers {
  const jobValue = Number(raw.jobValue)
  return {
    trade: clean(raw.trade, 80) || undefined,
    jobs: cleanList(raw.jobs),
    jobsOther: clean(raw.jobsOther, 200) || undefined,
    town: clean(raw.town, 80) || undefined,
    radius: clean(raw.radius, 30) || undefined,
    jobValue: Number.isFinite(jobValue) && jobValue > 0 && jobValue < 10_000_000 ? Math.round(jobValue) : undefined,
    capacity: clean(raw.capacity, 40) || undefined,
    sources: cleanList(raw.sources),
    triedBefore: clean(raw.triedBefore, 60) || undefined,
    triedNote: clean(raw.triedNote, 600) || undefined,
    website: clean(raw.website, 200) || undefined,
    agenda: clean(raw.agenda, 1500) || undefined,
    skipped: cleanList(raw.skipped).filter((id): id is QuestionId => questionIds.includes(id as QuestionId)),
  }
}

function joined(a: PrecallAnswers) {
  return {
    jobs: [...(a.jobs ?? []), ...(a.jobsOther ? [a.jobsOther] : [])].join(", "),
    sources: (a.sources ?? []).join(", "),
    jobValue: typeof a.jobValue === "number" ? formatJobValue(a.jobValue) : "",
    tried: a.triedBefore ? `${a.triedBefore}${a.triedNote ? `. ${a.triedNote}` : ""}` : "",
  }
}

function looksLikeUrl(value?: string) {
  return Boolean(value && /^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(value))
}

function answersNote(a: PrecallAnswers, stage: Stage) {
  const j = joined(a)
  const skipped = new Set(a.skipped ?? [])
  const row = (label: string, id: QuestionId, value?: string) =>
    `${label}: ${value || (skipped.has(id) ? "skipped, ask on the call" : "-")}`
  return [
    stage === "complete" ? "Pre-call questions, finished" : "Pre-call questions, left part way",
    row("Trade", "trade", a.trade),
    row("Jobs wanted", "jobs", j.jobs),
    row("Area", "area", a.town ? `${a.town}${a.radius ? `, ${a.radius}` : ""}` : ""),
    row("Typical job", "jobValue", j.jobValue),
    row("Extra jobs a month", "capacity", a.capacity),
    row("Work comes from", "sources", j.sources),
    row("Ads before", "triedBefore", j.tried),
    row("Website", "website", a.website),
    row("Wants to cover", "agenda", a.agenda),
  ].join("\n")
}

async function findContact(token: string, match: PrecallPayload["match"]) {
  const email = clean(match?.email, 120)
  const phone = clean(match?.phone, 30)
  const query = /^\S+@\S+\.\S+$/.test(email)
    ? `email=${encodeURIComponent(email)}`
    : phone.replace(/\D/g, "").length >= 10
      ? `number=${encodeURIComponent(toE164(phone))}`
      : ""
  if (!query) return undefined
  const data = await ghl(`/contacts/search/duplicate?locationId=${LOCATION_ID}&${query}`, token)
  return (data.contact?.id as string | undefined) ?? undefined
}

export async function POST(request: Request) {
  let payload: PrecallPayload
  try {
    // sendBeacon posts as text/plain, so parse the body ourselves.
    payload = JSON.parse(await request.text()) as PrecallPayload
  } catch {
    return Response.json({ saved: false }, { status: 400 })
  }

  const stage: Stage = payload.stage === "complete" || payload.stage === "partial" ? payload.stage : "progress"
  const answers = sanitise(payload.answers)

  const token = ghlToken()
  if (!token) {
    console.error("Precall: GHL_PRIVATE_TOKEN is not set, so the answers were not saved")
    return Response.json({ saved: false }, { status: 503 })
  }

  try {
    let contactId: string | undefined
    if (isContactId(payload.contactId)) {
      // Only write to contacts that really belong to our location.
      const data = await ghl(`/contacts/${payload.contactId}`, token)
      if (data.contact?.locationId === LOCATION_ID) contactId = payload.contactId
    } else if (stage !== "progress") {
      contactId = await findContact(token, payload.match)
    }
    if (!contactId) return Response.json({ saved: false, matched: false }, { status: 404 })

    let ids = new Map<string, string>()
    try {
      ids = await getFieldIds(token)
    } catch (error) {
      console.error("Precall: couldn't load custom fields, saving tags and notes only", error)
    }

    const j = joined(answers)
    const customFields = toCustomFields(
      ids,
      {
        // The survey's Trade field is a dropdown, so only send names it knows. Typed trades go in the note.
        Trade: findTrade(answers.trade)?.name,
        Area: answers.town,
        "Jobs wanted": j.jobs,
        "Service radius": answers.radius,
        "Typical job value": j.jobValue,
        "Extra jobs a month": answers.capacity,
        "Lead sources": j.sources,
        "Tried ads before": j.tried,
        "Call agenda": answers.agenda,
      },
      "Precall"
    )

    const update: Record<string, unknown> = {}
    if (customFields.length) update.customFields = customFields
    if (looksLikeUrl(answers.website)) update.website = answers.website
    if (Object.keys(update).length) await ghl(`/contacts/${contactId}`, token, "PUT", update)

    const tags =
      stage === "complete" ? ["Precall complete"] : stage === "partial" ? ["Precall partial"] : ["Precall started"]
    await ghl(`/contacts/${contactId}/tags`, token, "POST", { tags })

    if (stage !== "progress") {
      if (stage === "complete") {
        await ghl(`/contacts/${contactId}/tags`, token, "DELETE", { tags: ["Precall partial"] }).catch(() => undefined)
      }
      await ghl(`/contacts/${contactId}/notes`, token, "POST", { body: answersNote(answers, stage) })
    }

    return Response.json({ saved: true, matched: true })
  } catch (error) {
    console.error("Precall: failed to save answers to GHL", error)
    return Response.json({ saved: false }, { status: 502 })
  }
}
