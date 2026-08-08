import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  TrendingDown,
  Users,
  PhoneMissed,
  Search,
  Globe,
  Target,
  Workflow,
  Star,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionReveal } from "@/components/section-reveal"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { BookingEmbed } from "@/components/contact/booking-embed"
import { PainPointsGrid, type PainPoint } from "@/components/trades/pain-points-grid"
import { HowItWorksSteps, type HowItWorksStep } from "@/components/trades/how-it-works-steps"
import { TradePackages } from "@/components/trades/trade-packages"
import { FAQAccordionSection } from "@/components/faq/faq-accordion-section"
import { buildMetadata } from "../(shared)/seo-config"

// Drop a Vimeo/Loom video URL here to show the founder video in the hero.
const VIDEO_URL = ""

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Get More Work For Your Trade",
    description:
      "NobleLeads builds UK trade and service businesses a lead system they own: a conversion website, Google Ads and automated follow-up that books more jobs. Book a free growth call.",
    canonicalPath: "/get-more-leads",
  }),
  robots: { index: false, follow: false },
}

const painPoints: PainPoint[] = [
  {
    icon: TrendingDown,
    heading: "Feast or famine",
    body: "Flat out one month, staring at an empty diary the next. No way to turn the tap on when work dries up.",
  },
  {
    icon: Users,
    heading: "Paying for shared leads",
    body: "Bark and Checkatrade sell the same enquiry to four or five of you. You pay whether you win it or not.",
  },
  {
    icon: PhoneMissed,
    heading: "Leads going cold",
    body: "Enquiries come in while you're on the tools, and by the time you call back the job's gone to whoever answered first.",
  },
  {
    icon: Search,
    heading: "Invisible on Google",
    body: "The people who want your service are searching right now, and they're finding your competitors instead of you.",
  },
]

const pillars = [
  {
    icon: Globe,
    title: "A website that converts",
    body: "A fast, professional site built to turn visitors into enquiries, with your work, your reviews and an obvious way to get a quote on every page.",
  },
  {
    icon: Target,
    title: "Google Ads & local SEO",
    body: "You in front of people searching for your trade in your area right now, with paid ads bringing leads in this week while your rankings build underneath.",
  },
  {
    icon: Workflow,
    title: "CRM & automatic follow-up",
    body: "Missed-call text-backs, instant replies and quote follow-ups so no lead ever goes cold, plus one place to see every enquiry and job.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "1. Free growth call (15 minutes)",
    body: "We look at where you are now, what work you want more of and where the quickest wins are. You leave with a clear picture of how we'd get you more jobs, whether you work with us or not.",
  },
  {
    title: "2. We build your system",
    body: "We build the website, set up your Google Business Profile, write and launch your ad campaigns and wire in the CRM and follow-up automation, all done for you.",
  },
  {
    title: "3. Launch and first leads",
    body: "Paid campaigns go live and start bringing in enquiries within the first few weeks, straight to you, tracked from the first click so we know exactly what's working.",
  },
  {
    title: "4. Optimise and scale",
    body: "We refine targeting, sharpen the pages and build your organic rankings so your cost per lead falls and your pipeline compounds month on month.",
  },
]

const proofStats = [
  { value: "24", label: "Leads in a fortnight", sub: "For one refurbishment client" },
  { value: "9.49%", label: "Ad click-through rate", sub: "2-3x the search benchmark" },
  { value: "~£21", label: "Cost per lead", sub: "A third of the market average" },
  { value: "Weeks", label: "To page one", sub: "From no website at all" },
]

const testimonials = [
  {
    quote:
      "The missed call text-back alone paid for the first month. Quotes are followed up automatically and I can see exactly what came from which campaign.",
    name: "Craig H.",
    role: "Focus Refurbishment · Kent",
  },
  {
    quote:
      "Before this, every storm meant a mad scramble on Checkatrade. Now people find us directly on Google and the phone rings steadily.",
    name: "Amir K.",
    role: "Roofing contractor · Birmingham",
  },
  {
    quote:
      "Within two months we had steady enquiries through the quiet season and booked enough work to keep the team busy year-round.",
    name: "Sarah P.",
    role: "Landscaping · Bristol",
  },
]

