import type { Metadata } from "next"
import Link from "next/link"
import { Users, Star, Zap, PhoneCall } from "lucide-react"

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

const primaryKeyword = "lead generation for electricians UK"
const canonicalPath = "/electricians"

type FAQItem = { question: string; answer: string }

const faqItems: FAQItem[] = [
  {
    question: "Do you work specifically with electricians?",
    answer:
      "Yes. We understand NICEIC and NAPIT registrations, the difference between domestic and commercial electrical work, and how to target the searches that bring in higher-value planned jobs rather than just emergency call-outs.",
  },
  {
    question: "How quickly will I start seeing new electrical enquiries?",
    answer:
      "With Google Ads running, most electricians start seeing new leads within 2–3 weeks. We also set up and optimise your Google Business Profile from day one, which drives organic enquiries alongside paid traffic.",
  },
  {
    question: "Can you help me get more rewires and consumer unit jobs rather than just small repairs?",
    answer:
      "Absolutely. We build dedicated landing pages and campaigns targeting higher-value planned work — full rewires, consumer unit replacements, EICRs and commercial installations — so you attract the jobs with better margins.",
  },
  {
    question: "I miss calls while I'm on site. Can the system handle that?",
    answer:
      "Yes. When you miss a call, an automated text goes out within 60 seconds. Most customers will wait rather than try five other electricians if they feel someone has acknowledged them quickly.",
  },
  {
    question: "Can you help me win landlord EICR contracts?",
    answer:
      "Yes. Landlord compliance work provides consistent, predictable volume. We build landing pages targeting landlords and letting agents in your area who need regular EICR certificates — often turning one-off jobs into recurring accounts.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "Noble Core is month-to-month. Noble Growth and Noble Dominate have an initial optimisation period to build and tune the system properly, then move to a rolling monthly arrangement.",
  },
  {
    question: "Which areas of the UK do you cover?",
    answer:
      "We work with electricians across the UK. Campaigns are always targeted to your service area so you're not paying to advertise in postcodes you don't want to work in.",
  },
]

const painPoints: PainPoint[] = [
  {
    icon: Users,
    heading: "Competing on Shared Leads",
    body: "On Checkatrade or Bark, you're one of five electricians quoting the same job — and the customer often picks on price alone.",
  },
  {
    icon: Star,
    heading: "Outranked on Google",
    body: "The firm with 80 reviews gets the call. Your work is just as good — their visibility is better, and that's what's costing you.",
  },
  {
    icon: Zap,
    heading: "Only Getting Low-Value Jobs",
    body: "Emergency call-outs fill your day. Rewires, consumer units and commercial contracts — the profitable work — rarely arrive on their own.",
  },
  {
    icon: PhoneCall,
    heading: "Enquiries Lost Mid-Job",
    body: "Calls come in while you're on site. Miss them once and the customer moves on — they rarely call back a second time.",
  },
]

