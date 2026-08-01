import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { FAQAccordionSection } from "@/components/faq/faq-accordion-section"
import { buildMetadata } from "../../(shared)/seo-config"
import { getArticleSchema, getFAQPageSchema, type FAQItem } from "../../(shared)/schema"
import { Breadcrumb } from "@/components/breadcrumb"
import { PullQuote } from "@/components/blog/pull-quote"
import { StatCallout } from "@/components/blog/stat-callout"

const canonicalPath = "/blog/how-to-get-roofing-leads-without-checkatrade"

export const metadata: Metadata = buildMetadata({
  title: "How to Get Roofing Leads Without Checkatrade (2026)",
  description:
    "A practical 2026 guide to generating roofing leads without Checkatrade, Bark or paying per lead - what these platforms really cost roofers, and the owned system that replaces them.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "How to Get Roofing Leads Without Checkatrade (2026)",
  description:
    "What Checkatrade and pay-per-lead platforms actually cost UK roofers in 2026, and a step-by-step way to generate your own roofing leads through a website, Google Ads, local SEO and follow-up you control.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-07-26",
})

const faqItems: FAQItem[] = [
  {
    question: "How do roofers get leads without Checkatrade?",
    answer:
      "The most reliable way is to build a lead system you own: a conversion-focused website, Google Ads targeting people searching for roofers in your area, a well-optimised Google Business Profile for local and map results, and automated follow-up so no enquiry goes cold. Unlike Checkatrade or Bark, these leads come to you directly and aren't shared with competitors.",
  },
  {
    question: "How much do roofing leads cost in 2026?",
    answer:
      "On pay-per-lead platforms in 2026, roofing leads typically cost £15-£60 each on MyBuilder and Rated People, and £6-£30 per connection on Bark, while Checkatrade runs on a monthly membership of roughly £60-£120+ (often £1,000-£1,800 a year) plus optional lead and featured-listing fees. Because leads are shared and win rates sit around 15-20%, the true cost per job won often lands between £150 and £1,000.",
  },
  {
    question: "Is it cheaper to generate your own roofing leads?",
    answer:
      "Over time, yes. Paid ads and directories both cost money up front, but with your own website, Google Ads and SEO the cost per lead usually falls as your rankings and reviews compound - whereas directory fees tend to rise at renewal. More importantly, the website, reviews and Google presence become assets you own, so you're not starting from zero the day you stop paying.",
  },
  {
    question: "Should I quit Checkatrade completely?",
    answer:
      "Not overnight. The safest approach is to build your own lead channel alongside your existing membership, track cost per job won on both for a month or two, and only scale back the directory once your owned channel is reliably producing enough work to replace it.",
  },
  {
    question: "How long does it take to get roofing leads from Google Ads and SEO?",
    answer:
      "Google Ads can start producing roofing enquiries within the first 2-3 weeks because you're paying to appear immediately for people searching for a roofer. Local SEO and organic rankings take longer - usually a few months - but they lower your cost per lead over time. Running both together means paid ads carry you while your rankings build.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function HowToGetRoofingLeadsWithoutCheckatradePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Roofing Leads Without Checkatrade", href: canonicalPath },
            ]}
          />

          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · Lead Generation
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                How to Get Roofing Leads Without Checkatrade
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Checkatrade, Bark and the other lead platforms all work the same
                way: you pay, you compete, and the moment you stop paying the
                enquiries stop too.{" "}
                <span className="font-semibold text-foreground">
                  Here&apos;s what they actually cost UK roofers in 2026, and how to
                  build a roofing lead system that belongs to you instead.
                </span>
              </p>
            </header>
          </SectionReveal>

          {/* Quick answer */}
          <SectionReveal delay={60}>
            <div className="mt-8 rounded-xl border border-border/40 bg-card/40 px-5 py-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/80">Quick answer</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To get roofing leads without Checkatrade, build a lead system you
                own:{" "}
                <span className="font-semibold text-foreground">
                  a conversion website, Google Ads for your area, a strong Google
                  Business Profile, and automated follow-up
                </span>
                . Paid ads bring enquiries in within weeks while local SEO lowers
                your cost per lead over time — and every lead comes straight to
                you, not shared with four other roofers.
              </p>
            </div>
          </SectionReveal>

          {/* Section 1: what platforms really cost */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What Checkatrade and Pay-Per-Lead Platforms Really Cost Roofers
              </h2>
              <p>
                Before replacing something, it helps to know what it actually
                costs. Here is what UK roofers are paying across the main
                platforms in 2026:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Checkatrade:</span>{" "}
                  a monthly membership of roughly £60–£120+ per month (commonly
                  £1,000–£1,800 a year), plus optional per-lead and featured-listing
                  fees on top. Pricing isn&apos;t published — it&apos;s quoted per
                  trade and postcode.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Bark:</span>{" "}
                  pay-as-you-go credits, roughly £6–£30 per connection depending on
                  the job, with leads sent to several tradespeople at once.
                </li>
                <li>
                  <span className="font-semibold text-foreground">MyBuilder &amp; Rated People:</span>{" "}
                  typically £15–£60 per roofing lead, again shared with competitors.
                </li>
              </ul>
              <p>
                The headline price is only half the story. Because these leads are
                shared and roofers typically win around{" "}
                <span className="font-semibold text-foreground">15–20%</span> of
                them, the true cost per job actually won often lands anywhere
                between{" "}
                <span className="font-semibold text-foreground">£150 and £1,000</span>.
              </p>
              <StatCallout
                stat="£150–£1,000"
                label="Realistic true cost per roofing job won through shared pay-per-lead platforms in 2026, once you account for typical 15–20% win rates."
                accent="gold"
              />
              <PullQuote accent="blue">
                &quot;You&apos;re not really buying a lead. You&apos;re buying a
                one-in-five chance at a lead that four other roofers are chasing at
                the same time.&quot;
              </PullQuote>
            </section>
          </SectionReveal>

          {/* Section 2: the owned system */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Four Parts of a Roofing Lead System You Own
              </h2>
              <p>
                Getting roofing leads without Checkatrade isn&apos;t about one
                magic channel — it&apos;s four pieces working together, all of
                which belong to you rather than a platform.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                1. A conversion-focused website
              </h3>
              <p>
                Not a digital brochure — a site built to turn a visitor into an
                enquiry. Clear service pages, real photos of your work, visible
                reviews, and an obvious way to get a quote on every page. This is
                where every other channel sends people, so it does the heavy
                lifting.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                2. Google Ads targeting your area
              </h3>
              <p>
                When someone searches &quot;roofer near me&quot; or &quot;roof
                repair [town]&quot;, they have a job and a budget right now.
                Well-managed Google Ads put you in front of that person directly,
                and the enquiry is yours alone — not shared. This is what produces
                roofing leads in the first few weeks while your organic presence
                builds.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                3. Local SEO and your Google Business Profile
              </h3>
              <p>
                Most roofing jobs start with a local Google search or the map pack.
                An optimised{" "}
                <Link
                  href="/blog/how-to-get-more-google-reviews-tradesman"
                  className="font-semibold text-secondary hover:underline"
                >
                  Google Business Profile with a steady flow of reviews
                </Link>{" "}
                plus SEO for roofing searches in your area brings in leads that cost
                you nothing per click — and it compounds over time instead of
                resetting each month.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                4. Automated follow-up
              </h3>
              <p>
                Roofing enquiries go cold fast. A missed-call text-back and
                automatic follow-up on every quote means you&apos;re first to
                respond and you stop losing jobs to the roofer who simply replied
                quicker. This alone often recovers more work than any new lead
                source.
              </p>
            </section>
          </SectionReveal>

          {/* Mid CTA */}
          <div className="my-8 rounded-xl border border-secondary/30 bg-secondary/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-foreground font-medium leading-snug">
              Want a roofing lead system that belongs to you, not a directory?
            </p>
            <Link
              href="/roofers"
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20"
            >
              See how it works for roofers →
            </Link>
          </div>

          {/* Section 3: how to switch */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How to Move Off Checkatrade Without Losing Work
              </h2>
              <p>
                Nobody should cancel their membership the same week they launch a
                new website. The roofers who make this switch successfully do it in
                order:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Keep Checkatrade or your current platform running while the
                  website and Google Ads are set up and start producing leads
                </li>
                <li>
                  Track <span className="font-semibold text-foreground">cost per job won</span>{" "}
                  on both channels side by side for one to two months
                </li>
                <li>
                  Scale back the directory only once your own channel reliably
                  matches or beats it
                </li>
                <li>
                  Keep a lighter directory presence if it still pays for itself —
                  this doesn&apos;t have to be all or nothing
                </li>
              </ul>
              <PullQuote accent="purple">
                &quot;The goal isn&apos;t to hate Checkatrade. It&apos;s to stop
                being dependent on it — so a price rise at renewal is an
                inconvenience, not a crisis.&quot;
              </PullQuote>
              <p>
                If you want to see how the platforms stack up against each other
                first, our{" "}
                <Link
                  href="/blog/bark-vs-checkatrade"
                  className="font-semibold text-secondary hover:underline"
                >
                  Bark vs Checkatrade
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/best-checkatrade-alternative"
                  className="font-semibold text-secondary hover:underline"
                >
                  best Checkatrade alternative
                </Link>{" "}
                guides break down the trade-offs in detail.
              </p>
            </section>
          </SectionReveal>

          {/* Final CTA */}
          <SectionReveal delay={170}>
            <section className="mt-10 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Generate Your Own Roofing Leads?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                In 15 minutes we can look at what you&apos;re spending on
                directories now and show you what a roofing lead system you own
                would look like for your area. No pressure — just clarity.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
              <p className="mt-3 text-xs text-muted-foreground/70">
                15 minutes · No pressure · Just clarity on what&apos;s possible
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={190}>
            <FAQAccordionSection
              title="Roofing Leads Without Checkatrade, Common Questions"
              items={faqItems}
            />
          </SectionReveal>

        </div>
      </article>

      <Footer />
      <MobileCTABar />
      <JsonLd data={[articleSchema, faqSchema]} />
    </main>
  )
}
