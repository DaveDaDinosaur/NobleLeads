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

const canonicalPath = "/blog/mybuilder-vs-checkatrade"

export const metadata: Metadata = buildMetadata({
  title: "MyBuilder vs Checkatrade: Which Is Worth It for UK Trades? (2026)",
  description:
    "MyBuilder vs Checkatrade, an honest breakdown of costs, lead quality, which trades each suits, and whether either platform is actually worth your money in 2026.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "MyBuilder vs Checkatrade: Which Is Worth It for UK Trades? (2026)",
  description:
    "An honest head-to-head comparison of MyBuilder and Checkatrade for UK tradespeople in 2026, covering real costs, lead quality, and what to do instead.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-01",
})

const faqItems: FAQItem[] = [
  {
    question: "Is Checkatrade better than MyBuilder?",
    answer:
      "It depends on your trade. Checkatrade tends to work better for emergency and reactive trades, plumbers, electricians, locksmiths, where homeowners search urgently and brand recognition matters. MyBuilder tends to work better for planned home improvement work like bathrooms, kitchens and extensions, where the job description is detailed and you can decide whether it's worth pursuing before you spend anything. Neither is objectively better. Both carry the same fundamental problem: you're renting access to someone else's audience.",
  },
  {
    question: "Is MyBuilder any good for tradesmen?",
    answer:
      "MyBuilder can work well for established tradespeople with strong profiles and positive reviews who are selective about which jobs they pursue. The pay-when-shortlisted model means you don't spend money until a homeowner has expressed genuine interest, which is a real advantage over Bark. The problems are the competition per job (3–6 tradespeople), non-refundable fees when customers go quiet, and inconsistent lead quality in some trade categories.",
  },
  {
    question: "How much does MyBuilder charge for tradesmen?",
    answer:
      "MyBuilder has no monthly membership fee. You only pay a shortlist fee when a homeowner shortlists you and contact details are exchanged. Fees range from £2–£3 for small jobs under £75, £8–£15 for mid-size jobs between £500 and £1,000, £20–£35 for larger work between £1,000 and £3,000, and £50–£100 or more for major projects like extensions or full rewires. All fees are non-refundable.",
  },
  {
    question: "What is the best tradesman platform in 2026?",
    answer:
      "No lead platform, Checkatrade, MyBuilder, Bark or Rated People, is the best long-term strategy for a UK trade business. The best platform is one you own: a conversion-ready website, a properly optimised Google Business Profile and targeted Google Ads campaigns. These assets build momentum over time and send leads directly to you without competing on price against other tradespeople every time.",
  },
  {
    question: "Can I use both MyBuilder and Checkatrade at the same time?",
    answer:
      "Yes, and many tradespeople do. The risk is spreading your marketing budget across multiple platforms without tracking which one is actually generating profitable work. If you use both, track your cost per job won on each platform separately and cut the one that performs worse. Most tradespeople find one platform suits their trade better than the other.",
  },
  {
    question: "What is the main difference between MyBuilder and Checkatrade?",
    answer:
      "The business models are fundamentally different. MyBuilder is a job marketplace: homeowners post a job, tradespeople browse and send a free introduction, and you only pay if the homeowner shortlists you. Checkatrade is a directory: your profile is listed and homeowners browse and contact you directly. Checkatrade charges a monthly membership regardless of lead volume; MyBuilder charges nothing until a homeowner shows interest.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function MyBuilderVsCheckatradePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "MyBuilder vs Checkatrade", href: canonicalPath },
            ]}
          />

          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · Platform Reviews
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                MyBuilder vs Checkatrade: Which Is Worth It for UK Trades in 2026?
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Both platforms promise a steadier flow of work. Both charge you for
                the privilege. But they work in completely different ways, suit
                different trades, and carry very different risks.{" "}
                <span className="font-semibold text-foreground">
                  This is an honest breakdown of what each platform actually costs,
                  what the leads are like in practice, and which one, if either, is worth your money in 2026.
                </span>
              </p>
            </header>
          </SectionReveal>

          {/* Quick answer box */}
          <SectionReveal delay={60}>
            <div className="mt-8 rounded-xl border border-border/40 bg-card/40 px-5 py-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/80">Quick answer</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">MyBuilder</span> has no monthly fee and suits planned home improvement trades (builders, kitchen fitters, bathroom installers). You pay only when shortlisted.{" "}
                <span className="font-semibold text-foreground">Checkatrade</span> charges £60–£500+ per month and suits emergency trades (plumbers, electricians) where brand recognition matters. Neither replaces owning your own lead flow.
              </p>
            </div>
          </SectionReveal>

          {/* Section 1: How each platform works */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How Each Platform Actually Works
              </h2>
              <p>
                Before comparing costs and lead quality, it{"'"}s worth understanding
                that MyBuilder and Checkatrade are not the same type of product.
                They have fundamentally different business models, and that
                difference matters.
              </p>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                MyBuilder: Job Marketplace
              </h3>
              <p>
                On MyBuilder, homeowners post a job description and tradespeople
                browse available work. You send a free introduction message to jobs
                that interest you. If the homeowner shortlists you, meaning they
                want to see your contact details and have a conversation, you pay a
                shortlist fee. You do{" "}
                <span className="font-semibold text-foreground">
                  not pay to simply express interest
                </span>
                . The homeowner has to show genuine intent before any money leaves
                your pocket.
              </p>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Checkatrade: Directory Listing
              </h3>
              <p>
                Checkatrade works the other way around. You pay a monthly membership
                to be listed in their directory. Homeowners browse profiles, read
                your reviews and contact you directly. There is no job-posting system, leads come to you, or they don{"'"}t. You pay the membership whether
                you receive ten enquiries that month or zero.
              </p>
              <PullQuote accent="blue">
                "MyBuilder makes the homeowner show interest before you spend anything.
                Checkatrade charges you whether the phone rings or not."
              </PullQuote>
              <p>
                This is the core difference. One model protects your cash until there
                is a clear signal of intent. The other is a fixed overhead with no
                volume guarantee.
              </p>
            </section>
          </SectionReveal>

          {/* Section 2: Costs */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What Does Each Platform Cost? The Real Numbers
              </h2>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                MyBuilder Pricing
              </h3>
              <p>
                No joining fee. No monthly subscription. You pay a shortlist fee only
                when a homeowner selects you and contact details are exchanged. Those
                fees scale with the size of the job:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Small jobs (under £75):</span>{" "}
                  £2–£3 per shortlist
                </li>
                <li>
                  <span className="font-semibold text-foreground">Mid-size jobs (£500–£1,000):</span>{" "}
                  £8–£15 per shortlist
                </li>
                <li>
                  <span className="font-semibold text-foreground">Larger jobs (£1,000–£3,000):</span>{" "}
                  £20–£35 per shortlist
                </li>
                <li>
                  <span className="font-semibold text-foreground">Major projects (extensions, rewires, full fits):</span>{" "}
                  £50–£100+
                </li>
              </ul>
              <p>
                All fees are non-refundable, even if the homeowner stops responding
                after you{"'"}ve paid. If you pursue 20 jobs in a month and half of them
                shortlist you, you could easily spend £100–£300 before winning a
                single piece of work.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Checkatrade Pricing
              </h3>
              <p>
                Checkatrade doesn{"'"}t publish its prices publicly, you go through a
                sales call to get a quote, but real-world data from tradespeople puts
                the costs in a clear range:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Basic listing:</span>{" "}
                  from around £60 per month
                </li>
                <li>
                  <span className="font-semibold text-foreground">Active membership with lead volume:</span>{" "}
                  typically £100–£500+ per month depending on trade and region
                </li>
                <li>
                  <span className="font-semibold text-foreground">Per-lead fees on top:</span>{" "}
                  £5–£15 for small jobs, £20–£40 for larger projects
                </li>
                <li>
                  <span className="font-semibold text-foreground">London and South East:</span>{" "}
                  consistently at the top of the range
                </li>
              </ul>
              <p>
                What this looks like in practice for a typical plumber or electrician:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Quiet month: around <span className="font-semibold text-foreground">£175</span></li>
                <li>Average month: around <span className="font-semibold text-foreground">£400</span></li>
                <li>Busy month chasing work: <span className="font-semibold text-foreground">£775+</span></li>
              </ul>
              <p>
                Tradespeople also consistently report{" "}
                <span className="font-semibold text-foreground">
                  significant price increases at renewal
                </span>
                . The rate you sign up at is rarely the rate you pay in year two.
              </p>

              <StatCallout
                stat="£80–£200"
                label="Typical cost to acquire one paying customer through Checkatrade, once membership and per-lead fees are combined. MyBuilder's equivalent depends entirely on how selective you are about which jobs you pursue."
                accent="gold"
              />
            </section>
          </SectionReveal>

          {/* Mid-article CTA */}
          <div className="my-8 rounded-xl border border-secondary/30 bg-secondary/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-foreground font-medium leading-snug">
              Spending money on Checkatrade or MyBuilder and not sure if it{"'"}s working? Let{"'"}s look at it together.
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
                Lead Quality: What Are You Actually Getting?
              </h2>
              <p>
                Cost is only part of the picture. The more important question is
                whether the enquiries you get are worth chasing.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                MyBuilder Lead Quality
              </h3>
              <p>
                Because homeowners write a detailed job description upfront, MyBuilder
                leads tend to come with more context than most platforms. You can
                read what the job involves, where it is and often what budget the
                homeowner has in mind before you decide whether to respond.
              </p>
              <p>
                The drawback is{" "}
                <span className="font-semibold text-foreground">ghost enquiries</span>
                : homeowners who shortlist you, trigger the shortlist fee, and then
                never respond to calls or messages. There is no refund. Tradespeople
                across Trustpilot, Reviews.io and trade forums consistently flag this
                as the biggest frustration with the platform.
              </p>
              <p>
                Competition is also real. Between 3 and 6 tradespeople typically
                respond to each job, and without a strong profile and genuine reviews,
                you are competing largely on price.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Checkatrade Lead Quality
              </h3>
              <p>
                Checkatrade{"'"}s brand recognition is its biggest genuine advantage.
                When a homeowner searches for a plumber or electrician on Checkatrade,
                they often have a specific and immediate need. That intent is higher
                quality than a homeowner browsing job marketplaces.
              </p>
              <p>
                The problem is that you are{" "}
                <span className="font-semibold text-foreground">
                  one of several listed tradespeople
                </span>{" "}
                in your area, all with similar review scores, all competing for the
                same enquiry. In urban areas and competitive trades, your listing can
                be buried several pages deep without additional spend.
              </p>
              <PullQuote accent="purple">
                "The leads are real. The problem is that five other tradespeople got
                the same enquiry at the same time, and the one who calls back first
                and quotes lowest usually wins."
              </PullQuote>
            </section>
          </SectionReveal>

          {/* Section 4: Which trades */}
          <SectionReveal delay={130}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Which Trades Does Each Platform Actually Suit?
              </h2>
              <p>
                This is where a genuine difference between the two platforms exists, and it matters more than the cost comparison.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Checkatrade tends to suit:
              </h3>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Emergency and reactive trades</span>: plumbers, electricians, locksmiths, boiler engineers. Homeowners
                  in a crisis search Checkatrade by name because they trust the brand.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Established businesses</span>{" "}
                  with a strong review base who can stand out in a directory browse.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Trades in lower-competition areas</span>{" "}
                  where fewer tradespeople are listed in the same category.
                </li>
              </ul>

              <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                MyBuilder tends to suit:
              </h3>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Planned home improvement trades</span>: builders, kitchen fitters, bathroom installers, landscapers,{" "}
                  <Link href="/driveway-paving" className="font-semibold text-secondary hover:underline">
                    driveway specialists
                  </Link>
                  . Homeowners post detailed job descriptions for planned work, giving
                  you much more to assess before committing.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Tradespeople who are selective</span>{" "}
                  and only pursue jobs that fit their skills, location and pricing
                  without being locked into a monthly overhead.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Newer businesses</span>{" "}
                  that cannot yet justify a Checkatrade membership commitment.
                </li>
              </ul>
            </section>
          </SectionReveal>

          {/* Section 5: Vetting */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Vetting and Trust: Does It Make a Difference?
              </h2>
              <p>
                Checkatrade has a more thorough vetting process, background checks,
                insurance verification, proof of qualifications and references. That
                vetting is part of what homeowners are paying for when they use the
                platform, and it does carry real weight for certain trades (Gas Safe
                engineers, NICEIC-registered electricians).
              </p>
              <p>
                MyBuilder{"'"}s barrier to entry is lower. A BBC investigation found
                fake and unverified profiles on the platform, which has damaged
                homeowner confidence in some segments. The practical effect is that
                your profile and reviews have to do more of the trust-building work
                on MyBuilder than on Checkatrade.
              </p>
              <p>
                For tradespeople with strong credentials and a track record of
                positive reviews,{" "}
                <span className="font-semibold text-foreground">
                  the vetting difference rarely changes outcomes
                </span>
                . For newer businesses or those in regulated trades, Checkatrade{"'"}s
                badge carries more visible weight.
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: The real problem */}
          <SectionReveal delay={150}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Problem Neither Platform Can Fix
              </h2>
              <p>
                Whether you choose MyBuilder, Checkatrade or both, you are dealing
                with the same underlying issue:{" "}
                <span className="font-semibold text-foreground">
                  you are renting access to someone else{"'"}s audience.
                </span>
              </p>
              <p>
                Stop paying and the leads stop. Increase competition in your area and
                your visibility drops. The platform changes its pricing at renewal and
                your costs go up. None of those decisions are yours to make.
              </p>
              <p>
                More importantly, neither platform helps you build anything you own.
                The reviews you collect on Checkatrade belong to Checkatrade. The
                profile you build on MyBuilder lives on MyBuilder. Your brand, your
                reputation and your customer data are all sitting on someone else{"'"}s
                platform.
              </p>
              <PullQuote accent="gold">
                "Every pound you spend on Checkatrade or MyBuilder is helping build
                their platform. The same spend on your own website and Google presence
                builds something that compounds over time."
              </PullQuote>
              <p>
                The strongest UK trade businesses we work with use platforms like
                these as a supplement, a short-term traffic source while their own
                website, Google Business Profile and review base build momentum. Not
                as the foundation of their marketing.
              </p>
            </section>
          </SectionReveal>

          {/* Section 7: Verdict */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                So, MyBuilder vs Checkatrade, What{"'"}s the Verdict?
              </h2>
              <p>
                If you are an emergency or reactive trade and you need leads quickly
                while you build your own assets,{" "}
                <span className="font-semibold text-foreground">
                  Checkatrade{"'"}s brand recognition gives it an edge
                </span>: but only if the numbers make sense. Run the maths on what you
                actually spend versus what you win. If the cost per job won is above
                what Google Ads would deliver, it{"'"}s time to switch.
              </p>
              <p>
                If you are a home improvement trade or want to test the water without
                a monthly commitment,{" "}
                <span className="font-semibold text-foreground">
                  MyBuilder{"'"}s pay-when-shortlisted model is lower risk
                </span>
                . You control how much you spend by controlling which jobs you pursue.
                The ghost enquiry problem is real, but a disciplined approach limits
                the damage.
              </p>
              <p>
                If you have been on either platform for more than a year and you
                cannot clearly say it is generating profitable work,{" "}
                <span className="font-semibold text-foreground">
                  the platform is probably not the answer
                </span>
                . The same budget invested into a{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-ready website
                </Link>{" "}
                and Google presence will typically outperform both within six to
                twelve months, and the asset is yours permanently.
              </p>
            </section>
          </SectionReveal>

          {/* Section 8: What to build instead */}
          <SectionReveal delay={170}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What Is the Best Tradesman Platform in 2026?
              </h2>
              <p>
                The honest answer is that the best tradesman platform is not a
                platform at all. It is the combination of:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  A{" "}
                  <Link href="/services" className="font-semibold text-secondary hover:underline">
                    conversion-ready trade website
                  </Link>{" "}
                  that makes it easy for homeowners to call, book and trust you before
                  they even pick up the phone.
                </li>
                <li>
                  A properly optimised Google Business Profile so you appear
                  prominently in local searches, including the map pack, for your
                  trade and your area.
                </li>
                <li>
                  A{" "}
                  <Link
                    href="/blog/how-to-get-more-google-reviews-tradesman"
                    className="font-semibold text-secondary hover:underline"
                  >
                    consistent stream of genuine Google reviews
                  </Link>{" "}
                  that build trust and improve your visibility month on month.
                </li>
                <li>
                  Optional{" "}
                  <Link
                    href="/blog/google-ads-for-tradesmen-uk"
                    className="font-semibold text-secondary hover:underline"
                  >
                    Google Ads
                  </Link>{" "}
                  sending high-intent searchers directly to your own site, not a
                  marketplace where they also see your competitors.
                </li>
              </ul>
              <p>
                These things cost money to set up correctly, but unlike a Checkatrade
                membership or MyBuilder shortlist fees, they{" "}
                <span className="font-semibold text-foreground">
                  compound over time
                </span>
                . Every review adds to your ranking. Every blog post builds your
                authority. Every job that comes through your own site is a customer
                who found you, not one who compared you to five others on a
                marketplace.
              </p>
            </section>
          </SectionReveal>

          {/* Final CTA */}
          <SectionReveal delay={180}>
            <section className="mt-10 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Ready to Build Something You Actually Own?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                If you{"'"}re spending money on Checkatrade, MyBuilder or Bark and
                wondering whether there{"'"}s a better way, there is. Book a free
                discovery call and we{"'"}ll show you what a lead system built around
                your own brand could look like for your trade.
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
              title="MyBuilder vs Checkatrade, Common Questions"
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
