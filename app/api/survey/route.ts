import {
  CONSENT_TEXT,
  LEAD_TIERS,
  leadOutcome,
  splitName,
  type Attribution,
  type SurveyAnswers,
  type SurveyDetails,
} from "@/lib/survey"
import { clean, getFieldIds, ghl, LOCATION_ID, toCustomFields, toE164 } from "@/lib/ghl"

type SurveyPayload = {
  stage?: "details" | "progress" | "complete"
  consent?: boolean
  company?: string
  details?: Partial<SurveyDetails>
  answers?: SurveyAnswers
  attribution?: Attribution
}

function fieldValues(
  ids: Map<string, string>,
  answers: SurveyAnswers,
  details: Partial<SurveyDetails>,
  attribution: Attribution,
  tier?: string
) {
  const values: Record<string, string | undefined> = {
    // Trade, Area and Typical job value are the same fields the pre-call page reads and writes,
    // so anything answered here isn't asked again there.
    Trade: answers.trade,
    Area: answers.area,
    "Typical job value": answers.jobValue,
    Website: details.website,
    "Lead tier": tier,
    GCLID: attribution.gclid,
    "UTM campaign": attribution.utmCampaign,
    "UTM term": attribution.utmTerm,
  }

  return toCustomFields(ids, values, "Survey")
}

function answersNote(answers: SurveyAnswers, tier: string) {
  const lines: [string, string | undefined][] = [
    ["Lead tier", tier],
    ["Trade", answers.otherTrade ? `Other: ${answers.otherTrade}` : answers.trade],
    ["Area", answers.area],
    ["Typical job value", answers.jobValue],
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
  const { firstName, lastName } = splitName(clean(details.name))
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
      lastName: lastName || undefined,
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
        tags: ["Survey started", "source: website", ...(attribution.gclid ? ["Google Ads"] : [])],
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
          "source: website",
          tier,
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
