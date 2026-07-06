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

const canonicalPath = "/blog/bark-vs-checkatrade"

export const metadata: Metadata = buildMetadata({
  title: "Bark vs Checkatrade: Which Is Better for UK Tradesmen? (2026)",
  description:
    "Bark vs Checkatrade: honest comparison of costs, lead quality and which platform actually delivers better ROI for UK tradespeople in 2026.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Bark vs Checkatrade: Which Is Better for UK Tradesmen? (2026)",
  description:
    "An honest head-to-head comparison of Bark and Checkatrade for UK tradespeople in 2026, covering real costs, lead quality, platform models and what to do instead.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-01",
})

const faqItems: FAQItem[] = [
  {
    question: "Is Checkatrade better than Bark?",
    answer:
      "For most established UK tradespeople, Checkatrade has an edge over Bark because homeowners use Checkatrade with specific and often urgent intent, they are looking for a tradesperson rather than getting quotes matched to them. Bark leads tend to be less qualified and shared with more competitors. That said, Checkatrade costs significantly more and the monthly fee is a fixed overhead regardless of lead volume. Neither is a substitute for owning your own lead flow.",
  },
  {
    question: "Is it worth joining Bark as a tradesman?",
    answer:
      "Bark can generate work, particularly for newer businesses that need volume quickly and cannot afford a Checkatrade membership. The risk is the credit model: you pay to contact customers who may never respond, and credits are non-refundable. Since November 2025, all credits also expire after three months. If you are disciplined about only contacting high-quality leads and tracking your cost per job won, Bark can be worth it short-term. Long-term, the economics rarely beat owning your own website and Google presence.",
  },
  {
    question: "Is Bark better than MyBuilder?",
    answer:
      "MyBuilder is generally considered better value than Bark for most UK tradespeople. On MyBuilder, you only pay when the homeowner actively shortlists you, meaning they have shown genuine intent before money changes hands. On Bark, you pay to contact customers who have been matched to you automatically, with no guarantee they are ready to hire. MyBuilder also tends to attract higher-value planned work. Bark has a wider range of service categories but lead quality is more inconsistent.",
  },
  {
    question: "What is the best tradesman platform in 2026?",
    answer:
      "No single lead platform outperforms a well-built combination of your own conversion-ready website, a strong Google Business Profile and consistent Google reviews. These assets compound over time and send leads directly to you, not to a marketplace where homeowners can compare you against five competitors simultaneously. Platforms like Bark and Checkatrade are best used as a short-term supplement while you build those owned assets.",
  },
  {
    question: "How much does Bark cost compared to Checkatrade?",
    answer:
      "Bark has no monthly membership fee. You buy credits (around £1.20 + VAT each) and spend them to contact customers, with leads typically costing 5–20 credits (£9–£40 + VAT) depending on job value. Credits expire after 3 months from purchase. Checkatrade charges a monthly membership of £60–£500+ depending on trade and region, plus additional per-lead fees. Bark is lower risk upfront but costs can add up quickly if response rates are poor.",
  },
  {
    question: "Do Bark leads actually convert into jobs?",
    answer:
      "Some do, but the conversion rate on Bark is notably lower than on Checkatrade or MyBuilder because the platform matches customers to multiple tradespeople simultaneously and many customers are in early research mode rather than ready to hire. The most common complaint from tradespeople is paying credits for customers who never respond. Disciplined filtering, only contacting jobs where you can genuinely compete on quality, not just price, improves conversion rates significantly.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function BarkVsCheckatradePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Bark vs Checkatrade", href: canonicalPath },
            ]}
          />

          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · Platform Reviews
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Bark vs Checkatrade: Which Is Better for UK Tradesmen in 2026?
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Bark and Checkatrade are two of the most widely used lead platforms
                for UK tradespeople, but they work completely differently, attract
                different types of customer and carry very different cost structures.{" "}
                <span className="font-semibold text-foreground">
                  Here{"'"}s an honest breakdown of both so you can decide where your
                  marketing budget is better spent.
                </span>
              </p>
            </header>
          </SectionReveal>

          {/* Quick answer */}
          <SectionReveal delay={60}>
            <div className="mt-8 rounded-xl border border-border/40 bg-card/40 px-5 py-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/80">Quick answer</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Checkatrade</span> has stronger brand recognition and tends to attract higher-intent homeowners, but costs £60–£500+ per month with no lead volume guarantee.{" "}
                <span className="font-semibold text-foreground">Bark</span> has no monthly fee and suits businesses that want volume quickly, but lead quality is the most inconsistent of any major platform. For long-term growth, neither replaces owning your own lead flow.
              </p>
            </div>
          </SectionReveal>

          {/* Section 1: How each works */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How Bark and Checkatrade Work Differently
              </h2>
              <p>
                The most important thing to understand before comparing costs is that
                Bark and Checkatrade use different models entirely, and that changes
                everything about what you get for your money.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                How Bark Works
              </h3>
              <p>
                A customer fills in a request form on Bark describing a job they need
                done. Bark{"'"}s algorithm matches that request to tradespeople in the
                area and notifies them. You then pay credits to contact the customer
                and submit your details. Bark is a{" "}
                <span className="font-semibold text-foreground">lead-matching platform</span>
                : the customer is pushed to you rather than actively searching for you.
              </p>
              <p>
                The key issue with this model is intent. A customer who fills in a
                quick form and gets matched to five tradespeople has not necessarily
                made a decision to hire anyone. They may be in early research mode,
                getting a rough idea of cost, or simply curious.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                How Checkatrade Works
              </h3>
              <p>
                Checkatrade is a directory. Homeowners go to Checkatrade.com and
                actively search for a plumber, electrician or builder in their area.
                They browse profiles, read reviews and make contact directly. The
                homeowner is{" "}
                <span className="font-semibold text-foreground">
                  already looking for a tradesperson
                </span>{" "}
                when they find you, which is fundamentally different from being
                matched to someone who filled in a form.
              </p>
              <PullQuote accent="blue">
                "On Checkatrade, the homeowner found you. On Bark, Bark found the
                homeowner and sold their details to you. That difference in intent
                changes everything about conversion rates."
              </PullQuote>
            </section>
          </SectionReveal>

          {/* Section 2: Costs */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Bark vs Checkatrade: What Do They Actually Cost?
              </h2>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Bark Pricing in 2026
              </h3>
              <p>
                Bark has no monthly membership fee. You buy a credit pack and spend
                credits to contact customers. The headline credit price is around
                £1.20 + VAT per credit, with volume discounts on larger packs.
              </p>
              <p>
                The real cost depends on the jobs you pursue:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Small jobs:</span>{" "}
                  5–8 credits to contact (roughly £7–£12)
                </li>
                <li>
                  <span className="font-semibold text-foreground">Mid-size jobs:</span>{" "}
                  10–15 credits (roughly £14–£22)
                </li>
                <li>
                  <span className="font-semibold text-foreground">Larger projects:</span>{" "}
                  15–20+ credits (roughly £22–£40+)
                </li>
              </ul>
              <p>
                From November 2025,{" "}
                <span className="font-semibold text-foreground">
                  all credits expire three months after purchase
                </span>
                . This was a significant change from the previous open-ended policy
                and means unused credits are now lost if you don{"'"}t maintain a
                consistent volume of activity on the platform.
              </p>
              <p>
                Credits are{" "}
                <span className="font-semibold text-foreground">non-refundable</span>
                {" "}even if the customer never responds. If your response rate is poor, which many tradespeople report, the cost per job won can climb
                quickly.
              </p>

              <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                Checkatrade Pricing in 2026
              </h3>
              <p>
                Checkatrade does not publish pricing publicly. You go through a sales
                call and receive a quote based on your trade, location and how much
                lead volume you want. Real-world figures from UK tradespeople:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Basic listing:</span>{" "}
                  from around £60 per month
                </li>
                <li>
                  <span className="font-semibold text-foreground">Active membership with leads:</span>{" "}
                  typically £100–£500+ per month depending on trade and region
                </li>
                <li>
                  <span className="font-semibold text-foreground">Per-lead fees on top:</span>{" "}
                  £5–£40 per enquiry depending on job size
                </li>
              </ul>
              <p>
                You pay the membership whether leads come in or not. Tradespeople
                in competitive urban areas with multiple Checkatrade-listed competitors
                often pay significantly more for less visibility.
              </p>

              <StatCallout
                stat="£9–£40"
                label="What a single Bark lead costs in credits, before you know if the customer will respond. Checkatrade adds this cost on top of a monthly membership you're already paying regardless."
                accent="gold"
              />
            </section>
          </SectionReveal>

          {/* Mid CTA */}
          <div className="my-8 rounded-xl border border-secondary/30 bg-secondary/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-foreground font-medium leading-snug">
              Not sure which platform is worth keeping? We{"'"}ll look at your numbers in 15 minutes.
            </p>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20"
            >
              Free 15-min call →
            </Link>
          </div>

          {/* Section 3: Lead quality */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Lead Quality: Bark vs Checkatrade
              </h2>
              <p>
                Cost per lead only matters in the context of how often those leads
                convert. This is where the two platforms diverge most sharply.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Bark Lead Quality
              </h3>
              <p>
                Bark{"'"}s lead quality is widely acknowledged as the most inconsistent
                of any major UK tradesman platform. Because customers are matched
                automatically rather than actively searching, a significant proportion
                are in research mode, price-checking, or simply not ready to hire.
                The most consistent complaint across trade forums and review sites is{" "}
                <span className="font-semibold text-foreground">
                  paying for customers who never respond
                </span>
                : and getting no refund.
              </p>
              <p>
                Multiple tradespeople can contact the same customer, typically three
                to five, so even when a customer is serious, you are competing
                immediately on price and speed.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Checkatrade Lead Quality
              </h3>
              <p>
                Because homeowners visit Checkatrade with a specific task in mind and
                choose to contact you directly, the intent behind a Checkatrade
                enquiry is generally higher than a Bark match. The customer already
                knows what they want and has read your reviews before picking up the
                phone.
              </p>
              <p>
                The competition issue is similar, typically three to four tradespeople
                are visible in the same category, but the homeowner{"'"}s starting
                position is more committed. That said, Checkatrade{"'"}s platform is not
                immune to tyre-kickers, and in popular trade categories the sheer
                number of listed businesses means many profiles rarely get seen at all.
              </p>
              <PullQuote accent="purple">
                "Bark sends you a customer who might need someone. Checkatrade
                sends you a customer who is actively looking for someone. That
                distinction is worth more than any difference in credit prices."
              </PullQuote>
            </section>
          </SectionReveal>

          {/* Section 4: Which suits which trade */}
          <SectionReveal delay={130}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Which Platform Suits Which Trade?
              </h2>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Bark tends to suit:
              </h3>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">New businesses</span>{" "}
                  that need volume quickly and want to test the market without a
                  monthly commitment.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Trades with wide service ranges
                  </span>: Bark covers a broader category of services than Checkatrade, so
                  trades like{" "}
                  <Link href="/carpet-cleaners" className="font-semibold text-secondary hover:underline">
                    carpet cleaners
                  </Link>
                  ,{" "}
                  <Link href="/landscapers" className="font-semibold text-secondary hover:underline">
                    landscapers
                  </Link>{" "}
                  and specialist cleaners can find relevant leads.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Businesses with fast response systems
                  </span>{" "}
                  that can call a new Bark lead within minutes, the faster you respond,
                  the higher your conversion rate.
                </li>
              </ul>

              <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                Checkatrade tends to suit:
              </h3>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">
                    Emergency and reactive trades
                  </span>: plumbers, electricians, boiler engineers, roofers. The Checkatrade
                  brand is well known to homeowners with an urgent need.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Established businesses with strong review histories
                  </span>{" "}
                  that can stand out in a directory browse.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Trades in less competitive areas
                  </span>{" "}
                  where there are fewer listed alternatives and your profile gets
                  genuine visibility.
                </li>
              </ul>
            </section>
          </SectionReveal>

          {/* Section 5: The shared problem */}
          <SectionReveal delay={150}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Problem Both Platforms Share
              </h2>
              <p>
                Despite their differences in cost and model, Bark and Checkatrade have
                the same fundamental weakness for UK tradespeople:{" "}
                <span className="font-semibold text-foreground">
                  you are always competing against other tradespeople on someone
                  else{"'"}s platform.
                </span>
              </p>
              <p>
                Every time a homeowner searches Checkatrade, they see you and your
                competitors side by side. Every time Bark sends a match, the same
                customer has been contacted by multiple other businesses
                simultaneously. There is no way to stand out except by reviewing
                better or pricing lower.
              </p>
              <p>
                And when you stop paying, the leads stop. The reviews you{"'"}ve built
                on Checkatrade belong to Checkatrade. The profile you{"'"}ve built on
                Bark lives on Bark. You own none of it.
              </p>
              <p>
                Compare that with a trade business that has a conversion-ready website
                ranking on Google. When a homeowner searches{" "}
                <span className="font-semibold text-foreground">
                  "plumber in [town]"
                </span>{" "}
                and your website appears, with your own reviews, your own branding and
                a direct call button, you are the only option they{"'"}re looking at.
                No competitors. No price race. No platform taking a cut.
              </p>
              <PullQuote accent="gold">
                "Both platforms are useful in the short term. Neither builds
                anything that compounds over time. Your own website does."
              </PullQuote>
            </section>
          </SectionReveal>

          {/* Section 6: Verdict */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Bark vs Checkatrade, The Honest Verdict
              </h2>
              <p>
                If you had to choose one:{" "}
                <span className="font-semibold text-foreground">
                  Checkatrade{"'"}s higher-intent model generally delivers better lead
                  quality
                </span>: but only if the monthly cost makes sense for your trade and area.
                Run the numbers. If your cost per customer won is above £150, it is
                almost certainly cheaper to achieve the same through Google Ads
                pointing to your own site.
              </p>
              <p>
                If you are brand new and need work quickly without upfront commitment,{" "}
                <span className="font-semibold text-foreground">
                  Bark{"'"}s no-membership model makes it the lower-risk starting point
                </span>
                . Treat it as a tap to turn on while you build your own assets, not
                a permanent strategy.
              </p>
              <p>
                If you have been using both for more than six months and cannot
                calculate a clear cost per job won, you are almost certainly spending
                more than you need to. The same budget invested in a{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  proper trade website
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/google-ads-for-tradesmen-uk"
                  className="font-semibold text-secondary hover:underline"
                >
                  Google Ads
                </Link>{" "}
                will typically outperform both within twelve months.
              </p>
            </section>
          </SectionReveal>

          {/* Section 7: What to build */}
          <SectionReveal delay={170}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What Works Better Than Either Platform
              </h2>
              <p>
                The UK trade businesses generating the most consistent enquiries in
                2026 are not the ones spending the most on Bark or Checkatrade. They
                are the ones who have built a lead system they own:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  A{" "}
                  <Link href="/services" className="font-semibold text-secondary hover:underline">
                    conversion-ready trade website
                  </Link>{" "}
                  built to turn visitors into enquiries, not just an online brochure.
                </li>
                <li>
                  A Google Business Profile that shows up prominently in local map
                  searches, the first thing most homeowners see when they search for
                  a trade.
                </li>
                <li>
                  A consistent flow of{" "}
                  <Link
                    href="/blog/how-to-get-more-google-reviews-tradesman"
                    className="font-semibold text-secondary hover:underline"
                  >
                    genuine Google reviews
                  </Link>{" "}
                  that build trust and improve search ranking month on month.
                </li>
                <li>
                  Optional Google Ads campaigns sending high-intent searchers to your
                  own site, where you are the only option, not one of several.
                </li>
              </ul>
              <p>
                Platforms like Bark and Checkatrade can play a supporting role.
                But they should not be the foundation. That foundation needs to be
                something you own.
              </p>
            </section>
          </SectionReveal>

          {/* Final CTA */}
          <SectionReveal delay={180}>
            <section className="mt-10 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want to Stop Paying for Every Lead?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                If you{"'"}re spending on Bark, Checkatrade or both and the numbers
                don{"'"}t feel right, book a free 15-minute call. We{"'"}ll look at what
                you{"'"}re spending, what you{"'"}re winning, and show you what the same
                budget could do pointed at your own website and Google presence.
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

          <SectionReveal delay={200}>
            <FAQAccordionSection
              title="Bark vs Checkatrade, Common Questions"
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
