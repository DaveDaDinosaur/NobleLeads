import { formatGBP, jobsToCoverFirstTerm, MIN_TERM_MONTHS } from "@/lib/offer"
import { trades, type Trade } from "@/lib/trades"

/** What the page knows about the lead before they answer anything. Every field can be missing. */
export type PrecallContext = {
  contactId?: string
  firstName?: string
  businessName?: string
  tradeName?: string
  website?: string
  /** ISO start time of their call. */
  callStart?: string
  callMinutes: number
}

export type PrecallAnswers = {
  trade?: string
  jobs?: string[]
  jobsOther?: string
  town?: string
  radius?: string
  jobValue?: number
  capacity?: string
  sources?: string[]
  triedBefore?: string
  triedNote?: string
  website?: string
  agenda?: string
  skipped?: QuestionId[]
}

export type QuestionId =
  | "trade"
  | "jobs"
  | "area"
  | "jobValue"
  | "capacity"
  | "sources"
  | "triedBefore"
  | "website"
  | "agenda"

export type Question = {
  id: QuestionId
  question: string
  hint: string
}

export const CALL_PHONE = "01223 679988"
export const CALL_PHONE_HREF = "tel:+441223679988"
export const DEFAULT_CALL_MINUTES = 30

export const radiusOptions = ["5 miles", "10 miles", "20 miles", "30 miles", "40 miles +"]

export const capacityOptions = ["1 or 2", "3 to 5", "6 to 10", "More than 10"]

export const sourceOptions = [
  "Word of mouth",
  "Repeat customers",
  "Checkatrade, MyBuilder or Bark",
  "My own website",
  "Google Ads",
  "Social media",
]

export const triedOptions = [
  "No, never",
  "Yes, and it worked",
  "Yes, and it didn't work",
  "I run my own ads",
]

export const websiteShortcuts = ["No website yet", "Just a Google listing"]

/** Slider stops for a typical job, in pounds. Uneven so small and large trades both get useful steps. */
export const jobValueStops = [
  500, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 6000, 7500, 10000, 12500, 15000, 20000, 25000, 30000,
  40000, 50000,
]

const genericJobs = ["Bigger, higher value jobs", "Repairs and smaller jobs", "Commercial work", "Emergency call-outs"]

export function findTrade(name?: string): Trade | undefined {
  if (!name) return undefined
  const needle = name.trim().toLowerCase()
  return trades.find((trade) => trade.name.toLowerCase() === needle || trade.slug === needle)
}

export function jobOptionsFor(tradeName?: string) {
  return findTrade(tradeName)?.jobs ?? genericJobs
}

export function nearestStopIndex(value: number) {
  let best = 0
  jobValueStops.forEach((stop, index) => {
    if (Math.abs(stop - value) < Math.abs(jobValueStops[best] - value)) best = index
  })
  return best
}

export function formatJobValue(value: number) {
  return value >= jobValueStops[jobValueStops.length - 1] ? `${formatGBP(value)}+` : formatGBP(value)
}

/** The questions in order. Trade is only asked when we don't already know it. */
export function buildQuestions(context: PrecallContext): Question[] {
  const list: Question[] = []
  if (!findTrade(context.tradeName)) {
    list.push({ id: "trade", question: "First up, what's your trade?", hint: "So the plan speaks your language." })
  }
  list.push(
    {
      id: "jobs",
      question: "Which jobs do you want more of?",
      hint: "Pick as many as you like. The ads get built around these.",
    },
    {
      id: "area",
      question: "Where do you want them?",
      hint: "Your base, and how far you'll travel for the right job.",
    },
    {
      id: "jobValue",
      question: "What's a typical job worth?",
      hint: "A rough figure is perfect. Slide to the nearest.",
    },
    {
      id: "capacity",
      question: "How many more jobs a month could you take on?",
      hint: "This becomes the target the plan works back from.",
    },
    {
      id: "sources",
      question: "Where does your work come from now?",
      hint: "Pick all that apply.",
    },
    {
      id: "triedBefore",
      question: "Have you tried ads or an agency before?",
      hint: "Good or bad, it helps to know.",
    },
    {
      id: "website",
      question: "Got a website I can look at?",
      hint: "I'll have a look at it before we speak.",
    },
    {
      id: "agenda",
      question: "Anything you want to make sure we cover?",
      hint: "Questions, worries, anything at all. Totally optional.",
    }
  )
  return list
}

export function isAnswered(id: QuestionId, a: PrecallAnswers) {
  switch (id) {
    case "trade":
      return Boolean(a.trade)
    case "jobs":
      return Boolean(a.jobs?.length || a.jobsOther)
    case "area":
      return Boolean(a.town)
    case "jobValue":
      return typeof a.jobValue === "number"
    case "capacity":
      return Boolean(a.capacity)
    case "sources":
      return Boolean(a.sources?.length)
    case "triedBefore":
      return Boolean(a.triedBefore)
    case "website":
      return Boolean(a.website)
    case "agenda":
      return Boolean(a.agenda)
  }
}

/** Options can contain "and" themselves, so lists are joined with commas only. */
function listText(items: string[]) {
  return items.join(", ")
}

/** Lower-cases the first letter for use mid-sentence, unless it starts an acronym like "GRP". */
function midSentence(text: string) {
  return /^[A-Z][A-Z]/.test(text) ? text : text.charAt(0).toLowerCase() + text.slice(1)
}

