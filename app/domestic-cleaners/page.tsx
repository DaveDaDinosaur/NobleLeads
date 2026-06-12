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

const primaryKeyword = "marketing for domestic cleaning companies UK"
const canonicalPath = "/domestic-cleaners"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with domestic cleaning businesses?",
    answer:
      "Yes. We understand the recurring-revenue model of domestic cleaning — the importance of low churn, high lifetime value clients and the difference between one-off deep cleans and regular weekly or fortnightly visits.",
  },
  {
    question: "How long before I start getting new cleaning enquiries?",
    answer:
      "With Google Ads running, most cleaning businesses start seeing new leads within 2–3 weeks. Because domestic cleaning is a trust-based recurring purchase, we also build review and referral systems that compound over time.",
  },
  {
    question: "Can you help me attract clients who want regular weekly cleans rather than one-offs?",
    answer:
      "That's the primary focus. We build campaigns and landing pages targeting the search intent that signals ongoing cleaning need — not just one-off jobs — and use follow-up sequences to convert enquiries into regular clients.",
  },
  {
    question: "I'm losing clients to cheaper cleaners. Can you help with that?",
    answer:
      "Yes. Price competition is almost always a trust and visibility problem. When clients genuinely trust you — backed by strong reviews, a professional online presence and consistent communication — they stay and they pay your price.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to rolling monthly.",
  },
  {
    question: "Do you work with sole traders as well as cleaning companies with staff?",
    answer:
      "We work with both. Whether you're a sole cleaner looking to build a regular client base or a business with several cleaners looking to grow sustainably, we can match the right package to where you are now.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with domestic cleaning businesses across the UK. All campaigns are targeted to your real service area so every enquiry is genuinely local.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Domestic Cleaning Marketing Agency UK | More Regular Clients — NobleLeads",
  description:
    "NobleLeads delivers marketing for domestic cleaning companies UK-wide using conversion websites, Google Ads and CRM automation so you can build a full book of loyal regular cleaning clients.",
  canonicalPath,
})