const steps: HowItWorksStep[] = [
  {
    title: "A Website That Builds Trust and Converts",
    body: (
      <>
        In the electrical trade, trust is everything. Our{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          conversion-focused trade websites
        </Link>{" "}
        are built to display your NICEIC or NAPIT registration prominently,
        showcase completed projects, pull in Google reviews and make it
        effortless to request a quote or call you directly on mobile.
      </>
    ),
  },
  {
    title: "Google Ads and Local SEO That Target the Right Jobs",
    body: (
      <>
        We run{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          Google Ads campaigns for electricians
        </Link>{" "}
        targeting the searches that signal intent and value — consumer unit
        replacements, full rewires, EICR certificates and commercial
        installations. You{"'"}re shown to people who are actively looking, in
        the postcodes you want to work in.
      </>
    ),
  },
  {
    title: "Automation That Captures Every Enquiry",
    body: (
      <>
        Miss a call while you{"'"}re on site? The system sends an instant text
        back within 60 seconds. Every form submission, every missed call and
        every quote request is tracked in your{" "}
        <Link href="/services" className="font-semibold text-secondary hover:underline">
          CRM pipeline
        </Link>{" "}
        — so nothing falls through the cracks and you can see exactly where
        your work is coming from.
      </>
    ),
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Electrician Marketing Agency UK | More Leads — NobleLeads",
  description:
    "NobleLeads delivers lead generation for electricians UK-wide using conversion websites, Google Ads and CRM automation so you can win more rewires, consumer units, EICRs and commercial contracts consistently.",
  canonicalPath,
})

export default function ElectriciansPage() {
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
                Trade Landing Page · Electricians
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Electrician Marketing Agency UK | More Leads — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Most electricians in the UK win work through word of mouth, a handful
                of referrals and the odd job from a lead-buy site. That keeps you busy
                enough — but it never gives you control. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">{primaryKeyword}</span>{" "}
                so you can build a steady flow of higher-value jobs — rewires, full
                installs, commercial contracts and EICRs — without depending on
                directories or whoever happens to recommend you this month.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A straightforward look at what{"'"}s possible
                  for your electrical business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Electricians Struggle to Get Consistent Work
              </h2>
              <p>
                The electrical trade has a visibility problem. Homeowners and
                landlords need qualified, trustworthy electricians — but{" "}
                <span className="font-semibold text-foreground">
                  finding you on Google is harder than it should be
                </span>
                , and when they do find someone first, that{"'"}s who gets the call.
              </p>
              <PainPointsGrid items={painPoints} />
              <p>
                None of this is a reflection of your qualifications or the quality of
                your work.{" "}
                <span className="font-semibold text-foreground">
                  It{"'"}s a marketing and systems problem — and it{"'"}s fixable.
                </span>
              </p>
            </section>
          </SectionReveal>

          {/* The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Electricians
              </h2>
              <p>
                We build one joined-up system that takes someone from{" "}
                <span className="font-semibold text-foreground">
                  "I need an electrician near me"
                </span>{" "}
                to{" "}
                <span className="font-semibold text-foreground">
                  "I{"'"}ve booked this company and I{"'"}m recommending them."
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
                Electrical job values vary widely. A small fault or consumer unit
                swap might be{" "}
                <span className="font-semibold text-foreground">£150–£400</span>. A
                full rewire can be{" "}
                <span className="font-semibold text-foreground">£3,000–£6,000+</span>.
                An ongoing landlord EICR contract could be worth{" "}
                <span className="font-semibold text-foreground">
                  £500–£2,000 per month
                </span>{" "}
                in recurring work.
              </p>
              <p>
                At Noble Growth (£495/month plus ad spend), even a conservative outcome
                of 4 additional domestic jobs at £280 average and 1 additional rewire
                at £3,500 gives you{" "}
                <span className="font-semibold text-foreground">
                  £4,620 in extra revenue on a £495/month fee
                </span>
                . Win one landlord compliance contract on top of that, and the maths
                becomes very straightforward.
              </p>
            </section>
          </SectionReveal>

          {/* Social Proof */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Electricians
              </h2>
              <p>
                Here{"'"}s the pattern we see when an electrician moves from scattered
                referrals to a structured NobleLeads system.
              </p>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                "Typical result: A domestic electrician in the East Midlands was
                relying on Checkatrade and word of mouth. Within 6 weeks of launching
                their NobleLeads system, they were receiving 10–15 qualified enquiries
                per month, closed two consumer unit jobs in the first week and landed
                an ongoing EICR contract with a local letting agent."
              </p>
            </section>
          </SectionReveal>

          {/* Packages */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Electricians
              </h2>
              <p>
                We{"'"}ll match you to the right level based on the work you want and
                where your business is now:
              </p>
              <TradePackages
                core="A professional website displaying your NICEIC or NAPIT registration, CRM set up and every enquiry captured from your Google Business Profile and website."
                growth="Everything in Core plus Google Ads targeting high-value searches in your area, missed call text-back and automated quote follow-up."
                dominate="For electricians expanding into commercial contracts, landlord compliance programmes or targeting new service areas."
              />
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={180}>
            <FAQAccordionSection
              title="Questions From Electricians Like You"
              items={faqItems}
            />
          </SectionReveal>

          {/* Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Win More of the Work That Actually Pays?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your electrical
                business — what you{"'"}re doing now and what a proper lead system
                could look like for you.
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
