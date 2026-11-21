import { formatGBP, jobsToCoverFirstTerm, MIN_TERM_MONTHS } from "@/lib/offer"
import { jobValueExample, jobValueOptions } from "@/lib/survey"
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
  /** Answers already saved on the contact (by this page before, or a rep). Those questions are skipped. */
  saved?: PrecallAnswers
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
  /** Set when they correct the business name on the check screen. */
  businessName?: string
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
  short?: string
}

/** Labels for the folded rows of earlier answers. */
const shortLabels: Record<QuestionId, string> = {
  trade: "Trade",
  jobs: "Jobs",
  area: "Area",
  jobValue: "Typical job",
  capacity: "Extra jobs",
  sources: "Work from",
  agenda: "To cover",
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

/** Other ways people (and messy CRM records) name each trade. Matched as whole words after cleaning. */
const tradeAliases: Record<string, string[]> = {
  "fire-doors": ["fire door", "fire doors", "fire door installer", "fire door installers", "fire safety doors"],
  "ewi-render": [
    "ewi",
    "render",
    "rendering",
    "renderer",
    "renderers",
    "external wall insulation",
    "thermal render",
    "k rend",
    "wall insulation",
  ],
  roofers: ["roofer", "roofers", "roofing", "roof", "roofs", "flat roofing", "flat roofs", "roofing contractor", "slater"],
  "refurbishments-extensions": [
    "builder",
    "builders",
    "building",
    "extension",
    "extensions",
    "refurbishment",
    "refurbishments",
    "refurb",
    "refurbs",
    "renovation",
    "renovations",
    "general builder",
  ],
  "loft-conversions": ["loft", "lofts", "loft conversion", "loft conversions", "dormer", "dormers"],
  "kitchen-fitters": ["kitchen", "kitchens", "kitchen fitter", "kitchen fitters", "kitchen fitting", "kitchen installer"],
  "driveway-paving": ["driveway", "driveways", "paving", "block paving", "resin driveway", "resin driveways", "patio", "patios"],
  "solar-heat-pumps": ["solar", "solar panels", "heat pump", "heat pumps", "air source", "renewables", "solar pv"],
  "stairlifts-mobility": ["stairlift", "stairlifts", "stair lift", "stair lifts", "mobility", "mobility aids"],
}

const fillerWords = /\b(ltd|limited|llp|plc|uk|the|services?|specialists?|contractors?|company|co|solutions|group|installers?|installations?)\b/g

function normalise(text: string) {
  return ` ${text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z\s]/g, " ")
    .replace(fillerWords, " ")
    .replace(/\s+/g, " ")
    .trim()} `
}

function editDistance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const temp = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1))
      prev = temp
    }
  }
  return row[b.length]
}

/**
 * Finds one of our trades from whatever was typed or saved: "Roofer", "rofing", "Smith Roofing Ltd" all find Roofing.
 * Niche trades we don't have a page for ("Thatcher") return undefined and are shown as typed.
 */
export function findTrade(name?: string): Trade | undefined {
  if (!name?.trim()) return undefined
  const raw = name.trim().toLowerCase()
  const exact = trades.find((trade) => trade.name.toLowerCase() === raw || trade.slug === raw)
  if (exact) return exact

  const text = normalise(name)
  if (!text.trim()) return undefined
  const phrases = trades.flatMap((trade) =>
    [trade.name, ...(tradeAliases[trade.slug] ?? [])].map((phrase) => ({ trade, phrase: normalise(phrase).trim() }))
  )
  // Whole-word match, longest phrase first so "flat roofing" beats "roof".
  const contained = phrases
    .filter(({ phrase }) => phrase && text.includes(` ${phrase} `))
    .sort((a, b) => b.phrase.length - a.phrase.length)[0]
  if (contained) return contained.trade

  // Typos: compare each word, and the whole thing, allowing about one slip in five letters.
  const words = [text.trim(), ...text.trim().split(" ")]
  let best: { trade: Trade; distance: number } | undefined
  for (const { trade, phrase } of phrases) {
    if (phrase.length < 4) continue
    for (const word of words) {
      const distance = editDistance(word, phrase)
      if (distance <= Math.max(1, Math.floor(phrase.length / 5)) && (!best || distance < best.distance)) {
        best = { trade, distance }
      }
    }
  }
  return best?.trade
}

/** What to call their trade on screen: our name for it, or what they typed, tidied up. */
export function tradeLabel(name?: string) {
  if (!name?.trim()) return undefined
  return findTrade(name)?.name ?? titleCase(name.trim().slice(0, 60))
}

function titleCase(text: string) {
  if (text !== text.toLowerCase() && text !== text.toUpperCase()) return text
  return text.toLowerCase().replace(/\b([a-z])/g, (letter) => letter.toUpperCase())
}

