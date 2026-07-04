import type { Metadata } from "next"
import Link from "next/link"
import { BarChart3, Star, Shuffle, Building2 } from "lucide-react"

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

const primaryKeyword = "marketing for painters and decorators UK"
const canonicalPath = "/painters-decorators"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with painters and decorators?",
    answer:
      "Yes. We understand the difference between domestic interior work, exterior projects, commercial redecorations and new-build finishing. Campaigns are built to attract the type of work that suits your pricing and capacity.",
  },
  {
    question: "How long before I start getting new painting enquiries?",
    answer:
      "With Google Ads running, most painters and decorators start seeing new leads within 2–3 weeks. Because decorating is often a considered purchase, we also use follow-up sequences to nurture prospects who are getting multiple quotes.",
  },
  {
    question: "Can you help me move upmarket and attract better-paying clients?",
    answer:
      "Absolutely. A lot of painters get stuck competing on price with less experienced operators. We build the website, reviews and positioning to attract clients who value quality and are willing to pay for it — not just whoever is cheapest.",
  },
  {
    question: "Can you help me get commercial or property management work?",
    answer:
      "Yes. Landlords, estate agents and property management firms need regular decorating work. We can build dedicated pages and outreach campaigns targeting these repeat clients who provide consistent volume.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to set up and tune the system properly, then move to rolling monthly.",
  },
  {
    question: "Do you work with sole traders as well as larger decorating teams?",
    answer:
      "We work with sole traders and small teams. The most important things are that your work is solid, you have or can get good reviews and you want to grow in a controlled way.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with painters and decorators across the UK. Campaigns are always targeted to your real service area so you're not paying for leads from areas you don't cover.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: BarChart3,
    heading: "Competing on Price Every Time",
    body: "Customers can't tell quality apart before the job starts, so they default to the cheapest quote — regardless of your standard of work.",
  },
  {
    icon: Star,
    heading: "Outranked Locally on Reviews",
    body: "The decorator down the road has 60+ reviews and appears above you in local searches, even if your finishes are consistently better.",
  },
  {
    icon: Shuffle,
    heading: "Enquiries Inconsistent and Patchy",
    body: "Facebook groups and referrals keep you busy sometimes. But there's no reliable way to fill diary gaps when they appear.",
  },
  {
    icon: Building2,
    heading: "Commercial Work Feels Out of Reach",
    body: "Landlords and property managers provide consistent, repeat volume — but without the right online presence, they simply don't find you.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Website That Shows Your Quality and Captures Enquiries",
    body: (
      <>
        Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        for painters and decorators are built around before-and-after
        photography, verified Google reviews and clear service pages for
        interior, exterior and commercial work — with simple quote forms that
        feed directly into your pipeline.
      </>
    ),
  },
  {
    title: "Google Ads That Target Customers Ready to Book",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for painters and decorators
        </Link>{" "}
        targeting people actively searching for a decorator in your area —
        not browsing, not comparing, but searching because they have a job ready.
        We focus on the searches that lead to real bookings, not tyre-kickers.
      </>
    ),
  },
  {
    title: "Review Building and Quote Follow-Up Automation",
    body: (
      <>
        In the decorating trade, reviews are everything. The system
        automatically requests reviews after every completed job and follows
        up on every quote that hasn{"'"}t responded. Your{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM pipeline
        </Link>{" "}
        tracks every enquiry so you always know what{"'"}s outstanding and where
        your next jobs are coming from.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Painter & Decorator Marketing Agency UK | More Leads",
  description:
    "NobleLeads delivers marketing for painters and decorators UK-wide using conversion websites, Google Ads and CRM automation so you can attract better-paying clients and fill your diary consistently.",
  canonicalPath,
})

export default function PaintersDecoratorsPage() {
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
                Trade Landing Page · Painters &amp; Decorators
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Marketing for Painters &amp; Decorators That Attracts Better-Paying Clients
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Painting and decorating is one of the most competitive trades to market
                online. There are a lot of operators, prices vary wildly and most
                customers can{"'"}t tell quality apart until the job is done. NobleLeads
                focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — building you the online credibility and lead system that attracts
                customers who value good work and are prepared to pay for it, so you
                stop competing for the cheapest price on every job.
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
                  decorating business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Painters and Decorators Struggle to Stand Out and Charge More
              </h2>
              <p>
                The decorating trade has a marketing problem: it{"'"}s hard to show
                quality before a customer commits, and{" "}
                <span className="font-semibold text-foreground">
                  online, everyone looks the same unless you{"'"}ve built real credibility
                </span>
                .
              </p>
              <PainPointsGrid items={painPoints} />
              <p>
                The solution isn{"'"}t undercutting the competition.{" "}
                <span className="font-semibold text-foreground">
                  It{"'"}s being found first, looking more credible and having a system
                  that turns enquiries into booked jobs.
                </span>
              </p>
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Painters and Decorators
              </h2>
              <p>
                We build a system that positions you as the credible, trustworthy choice
                in your area — so customers are already sold on you before they even
                ask for a quote.
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
                Decorating job values depend on the scope. A room repaint might be{" "}
                <span className="font-semibold text-foreground">£300–£600</span>. A
                full interior of a three-bed house is typically{" "}
                <span className="font-semibold text-foreground">£1,500–£3,000</span>.
                An exterior house repaint can be{" "}
                <span className="font-semibold text-foreground">£800–£2,500+</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), even a conservative result
                of 2 additional room repaints at £450 and 1 additional full interior at
                £2,000 gives you{" "}
                <span className="font-semibold text-foreground">
                  £2,900 in extra revenue on a £495/month fee
                </span>
                . Add a commercial client relationship and the numbers compound
                significantly.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Painters and Decorators
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A painter and decorator in the South East was getting
                most of their work from Facebook groups and a few loyal clients. Within
                6 weeks of launching their NobleLeads system, they were receiving 8–10
                new enquiries per month from Google, had their highest-ever review count
                and raised their day rate for the first time in two years."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Painters and Decorators
              </h2>
              <p>
                We{"'"}ll match you to the right level based on where you are now and
                the kind of work you want more of:
              </p>
              <TradePackages
                core="A credible, portfolio-led website with Google reviews integrated and every enquiry captured and tracked from day one."
                growth="Everything in Core plus Google Ads, review automation and quote follow-up sequences — converting more of the enquiries you're already getting."
                dominate="For decorating businesses targeting commercial clients, letting agents or expanding into multiple service areas."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Painters and Decorators Like You"
              items={faqItems}
            />
          </SectionReveal>

          <RelatedTrades currentHref="/painters-decorators" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Attract Clients Who Value Quality Over Cheap?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your decorating
                business — what you{"'"}re doing now and what a proper lead system could
                look like for you.
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
