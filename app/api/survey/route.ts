import {
  CONSENT_TEXT,
  LEAD_TIERS,
  leadOutcome,
  type Attribution,
  type SurveyAnswers,
  type SurveyDetails,
} from "@/lib/survey"

const API_BASE = "https://services.leadconnectorhq.com"
const LOCATION_ID = "rDzOdgNXidfxh3AveWDf"

type SurveyPayload = {
  stage?: "details" | "progress" | "complete"
  consent?: boolean
  company?: string
  details?: Partial<SurveyDetails>
  answers?: SurveyAnswers
  attribution?: Attribution
}

let fieldIds: Map<string, string> | null = null

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 300) : ""
}

function toE164(phone: string) {
  const compact = phone.replace(/[^\d+]/g, "")
  if (compact.startsWith("+")) return compact
  if (compact.startsWith("44")) return `+${compact}`
  if (compact.startsWith("0")) return `+44${compact.slice(1)}`
  return compact
}

async function ghl(path: string, token: string, method = "GET", body?: unknown) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: "2021-07-28",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`GHL ${method} ${path} failed (${res.status}): ${await res.text()}`)
  return res.json()
}

async function getFieldIds(token: string) {
  if (fieldIds) return fieldIds
  const data = await ghl(`/locations/${LOCATION_ID}/customFields?model=contact`, token)
  const fields = (data.customFields ?? []) as { id: string; name: string }[]
  fieldIds = new Map(fields.map((field) => [field.name.toLowerCase(), field.id]))
  return fieldIds
}

function fieldValues(
  ids: Map<string, string>,
  answers: SurveyAnswers,
  details: Partial<SurveyDetails>,
  attribution: Attribution,
  tier?: string
) {
  const values: Record<string, string | undefined> = {
    Trade: answers.trade,
    Area: answers.area,
    "Biggest frustration": answers.frustration,
    Website: details.website,
    "Average job value": answers.jobValue,
    Capacity: answers.capacity,
    "Decision maker": answers.decisionMaker,
    "Price reaction": answers.priceReaction,
    "Lead tier": tier,
    GCLID: attribution.gclid,
    "UTM campaign": attribution.utmCampaign,
    "UTM term": attribution.utmTerm,
  }

  return Object.entries(values).flatMap(([name, value]) => {
    const text = clean(value)
    if (!text) return []
    const id = ids.get(name.toLowerCase())
    if (!id) {
      console.error(`Survey: no GHL custom field named "${name}"`)
      return []
    }
    return [{ id, field_value: text }]
  })
}

function answersNote(answers: SurveyAnswers, tier: string) {
  const lines: [string, string | undefined][] = [
    ["Lead tier", tier],
    ["Trade", answers.otherTrade ? `Other: ${answers.otherTrade}` : answers.trade],
    ["Area", answers.area],
    ["Biggest frustration", answers.frustration],
    ["Average job value", answers.jobValue],
    ["Capacity", answers.capacity],
    ["Decision maker", answers.decisionMaker],
    ["Price reaction", answers.priceReaction],
  ]
  return `Website survey answers\n${lines.map(([label, value]) => `${label}: ${clean(value) || "-"}`).join("\n")}`
}

export async function POST(request: Request) {
  let payload: SurveyPayload
  try {
    payload = (await request.json()) as SurveyPayload
  } catch {
    return Response.json({ saved: false }, { status: 400 })
  }

  // The honeypot field is hidden from people, so only bots fill it in.
  if (clean(payload.company)) return Response.json({ saved: true })

  const details = payload.details ?? {}
  const firstName = clean(details.firstName)
  const email = clean(details.email)
  const phone = toE164(clean(details.phone))
  const validContact = firstName && /^\S+@\S+\.\S+$/.test(email) && phone.replace(/\D/g, "").length >= 10
  if (!validContact || payload.consent !== true) {
    return Response.json({ saved: false }, { status: 400 })
  }

  const token = process.env.GHL_PRIVATE_TOKEN
  if (!token) {
    console.error("Survey: GHL_PRIVATE_TOKEN is not set, so the lead was not saved")
    return Response.json({ saved: false }, { status: 503 })
  }

  const answers = payload.answers ?? {}
  const attribution = payload.attribution ?? {}
  const complete = payload.stage === "complete"
  const tier = complete ? leadOutcome(answers).tier : undefined

  try {
    let ids = new Map<string, string>()
    try {
      ids = await getFieldIds(token)
    } catch (error) {
      console.error("Survey: couldn't load custom fields, saving the contact without them", error)
    }

    const upsert = await ghl("/contacts/upsert", token, "POST", {
      locationId: LOCATION_ID,
      firstName,
      email,
      phone,
      country: "GB",
      companyName: clean(details.businessName),
      website: clean(details.website) || undefined,
      source: "Website survey",
      customFields: fieldValues(ids, answers, details, attribution, tier),
    })
    const contactId = upsert.contact?.id as string | undefined
    if (!contactId) throw new Error("GHL upsert returned no contact id")

    if (payload.stage === "details") {
      await ghl(`/contacts/${contactId}/tags`, token, "POST", {
        tags: attribution.gclid ? ["Survey started", "Google Ads"] : ["Survey started"],
      })
      await ghl(`/contacts/${contactId}/notes`, token, "POST", {
        body: `Consent given on the website survey at ${new Date().toISOString()}: "${CONSENT_TEXT}"`,
      })
    }

    if (complete && tier) {
      const staleTiers = LEAD_TIERS.filter((other) => other !== tier)
      await ghl(`/contacts/${contactId}/tags`, token, "DELETE", { tags: staleTiers })
      await ghl(`/contacts/${contactId}/tags`, token, "POST", {
        tags: [
          "Survey complete",
          tier,
          ...(answers.priceReaction === "See what I get first" ? ["Price unsure"] : []),
        ],
      })
      await ghl(`/contacts/${contactId}/notes`, token, "POST", { body: answersNote(answers, tier) })
    }

    return Response.json({ saved: true })
  } catch (error) {
    console.error("Survey: failed to save lead to GHL", error)
    return Response.json({ saved: false }, { status: 502 })
  }
}
