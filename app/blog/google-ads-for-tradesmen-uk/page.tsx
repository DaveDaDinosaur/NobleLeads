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

const primaryKeyword = "Google Ads for tradesmen UK"
const canonicalPath = "/blog/google-ads-for-tradesmen-uk"

export const metadata: Metadata = buildMetadata({
  title: "Google Ads for Tradesmen UK — What Works and What to Avoid",
  description:
    "A straight guide to Google Ads for UK tradesmen. What works, what wastes money, how much to spend and how to tell if your campaigns are actually generating profitable jobs.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Google Ads for Tradesmen UK — What Works and What to Avoid",
  description:
    "A practical guide to running Google Ads as a UK tradesman — covering campaign structure, budgets, common mistakes and how to measure whether it's actually working.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-04",
})

const faqItems: FAQItem[] = [
  {
    question: "How much should a tradesman spend on Google Ads in the UK?",
    answer:
      "A realistic starting budget for most trades is £300–£600 per month in ad spend. That's enough to generate meaningful data and consistent leads in most local markets. Start modest, prove the return, then scale. Spending less than £200/month in a competitive trade makes it very hard to get enough volume to optimise properly.",
  },
  {
    question: "Do Google Ads work for all trades?",
    answer:
      "Most trades see strong results — especially roofers, plumbers, electricians, driveway companies and bathroom fitters where job values are high and searches are intent-driven. Trades with very low average job values (under £100) need to run tighter campaigns to stay profitable, but it can still work with the right setup.",
  },
  {
    question: "Should I run Google Ads myself or use an agency?",
    answer:
      "You can set up a basic campaign yourself using Google's Smart campaigns, but you'll likely overspend and undertarget. A properly managed campaign — with the right keywords, negative keyword lists, ad copy tested for your trade and landing pages built to convert — consistently outperforms DIY. The question is whether the agency fee is worth it versus the extra return. For most trades, it is.",
  },
  {
    question: "How do I know if my Google Ads are actually working?",
    answer:
      "Track calls and form submissions from your ads directly — not just clicks or impressions. If you can't tell which jobs came from Google Ads, the tracking is broken. A properly set up campaign will show you cost per enquiry, conversion rate and ideally cost per booked job so you can calculate real ROI.",
  },
  {
    question: "What's the biggest mistake tradesmen make with Google Ads?",
    answer:
      "Sending ad traffic to a homepage that wasn't built to convert. You can have perfect targeting and still waste every penny if the page people land on doesn't clearly show who you are, what you do, where you work and how to get in touch. The ad gets you the click — the landing page wins the job.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function GoogleAdsForTradessmenPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · Lead Generation
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Google Ads for Tradesmen UK — What Works and What to Avoid
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Google Ads can be one of the most effective ways for a UK tradesman to
                generate consistent, high-intent enquiries. It can also be one of the
                fastest ways to burn through money if you{"'"}re not set up correctly.
                This guide cuts through the noise:{" "}
                <span className="font-semibold text-foreground">
                  what actually works for trades, what to avoid and how to tell if
                  your campaigns are making you money or just spending it.
                </span>
              </p>
            </header>
          </SectionReveal>

          <SectionReveal delay={80}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Why Google Ads Works Particularly Well for Trades
              </h2>
              <p>
                Most forms of advertising reach people who aren{"'"}t looking for you.
                Social media ads interrupt someone scrolling through their feed. Leaflets
                land on doormats whether the household needs a plumber or not.
              </p>
              <p>
                Google Ads is different.{" "}
                <span className="font-semibold text-foreground">
                  You only show up when someone is actively searching for what you do.
                </span>{" "}
                Someone typing "emergency plumber Cambridge" or "roofer near me" isn{"'"}t
                browsing — they have a real problem and they{"'"}re ready to book someone
                today.
              </p>
              <p>
                That intent is what makes Google Ads so effective for trades. The search
                is the signal. You don{"'"}t need to persuade someone they need a new
                bathroom — they{"'"}ve already decided. You just need to be the one they
                call.
              </p>
              <p>
                And because most trade searches are local — "roofer in Leeds", "window
                cleaner Birmingham", "driveway company near me" — you{"'"}re not competing
                against the whole country. You{"'"}re competing against a handful of local
                businesses in your service area. That{"'"}s a winnable fight.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={100}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Trades That Benefit Most From Google Ads
              </h2>
              <p>
                Google Ads works best when job values are high enough to justify the cost
                per click — and when customers are searching with clear intent rather
                than just browsing. In practice, the strongest fit trades are:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <Link href="/roofers" className="font-semibold text-secondary hover:underline">
                    Roofers
                  </Link>{" "}
                  — storm damage, repairs and re-roofs are high intent and high value.
                  People don{"'"}t browse for roofers. They need one urgently.
                </li>
                <li>
                  <Link href="/plumbers" className="font-semibold text-secondary hover:underline">
                    Plumbers
                  </Link>{" "}
                  — emergency call-outs, boiler installs and bathroom quotes all come
                  with strong search intent.
                </li>
                <li>
                  <Link href="/electricians" className="font-semibold text-secondary hover:underline">
                    Electricians
                  </Link>{" "}
                  — rewires, consumer units, EICRs. High value, clear search terms.
                </li>
                <li>
                  <Link href="/driveway-paving" className="font-semibold text-secondary hover:underline">
                    Driveway and paving companies
                  </Link>{" "}
                  — large ticket purchases. Someone searching "block paving driveway
                  quote" is ready to spend £5,000+.
                </li>
                <li>
                  <Link href="/bathroom-fitters" className="font-semibold text-secondary hover:underline">
                    Bathroom fitters
                  </Link>{" "}
                  and{" "}
                  <Link href="/builders" className="font-semibold text-secondary hover:underline">
                    builders
                  </Link>{" "}
                  — considered purchases with long decision cycles, but strong search
                  intent when the customer is ready.
                </li>
                <li>
                  <Link href="/window-cleaners" className="font-semibold text-secondary hover:underline">
                    Window cleaners
                  </Link>
                  ,{" "}
                  <Link href="/domestic-cleaners" className="font-semibold text-secondary hover:underline">
                    domestic cleaners
                  </Link>{" "}
                  and{" "}
                  <Link href="/carpet-cleaners" className="font-semibold text-secondary hover:underline">
                    carpet cleaners
                  </Link>{" "}
                  — lower individual job values but recurring revenue and high search
                  volume make the numbers work.
                </li>
              </ul>
              <p>
                Trades with very small average job values (under £80–100) need to be
                more careful with their cost-per-click tolerance, but the model still
                works with tight targeting.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={120}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How Google Ads Actually Works — The Basics
              </h2>
              <p>
                You don{"'"}t pay to appear — you pay when someone clicks. That{"'"}s the
                core of the pay-per-click (PPC) model. You set a budget, choose the
                keywords you want to show up for, write your ads and decide which page
                people land on when they click.
              </p>
              <p>
                Google runs an auction every time someone searches. Your ad{"'"}s position
                depends on two things: your bid (how much you{"'"}re willing to pay per
                click) and your Quality Score — which Google uses to judge how relevant
                your ad and landing page are to the search. A more relevant, better-
                built campaign can outrank a competitor who{"'"}s spending more.
              </p>
              <p>
                For most UK trades, a click costs anywhere from{" "}
                <span className="font-semibold text-foreground">£1.50 to £8+</span>{" "}
                depending on the trade and location. More competitive trades in major
                cities cost more. Specialist searches in less competitive areas cost
                less.
              </p>
              <p>
                If you convert 1 in 10 clicks into an enquiry (a reasonable benchmark
                with a good landing page) and 1 in 3 enquiries into a booked job, a
                £3 average click costs you roughly{" "}
                <span className="font-semibold text-foreground">£90 per booked job</span>.
                For any trade with job values above a few hundred pounds, that{"'"}s an
                attractive return.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={140}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The 5 Most Common Mistakes Tradesmen Make With Google Ads
              </h2>
              <p>
                Most tradesmen who try Google Ads and conclude "it doesn{"'"}t work" made
                one or more of these mistakes. They{"'"}re all avoidable.
              </p>

              <p className="font-semibold text-foreground">
                1. Sending traffic to a homepage that wasn{"'"}t built to convert
              </p>
              <p>
                This is the single biggest waste of ad spend. You pay for the click,
                the customer lands on a generic homepage with no clear call to action,
                and they leave within 10 seconds.{" "}
                <span className="font-semibold text-foreground">
                  The ad gets you the click. The landing page wins the job.
                </span>{" "}
                A proper trade landing page — with your service, location, reviews and
                a clear way to get in touch — can double or triple your conversion rate
                compared to a generic homepage.
              </p>

              <p className="font-semibold text-foreground">
                2. Targeting keywords that are too broad
              </p>
              <p>
                Bidding on "plumber" or "cleaning" puts you in front of people who
                might be searching for anything — plumbing supplies, cleaning products,
                jobs in the industry. You want searches that signal intent to hire:{" "}
                <span className="font-semibold text-foreground">
                  "plumber near me", "emergency plumber [town]", "boiler installation
                  quote"
                </span>
                . The more specific the keyword, the more likely the person clicking
                actually wants to book a job.
              </p>

              <p className="font-semibold text-foreground">
                3. Not having a negative keyword list
              </p>
              <p>
                Negative keywords tell Google what you{"'"}re <em>not</em> relevant for.
                Without them, you{"'"}ll pay for clicks from people searching "how to fix
                a roof yourself", "plumber salary", "carpet cleaning machine hire" or
                "painter decorator jobs". These clicks cost the same as genuine enquiries
                but convert at near zero.{" "}
                <span className="font-semibold text-foreground">
                  A solid negative keyword list is one of the highest-ROI things you
                  can do in any trade campaign.
                </span>
              </p>

              <p className="font-semibold text-foreground">
                4. Not tracking what actually happens after the click
              </p>
              <p>
                If you can{"'"}t tell which jobs came from Google Ads, you{"'"}re flying
                blind. You need call tracking and form submission tracking set up
                correctly so Google knows when a click results in a real enquiry —
                not just a page visit. Without this, Google{"'"}s automated bidding is
                optimising for the wrong thing and you have no idea what{"'"}s actually
                working.
              </p>

              <p className="font-semibold text-foreground">
                5. Stopping campaigns too early
              </p>
              <p>
                Google Ads campaigns take time to learn. The first 2–4 weeks are
                typically spent gathering data and adjusting. If you run a campaign for
                10 days, spend £150 and don{"'"}t get any jobs, that{"'"}s not necessarily
                because it doesn{"'"}t work — it{"'"}s because it hasn{"'"}t had time to optimise.
                Give a well-structured campaign at least 4–6 weeks before making
                significant judgements on performance.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={160}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How Much Should a Tradesman Spend on Google Ads?
              </h2>
              <p>
                There{"'"}s no single right answer, but here{"'"}s a practical framework for
                UK trades:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">
                    Under £200/month:
                  </span>{" "}
                  too low in most competitive markets to generate enough volume to
                  optimise. You might get a few clicks but not enough data to know
                  what{"'"}s working.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    £300–£600/month:
                  </span>{" "}
                  a solid starting point for most local trade campaigns. Enough volume
                  to get real data, generate consistent leads and begin optimising.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    £600–£1,500/month:
                  </span>{" "}
                  for trades with high job values (roofers, builders, driveway companies)
                  or those covering a larger service area. More budget means more
                  coverage and faster learning.
                </li>
              </ul>
              <p>
                The right budget is ultimately driven by{" "}
                <span className="font-semibold text-foreground">
                  your job value and how many jobs you want per month
                </span>
                . If a booked job is worth £3,000 to you, spending £200 to acquire it
                through ads is an easy decision. If your average job is £150, the
                same £200 might only represent one job{"'"}s worth of margin — so
                targeting needs to be tighter and conversion rates need to be higher.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={180}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Google Ads vs SEO — Do You Need Both?
              </h2>
              <p>
                Google Ads and SEO do different jobs and work best together.
              </p>
              <p>
                <span className="font-semibold text-foreground">Google Ads</span> gets
                you to the top of search results immediately — the day your campaign
                goes live, you can be the first result for "roofer in Manchester" or
                "electrician near me". You pay for every click, but you{"'"}re visible
                right away.
              </p>
              <p>
                <span className="font-semibold text-foreground">SEO</span> builds your
                organic (unpaid) rankings over time. It takes 3–6 months to see
                meaningful movement, but once you{"'"}re ranking well, the traffic is
                essentially free. A well-ranked trade website generates enquiries every
                day without paying for each click.
              </p>
              <p>
                The sensible approach is to{" "}
                <span className="font-semibold text-foreground">
                  run ads while SEO builds
                </span>
                . Ads bring in leads from day one. SEO reduces your dependence on ad
                spend over the following 6–12 months. Eventually, many trades find they
                can reduce their ad budget significantly because organic enquiries are
                doing the heavy lifting.
              </p>
              <p>
                The worst position to be in is having no ads and no SEO — which is
                where a lot of UK tradespeople are right now, relying entirely on
                referrals and{" "}
                <Link
                  href="/blog/is-checkatrade-worth-it-2025"
                  className="font-semibold text-secondary hover:underline"
                >
                  paid lead platforms like Checkatrade
                </Link>
                .
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What a Well-Run Google Ads Campaign Looks Like for a Trade Business
              </h2>
              <p>
                Here{"'"}s what good actually looks like — versus what most DIY or
                poorly-managed campaigns look like in practice.
              </p>

              <div className="rounded-xl border border-border/40 bg-card/40 p-5 sm:p-6 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary/80">
                  A well-structured trade campaign includes:
                </p>
                <ul className="ml-5 list-disc space-y-2 text-sm">
                  <li>
                    Separate ad groups for each service type (e.g. emergency repairs,
                    planned installations, commercial work) — not one campaign trying
                    to do everything.
                  </li>
                  <li>
                    Tightly matched keywords — phrase match and exact match for
                    high-intent local searches, not broad match that wastes budget on
                    irrelevant clicks.
                  </li>
                  <li>
                    A comprehensive negative keyword list blocking DIY searches, job
                    seekers, suppliers and competitors{"'"} brand terms.
                  </li>
                  <li>
                    Dedicated landing pages for each service — not a homepage — with
                    a clear headline, your service area, reviews and a visible phone
                    number and quote form.
                  </li>
                  <li>
                    Call tracking and form tracking so every enquiry is attributed to
                    the right campaign and Google can optimise for real conversions.
                  </li>
                  <li>
                    Location targeting set to your actual service area — not the default
                    region Google suggests, which is often too wide.
                  </li>
                  <li>
                    Ad scheduling turned off outside your working hours, or a missed
                    call text-back system active so leads don{"'"}t go cold overnight.
                  </li>
                </ul>
              </div>

              <p>
                Most of the trades we speak to who{"'"}ve tried Google Ads and written it
                off were missing three or four of these things. The setup matters as
                much as the budget.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={220}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How to Tell If Your Google Ads Are Actually Working
              </h2>
              <p>
                The most common trap is judging a campaign on clicks and impressions
                rather than real business outcomes. Here{"'"}s what you should actually
                be tracking:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">
                    Cost per enquiry:
                  </span>{" "}
                  how much did you spend in ads for each call or form submission? This
                  is your primary efficiency metric.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Enquiry to booked job rate:
                  </span>{" "}
                  what percentage of your enquiries become actual paid jobs? If this
                  is low, the problem might be your follow-up speed or your quoting
                  process — not the ads.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Cost per booked job:
                  </span>{" "}
                  cost per enquiry divided by your conversion rate. This is your real
                  customer acquisition cost.
                </li>
                <li>
                  <span className="font-semibold text-foreground">ROI:</span>{" "}
                  average job value divided by cost per booked job. If you{"'"}re spending
                  £150 to win a job worth £2,000, that{"'"}s a 13x return. The target is
                  a minimum of 3–5x on most trade campaigns.
                </li>
              </ul>
              <p>
                If you can{"'"}t calculate these numbers today, the tracking isn{"'"}t set up
                correctly.{" "}
                <span className="font-semibold text-foreground">
                  Running Google Ads without proper tracking is like advertising on
                  a billboard and never knowing how many customers walked through the
                  door because of it.
                </span>
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={240}>
            <section className="mt-10 border-t border-border/50 pt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Bottom Line on Google Ads for UK Tradesmen
              </h2>
              <p>
                Google Ads works for trades. The intent-based nature of search makes
                it one of the most effective channels available for generating local,
                high-quality enquiries — when it{"'"}s set up correctly.
              </p>
              <p>
                The trades that struggle with it are almost always making the same
                avoidable mistakes: too-broad keywords, no negative lists, weak landing
                pages and no proper tracking.
              </p>
              <p>
                Done right, it{"'"}s not just a source of leads — it{"'"}s the backbone of
                a lead system that works around the clock, responds faster than any
                competitor and gives you a clear view of exactly what{"'"}s working and
                what isn{"'"}t.
              </p>
              <p>
                At NobleLeads, we build{" "}
                <Link href="/services" className="font-semibold text-secondary hover:underline">
                  the full system
                </Link>{" "}
                — the campaign, the landing pages, the tracking and the automation that
                follows up every lead the moment it comes in. Across{" "}
                <Link href="/roofers" className="font-semibold text-secondary hover:underline">
                  roofers
                </Link>
                ,{" "}
                <Link href="/electricians" className="font-semibold text-secondary hover:underline">
                  electricians
                </Link>
                ,{" "}
                <Link href="/landscapers" className="font-semibold text-secondary hover:underline">
                  landscapers
                </Link>{" "}
                and every trade in between.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={260}>
            <section className="mt-10 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want Google Ads That Actually Generate Jobs?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We set up and manage Google Ads campaigns for UK trades — built around
                your specific trade, your service area and the jobs you actually want
                more of. Book a free strategy call and we{"'"}ll show you exactly what a
                campaign could look like for your business.
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

          <SectionReveal delay={280}>
            <FAQAccordionSection
              title="Google Ads for Tradesmen — Common Questions"
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
