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

const primaryKeyword = "landscaping marketing agency UK"
const canonicalPath = "/landscapers"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with landscaping businesses?",
    answer:
      "Yes. We work with landscapers and garden services companies across the UK and understand the difference between one-off garden transformations, ongoing maintenance contracts and commercial landscaping work. Campaigns are built around what you actually want more of.",
  },
  {
    question: "How long before I start seeing new landscaping enquiries?",
    answer:
      "With Google Ads running, most landscapers see new enquiries within 2–4 weeks of going live. Because landscaping is often a considered purchase, we also build follow-up sequences that nurture prospects who are comparing quotes.",
  },
  {
    question: "Can you help me win more ongoing maintenance contracts?",
    answer:
      "Absolutely. Recurring maintenance contracts are some of the most valuable work for a landscaping business. We build dedicated pages and campaigns targeting homeowners and commercial clients who want regular garden care, not just one-off projects.",
  },
  {
    question: "My work is very seasonal. Can a system work year-round?",
    answer:
      "Yes — and it becomes one of your biggest advantages. We time campaigns to peak demand periods (spring and early summer) and use the quieter months to build SEO, collect reviews and warm up enquiries so you hit the busy season with a full pipeline.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then roll monthly.",
  },
  {
    question: "Do you work with sole traders as well as larger landscaping teams?",
    answer:
      "We work with sole traders and growing teams. What matters is that you deliver strong work, have or can build solid reviews and want to grow in a sustainable, controlled way.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with landscapers across the UK. All campaigns are targeted to your service area, whether that's a single town or a wider county radius.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Landscaper Marketing Agency UK | More Leads — NobleLeads",
  description:
    "NobleLeads delivers landscaping marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more garden projects and maintenance contracts consistently.",
  canonicalPath,
})

export default function LandscapersPage() {
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
                Trade Landing Page · Landscapers
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Landscaper Marketing Agency UK | More Leads — NobleLeads
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

          {/* Section 2: Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You finish a large project and immediately need to hustle for the
                  next one — there{"'"}s no pipeline sitting ready.
                </li>
                <li>
                  Your work is visually stunning but your online presence doesn{"'"}t
                  reflect it — competitors with worse portfolios rank above you because
                  they{"'"}ve invested in Google.
                </li>
                <li>
                  You{"'"}re not capturing ongoing maintenance clients after project
                  completion, which means{" "}
                  <span className="font-semibold text-foreground">
                    recurring revenue is walking out the door
                  </span>{" "}
                  with every job you finish.
                </li>
                <li>
                  Enquiries slow to a trickle in autumn and winter, making it
                  impossible to plan staffing or investment in equipment.
                </li>
              </ul>
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

          {/* Section 3: The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
              <p className="font-semibold text-foreground">
                Step 1 — A Portfolio Website That Converts Browsers into Enquiries
              </p>
              <p>
                Your best selling tool is your portfolio. Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                are built to showcase before-and-after photography, project
                testimonials and clear service pages — with quote request forms and
                consultation bookings that send leads directly into your CRM.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Targeted Ads and SEO During Peak Demand
              </p>
              <p>
                Landscaping has clear search seasons. We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for landscapers
                </Link>{" "}
                that ramp up ahead of spring and early summer — when homeowners are
                actively searching and budgets are ready — and build your local SEO
                presence so you{"'"}re ranking organically by the time the next peak arrives.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Automation That Upsells Maintenance and Follows Up Quotes
              </p>
              <p>
                Every project enquiry is followed up automatically. Every completed
                job triggers a review request and a maintenance offer — turning one-off
                clients into recurring revenue. Your{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM pipeline
                </Link>{" "}
                gives you a clear view of quotes, bookings and ongoing contracts all in
                one place.
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
                Landscaping job values vary significantly. A garden tidy or small
                patio might be{" "}
                <span className="font-semibold text-foreground">£500–£1,500</span>. A
                full garden redesign with hard landscaping is often{" "}
                <span className="font-semibold text-foreground">£5,000–£20,000+</span>.
                A monthly maintenance contract is typically{" "}
                <span className="font-semibold text-foreground">
                  £120–£350 per visit
                </span>
                .
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), even a conservative
                outcome of:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>2 additional small projects at £1,200 each, and</li>
                <li>3 new maintenance clients at £180/month each</li>
              </ul>
              <p>
                gives you{" "}
                <span className="font-semibold text-foreground">
                  £2,400 in project revenue plus £540/month in new recurring income
                </span>
                . The maintenance clients alone pay for the system inside three months
                — and they compound over time.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Landscapers
              </h2>
              <p>
                Here{"'"}s the pattern we see when a landscaping business moves from
                relying on referrals to running a proper NobleLeads system.
              </p>
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

          {/* Section 6: Pricing */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Landscapers
              </h2>
              <p>
                We{"'"}ll match you to the right level based on the type of work you want
                and where your business is now:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a portfolio-quality website built to convert visitors into enquiries,
                  with CRM set up so every lead is tracked.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus seasonal Google Ads, review automation and
                  maintenance upsell sequences.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for landscaping businesses targeting commercial contracts, new
                  geographic areas or larger development projects.
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
              title="Questions From Landscapers Like You"
              items={faqItems}
            />
          </SectionReveal>

          {/* Section 8: Final CTA */}
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

      <JsonLd data={[getLocalBusinessSchema(), faqSchema]} />
    </main>
  )
}
