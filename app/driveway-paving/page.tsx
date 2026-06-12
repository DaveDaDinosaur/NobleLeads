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

const primaryKeyword = "marketing for driveway and paving companies UK"
const canonicalPath = "/driveway-paving"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with driveway and paving companies?",
    answer:
      "Yes. We understand the high-ticket nature of driveway work, the trust issues that exist in the industry and the importance of looking credible and professional online before a customer will let you quote.",
  },
  {
    question: "How long before I start seeing new driveway enquiries?",
    answer:
      "With Google Ads running, most driveway companies start seeing qualified leads within 2–3 weeks. Because the job values are high and customers take time to decide, we also build follow-up sequences to nurture prospects who are comparing multiple quotes.",
  },
  {
    question: "The driveway trade has a reputation problem with scammers. How do you deal with that?",
    answer:
      "We build trust signals directly into everything we create — accreditations, before-and-after photography, verified Google reviews, clear pricing transparency and genuine company information. Customers can see you're legitimate before they even pick up the phone.",
  },
  {
    question: "Can you help me win commercial driveway and car park contracts?",
    answer:
      "Yes. Commercial paving, car park resurfacing and estate contracts are high value and often repeat. We can build dedicated landing pages and campaigns targeting facilities managers, property developers and commercial clients.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system, then move to rolling monthly.",
  },
  {
    question: "Do you work with smaller driveway teams or only larger companies?",
    answer:
      "We work with small teams and growing companies. The key is that you do quality work, have good reviews (or are committed to building them) and want to grow beyond where referrals and Checkatrade take you.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with driveway and paving companies across the UK. All campaigns are targeted to your realistic travel radius so every lead is a genuine opportunity.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Driveway & Paving Marketing Agency UK | More Leads — NobleLeads",
  description:
    "NobleLeads delivers marketing for driveway and paving companies UK-wide using conversion websites, Google Ads and CRM automation so you can win more high-value driveway installs and paving contracts.",
  canonicalPath,
})

export default function DrivewayPavingPage() {
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
                Trade Landing Page · Driveway &amp; Paving
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Driveway &amp; Paving Marketing Agency UK | More Leads — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Driveway and paving work is high ticket — but it{"'"}s also one of the
                most trust-sensitive trades in the UK. Customers have heard the horror
                stories. Before they{"'"}ll invite you to quote, they need to be confident
                you{"'"}re legitimate. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — building the online credibility and lead system that puts you in front
                of customers who are ready to spend, and convinces them you{"'"}re the
                right company before they{"'"}ve even spoken to you.
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
                  driveway business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Section 2: Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Driveway Companies Struggle to Win the Right Enquiries
              </h2>
              <p>
                The driveway trade faces a unique challenge: customers want to spend —
                but they{"'"}re suspicious of almost everyone. The industry{"'"}s reputation
                for rogue traders means that{" "}
                <span className="font-semibold text-foreground">
                  looking credible online isn{"'"}t a nice-to-have, it{"'"}s what gets you
                  the quote in the first place
                </span>
                .
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Customers Google you before they call — and if your online presence
                  looks thin or outdated, they move on to someone who looks more
                  established, even if your work is better.
                </li>
                <li>
                  You{"'"}re competing with companies who spend heavily on Google Ads and
                  have 100+ reviews — making it hard to get a look-in for cold searches
                  in your area.
                </li>
                <li>
                  High job values mean long decision cycles — prospects get three quotes,
                  take a week to decide and often go cold. Without a follow-up system,{" "}
                  <span className="font-semibold text-foreground">
                    you{"'"}re losing jobs you should be winning
                  </span>
                  .
                </li>
                <li>
                  Referrals are great when they come in — but they{"'"}re not scalable,
                  and you can{"'"}t plan your diary or your team around them.
                </li>
              </ul>
              <p>
                The fix is a proper online presence backed by a system that handles
                follow-up automatically — so you{"'"}re winning more of the quotes you
                already do and generating new ones consistently.
              </p>
            </section>
          </SectionReveal>

          {/* Section 3: The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Driveway and Paving Companies
              </h2>
              <p>
                We build a system that makes a customer searching{" "}
                <span className="font-semibold text-foreground">
                  "driveway company near me"
                </span>{" "}
                choose you — because you{"'"}re first, you look legitimate and you respond
                faster than anyone else.
              </p>
              <p className="font-semibold text-foreground">
                Step 1 — A Website That Builds Trust Before the First Call
              </p>
              <p>
                Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                for driveway companies are built around the trust signals customers
                need: before-and-after project photos, verified Google reviews,
                company registration details, insurance confirmation and clear
                materials and pricing transparency — all on a mobile-first site that
                makes requesting a quote effortless.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads That Reach High-Intent Buyers
              </p>
              <p>
                Driveway searches are high intent. Someone searching "block paving
                driveway install [your area]" is ready to spend. We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns targeting exactly those searches
                </Link>{" "}
                in your service area — sending them to dedicated landing pages built
                to convert, not a generic homepage.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Quote Follow-Up That Wins Jobs You{"'"}d Otherwise Lose
              </p>
              <p>
                Driveway customers take time. The{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM and automation system
                </Link>{" "}
                follows up every quote automatically with SMS and email nudges at the
                right intervals — keeping you front of mind without you having to
                manually chase. Missed calls get a text-back within 60 seconds so you
                never lose a warm lead to a faster competitor.
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
                Driveway and paving job values are among the highest in the domestic
                trades. A block paving driveway install is typically{" "}
                <span className="font-semibold text-foreground">£3,000–£8,000</span>.
                A larger driveway or commercial car park can be{" "}
                <span className="font-semibold text-foreground">£10,000–£40,000+</span>.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), you only need the system
                to deliver:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>1 additional residential driveway install per month at £4,500</li>
              </ul>
              <p>
                to achieve a{" "}
                <span className="font-semibold text-foreground">
                  9x return on your monthly investment
                </span>
                . One extra job per month pays for the system many times over — and
                that{"'"}s before factoring in commercial work or referrals from happy
                customers.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Driveway Companies
              </h2>
              <p>
                Here{"'"}s the pattern we see when a driveway or paving company moves
                from referrals and lead-buy sites to a structured NobleLeads system.
              </p>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A block paving company in the Midlands was relying on
                Checkatrade and occasional Facebook leads. Within 7 weeks of launching
                their NobleLeads system, they had 9 new quote requests in the first
                month, converted 4 into jobs and closed their largest single contract
                to date — a commercial car park resurfacing job worth £18,500 that
                came directly from Google."
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: Pricing */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Driveway and Paving Companies
              </h2>
              <p>
                We{"'"}ll match you to the right level based on your current setup and
                the type of work you want more of:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a credible, trust-focused website displaying your project portfolio
                  and accreditations, with every enquiry captured and tracked.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus Google Ads targeting high-value driveway
                  searches, quote follow-up automation and missed call text-back.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for driveway companies targeting commercial contracts, housing
                  developers or expanding across multiple service areas.
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
              title="Questions From Driveway Companies Like You"
              items={faqItems}
            />
          </SectionReveal>

          {/* Section 8: Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Win More High-Value Driveway Jobs?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your driveway business
                — what{"'"}s working now, what you want more of and how a proper lead
                system could get you there.
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
