import { formatGBP, jobsToCoverFirstTerm, MIN_TERM_MONTHS } from "@/lib/offer"
import { jobValueExample } from "@/lib/survey"
import { trades, type Trade } from "@/lib/trades"

/** What the page knows about the lead before they answer anything. Every field can be missing. */
export type PrecallContext = {
  contactId?: string
  firstName?: string
  businessName?: string
  tradeName?: string
  /** Their base, from the survey's Area field or the contact's city. */
  town?: string
  /** The survey's "Average job value" band, e.g. "£2,000 to £5,000". */
  jobValueBand?: string
  /** The survey's "Biggest frustration" answer. */
  frustration?: string
  /** They finished the website survey, so they've already answered the basics. */
  fromSurvey?: boolean
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
  /** How their own ads or an agency went, if they use either. */
  triedNote?: string
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

export const ADS_SOURCE = "Running my own ads"
export const AGENCY_SOURCE = "An agency, now or before"

export const sourceOptions = [
  "Word of mouth",
  "Repeat customers",
  "Checkatrade, MyBuilder or Bark",
  "My own website",
  "Social media",
  ADS_SOURCE,
  AGENCY_SOURCE,
]

/** Ads or an agency get a short "how did that go?" follow-up. */
export function usesPaidHelp(sources?: string[]) {
  return Boolean(sources?.some((s) => s === ADS_SOURCE || s === AGENCY_SOURCE))
}

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

/**
 * The questions in order. Anything we already know, from the survey or the GHL contact, isn't asked again.
 * Survey leads get 4 or 5 questions, cold-call leads up to 7.
 */
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
    context.town
      ? {
          id: "area",
          question: `How far from ${context.town} will you travel?`,
          hint: "For the right job. Your ads only show inside this area.",
        }
      : {
          id: "area",
          question: "Where do you want them?",
          hint: "Your base, and how far you'll travel for the right job.",
        }
  )
  if (!context.jobValueBand) {
    list.push({
      id: "jobValue",
      question: "What's a typical job worth?",
      hint: "A rough figure is perfect. Slide to the nearest.",
    })
  }
  list.push(
    {
      id: "capacity",
      question: "How many more jobs a month could you take on?",
      hint: "This becomes the target the plan works back from.",
    },
    {
      id: "sources",
      question: "Where does your work come from now?",
      hint: "Pick all that apply, including anything you've tried.",
    },
    {
      id: "agenda",
      question: "Anything you want to make sure we cover?",
      hint: "Questions, worries, anything at all. Totally optional.",
    }
  )
  return list
}

/** The job value to do the payback maths with: their slider answer, or a typical figure for their survey band. */
export function effectiveJobValue(a: PrecallAnswers, context: PrecallContext) {
  if (typeof a.jobValue === "number") return a.jobValue
  if (!context.jobValueBand) return undefined
  return jobValueExample[context.jobValueBand] ?? 1500
}

export function isAnswered(id: QuestionId, a: PrecallAnswers) {
  switch (id) {
    case "trade":
      return Boolean(a.trade)
    case "jobs":
      return Boolean(a.jobs?.length || a.jobsOther)
    case "area":
      return Boolean(a.town || a.radius)
    case "jobValue":
      return typeof a.jobValue === "number"
    case "capacity":
      return Boolean(a.capacity)
    case "sources":
      return Boolean(a.sources?.length)
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
    case "area": {
      const town = a.town ?? context.town
      return town
        ? `${town}${a.radius ? ` and ${a.radius} around` : ""} it is. You never pay for clicks from outside it.`
        : undefined
    }
    case "jobValue": {
      if (typeof a.jobValue !== "number") return undefined
      const jobs = jobsToCoverFirstTerm(a.jobValue)
      return `At ${formatJobValue(a.jobValue)} a job, about ${jobs} extra ${jobs === 1 ? "job covers" : "jobs cover"} your first ${MIN_TERM_MONTHS} months.`
    }
    case "capacity":
      return a.capacity ? "That's the target, then. Everything on the call works back from it." : undefined
    case "sources": {
      const s = a.sources ?? []
      if (s.includes(AGENCY_SOURCE)) {
        return "Thanks for being straight. I'll show you what we'd do differently, and you can judge for yourself."
      }
      if (s.includes(ADS_SOURCE)) return "Then you'll like the numbers part of the call."
      if (s.includes("Checkatrade, MyBuilder or Bark")) {
        return "Then you know what shared leads cost. Everything we build is yours to keep."
      }
      if (s.includes("Word of mouth") || s.includes("Repeat customers")) {
        return "That means you do good work. Now more people just need to find you."
      }
      return s.length ? "Good to know. We'll build on what's already working." : undefined
    }
    case "agenda":
      return a.agenda ? "Got it. That's top of the list." : undefined
  }
}

export type PlanLine = {
  id: string
  label: string
  value?: string
  skipped?: boolean
  /** Filled in from what they already told us, before this page. */
  known?: boolean
}

function payback(value: number) {
  const jobs = jobsToCoverFirstTerm(value)
  return `${jobs} extra ${jobs === 1 ? "job covers" : "jobs cover"} ${MIN_TERM_MONTHS} months`
}

/** The plan card, built up from what we knew already plus whatever has been answered so far. */
export function planLines(a: PrecallAnswers, context: PrecallContext, questions: Question[]): PlanLine[] {
  const skipped = (id: QuestionId) => Boolean(a.skipped?.includes(id))
  const asks = new Set(questions.map((q) => q.id))
  const knownTrade = findTrade(context.tradeName)?.name
  const tradeName = knownTrade ?? findTrade(a.trade)?.name ?? a.trade
  const jobs = [...(a.jobs ?? []), ...(a.jobsOther ? [a.jobsOther] : [])]
  const town = a.town ?? context.town
  const jobValue = effectiveJobValue(a, context)
  const bandOnly = typeof a.jobValue !== "number" && Boolean(context.jobValueBand)

  const lines: PlanLine[] = [
    { id: "trade", label: "Trade", value: tradeName, skipped: skipped("trade"), known: Boolean(knownTrade) },
    { id: "jobs", label: "Jobs to win", value: jobs.length ? listText(jobs) : undefined, skipped: skipped("jobs") },
    {
      id: "area",
      label: "Area",
      value: town ? `${town}${a.radius ? `, ${a.radius}` : ""}` : undefined,
      skipped: skipped("area"),
      known: Boolean(context.town && !a.radius && !a.town),
    },
    {
      id: "jobValue",
      label: "Typical job",
      value: bandOnly ? context.jobValueBand : typeof a.jobValue === "number" ? formatJobValue(a.jobValue) : undefined,
      skipped: skipped("jobValue"),
      known: bandOnly,
    },
    {
      id: "payback",
      label: "Pays back",
      value: typeof jobValue === "number" ? `${bandOnly ? "About " : ""}${payback(jobValue)}` : undefined,
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
  ]
  if (context.frustration && context.frustration !== "Something else") {
    lines.push({ id: "frustration", label: "To fix", value: context.frustration, known: true })
  }
  if (a.agenda) lines.push({ id: "agenda", label: "You asked", value: a.agenda })
  // Only show the trade row when there's something to put in it or we're asking.
  return asks.has("trade") || tradeName ? lines : lines.slice(1)
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
