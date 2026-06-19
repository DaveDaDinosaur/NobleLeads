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

const primaryKeyword = "marketing for plumbers UK"
const canonicalPath = "/plumbers"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with plumbing businesses?",
    answer:
      "Yes. We understand the difference between emergency call-out work, planned bathroom installations, boiler replacements and commercial contracts — and we build your campaigns around the jobs that are most profitable for you.",
  },
  {
    question: "How quickly will I start seeing new plumbing enquiries?",
    answer:
      "With Google Ads running, most plumbers see new leads within 2–3 weeks of going live. We also set up your Google Business Profile properly from day one, which starts generating organic enquiries alongside paid traffic.",
  },
  {
    question: "Can you help me get more boiler installation and bathroom fit work instead of just call-outs?",
    answer:
      "Absolutely. We build dedicated landing pages and campaigns targeting higher-value planned work — boiler installs, bathroom renovations and heating system upgrades — so you get the mix of work that suits your business.",
  },
  {
    question: "I miss calls when I'm on jobs. Can the system handle that?",
    answer:
      "That's one of the most valuable parts of the system. When you miss a call, an automated text goes out within 60 seconds letting the customer know you'll call back shortly. Most people will wait rather than ring the next plumber.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to a rolling monthly arrangement.",
  },
  {
    question: "Do you work with Gas Safe registered plumbers only?",
    answer:
      "Not exclusively — we work with all plumbers, whether your focus is heating, gas, general plumbing or a mix. We'll make sure your registrations and qualifications are displayed correctly on everything we build.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with plumbers across the UK. Campaigns are always targeted to your service area so you're not paying to advertise in places you don't want to travel.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Plumber Marketing Agency UK | More Leads, More Jobs — NobleLeads",
  description:
    "NobleLeads delivers marketing for plumbers UK-wide using conversion websites, Google Ads and CRM automation so you can win consistent work — from emergency call-outs to planned boiler installs and bathroom fits.",
  canonicalPath,
})

export default function PlumbersPage() {
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
                Trade Landing Page · Plumbers
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Plumber Marketing Agency UK | More Leads, More Jobs — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Plumbers in the UK are rarely short of work — but too much of it
                arrives unpredictably, at the wrong price or as low-value emergency
                call-outs that fill the diary without building the business. NobleLeads
                focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                so you can get a consistent pipeline of the right jobs — whether
                that{"'"}s boiler installs, bathroom renovations or commercial maintenance
                contracts — without relying on directories or whoever rings first.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A clear picture of what{"'"}s possible for
                  your plumbing business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Section 2: Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Plumbers Struggle to Get the Right Work Consistently
              </h2>
              <p>
                The problem most plumbers face isn{"'"}t a shortage of calls — it{"'"}s a
                shortage of{" "}
                <span className="font-semibold text-foreground">
                  the right calls at the right price
                </span>
                . Sound familiar?
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You{"'"}re reactive — most of your work comes from whoever rings first,
                  not from a system you{"'"}re in control of.
                </li>
                <li>
                  You{"'"}re losing higher-value planned jobs — boiler replacements,
                  bathroom fits, heating upgrades — to competitors who show up first on
                  Google or have more visible reviews.
                </li>
                <li>
                  You miss calls while you{"'"}re on a job, and by the time you ring back,{" "}
                  <span className="font-semibold text-foreground">
                    they{"'"}ve already booked someone else
                  </span>
                  .
                </li>
                <li>
                  There{"'"}s no system to follow up quotes or win back customers who
                  haven{"'"}t booked yet — so good prospects just quietly disappear.
                </li>
              </ul>
              <p>
                The fix isn{"'"}t working harder. It{"'"}s having{" "}
                <span className="font-semibold text-foreground">
                  a system that keeps the right enquiries flowing and responds to
                  them faster than any competitor can
                </span>
                .
              </p>
            </section>
          </SectionReveal>

          {/* Section 3: The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Plumbers
              </h2>
              <p>
                We build a single joined-up system so when someone searches{" "}
                <span className="font-semibold text-foreground">
                  "plumber near me"
                </span>{" "}
                or{" "}
                <span className="font-semibold text-foreground">
                  "boiler installation in [your area]"
                </span>
                , they find you, trust you and book — not the next person on the list.
              </p>
              <p className="font-semibold text-foreground">
                Step 1 — A Website That Earns Trust and Generates Enquiries
              </p>
              <p>
                Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                are built for plumbers specifically — showcasing Gas Safe registration,
                Trustmark accreditation, completed project photos and Google reviews,
                with clear click-to-call on mobile and simple forms that send enquiries
                straight into your pipeline.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads That Target High-Value Searches
              </p>
              <p>
                We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for plumbers
                </Link>{" "}
                targeting the searches with the highest intent and value in your service
                area — boiler installs, bathroom quotes, heating repairs. Not just
                emergency call-outs, but the planned work that{"'"}s easier to price and
                more profitable to do.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Missed Call Text-Back and Quote Follow-Up
              </p>
              <p>
                When you miss a call on site, the system texts the customer back within
                60 seconds. Every quote is followed up automatically. Your{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM pipeline
                </Link>{" "}
                shows you every enquiry, quote and booking in one place — so you{"'"}re
                never guessing where your next job is coming from.
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
                Plumbing job values span a wide range. An emergency call-out might be{" "}
                <span className="font-semibold text-foreground">£120–£250</span>. A
                boiler replacement is typically{" "}
                <span className="font-semibold text-foreground">£2,000–£3,500</span>.
                A bathroom renovation can be{" "}
                <span className="font-semibold text-foreground">£4,000–£12,000+</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), even a modest result of:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>3 additional service visits at £180 average, and</li>
                <li>1 additional boiler install at £2,500</li>
              </ul>
              <p>
                gives you{" "}
                <span className="font-semibold text-foreground">
                  £3,040 in additional revenue on a £495/month fee
                </span>
                . Add one bathroom project and the system pays for itself several
                times over.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Plumbers
              </h2>
              <p>
                Here{"'"}s the pattern we typically see when a plumber moves from
                reactive word of mouth to a structured NobleLeads system.
              </p>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A Gas Safe plumber in the South East was relying on
                Checkatrade and referrals for most of their work. Within 5 weeks of
                launching their NobleLeads system, they were receiving 12+ new
                enquiries per month, the missed call text-back recovered three jobs
                in the first fortnight, and they closed their first boiler install
                from a cold Google search within three weeks of going live."
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: Pricing */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Plumbers
              </h2>
              <p>
                We{"'"}ll match you to the right level based on your current setup and
                the work you want more of:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a professional website displaying your accreditations correctly,
                  CRM set up and every enquiry captured from your Google Business
                  Profile and website.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus Google Ads targeting your highest-value
                  searches, missed call text-back and automated quote follow-up.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for plumbers expanding into new areas or targeting commercial
                  maintenance contracts and property management work.
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
              title="Questions From Plumbers Like You"
              items={faqItems}
            />
          </SectionReveal>

          {/* Section 8: Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Stop Losing Jobs to Slower Competitors?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your plumbing
                business — what you{"'"}re doing now, what{"'"}s working and what a proper
                lead system could look like for you.
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
