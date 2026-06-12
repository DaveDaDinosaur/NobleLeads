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

const primaryKeyword = "marketing for builders UK"
const canonicalPath = "/builders"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with building companies?",
    answer:
      "Yes. We work with builders across general construction, extensions, loft conversions and refurbishments. Campaigns are built around the job types you actually want more of — not just any enquiry that comes in.",
  },
  {
    question: "How long before I start getting new building enquiries?",
    answer:
      "With Google Ads running, most builders start seeing qualified leads within 2–4 weeks. Because building projects are large purchases, we also build follow-up sequences to nurture prospects who are in the planning phase.",
  },
  {
    question: "Can you help me attract extension and loft conversion work specifically?",
    answer:
      "Absolutely. Extension and loft conversion searches are high intent and high value. We build dedicated landing pages for each job type targeting the specific searches homeowners use when they're ready to proceed.",
  },
  {
    question: "I get a lot of enquiries already — I need better quality jobs, not more volume.",
    answer:
      "That's a common position for established builders. We can tune campaigns and landing pages to attract higher-value projects and better-qualified clients — filtering out the tyre-kickers and focusing on homeowners with realistic budgets and firm plans.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to rolling monthly.",
  },
  {
    question: "Do you work with sole traders or only larger building firms?",
    answer:
      "We work with sole traders through to firms with multiple teams. The right package depends on your capacity and the type of work you're targeting.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with builders across the UK. All campaigns target your real service area — whether that's a single borough or a wider county radius.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Builder Marketing Agency UK | More Leads, More Projects — NobleLeads",
  description:
    "NobleLeads delivers marketing for builders UK-wide using conversion websites, Google Ads and CRM automation so you can win more extensions, loft conversions and refurbishment projects consistently.",
  canonicalPath,
})

export default function BuildersPage() {
  const faqSchema = getFAQPageSchema(faqItems)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · Builders
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Builder Marketing Agency UK | More Leads, More Projects — NobleLeads
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
                  Book Your Free Strategy Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A clear look at what{"'"}s possible for your
                  building business.
                </p>
              </div>
            </header>
          </SectionReveal>

          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Referrals carry you when they{"'"}re flowing — but there{"'"}s no tap to
                  turn on when a large project finishes and the pipeline empties.
                </li>
                <li>
                  You{"'"}re being found on Google by the wrong people — homeowners with
                  unclear briefs, no budget or just looking for a ballpark figure they
                  never intend to act on.
                </li>
                <li>
                  Your website (if you have one) doesn{"'"}t do justice to your completed
                  projects — so customers compare you against builders with slicker
                  online presence and often choose them instead.
                </li>
                <li>
                  Long project timelines mean{" "}
                  <span className="font-semibold text-foreground">
                    leads go cold while you{"'"}re heads down on a current job
                  </span>{" "}
                  — and without a follow-up system, they quietly book someone else.
                </li>
              </ul>
            </section>
          </SectionReveal>

          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Builders
              </h2>
              <p className="font-semibold text-foreground">
                Step 1 — A Project Portfolio Website That Attracts Serious Buyers
              </p>
              <p>
                Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                for builders lead with completed project photography, client
                testimonials, accreditations (FMB, NHBC, Trustmark) and dedicated
                service pages for extensions, loft conversions, refurbishments and
                new builds — each built to rank and convert.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads Targeting Homeowners Ready to Build
              </p>
              <p>
                We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for builders
                </Link>{" "}
                targeting the searches that signal genuine intent — "extension
                builders near me", "loft conversion quote [town]", "house
                refurbishment contractors". High intent, your service area,
                landing pages built to pre-qualify before they make contact.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Pipeline Management and Long-Cycle Follow-Up
              </p>
              <p>
                Building enquiries take weeks or months to convert. The{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM and automation system
                </Link>{" "}
                keeps every prospect warm with timed follow-ups — so when they{"'"}re
                ready to commit, you{"'"}re the builder they{"'"}ve been hearing from, not
                the one they{"'"}ve forgotten about.
              </p>
            </section>
          </SectionReveal>

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

          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Builders
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a project-led website with your completed work front and centre,
                  CRM set up and every enquiry tracked.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus Google Ads, long-cycle lead nurturing and
                  automated follow-up to close more of your existing quotes.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for building firms targeting commercial contracts, housing developers
                  or expanding across multiple areas.
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
            <FAQAccordionSection title="Questions From Builders Like You" items={faqItems} />
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Build a Pipeline You Can Actually Plan Around?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick conversation about your building business — the
                projects you want more of and what a proper lead system could look like
                for you.
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
