import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, Search, Shield, Clock } from "lucide-react"

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
import { getFAQPageSchema, getLocalBusinessSchema } from "../(shared)/schema"

const primaryKeyword = "builder marketing agency UK"
const canonicalPath = "/builders"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with building companies?",
    answer:
      "Yes. We understand the long lead cycles, high job values and the research homeowners do before they commit to extensions, loft conversions and refurbishments. Campaigns are built to attract serious enquiries, not browsers.",
  },
  {
    question: "How long before I start seeing qualified building enquiries?",
    answer:
      "With Google Ads running, most builders start seeing new leads within 2–3 weeks. Because building projects have long decision cycles, we also build follow-up sequences to keep prospects warm through weeks or months of planning.",
  },
  {
    question: "Can you help me win commercial building contracts?",
    answer:
      "Yes. Commercial work — fit-outs, refurbishments, housing developers — provides high-volume, high-value pipelines. We can build dedicated pages and campaigns targeting commercial clients in your area.",
  },
  {
    question: "I get a lot of tyre-kicker enquiries. Can you filter those out?",
    answer:
      "Yes. We build landing pages and quote forms that pre-qualify enquiries — asking the right questions to filter out people without genuine projects or budgets before they take up your time.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to rolling monthly.",
  },
  {
    question: "Do you work with small building firms or only larger contractors?",
    answer:
      "We work with small teams through to more established building companies. The most important things are that your work is strong and you want to grow beyond relying on referrals and occasional Checkatrade leads.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with builders across the UK. Campaigns are targeted to your realistic travel radius and the job types that are most profitable for your team.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: AlertTriangle,
    heading: "Feast or Famine Pipeline",
    body: "Flat out on a large project, then it ends and the pipeline empties. The gap between jobs is where cashflow gets tight and pressure builds.",
  },
  {
    icon: Search,
    heading: "Attracting the Wrong Enquiries",
    body: "People fishing for ballpark figures with no real budget or timeline. Quoting these wastes time you could spend on serious buyers.",
  },
  {
    icon: Shield,
    heading: "Completed Work Isn't Visible Online",
    body: "Your projects speak for themselves — but if they're not showcased online, customers choose competitors with slicker websites and more reviews.",
  },
  {
    icon: Clock,
    heading: "Leads Go Cold Mid-Project",
    body: "When you're heads-down on a build, prospective clients quietly book whoever stayed in contact. Without follow-up, that's usually someone else.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Project Portfolio Website That Attracts Serious Buyers",
    body: (
      <>
        Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        for builders lead with completed project photography, client
        testimonials, accreditations (FMB, NHBC, Trustmark) and dedicated
        service pages for extensions, loft conversions, refurbishments and
        new builds — each built to rank and convert the right enquiries.
      </>
    ),
  },
  {
    title: "Google Ads Targeting Homeowners Ready to Build",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for builders
        </Link>{" "}
        targeting the searches that signal genuine intent — "extension builders
        near me", "loft conversion quote [town]", "house refurbishment
        contractors". High intent, your service area, landing pages built to
        pre-qualify before they make contact.
      </>
    ),
  },
  {
    title: "Pipeline Management and Long-Cycle Follow-Up",
    body: (
      <>
        Building enquiries take weeks or months to convert. The{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM and automation system
        </Link>{" "}
        keeps every prospect warm with timed follow-ups — so when they{"'"}re
        ready to commit, you{"'"}re the builder they{"'"}ve been hearing from, not
        the one they{"'"}ve forgotten about.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Builder Marketing Agency UK | More Leads, More Projects",
  description:
    "NobleLeads delivers builder marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more extensions, loft conversions and refurbishments consistently.",
  canonicalPath,
})

export default function BuildersPage() {
  const faqSchema = getFAQPageSchema(faqItems)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          {/* Hero */}
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · Builders
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Builder Marketing That Wins More Extensions and Refurbishments
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Building work is some of the highest-value trade work available — but
                winning the right projects consistently is harder than it looks.
                Competition is fierce, job cycles are long and customers do serious
                research before they commit. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — building you the online presence and lead system that attracts
                homeowners with real projects and real budgets, not just people
                fishing for the cheapest quote.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A clear look at what{"'"}s possible for your
                  building business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Builders Struggle to Get a Consistent Pipeline of Good Work
              </h2>
              <p>
                Most building companies are either flat out or looking for the next
                job.{" "}
                <span className="font-semibold text-foreground">
                  The gap between projects is where cash gets tight and bad decisions
                  get made
                </span>{" "}
                — taking on low-margin work, underpricing to win, or burning time
                chasing quotes that were never serious.
              </p>
              <PainPointsGrid items={painPoints} />
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Builders
              </h2>
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
                A single-storey extension typically runs{" "}
                <span className="font-semibold text-foreground">£25,000–£60,000</span>.
                A loft conversion is commonly{" "}
                <span className="font-semibold text-foreground">£30,000–£55,000</span>.
                A full house refurbishment can be{" "}
                <span className="font-semibold text-foreground">£40,000–£150,000+</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), you only need the system
                to help you win{" "}
                <span className="font-semibold text-foreground">
                  one additional extension per quarter
                </span>{" "}
                to return 15–20x your annual investment. Most builders on the system
                see returns far beyond that.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Builders
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A general builder in the North West was winning most
                work through referrals and the occasional Checkatrade lead. Within 8
                weeks of launching their NobleLeads system, they had 7 qualified
                extension enquiries in the pipeline, closed two jobs worth a combined
                £68,000 and had their first full 12 months of work booked for the
                first time in the company{"'"}s history."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Builders
              </h2>
              <TradePackages
                core="A project-led website with your completed work front and centre, CRM set up and every enquiry tracked from first contact."
                growth="Everything in Core plus Google Ads, long-cycle lead nurturing and automated follow-up to close more of your existing quotes."
                dominate="For building firms targeting commercial contracts, housing developers or expanding across multiple service areas."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection title="Questions From Builders Like You" items={faqItems} />
          </SectionReveal>

          <RelatedTrades currentHref="/builders" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Fill Your Pipeline With Projects That Are Actually Worth Winning?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your building business
                — what you{"'"}re winning now and what a proper lead system could look
                like for you.
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
      <JsonLd data={[getLocalBusinessSchema(), faqSchema]} />
    </main>
  )
}
