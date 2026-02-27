import type { Metadata } from "next"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata } from "../../(shared)/seo-config"
import { getArticleSchema, getFAQPageSchema, type FAQItem } from "../../(shared)/schema"

const primaryKeyword = "is checkatrade worth it 2025 UK"
const canonicalPath = "/blog/is-checkatrade-worth-it-2025"

export const metadata: Metadata = buildMetadata({
  title: "Is Checkatrade Worth It in 2025? Honest Answer for UK Trades",
  description:
    "Thinking about Checkatrade in 2025? We break down the real costs, where it still works, where it doesn’t, and how to build a lead system you own as a UK tradesperson.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Is Checkatrade Worth It in 2025? Honest Answer for UK Trades",
  description:
    "An honest breakdown of whether Checkatrade is still worth it for UK trades in 2025, the real costs and what you can do instead.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2025-12-01",
})

const faqItems: FAQItem[] = [
  {
    question: "Is Checkatrade good for new trades businesses in 2025?",
    answer:
      "If you are brand new with no reviews and no website, Checkatrade can be a useful short-term way to get some early enquiries while you build your own assets. The key is to treat it as a bridge, not the foundation of your marketing forever.",
  },
  {
    question: "How much should I be spending on Checkatrade before I look at other options?",
    answer:
      "If you are consistently spending a few hundred pounds a month on membership and paid leads, it is usually time to compare that with what the same budget could do if invested into your own website, Google Ads and SEO. The article shows a simple 12‑month comparison.",
  },
  {
    question: "What should I build instead of relying only on Checkatrade?",
    answer:
      "The strongest alternative is a conversion‑ready trade website, a well‑optimised Google Business Profile and tightly targeted Google Ads campaigns sending people straight to your own site. That way you own the brand, the data and the long‑term results.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function IsCheckatradeWorthIt2025Page() {
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
                Is Checkatrade Worth It in 2025? Honest Answer for UK Trades
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Checkatrade has been the default option for a lot of UK tradespeople
                for years. The logo goes on the van, the membership comes out every
                month and leads arrive in your inbox. But in 2025, with higher costs,
                more competition and better alternatives,{" "}
                <span className="font-semibold text-foreground">
                  is Checkatrade actually worth it for your trade business?
                </span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground/80">
                Primary keyword:{" "}
                <span className="font-medium text-foreground">
                  {primaryKeyword}
                </span>
              </p>
            </header>
          </SectionReveal>

          <SectionReveal delay={80}>
            <section className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What Does Checkatrade Actually Cost in 2025?
              </h2>
              <p>
                Let{"'"}s start with the simple part: how much you{"'"}re likely to pay
                in 2025 to stay on Checkatrade as a UK tradesperson.
              </p>
              <p>
                Exact prices vary by trade and region, but a typical setup looks like
                this:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">
                    Membership fee:
                  </span>{" "}
                  usually £80–£150+ per month, locked in on a contract.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Pay-per-lead costs:
                  </span>{" "}
                  you{"'"}re often paying £10–£50+ for each enquiry, whether or not it
                  turns into a job.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Time cost:
                  </span>{" "}
                  you{"'"}re competing against 10–20 other trades for the same job, so
                  you{"'"}re stuck racing to call back first and dropping your price to
                  win work.
                </li>
              </ul>
              <p>
                By the time you add membership plus a realistic number of paid leads,
                it{"'"}s common for trades to be spending{" "}
                <span className="font-semibold text-foreground">
                  £400–£1,000+ per month
                </span>{" "}
                on Checkatrade alone. For many businesses, that{"'"}s more than they
                would need to run a solid Google Ads campaign and maintain a proper
                website.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={120}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Hidden Problem With Paying Per Lead
              </h2>
              <p>
                On paper, paying per lead sounds tidy. You only pay when the phone
                should ring. In reality, you{"'"}re not paying for booked jobs—you{"'"}re
                paying for{" "}
                <span className="font-semibold text-foreground">
                  access to the same enquiry as everyone else
                </span>
                .
              </p>
              <p>That creates a few problems:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-semibold text-foreground">
                    No exclusivity:
                  </span>{" "}
                  homeowners often fire the same request to a dozen trades at once.
                  You{"'"}re one of many notifications on their phone.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Race to the bottom:
                  </span>{" "}
                  if five quotes come in within an hour, most people will skim price
                  first and assume everyone is similar. The quickest and cheapest tend
                  to win.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    You{"'"}re renting attention:
                  </span>{" "}
                  turn off the payments and the leads stop overnight. You{"'"}ve built no
                  long-term asset for your trade.
                </li>
              </ul>
              <p>
                That{"'"}s the real cost. It{"'"}s not just the direct debit coming out, it{" "}
                {"'"}s the fact that{" "}
                <span className="font-semibold text-foreground">
                  you{"'"}re building your pipeline on someone else{"'"}s platform
                </span>{" "}
                instead of on your own brand.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={140}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                When Checkatrade Still Makes Sense
              </h2>
              <p>
                There are situations where Checkatrade can still be the right move,
                especially if you{"'"}re early in your journey.
              </p>
              <p>It can make sense if:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  You{"'"}re a{" "}
                  <span className="font-semibold text-foreground">
                    brand new business with no reviews
                  </span>{" "}
                  and no website, and you need enquiries quickly while you build out
                  your own assets.
                </li>
                <li>
                  You{"'"}re in a{" "}
                  <span className="font-semibold text-foreground">
                    small or low-competition area
                  </span>{" "}
                  where fewer trades are bidding on the same jobs.
                </li>
                <li>
                  You{"'"}re disciplined about{" "}
                  <span className="font-semibold text-foreground">
                    tracking every penny
                  </span>{" "}
                  and you{"'"}re willing to switch it off the moment it stops returning a
                  profit.
                </li>
              </ul>
              <p>
                If that{"'"}s you, using Checkatrade as a{" "}
                <span className="font-semibold text-foreground">
                  short-term channel
                </span>{" "}
                while you invest in a proper website and Google presence can be fine.
                The problem is when three years go by and you{"'"}re still fully
                dependent on it.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={160}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What{"'"}s the Alternative to Checkatrade?
              </h2>
              <p>
                The opposite of renting attention on Checkatrade is{" "}
                <span className="font-semibold text-foreground">
                  owning your own lead flow
                </span>
                . That means:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  A conversion-ready{" "}
                  <Link
                    href="/website-design-for-trades"
                    className="font-semibold text-secondary hover:underline"
                  >
                    website built for trades
                  </Link>{" "}
                  that makes it easy to call, book and trust you.
                </li>
                <li>
                  A properly set up Google Business Profile and local SEO so you{"'"}re
                  visible in search when people look for your trade in your area.
                </li>
                <li>
                  Optional Google Ads campaigns sending people{" "}
                  <span className="font-semibold text-foreground">
                    straight to your own website
                  </span>{" "}
                  instead of a marketplace listing.
                </li>
              </ul>
              <p>
                Yes, there{"'"}s still a cost—but now you{"'"}re investing in assets that{" "}
                <span className="font-semibold text-foreground">
                  you control and can improve over time
                </span>
                , instead of just keeping access to someone else{"'"}s audience.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={180}>
            <section className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Maths: Checkatrade vs Owning Your Lead Flow
              </h2>
              <p>Let{"'"}s compare two simplified scenarios over 12 months.</p>
              <p className="font-semibold text-foreground">
                Scenario A: Stay fully on Checkatrade
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Membership: £120/month = £1,440/year.</li>
                <li>Leads: 20 paid leads/month at £20 each = £400/month, £4,800/year.</li>
                <li>
                  Total direct cost:{" "}
                  <span className="font-semibold text-foreground">£6,240/year</span>{" "}
                  (before any discounting on price to win work).
                </li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Scenario B: Own your system
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Noble Core website build (one-off) + low ongoing hosting/maintenance.
                </li>
                <li>
                  A realistic Google Ads budget similar to what you{"'"}re already
                  spending on leads—but now{" "}
                  <span className="font-semibold text-foreground">
                    sending traffic to your own site
                  </span>
                  .
                </li>
                <li>
                  Long term, SEO and reviews build momentum so you{"'"}re less reliant on
                  paid traffic.
                </li>
              </ul>
              <p>
                In other words, the same monthly spend that currently keeps you on
                Checkatrade could{" "}
                <span className="font-semibold text-foreground">
                  build you a lead system you own
                </span>{" "}
                instead.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="mt-10 border-t border-border/50 pt-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                So, Is Checkatrade Worth It in 2025?
              </h2>
              <p className="mt-4">
                It{"'"}s not a simple yes or no. For some new or very small businesses,
                Checkatrade can still be{" "}
                <span className="font-semibold text-foreground">
                  a useful bridge
                </span>{" "}
                while you get your first reviews and jobs through the door.
              </p>
              <p className="mt-4">
                But if you{"'"}ve been trading for a while, have good reviews and you{"'"}re
                still spending hundreds every month just to compete on the same
                listings as everyone else,{" "}
                <span className="font-semibold text-foreground">
                  it{"'"}s probably time to build something you own
                </span>
                .
              </p>
              <p className="mt-4">
                That{"'"}s exactly what we help UK trades with:{" "}
                <Link
                  href="/window-cleaners"
                  className="font-semibold text-secondary hover:underline"
                >
                  lead generation for window cleaners
                </Link>
                ,{" "}
                <Link
                  href="/roofers"
                  className="font-semibold text-secondary hover:underline"
                >
                  roofers
                </Link>{" "}
                and other property services—using conversion-focused websites, Google
                Ads and CRM automation instead of rented lead platforms.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={220}>
            <section className="mt-10 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want to Stop Paying for Every Lead?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                If you{"'"}re spending money on Checkatrade, you{"'"}re already investing in
                marketing. The question is whether that money is building{" "}
                <span className="font-semibold text-foreground">
                  your brand or someone else{"'"}s
                </span>
                .
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Book a quick, no-pressure strategy call and we{"'"}ll show you what a
                conversion-ready website and Google presence could do for your trade
                business.
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

          <SectionReveal delay={240}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Quick FAQs About Checkatrade in 2025
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
        </div>
      </article>

      <Footer />
      <MobileCTABar />

      <JsonLd data={[articleSchema, faqSchema]} />
    </main>
  )
}

