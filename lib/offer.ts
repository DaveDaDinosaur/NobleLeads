export const SURVEY_PATH = "/survey"

export const BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/booking/qqSY7tgsOrKlt7yubct6"

export const CTA_LABEL = "Get your growth plan"
export const CTA_SUBTEXT = "2 minutes, then pick a time to talk"

export const SETUP_FEE = 1495
export const MONTHLY_FEE = 695
export const MIN_AD_SPEND = 500
export const MIN_TERM_MONTHS = 3
export const MIN_JOB_VALUE = 2000
export const GO_LIVE_WORKING_DAYS = 10

export function formatGBP(value: number) {
  return `£${Math.round(value).toLocaleString("en-GB")}`
}

export const MONTHLY_ALL_IN = MONTHLY_FEE + MIN_AD_SPEND
export const DEFAULT_MARGIN = 30
export const FIRST_TERM_COST = SETUP_FEE + MIN_TERM_MONTHS * MONTHLY_ALL_IN

export function jobProfit(jobValue: number, marginPct = DEFAULT_MARGIN) {
  if (!Number.isFinite(jobValue) || jobValue <= 0) return 0
  return (jobValue * Math.min(Math.max(marginPct, 0), 100)) / 100
}

/** Extra jobs whose profit covers setup, fee and minimum ad spend over the minimum term. */
export function jobsToCoverFirstTerm(jobValue: number, marginPct = DEFAULT_MARGIN) {
  const profit = jobProfit(jobValue, marginPct)
  return profit > 0 ? Math.ceil(FIRST_TERM_COST / profit) : 0
}

export type OfferGroup = {
  title: string
  items: string[]
}

export const buildSummary = [
  "Website built in-house: a new build, a refresh, or new pages added to what you have",
  "Google Ads set up for your area (Meta where search volume is low)",
  "Google Business Profile set up and optimised",
  "Call and conversion tracking",
  "Noble Leads Portal: missed call text-back, instant lead alerts, SMS and email follow-up, pipeline, reminders and review requests",
  "The Portal app set up on your phone, plus an onboarding course",
]

export const runSummary = [
  "Ads managed and optimised weekly, checked daily",
  "Website hosting, maintenance and updates, with new pages within fair use",
  "30 days of social posts a month from your own job photos and videos",
  "Follow-up and review automations kept running",
  "A monthly results report in plain English, with a video walkthrough",
  "A direct line to your account manager, with a same working day response",
]

export const buildDetail: OfferGroup[] = [
  {
    title: "Attract",
    items: [
      "Google Ads campaigns, keywords, negative keywords, ad copy and location targeting for your area",
      "Meta ads instead where local search volume is too low",
      "Google Business Profile set up or cleaned up, with services, areas, photos and your review link",
    ],
  },
  {
    title: "Website",
    items: [
      "Built by our in-house web team: a new build, a refresh of your current site, or new pages worked into what you have",
      "Clear services and areas, reviews, click-to-call and quote forms on every page",
      "SEO foundations: page structure, local schema markup, fast loading, mobile first",
      "Connected to the Portal and tracked from day one",
    ],
  },
  {
    title: "Capture",
    items: [
      "Landing pages for your core services, built to match what people search for",
      "Call and conversion tracking, so every call and form is counted",
      "A tracking phone number routed into the Portal",
    ],
  },
  {
    title: "Follow up",
    items: [
      "Noble Leads Portal set up for your business",
      "Missed call text-back",
      "Instant lead alerts to your phone",
      "SMS and email follow-up for every new enquiry",
      "A pipeline set up around how you quote",
      "Appointment reminders",
      "Automated review requests after each job",
    ],
  },
  {
    title: "Hand-over",
    items: [
      "The Portal app set up on your phone with notifications on",
      "Access to our onboarding course",
      "A short walkthrough of how leads reach you and what to do with each one",
    ],
  },
]

export const runDetail: OfferGroup[] = [
  {
    title: "Ads",
    items: [
      "Daily health check on spend, cost per lead, disapproved ads and tracking",
      "Weekly search term review, with wasted searches blocked",
      "Ongoing bid, budget and ad copy improvements",
      "New ads and tests when results flatten",
    ],
  },
  {
    title: "Website and landing pages",
    items: [
      "Hosting, maintenance, updates and security",
      "Content, photo and service updates on request",
      "Tweaks based on what converts, plus seasonal copy and offers",
      "New pages for new services or areas, within fair use",
    ],
  },
  {
    title: "Follow-up and reviews",
    items: [
      "Missed call text-back, follow-up and review requests kept running and checked",
      "Fixes when anything breaks or a lead goes unanswered",
    ],
  },
  {
    title: "Social posts",
    items: [
      "30 days of posts every month, made from your own job photos and videos",
      "We edit them, write the captions and schedule them",
      "You send us photos and videos of your work. That's it",
    ],
  },
  {
    title: "Reporting and support",
    items: [
      "Monthly report in plain English: leads, cost per lead, spend, what we changed and what's next",
      "A short video walking you through the report",
      "A direct line to your account manager, with a same working day response",
    ],
  },
]

export const addOns = [
  {
    title: "SEO",
    body: "Ongoing work to rank your site for the searches that matter in your area, on top of the SEO foundations every build gets.",
  },
  {
    title: "Second ad channel",
    body: "Run Meta alongside Google, or Google alongside Meta, managed the same way as your main channel.",
  },
  {
    title: "In-person content shoots",
    body: "We come to site and film your work, so your website, ads and social posts show the real thing.",
  },
]