const businessish =
  /\b(ltd|limited|llp|plc|services?|roofing|roofers?|building|builders?|construction|contractors?|solutions|group|company|sons|electrical|plumbing|heating|kitchens?|lofts?|paving|driveways?|render(ing)?|solar|homes?|propert(y|ies)|maintenance|installations?|uk)\b|[&@\d/]/i

/**
 * A first name we're happy to greet them with, or nothing. CRMs get messy: business names in the
 * first name field, all caps, "Mr", emails. A plain "Thanks." beats "Thanks, SMITH ROOFING LTD."
 */
export function cleanFirstName(raw?: string, business?: string) {
  const text = raw?.trim().replace(/^(mr|mrs|ms|miss|dr)\.?\s+/i, "")
  if (!text) return undefined
  if (business && text.toLowerCase() === business.trim().toLowerCase()) return undefined
  if (businessish.test(text) || text.split(/\s+/).length > 3) return undefined
  const first = text.split(/\s+/)[0]
  if (!/^[a-z][a-z'-]{1,19}$/i.test(first)) return undefined
  return first.toLowerCase().replace(/(^|[-'])([a-z])/g, (_, mark: string, letter: string) => mark + letter.toUpperCase())
}

/** The business name, tidied, or nothing if it's clearly not one (an email, a phone number). */
export function cleanBusinessName(raw?: string) {
  const text = raw?.trim().replace(/\s+/g, " ")
  if (!text || text.length < 2 || /@|^\+?[\d\s()-]{7,}$/.test(text)) return undefined
  return titleCase(text.slice(0, 60))
}

/** A town to show. Takes the town out of a full address and leaves postcodes as they are. */
export function cleanTown(raw?: string) {
  const text = raw?.trim().replace(/\s+/g, " ")
  if (!text) return undefined
  const parts = text.split(",").map((part) => part.trim()).filter(Boolean)
  const postcode = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i
  const town = [...parts].reverse().find((part) => /[a-z]{3}/i.test(part) && !postcode.test(part) && !/\d/.test(part))
  if (!town && postcode.test(parts[0])) return parts[0].toUpperCase()
  return titleCase((town ?? parts[0]).slice(0, 40))
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
  const saved = context.saved ?? {}
  // A niche trade we don't recognise still counts as known. They can correct it on the check screen.
  if (!context.tradeName?.trim()) {
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
    .filter((q) => !isAnswered(q.id, saved))
    .map((q) => ({ ...q, short: shortLabels[q.id] }))
}

/** The job value field holds either a survey band ("£2,000 to £5,000") or this page's figure ("£3,500"). */
export function readJobValue(text?: string): { band?: string; value?: number } {
  if (!text) return {}
  const band = jobValueOptions.find((option) => option.value.toLowerCase() === text.trim().toLowerCase())
  if (band) return { band: band.value }
  const value = Number(text.replace(/[^\d.]/g, ""))
  return Number.isFinite(value) && value > 0 ? { value: Math.round(value) } : {}
}

/** Turns this page's saved custom field text back into answers, so a returning lead isn't asked twice. */
export function readSavedAnswers(field: (name: string) => string | undefined): PrecallAnswers {
  const saved: PrecallAnswers = {}
  const jobs = field("jobs wanted")
  if (jobs) saved.jobs = jobs.split(/,\s*/).filter(Boolean)
  const radius = field("service radius")
  if (radius) saved.radius = radius
  const { value } = readJobValue(field("typical job value"))
  if (value) saved.jobValue = value
  const capacity = field("extra jobs a month")
  if (capacity) saved.capacity = capacity
  const sources = field("lead sources")
  if (sources) {
    const [list, how] = sources.split(". How it went: ")
    // Options can contain commas ("Checkatrade, MyBuilder or Bark"), so match them whole.
    const picked = sourceOptions.filter((option) => list.includes(option))
    saved.sources = picked.length ? picked : [list]
    if (how) saved.triedNote = how
  }
  const agenda = field("call agenda")
  if (agenda) saved.agenda = agenda
  return saved
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

/** "on Thursday", "tomorrow", or "on the call". For George's lines. */
export function onTheCall(context: PrecallContext) {
  const day = callDayLabel(context.callStart)
  if (!day) return "on the call"
  return day === "today" || day === "tomorrow" ? `on the call ${day}` : `on ${day}`
}

/**
 * A one-line response shown after each answer, written as George. Each one says what the answer
 * gets them on the call, so every tap feels like it's building something for them.
 */
export function reactionFor(id: QuestionId, a: PrecallAnswers, context: PrecallContext): string | undefined {
  const when = onTheCall(context)
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
        ? `Noted. ${when.charAt(0).toUpperCase() + when.slice(1)} I'll show you how many people near you search for ${midSentence(first)} every month.`
        : undefined
    }
    case "area": {
      const town = a.town ?? context.town
      return town
        ? `${town}${a.radius ? `, ${a.radius}` : ""}. I'll look at who's winning work there before we speak.`
        : undefined
    }
    case "jobValue": {
      if (typeof a.jobValue !== "number") return undefined
      const jobs = jobsToCoverFirstTerm(a.jobValue)
      return `At ${formatJobValue(a.jobValue)} a job, about ${jobs} extra ${jobs === 1 ? "job covers" : "jobs cover"} your first ${MIN_TERM_MONTHS} months. I'll show you the real numbers ${when}.`
    }
    case "capacity":
      return a.capacity ? `That's the target. I'll work out what it takes to hit it, and what it would cost.` : undefined
    case "sources": {
      const s = a.sources ?? []
      if (s.includes(AGENCY_SOURCE)) {
        return "Thanks for being straight. I'll show you what we'd do differently, and you can judge for yourself."
      }
      if (s.includes(ADS_SOURCE)) return `Then you'll like the numbers part. Bring your questions ${when}.`
      if (s.includes("Checkatrade, MyBuilder or Bark")) {
        return "So you know what it's like paying for leads other firms get too. With your own ads, every enquiry comes to you alone."
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

/** What they'll walk away with from the call. Personalised as answers come in. */
export function callDeliverables(a: PrecallAnswers, context: PrecallContext) {
  const town = a.town ?? context.town
  const jobs = [...(a.jobs ?? []), ...(a.jobsOther ? [a.jobsOther] : [])]
  const trade = findTrade(a.trade ?? context.tradeName)
  const value = effectiveJobValue(a, context)
  const what = jobs[0] ? midSentence(jobs[0]) : trade ? `${trade.plural.split(" and ")[0]} work` : "your work"
  return [
    {
      id: "searches",
      title: "Your local search numbers",
      body: `How many people${town ? ` around ${town}` : " near you"} search for ${what} each month, and what each click costs.`,
      ready: Boolean(jobs.length || town),
    },
    {
      id: "competitors",
      title: "Who you're up against",
      body: `Who's winning those jobs${town ? ` in ${town}` : ""} right now, and the gaps you could take.`,
      ready: Boolean(town || a.radius),
    },
    {
      id: "numbers",
      title: "Your numbers",
      body:
        typeof value === "number"
          ? `What it would cost, and why about ${jobsToCoverFirstTerm(value)} extra jobs pays back your first ${MIN_TERM_MONTHS} months.`
          : "What it would cost, and how many jobs it takes to pay for itself.",
      ready: typeof value === "number",
    },
    {
      id: "plan",
      title: "A plan built for you",
      body: a.capacity
        ? `Built to bring in ${a.capacity} extra jobs a month. Yours to keep, whatever you decide.`
        : "The ads, the website and the follow-up, built around your business. Yours to keep, whatever you decide.",
      ready: Boolean(a.capacity || a.sources?.length),
    },
  ]
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
  const knownTrade = tradeLabel(context.tradeName)
  const tradeName = knownTrade ?? tradeLabel(a.trade)
  const jobs = [...(a.jobs ?? []), ...(a.jobsOther ? [a.jobsOther] : [])]
  const town = a.town ?? context.town
  const jobValue = effectiveJobValue(a, context)
  const bandOnly = typeof a.jobValue !== "number" && Boolean(context.jobValueBand)
  // Answered before this visit, so not asked again.
  const fromBefore = (id: QuestionId) => !asks.has(id) && isAnswered(id, context.saved ?? {})

  const lines: PlanLine[] = [
    { id: "trade", label: "Trade", value: tradeName, skipped: skipped("trade"), known: Boolean(knownTrade) },
    { id: "jobs", label: "Jobs to win", value: jobs.length ? listText(jobs) : undefined, skipped: skipped("jobs"), known: fromBefore("jobs") },
    {
      id: "area",
      label: "Area",
      value: town ? `${town}${a.radius ? `, ${a.radius}` : ""}` : undefined,
      skipped: skipped("area"),
      known: Boolean(context.town && !a.radius && !a.town) || fromBefore("area"),
    },
    {
      id: "jobValue",
      label: "Typical job",
      value: bandOnly ? context.jobValueBand : typeof a.jobValue === "number" ? formatJobValue(a.jobValue) : undefined,
      skipped: skipped("jobValue"),
      known: bandOnly || fromBefore("jobValue"),
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
      known: fromBefore("capacity"),
    },
    {
      id: "sources",
      label: "Work comes from",
      value: a.sources?.length ? listText(a.sources) : undefined,
      skipped: skipped("sources"),
      known: fromBefore("sources"),
    },
  ]
  if (context.frustration && context.frustration !== "Something else") {
    lines.push({ id: "frustration", label: "To fix", value: context.frustration, known: true })
  }
  if (a.agenda) lines.push({ id: "agenda", label: "You asked", value: a.agenda, known: fromBefore("agenda") })
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
