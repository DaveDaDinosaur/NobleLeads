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

const canonicalPath = "/blog/how-much-does-checkatrade-cost"

export const metadata: Metadata = buildMetadata({
  title: "How Much Does Checkatrade Cost Per Month? Full 2026 Breakdown",
  description:
    "How much does Checkatrade really cost in 2026? Membership fees, per-lead costs, real-world monthly totals and whether it's actually worth the money for UK tradespeople.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "How Much Does Checkatrade Cost Per Month? Full 2026 Breakdown",
  description:
    "A full breakdown of what Checkatrade costs UK tradespeople in 2026, membership fees, per-lead charges, real-world monthly totals and how to work out whether it is worth it.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-01",
})

const faqItems: FAQItem[] = [
  {
    question: "How much does Checkatrade cost per month in 2026?",
    answer:
      "Checkatrade does not publish its prices publicly. Based on real-world reports from UK tradespeople, basic listings start from around £60 per month. Active memberships with meaningful lead volume typically cost £100–£500 per month depending on your trade and location. London and the South East consistently sit at the top of that range. On top of membership, most plans also charge per-lead fees of £5–£40 per enquiry.",
  },
  {
    question: "Is Checkatrade worth the money?",
    answer:
      "Checkatrade can be worth the money if you are in a reactive trade (plumber, electrician, boiler engineer), you track your cost per job won carefully and the numbers make sense. It is typically not worth the money if you are paying £400+ per month and cannot clearly attribute profitable jobs to the platform, or if you are competing in a heavily saturated area where your profile rarely gets seen.",
  },
  {
    question: "What are the disadvantages of Checkatrade?",
    answer:
      "The main disadvantages are: the monthly fee is a fixed overhead regardless of lead volume; prices are not transparent and often increase significantly at renewal; you are one of several tradespeople competing for the same enquiry; reviews and customer data belong to Checkatrade, not you; and stopping the membership means the leads stop immediately. You build no long-term asset through the platform.",
  },
  {
    question: "How much does it cost to advertise on Checkatrade in the UK?",
    answer:
      "Checkatrade advertising costs are quoted individually through a sales process. Membership fees range from approximately £60 to £500+ per month depending on trade, region and the level of lead volume you opt into. Additional per-lead costs of £5–£40 are charged on top of membership in most cases. Annual subscriptions are typically cheaper than paying month-to-month.",
  },
  {
    question: "Which is better, Checkatrade or TrustaTrader?",
    answer:
      "Checkatrade has significantly higher brand recognition and more homeowner traffic than TrustaTrader. TrustaTrader tends to cost more annually (£600–£1,000+) and has a smaller audience, but some tradespeople find less competition per lead. For most UK tradespeople, Checkatrade will generate more enquiries, but at a higher and less predictable cost.",
  },
  {
    question: "Can I cancel Checkatrade at any time?",
    answer:
      "Checkatrade memberships are typically sold on a 12-month contract, though promotional offers sometimes include shorter terms. Cancelling early may result in an early termination fee. Many tradespeople report difficulty cancelling and being locked into renewals they did not intend to authorise, it is worth reading the contract terms carefully before signing up.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function HowMuchDoesCheckatradeCostPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "How Much Does Checkatrade Cost?", href: canonicalPath },
            ]}
          />

          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · Platform Reviews
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                How Much Does Checkatrade Cost Per Month? Full 2026 Breakdown
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Checkatrade does not publish its pricing on its website. You go
                through a sales call, get quoted a number, and then discover there
                are additional costs on top.{" "}
                <span className="font-semibold text-foreground">
                  This article pulls together what UK tradespeople are actually
                  paying in 2026, membership fees, per-lead costs and what the
                  total really looks like month to month.
                </span>
              </p>
            </header>
          </SectionReveal>

          {/* Quick answer */}
          <SectionReveal delay={60}>
            <div className="mt-8 rounded-xl border border-border/40 bg-card/40 px-5 py-4 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/80">Quick answer</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Checkatrade costs most UK tradespeople{" "}
                <span className="font-semibold text-foreground">£100–£500+ per month</span>{" "}
                for an active membership, plus additional per-lead fees. A typical plumber or electrician
                on an average month pays around{" "}
                <span className="font-semibold text-foreground">£400 all-in</span>.
                Prices are not public and often increase significantly at renewal.
              </p>
            </div>
          </SectionReveal>

          {/* Section 1: Why no public pricing */}
          <SectionReveal delay={80}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Checkatrade Doesn{"'"}t Publish Its Prices
              </h2>
              <p>
                Checkatrade{"'"}s pricing is not listed anywhere on its public-facing
                website. To get a quote, you have to book a call with their sales
                team, who will then tailor a package based on your trade, your
                location and how aggressively you want to generate leads.
              </p>
              <p>
                This is a deliberate model. Pricing varies significantly based on
                what they think the market in your area can bear. A plumber in
                central London will be quoted a very different number than a plumber
                in rural Yorkshire. The lack of transparency also makes it harder
                to comparison-shop before you{"'"}ve already started the sales conversation.
              </p>
              <PullQuote accent="blue">
                "You can{"'"}t look up what Checkatrade costs. You have to go through
                a sales call first, which is the point. By then you{"'"}re already in
                the funnel."
              </PullQuote>
            </section>
          </SectionReveal>

          {/* Section 2: The real costs */}
          <SectionReveal delay={100}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What Checkatrade Actually Costs: The Real Numbers
              </h2>
              <p>
                Based on reports from UK tradespeople across forums, review sites and
                trade communities, here is what Checkatrade memberships typically
                cost in 2026.
              </p>

              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Membership Fees
              </h3>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Basic listing:</span>{" "}
                  from around £60 per month, gets you a profile on the platform but
                  limited lead volume and visibility
                </li>
                <li>
                  <span className="font-semibold text-foreground">Active membership:</span>{" "}
                  typically £100–£300 per month for most trades in most areas
                </li>
                <li>
                  <span className="font-semibold text-foreground">High-volume or urban areas:</span>{" "}
                  £300–£500+ per month, particularly in London, the South East and
                  large cities
                </li>
                <li>
                  <span className="font-semibold text-foreground">Annual vs monthly:</span>{" "}
                  paying annually is cheaper, the widely cited annual rate is around
                  £600 for a standard membership, versus £60–£80/month if paying monthly
                </li>
              </ul>

              <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                Per-Lead Fees
              </h3>
              <p>
                On top of membership, Checkatrade charges per-lead fees in most plans:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Small jobs</span>{" "}
                  (dripping tap, single socket): £5–£15 per lead
                </li>
                <li>
                  <span className="font-semibold text-foreground">Mid-size jobs</span>{" "}
                  (bathroom repair, boiler service): £15–£25 per lead
                </li>
                <li>
                  <span className="font-semibold text-foreground">Larger projects</span>{" "}
                  (boiler replacement, bathroom refit, rewire): £25–£40 per lead
                </li>
              </ul>
              <p>
                Leads are typically shared with{" "}
                <span className="font-semibold text-foreground">
                  three to four other tradespeople
                </span>{" "}
                at the same time. You pay the fee regardless of whether you win the
                job.
              </p>

              <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                What This Looks Like Month to Month
              </h3>
              <p>
                Taking a typical plumber or electrician as an example:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Quiet month:</span>{" "}
                  membership (~£100) + a small number of leads (~£75) ={" "}
                  <span className="font-semibold text-foreground">around £175</span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">Average month:</span>{" "}
                  membership (~£150) + active lead purchasing (~£250) ={" "}
                  <span className="font-semibold text-foreground">around £400</span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">Busy period:</span>{" "}
                  membership + higher lead volume ={" "}
                  <span className="font-semibold text-foreground">£600–£775+</span>
                </li>
              </ul>

              <StatCallout
                stat="£400/month"
                label="What a typical plumber or electrician pays on Checkatrade in an average month, before counting the time spent chasing leads that don't convert."
                accent="gold"
              />
            </section>
          </SectionReveal>

          {/* Mid CTA */}
          <div className="my-8 rounded-xl border border-secondary/30 bg-secondary/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-foreground font-medium leading-snug">
              Wondering if your Checkatrade spend is actually delivering? Let{"'"}s look at the numbers together.
            </p>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20"
            >
              Free 15-min call →
            </Link>
          </div>

          {/* Section 3: Renewal increases */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Renewal Problem: Prices That Creep Up
              </h2>
              <p>
                One of the most consistent complaints about Checkatrade is what
                happens at renewal. The rate you sign up at is frequently not the
                rate you pay in year two.
              </p>
              <p>
                Tradespeople across forums and review sites report receiving renewal
                quotes that are meaningfully higher than their original rate, sometimes 20 to 40 percent more. The contract is often auto-renewed
                unless you actively cancel, and cancelling partway through a term
                typically carries an early exit fee.
              </p>
              <p>
                This means the true long-term cost of Checkatrade is higher than the
                headline number you are quoted in the sales call. Factor in year-two
                and year-three renewals before calculating whether the investment
                makes sense for your business.
              </p>
            </section>
          </SectionReveal>

          {/* Section 4: What you get for the money */}
          <SectionReveal delay={130}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What Do You Actually Get for the Money?
              </h2>
              <p>
                Checkatrade membership is not just about leads. Your membership
                includes:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  A verified profile on the Checkatrade directory with your reviews,
                  qualifications and contact details
                </li>
                <li>
                  The{" "}
                  <span className="font-semibold text-foreground">
                    Checkatrade badge
                  </span>: the logo you can display on your van, website and marketing
                  materials. For certain trades this carries real consumer trust.
                </li>
                <li>
                  Background and insurance vetting that gives homeowners confidence
                  in your credentials
                </li>
                <li>
                  Inclusion in Checkatrade{"'"}s own marketing, they spend significantly
                  on TV advertising, which drives homeowner traffic to the platform
                </li>
              </ul>
              <p>
                These things have genuine value, particularly for newer trade
                businesses that have not yet built their own review profile or online
                presence. The question is whether they are worth{" "}
                <span className="font-semibold text-foreground">
                  £400 a month on an ongoing basis
                </span>{" "}
                when the same budget could be building something you own permanently.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Cost per customer */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Metric That Actually Matters: Cost Per Job Won
              </h2>
              <p>
                Membership fee and per-lead cost are inputs. The number that tells
                you whether Checkatrade is worth it is your{" "}
                <span className="font-semibold text-foreground">
                  cost per paying customer
                </span>
                .
              </p>
              <p>
                Here is how to calculate it:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Add your total Checkatrade spend last month (membership + leads)</li>
                <li>Count the number of jobs you won that came from Checkatrade</li>
                <li>Divide the first number by the second</li>
              </ul>
              <p>
                Based on real-world data from UK tradespeople, the typical cost per
                customer acquired through Checkatrade is{" "}
                <span className="font-semibold text-foreground">£80 to £200</span>.
                For high-value jobs (boiler replacements, bathroom fits, rewires),
                that can be an acceptable number. For smaller recurring work, it
                usually is not.
              </p>
              <PullQuote accent="purple">
                "If you can{"'"}t tell me your cost per job won from Checkatrade,
                you don{"'"}t know if it{"'"}s working. And if you don{"'"}t know if it{"'"}s
                working, you{"'"}re almost certainly overspending."
              </PullQuote>
              <p>
                Compare that number to what{" "}
                <Link
                  href="/blog/google-ads-for-tradesmen-uk"
                  className="font-semibold text-secondary hover:underline"
                >
                  Google Ads
                </Link>{" "}
                delivers for your trade in your area. Many tradespeople find they
                can acquire a paying customer for £30–£80 through well-managed Google
                Ads campaigns, half the cost, and the traffic goes to a website
                you own rather than a marketplace full of competitors.
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: Is it worth it */}
          <SectionReveal delay={150}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Is Checkatrade Worth the Money in 2026?
              </h2>
              <p>
                Checkatrade is worth the money if:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You are in an emergency or reactive trade, plumber, electrician,
                  boiler engineer, where Checkatrade{"'"}s brand recognition drives
                  urgent homeowner searches
                </li>
                <li>
                  You are new to the trade and need enquiries quickly while you build
                  your own website and Google presence
                </li>
                <li>
                  You can clearly calculate your cost per job won and it makes
                  commercial sense against your average job value
                </li>
                <li>
                  You are in a lower-competition area where fewer tradespeople are
                  listed and your profile gets genuine visibility
                </li>
              </ul>
              <p className="mt-4">
                Checkatrade is probably not worth the money if:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You are spending £300+ per month and cannot clearly attribute
                  profitable jobs to the platform
                </li>
                <li>
                  You are in a saturated urban market with many competing listings
                  in your trade category
                </li>
                <li>
                  You have been on the platform for more than a year and your
                  lead volume has not improved despite increasing spend
                </li>
                <li>
                  Your job values are relatively low and a £150 customer acquisition
                  cost does not make commercial sense
                </li>
              </ul>
            </section>
          </SectionReveal>

          {/* Section 7: What to build instead */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What the Same Budget Builds if You Own It
              </h2>
              <p>
                The question worth asking is not just "is Checkatrade worth it" but
                "what would this money do if it was building something I own?"
              </p>
              <p>
                £400 a month pointed at a{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  conversion-ready trade website
                </Link>{" "}
                and targeted Google Ads campaign means:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Homeowners who find you on Google are looking at your site only, not comparing you to four competitors simultaneously
                </li>
                <li>
                  Every review you collect goes to your Google profile, building
                  your own ranking and reputation, not Checkatrade{"'"}s
                </li>
                <li>
                  Your website, your reviews and your Google presence belong to you
                  permanently, stopping Google Ads pauses lead flow; stopping
                  Checkatrade erases your presence entirely
                </li>
                <li>
                  Over twelve to eighteen months, organic search and review velocity
                  compound, your cost per lead typically falls over time rather than
                  increasing at renewal
                </li>
              </ul>
              <p>
                We are not saying Checkatrade is always the wrong choice. We are
                saying it should never be your{" "}
                <span className="font-semibold text-foreground">
                  only choice
                </span>: and for many established UK tradespeople, the maths stops working
                long before they realise it.
              </p>
            </section>
          </SectionReveal>

          {/* Final CTA */}
          <SectionReveal delay={170}>
            <section className="mt-10 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want to Know If Your Checkatrade Spend Is Worth It?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                In 15 minutes we can look at what you{"'"}re spending, calculate your
                actual cost per job won, and show you what the same budget could
                do invested in a lead system you own. No pressure, just clarity.
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
              title="Checkatrade Cost, Common Questions"
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
