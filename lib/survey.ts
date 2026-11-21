export type SurveyOption = { value: string; label: string }

// Each value must match the option text of its GHL custom field exactly.
export const jobValueOptions: SurveyOption[] = [
  { value: "Under £2,000", label: "Under £2,000" },
  { value: "£2,000 to £5,000", label: "£2,000 to £5,000" },
  { value: "£5,000 to £10,000", label: "£5,000 to £10,000" },
  { value: "Over £10,000", label: "Over £10,000" },
]

/** A typical job in each band, for the payback example. The open-ended top band uses its floor. */
export const jobValueExample: Record<string, number> = {
  "£2,000 to £5,000": 3500,
  "£5,000 to £10,000": 7500,
  "Over £10,000": 10000,
}

/** "Jo Bloggs-Smith" → { firstName: "Jo", lastName: "Bloggs-Smith" }. */
export function splitName(name: string) {
  const [firstName = "", ...rest] = name.trim().split(/\s+/)
  return { firstName, lastName: rest.join(" ") }
}

export type SurveyAnswers = {
  trade?: string
  otherTrade?: string
  area?: string
  jobValue?: string
}

export type SurveyDetails = {
  name: string
  businessName: string
  phone: string
  email: string
  website: string
}

export type Attribution = {
  gclid?: string
  utmCampaign?: string
  utmTerm?: string
}

export type LeadTier = "Hot" | "Warm" | "Needs partner" | "Not yet"
export type NotYetReason = "jobValue"

export const LEAD_TIERS: LeadTier[] = ["Hot", "Warm", "Needs partner", "Not yet"]
export const CONSENT_TEXT = "I agree to Noble Leads contacting me about my enquiry by phone, text and email."

export function leadOutcome(answers: SurveyAnswers): { tier: LeadTier; reason?: NotYetReason } {
  // The system needs jobs big enough for the ads to pay for themselves.
  if (answers.jobValue === "Under £2,000") return { tier: "Not yet", reason: "jobValue" }
  return { tier: "Warm" }
}
