import type { Metadata } from "next"
import Link from "next/link"
import { Hammer, Search, Clock, AlertTriangle } from "lucide-react"

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

const primaryKeyword = "marketing for bathroom fitters UK"
const canonicalPath = "/bathroom-fitters"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with bathroom fitting businesses?",
    answer:
      "Yes. We understand the long consideration cycle of bathroom purchases, the importance of portfolio photography and how to attract clients who have a real budget rather than people just browsing ideas.",
  },
  {
    question: "How quickly will I start seeing new bathroom enquiries?",
    answer:
      "With Google Ads running, most bathroom fitters start seeing new leads within 2–3 weeks. Because bathroom renovations are considered purchases, we also build follow-up sequences to keep prospects warm through a longer decision process.",
  },
  {
    question: "Can you help me attract higher-budget bathroom jobs?",
    answer:
      "Absolutely. We build portfolio-led websites and campaigns that position you for £8,000–£25,000+ bathroom renovations rather than low-budget refits. The right photography, reviews and credibility signals are what attract serious buyers.",
  },
  {
    question: "I miss enquiries when I'm on site. Can the system help?",
    answer:
      "Yes. Every missed call gets an instant text response, and every web form submission gets an automated reply within seconds. Prospects stay engaged rather than moving on to the next fitter they find.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to rolling monthly.",
  },
  {
    question: "Do you work with sole traders as well as larger bathroom fitting teams?",
    answer:
      "We work with both. Whether you're a one-man band or a team of fitters, the system is built around the volume and job types that match your capacity.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with bathroom fitters across the UK. Campaigns are targeted to your realistic service area and the job values that make sense for your pricing.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: Hammer,
    heading: "Portfolio Invisible Online",
    body: "You've completed stunning bathroom transformations but they're not being seen. Without a strong portfolio online, prospects have no reason to choose you over someone cheaper.",
  },
  {
    icon: Search,
    heading: "Missing High-Intent Searches",
    body: "People searching 'bathroom fitters near me' are ready to spend. If you're not on page one of Google when they search, that job goes straight to whoever is.",
  },
  {
    icon: Clock,
    heading: "Warm Prospects Going Cold",
    body: "A bathroom renovation takes weeks to plan. Without structured follow-up, prospects who were interested three weeks ago have quietly booked someone else.",
  },
  {
    icon: AlertTriangle,
    heading: "Low-Quality or Mismatched Enquiries",
    body: "Enquiries from people with no realistic budget waste your quoting time. Better positioning online filters in serious buyers and filters out the rest.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Portfolio Website Built Around High-Value Bathroom Work",
    body: (
      <>
        Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        for bathroom fitters lead with before-and-after photography, client
        testimonials and clear service pages covering full bathroom renovations,
        en suites and wet rooms, structured to attract buyers with serious
        budgets, not just enquiries.
      </>
    ),
  },
  {
    title: "Google Ads Targeting Ready-to-Buy Searches",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for bathroom fitters
        </Link>{" "}
        targeting searches that signal real buying intent, "bathroom
        installation [your area]", "new bathroom quote", "bathroom fitter near
        me". Each click lands on a page built to convert interest into an
        enquiry, not just browse.
      </>
    ),
  },
  {
    title: "Follow-Up That Nurtures Long Decision Cycles",
    body: (
      <>
        Bathroom decisions take time. The{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM and automation system
        </Link>{" "}
        keeps every prospect warm with timed follow-up messages, so when
        they{"'"}re finally ready to commit, you{"'"}re the fitter they{"'"}ve been
        hearing from, not one they{"'"}ve forgotten.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Bathroom Fitter Marketing Agency UK | More Leads",
  description:
    "NobleLeads delivers marketing for bathroom fitters UK-wide using conversion websites, Google Ads and CRM automation so you can attract more serious bathroom renovation enquiries consistently.",
  canonicalPath,
})

export default function BathroomFittersPage() {
  const faqSchema = getFAQPageSchema(faqItems)
  const serviceSchema = getServiceSchema({
    name: "Bathroom Fitter Marketing",
    description:
      "NobleLeads delivers marketing for bathroom fitters UK-wide using conversion websites, Google Ads and CRM automation so you can attract more serious bathroom renovation enquiries consistently.",
    url: `${BUSINESS_URL}${canonicalPath}`,
  })
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BUSINESS_URL },
    { name: "Bathroom Fitter Marketing", url: `${BUSINESS_URL}${canonicalPath}` },
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
                Trade Landing Page · Bathroom Fitters
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Marketing for Bathroom Fitters That Attracts Serious Enquiries
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Bathroom fitting is one of the highest-value domestic trades in the UK, but the jobs don{"'"}t just land in your inbox. Customers spend weeks
                researching, comparing and second-guessing before they pick up the phone.
                NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>: so you{"'"}re visible when they start searching, credible when they
                compare and first in line when they{"'"}re finally ready to book.
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
                  bathroom fitting business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Bathroom Fitters Struggle to Win Consistent High-Value Work
              </h2>
              <p>
                Bathroom renovation is a considered purchase, which means the fitter
                who{" "}
                <span className="font-semibold text-foreground">
                  stays visible and credible throughout a long research phase
                </span>{" "}
                wins, not just the one who quotes first.
              </p>
              <PainPointsGrid items={painPoints} />
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Bathroom Fitters
              </h2>
              <p>
                We build a system that takes a homeowner from{" "}
                <span className="font-semibold text-foreground">
                  "I think I want a new bathroom"
                </span>{" "}
                to{" "}
                <span className="font-semibold text-foreground">
                  "I{"'"}ve booked this company and I{"'"}m telling everyone about them."
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
                A mid-range bathroom renovation typically runs{" "}
                <span className="font-semibold text-foreground">£6,000–£12,000</span>.
                A high-end master bathroom or full en suite can reach{" "}
                <span className="font-semibold text-foreground">£15,000–£30,000+</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), winning just{" "}
                <span className="font-semibold text-foreground">
                  one additional bathroom renovation per month at £8,000
                </span>{" "}
                returns 16x your monthly fee. Most bathroom fitters on the system see
                significantly more than one additional job per month within 60 days.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Bathroom Fitters
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A bathroom fitter in the Midlands was relying on
                Checkatrade and referrals. Within 6 weeks of launching their NobleLeads
                system, they had 9 new bathroom enquiries in the pipeline, closed 4
                and their average job value increased by £1,800 because the website
                positioned them at a higher tier than before."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Bathroom Fitters
              </h2>
              <TradePackages
                core="A portfolio website built around your completed work and every enquiry tracked from first click to booked job."
                growth="Everything in Core plus Google Ads targeting high-intent searches, missed call response and long-cycle follow-up to close warm prospects."
                dominate="For bathroom fitting businesses expanding into luxury fit-outs, developer contracts or new service areas."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Bathroom Fitters Like You"
              items={faqItems}
            />
          </SectionReveal>

          <RelatedTrades currentHref="/bathroom-fitters" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Win More Bathroom Projects Worth Winning?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your bathroom fitting
                business, what you{"'"}re closing now and how a proper lead system could
                change those numbers.
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
