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

const primaryKeyword = "tree surgeon marketing UK"
const canonicalPath = "/tree-surgeons"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with tree surgeons and arborists?",
    answer:
      "Yes. We understand the arboricultural industry — the mix of domestic work, insurance jobs, council contracts and commercial maintenance — and the importance of showcasing qualifications, insurance and equipment to build client trust.",
  },
  {
    question: "How long before I start getting new tree surgery enquiries?",
    answer:
      "With Google Ads running, most tree surgeons start seeing new leads within 2–3 weeks. Tree surgery searches spike after storms and in autumn/winter, and we time campaigns to capture that surge at maximum return.",
  },
  {
    question: "Can you help me get more commercial and council tree work?",
    answer:
      "Yes. Commercial clients — councils, housing associations, estate managers, schools — provide high-volume, planned work. We can build dedicated pages and positioning targeted at the procurement and facilities management contacts who commission this work.",
  },
  {
    question: "I need to show I'm qualified and insured before customers will enquire. Can you help with that?",
    answer:
      "Absolutely. Your NPTC qualifications, ARBORICULTURE association memberships and £5m+ public liability insurance are trust signals that should be front and centre. We build these into the website in a way that gives customers confidence before they even contact you.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system, then move to rolling monthly.",
  },
  {
    question: "Do you work with small tree surgery teams or only larger companies?",
    answer:
      "We work with owner-operators through to established arboricultural companies. The right package depends on your team size, equipment and the work you want to attract.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with tree surgeons across the UK. Campaigns are targeted to your realistic travel radius and the job types most profitable for your operation.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Tree Surgeon Marketing Agency UK | More Leads — NobleLeads",
  description:
    "NobleLeads delivers tree surgeon marketing UK-wide using conversion websites, Google Ads and CRM automation so you can win more domestic, commercial and council tree surgery contracts.",
  canonicalPath,
})

export default function TreeSurgeonsPage() {
  const faqSchema = getFAQPageSchema(faqItems)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Trade Landing Page · Tree Surgeons
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Tree Surgeon Marketing Agency UK | More Leads — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Tree surgery is a high-skill, high-trust trade — and customers need
                to be convinced of your qualifications, insurance and experience before
                they{"'"}ll let you anywhere near their property. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — building you the online credibility and lead system that attracts
                the right enquiries throughout the year, not just after every autumn
                storm.
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
                  tree surgery business.
                </p>
              </div>
            </header>
          </SectionReveal>

          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Tree Surgeons Struggle to Get Work Beyond Storm Season
              </h2>
              <p>
                Tree surgery has a seasonality problem. Work spikes after bad weather
                and in autumn when homeowners finally notice their trees — then goes
                quiet when the phones stop ringing.{" "}
                <span className="font-semibold text-foreground">
                  Without a proper system, you{"'"}re always at the mercy of the weather
                  rather than in control of your own pipeline.
                </span>
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Enquiries flood in after a storm then dry up — leaving you with
                  unpredictable cashflow and no way to plan your team{"'"}s schedule.
                </li>
                <li>
                  You{"'"}re not visible on Google year-round, so homeowners planning
                  tree work in spring or summer find a competitor who is.
                </li>
                <li>
                  Commercial and council contracts are available but feel out of reach
                  because you don{"'"}t have the right digital presence to be considered.
                </li>
                <li>
                  Enquiries come in while your team is on site — missed calls and
                  delayed responses mean{" "}
                  <span className="font-semibold text-foreground">
                    work goes to whoever responded first
                  </span>
                  .
                </li>
              </ul>
            </section>
          </SectionReveal>

          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Tree Surgeons
              </h2>
              <p className="font-semibold text-foreground">
                Step 1 — A Website That Builds Trust and Generates Year-Round Enquiries
              </p>
              <p>
                Our{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-focused trade websites
                </Link>{" "}
                for tree surgeons put your NPTC qualifications, public liability
                insurance, completed project photography and customer reviews front
                and centre — with clear service pages for tree removal, crown
                reduction, stump grinding and commercial work that each rank locally.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Google Ads That Capture Intent Beyond Storm Season
              </p>
              <p>
                We run{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  Google Ads campaigns for tree surgeons
                </Link>{" "}
                year-round — targeting planned work searches as well as emergency jobs.
                "Tree removal quote [town]", "tree surgeon near me", "stump grinding
                [area]" — you{"'"}re visible when customers are searching, not just when
                the wind blows.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Instant Response and Quote Follow-Up
              </p>
              <p>
                Missed a call on site? The system texts the customer back within 60
                seconds. Every quote is followed up automatically via the{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  CRM pipeline
                </Link>{" "}
                — so you{"'"}re not losing jobs simply because a competitor responded
                faster.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What This Looks Like in Real Numbers
              </h2>
              <p>
                Tree surgery job values vary by scope. A basic crown reduction or tidy
                might be{" "}
                <span className="font-semibold text-foreground">£250–£600</span>. A
                large tree removal with stump grinding can be{" "}
                <span className="font-semibold text-foreground">£800–£3,000+</span>.
                Commercial and council contracts can be worth{" "}
                <span className="font-semibold text-foreground">
                  £2,000–£20,000+ per engagement
                </span>
                .
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), winning just{" "}
                <span className="font-semibold text-foreground">
                  two additional tree removal jobs per month at £1,200 average
                </span>{" "}
                covers the investment nearly five times over. One commercial contract
                changes the numbers entirely.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Tree Surgeons
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A tree surgery company in the South West was heavily
                dependent on storm-season call-outs and a few loyal domestic clients.
                Within 8 weeks of launching their NobleLeads system, they were
                receiving 10–14 qualified enquiries per month year-round, had their
                first enquiry from a housing association for an ongoing contract and
                booked their schedule 8 weeks ahead for the first time."
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Tree Surgeons
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> —
                  a credible, qualification-led website with every enquiry captured
                  and tracked through your CRM.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> —
                  everything in Core plus year-round Google Ads, missed call text-back
                  and automated quote follow-up.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> —
                  for tree surgery businesses targeting commercial contracts, councils
                  or expanding into new service areas.
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
            <FAQAccordionSection title="Questions From Tree Surgeons Like You" items={faqItems} />
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Win Work Year-Round, Not Just After Every Storm?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick conversation about your tree surgery business —
                where your work comes from now and what a proper lead system could
                look like for you.
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
