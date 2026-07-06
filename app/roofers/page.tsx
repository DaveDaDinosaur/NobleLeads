import type { Metadata } from "next"
import Link from "next/link"
import { TrendingDown, Search, Users, ClipboardList } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { FAQAccordionSection } from "@/components/faq/faq-accordion-section"
import { RelatedTrades } from "@/components/trades/related-trades"
import { PainPointsGrid, type PainPoint } from "@/components/trades/pain-points-grid"
import { HowItWorksSteps, type HowItWorksStep } from "@/components/trades/how-it-works-steps"
import { TradePackages } from "@/components/trades/trade-packages"
import { buildMetadata } from "../(shared)/seo-config"
import {
  BUSINESS_URL,
  getFAQPageSchema,
  getLocalBusinessSchema,
  getServiceSchema,
  getBreadcrumbSchema,
} from "../(shared)/schema"

const primaryKeyword = "lead generation for roofers UK"
const canonicalPath = "/roofers"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you specialise in roofing companies specifically?",
    answer:
      "Yes. We work closely with UK roofing businesses and understand the difference between small repairs, full re-roofs and commercial work. Campaigns, copy and follow-up flows are tuned to how roofers actually price and sell.",
  },
  {
    question: "How long before I start getting roofing enquiries?",
    answer:
      "With well-set-up Google Ads, most roofers start seeing new leads in the first 2–3 weeks. SEO takes longer, but your paid campaigns and website work together from day one to bring in enquiries while rankings build.",
  },
  {
    question: "Can you help during storm season and emergency spikes?",
    answer:
      "Absolutely. We can set up storm-season and emergency roofing campaigns that focus on fast response in your service area, with landing pages and follow-up designed for urgent jobs.",
  },
  {
    question: "Do I still need Checkatrade or other lead platforms?",
    answer:
      "You can keep them if they are profitable, but the goal of the NobleLeads system is to reduce your dependency on rented platforms over time by owning your own website, rankings and data.",
  },
  {
    question: "Is there a minimum contract length?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period so we can build and refine the system properly, then move to a rolling arrangement.",
  },
  {
    question: "Do you work with smaller roofing teams or only large firms?",
    answer:
      "We work with owner-operators and small teams through to more established firms, as long as capacity and pricing are aligned with running serious lead generation campaigns.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We support roofing companies across the UK. Campaigns are targeted to your realistic service radius so that every lead is in an area you are happy to travel to.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: TrendingDown,
    heading: "Feast or Famine Enquiries",
    body: "Storm season floods the diary; calm weather empties it. You're at the mercy of the forecast, not in control of your own pipeline.",
  },
  {
    icon: Search,
    heading: "Not on Google's First Page",
    body: "Homeowners search when they have a problem. If you're not visible locally when that happens, the call goes to someone who is.",
  },
  {
    icon: Users,
    heading: "Racing to the Bottom on Price",
    body: "On Checkatrade or Bark, you're competing on speed and price before the customer has seen a single piece of your work.",
  },
  {
    icon: ClipboardList,
    heading: "Chasing Everything Manually",
    body: "Picking up calls on site, chasing quotes by phone — admin time that should be on the roof, not in your van between jobs.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Roofer Website That Converts",
    body: (
      <>
        We build{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        that highlight the things homeowners actually care about: photos of
        completed roofs, insurance and guarantees, testimonials, financing
        options and simple ways to request a quote or call you directly.
      </>
    ),
  },
  {
    title: "High-Intent Traffic with Google Ads",
    body: (
      <>
        Roofing is one of the strongest fits for{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads for trades
        </Link>
        . People rarely browse for fun — they search because they have a leak, a
        storm-damaged roof or a planned re-roof. We target those searches in
        your chosen areas and send people straight to your own landing pages,
        not a directory listing.
      </>
    ),
  },
  {
    title: "Automation and Follow-Up That Wins Jobs",
    body: (
      <>
        With{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM &amp; automation for trades
        </Link>
        , every roofing enquiry gets an instant SMS and email response. Site
        visits, quotes and follow-ups are tracked in one place, and you get a
        clear view of which campaigns and keywords are generating the most
        profitable jobs.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Roofer Marketing Agency UK | More Leads, More Jobs",
  description:
    "NobleLeads delivers lead generation for roofers UK-wide using conversion websites, Google Ads and CRM automation so you can win more profitable roofing jobs consistently.",
  canonicalPath,
})

export default function RoofersPage() {
  const faqSchema = getFAQPageSchema(faqItems)
  const serviceSchema = getServiceSchema({
    name: "Roofer Marketing",
    description:
      "NobleLeads delivers lead generation for roofers UK-wide using conversion websites, Google Ads and CRM automation so you can win more profitable roofing jobs consistently.",
    url: `${BUSINESS_URL}${canonicalPath}`,
  })
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BUSINESS_URL },
    { name: "Roofer Marketing", url: `${BUSINESS_URL}${canonicalPath}` },
  ])

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          {/* Hero */}
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · Roofers
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Lead Generation for Roofers That Keeps Your Diary Full
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Roofing work is high value but unpredictable. One month you{"'"}re flat
                out with re-roofs and storm repairs, the next month you{"'"}re staring at
                an empty diary. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                so you can build a steady pipeline of the right roofing jobs instead
                of waiting for the weather — or luck — to decide.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A straight conversation about your roofing
                  pipeline.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Roofers Struggle to Get Consistent Work
              </h2>
              <p>
                Most roofing businesses aren{"'"}t short of skill — they{"'"}re short of{" "}
                <span className="font-semibold text-foreground">
                  consistent, profitable enquiries
                </span>
                . You can probably relate to at least a few of these:
              </p>
              <PainPointsGrid items={painPoints} />
              <p>
                The result? Busy weeks followed by quiet ones, staff you{"'"}re not sure
                you can keep and no clear picture of where next month{"'"}s work is
                really coming from.
              </p>
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Roofers
              </h2>
              <p>
                We build a single joined-up system so people who search{" "}
                <span className="font-semibold text-foreground">"roofer near me"</span>{" "}
                or{" "}
                <span className="font-semibold text-foreground">"roof repair in [your area]"</span>{" "}
                see you first, trust you and book.
              </p>
              <HowItWorksSteps steps={steps} />
            </section>
          </SectionReveal>

          {/* ROI */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What This Looks Like in Real Numbers
              </h2>
              <p>
                For roofers, job values vary a lot. A small repair might be{" "}
                <span className="font-semibold text-foreground">£250–£400</span>. A
                re-roof can easily be{" "}
                <span className="font-semibold text-foreground">£4,000–£8,000+</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), 3 additional repair jobs
                at £350 each and 1 extra re-roof at £4,000 gives you{" "}
                <span className="font-semibold text-foreground">
                  £5,050 in additional revenue
                </span>{" "}
                on a £495/month fee — before you factor in referrals and upsells.
                Even if real-world results are more conservative, a well-run system
                becomes a multiple of your monthly investment.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Roofers
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A roofing company in the North West relied on
                Checkatrade and Facebook groups for most of their work. Within 8 weeks
                of launching a NobleLeads website and Google Ads campaign, they were
                booking 8–12 extra enquiries per month and closed two additional
                full re-roofs — enough to comfortably pay for the system and reinvest."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Roofers
              </h2>
              <p>
                Whether you{"'"}re a single-van roofer or running multiple teams, we{"'"}ll
                match you to the right level of support:
              </p>
              <TradePackages
                core="A credible, conversion-ready website and basic CRM so every enquiry is captured and logged — no lead slips through."
                growth="Everything in Core plus Google Ads, local SEO and automation so you're not overwhelmed managing enquiries manually on site."
                dominate="For firms who want to expand territory, win larger contracts and position for tenders, not just domestic work."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection title="Questions From Roofers Like You" items={faqItems} />
          </SectionReveal>

          <RelatedTrades currentHref="/roofers" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Build a Roofing Lead System You Own?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s talk about where your roofing business is now, what kind of
                work you actually want and how a proper lead system could get you
                there — without relying on storms or lead-buy sites.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </section>
          </SectionReveal>
        </div>
      </article>

      <Footer />
      <MobileCTABar />
      <JsonLd data={[getLocalBusinessSchema(), faqSchema, serviceSchema, breadcrumbSchema]} />
    </main>
  )
}