/** A one-line response shown after each answer, written as George. */
export function reactionFor(id: QuestionId, a: PrecallAnswers, context: PrecallContext): string | undefined {
  switch (id) {
    case "trade": {
      const trade = findTrade(a.trade)
      return trade
        ? `Good. I'll come with what's working for ${trade.plural} right now.`
        : "Good. I'll come with what's working for trades like yours right now."
    }
    case "jobs": {
      const first = a.jobs?.[0] ?? a.jobsOther
      return first
        ? `Noted. We'd build the ads around ${midSentence(first)}, and keep out searches for work you don't want.`
        : undefined
    }
    case "area":
      return a.town
        ? `${a.town} it is. Your ads only show inside that area, so you never pay for clicks you can't serve.`
        : undefined
    case "jobValue": {
      if (typeof a.jobValue !== "number") return undefined
      const jobs = jobsToCoverFirstTerm(a.jobValue)
      return `At ${formatJobValue(a.jobValue)} a job, about ${jobs} extra ${jobs === 1 ? "job covers" : "jobs cover"} your first ${MIN_TERM_MONTHS} months.`
    }
    case "capacity":
      return a.capacity ? "That's the target, then. Everything on the call works back from it." : undefined
    case "sources": {
      const s = a.sources ?? []
      if (s.includes("Checkatrade, MyBuilder or Bark")) {
        return "Then you know what shared leads cost. Everything we build is yours to keep."
      }
      if (s.includes("Word of mouth") || s.includes("Repeat customers")) {
        return "That means you do good work. Now more people just need to find you."
      }
      return s.length ? "Good to know. We'll build on what's already working." : undefined
    }
    case "triedBefore":
      switch (a.triedBefore) {
        case "Yes, and it didn't work":
          return "Thanks for being straight. I'll show you what we'd do differently, and you can judge for yourself."
        case "Yes, and it worked":
          return "Good. We'll look at what worked and build on it."
        case "I run my own ads":
          return "Then you'll like the numbers part of the call."
        case "No, never":
          return "No problem. I'll keep it simple and show you how it all fits together."
      }
      return undefined
    case "website":
      if (!a.website) return undefined
      return websiteShortcuts.includes(a.website)
        ? "That's fine. A website that wins jobs is part of the build."
        : `I'll have a look at it before ${callDayLabel(context.callStart) ?? "we speak"}.`
    case "agenda":
      return a.agenda ? "Got it. That's top of the list." : undefined
  }
}

export type PlanLine = {
  id: string
  label: string
  value?: string
  skipped?: boolean
}

/** The plan card, built up from whatever has been answered so far. */
export function planLines(a: PrecallAnswers, context: PrecallContext, questions: Question[]): PlanLine[] {
  const skipped = (id: QuestionId) => Boolean(a.skipped?.includes(id))
  const asks = new Set(questions.map((q) => q.id))
  const tradeName = findTrade(a.trade ?? context.tradeName)?.name ?? (a.trade || context.tradeName)
  const jobs = [...(a.jobs ?? []), ...(a.jobsOther ? [a.jobsOther] : [])]

  const lines: PlanLine[] = []
  if (asks.has("trade") || tradeName) {
    lines.push({ id: "trade", label: "Trade", value: tradeName, skipped: skipped("trade") })
  }
  lines.push(
    { id: "jobs", label: "Jobs to win", value: jobs.length ? listText(jobs) : undefined, skipped: skipped("jobs") },
    {
      id: "area",
      label: "Area",
      value: a.town ? `${a.town}${a.radius ? `, ${a.radius}` : ""}` : undefined,
      skipped: skipped("area"),
    },
    {
      id: "jobValue",
      label: "Typical job",
      value: typeof a.jobValue === "number" ? formatJobValue(a.jobValue) : undefined,
      skipped: skipped("jobValue"),
    },
    {
      id: "payback",
      label: "Pays back",
      value:
        typeof a.jobValue === "number"
          ? `${jobsToCoverFirstTerm(a.jobValue)} extra ${jobsToCoverFirstTerm(a.jobValue) === 1 ? "job covers" : "jobs cover"} ${MIN_TERM_MONTHS} months`
          : undefined,
      skipped: skipped("jobValue"),
    },
    {
      id: "capacity",
      label: "Target",
      value: a.capacity ? `${a.capacity} extra jobs a month` : undefined,
      skipped: skipped("capacity"),
    },
    {
      id: "sources",
      label: "Work comes from",
      value: a.sources?.length ? listText(a.sources) : undefined,
      skipped: skipped("sources"),
    },
    { id: "triedBefore", label: "Ads before", value: a.triedBefore, skipped: skipped("triedBefore") },
    { id: "website", label: "Website", value: a.website ?? context.website, skipped: skipped("website") }
  )
  if (a.agenda) lines.push({ id: "agenda", label: "You asked", value: a.agenda })
  return lines
}

export function callDate(iso?: string) {
  if (!iso) return undefined
  const date = new Date(iso)
  return Number.isNaN(date.getTime()) ? undefined : date
}

/** "Thursday", or "tomorrow" / "today" when it's that close. */
export function callDayLabel(iso?: string) {
  const date = callDate(iso)
  if (!date) return undefined
  const fmt = (d: Date) => d.toLocaleDateString("en-GB", { timeZone: "Europe/London" })
  const now = new Date()
  if (fmt(date) === fmt(now)) return "today"
  if (fmt(date) === fmt(new Date(now.getTime() + 86400000))) return "tomorrow"
  return date.toLocaleDateString("en-GB", { weekday: "long", timeZone: "Europe/London" })
}

export const STORAGE_PREFIX = "noble_precall_"
