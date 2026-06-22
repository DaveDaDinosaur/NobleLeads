import type { Metadata } from "next"
import Link from "next/link"
import { TrendingDown, Search, Building2, PhoneCall } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { FAQAccordionSection } from "@/components/faq/faq-accordion-section"
import { PainPointsGrid, type PainPoint } from "@/components/trades/pain-points-grid"
import { HowItWorksSteps, type HowItWorksStep } from "@/components/trades/how-it-works-steps"
import { TradePackages } from "@/components/trades/trade-packages"
import { buildMetadata } from "../(shared)/seo-config"
import { getFAQPageSchema, getLocalBusinessSchema } from "../(shared)/schema"

const primaryKeyword = "tree surgeon marketing agency UK"
const canonicalPath = "/tree-surgeons"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with tree surgery businesses?",
    answer:
      "Yes. We understand the seasonal patterns, insurance requirements and the difference between emergency storm work, planned removal and ongoing site maintenance contracts. Campaigns are built around the mix that suits your business.",
  },
  {
    question: "How quickly will I start seeing new tree surgery enquiries?",
    answer:
      "With Google Ads running, most tree surgeons start seeing new leads within 2–3 weeks. Emergency and storm-season campaigns can generate leads even faster — particularly after bad weather events in your area.",
  },
  {
    question: "Can you help me win commercial tree surgery contracts?",
    answer:
      "Yes. Commercial clients — local authorities, estate managers, housing associations and schools — provide high-volume, repeat work. We build dedicated pages and campaigns targeting commercial clients in your service area.",
  },
  {
    question: "I miss calls on site. Can the system help?",
    answer:
      "Yes. Every missed call gets an instant text response within 60 seconds. Most customers will hold on briefly rather than call five other companies, particularly for urgent tree work after a storm.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to rolling monthly.",
  },
  {
    question: "Do you work with smaller tree surgery businesses?",
    answer:
      "We work with sole traders and small teams through to larger arboricultural companies. The right package depends on your capacity and the volume of work you want to generate.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with tree surgeons across the UK. Campaigns are targeted to your realistic service area so every lead is reachable.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: TrendingDown,
    heading: "Weather-Dependent Boom and Bust",
    body: "Storm season floods you with emergency calls. Calm months empty the diary. You need enquiries regardless of what the weather is doing.",
  },
  {
    icon: Search,
    heading: "Invisible Between Peak Seasons",
    body: "When homeowners spot a dangerous tree or need a hedge cut, they search Google immediately. If you're not ranking, they call whoever is.",
  },
  {
    icon: Building2,
    heading: "Commercial Work Untapped",
    body: "Local authorities, estate managers and housing associations need regular arboricultural work — but they never find you without the right online presence.",
  },
  {
    icon: PhoneCall,
    heading: "Missed Calls Cost Jobs On Site",
    body: "Tree surgery is physical, hands-on work. Missing calls while up a tree or operating equipment means enquiries go straight to the next tree surgeon on the list.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Professional Website That Earns Trust Immediately",
    body: (
      <>
        Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        for tree surgeons display NPTC or Arboricultural Association credentials
        prominently, showcase completed work with before-and-after photos, pull
        in Google reviews and include separate pages for residential, emergency
        and commercial tree surgery — each designed to convert for that specific
        client type.
      </>
    ),
  },
  {
    title: "Google Ads That Capture Emergency and Planned Searches",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for tree surgeons
        </Link>{" "}
        targeting both emergency storm searches and planned tree removal or
        maintenance. Urgent and planned enquiries are separated so your campaigns
        attract both — and your response system handles the different pacing
        each type of enquiry requires.
      </>
    ),
  },
  {
    title: "Instant Response and Automated Follow-Up",
    body: (
      <>
        Miss a call on site? An instant text goes back within 60 seconds. Every
        quote and survey request is tracked in your{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM pipeline
        </Link>{" "}
        — so no job slips through after a busy storm day when the phone
        doesn{"'"}t stop ringing.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Tree Surgeon Marketing Agency UK | More Leads — NobleLeads",
  description:
    "NobleLeads delivers marketing for tree surgeons UK-wide using conversion websites, Google Ads and CRM automation so you can win more residential, emergency and commercial tree surgery work consistently.",
  canonicalPath,
})

export default function TreeSurgeonsPage() {
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
                Trade Landing Page · Tree Surgeons
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Tree Surgeon Marketing Agency UK | More Leads — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Tree surgery is a specialist, high-value trade — but for most tree
                surgeons, enquiries are either feast or famine. Storm season is
                frantic; summer can be quiet. Emergency calls are unpredictable;
                planned work needs to be actively generated. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — building the online presence and automated systems that bring in
                a steady mix of residential, emergency and commercial enquiries all
                year round.
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
                  tree surgery business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Tree Surgeons Struggle to Get Consistent Work Year-Round
              </h2>
              <p>
                Most tree surgery businesses run fine in peak season and feel the
                pinch outside it.{" "}
                <span className="font-semibold text-foreground">
                  The ones with a full diary year-round aren{"'"}t just lucky — they{"'"}ve
                  built a system that generates enquiries independently of the weather.
                </span>
              </p>
              <PainPointsGrid items={painPoints} />
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Tree Surgeons
              </h2>
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
                Tree surgery job values vary widely. A hedge cut or small removal
                might be{" "}
                <span className="font-semibold text-foreground">£150–£400</span>. A
                large tree removal can be{" "}
                <span className="font-semibold text-foreground">£800–£3,000+</span>.
                A commercial site management contract could be worth{" "}
                <span className="font-semibold text-foreground">
                  £500–£5,000+ per visit
                </span>
                .
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), adding 4 extra residential
                jobs per month at £600 average gives you{" "}
                <span className="font-semibold text-foreground">
                  £2,400 in additional monthly revenue
                </span>
                . Win one commercial contract and the numbers change entirely.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Tree Surgeons
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A tree surgery company in the South West was relying
                on word of mouth and storm-season spikes. Within 8 weeks of launching
                their NobleLeads system, they had 12 new residential enquiries, 3
                large removal jobs booked and their first serious commercial enquiry
                from a local estate management firm — work they had never had access
                to before."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Tree Surgeons
              </h2>
              <TradePackages
                core="A professional website displaying your credentials and showcasing completed work, with CRM set up and every enquiry captured."
                growth="Everything in Core plus Google Ads, missed call text-back and automated follow-up — so no enquiry is lost while you're on site."
                dominate="For tree surgery businesses targeting commercial contracts, local authority frameworks or expanding into new service areas."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Tree Surgeons Like You"
              items={faqItems}
            />
          </SectionReveal>

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Fill Your Diary Beyond Storm Season?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your tree surgery
                business — what{"'"}s working now, what{"'"}s missing and how a proper
                lead system could change the picture.
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
