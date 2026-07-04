import type { Metadata } from "next"
import Link from "next/link"
import { Globe, Building2, TrendingDown, Clock } from "lucide-react"

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

const primaryKeyword = "EV charger installer marketing UK"
const canonicalPath = "/ev-charger-installers"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with EV charger installation businesses?",
    answer:
      "Yes. We understand OZEV approval requirements, the difference between domestic and commercial installations and how the market is changing as EV adoption grows. Campaigns are built to capture demand ahead of it intensifying further.",
  },
  {
    question: "How quickly will I start seeing new EV charger enquiries?",
    answer:
      "With Google Ads running, most EV charger installers start seeing new leads within 2–3 weeks. The market is growing rapidly, and well-targeted campaigns convert well because demand consistently outstrips supply of trusted, local installers.",
  },
  {
    question: "Can you help me win commercial EV charging contracts?",
    answer:
      "Yes. Commercial installations — car parks, fleet depots, hospitality venues, housing developers — are high-value and recurring. We build dedicated pages and campaigns targeting commercial clients who need multiple charger installations.",
  },
  {
    question: "How do I compete with large national EV charger companies?",
    answer:
      "Local credibility wins. Homeowners and business owners prefer working with a qualified local installer who can respond quickly and provide an ongoing relationship. We build that credibility and local visibility to outmanoeuvre national players on your patch.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to rolling monthly.",
  },
  {
    question: "Do you work with smaller EV installation businesses?",
    answer:
      "We work with sole traders and small electrical teams who have added EV chargers to their offering, as well as dedicated EV charger installation companies. The system scales to your capacity.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with EV charger installers across the UK. Campaigns are targeted to your realistic service area so every enquiry is genuinely local.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: Globe,
    heading: "Aggregators Taking Your Traffic",
    body: "Comparison sites and national aggregators dominate EV charger searches and resell those leads to multiple installers. You're paying for competition you don't need.",
  },
  {
    icon: Building2,
    heading: "Commercial Clients Need Credibility",
    body: "Car parks, fleets and developers want an installer they can trust at scale. Without a professional online presence, you're invisible to commercial buyers.",
  },
  {
    icon: TrendingDown,
    heading: "Competition Growing Fast",
    body: "The EV market is expanding, and so is the number of installers. The companies building strong local brands now will own the market in their area. Waiting costs market share.",
  },
  {
    icon: Clock,
    heading: "Commercial Prospects Go Cold",
    body: "Commercial EV projects have long decision cycles. Without structured follow-up, interested facilities managers and developers forget about you and find someone who stayed in touch.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Website That Builds Credibility for Both Domestic and Commercial",
    body: (
      <>
        Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        for EV charger installers clearly display OZEV approval, completed
        installation photos, charger brand partnerships and testimonials —
        with dedicated pages for home charger installation and commercial
        charging projects, each built to convert the right type of enquiry.
      </>
    ),
  },
  {
    title: "Google Ads That Put You in Front of Buyers, Not Aggregators",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for EV charger installers
        </Link>{" "}
        that send buyers directly to your own website — not to a comparison
        site that resells them to five other installers. Home charger searches
        and commercial installation searches are targeted separately, with
        landing pages built for each.
      </>
    ),
  },
  {
    title: "Automation and Long-Cycle Follow-Up for Commercial Projects",
    body: (
      <>
        Domestic installs close quickly. Commercial projects take longer. The{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM and automation system
        </Link>{" "}
        handles both — instant response for home charger enquiries, timed
        follow-up sequences for commercial prospects — so no opportunity is
        lost regardless of how long the decision cycle takes.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "EV Charger Installer Marketing UK | More Leads",
  description:
    "NobleLeads delivers marketing for EV charger installers UK-wide using conversion websites, Google Ads and CRM automation so you can win more domestic and commercial EV charging installations consistently.",
  canonicalPath,
})

export default function EVChargerInstallersPage() {
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
                Trade Landing Page · EV Charger Installers
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                EV Charger Installer Marketing That Wins More Installations
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                EV charger installation is one of the fastest-growing trades in the UK.
                Demand is rising sharply, government grants have made home chargers
                affordable and commercial clients are under pressure to provide charging
                infrastructure. The problem is that aggregator sites and national
                comparison platforms are intercepting most of that demand before it
                reaches local installers. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — so you capture that demand directly, before it gets resold.
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
                  EV installation business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why EV Charger Installers Struggle to Own Their Local Market
              </h2>
              <p>
                The EV charger market is growing fast — but so is the infrastructure
                built to intercept buyers before they reach local installers.{" "}
                <span className="font-semibold text-foreground">
                  The window to build a dominant local position is now, not in three
                  years when the market is fully saturated.
                </span>
              </p>
              <PainPointsGrid items={painPoints} />
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for EV Charger Installers
              </h2>
              <p>
                We build one system that takes a homeowner or facilities manager
                from{" "}
                <span className="font-semibold text-foreground">
                  "I need an EV charger installed"
                </span>{" "}
                to booking your company directly — without going through a
                comparison site or reseller.
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
                A standard home EV charger installation is typically{" "}
                <span className="font-semibold text-foreground">£800–£1,200</span>. A
                commercial installation with multiple chargers can be{" "}
                <span className="font-semibold text-foreground">£5,000–£50,000+</span>{" "}
                depending on scale.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), adding 5 additional
                domestic installs at £900 gives you{" "}
                <span className="font-semibold text-foreground">
                  £4,500 in additional revenue
                </span>{" "}
                on a £495/month fee. Win one commercial project and the maths
                changes entirely.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real EV Charger Installers
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A qualified electrician in the South East who had
                added EV charger installation to their services was relying entirely
                on Zapmap listings and word of mouth. Within 6 weeks of launching
                their NobleLeads system, they had 14 new domestic enquiries and
                their first commercial enquiry from a local hotel group — more EV
                business in 6 weeks than in the previous six months combined."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for EV Charger Installers
              </h2>
              <TradePackages
                core="A professional website displaying your OZEV approval, completed installs and both domestic and commercial service pages — with every enquiry tracked."
                growth="Everything in Core plus Google Ads across both domestic and commercial searches, instant response and long-cycle commercial follow-up automation."
                dominate="For EV installation companies targeting large commercial contracts, fleet depot programmes or property developer partnerships."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From EV Charger Installers Like You"
              items={faqItems}
            />
          </SectionReveal>

          <RelatedTrades currentHref="/ev-charger-installers" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Build a Local Market Position Before the Competition Does?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your EV installation
                business — what you{"'"}re doing now and what owning your local market
                could look like.
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
