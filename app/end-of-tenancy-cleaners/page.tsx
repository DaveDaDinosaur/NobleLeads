import type { Metadata } from "next"
import Link from "next/link"
import { Users, Search, Building2, Clock } from "lucide-react"

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

const primaryKeyword = "end of tenancy cleaning marketing UK"
const canonicalPath = "/end-of-tenancy-cleaners"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with end-of-tenancy cleaning businesses?",
    answer:
      "Yes. We understand that EOT cleaning has two distinct customer types — tenants trying to secure their deposit and letting agents needing a reliable contractor — and we build campaigns and positioning for both.",
  },
  {
    question: "How quickly will I start seeing new EOT cleaning enquiries?",
    answer:
      "With Google Ads running, most end-of-tenancy cleaners start seeing new leads within 2–3 weeks. EOT searches are highly intent-driven — people search when they're about to move — so conversion rates are typically strong.",
  },
  {
    question: "Can you help me build relationships with letting agents?",
    answer:
      "Yes. Letting agent relationships are the highest-value asset in this industry — one good relationship can generate dozens of jobs per year. We build dedicated pages, professional credentials and outreach systems to open those doors.",
  },
  {
    question: "I miss overnight and weekend enquiries. Can the system help?",
    answer:
      "Yes. Tenants often book late in the evening when they've just received a move-out notice. The system sends an instant automated response to every enquiry regardless of time — so they feel confirmed and don't go looking elsewhere.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to rolling monthly.",
  },
  {
    question: "Do you work with sole traders as well as larger EOT cleaning companies?",
    answer:
      "We work with both. The right package depends on the volume you want and whether you're also targeting letting agent contracts alongside individual tenant bookings.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with end-of-tenancy cleaning businesses across the UK. Campaigns are always targeted to your realistic service area so every enquiry is genuinely local.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: Users,
    heading: "Paying for Shared Leads",
    body: "On Bark or Checkatrade, your price is compared against four other cleaners before the customer has seen any of your work. The cheapest usually wins.",
  },
  {
    icon: Search,
    heading: "Not Ranking for EOT Searches",
    body: "Tenants search specifically for 'end of tenancy cleaning near me'. If you're not appearing locally for those searches, that job goes straight to whoever is.",
  },
  {
    icon: Building2,
    heading: "No Letting Agent Relationships",
    body: "Letting agents are the most reliable source of repeat EOT work. Without the right positioning, you're invisible to the decision-makers who control that volume.",
  },
  {
    icon: Clock,
    heading: "Overnight Enquiries Going Unanswered",
    body: "Tenants often search in the evening after receiving notice. Without an instant response, they book the first company that replies — usually a competitor.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Website That Targets Tenants and Letting Agents Separately",
    body: (
      <>
        Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        for EOT cleaners include dedicated pages for tenants (deposit-protection
        focus, fixed pricing, guarantees) and letting agents (reliability,
        volume capacity, account management) — with booking forms and
        quote requests that route to your CRM automatically.
      </>
    ),
  },
  {
    title: "Google Ads That Capture High-Intent EOT Searches",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for end-of-tenancy cleaners
        </Link>{" "}
        targeting the searches tenants make when they{"'"}re about to move —
        high intent, urgent, ready to book. Your ads appear above comparison
        sites so customers can reach you directly without the lead being
        resold to four competitors.
      </>
    ),
  },
  {
    title: "Instant Response and Letting Agent Follow-Up",
    body: (
      <>
        Every enquiry — day or night — gets an instant automated response to
        confirm receipt and set expectations. Letting agent prospects are
        tracked through a longer nurture sequence in your{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM pipeline
        </Link>{" "}
        — so a one-off job from an agent becomes the start of an ongoing
        relationship, not a forgotten contact.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "End of Tenancy Cleaning Marketing UK | More Bookings",
  description:
    "NobleLeads delivers marketing for end-of-tenancy cleaning companies UK-wide using conversion websites, Google Ads and CRM automation so you can win more direct bookings and letting agent relationships.",
  canonicalPath,
})

export default function EndOfTenancyCleanersPage() {
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
                Trade Landing Page · End of Tenancy Cleaners
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                End of Tenancy Cleaning Marketing That Wins Direct Bookings
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                End-of-tenancy cleaning is urgent, time-sensitive and searched for on
                Google almost every time. The problem is that most of that search
                traffic hits comparison sites and lead resellers before it reaches
                local cleaners. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — so you capture those searches directly, build letting agent
                relationships that provide consistent repeat volume and never miss
                a booking because someone enquired outside business hours.
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
                  EOT cleaning business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why End-of-Tenancy Cleaners Struggle to Fill Their Calendars
              </h2>
              <p>
                EOT cleaning demand is constant and predictable — people move all year
                round. The challenge is that{" "}
                <span className="font-semibold text-foreground">
                  most of that demand is being captured by aggregators before it reaches
                  local cleaners like yours
                </span>
                .
              </p>
              <PainPointsGrid items={painPoints} />
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for End-of-Tenancy Cleaners
              </h2>
              <p>
                We build one system that captures both urgent tenant bookings and
                high-value letting agent relationships — so you{"'"}re never dependent
                on one source of work.
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
                A standard end-of-tenancy clean is typically{" "}
                <span className="font-semibold text-foreground">£150–£400</span>{" "}
                depending on property size. A letting agent who refers you regularly
                could be worth{" "}
                <span className="font-semibold text-foreground">
                  £2,000–£8,000+ per year
                </span>{" "}
                in consistent, predictable bookings.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), adding 8 extra EOT cleans
                per month at £220 average gives you{" "}
                <span className="font-semibold text-foreground">
                  £1,760 in additional monthly revenue
                </span>
                . Land one letting agent relationship and the number grows significantly
                — month after month.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real EOT Cleaning Businesses
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: An end-of-tenancy cleaning company in Birmingham was
                relying on Bark and a Facebook page. Within 6 weeks of launching their
                NobleLeads system, they had 18 direct EOT bookings in the first month,
                three letting agents had made contact and the overnight response system
                recovered five bookings that would previously have gone unanswered."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for End-of-Tenancy Cleaners
              </h2>
              <TradePackages
                core="A professional website with separate tenant and letting agent pages, online booking and every enquiry automatically tracked and responded to."
                growth="Everything in Core plus Google Ads targeting EOT searches, 24/7 automated response and letting agent outreach sequences."
                dominate="For EOT cleaning businesses expanding into corporate relocations, property management contracts or new service areas."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From EOT Cleaning Business Owners Like You"
              items={faqItems}
            />
          </SectionReveal>

          <RelatedTrades currentHref="/end-of-tenancy-cleaners" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Stop Losing EOT Bookings to Comparison Sites?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your EOT cleaning
                business — how bookings come in now and what a proper direct lead
                system could change.
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
