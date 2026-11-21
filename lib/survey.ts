export type SurveyOption = { value: string; label: string }

// Each value must match the option text of its GHL custom field exactly.
export const jobValueOptions: SurveyOption[] = [
  { value: "Under £2,000", label: "Under £2,000" },
  { value: "£2,000 to £5,000", label: "£2,000 to £5,000" },
  { value: "£5,000 to £10,000", label: "£5,000 to £10,000" },
  { value: "Over £10,000", label: "Over £10,000" },
]

// The low end of each band, so the payback line on the price screen stays conservative.
/** A typical job in each band, for the payback example. The open-ended top band uses its floor. */
export const jobValueExample: Record<string, number> = {
  "£2,000 to £5,000": 3500,
  "£5,000 to £10,000": 7500,
  "Over £10,000": 10000,
}

export const priceReactionOptions: SurveyOption[] = [
  { value: "Yes, that works", label: "Yes, I'd invest that" },
  { value: "See what I get first", label: "I'd want to see more first" },
  { value: "More than I can spend", label: "Not right now, it's more than I can invest" },
]

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
  priceReaction?: string
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
export type NotYetReason = "price" | "jobValue"

export const LEAD_TIERS: LeadTier[] = ["Hot", "Warm", "Needs partner", "Not yet"]
export const CONSENT_TEXT = "I agree to Noble Leads contacting me about my enquiry by phone, text and email."

export function leadOutcome(answers: SurveyAnswers): { tier: LeadTier; reason?: NotYetReason } {
  if (answers.priceReaction === "More than I can spend") return { tier: "Not yet", reason: "price" }
  // Smaller jobs can still book, as long as they've said yes to the price.
  if (answers.jobValue === "Under £2,000" && answers.priceReaction !== "Yes, that works") {
    return { tier: "Not yet", reason: "jobValue" }
  }
  return { tier: answers.priceReaction === "Yes, that works" ? "Hot" : "Warm" }
}
