import type { Metadata } from "next"
import Link from "next/link"
import { TrendingDown, Search, Building2, RefreshCcw } from "lucide-react"

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

const primaryKeyword = "marketing for carpet cleaners UK"
const canonicalPath = "/carpet-cleaners"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with carpet cleaning businesses?",
    answer:
      "Yes. We understand the three revenue streams available to carpet cleaners, domestic regular cleans, end-of-tenancy cleans and commercial contracts, and build campaigns to help you grow whichever mix is most profitable for you.",
  },
  {
    question: "How quickly will I start seeing new carpet cleaning enquiries?",
    answer:
      "With Google Ads running, most carpet cleaners start seeing new leads within 2–3 weeks. Because carpet cleaning is often a search-driven, intention-led purchase, Google Ads convert particularly well in this trade.",
  },
  {
    question: "Can you help me land commercial carpet cleaning contracts?",
    answer:
      "Yes. Commercial clients, offices, hotels, letting agents, provide high-volume, high-value repeat work. We build dedicated pages and campaigns targeting businesses in your area that need regular or contract cleaning.",
  },
  {
    question: "Can you help me grow recurring domestic clients rather than one-offs?",
    answer:
      "Absolutely. We build review and re-booking systems that turn one-off cleans into regular 6-monthly or annual clients, significantly increasing lifetime value per customer.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and refine the system properly, then move to a rolling monthly arrangement.",
  },
  {
    question: "Do you work with sole traders as well as larger carpet cleaning firms?",
    answer:
      "We work with both. The right package depends on your current capacity and how aggressively you want to grow, we'll match you to what makes sense.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with carpet cleaners across the UK. Campaigns are always targeted to your service area so you're never paying to advertise in postcodes you don't work in.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: TrendingDown,
    heading: "Unpredictable Enquiry Flow",
    body: "Busy one week, quiet the next. Without a system generating enquiries consistently, you're always at the mercy of who happens to search this week.",
  },
  {
    icon: Search,
    heading: "Invisible in Local Search",
    body: "Carpet cleaning is almost always searched on Google. If you're not ranking locally, the calls go to whoever is, often larger national chains with bigger ad budgets.",
  },
  {
    icon: Building2,
    heading: "Missing Commercial Opportunities",
    body: "Offices, hotels, letting agents, commercial clients offer volume and repeat bookings. Most carpet cleaners never reach them because they have no commercial-focused online presence.",
  },
  {
    icon: RefreshCcw,
    heading: "One-Off Cleans, No Repeat System",
    body: "A client who's had their carpets cleaned once is a natural repeat client in 12 months. Without a system to re-engage them, they either forget or find someone else.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Website That Covers All Three Revenue Streams",
    body: (
      <>
        Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        for carpet cleaners include separate pages for domestic cleaning,
        end-of-tenancy deep cleans and commercial contracts, each with the
        relevant trust signals, before-and-after photos and enquiry forms
        optimised for that specific client type.
      </>
    ),
  },
  {
    title: "Google Ads Targeting High-Intent Local Searches",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for carpet cleaners
        </Link>{" "}
        targeting searches like "carpet cleaning near me", "end of tenancy
        carpet clean [town]" and "office carpet cleaning [area]", so your
        ads appear to people who are actively looking, not just browsing.
      </>
    ),
  },
  {
    title: "Re-Booking and Commercial Follow-Up Automation",
    body: (
      <>
        The{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM and automation system
        </Link>{" "}
        re-engages domestic clients at the right interval to prompt a repeat
        booking, follows up with commercial prospects who haven{"'"}t responded and
        sends review requests after every clean, building a compounding
        base of recurring revenue and 5-star reviews.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Carpet Cleaner Marketing Agency UK | More Bookings",
  description:
    "NobleLeads delivers marketing for carpet cleaners UK-wide using conversion websites, Google Ads and CRM automation so you can grow domestic, end-of-tenancy and commercial cleaning revenue consistently.",
  canonicalPath,
})

export default function CarpetCleanersPage() {
  const faqSchema = getFAQPageSchema(faqItems)
  const serviceSchema = getServiceSchema({
    name: "Carpet Cleaner Marketing",
    description:
      "NobleLeads delivers marketing for carpet cleaners UK-wide using conversion websites, Google Ads and CRM automation so you can grow domestic, end-of-tenancy and commercial cleaning revenue consistently.",
    url: `${BUSINESS_URL}${canonicalPath}`,
  })
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BUSINESS_URL },
    { name: "Carpet Cleaner Marketing", url: `${BUSINESS_URL}${canonicalPath}` },
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
                Trade Landing Page · Carpet Cleaners
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Marketing for Carpet Cleaners That Keeps Bookings Coming In
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Carpet cleaning has three distinct revenue streams, domestic regular
                cleans, end-of-tenancy cleans and commercial contracts, and most
                carpet cleaning businesses are only fully tapping one of them.
                NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                so you can build a predictable, growing income across all three
                without relying on word of mouth or a single stream of work.
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
                  carpet cleaning business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Carpet Cleaners Struggle to Build Consistent Revenue
              </h2>
              <p>
                Carpet cleaning is one of the most search-driven trades there is, almost every customer goes to Google when they need it. That means{" "}
                <span className="font-semibold text-foreground">
                  your online visibility directly determines your booking volume
                </span>
                , and most carpet cleaners aren{"'"}t making the most of it.
              </p>
              <PainPointsGrid items={painPoints} />
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Carpet Cleaners
              </h2>
              <p>
                We build one system that generates new domestic bookings, captures
                end-of-tenancy enquiries and opens the door to commercial contracts, while simultaneously re-engaging past clients to book again.
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
                A domestic carpet clean typically earns{" "}
                <span className="font-semibold text-foreground">£80–£180</span>.
                An end-of-tenancy deep clean is usually{" "}
                <span className="font-semibold text-foreground">£150–£350</span>.
                A commercial contract could be worth{" "}
                <span className="font-semibold text-foreground">
                  £300–£1,500+ per month
                </span>{" "}
                in recurring work.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), adding 6 domestic cleans
                per month at £120 and 4 end-of-tenancy jobs at £220 gives you{" "}
                <span className="font-semibold text-foreground">
                  £1,600 in additional monthly revenue
                </span>
                . Land one commercial contract and the system pays for itself many
                times over.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Carpet Cleaners
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A carpet cleaning company in Yorkshire was relying on
                Facebook and word of mouth. Within 6 weeks of launching their
                NobleLeads system, they had 15 new domestic bookings in the first
                month, 6 end-of-tenancy cleans via a dedicated landing page and their
                first commercial enquiry from a local property management firm."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Carpet Cleaners
              </h2>
              <TradePackages
                core="A multi-service website covering domestic, EOT and commercial cleaning with CRM set up and every enquiry captured from day one."
                growth="Everything in Core plus Google Ads across all three service types, re-booking automation and review generation to build local authority."
                dominate="For carpet cleaning businesses expanding into new areas, taking on staff or targeting hotel and facilities management contracts."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Carpet Cleaners Like You"
              items={faqItems}
            />
          </SectionReveal>

          <RelatedTrades currentHref="/carpet-cleaners" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Fill Your Calendar Across All Three Revenue Streams?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your carpet cleaning
                business, what{"'"}s working, what{"'"}s missing and how a proper system
                could close the gap.
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
