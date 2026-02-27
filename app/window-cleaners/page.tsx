import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata } from "../(shared)/seo-config"
import { getFAQPageSchema, getLocalBusinessSchema } from "../(shared)/schema"

const primaryKeyword = "lead generation for window cleaners UK"
const canonicalPath = "/window-cleaners"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you specialise in window cleaning businesses specifically?",
    answer:
      "Yes. Most of our earliest clients were window cleaners, so the funnels, ad copy and follow-up we use are built around how window cleaning work actually comes in—rounds, one-off jobs and commercial contracts.",
  },
  {
    question: "How long before I start getting more window cleaning enquiries?",
    answer:
      "If we are running Google Ads, most window cleaners see new enquiries within the first 2–3 weeks of going live. SEO and Google Business Profile work take longer, but we will be clear on timelines before we switch anything on.",
  },
  {
    question: "Can you help me move away from Bark and lead-buying sites?",
    answer:
      "That is the whole point of the NobleLeads system. We use your own website, Google presence and automation so you can reduce or switch off Bark and other marketplaces over time instead of being stuck paying for every lead.",
  },
  {
    question: "Can you help me expand my rounds into new areas?",
    answer:
      "Yes. We can focus your campaigns on specific postcodes or towns you want to grow in, then use automation and reviews to turn new one-off jobs into long-term round work.",
  },
  {
    question: "Is there a minimum contract length?",
    answer:
      "Noble Core is month-to-month. For Noble Growth and Noble Dominate we have an initial optimisation period so we can build and tune the system properly, then move to a rolling arrangement.",
  },
  {
    question: "Do you work with sole traders as well as larger window cleaning teams?",
    answer:
      "We work with sole operators through to small teams with vans on the road. What matters is that you deliver good work, have (or can get) solid reviews and want to grow in a controlled way.",
  },
  {
    question: "What areas of the UK do you cover?",
    answer:
      "We work with window cleaners across the UK. The campaigns are tailored to your local area so you can dominate the patches where you actually want to work.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Window Cleaner Marketing Agency UK | More Leads — NobleLeads",
  description:
    "NobleLeads provides lead generation for window cleaners UK-wide using conversion websites, Google Ads and CRM automation so you can grow your rounds without buying every lead from Bark or Checkatrade.",
  canonicalPath,
})

