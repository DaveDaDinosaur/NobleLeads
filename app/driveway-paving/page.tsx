import type { Metadata } from "next"
import Link from "next/link"
import { Globe, TrendingDown, Clock, Users } from "lucide-react"

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

const primaryKeyword = "marketing for driveway and paving companies UK"
const canonicalPath = "/driveway-paving"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with driveway and paving businesses?",
    answer:
      "Yes. We understand the visual nature of the work, the importance of showing before-and-after photos and the typical decision cycle that leads homeowners to commit to a new driveway.",
  },
  {
    question: "How quickly will I start seeing new driveway enquiries?",
    answer:
      "With Google Ads running, most driveway and paving companies start seeing new leads within 2–3 weeks. Driveways are often a considered purchase, so we also build follow-up sequences to keep prospects warm through a longer decision cycle.",
  },
  {
    question: "Can you help me get commercial or developer paving work?",
    answer:
      "Yes. Commercial clients and housing developers provide high-volume, repeatable work. We can build dedicated pages and campaigns targeting commercial enquiries alongside domestic work.",
  },
  {
    question: "I lose quotes to much cheaper competitors. Can that be fixed?",
    answer:
      "Better positioning online, stronger portfolio, more reviews, clearer trust signals, lets you attract clients who are buying on quality and value, not just the lowest price. We build that credibility into your website and online presence.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to rolling monthly.",
  },
  {
    question: "Do you work with smaller paving firms as well as larger companies?",
    answer:
      "We work with both. The right package depends on your current capacity, how many jobs per month you want to win and the types of work you're targeting.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with driveway and paving companies across the UK. Campaigns are always targeted to your service area so you're not paying for enquiries from places you won't travel to.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: Globe,
    heading: "Thin Online Presence",
    body: "Potential customers search online first. If your website is basic or your Google listing is sparse, you lose the job before they ever call.",
  },
  {
    icon: TrendingDown,
    heading: "Outspent on Google Ads",
    body: "National chains and well-funded competitors dominate paid search. Without the right campaign setup, your ad budget gets wasted on the wrong clicks.",
  },
  {
    icon: Clock,
    heading: "Long Decision Cycles Going Quiet",
    body: "Homeowners plan driveways for weeks or months. Without structured follow-up during that time, interested prospects drift to whoever stayed in touch.",
  },
  {
    icon: Users,
    heading: "Referrals Aren't Scalable",
    body: "Word of mouth built your business, but it can't be turned up when you need more work. You need a system that generates enquiries on demand.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Project Portfolio Website That Sells Before You Quote",
    body: (
      <>
        Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        for driveway and paving companies lead with before-and-after photography,
        material options, client testimonials and clear service pages for block
        paving, tarmac, resin and pattern-imprinted concrete, with quote forms
        that pre-qualify enquiries and send them straight into your pipeline.
      </>
    ),
  },
  {
    title: "Google Ads That Beat the Nationals on Your Patch",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for driveway and paving companies
        </Link>{" "}
        that are built to outperform bigger budgets in your local area, targeting
        high-intent searches and landing on dedicated pages that convert interest
        into a quote request, not just a click.
      </>
    ),
  },
  {
    title: "Follow-Up and Pipeline Management for Long Cycles",
    body: (
      <>
        A homeowner planning a new driveway rarely books the first week. The{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM and automation system
        </Link>{" "}
        keeps every prospect engaged with timed follow-up, so when they{"'"}re
        finally ready to commit, you{"'"}re the company they{"'"}ve been speaking to,
        not one they{"'"}ve forgotten about.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Driveway & Paving Marketing Agency UK | More Leads",
  description:
    "NobleLeads delivers marketing for driveway and paving companies UK-wide using conversion websites, Google Ads and CRM automation so you can win more block paving, resin and tarmac jobs consistently.",
  canonicalPath,
})

export default function DrivewayPavingPage() {
  const faqSchema = getFAQPageSchema(faqItems)
  const serviceSchema = getServiceSchema({
    name: "Driveway & Paving Marketing",
    description:
      "NobleLeads delivers marketing for driveway and paving companies UK-wide using conversion websites, Google Ads and CRM automation so you can win more block paving, resin and tarmac jobs consistently.",
    url: `${BUSINESS_URL}${canonicalPath}`,
  })
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BUSINESS_URL },
    { name: "Driveway & Paving Marketing", url: `${BUSINESS_URL}${canonicalPath}` },
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
                Trade Landing Page · Driveway &amp; Paving
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Marketing for Driveway &amp; Paving Companies That Wins Bigger Jobs
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Driveway and paving work is high-value, highly visual and often the
                result of months of consideration by the homeowner. The companies that
                win consistently aren{"'"}t always the cheapest or the closest, they{"'"}re
                the ones that appear first, look most credible and stay in contact
                until the customer is ready. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                so you can build the online presence and lead system that puts you in
                that position.
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
                  driveway business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Driveway and Paving Companies Struggle to Grow Predictably
              </h2>
              <p>
                The driveway and paving market is competitive, and most companies are
                competing with the same tools, word of mouth, leaflets and whatever
                Checkatrade throws at them.{" "}
                <span className="font-semibold text-foreground">
                  The ones winning consistently have built their own lead systems.
                </span>
              </p>
              <PainPointsGrid items={painPoints} />
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Driveway and Paving Companies
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
                A standard block paving driveway is typically{" "}
                <span className="font-semibold text-foreground">£3,000–£8,000</span>.
                A resin-bound driveway can be{" "}
                <span className="font-semibold text-foreground">£4,000–£12,000+</span>.
                A larger commercial project could run to{" "}
                <span className="font-semibold text-foreground">£20,000–£60,000+</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend),{" "}
                <span className="font-semibold text-foreground">
                  winning one additional driveway per month at £4,500 returns 9x your
                  monthly fee
                </span>
                . Most driveway companies on the system see significantly more than
                one extra job per month within the first 60 days.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Paving Companies
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A block paving company in the West Midlands was
                relying on leaflet drops and Checkatrade for most of their work.
                Within 10 weeks of launching their NobleLeads system, they had 11
                new driveway enquiries through the website, closed 7 and had their
                first commercial car park enquiry from a landlord, a first for
                the business."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Driveway and Paving Companies
              </h2>
              <TradePackages
                core="A portfolio website built around your completed work with CRM set up so every enquiry is tracked from first contact to booked job."
                growth="Everything in Core plus Google Ads, long-cycle follow-up and quote automation to close more of the enquiries you're already receiving."
                dominate="For driveway and paving companies targeting commercial work, housing developers or expanding across new service areas."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Driveway &amp; Paving Companies Like You"
              items={faqItems}
            />
          </SectionReveal>

          <RelatedTrades currentHref="/driveway-paving" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Build a Steady Pipeline of Driveway Enquiries?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a straight conversation about your driveway business, what you{"'"}re winning now and how a proper lead system could change
                those numbers.
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
