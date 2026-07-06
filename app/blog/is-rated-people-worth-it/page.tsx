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

const canonicalPath = "/blog/is-rated-people-worth-it"

export const metadata: Metadata = buildMetadata({
  title: "Is Rated People Worth It for Tradespeople? Honest 2026 Review",
  description:
    "Is Rated People worth it for UK tradespeople in 2026? Real costs, how the platform works, what tradespeople actually say, and whether there are better alternatives.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Is Rated People Worth It for Tradespeople? Honest 2026 Review",
  description:
    "An honest review of Rated People for UK tradespeople in 2026, covering subscription costs, per-lead pricing, lead quality, platform changes and whether there are better alternatives.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-01",
})

const faqItems: FAQItem[] = [
  {
    question: "Is Rated People any good for tradespeople?",
    answer:
      "Rated People can generate work for established tradespeople with strong profiles, particularly in popular trades like plumbing, electrical work and building. The platform has around 700,000 monthly visitors and a maximum of three tradespeople per job, which limits competition more than some alternatives. However, tradespeople report inconsistent lead quality, difficulty cancelling contracts, and price increases at renewal. Most negative reviews on Trustpilot and trade forums come from tradespeople rather than homeowners.",
  },
  {
    question: "Which is better, Checkatrade or Rated People?",
    answer:
      "Checkatrade has stronger brand recognition and more homeowner traffic than Rated People, but costs more and does not cap the number of tradespeople competing for an enquiry as strictly. Rated People limits job responses to three tradespeople, which improves your odds. For most UK trades, Checkatrade will generate more enquiries in absolute terms; Rated People may generate better conversion rates per lead due to lower competition. Neither is a substitute for owning your own website and Google presence.",
  },
  {
    question: "How much does Rated People charge?",
    answer:
      "Rated People charges a subscription fee of approximately £35 + VAT per month, paid annually (so committed upfront for 12 months). On top of this, you spend credits to contact customers, with leads typically costing around £15 + VAT per contact. The platform has raised prices significantly, reports indicate the subscription roughly doubled in 2025. Total monthly costs for an active member typically range from £50 to £150+ depending on how many leads you pursue.",
  },
  {
    question: "Does Checkatrade actually work?",
    answer:
      "Yes, Checkatrade generates real enquiries for many UK tradespeople, particularly in emergency trades like plumbing and electrical work where brand recognition matters. Whether it works for your specific business depends on your trade, your area, the competition in your category and whether you track your cost per job won carefully. The platform works best as a supplement to your own website and Google Business Profile, not as your only source of leads.",
  },
  {
    question: "Can I cancel Rated People easily?",
    answer:
      "Rated People operates on a 12-month contract and cancelling early may result in a fee. Multiple tradespeople report difficulty cancelling and customer service being hard to reach. It is worth reading the terms carefully before signing up and ensuring you know exactly what the cancellation process involves before committing to an annual subscription.",
  },
  {
    question: "What is Rated People and how does it work?",
    answer:
      "Rated People is a UK lead generation platform for tradespeople. Homeowners post a job they need done and the platform matches them with tradespeople in their area. Unlike some competitors, Rated People limits responses to three tradespeople per job. You pay a monthly subscription plus credits to contact customers. Tradespeople must pass a vetting process including Equifax checks, Action Fraud UK screening and TrustMark verification before they can access leads.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function IsRatedPeopleWorthItPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Is Rated People Worth It?", href: canonicalPath },
            ]}
          />

          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · Platform Reviews
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Is Rated People Worth It for Tradespeople in 2026?
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Rated People sits in a slightly different position to Bark and
                Checkatrade, less well known to homeowners but with some structural
                advantages that make it worth understanding properly.{" "}
                <span className="font-semibold text-foreground">
                  Here{"'"}s an honest look at what it costs, how it compares, and
                  whether UK tradespeople are actually getting value from it in 2026.
                </span>
              </p>
            </header>
          </SectionReveal>

          {/* Quick answer */}
          <SectionReveal delay={60}>
            <div className="mt-8 rounded-xl border border-border/40 bg-card/40 px-5 py-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/80">Quick answer</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rated People can work for established tradespeople who are selective about the leads they contact. The three-competitor cap per job is a genuine advantage. But the{" "}
                <span className="font-semibold text-foreground">12-month contract</span>,{" "}
                <span className="font-semibold text-foreground">prices that have increased significantly</span>{" "}
                and a customer service track record that draws consistent complaints make it a higher-risk commitment than most tradespeople realise going in.
              </p>
            </div>
          </SectionReveal>

          {/* Section 1: How it works */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How Rated People Works
              </h2>
              <p>
                Rated People operates on a hybrid subscription and pay-per-lead
                model. Homeowners post a job on the platform and are matched with
                tradespeople in their area. Unlike Bark, where an unlimited number
                of tradespeople can potentially contact a customer, Rated People
                caps responses at{" "}
                <span className="font-semibold text-foreground">
                  three tradespeople per job
                </span>
                . That is a meaningful structural difference.
              </p>
              <p>
                To access leads, you pay a monthly subscription and a credit
                allowance that lets you contact a set number of customers. If you
                want to contact more than your allowance covers, you buy additional
                credits. The homeowner must then accept your quote before any work
                is agreed.
              </p>
              <p>
                Vetting is more thorough than most platforms. Rated People requires
                Equifax identity checks, Action Fraud UK screening and TrustMark
                verification. This gives homeowners more confidence and filters out
                some of the unverified profiles that cause problems on Bark and
                MyBuilder.
              </p>
              <p>
                The platform has around{" "}
                <span className="font-semibold text-foreground">
                  700,000 homeowner visitors per month
                </span>: smaller than Checkatrade{"'"}s audience but enough to generate
                meaningful lead volume in most trade categories across most parts of
                the UK.
              </p>
            </section>
          </SectionReveal>

          {/* Section 2: Cost */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How Much Does Rated People Cost in 2026?
              </h2>
              <p>
                Rated People{"'"}s pricing structure involves two layers of cost:
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Subscription Fee
              </h3>
              <p>
                The subscription is charged annually at approximately{" "}
                <span className="font-semibold text-foreground">£35 + VAT per month</span>{" "}
                (paid as an upfront annual lump sum). This locks you into a 12-month
                contract from the outset.
              </p>
              <p>
                It is worth noting that Rated People significantly raised its
                subscription prices, reports from UK tradespeople indicate the cost
                roughly doubled in 2025. If you joined on an older rate, your renewal
                may be considerably higher than you expect.
              </p>

              <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                Credit Costs (Per-Lead Fees)
              </h3>
              <p>
                Your subscription includes a credit allowance, but most active
                tradespeople will exhaust this and purchase additional credits. A
                typical lead costs around{" "}
                <span className="font-semibold text-foreground">£15 + VAT</span>{" "}
                to contact, though this varies by trade, job size and location.
              </p>
              <p>
                Total monthly spend for an active Rated People member typically
                ranges from:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Light usage:</span>{" "}
                  ~£50–£70/month (subscription + minimal additional credits)
                </li>
                <li>
                  <span className="font-semibold text-foreground">Active usage:</span>{" "}
                  ~£100–£150/month (subscription + consistent lead purchasing)
                </li>
                <li>
                  <span className="font-semibold text-foreground">High volume:</span>{" "}
                  £150–£250+/month for tradespeople chasing significant lead flow
                </li>
              </ul>

              <StatCallout
                stat="~£15/lead"
                label="Typical Rated People credit cost per customer contact, before you know if they'll respond. Maximum three tradespeople compete per job, which is better odds than most platforms."
                accent="blue"
              />
            </section>
          </SectionReveal>

          {/* Mid CTA */}
          <div className="my-8 rounded-xl border border-secondary/30 bg-secondary/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-foreground font-medium leading-snug">
              Paying for Rated People and not sure if it{"'"}s delivering? Let{"'"}s look at your numbers.
            </p>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20"
            >
              Free 15-min call →
            </Link>
          </div>

          {/* Section 3: What tradespeople say */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What UK Tradespeople Actually Say About Rated People
              </h2>
              <p>
                Rated People has a 4-star rating on Trustpilot with over 19,000
                reviews, but there is an important nuance. The majority of positive
                reviews come from homeowners, not tradespeople. When you filter
                for tradesperson feedback, the picture is noticeably different.
              </p>
              <p>
                The most common complaints from tradespeople:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">No refund on non-responsive leads</span>: you pay to contact a customer who never replies and the credits
                  are gone. This policy has not changed despite repeated complaints.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Difficult to cancel
                  </span>: multiple reports of accounts being difficult to close and
                  renewals going through without clear warning.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Customer service is hard to reach
                  </span>: contact details are not prominently listed and response times
                  draw consistent criticism in negative reviews.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Price increases at renewal
                  </span>: the cost roughly doubled in 2025 and existing members were
                  caught off guard by the scale of the increase.
                </li>
              </ul>
              <PullQuote accent="gold">
                "The leads can be good. The problem is what happens when things go
                wrong, getting a refund, changing your plan, or cancelling. That
                is where Rated People consistently lets tradespeople down."
              </PullQuote>
            </section>
          </SectionReveal>

          {/* Section 4: Where it does work */}
          <SectionReveal delay={130}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Where Rated People Does Work
              </h2>
              <p>
                It would be unfair not to acknowledge where the platform genuinely
                delivers. Rated People works well when:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You are in a popular trade category, plumbing, electrical, building,
                  decorating, landscaping, where the platform{"'"}s 700,000 monthly
                  visitors generate consistent job postings
                </li>
                <li>
                  You have a strong completed profile with genuine reviews and
                  qualifications displayed, the three-competitor cap means your
                  profile actually gets read before a homeowner decides who to call
                </li>
                <li>
                  You are selective about which leads you contact, only pursuing
                  jobs that genuinely suit your trade, location and pricing means
                  your credits go further and your conversion rate improves
                </li>
                <li>
                  You use it as one channel alongside your own website and Google
                  Business Profile rather than your sole source of work
                </li>
              </ul>
              <p>
                For{" "}
                <Link href="/plumbers" className="font-semibold text-secondary hover:underline">
                  plumbers
                </Link>
                ,{" "}
                <Link href="/builders" className="font-semibold text-secondary hover:underline">
                  builders
                </Link>{" "}
                and{" "}
                <Link href="/landscapers" className="font-semibold text-secondary hover:underline">
                  landscapers
                </Link>{" "}
                with good profiles, Rated People can be a worthwhile supplement, particularly in areas where Checkatrade is heavily saturated.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: vs Checkatrade */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Rated People vs Checkatrade: Which Is Better?
              </h2>
              <p>
                The honest comparison:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Audience size:</span>{" "}
                  Checkatrade wins, significantly more homeowner traffic
                </li>
                <li>
                  <span className="font-semibold text-foreground">Competition per lead:</span>{" "}
                  Rated People wins, three competitors maximum versus no cap on
                  Checkatrade
                </li>
                <li>
                  <span className="font-semibold text-foreground">Brand recognition:</span>{" "}
                  Checkatrade wins, homeowners know and trust the name more
                </li>
                <li>
                  <span className="font-semibold text-foreground">Monthly cost:</span>{" "}
                  Rated People wins, typically lower all-in cost for active members
                </li>
                <li>
                  <span className="font-semibold text-foreground">Contract flexibility:</span>{" "}
                  broadly similar, both use 12-month commitments
                </li>
                <li>
                  <span className="font-semibold text-foreground">Customer service:</span>{" "}
                  Checkatrade wins, Rated People{"'"}s support track record is weaker
                </li>
              </ul>
              <p>
                For most UK tradespeople, Checkatrade{"'"}s larger audience outweighs
                Rated People{"'"}s lower competition per lead. But in areas where
                Checkatrade is saturated with listed competitors, Rated People{"'"}s
                three-competitor cap can deliver a better win rate even on lower
                overall volume.
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: The bigger picture */}
          <SectionReveal delay={150}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Bigger Picture: What None of These Platforms Build
              </h2>
              <p>
                Rated People, like every other lead platform, has the same
                fundamental limitation: you are renting access to their audience.
                The reviews you build on Rated People belong to Rated People. Your
                profile lives on their platform. Stop paying and you lose everything
                you{"'"}ve built there overnight.
              </p>
              <p>
                The most successful UK tradespeople use platforms like these as a
                short-term supplement, not a long-term strategy. The goal is to use
                the leads to build a customer base and a review profile, then make
                sure those reviews are on Google where they compound over time and
                help homeowners find you directly, without going through a platform
                at all.
              </p>
              <PullQuote accent="purple">
                "Every job you get through Rated People should be helping you build
                your Google reviews and your own reputation. If it{"'"}s only helping
                you build theirs, something{"'"}s wrong."
              </PullQuote>
              <p>
                We help UK trade businesses build{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  lead systems they own
                </Link>: websites that convert, Google profiles that rank, and review
                systems that run automatically after every job. The result is a
                pipeline that does not depend on renewing a subscription or hoping
                a platform{"'"}s algorithm favours your listing this month.
              </p>
            </section>
          </SectionReveal>

          {/* Section 7: Verdict */}
          <SectionReveal delay={160}>
            <section className="mt-10 border-t border-border/50 pt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                So, Is Rated People Worth It in 2026?
              </h2>
              <p>
                For an established tradesperson with a strong profile, a popular
                trade category and a disciplined approach to filtering leads, {" "}
                <span className="font-semibold text-foreground">
                  yes, it can be worth it
                </span>
                , particularly as a lower-cost alternative to Checkatrade in
                competitive areas.
              </p>
              <p>
                But go in with clear expectations. Track your cost per job won from
                day one. Read the cancellation terms before you sign. And treat it
                as a tap to supplement your pipeline while you build the assets you
                actually own, not as the foundation of your marketing.
              </p>
              <p>
                If you cannot say after six months whether Rated People is generating
                profitable work, it probably is not. And at that point, the same
                annual subscription investment would go further building a website
                and Google presence that compounds over time.
              </p>
            </section>
          </SectionReveal>

          {/* Final CTA */}
          <SectionReveal delay={170}>
            <section className="mt-10 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want Leads That Don{"'"}t Depend on a Monthly Subscription?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Book a free discovery call. We{"'"}ll look at where your current
                enquiries are coming from, what they{"'"}re costing you, and what a
                lead system you own could look like for your trade and your area.
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
              title="Rated People, Common Questions"
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