export default function DomesticCleanersPage() {
  const faqSchema = getFAQPageSchema(faqItems)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          {/* Section 1: Hero */}
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · Domestic Cleaners
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Domestic Cleaning Marketing Agency UK | More Regular Clients — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                A domestic cleaning business lives or dies on recurring revenue.
                One-off cleans keep you busy; regular weekly clients build real
                stability. The challenge is finding clients who are ready to commit,
                trust you enough to let you into their home every week and stick around
                long-term. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — attracting the loyal, recurring clients who build a cleaning business
                you can actually depend on.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Your Free Strategy Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A straightforward look at what{"'"}s possible
                  for your cleaning business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Section 2: Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Domestic Cleaning Businesses Struggle to Grow Consistently
              </h2>
              <p>
                Domestic cleaning has one of the highest client lifetime values of any
                service trade — but also one of the highest churn rates if clients
                don{"'"}t feel properly looked after or if a cheaper option appears.{" "}
                <span className="font-semibold text-foreground">
                  The business is only as strong as your ability to attract new clients
                  faster than you lose old ones.
                </span>
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You{"'"}re relying on word of mouth and the occasional Facebook post,
                  which means growth is slow and unpredictable.
                </li>
                <li>
                  You{"'"}re losing enquiries to larger cleaning agencies or platforms
                  like Bark who spend heavily on Google and dominate your local search
                  results.
                </li>
                <li>
                  Clients leave when a slightly cheaper option arrives — because{" "}
                  <span className="font-semibold text-foreground">
                    you haven{"'"}t built the kind of loyalty and trust that makes them
                    stay regardless
                  </span>
                  .
                </li>
                <li>
                  You don{"'"}t have a proper system for responding to enquiries quickly
                  — and in cleaning, the first person to respond usually gets the job.
                </li>
              </ul>
              <p>
                None of this is about your cleaning standard. It{"'"}s about{" "}
                <span className="font-semibold text-foreground">
                  being found first, building trust faster and having a system that
                  converts enquiries before your competitors do
                </span>
                .
              </p>
            </section>
          </SectionReveal>

          {/* Section 3: The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Domestic Cleaners
              </h2>
              <p>
                We build one joined-up system that takes a homeowner from{" "}
                <span className="font-semibold text-foreground">
                  "I need a cleaner I can trust"
                </span>{" "}
                to{" "}
                <span className="font-semibold text-foreground">
                  "I{"'"}m booking a regular weekly clean and recommending them to
                  everyone."
                </span>
              </p>
              <p className="font-semibold text-foreground">
                Step 1 — A Website Built Around Trust and Recurring Bookings
              </p>
              <p>
                Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused websites for cleaning businesses
                </Link>{" "}
                are built around the signals that build trust: DBS checks, insurance
                confirmation, Google reviews, staff profiles and clear service
                descriptions — with booking forms and online consultations that make
                it easy for clients to commit to a regular slot.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads Targeting Clients Ready for a Regular Clean
              </p>
              <p>
                We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for cleaning businesses
                </Link>{" "}
                targeting searches that signal intent to hire a regular cleaner, not
                just a one-off. People searching "weekly cleaner [your area]" or
                "regular house cleaning near me" are exactly your ideal client — and
                we put you in front of them before the agencies do.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Fast Response, Follow-Up and Loyalty Automation
              </p>
              <p>
                Every new enquiry gets an instant response. Every quote that hasn{"'"}t
                booked is followed up automatically. The{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM system
                </Link>{" "}
                also tracks existing clients, flags anyone who{"'"}s missed a clean and
                triggers review requests and referral prompts at the right moment —
                turning your best clients into your best marketing.
              </p>
            </section>
          </SectionReveal>

          {/* Section 4: ROI Example */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What This Looks Like in Real Numbers
              </h2>
              <p>
                A regular fortnightly domestic clean typically earns{" "}
                <span className="font-semibold text-foreground">£60–£120 per visit</span>,
                depending on property size and location. A loyal client on a fortnightly
                schedule is worth{" "}
                <span className="font-semibold text-foreground">
                  £1,500–£3,000+ per year
                </span>{" "}
                in recurring revenue.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), even a conservative result
                of:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>5 new regular fortnightly clients at £80/visit</li>
              </ul>
              <p>
                gives you{" "}
                <span className="font-semibold text-foreground">
                  £800/month in new recurring revenue — from just 5 clients
                </span>
                . Those clients stay for years. The lifetime value of 5 loyal cleaning
                clients easily exceeds £10,000.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Cleaning Businesses
              </h2>
              <p>
                Here{"'"}s the pattern we see when a domestic cleaning business moves
                from referrals and Facebook to a structured NobleLeads system.
              </p>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A domestic cleaning company in Cambridge was relying
                on word of mouth and a small Facebook following. Within 8 weeks of
                launching their NobleLeads system, they had added 11 new regular
                clients, their review count had doubled and the missed enquiry rate
                had dropped to near zero thanks to the automated response system."
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: Pricing */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Domestic Cleaners
              </h2>
              <p>
                We{"'"}ll match you to the right level based on where your business is
                now and how fast you want to grow:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a trust-focused website, online booking and every enquiry captured
                  and tracked. Perfect if you{"'"}re building your client base from scratch.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus Google Ads targeting regular-clean searches,
                  automated follow-up and review generation to build your reputation
                  quickly.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for cleaning businesses expanding into commercial or office cleaning
                  contracts alongside domestic work.
                </li>
              </ul>
              <p className="text-xs text-muted-foreground/80">
                Full pricing is on our{" "}
                <Link href="/pricing" className="font-semibold text-secondary hover:underline">
                  pricing page
                </Link>
                .
              </p>
            </section>
          </SectionReveal>

          {/* Section 7: FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Cleaning Business Owners Like You"
              items={faqItems}
            />
          </SectionReveal>

          {/* Section 8: Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Build a Full Book of Loyal Regular Clients?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your cleaning
                business — how many regular clients you have now, what you want and
                what a proper lead system could deliver.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Your Free Strategy Call
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