export default function WindowCleanersPage() {
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
                Trade Landing Page · Window Cleaners
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Window Cleaner Marketing Agency UK | More Leads — NobleLeads
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Most window cleaners in the UK get 80–90% of their work from
                referrals and word of mouth. That{"'"}s great when it{"'"}s flowing—but it{"'"}s
                not a system. NobleLeads focuses on{" "}
                <span className="font-semibold text-foreground">
                  {primaryKeyword}
                </span>{" "}
                so you can grow your rounds on purpose, not just hope the phone keeps
                ringing.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Your Free Strategy Call
                </Link>
                <p className="text-xs text-muted-foreground/80">
                  15 minutes. No pressure. A simple look at what{"'"}s possible for your
                  window cleaning business.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Section 2: Pain Points */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Window Cleaners Struggle to Get Consistent Work
              </h2>
              <p>
                On the surface, window cleaning looks simple: build a round, turn up
                every few weeks and keep clients happy. But if you{"'"}re honest,{" "}
                <span className="font-semibold text-foreground">
                  getting enough new customers at the right price
                </span>{" "}
                can be a lot harder than doing the work itself.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You{"'"}re on Checkatrade or similar platforms, but you{"'"}re paying for
                  every lead and competing with 10–20 other cleaners on the same job.
                </li>
                <li>
                  Your Google Business Profile has a handful of reviews, while the
                  competitor down the road shows 200+ and seems to win every new
                  estate.
                </li>
                <li>
                  You{"'"}ve got solid rounds, but{" "}
                  <span className="font-semibold text-foreground">
                    expanding into new streets or villages
                  </span>{" "}
                  feels like guesswork—leaflets, Facebook posts and hope.
                </li>
                <li>
                  When work quietens down, you realise there{"'"}s{" "}
                  <span className="font-semibold text-foreground">
                    no reliable tap you can turn on
                  </span>{" "}
                  to bring in extra calls that month.
                </li>
              </ul>
              <p>
                None of this is about how well you clean glass. It{"'"}s about having{" "}
                <span className="font-semibold text-foreground">
                  a predictable way for new customers to find you, trust you and book
                  in
                </span>
                —without you buying every lead from a middleman.
              </p>
            </section>
          </SectionReveal>

          {/* Section 3: The System */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The NobleLeads System for Window Cleaners
              </h2>
              <p>
                We build one joined-up system that takes someone from{" "}
                <span className="font-semibold text-foreground">
                  “I need a window cleaner in my area”
                </span>{" "}
                to{" "}
                <span className="font-semibold text-foreground">
                  “I{"'"}ve booked this company and I{"'"}m staying with them”
                </span>
                .
              </p>
              <p className="font-semibold text-foreground">
                Step 1 — A Website That Actually Converts
              </p>
              <p>
                Most window cleaning websites are digital business cards. Ours are
                built as{" "}
                <Link
                  href="/services"
                  className="font-semibold text-secondary hover:underline"
                >
                  conversion-ready trade websites
                </Link>
                . Clear pricing from, strong before-and-after photos, reviews pulled in
                from Google and Facebook, click-to-call on mobile and simple quote
                forms that feed directly into your CRM.
              </p>
              <p className="font-semibold text-foreground">
                Step 2 — Traffic That Targets Your Rounds
              </p>
              <p>
                A good site is useless if no one sees it.                 We run local SEO and{" "}
                <Link
                  href="/services"
                  className="font-semibold text-secondary hover:underline"
                >
                  Google Ads campaigns for window cleaners
                </Link>{" "}
                that focus on the postcodes and towns where you actually want to build
                your rounds. That means you{"'"}re not driving all over the county—you{"'"}re
                adding density to the areas that make your route efficient.
              </p>
              <p className="font-semibold text-foreground">
                Step 3 — Automation That Follows Up Every Enquiry
              </p>
              <p>
                Most window cleaners lose work simply because they{"'"}re up a ladder
                when the phone rings.                 With{" "}
                <Link
                  href="/services"
                  className="font-semibold text-secondary hover:underline"
                >
                  CRM &amp; automation for trades
                </Link>
                , every missed call triggers a text back, every form submission gets an
                instant reply and you have a simple pipeline that shows who{"'"}s been
                quoted, who{"'"}s booked and who{"'"}s ready to add to the round.
              </p>
              <p>
                For a step-by-step breakdown of the approach, read our guide{" "}
                <Link
                  href="/blog/how-to-get-more-window-cleaning-customers"
                  className="font-semibold text-secondary hover:underline"
                >
                  how to get more window cleaning customers without buying leads
                </Link>{" "}
                and our honest take on{" "}
                <Link
                  href="/blog/is-checkatrade-worth-it-2025"
                  className="font-semibold text-secondary hover:underline"
                >
                  whether Checkatrade is worth it in 2025 for UK trades
                </Link>
                .
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
                Let{"'"}s say your average residential window cleaning round visit is{" "}
                <span className="font-semibold text-foreground">
                  £80 every 4 weeks
                </span>
                . A small commercial contract might be{" "}
                <span className="font-semibold text-foreground">
                  £300–£500 per month
                </span>
                .
              </p>
              <p>
                The Noble Growth package is £495/month plus ad spend. If the system
                brings you just:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  5 new regular domestic customers per month (at £80 each) and
                </li>
                <li>1 modest commercial contract at £350/month,</li>
              </ul>
              <p>
                that{"'"}s{" "}
                <span className="font-semibold text-foreground">
                  £750/month in extra recurring revenue
                </span>{" "}
                from the domestic work alone, plus £350/month commercial. You{"'"}re at{" "}
                <span className="font-semibold text-foreground">£1,100/month</span> in new
                revenue on a £495/month fee.
              </p>
              <p>
                And those customers don{"'"}t vanish when you pause spend—you{"'"}ve grown
                your round and your base of loyal clients.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Social Proof Placeholder */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Real Results for Real Window Cleaners
              </h2>
              <p>
                Here{"'"}s the typical pattern we see when a window cleaner moves from
                referrals and Facebook posts to a proper NobleLeads system.
              </p>
              <p className="rounded-xl border border-border/50 bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">
                “Typical result: A window cleaner based in the Midlands was relying
                entirely on referrals and a basic Facebook page. Within 6 weeks of
                launching their NobleLeads system, they went from 2–3 new enquiries per
                week to being fully booked with a waiting list in their chosen areas.”
              </p>
              <p className="text-xs text-muted-foreground/80">
                [CLIENT TESTIMONIAL — ADD WHEN AVAILABLE]
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: Pricing */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                NobleLeads Packages for Window Cleaners
              </h2>
              <p>
                Every package starts with understanding your current rounds, pricing and
                goals. Then we match you to the right level:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Noble Core</span> –
                  conversion-focused website, hosting and basic CRM. Ideal if you{"'"}re
                  ready to look professional online and capture more enquiries from
                  Google Business Profile.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Growth</span> –
                  everything in Core plus active lead generation with Google Ads and
                  automation. Best for growing rounds and moving away from Bark and
                  lead-buy sites.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Noble Dominate</span> –
                  multi-area growth, commercial positioning and more advanced funnels
                  for larger operations.
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Not sure which is right for you?{" "}
                <span className="font-semibold text-foreground">
                  Book a free 15-minute call and we{"'"}ll tell you honestly.
                </span>
              </p>
              <p className="text-xs text-muted-foreground/80">
                Full pricing details are on our{" "}
                <Link href="/pricing" className="font-semibold text-secondary hover:underline">
                  pricing page
                </Link>
                .
              </p>
            </section>
          </SectionReveal>

          {/* Section 7: FAQ */}
          <SectionReveal delay={180}>
            <section className="mt-10 space-y-5">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Questions From Window Cleaners Like You
              </h2>
              <div className="mt-4 space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-border/40 bg-card/40 p-5 sm:p-6"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </SectionReveal>

          {/* Section 8: Final CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Stop Relying on Referrals?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Let{"'"}s have a quick, honest conversation about your window cleaning
                business. No pressure, no big pitch—just a clear picture of what a
                proper lead system could look like for you.
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