const faqItems = [
  {
    question: "How much does it cost?",
    answer:
      "It depends on the package and how aggressively you want to grow. We have three tiers (Core, Growth and Dominate) with full pricing on our pricing page. On the free call we'll recommend the right starting point for your budget and goals, no hard sell.",
  },
  {
    question: "Am I locked into a long contract?",
    answer:
      "Noble Core is month-to-month. Growth and Dominate have an initial optimisation period so we can build and refine the system properly, then move to a rolling arrangement. We want you to stay because it works, not because you're tied in.",
  },
  {
    question: "Does this work for my trade?",
    answer:
      "We work with UK property service trades and service businesses, from roofers, plumbers and electricians to cleaners, landscapers and refurbishment firms. The system is the same; the campaigns, copy and targeting are tuned to how your trade actually wins work.",
  },
  {
    question: "How quickly will I see leads?",
    answer:
      "With Google Ads running, most businesses start seeing enquiries within the first 2-3 weeks because you're paying to appear immediately for people searching right now. SEO takes longer but lowers your cost per lead over time, so the two work together from day one.",
  },
  {
    question: "Do I still need Bark or Checkatrade?",
    answer:
      "You can keep them while your own system builds, but the goal is to reduce your dependency on rented, shared leads over time by owning your website, rankings and data. Most clients scale the directories back once their owned channel is reliably producing work.",
  },
  {
    question: "What do I actually get?",
    answer:
      "A conversion-focused website, Google Ads and local SEO, a fully set-up Google Business Profile, and a CRM with missed-call text-back and automated follow-up, all built, managed and optimised for you, with clear reporting so you can see exactly what's working.",
  },
]

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#book"
      className={`group inline-flex min-touch items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      Book Your Free Growth Call
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}

export default function GetMoreLeadsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                For UK Trades &amp; Service Businesses
              </p>
              <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Get More Work For Your Trade, With Leads You Own, Not Rented
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Stop paying Bark and Checkatrade for shared leads. We build you a
                complete lead system, a conversion website, Google Ads and automatic
                follow-up, that brings enquiries straight to you and books more jobs,
                month after month.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3">
                <CtaButton />
                <p className="text-xs text-muted-foreground/80">
                  Free 15-minute call · No obligation · No pressure
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                  Real results for real UK trades
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                  Leads you own, not shared
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-secondary" />
                  Tracked from day one
                </span>
              </div>
            </div>
          </SectionReveal>

          {VIDEO_URL ? (
            <SectionReveal delay={80}>
              <div className="mx-auto mt-8 w-full max-w-2xl">
                <div className="relative overflow-hidden rounded-xl border border-border/40" style={{ aspectRatio: "16 / 9" }}>
                  <iframe
                    src={VIDEO_URL}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="How NobleLeads gets UK trades more work"
                  />
                </div>
              </div>
            </SectionReveal>
          ) : null}
        </div>
      </section>

      <article className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          {/* The problem */}
          <SectionReveal delay={100}>
            <section className="mt-14 sm:mt-16">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Sound familiar?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Most trades are brilliant at the work. Getting a steady, predictable
                flow of the right jobs is the hard part, and it usually comes down to
                the same four problems.
              </p>
              <PainPointsGrid items={painPoints} />
            </section>
          </SectionReveal>

          {/* What we build */}
          <SectionReveal delay={120}>
            <section className="mt-14 sm:mt-16">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What We Build You
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Not one thing, a complete system where every part feeds the next, and
                all of it belongs to you rather than a platform you rent.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {pillars.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-border/50 bg-card/40 p-5 space-y-2.5"
                  >
                    <div className="inline-flex rounded-lg bg-secondary/10 p-2 text-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{title}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </SectionReveal>

          {/* How it works */}
          <SectionReveal delay={140}>
            <section className="mt-14 sm:mt-16">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How It Works
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                From first call to a pipeline that compounds, four simple steps and we
                do the heavy lifting.
              </p>
              <HowItWorksSteps steps={steps} />
              <div className="mt-7">
                <CtaButton />
              </div>
            </section>
          </SectionReveal>

          {/* Proof */}
          <SectionReveal delay={160}>
            <section className="mt-14 sm:mt-16">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results, Not Promises
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We track everything from day one, so these are measured numbers from
                real clients, not marketing spin.
              </p>

              <div className="mt-5 grid grid-cols-2 border-y border-border/40 sm:grid-cols-4">
                {proofStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-3 py-5 text-center sm:px-4 sm:py-6 ${
                      i > 0 ? "border-l border-border/30" : ""
                    } ${i >= 2 ? "border-t border-border/30 sm:border-t-0" : ""}`}
                  >
                    <p className="text-xl font-bold tabular-nums text-secondary sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium leading-snug text-foreground sm:text-xs">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Before / after */}
              <div className="mt-8">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  The kind of transformation we build
                </p>
                <div className="mx-auto w-full max-w-md">
                  <BeforeAfterSlider
                    beforeSrc="/images/case-studies/trs-entrance-before.webp"
                    afterSrc="/images/case-studies/trs-entrance-after.webp"
                    beforeAlt="Dull, weathered render before"
                    afterAlt="Crisp bright white render after"
                  />
                  <p className="mt-2 text-center text-xs text-muted-foreground/70">
                    Drag to reveal. An interactive detail we build into client sites to
                    turn browsers into enquiries.
                  </p>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="flex h-full flex-col rounded-xl border border-border/40 bg-card/40 p-5"
                  >
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
                      {`"${t.quote}"`}
                    </blockquote>
                    <figcaption className="mt-4 border-t border-border/20 pt-3">
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <p className="mt-5 text-sm text-muted-foreground">
                See the full stories:{" "}
                <Link href="/case-studies/focus-refurbishment" className="font-semibold text-secondary hover:underline">
                  Focus Refurbishment
                </Link>{" "}
                and{" "}
                <Link href="/case-studies/thermal-render-specialists" className="font-semibold text-secondary hover:underline">
                  Thermal Render Specialists
                </Link>
                .
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={180}>
            <section className="mt-14 sm:mt-16">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Packages to Match Where You Are
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you&apos;re starting from scratch or scaling what already works,
                there&apos;s a starting point that fits.
              </p>
              <TradePackages
                core="Your foundation: a conversion-ready website and CRM so every enquiry is captured and followed up, not lost."
                growth="Everything in Core plus Google Ads, local SEO and automation, the full lead engine, actively managed and optimised."
                dominate="For businesses ready to own their market: expanded campaigns, commercial positioning and tender-ready infrastructure."
              />
            </section>
          </SectionReveal>

          {/* What happens on the call */}
          <SectionReveal delay={200}>
            <section className="mt-14 sm:mt-16 rounded-2xl border border-secondary/20 bg-card/40 p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                What Happens On the Call
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                It&apos;s a straight, 15-minute conversation, not a pitch. We&apos;ll
                look at your current setup, understand the work you want more of, and
                show you exactly how we&apos;d get it, with a clear plan you can act on
                whether you work with us or not. No pressure, no jargon, no obligation.
              </p>
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={220}>
            <FAQAccordionSection
              title="Questions, Answered"
              items={faqItems}
            />
          </SectionReveal>
        </div>
      </article>

      {/* Booking */}
      <div id="book" className="scroll-mt-24">
        <BookingEmbed />
      </div>

      <Footer />

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden pb-safe">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <Link
            href="#book"
            className="flex min-touch w-full items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground active:scale-[0.98]"
          >
            Book Your Free Growth Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
