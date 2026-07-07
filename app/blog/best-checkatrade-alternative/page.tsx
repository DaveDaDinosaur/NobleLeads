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

const canonicalPath = "/blog/best-checkatrade-alternative"

export const metadata: Metadata = buildMetadata({
  title: "Best Checkatrade Alternative for UK Trades in 2026",
  description:
    "Looking for a Checkatrade alternative? Here's how the other directories compare, and why the real alternative most UK trades need isn't another directory at all.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Best Checkatrade Alternative for UK Trades in 2026",
  description:
    "A breakdown of the main Checkatrade alternatives for UK tradespeople, how they compare, and why building your own lead generation system beats switching directories.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-07-07",
})

const faqItems: FAQItem[] = [
  {
    question: "What is the best alternative to Checkatrade?",
    answer:
      "There isn't one directory that solves what most tradespeople are actually frustrated about. TrustaTrader, Rated People, MyBuilder and Bark all run the same basic model as Checkatrade: you pay for visibility or per-lead access, and you're competing with other tradespeople for the same enquiry. The alternative that actually changes the economics is building your own website, Google Ads presence and review profile, an asset you own, rather than renting space on someone else's platform.",
  },
  {
    question: "Is there a free alternative to Checkatrade?",
    answer:
      "A basic Google Business Profile is free and, for many local trades, drives more enquiries than a paid directory listing once it has enough reviews. It won't replace paid advertising if you need volume quickly, but it costs nothing to set up properly and is worth doing regardless of what other platforms you use.",
  },
  {
    question: "Which directory is cheaper than Checkatrade?",
    answer:
      "Rated People and MyBuilder are generally cheaper than Checkatrade per lead, and Bark's pay-as-you-go credit model means you're not locked into a monthly membership fee. TrustaTrader tends to cost more annually with less traffic. Cheaper doesn't necessarily mean better value though, lower cost directories usually also mean lower lead volume and less homeowner trust.",
  },
  {
    question: "Should I quit Checkatrade completely?",
    answer:
      "Not necessarily, and not immediately. Most tradespeople who successfully move away from Checkatrade do it gradually: they build a website and Google Ads campaign alongside their existing membership, track which channel actually produces paying customers, and only reduce or drop Checkatrade once their owned channels are reliably generating enough work to replace it.",
  },
  {
    question: "What do most established tradespeople use instead of Checkatrade?",
    answer:
      "Established UK tradespeople with strong reputations typically rely on a combination of their own website, an optimised Google Business Profile, Google Ads, and referrals, rather than any single directory. The common thread is ownership: their leads come through channels they control, not a platform that can change its pricing or algorithm at any time.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function BestCheckatradeAlternativePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Best Checkatrade Alternative", href: canonicalPath },
            ]}
          />

          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · Platform Reviews
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Best Checkatrade Alternative for UK Trades in 2026
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Most people searching for a Checkatrade alternative are really
                asking one of two things: which directory is cheaper, or is there
                a way to get enquiries without depending on a directory at all.{" "}
                <span className="font-semibold text-foreground">
                  This article covers both, honestly.
                </span>
              </p>
            </header>
          </SectionReveal>

          {/* Quick answer */}
          <SectionReveal delay={60}>
            <div className="mt-8 rounded-xl border border-border/40 bg-card/40 px-5 py-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/80">Quick answer</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every major directory alternative, TrustaTrader, Rated People,
                MyBuilder, Bark, runs the same basic model as Checkatrade: pay
                for visibility, compete with other tradespeople for the same
                enquiry.{" "}
                <span className="font-semibold text-foreground">
                  The real alternative isn't a different directory, it's your
                  own website, Google presence and review profile.
                </span>{" "}
                That's the only channel where the leads belong to you.
              </p>
            </div>
          </SectionReveal>

          {/* Section 1: The directory alternatives */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How the Other Directories Compare
              </h2>
              <p>
                If you{"'"}re specifically after a different directory to try
                alongside or instead of Checkatrade, here{"'"}s the honest
                breakdown of each one.
              </p>
              <ul className="ml-5 list-disc space-y-3">
                <li>
                  <span className="font-semibold text-foreground">TrustaTrader:</span>{" "}
                  smaller audience than Checkatrade, but the vetting process is
                  more thorough. Tends to cost more annually with less traffic.{" "}
                  <Link
                    href="/blog/how-much-does-checkatrade-cost"
                    className="font-semibold text-secondary hover:underline"
                  >
                    See the full cost comparison
                  </Link>
                  .
                </li>
                <li>
                  <span className="font-semibold text-foreground">Rated People:</span>{" "}
                  a three-competitor cap per lead (versus Checkatrade{"'"}s four
                  or five) means less direct competition on each enquiry, but
                  overall traffic is lower.{" "}
                  <Link
                    href="/blog/is-rated-people-worth-it"
                    className="font-semibold text-secondary hover:underline"
                  >
                    Read the full review
                  </Link>
                  .
                </li>
                <li>
                  <span className="font-semibold text-foreground">MyBuilder:</span>{" "}
                  you only pay when a homeowner actively shortlists you, which
                  filters out low-intent enquiries better than most competitors.{" "}
                  <Link
                    href="/blog/mybuilder-vs-checkatrade"
                    className="font-semibold text-secondary hover:underline"
                  >
                    Full MyBuilder vs Checkatrade comparison
                  </Link>
                  .
                </li>
                <li>
                  <span className="font-semibold text-foreground">Bark:</span>{" "}
                  pay-as-you-go credits instead of a monthly membership, but
                  leads are shared with up to five competitors and a meaningful
                  share are unresponsive.{" "}
                  <Link
                    href="/blog/bark-vs-checkatrade"
                    className="font-semibold text-secondary hover:underline"
                  >
                    Full Bark vs Checkatrade breakdown
                  </Link>
                  .
                </li>
              </ul>
              <PullQuote accent="blue">
                "Swapping Checkatrade for Bark, or Bark for Rated People, is
                just moving your rent payment to a different landlord. The
                fundamental problem, you don't own the relationship with the
                homeowner, doesn't change."
              </PullQuote>
            </section>
          </SectionReveal>

          {/* Section 2: The real alternative */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Alternative That Actually Changes the Economics
              </h2>
              <p>
                Every directory on the list above has the same structural
                limit: you{"'"}re paying to appear in front of a homeowner who
                is actively comparing you against several other tradespeople at
                the same time. Stop paying, and the enquiries stop immediately.
              </p>
              <p>
                The alternative that changes this is building three things you
                actually own:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">
                    A conversion-ready website
                  </span>{" "}
                  that homeowners land on directly, not a shared profile page
                  surrounded by competitors
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Targeted Google Ads and local SEO
                  </span>{" "}
                  so you{"'"}re found by people actively searching for your
                  trade in your area, without a directory as the middleman
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Your own Google Business Profile and review velocity
                  </span>{" "}
                  which compounds over time and belongs to your business, not a
                  platform that can change its terms whenever it wants
                </li>
              </ul>
              <StatCallout
                stat="£30–£80"
                label="Typical cost per paying customer through a well-managed Google Ads campaign, often half of what tradespeople report paying per job won through Checkatrade."
                accent="gold"
              />
            </section>
          </SectionReveal>

          {/* Mid CTA */}
          <div className="my-8 rounded-xl border border-secondary/30 bg-secondary/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-foreground font-medium leading-snug">
              Curious what an owned lead system would look like for your trade?
            </p>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20"
            >
              Free 15-min call →
            </Link>
          </div>

          {/* Section 3: How to switch without the risk */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How to Switch Without Losing Enquiries in the Meantime
              </h2>
              <p>
                Nobody sensible cancels Checkatrade the same week they launch a
                new website. The tradespeople who make this transition
                successfully do it in a specific order:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Keep the existing directory membership running while the new
                  website and Google Ads campaign are built and start producing
                  leads
                </li>
                <li>
                  Track cost per job won on both channels side by side for at
                  least one to two months
                </li>
                <li>
                  Reduce directory spend only once the owned channel is
                  reliably matching or beating it
                </li>
                <li>
                  Keep a lighter directory presence if it still adds
                  worthwhile volume, there{"'"}s no rule that says it has to be
                  all or nothing
                </li>
              </ul>
              <PullQuote accent="purple">
                "The goal isn't to hate Checkatrade. It's to stop being
                dependent on it. Those are different problems with different
                solutions."
              </PullQuote>
            </section>
          </SectionReveal>

          {/* Final CTA */}
          <SectionReveal delay={170}>
            <section className="mt-10 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Build the Alternative That Actually Owns Itself?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                In 15 minutes we can look at what you{"'"}re currently spending
                on directories and show you what the same budget builds when
                it{"'"}s pointed at a system you own instead.
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
                15 minutes · No pressure · Just clarity on what{"'"}s possible
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={190}>
            <FAQAccordionSection
              title="Checkatrade Alternatives, Common Questions"
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
