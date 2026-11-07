export type SurveyOption = { value: string; label: string }

// Each value must match the option text of its GHL custom field exactly.
export const frustrationOptions: SurveyOption[] = [
  { value: "Quiet spells, no steady flow", label: "Quiet spells and no steady flow" },
  { value: "Paying for shared leads", label: "Paying for leads shared with other firms" },
  { value: "Missing calls on the tools", label: "Missing calls and enquiries while I'm on the tools" },
  { value: "Not showing up on Google", label: "Not showing up on Google" },
  { value: "Website doesn't bring in work", label: "My website doesn't bring in work" },
  { value: "Something else", label: "Something else" },
]

export const jobValueOptions: SurveyOption[] = [
  { value: "Under £2,000", label: "Under £2,000" },
  { value: "£2,000 to £5,000", label: "£2,000 to £5,000" },
  { value: "£5,000 to £10,000", label: "£5,000 to £10,000" },
  { value: "Over £10,000", label: "Over £10,000" },
]

// The low end of each band, so the payback line on the price screen stays conservative.
export const jobValueFloor: Record<string, number> = {
  "£2,000 to £5,000": 2000,
  "£5,000 to £10,000": 5000,
  "Over £10,000": 10000,
}

export const capacityOptions: SurveyOption[] = [
  { value: "Right away", label: "Right away, I have capacity" },
  { value: "In 1 to 3 months", label: "In the next 1 to 3 months" },
  { value: "Not for a while", label: "Not for a while, I'm booked up" },
]

export const decisionMakerOptions: SurveyOption[] = [
  { value: "Just me", label: "Just me" },
  { value: "Me and a partner", label: "Me and a partner or colleague" },
  { value: "Someone else", label: "Someone else, I'm gathering information" },
]

export const priceReactionOptions: SurveyOption[] = [
  { value: "Yes, that works", label: "Yes, that works for me" },
  { value: "See what I get first", label: "I'd want to see what I get first" },
  { value: "More than I can spend", label: "No, that's more than I can spend" },
]

export type SurveyAnswers = {
  trade?: string
  otherTrade?: string
  area?: string
  frustration?: string
  jobValue?: string
  capacity?: string
  decisionMaker?: string
  priceReaction?: string
}

export type SurveyDetails = {
  firstName: string
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
export type NotYetReason = "price" | "capacity" | "decision" | "jobValue"

export const LEAD_TIERS: LeadTier[] = ["Hot", "Warm", "Needs partner", "Not yet"]
export const CONSENT_TEXT = "I agree to Noble Leads contacting me about my enquiry by phone, text and email."

export function leadOutcome(answers: SurveyAnswers): { tier: LeadTier; reason?: NotYetReason } {
  if (answers.priceReaction === "More than I can spend") return { tier: "Not yet", reason: "price" }
  if (answers.capacity === "Not for a while") return { tier: "Not yet", reason: "capacity" }
  if (answers.decisionMaker === "Someone else") return { tier: "Not yet", reason: "decision" }
  // Smaller jobs can still book, as long as they've said yes to the price.
  if (answers.jobValue === "Under £2,000" && answers.priceReaction !== "Yes, that works") {
    return { tier: "Not yet", reason: "jobValue" }
  }
  if (answers.decisionMaker === "Me and a partner") return { tier: "Needs partner" }
  if (
    answers.priceReaction === "Yes, that works" &&
    answers.capacity === "Right away" &&
    answers.decisionMaker === "Just me"
  ) {
    return { tier: "Hot" }
  }
  return { tier: "Warm" }
}
