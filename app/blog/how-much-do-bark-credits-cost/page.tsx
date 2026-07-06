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

const canonicalPath = "/blog/how-much-do-bark-credits-cost"

export const metadata: Metadata = buildMetadata({
  title: "How Much Do Bark Credits Cost? Full 2026 Pricing Breakdown",
  description:
    "Exactly how much Bark credits cost in 2026, what they expire, what a real lead costs per trade, and whether the credit model is actually worth it for UK tradespeople.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "How Much Do Bark Credits Cost? Full 2026 Pricing Breakdown",
  description:
    "A full breakdown of Bark credit costs for UK tradespeople in 2026, including per-credit price, cost per lead by job type, the 3-month expiry rule and whether it is worth the spend.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-01",
})

const faqItems: FAQItem[] = [
  {
    question: "How much do Bark credits cost in 2026?",
    answer:
      "Bark credits cost approximately £1.20 + VAT per credit for UK tradespeople, with volume discounts available on larger packs. The more credits you buy at once, the lower the per-credit cost. A single lead typically costs between 5 and 20 credits (£7 to £40 + VAT) depending on the trade, job size and location.",
  },
  {
    question: "How long do credits last on Bark?",
    answer:
      "From 1 November 2025, all newly purchased Bark credits expire three months after the date of purchase. This replaced the previous open-ended policy where credits did not expire. Unused credits are lost after the expiry date, so it only makes sense to buy credits at a volume you will realistically use within three months.",
  },
  {
    question: "How to get Bark credits for free?",
    answer:
      "Bark occasionally offers free credits as part of promotions for new sign-ups or as rewards for completing your profile fully. Discount codes are sometimes available through third-party voucher sites. However, sustained free credits are not a feature of the platform, the business model is credit sales, and there is no free tier for tradespeople beyond initial promotional offers.",
  },
  {
    question: "Is Bark worth the money for UK tradespeople?",
    answer:
      "Bark can generate work for tradespeople who are disciplined about which leads they contact and who have a fast response system in place. The main risks are the non-refundable credit model, inconsistent lead quality, multiple competing tradespeople per customer and the 3-month credit expiry. Most tradespeople find the cost per job won higher than they expected. Used as a short-term volume tool alongside your own website and Google presence, it can be worthwhile, as a permanent strategy, the maths rarely holds up long-term.",
  },
  {
    question: "What is the real cost of a Bark lead for a tradesperson?",
    answer:
      "The headline credit cost per lead (£7–£40) is only the first layer. The real cost per paying customer depends on your response rate and conversion rate. If you contact 10 leads at an average of £15 each (£150 in credits) and win 2 jobs, your actual cost per customer won is £75, before accounting for time spent chasing non-responsive customers. Many tradespeople report real costs per job won of £80–£200+ when tracked carefully.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function HowMuchDoBarkCreditsCostPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "How Much Do Bark Credits Cost?", href: canonicalPath },
            ]}
          />

          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · Platform Reviews
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                How Much Do Bark Credits Cost? Full 2026 Pricing Breakdown
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Bark{"'"}s credit system looks simple until you try to work out what
                a lead is actually costing you. The headline price per credit is one
                number, the real cost per job won is usually a very different one.{" "}
                <span className="font-semibold text-foreground">
                  Here is exactly what Bark credits cost in 2026, what changed with
                  the new expiry policy, and how to calculate whether the spend
                  makes sense for your trade.
                </span>
              </p>
            </header>
          </SectionReveal>

          {/* Quick answer */}
          <SectionReveal delay={60}>
            <div className="mt-8 rounded-xl border border-border/40 bg-card/40 px-5 py-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/80">Quick answer</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Bark credits cost around{" "}
                <span className="font-semibold text-foreground">£1.20 + VAT per credit</span>{" "}
                in the UK, with discounts on larger packs. A single lead costs 5–20 credits (roughly{" "}
                <span className="font-semibold text-foreground">£7–£40</span>) depending on trade and job size. Since November 2025, all credits expire{" "}
                <span className="font-semibold text-foreground">3 months after purchase</span>.
              </p>
            </div>
          </SectionReveal>

          {/* Section 1: Credit pricing */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How Bark Credits Work
              </h2>
              <p>
                Bark operates on a credit-based system with no monthly membership
                fee. You buy a pack of credits upfront and spend them to contact
                customers who have been matched to your trade category and location.
                Every lead on Bark shows the credit cost before you commit, so you
                can see what contacting that specific customer will cost before
                spending anything.
              </p>
              <p>
                Credits are not refundable once used, regardless of whether the
                customer responds. This is the most consistently complained-about
                aspect of Bark{"'"}s model across trade forums and review sites.
              </p>
              <p>
                Unlike Checkatrade, where you pay a monthly fee regardless of
                activity, Bark only costs you money when you actively choose to
                contact a customer. That makes it lower risk in terms of fixed
                overhead, but the non-refundable credit model means a poor
                response rate can still cost you significantly.
              </p>
            </section>
          </SectionReveal>

          {/* Section 2: Actual prices */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What Bark Credits Actually Cost in 2026
              </h2>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Per-Credit Price
              </h3>
              <p>
                The standard Bark credit price for UK tradespeople is approximately{" "}
                <span className="font-semibold text-foreground">£1.20 + VAT per credit</span>{" "}
                at the basic rate. Volume discounts apply when you buy larger packs, the more you buy, the lower your cost per credit. Promotional
                rates and discount codes can bring this down further.
              </p>

              <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                Cost Per Lead by Job Type
              </h3>
              <p>
                The number of credits required to contact a customer varies by trade
                and job value. Bark{"'"}s logic is simple: higher-value jobs cost more
                credits because the potential return is higher.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Small jobs</span>{" "}
                  (minor repairs, one-off cleaning, small garden jobs): 5–8 credits, roughly{" "}
                  <span className="font-semibold text-foreground">£7–£12</span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">Mid-size jobs</span>{" "}
                  (bathroom repairs, electrical work, fence installation): 10–15
                  credits, roughly{" "}
                  <span className="font-semibold text-foreground">£14–£22</span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">Larger projects</span>{" "}
                  (full bathroom refits, rewires, extensions, driveways): 15–20+
                  credits, roughly{" "}
                  <span className="font-semibold text-foreground">£22–£40+</span>
                </li>
              </ul>
              <p>
                Between three and five tradespeople typically contact the same
                customer on Bark. You are paying to join that competition, not to be the only option.
              </p>

              <StatCallout
                stat="£7–£40+"
                label="What it costs in Bark credits to contact a single customer in 2026, before knowing if they'll respond. Credits are non-refundable if they don't."
                accent="gold"
              />
            </section>
          </SectionReveal>

          {/* Section 3: The expiry change */}
          <SectionReveal delay={110}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Credit Expiry Change: What You Need to Know
              </h2>
              <p>
                From{" "}
                <span className="font-semibold text-foreground">
                  1 November 2025
                </span>
                , Bark changed its credit policy significantly. All newly purchased
                credits now expire three months after the date of purchase. Previously,
                credits had no expiry date, you could buy a pack and use them at
                whatever pace suited your business.
              </p>
              <p>
                This change has two practical effects:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">
                    You can no longer stockpile credits
                  </span>{" "}
                  when packs are on promotion and use them slowly over many months.
                  Any credits bought must be used within three months or they are
                  lost.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Buying large packs is now riskier
                  </span>{" "}
                  unless you are consistently active on the platform. If your work
                  gets busy and you forget to use Bark for a few months, those
                  credits disappear.
                </li>
              </ul>
              <PullQuote accent="blue">
                "The expiry change effectively forces more regular purchasing, even
                if you have credits sitting there. It{"'"}s a commercial decision that
                benefits Bark more than the tradesperson."
              </PullQuote>
              <p>
                The practical recommendation is to buy only what you will realistically
                use in the next six to eight weeks, rather than buying large packs
                to take advantage of volume pricing.
              </p>
            </section>
          </SectionReveal>

          {/* Mid CTA */}
          <div className="my-8 rounded-xl border border-secondary/30 bg-secondary/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-foreground font-medium leading-snug">
              Spending on Bark but not sure what it{"'"}s actually costing per job? Let{"'"}s look together.
            </p>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20"
            >
              Free 15-min call →
            </Link>
          </div>

          {/* Section 4: The real cost */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Real Cost of a Bark Lead: Credit Price vs Cost Per Job Won
              </h2>
              <p>
                The headline credit cost is not the number that matters. The number
                that matters is your{" "}
                <span className="font-semibold text-foreground">cost per job won</span>
                : how much you spend in credits for every customer who actually
                hires you.
              </p>
              <p>
                Here is how to calculate it:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Track every customer you contact on Bark in a month</li>
                <li>Track the total credits spent contacting them</li>
                <li>Count how many of those became paying jobs</li>
                <li>
                  Divide total credit spend by jobs won, that is your real cost
                  per customer acquired
                </li>
              </ul>
              <p>
                A realistic scenario for a plumber contacting 10 Bark leads in a month:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>10 leads × average 12 credits × £1.20 = <span className="font-semibold text-foreground">£144 in credits</span></li>
                <li>Of those 10: 4 do not respond, 3 get multiple quotes and go elsewhere, 3 convert to jobs</li>
                <li>
                  Cost per job won: £144 ÷ 3 ={" "}
                  <span className="font-semibold text-foreground">£48 per customer</span>
                </li>
              </ul>
              <p>
                That is a best-case scenario with a reasonable conversion rate. Many
                tradespeople report worse response rates, pushing their real cost per
                job won above £80–£150.
              </p>
              <p>
                For high-value jobs (a full bathroom refit, a new driveway, a boiler
                replacement), even £100 per customer acquired can make commercial
                sense. For smaller recurring work, the maths often does not hold up.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Is it worth it */}
          <SectionReveal delay={130}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Is Bark Worth the Money in 2026?
              </h2>
              <p>
                Bark works best when:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You respond to new matches quickly, ideally within minutes.
                  Speed of response is the single biggest factor in Bark conversion
                  rates because multiple tradespeople are contacting the same
                  customer simultaneously.
                </li>
                <li>
                  You are selective, only spending credits on leads where you can
                  genuinely compete on quality rather than just being one of several
                  quotes.
                </li>
                <li>
                  You have a{" "}
                  <Link href="/services" className="font-semibold text-secondary hover:underline">
                    professional website
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/blog/how-to-get-more-google-reviews-tradesman"
                    className="font-semibold text-secondary hover:underline"
                  >
                    strong Google reviews
                  </Link>{" "}
                  that customers find when they look you up after getting your Bark
                  response, because they will look you up.
                </li>
                <li>
                  You treat it as a volume supplement while your organic reputation
                  and direct enquiries build, not as your core strategy.
                </li>
              </ul>
              <p>
                Bark does not work well long-term as a standalone strategy. The
                credit model means you are always paying per opportunity, response
                rates are inconsistent, and you are building nothing on the platform
                that you own. Every pound spent on Bark is a variable cost with no
                compounding return.
              </p>
              <p>
                By contrast, the same spend directed at a conversion-ready website
                and{" "}
                <Link
                  href="/blog/google-ads-for-tradesmen-uk"
                  className="font-semibold text-secondary hover:underline"
                >
                  Google Ads
                </Link>{" "}
                sends high-intent homeowners directly to your site, where you are
                the only tradesperson they are looking at, not one of five who
                responded to a Bark match.
              </p>
            </section>
          </SectionReveal>

          {/* Final CTA */}
          <SectionReveal delay={150}>
            <section className="mt-10 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want to Know What Your Bark Spend Is Really Costing You?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Book a free 15-minute discovery call. We{"'"}ll calculate your real
                cost per job won from Bark, compare it to what the same budget
                could achieve pointed at your own website and Google presence,
                and give you a clear picture of where your marketing spend goes
                furthest.
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

          <SectionReveal delay={170}>
            <FAQAccordionSection
              title="Bark Credits, Common Questions"
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
