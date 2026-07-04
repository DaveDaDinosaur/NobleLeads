import type { Metadata } from "next"
import Link from "next/link"
import { Users, Star, MapPin, Clock } from "lucide-react"

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

const primaryKeyword = "window cleaner marketing UK"
const canonicalPath = "/window-cleaners"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with window cleaning businesses?",
    answer:
      "Yes. We understand the recurring round model, the difference between domestic rounds, commercial contracts and specialist conservatory or solar panel cleaning. Campaigns are built around the growth you want.",
  },
  {
    question: "How quickly will I start seeing new window cleaning enquiries?",
    answer:
      "With Google Ads running, most window cleaners start seeing new leads within 2–3 weeks. We also target local SEO to build your organic rankings and Google Business Profile so you receive enquiries from both paid and organic channels.",
  },
  {
    question: "Can you help me grow my round faster?",
    answer:
      "Yes. Geographically tight rounds are more efficient and profitable than spread-out ones. We build campaigns targeting specific postcodes you want to fill, so new clients are clustered where they make the most sense for your route.",
  },
  {
    question: "Can you help me win commercial window cleaning contracts?",
    answer:
      "Absolutely. Commercial clients — offices, schools, retail units — provide consistent volume at higher job values. We build dedicated pages and outreach campaigns targeting commercial clients in your area.",
  },
  {
    question: "What makes NobleLeads different from Bark or Checkatrade for window cleaners?",
    answer:
      "With Bark or Checkatrade, you're one of several cleaners competing for the same lead at the same time. With NobleLeads, you own your website, your Google rankings and your data — and every enquiry comes directly to you without being sold to competitors.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system, then move to rolling monthly.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with window cleaning businesses across the UK. Campaigns are targeted to the specific postcodes and service areas where you want to grow your round.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: Users,
    heading: "Paying for Shared Leads",
    body: "On Bark or local directories, you're quoted alongside three other cleaners. The customer picks on price before they've seen your reliability record.",
  },
  {
    icon: Star,
    heading: "Outranked by Competitors With More Reviews",
    body: "The window cleaner with 100 Google reviews appears above you even in your own patch. Review volume is the single biggest local SEO factor and it compounds over time.",
  },
  {
    icon: MapPin,
    heading: "Expanding Your Round Is Guesswork",
    body: "Taking on new areas without a system means scattered clients, longer routes and less efficient days. Growth needs to be targeted to the right postcodes.",
  },
  {
    icon: Clock,
    heading: "No Overnight or Weekend Capture",
    body: "Homeowners often think about getting a window cleaner in the evening. Without automation capturing those enquiries instantly, they forget or find someone else by morning.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Website That Builds Trust and Drives Direct Bookings",
    body: (
      <>
        Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        for window cleaners display insurance, Google reviews, service
        coverage maps and clear pricing information — with online booking
        forms and quote requests that send new client enquiries directly into
        your pipeline, not to a directory that resells them.
      </>
    ),
  },
  {
    title: "Google Ads and Local SEO Targeting Your Growth Postcodes",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for window cleaners
        </Link>{" "}
        targeted to the specific areas where you want to grow your round —
        not a broad catchment that sends you enquiries from places you don{"'"}t
        want to drive to. Local SEO builds your ranking so the paid results
        are backed by organic authority over time.
      </>
    ),
  },
  {
    title: "Automation That Captures Enquiries and Builds Reviews",
    body: (
      <>
        Every evening enquiry gets an instant automated response — so the
        customer feels looked after and doesn{"'"}t move on. The{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM system
        </Link>{" "}
        also automatically requests Google reviews from clients after each
        clean — compounding your review count every month and strengthening
        your local search position.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Window Cleaner Marketing Agency UK | More Clients",
  description:
    "NobleLeads delivers marketing for window cleaners UK-wide using conversion websites, Google Ads and CRM automation so you can grow your round, build a dominant review presence and win commercial contracts.",
  canonicalPath,
})

export default function WindowCleanersPage() {
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
                Trade Landing Page · Window Cleaners
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Window Cleaner Marketing That Grows Your Round
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                A window cleaning business built on a strong round is one of the most
                predictable, recurring-revenue service businesses there is. The challenge
                is building that round efficiently — in the right areas, with the right
                clients, without paying for shared leads or wasting time on scattered
                enquiries. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                — so you can grow your round deliberately, dominate your local Google
                presence and capture every enquiry that comes in, day or night.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A straight look at what{"'"}s possible for
                  your window cleaning business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Window Cleaners Struggle to Grow Their Round Efficiently
              </h2>
              <p>
                Most window cleaners grow slowly — a referral here, a flyer there.{" "}
                <span className="font-semibold text-foreground">
                  The ones who build a full, geographically tight round quickly are
                  using a system, not just hoping.
                </span>
              </p>
              <PainPointsGrid items={painPoints} />
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Window Cleaners
              </h2>
              <p>
                We build one system that takes a homeowner from{" "}
                <span className="font-semibold text-foreground">
                  "I need a window cleaner"
                </span>{" "}
                to{" "}
                <span className="font-semibold text-foreground">
                  "I{"'"}ve booked a regular cleaner and left them a 5-star review."
                </span>
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
                A regular domestic window cleaning client is typically worth{" "}
                <span className="font-semibold text-foreground">£20–£60 per visit</span>{" "}
                on a monthly or bimonthly schedule — that{"'"}s{" "}
                <span className="font-semibold text-foreground">
                  £240–£720 per year per client
                </span>
                , with near-zero acquisition cost after the first booking.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), adding 15 new regular
                domestic clients at £35/month gives you{" "}
                <span className="font-semibold text-foreground">
                  £525/month in new recurring revenue
                </span>
                . Those clients stay for years. Add a commercial contract and the
                numbers change significantly.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Window Cleaners
              </h2>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A window cleaner in the East Midlands was relying
                on leaflet drops and Facebook posts to grow their round. Within 8
                weeks of launching their NobleLeads system, they had 24 new regular
                domestic clients in 3 target postcodes, their Google review count
                had doubled and they received their first commercial enquiry from
                a local office block."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Window Cleaners
              </h2>
              <TradePackages
                core="A professional website with online booking, CRM set up and every enquiry captured and responded to automatically — even overnight."
                growth="Everything in Core plus Google Ads targeting your growth postcodes, review automation and commercial outreach sequences."
                dominate="For window cleaning businesses expanding into commercial contracts, new service areas or additional specialist services like solar panel cleaning."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Window Cleaners Like You"
              items={faqItems}
            />
          </SectionReveal>

          <RelatedTrades currentHref="/window-cleaners" />

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Build a Round You Can Actually Depend On?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your window cleaning
                business — how big your round is now, where you want it to be and
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
