import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { FAQAccordionSection } from "@/components/faq/faq-accordion-section"
import { buildMetadata } from "../(shared)/seo-config"
import { getFAQPageSchema, getLocalBusinessSchema } from "../(shared)/schema"

const primaryKeyword = "end of tenancy cleaning marketing UK"
const canonicalPath = "/end-of-tenancy-cleaners"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with end-of-tenancy cleaning companies?",
    answer:
      "Yes. We understand the EOT cleaning market — the time-sensitive nature of the work, the importance of letting agent and landlord relationships and the difference between volume domestic EOT work and premium deep-clean services.",
  },
  {
    question: "How long before I start getting new EOT cleaning enquiries?",
    answer:
      "With Google Ads running, most EOT cleaning companies start seeing new leads within 2–3 weeks. EOT searches are high intent and time-sensitive — people searching are usually booking within days, not weeks.",
  },
  {
    question: "Can you help me build relationships with letting agents for regular referrals?",
    answer:
      "Yes. Letting agents are the highest-value referral source for an EOT cleaning business. We build the online presence that makes you the obvious professional choice when an agent is looking for a reliable cleaner to recommend to their landlords.",
  },
  {
    question: "I also offer regular domestic cleaning. Can you promote both?",
    answer:
      "Absolutely. We can build your system to capture both EOT enquiries and regular domestic cleaning clients — with separate landing pages and campaigns for each so you're not diluting either message.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system, then move to rolling monthly.",
  },
  {
    question: "Do you work with sole operators as well as cleaning companies with staff?",
    answer:
      "We work with both. Whether you're handling jobs alone or running a team of cleaners, the system is built to match your capacity and the volume you want to take on.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with end-of-tenancy cleaning businesses across the UK. Campaigns are targeted to your real service area.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "End of Tenancy Cleaning Marketing Agency UK | More Bookings — NobleLeads",
  description:
    "NobleLeads delivers end of tenancy cleaning marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more EOT bookings and build repeat relationships with letting agents.",
  canonicalPath,
})

export default function EndOfTenancyCleanersPage() {
  const faqSchema = getFAQPageSchema(faqItems)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · End of Tenancy Cleaners
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                End of Tenancy Cleaning Marketing Agency UK | More Bookings — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                End-of-tenancy cleaning is one of the most time-sensitive service
                trades in the UK. Tenants and landlords need a reliable cleaner fast —
                often within 24–48 hours of a tenancy ending. The business goes to
                whoever shows up first in search and responds quickest.
                NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — making sure that cleaner is you, with a system that captures the
                enquiry and responds before your competitors do.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A straightforward look at what{"'"}s possible
                  for your cleaning business.
                </p>
              </div>
            </header>
          </SectionReveal>

          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why EOT Cleaning Businesses Struggle to Scale Past Word of Mouth
              </h2>
              <p>
                End-of-tenancy cleaning has consistent demand — people move house
                constantly — but capturing that demand online is harder than it should
                be.{" "}
                <span className="font-semibold text-foreground">
                  Most of the search traffic goes to large cleaning aggregators and
                  booking platforms
                </span>{" "}
                that charge per lead and commoditise your service.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You{"'"}re relying on Bark, Checkatrade or similar platforms where
                  you{"'"}re one of 10 cleaners competing on price for every job.
                </li>
                <li>
                  You{"'"}re not ranking on Google for EOT searches in your area — so
                  the volume of direct enquiries is lower than it should be.
                </li>
                <li>
                  Letting agents and landlords who could send you consistent volume
                  don{"'"}t know you exist because you don{"'"}t have the professional online
                  presence to get in front of them.
                </li>
                <li>
                  EOT enquiries come in at short notice and outside business hours.
                  Without an instant response system,{" "}
                  <span className="font-semibold text-foreground">
                    you{"'"}re losing bookings overnight
                  </span>{" "}
                  to whoever responds first.
                </li>
              </ul>
            </section>
          </SectionReveal>

          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for End-of-Tenancy Cleaners
              </h2>
              <p className="font-semibold text-foreground">
                Step 1 — A Website That Ranks for EOT Searches and Converts Fast
              </p>
              <p>
                Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                for EOT cleaners are built for speed of decision — clear pricing from,
                instant quote forms, Google reviews prominently displayed and
                guaranteed clean policies that reduce the friction of booking. Tenants
                can request a booking in under two minutes.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads Capturing Urgent Local Searches
              </p>
              <p>
                We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for EOT cleaning companies
                </Link>{" "}
                targeting the highest-intent searches — "end of tenancy cleaning
                [town]", "move out clean near me", "professional EOT cleaner [area]".
                These are people who need a cleaner now, not in a week — and they
                book fast if you{"'"}re there.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Instant Response and Letting Agent Relationship Building
              </p>
              <p>
                Enquiries that come in at 10pm still need a response tonight. The{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM and automation system
                </Link>{" "}
                sends an instant confirmation to every new enquiry and follows up until
                they book. It also tracks your letting agent and landlord contacts so
                you can build the repeat relationships that provide consistent volume
                without fighting for every job individually.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What This Looks Like in Real Numbers
              </h2>
              <p>
                An end-of-tenancy clean for a standard flat typically earns{" "}
                <span className="font-semibold text-foreground">£120–£250</span>. A
                larger house clean can be{" "}
                <span className="font-semibold text-foreground">£250–£450+</span>. A
                letting agent who sends you 6–8 cleans per month is worth{" "}
                <span className="font-semibold text-foreground">
                  £900–£2,000/month in recurring revenue
                </span>{" "}
                from a single relationship.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), winning just{" "}
                <span className="font-semibold text-foreground">
                  one letting agent relationship providing 6 cleans per month
                </span>{" "}
                more than covers your investment — and that relationship compounds
                every month they stay with you.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real EOT Cleaning Businesses
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: An end-of-tenancy cleaning company in Cambridge was
                paying for leads on Bark and getting two to three jobs per week. Within
                7 weeks of launching their NobleLeads system, direct Google enquiries
                had replaced their Bark spend entirely, they had onboarded two local
                letting agents providing consistent weekly volume and their weekly job
                count had doubled — at better margins because they weren{"'"}t paying per
                lead."
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for End-of-Tenancy Cleaners
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a fast, professional website built for EOT bookings with your reviews
                  displayed and every enquiry tracked.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus Google Ads targeting urgent EOT searches,
                  instant automated response and letting agent follow-up sequences.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for EOT cleaning companies expanding into regular domestic cleaning,
                  commercial contracts or multiple service areas.
                </li>
              </ul>
              <p className="text-xs text-muted-foreground/80">
                Full pricing on our{" "}
                <Link href="/pricing" className="font-semibold text-secondary hover:underline">
                  pricing page
                </Link>
                .
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={180}>
            <FAQAccordionSection title="Questions From EOT Cleaning Businesses Like You" items={faqItems} />
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Stop Paying Per Lead and Start Owning Your Enquiries?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick conversation about your EOT cleaning business —
                where your bookings come from now and what a proper lead system could
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
