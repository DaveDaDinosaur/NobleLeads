import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Search, RefreshCcw, TrendingDown } from "lucide-react"

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

const primaryKeyword = "landscaper marketing agency UK"
const canonicalPath = "/landscapers"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with landscaping companies?",
    answer:
      "Yes. We understand the difference between hard landscaping, garden design and maintenance contracts — and the seasonal patterns that affect how enquiries come in. Campaigns are built around the work you want, not a generic trade template.",
  },
  {
    question: "How long before I start getting new landscaping enquiries?",
    answer:
      "With Google Ads running, most landscaping businesses start seeing new leads within 2–3 weeks. We also time campaigns to peak demand — ahead of spring and early summer — so you're capturing searches when homeowners have budgets ready.",
  },
  {
    question: "Can you help me build recurring maintenance revenue?",
    answer:
      "That's one of the biggest opportunities for landscaping businesses. Every project you complete is a chance to add a maintenance client. We build follow-up and upsell sequences into the system so those opportunities don't get missed.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period so we can build and refine the system properly, then move to a rolling arrangement.",
  },
  {
    question: "Do you work with sole traders or small landscaping teams?",
    answer:
      "We work with sole traders and growing teams. What matters is that you deliver strong work, have or can build solid reviews and want to grow in a sustainable, controlled way.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with landscapers across the UK. All campaigns are targeted to your service area, whether that's a single town or a wider county radius.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: Calendar,
    heading: "Empty Diary After Big Jobs",
    body: "Finish a large project and the scramble begins. There's no pipeline sitting ready for what comes next.",
  },
  {
    icon: Search,
    heading: "Invisible Portfolio Online",
    body: "Your work is visually stunning but your website doesn't show it. Competitors with worse portfolios rank above you on Google.",
  },
  {
    icon: RefreshCcw,
    heading: "Maintenance Revenue Walking Out",
    body: "Every completed project is a recurring income opportunity. Without a system to capture it, clients move on and that value goes with them.",
  },
  {
    icon: TrendingDown,
    heading: "Seasonal Cash Flow Gaps",
    body: "Enquiries slow in autumn and winter, making staffing and equipment investment impossible to plan with any confidence.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Portfolio Website That Converts Browsers into Enquiries",
    body: (
      <>
        Your best selling tool is your portfolio. Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        are built to showcase before-and-after photography, project
        testimonials and clear service pages — with quote request forms and
        consultation bookings that send leads directly into your CRM.
      </>
    ),
  },
  {
    title: "Targeted Ads and SEO During Peak Demand",
    body: (
      <>
        Landscaping has clear search seasons. We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for landscapers
        </Link>{" "}
        that ramp up ahead of spring and early summer — when homeowners are
        actively searching and budgets are ready — and build your local SEO
        presence so you{"'"}re ranking organically by the time the next peak arrives.
      </>
    ),
  },
  {
    title: "Automation That Upsells Maintenance and Follows Up Quotes",
    body: (
      <>
        Every project enquiry is followed up automatically. Every completed
        job triggers a review request and a maintenance offer — turning one-off
        clients into recurring revenue. Your{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM pipeline
        </Link>{" "}
        gives you a clear view of quotes, bookings and ongoing contracts all in
        one place.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Landscaper Marketing Agency UK | More Leads",
  description:
    "NobleLeads delivers landscaping marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more garden projects and maintenance contracts consistently.",
  canonicalPath,
})

export default function LandscapersPage() {
  const faqSchema = getFAQPageSchema(faqItems)
  const serviceSchema = getServiceSchema({
    name: "Landscaper Marketing",
    description:
      "NobleLeads delivers landscaping marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more garden projects and maintenance contracts consistently.",
    url: `${BUSINESS_URL}${canonicalPath}`,
  })
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BUSINESS_URL },
    { name: "Landscaper Marketing", url: `${BUSINESS_URL}${canonicalPath}` },
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
                Trade Landing Page · Landscapers
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Landscaper Marketing That Fills Your Season
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Most landscaping businesses are brilliant at transforming outdoor
                spaces but struggle to keep the enquiries flowing in between projects.
                One big job ends, and there{"'"}s suddenly a scramble for the next one.
                NobleLeads works with UK landscapers as a{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — building the lead system that keeps your diary full with the right
                projects at the right prices, whether that{"'"}s full garden redesigns,
                hard landscaping or ongoing maintenance contracts.
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
                  landscaping business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Landscapers Struggle to Get Consistent Work
              </h2>
              <p>
                Landscaping is a high-skill, high-value trade — but the business
                side often feels like feast or famine.{" "}
                <span className="font-semibold text-foreground">
                  Referrals come in waves, the seasons dictate your cashflow
                </span>{" "}
                and there{"'"}s never quite enough time to sort out the marketing when
                you{"'"}re busy on a project.
              </p>
              <PainPointsGrid items={painPoints} />
              <p>
                The answer isn{"'"}t working harder between projects. It{"'"}s having a system
                that{" "}
                <span className="font-semibold text-foreground">
                  generates qualified enquiries for you — even when you{"'"}re heads-down
                  on a large garden
                </span>
                .
              </p>
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Landscapers
              </h2>
              <p>
                We build one system that takes a homeowner from{" "}
                <span className="font-semibold text-foreground">
                  "I want to transform my garden"
                </span>{" "}
                to{" "}
                <span className="font-semibold text-foreground">
                  "I{"'"}ve booked this company — and I{"'"}m keeping them for maintenance."
                </span>
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
                Landscaping job values vary significantly. A garden tidy or small
                patio might be{" "}
                <span className="font-semibold text-foreground">£500–£1,500</span>. A
                full garden redesign with hard landscaping is often{" "}
                <span className="font-semibold text-foreground">£5,000–£20,000+</span>.
                A monthly maintenance contract is typically{" "}
                <span className="font-semibold text-foreground">£120–£350 per visit</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), even a conservative outcome
                of 2 additional small projects at £1,200 each and 3 new maintenance
                clients at £180/month gives you{" "}
                <span className="font-semibold text-foreground">
                  £2,400 in project revenue plus £540/month in new recurring income
                </span>
                . Those maintenance clients alone pay for the system inside three months
                — and they compound over time.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Landscapers
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A landscaping company in the Home Counties was
                relying entirely on word of mouth and had a slow spring. Within 8
                weeks of launching their NobleLeads system, they had 14 new project
                enquiries in the first month, converted 6 and captured 4 ongoing
                maintenance clients — turning a seasonal dip into their best
                quarter on record."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Landscapers
              </h2>
              <p>
                We{"'"}ll match you to the right level based on the type of work you want
                and where your business is now:
              </p>
              <TradePackages
                core="A portfolio-quality website built to convert visitors into enquiries, with CRM set up so every lead is tracked from first contact."
                growth="Everything in Core plus seasonal Google Ads, review automation and maintenance upsell sequences to turn projects into recurring income."
                dominate="For landscaping businesses targeting commercial contracts, new geographic areas or larger development projects."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Landscapers Like You"
              items={faqItems}
            />
          </SectionReveal>

          <RelatedTrades currentHref="/landscapers" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Keep Your Diary Full Between Projects?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your landscaping
                business — where the work comes from now, what you want more of and
                how a proper lead system could get you there.
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
