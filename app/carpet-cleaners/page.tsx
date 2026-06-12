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

const primaryKeyword = "carpet cleaning marketing UK"
const canonicalPath = "/carpet-cleaners"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with carpet cleaning businesses?",
    answer:
      "Yes. We understand the recurring nature of carpet cleaning — the mix of domestic annual cleans, end-of-tenancy work and commercial contracts — and we build campaigns around the client types that are most valuable to your business.",
  },
  {
    question: "How long before I start getting new carpet cleaning enquiries?",
    answer:
      "With Google Ads running, most carpet cleaners start seeing new leads within 2–3 weeks. Because carpet cleaning is often a repeat purchase, we also build review and reactivation systems that turn one-off customers into returning clients.",
  },
  {
    question: "Can you help me win more commercial carpet cleaning contracts?",
    answer:
      "Absolutely. Commercial clients — offices, hotels, letting agents — provide high volume, predictable repeat work. We can build dedicated campaigns and landing pages targeting facilities managers and property managers who need regular carpet maintenance.",
  },
  {
    question: "Can you help me get more end-of-tenancy cleaning work?",
    answer:
      "Yes. End-of-tenancy carpet cleaning is high-intent, time-sensitive and often referral-driven through letting agents. We can build pages and campaigns specifically targeting landlords and letting agencies in your area.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system, then move to rolling monthly.",
  },
  {
    question: "Do you work with sole operators as well as larger carpet cleaning companies?",
    answer:
      "We work with both. Whether you're a one-van operation or running multiple teams, the system is built to match your capacity and growth plans.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with carpet cleaners across the UK. All campaigns are targeted to your real service area.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Carpet Cleaning Marketing Agency UK | More Bookings — NobleLeads",
  description:
    "NobleLeads delivers carpet cleaning marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more domestic, end-of-tenancy and commercial carpet cleaning work.",
  canonicalPath,
})

export default function CarpetCleanersPage() {
  const faqSchema = getFAQPageSchema(faqItems)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · Carpet Cleaners
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Carpet Cleaning Marketing Agency UK | More Bookings — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Carpet cleaning has three revenue streams — domestic annual cleans,
                end-of-tenancy work and commercial contracts — and most carpet cleaners
                only tap one or two of them consistently. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                so you{"'"}re getting a steady flow of bookings across all three, with a
                system that turns first-time customers into loyal repeat clients
                automatically.
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
                  carpet cleaning business.
                </p>
              </div>
            </header>
          </SectionReveal>

          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Carpet Cleaners Struggle to Build a Consistent Booking Flow
              </h2>
              <p>
                Carpet cleaning looks simple from the outside — but building a business
                that{"'"}s reliably busy year-round is harder than it sounds.{" "}
                <span className="font-semibold text-foreground">
                  Most carpet cleaners are either chasing new customers constantly or
                  over-relying on a small base of existing clients
                </span>{" "}
                who eventually move, change their habits or find someone cheaper.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Word of mouth is inconsistent — you{"'"}re busy in January and quiet in
                  March with no reliable way to predict or fill the gaps.
                </li>
                <li>
                  You{"'"}re not visible on Google when homeowners search for carpet
                  cleaners near them — larger franchise operations dominate the first
                  page and take the easy bookings.
                </li>
                <li>
                  End-of-tenancy and commercial work is available in your area but
                  you{"'"}re not positioned to attract letting agents and facilities
                  managers who could send you regular volume.
                </li>
                <li>
                  There{"'"}s no system to bring past customers back — so every client
                  you earn has to be replaced, rather than{" "}
                  <span className="font-semibold text-foreground">
                    compounding over time
                  </span>
                  .
                </li>
              </ul>
            </section>
          </SectionReveal>

          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Carpet Cleaners
              </h2>
              <p className="font-semibold text-foreground">
                Step 1 — A Website That Books Domestic, EOT and Commercial Cleans
              </p>
              <p>
                Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                for carpet cleaners have dedicated pages for each service type —
                domestic carpet cleaning, upholstery cleaning, end-of-tenancy and
                commercial — each optimised to rank locally and convert visitors
                into bookings.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads Capturing High-Intent Local Searches
              </p>
              <p>
                We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for carpet cleaners
                </Link>{" "}
                targeting searches with clear intent — "carpet cleaner [town]", "end
                of tenancy carpet cleaning near me", "commercial carpet cleaning
                quote". You{"'"}re visible at the moment of need, not buried behind
                franchise directories.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Reactivation and Repeat Booking Automation
              </p>
              <p>
                The{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM and automation system
                </Link>{" "}
                automatically follows up with past customers at the right interval —
                a gentle reminder that it{"'"}s been 12 months since their last clean.
                It also collects reviews after every job and tracks letting agent and
                commercial relationships so no repeat opportunity slips through.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What This Looks Like in Real Numbers
              </h2>
              <p>
                A domestic carpet clean typically earns{" "}
                <span className="font-semibold text-foreground">£80–£180</span>.
                An end-of-tenancy clean is often{" "}
                <span className="font-semibold text-foreground">£150–£350</span>.
                A commercial contract with a letting agent or office building can be
                worth{" "}
                <span className="font-semibold text-foreground">
                  £300–£1,500+ per month
                </span>{" "}
                in recurring revenue.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), adding just{" "}
                <span className="font-semibold text-foreground">
                  8 new domestic cleans per month plus one commercial contract
                </span>{" "}
                more than covers your investment — and those clients compound
                significantly through the reactivation system over time.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Carpet Cleaners
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A carpet cleaning operator in the Midlands was
                relying on Facebook posts and a few loyal domestic clients. Within 7
                weeks of launching their NobleLeads system, they had 18 new domestic
                bookings in the first month, secured a contract with a local letting
                agency for fortnightly end-of-tenancy cleans and had their best
                revenue month since starting the business."
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Carpet Cleaners
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a professional website covering all your service types, online
                  booking and every enquiry tracked.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus Google Ads, customer reactivation automation
                  and review generation to build your local reputation fast.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for carpet cleaners targeting commercial contracts, letting agency
                  relationships or expanding into multiple service areas.
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
            <FAQAccordionSection title="Questions From Carpet Cleaners Like You" items={faqItems} />
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Fill Your Diary With Regular Bookings?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick conversation about your carpet cleaning business —
                what{"'"}s working now and what a proper lead system could look like for you.
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