export const terms = [
  {
    title: "Payment",
    body: `The setup fee and first month are paid up front. After that, the ${formatGBP(MONTHLY_FEE)} monthly fee is billed on the same date each month.`,
  },
  {
    title: "Minimum term",
    body: `${MIN_TERM_MONTHS} months, so the ads have time to learn. Rolling monthly after that, with 30 days' notice.`,
  },
  {
    title: "Ad spend",
    body: `Paid on top of the fee, around ${formatGBP(MIN_AD_SPEND)} a month minimum. Every pound goes on your ads, and you see where it went.`,
  },
  {
    title: "No VAT",
    body: "Noble Leads Ltd is not VAT registered, so there's no VAT on top of our prices.",
  },
  {
    title: "Ownership",
    body: "Your website content, Google Business Profile and lead data are yours.",
  },
  {
    title: "What we don't promise",
    body: "A set number of leads or jobs. We promise the system, the work and honest numbers every month.",
  },
]

export const leavingTerms =
  "You keep your website. Stay on our hosting for a small hosting-only fee, or we send you the site files to host wherever you like. That's own, don't rent, in practice."

export type TimelineStep = {
  day: string
  title: string
  body: string
}

export const timeline: TimelineStep[] = [
  {
    day: "Day 1",
    title: "Payment lands",
    body: "Work starts the same day. Your Portal account is set up, your welcome message and kickoff form are sent, and your kickoff call is booked.",
  },
  {
    day: "Day 1 to 3",
    title: "You fill in the kickoff form",
    body: "Logo, photos, services, areas, average job value, insurance and accreditations, Google Business Profile access and any existing ad account.",
  },
  {
    day: "Day 2 to 3",
    title: "Kickoff call",
    body: "30 minutes. We confirm your services, areas, the jobs you want more of and what a good lead looks like.",
  },
  {
    day: "Day 3 to 7",
    title: "We build",
    body: "Website or landing pages, ad campaigns, tracking, Google Business Profile and your Portal automations.",
  },
  {
    day: "Day 7 to 9",
    title: "We test",
    body: "Test calls, test forms, missed call text-back and lead alerts, checked end to end before anything goes live.",
  },
  {
    day: "Day 8 to 10",
    title: "Go live",
    body: "Ads switched on, the Portal app set up on your phone, and your onboarding course access sent.",
  },
  {
    day: "Day 14",
    title: "First check-in",
    body: "Early numbers reviewed, search terms cleaned up and the first tweaks made.",
  },
]

export const kickoffAssets = [
  "Your logo",
  "Photos and videos of your work",
  "The services you offer and the areas you cover",
  "Your average job value",
  "Insurance and accreditations",
  "Access to your Google Business Profile",
  "Your existing ad account, if you have one",
]

export type FAQ = { question: string; answer: string }

export const coreFAQs: FAQ[] = [
  {
    question: "What budget do I need?",
    answer: `${formatGBP(SETUP_FEE)} setup, then ${formatGBP(MONTHLY_FEE)} a month. On top of that you fund your ads, around ${formatGBP(MIN_AD_SPEND)} a month minimum. No VAT. So once you're live, plan for about ${formatGBP(MONTHLY_FEE + MIN_AD_SPEND)} a month all in.`,
  },
  {
    question: "How fast does it go live?",
    answer: `Work starts the day you pay. We aim to be live within ${GO_LIVE_WORKING_DAYS} working days of getting your logo, photos and access. Missing assets are the main thing that slows a launch down, so the quicker you send them, the quicker you're live.`,
  },
  {
    question: "What do I need to provide?",
    answer:
      "Your logo, photos of your work, your services and areas, your average job value, insurance and accreditations, access to your Google Business Profile and any existing ad account. It all goes on one kickoff form. After launch, you just keep sending us job photos and videos for your social posts.",
  },
  {
    question: "How long is the contract?",
    answer: `${MIN_TERM_MONTHS} months minimum, then rolling monthly with 30 days' notice. Ads take a few weeks to learn what works in your area. Three months is how long it takes to do it properly.`,
  },
  {
    question: "What happens if I leave?",
    answer:
      "You keep your website. You can stay on our hosting for a small hosting-only fee, or we send you the site files to host wherever you like. Your Google Business Profile and lead data stay yours too.",
  },
  {
    question: "Do I own the website?",
    answer:
      "Yes. Your website, your Google Business Profile and your lead data are yours. That's the whole point. Directories rent you leads. We build you something you keep.",
  },
  {
    question: "How is this different from Checkatrade or Bark?",
    answer:
      "Directories sell the same lead to several firms, and you pay every month whether you win the work or not. Stop paying and the leads stop, with nothing to show for it. We build your own system. Enquiries come to you and nobody else, and you own the website and the data.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We work with trades across the UK. Your ads are set to the area you actually want to work in, so you're not paying for enquiries you'd never travel to.",
  },
  {
    question: "Will I need to use an app?",
    answer:
      "Yes, the Portal app on your phone. It's how leads reach you: alerts, texts and your pipeline in one place. We set it up on your phone for you, and there's a short onboarding course. If you can use WhatsApp, you can use the Portal.",
  },
  {
    question: "Can you guarantee a number of leads?",
    answer:
      "No. Nobody honest can guarantee jobs. We promise the system, the work, and every number in front of you each month: leads, cost per lead, spend, and what we changed.",
  },
]
