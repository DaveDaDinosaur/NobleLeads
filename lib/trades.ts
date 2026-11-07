import {
  Accessibility,
  BrickWall,
  Building2,
  Car,
  CookingPot,
  DoorClosed,
  HardHat,
  House,
  Sun,
  type LucideIcon,
} from "lucide-react"

import type { FAQ } from "@/lib/offer"

export type TradePain = { title: string; body: string }

export type Trade = {
  slug: string
  name: string
  plural: string
  icon: LucideIcon
  benefit: string
  typicalJob: { label: string; value: number }
  jobRange: string
  headline: string
  intro: string
  pains: TradePain[]
  jobs: string[]
  searches: string[]
  faqs: FAQ[]
  caseStudy?: { href: string; name: string; line: string }
  metaTitle: string
  metaDescription: string
}

export const trades: Trade[] = [
  {
    slug: "fire-doors",
    name: "Fire Doors",
    plural: "fire door installers",
    icon: DoorClosed,
    benefit: "Commercial and residential fire door work, enquiring direct",
    typicalJob: { label: "a fire door job", value: 4000 },
    jobRange: "£2k for a small residential job, far more for a block or commercial contract",
    headline: "Fire door leads you own, not ones you share",
    intro:
      "Landlords, managing agents and businesses search for fire door installers every day. Most of that work goes to whoever shows up first and calls back fastest. We make sure that's you.",
    pains: [
      {
        title: "Work comes from the same few contacts",
        body: "Good when it flows. When a main contractor goes quiet, so does your diary.",
      },
      {
        title: "Commercial buyers check you out first",
        body: "Facilities managers want to see certification, projects and insurance before they ring. A thin website loses the job before you know about it.",
      },
      {
        title: "Enquiries land while you're hanging doors",
        body: "By the time you call back at 6pm, they've booked someone else.",
      },
    ],
    jobs: [
      "Fire door installation and replacement",
      "Fire door surveys and inspections",
      "Remedial work after fire risk assessments",
      "HMO, block and commercial contracts",
    ],
    searches: [
      "fire door installers near me",
      "fire door inspection [your town]",
      "fire door replacement for flats",
      "commercial fire doors [your county]",
    ],
    faqs: [
      {
        question: "Can you target commercial fire door work, not just homeowners?",
        answer:
          "Yes. We split campaigns by the work you want, so commercial, HMO and block searches get their own ads and landing pages. You tell us on the kickoff call which jobs are worth the most to you.",
      },
      {
        question: "Do you show certification on the website?",
        answer:
          "Yes. Accreditations, insurance and project photos go front and centre. For fire doors, that's often what decides who gets the call.",
      },
    ],
    caseStudy: {
      href: "/case-studies/focus-refurbishment",
      name: "Focus Refurbishment",
      line: "Fire door campaign running at a 9.49% click-through rate and around £21 per website lead.",
    },
    metaTitle: "Fire Door Leads for UK Installers",
    metaDescription:
      "Your own fire door lead system: a website, Google Ads and automatic follow-up, built in-house by NobleLeads. Every enquiry answered and followed up.",
  },
  {
    slug: "ewi-render",
    name: "EWI & Render",
    plural: "EWI and render specialists",
    icon: BrickWall,
    benefit: "External wall insulation and render installs worth £10k+",
    typicalJob: { label: "an EWI install", value: 10000 },
    jobRange: "£3k to £8k for a render job, £10k and up for external wall insulation",
    headline: "EWI and render leads that come straight to you",
    intro:
      "External wall insulation and render are big, visual decisions. Homeowners research for weeks before they pick a firm. We put your work in front of them while they're still choosing.",
    pains: [
      {
        title: "Nobody can find you online",
        body: "Plenty of the best installers still run on word of mouth. Homeowners searching for EWI find someone else.",
      },
      {
        title: "Long decisions, lost leads",
        body: "A homeowner asks for a quote, thinks about it for a month, and nobody follows up. The job goes to whoever stayed in touch.",
      },
      {
        title: "Your best work isn't being shown",
        body: "Render sells on before and after photos. If those are stuck on your phone, they aren't winning you work.",
      },
    ],
    jobs: [
      "External wall insulation",
      "Silicone and monocouche render",
      "Render repairs and re-coats",
      "Commercial and multi-unit render work",
    ],
    searches: [
      "external wall insulation [your area]",
      "render specialists near me",
      "silicone render cost",
      "EWI installers [your county]",
    ],
    faqs: [
      {
        question: "Can you show before and after photos on my site?",
        answer:
          "Yes. We build drag-to-reveal before and after sliders from your own project photos. For render and EWI, it's the most persuasive thing on the page.",
      },
      {
        question: "EWI enquiries take months to decide. Does follow-up help?",
        answer:
          "That's exactly where it helps. Every quote gets followed up by text and email automatically, so you stay in front of them while they decide.",
      },
    ],
    caseStudy: {
      href: "/case-studies/thermal-render-specialists",
      name: "Thermal Render Specialists",
      line: "From no website at all to the top three for dozens of render searches within weeks of launch.",
    },
    metaTitle: "EWI and Render Leads for UK Specialists",
    metaDescription:
      "External wall insulation and render leads you own. A website, Google Ads and automatic follow-up built in-house by NobleLeads. Enquiries that come to you, not five firms.",
  },
  {
    slug: "roofers",
    name: "Roofing",
    plural: "roofers",
    icon: HardHat,
    benefit: "Re-roofs and bigger repairs, not just call-outs",
    typicalJob: { label: "a re-roof", value: 6000 },
    jobRange: "£4k to £10k+ for a re-roof, more for flat roofs and commercial work",
    headline: "Roofing leads that don't depend on the weather",
    intro:
      "Storms fill the diary. Dry spells empty it. We build you a steady flow of roofing enquiries from people searching in your area, so you choose the jobs instead of waiting for rain.",
    pains: [
      {
        title: "Feast or famine",
        body: "Flat out after a storm, quiet for weeks after. Hard to plan, harder to keep a team.",
      },
      {
        title: "Paying for shared leads",
        body: "Directories send the same job to several roofers. You end up competing on price before they've seen your work.",
      },
      {
        title: "Calls missed on the roof",
        body: "You can't answer the phone halfway up a ladder. The homeowner rings the next number.",
      },
    ],
    jobs: [
      "Full re-roofs",
      "Flat roofs and GRP",
      "Chimney and leadwork",
      "Commercial roofing",
    ],
    searches: [
      "roofers near me",
      "new roof cost [your town]",
      "flat roof replacement [your area]",
      "roof repair [your county]",
    ],
    faqs: [
      {
        question: "Can you focus the ads on re-roofs rather than small repairs?",
        answer:
          "Yes. We build campaigns around the jobs you want, and block searches for work you don't. You tell us on the kickoff call what a good roofing lead looks like.",
      },
      {
        question: "What about storm season?",
        answer:
          "We can push spend up when demand spikes and pull it back when you're full. You're in control of the tap.",
      },
    ],
    metaTitle: "Roofing Leads Without Checkatrade or Bark",
    metaDescription:
      "Roofing leads you own. A website, Google Ads and automatic follow-up built in-house by NobleLeads, so more enquiries turn into booked re-roofs.",
  },
  {
    slug: "refurbishments-extensions",
    name: "Refurbishments & Extensions",
    plural: "refurbishment and extension builders",
    icon: Building2,
    benefit: "Extensions and full refurbs, the jobs worth quoting",
    typicalJob: { label: "an extension", value: 30000 },
    jobRange: "£15k+ for a full refurb, £30k and up for most extensions",
    headline: "Extension and refurb enquiries, without the tyre-kickers",
    intro:
      "Extensions and refurbs are the jobs that keep a team busy for weeks. We bring you enquiries from homeowners and businesses planning that work in your area, and follow every one up automatically.",
    pains: [
      {
        title: "Referrals dry up between projects",
        body: "You finish a big job and the next one isn't lined up. That gap costs more than any marketing.",
      },
      {
        title: "Too many small jobs, not enough big ones",
        body: "Directories send you odd jobs and price shoppers. The extension work goes elsewhere.",
      },
      {
        title: "Quotes go out and go quiet",
        body: "You spend an evening pricing a job, then never chase it. Nobody else does either, until one firm does.",
      },
    ],
    jobs: [
      "Single and double storey extensions",
      "Full house refurbishments",
      "Commercial refurbishments",
      "Kitchen and bathroom remodels as part of a wider job",
    ],
    searches: [
      "house extension builders [your town]",
      "home refurbishment company near me",
      "extension cost [your area]",
      "commercial refurbishment [your county]",
    ],
    faqs: [
      {
        question: "Extensions take months to decide. Is it worth it?",
        answer:
          "One extension can cover years of the fee, so yes. And because every quote is followed up automatically, you stay in touch while they make up their mind.",
      },
      {
        question: "Can you keep out the small jobs?",
        answer:
          "Mostly. We target searches for the work you want and block the ones you don't. Your website and quote form also make clear what size of job you take on.",
      },
    ],
    caseStudy: {
      href: "/case-studies/focus-refurbishment",
      name: "Focus Refurbishment",
      line: "From referrals and a three-page website to 24 leads in a fortnight, 14 by web and 10 by phone.",
    },
    metaTitle: "Leads for Refurbishment and Extension Builders",
    metaDescription:
      "Extension and refurbishment leads you own. Website, Google Ads and automatic follow-up built in-house by NobleLeads. More enquiries, more booked jobs, all yours.",
  },
  {
    slug: "loft-conversions",
    name: "Loft Conversions",
    plural: "loft conversion companies",
    icon: House,
    benefit: "Loft conversion enquiries from homeowners planning now",
    typicalJob: { label: "a loft conversion", value: 40000 },
    jobRange: "£25k for a simple Velux conversion, £40k to £60k+ for a dormer or mansard",
    headline: "Loft conversion leads you own",
    intro:
      "A loft conversion is one of the biggest jobs a homeowner will ever buy. They research hard, compare firms and want to see real conversions. We make sure yours are the ones they see.",
    pains: [
      {
        title: "Big jobs, long gaps",
        body: "One conversion can take weeks. If the next one isn't lined up, the team sits idle.",
      },
      {
        title: "Homeowners want proof",
        body: "Without photos of finished lofts, plans and reviews on your site, they pick the firm that has them.",
      },
      {
        title: "Long sales cycles",
        body: "They enquire, then go quiet for a month while they sort finance or planning. Without follow-up, you're forgotten.",
      },
    ],
    jobs: [
      "Dormer loft conversions",
      "Hip to gable and mansard conversions",
      "Velux and rooflight conversions",
      "Design and build packages",
    ],
    searches: [
      "loft conversion [your town]",
      "dormer loft conversion cost",
      "loft conversion companies near me",
      "mansard conversion [your area]",
    ],
    faqs: [
      {
        question: "Is Google Ads worth it for loft conversions?",
        answer:
          "When one job is worth £40k, the profit on a single booked conversion covers months of the fee and ad spend. The maths works with very few jobs.",
      },
      {
        question: "Can you show my past conversions?",
        answer:
          "Yes. Project galleries, before and afters and reviews are built into the site. For a job this size, homeowners look closely.",
      },
    ],
    metaTitle: "Loft Conversion Leads for UK Builders",
    metaDescription:
      "Loft conversion leads you own: a website, Google Ads and automatic follow-up built in-house by NobleLeads. One conversion covers years of the fee.",
  },
  {
    slug: "kitchen-fitters",
    name: "Kitchens",
    plural: "kitchen fitters and kitchen companies",
    icon: CookingPot,
    benefit: "Full kitchen installs, not just worktop swaps",
    typicalJob: { label: "a fitted kitchen", value: 10000 },
    jobRange: "£6k to £20k+ for supply and fit",
    headline: "Kitchen leads that come to you, not the big showrooms",
    intro:
      "People planning a new kitchen search, browse and compare for weeks. We put your finished kitchens in front of them and follow up every enquiry, so you're not losing work to the big names.",
    pains: [
      {
        title: "Competing with national showrooms",
        body: "They have big budgets. You have better work. Most homeowners never see it.",
      },
      {
        title: "Design visits that go nowhere",
        body: "You measure up, send a quote and hear nothing. Without follow-up, half of those jobs drift away.",
      },
      {
        title: "Your best kitchens live on your phone",
        body: "If the photos aren't on a proper website, they aren't selling for you.",
      },
    ],
    jobs: [
      "Full kitchen supply and fit",
      "Fit-only installs",
      "Kitchen and diner knock-throughs",
      "Bespoke and premium kitchens",
    ],
    searches: [
      "kitchen fitters near me",
      "new kitchen [your town]",
      "kitchen installation cost",
      "bespoke kitchens [your area]",
    ],
    faqs: [
      {
        question: "Can you target supply and fit rather than fit-only?",
        answer:
          "Yes. Campaigns and pages are built around the work you want most. We'll set that on the kickoff call.",
      },
      {
        question: "Do you help with showroom or design visit bookings?",
        answer:
          "Yes. The Portal can take bookings, send reminders before the visit and follow up after the quote goes out.",
      },
    ],
    metaTitle: "Kitchen Fitter Leads You Own",
    metaDescription:
      "Kitchen leads you own: a website, Google Ads and automatic follow-up built in-house by NobleLeads. More kitchen enquiries, followed up until they book.",
  },
  {
    slug: "driveway-paving",
    name: "Driveways & Paving",
    plural: "driveway and paving installers",
    icon: Car,
    benefit: "Block paving, resin and driveway installs",
    typicalJob: { label: "a new driveway", value: 6000 },
    jobRange: "£4k to £10k+ for most block paving and resin driveways",
    headline: "Driveway leads you own, all year round",
    intro:
      "Driveways are a visual sell and a big spend. We put your finished jobs in front of homeowners searching in your area, and follow up every quote so the work doesn't drift to someone cheaper.",
    pains: [
      {
        title: "Busy summers, quiet winters",
        body: "Enquiries dry up when the weather turns. You need work booked in before it does.",
      },
      {
        title: "Undercut on directories",
        body: "Shared leads mean five firms quoting the same drive. It becomes a race to the bottom.",
      },
      {
        title: "Quotes nobody chases",
        body: "You price the job, they say they'll think about it. Without follow-up, that's usually the end of it.",
      },
    ],
    jobs: [
      "Block paving driveways",
      "Resin bound driveways",
      "Patios and paving",
      "Drainage and groundwork",
    ],
    searches: [
      "driveway installers near me",
      "block paving [your town]",
      "resin driveway cost",
      "new driveway [your area]",
    ],
    faqs: [
      {
        question: "Can you help me book up winter?",
        answer:
          "Yes. Plenty of homeowners plan in winter for a spring install. We keep the ads running and follow every quote up so your spring is booked before it starts.",
      },
      {
        question: "Will my photos be on the site?",
        answer:
          "Yes. Your finished drives are the best sales tool you have. They go on the website, in the ads and in your social posts.",
      },
    ],
    metaTitle: "Driveway and Paving Leads You Own",
    metaDescription:
      "Driveway and paving leads you own: a website, Google Ads and automatic follow-up built in-house by NobleLeads. Every enquiry answered and followed up.",
  },
  {
    slug: "solar-heat-pumps",
    name: "Solar & Heat Pumps",
    plural: "solar and heat pump installers",
    icon: Sun,
    benefit: "Solar, battery and heat pump installs",
    typicalJob: { label: "a solar install", value: 7000 },
    jobRange: "£5k to £12k for solar and battery, similar or more for a heat pump",
    headline: "Solar and heat pump leads that aren't sold to five installers",
    intro:
      "Homeowners looking at solar or a heat pump get bombarded by lead sellers. We get them to you directly, with a site that answers their questions and follow-up that keeps you in the running.",
    pains: [
      {
        title: "Bought leads, sold five times",
        body: "Lead sellers pass the same homeowner to several installers. You're in a bidding war before you've said hello.",
      },
      {
        title: "Lots of questions, slow decisions",
        body: "Grants, payback, batteries. Homeowners need answers and time. Without follow-up, they forget who quoted.",
      },
      {
        title: "Trust is everything",
        body: "Accreditations, reviews and real installs decide who gets the job. If they aren't easy to find, you lose it.",
      },
    ],
    jobs: [
      "Solar panel installs",
      "Battery storage",
      "Air source heat pumps",
      "Solar and battery packages",
    ],
    searches: [
      "solar panel installers near me",
      "solar panels cost [your town]",
      "air source heat pump installers [your area]",
      "solar battery installation",
    ],
    faqs: [
      {
        question: "Will you show my accreditations?",
        answer:
          "Yes. Accreditations, warranties and real installs go front and centre. In this market, trust wins the job.",
      },
      {
        question: "These customers take a while to decide. Does that matter?",
        answer:
          "It's why the follow-up matters. Every enquiry gets automatic texts and emails, so you stay in front of them while they decide.",
      },
    ],
    metaTitle: "Solar and Heat Pump Installer Leads",
    metaDescription:
      "Solar and heat pump leads you own, not shared. A website, Google Ads and automatic follow-up built in-house by NobleLeads. Exclusive enquiries, followed up until they book.",
  },
  {
    slug: "stairlifts-mobility",
    name: "Stairlifts & Mobility",
    plural: "stairlift and mobility companies",
    icon: Accessibility,
    benefit: "Stairlifts and home mobility installs",
    typicalJob: { label: "a stairlift", value: 3500 },
    jobRange: "£2k to £5k for a stairlift, more for curved lifts and through-floor lifts",
    headline: "Stairlift and mobility leads, direct from families",
    intro:
      "Stairlift enquiries often come from a son or daughter searching on behalf of a parent. They want someone local, trustworthy and quick to respond. We make sure that's you, and that every call gets answered.",
    pains: [
      {
        title: "Urgent need, fast decisions",
        body: "When a parent can't manage the stairs, families call the first firm that answers. Miss that call and it's gone.",
      },
      {
        title: "Up against national brands",
        body: "Big names spend heavily on ads. A local firm with good reviews can win, if families can find it.",
      },
      {
        title: "Trust decides it",
        body: "Families want reviews, clear pricing and a friendly face. A dated website puts them off.",
      },
    ],
    jobs: [
      "Straight and curved stairlifts",
      "Reconditioned stairlifts",
      "Through-floor lifts",
      "Bathroom and home adaptations",
    ],
    searches: [
      "stairlifts near me",
      "stairlift cost [your town]",
      "curved stairlift [your area]",
      "mobility adaptations [your county]",
    ],
    faqs: [
      {
        question: "Our customers are often older. Will they use the website?",
        answer:
          "Often it's their family who searches. Either way, we make it easy: a big phone number, clear prices where you're happy to show them and a short enquiry form.",
      },
      {
        question: "How fast do enquiries get a response?",
        answer:
          "Missed calls get an automatic text back and new enquiries get an instant reply, so families hear from you straight away, even if you're on an install.",
      },
    ],
    metaTitle: "Stairlift and Mobility Leads You Own",
    metaDescription:
      "Stairlift and mobility leads you own: a website, Google Ads and automatic follow-up built in-house by NobleLeads. Every enquiry answered and followed up, even while you're out on installs.",
  },
]

export function getTrade(slug: string) {
  return trades.find((trade) => trade.slug === slug)
}

export function tradeHref(trade: Pick<Trade, "slug">) {
  return `/${trade.slug}`
}
