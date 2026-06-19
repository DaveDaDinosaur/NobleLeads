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

const canonicalPath = "/blog/is-bark-worth-it-plumbers"

export const metadata: Metadata = buildMetadata({
  title: "Is Bark Worth It for Plumbers in 2026? Honest Answer",
  description:
    "Is Bark.com worth it for UK plumbers in 2026? We break down real credit costs per job type, the Gas Safe problem, emergency callouts Bark misses, and what actually works instead.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Is Bark Worth It for Plumbers in 2026? Honest Answer",
  description:
    "An honest breakdown of whether Bark.com is worth it for UK plumbers in 2026 — covering credit costs by job type, Gas Safe verification gaps, emergency search intent and better alternatives.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-19",
  dateModified: "2026-06-19",
  authorType: "Organization",
})

const faqItems: FAQItem[] = [
  {
    question: "Is Bark worth it for plumbers in 2026?",
    answer:
      "For most established UK plumbers, no. Shared leads, unverified qualifications and credit costs of £15–£35 per enquiry make the maths difficult — especially on smaller jobs. Emergency callouts, which are often a plumber's highest-margin work, bypass Bark entirely in favour of Google. It can be useful for a newly qualified plumber with no reviews, but as a long-term strategy it underperforms Google Ads and an optimised Google Business Profile.",
  },
  {
    question: "How much does Bark cost for plumbers?",
    answer:
      "Bark sells credits in bundles of roughly £2 per credit. Plumbing leads cost 8–18 credits depending on job type and estimated value — making a realistic cost per lead £16–£36. If you convert one in three or four leads (typical), your true cost per booked job is £48–£144. On a £90 dripping tap callout, the numbers don't stack up. On a boiler replacement, they're more defensible — but you're still competing with up to four other plumbers for the same enquiry.",
  },
  {
    question: "Does Bark verify Gas Safe registration?",
    answer:
      "No. Bark does not verify Gas Safe registration. Any person can list themselves on Bark and offer boiler or gas work regardless of whether they are legally registered to carry it out. In the UK, carrying out gas work without Gas Safe registration is a criminal offence — but a customer browsing Bark has no way to distinguish a registered engineer from someone who isn't. This levels the playing field in the wrong direction for legitimate plumbers.",
  },
  {
    question: "Do emergency plumbing searches go through Bark?",
    answer:
      "Rarely. When someone has a burst pipe or a boiler breakdown at 9pm, they search Google — 'emergency plumber near me' or 'burst pipe [town]'. They're not filling in a form on a lead marketplace and waiting for quotes. Emergency callouts are almost entirely captured through Google Search and Google Maps, not through Bark. This is significant because emergency work is typically your highest-margin, least price-sensitive work.",
  },
  {
    question: "What's better than Bark for plumbers?",
    answer:
      "Google Ads captures high-intent searches — 'boiler replacement [town]', 'emergency plumber near me', 'blocked drain fast fix' — from people ready to book. Leads are exclusive: your click, your landing page, no competitors sharing the same enquiry. An optimised Google Business Profile generates free local enquiries that compound over time as your review count grows. Most plumbers who switch from Bark to Google Ads see a lower cost per booked job within three to four months.",
  },
  {
    question: "Should a newly qualified plumber use Bark?",
    answer:
      "It can help in the very early stages, when you have no reviews and no Google presence. Bark can get your first 5–10 jobs quickly. The key is to use those jobs to earn Google reviews and build your GBP, then reduce Bark spend as organic enquiries grow. Treat it as a temporary bridge to get you through the first few months — not a strategy to build a business on.",
  },
]

const faqSchema = getFAQPageSchema(faqItems)

export default function IsBarkWorthItPlumbersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Is Bark Worth It for Plumbers?", href: "/blog/is-bark-worth-it-plumbers" },
            ]}
          />

          {/* Header */}
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Blog · 11 min read
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Is Bark Worth It for Plumbers in 2026? Honest Answer
              </h1>
              <p className="mt-4 text-sm text-muted-foreground">Published June 2026 · By NobleLeads</p>

              {/* Quick Answer — AI Overview extraction target */}
              <div className="quick-answer mt-6 rounded-xl border border-secondary/30 bg-secondary/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary/80">Quick Answer</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  For most UK plumbers, Bark is not worth it in 2026. Leads cost £15–£35 each and are shared with up to four other plumbers simultaneously. Gas Safe registration isn{"'"}t verified. Emergency callouts — your most profitable work — don{"'"}t come through Bark at all. Established plumbers consistently get better ROI from Google Ads and an optimised Google Business Profile.
                </p>
              </div>
            </header>
          </SectionReveal>

          {/* Intro */}
          <SectionReveal delay={60}>
            <section className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Plumbing leads on Bark follow a familiar pattern. You spot an enquiry — boiler service in your area, bathroom refit, blocked drain. You spend the credits. You send a message. You wait. Sometimes you get a reply. Often you don{"'"}t. Sometimes you find out the customer booked someone else yesterday.
              </p>
              <p>
                This isn{"'"}t a fringe experience. It{"'"}s what plumbers across UK trade forums report consistently. The question isn{"'"}t whether Bark generates enquiries — it does — but whether the economics make sense for a plumber trying to build a sustainable business in 2026.
              </p>
              <p>
                This article breaks down the real credit costs per job type, why Bark{"'"}s model is structurally misaligned with how plumbing work actually comes in, and what performs better.
              </p>
            </section>
          </SectionReveal>

          {/* Section 1: The credit model */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                How Bark Works for Plumbers — and Where the Money Goes
              </h2>
              <p>
                Bark is a lead marketplace. A homeowner fills in a form — &ldquo;I need a boiler service in Leeds&rdquo; — and Bark sells that enquiry to up to five plumbers at once. You pay credits to unlock the customer{"'"}s contact details. So do up to four other plumbers in your area. The customer then decides who to get in touch with — or contacts nobody at all.
              </p>
              <p>
                Credits cost roughly £2 each, sold in bundles. The number of credits required per plumbing lead depends on job type and estimated value:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Dripping tap / minor repair: 8–10 credits (~£16–20)",
                  "Blocked drain: 9–12 credits (~£18–24)",
                  "Boiler service: 10–13 credits (~£20–26)",
                  "Boiler replacement: 14–18 credits (~£28–36)",
                  "Bathroom installation: 12–16 credits (~£24–32)",
                  "Full central heating install: 14–18 credits (~£28–36)",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The critical point: you spend those credits before you know whether the customer will respond, whether they{"'"}re still looking, or how many other plumbers have already contacted them. There are no refunds once you{"'"}ve unlocked a lead.
              </p>
            </section>
          </SectionReveal>

          {/* Section 2: Cost per job table */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Real Cost Per Job — Why the Maths Gets Difficult Fast
              </h2>
              <p>
                The lead cost is only part of the picture. What matters is your cost per booked job — which means accounting for conversion rate. Most plumbers who{"'"}ve tracked their Bark spend convert roughly 1 in 3 to 1 in 5 leads into actual work.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-border/40 text-left">
                      <th className="pb-3 pr-4 font-semibold text-foreground">Job type</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Typical value</th>
                      <th className="pb-3 pr-4 font-semibold text-foreground">Lead cost</th>
                      <th className="pb-3 font-semibold text-foreground">Cost per job (1-in-4 rate)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20">
                    {[
                      ["Dripping tap / repair", "£75–120", "£16–20", "£64–80 — unviable"],
                      ["Blocked drain", "£90–200", "£18–24", "£72–96 — tight"],
                      ["Boiler service", "£80–150", "£20–26", "£80–104 — marginal"],
                      ["Boiler replacement", "£2,000–4,000", "£28–36", "£112–144 — viable"],
                      ["Bathroom fit", "£2,500–6,000", "£24–32", "£96–128 — viable"],
                      ["Central heating", "£4,000–8,000", "£28–36", "£112–144 — viable"],
                    ].map(([job, value, cost, real]) => (
                      <tr key={job} className="text-muted-foreground">
                        <td className="py-2.5 pr-4">{job}</td>
                        <td className="py-2.5 pr-4">{value}</td>
                        <td className="py-2.5 pr-4 text-secondary">{cost}</td>
                        <td className="py-2.5">{real}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                The pattern is clear. On high-value installation work — boiler replacements, full central heating, bathroom fits — the maths is workable. On the everyday callout and maintenance work that keeps many plumbers busy week to week, Bark is either break-even or loss-making at the lead level.
              </p>
              <p>
                And that{"'"}s before accounting for the time spent chasing leads that don{"'"}t respond, quoting jobs you don{"'"}t win, and managing the admin of a platform that sits outside your own systems.
              </p>
            </section>
          </SectionReveal>

          {/* Section 3: Gas Safe */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Bark Doesn{"'"}t Verify Gas Safe — and That{"'"}s a Serious Problem
              </h2>
              <p>
                For electricians, the equivalent is NICEIC or Part P registration. For plumbers who do gas work, it{"'"}s Gas Safe — and the stakes are higher.
              </p>
              <p>
                Under the Gas Safety (Installation and Use) Regulations 1998, carrying out gas work in the UK without being registered with Gas Safe is a criminal offence. It{"'"}s not a grey area. Yet Bark does not verify whether any person listing themselves as a plumber or heating engineer is Gas Safe registered.
              </p>
              <p>
                A homeowner searching Bark for someone to replace their boiler is presented with up to five responses. They have no way of knowing which — if any — of those five are legally registered to do the work. Price becomes the primary filter by default.
              </p>
              <p>
                You{"'"}ve paid for Gas Safe registration. You carry the right insurance. You{"'"}ve done the training. On Bark, that investment is invisible — and you{"'"}re priced against people who may not have made it. On your own Google Business Profile, your Gas Safe number is front and centre. On a well-built website, it{"'"}s in the header. That credibility signal is yours to own. Bark strips it away.
              </p>
            </section>
          </SectionReveal>

          {/* Mid-article CTA */}
          <div className="my-8 rounded-xl border border-secondary/30 bg-secondary/5 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-foreground font-medium leading-snug">
              Spending on Bark and not winning the jobs you want? We{"'"}ll give you a straight answer on what{"'"}s worth doing instead.
            </p>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20"
            >
              Free 15-min discovery call →
            </Link>
          </div>

          {/* Section 4: Emergency callouts */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Emergency Plumbing — The High-Margin Work That Bark Misses Entirely
              </h2>
              <p>
                Burst pipe at 7am. Boiler gone out on a January night. Toilet overflowing before guests arrive. These are the calls that plumbers know well — urgent, emotional, price-insensitive, and often commanding a premium rate. They{"'"}re also some of the most profitable jobs in the diary.
              </p>
              <p>
                None of this work comes through Bark. When someone has a plumbing emergency, they{"'"}re not filling in a marketplace form and waiting for five quotes. They{"'"}re searching Google:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  '"emergency plumber near me"',
                  '"burst pipe [town]"',
                  '"boiler breakdown [town]"',
                  '"plumber tonight [postcode]"',
                ].map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60" />
                    <span className="font-mono text-xs text-foreground sm:text-sm">{q}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The plumber who appears at the top of Google Maps for those searches gets the call. There{"'"}s no competition at the point of contact — it{"'"}s just you, the customer and an urgent need.
              </p>
              <p>
                Emergency callout rates are typically 30–50% higher than standard rates. There{"'"}s no negotiation. The customer isn{"'"}t comparing quotes. And this entire category of work — often several jobs a week in winter — is invisible to Bark.
              </p>
              <p>
                This is the single most compelling reason for a plumber to prioritise Google over Bark. The highest-value, lowest-friction work in your week doesn{"'"}t come through lead marketplaces.
              </p>
            </section>
          </SectionReveal>

          {/* Section 5: Seasonal demand */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Seasonal Demand — Google Captures It, Bark Lags Behind
              </h2>
              <p>
                Plumbing demand is seasonal in ways that few other trades experience as sharply. Boiler breakdowns spike in October and November as the heating goes on for the first time. Burst pipes peak in January. Outdoor tap and garden work peaks in spring. Bathroom refits cluster in the first quarter.
              </p>
              <p>
                Google captures this demand in real time. When searches for &ldquo;boiler not working&rdquo; spike on the first cold weekend of autumn, your Google Ads are live and your GBP is visible. Bark{"'"}s marketplace model is reactive — it depends on customers choosing to submit an enquiry form rather than just searching and clicking.
              </p>
              <p>
                Plumbers who run Google Ads consistently report that autumn and January — the busiest emergency periods — are their highest-performing months by cost per lead. The surge in search demand lowers your effective cost per acquisition because more people are searching and your ads are already running.
              </p>
              <p>
                With Bark, you{"'"}re dependent on what customers choose to submit. With Google, you{"'"}re capturing demand as it happens.
              </p>
            </section>
          </SectionReveal>

          {/* Section 6: What plumbers say */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What UK Plumbers Say About Bark
              </h2>
              <p>
                The feedback from plumbers across UK trade communities is broadly consistent. Bark generates enquiries — that{"'"}s not in question. The problems are lead quality, shared competition and the disconnect between credit spend and actual revenue.
              </p>
              <p>
                Common patterns from forum threads and Facebook trade groups:
              </p>
              <ul className="mt-3 space-y-3 pl-4">
                {[
                  "Leads often don't respond at all after contact details are unlocked.",
                  "Customers are frequently shopping for the cheapest quote, not the best plumber — price becomes the deciding factor on Bark in a way it doesn't when a customer finds you directly.",
                  "By the time you message a lead, two or three other plumbers have already sent quotes.",
                  "The platform attracts price-sensitive customers. The customers who value quality and reliability tend to search Google and call directly.",
                  "Experienced plumbers with strong Google reviews consistently report reducing or eliminating Bark spend once their online reputation builds.",
                ].map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p>
                The exception noted most often: newly qualified plumbers in competitive urban areas who use Bark to bootstrap their first review count, then move away from it once their Google presence is established.
              </p>
            </section>
          </SectionReveal>

          {/* Section 7: What works instead */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What Actually Works Better for Plumbers
              </h2>
              <p>
                The combination that outperforms Bark for most established plumbers is consistent: Google Ads for immediate paid enquiries, Google Business Profile for free local visibility, and a conversion-focused website that ties it together.
              </p>

              <h3 className="mt-6 text-base font-semibold text-foreground sm:text-lg">
                1. Google Ads — exclusive leads, high intent
              </h3>
              <p>
                Someone searching &ldquo;boiler replacement [town]&rdquo; or &ldquo;emergency plumber near me&rdquo; is ready to book. Your ad shows first. They click and land on your website — not a marketplace with four competitors listed alongside you. The lead is exclusive from the moment of the click.
              </p>
              <p>
                Cost per click for plumbing keywords in UK markets typically runs £8–£18. At a 30–40% conversion rate from click to enquiry (on a well-built landing page), your cost per enquiry is £20–£60. For boiler replacements and bathroom installs, that{"'"}s extremely viable. For emergency work, it{"'"}s often even better — high urgency means higher conversion rates.
              </p>

              <h3 className="mt-6 text-base font-semibold text-foreground sm:text-lg">
                2. Google Business Profile — free and compounding
              </h3>
              <p>
                The Google Maps 3-pack captures local intent searches and emergency searches that Bark will never see. A plumber appearing in the top three results for &ldquo;plumber [town]&rdquo; generates consistent free enquiries — and those enquiries increase as review count grows.
              </p>
              <p>
                Your Gas Safe number, your insurance, your photos, your 50 five-star reviews — all of it is visible before the customer even calls. You{"'"}re not competing blind on price. You{"'"}re being chosen.
              </p>

              <h3 className="mt-6 text-base font-semibold text-foreground sm:text-lg">
                3. A website built to convert
              </h3>
              <p>
                Most plumbers who rely on Bark don{"'"}t have a website that earns trust quickly. A site with clear services, Gas Safe credentials front-and-centre, real photos of your work, local area pages and a fast booking path converts Google traffic efficiently. Without it, you{"'"}re renting visibility from platforms that can change their pricing or terms at any point.
              </p>

              <div className="mt-6 rounded-xl border border-secondary/30 bg-secondary/5 p-5">
                <p className="text-sm font-semibold text-foreground">
                  See how the NobleLeads system works for plumbers →{" "}
                  <Link href="/plumbers" className="text-secondary hover:underline">
                    Lead generation for plumbers
                  </Link>
                </p>
              </div>
            </section>
          </SectionReveal>

          {/* Section 8: When Bark makes sense */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                When Bark Might Still Be Worth It for a Plumber
              </h2>
              <p>
                The honest answer: there are scenarios where Bark makes sense.
              </p>
              <ul className="mt-3 space-y-3 pl-4">
                {[
                  {
                    title: "You're newly qualified with no reviews.",
                    body: "Bark can get you your first 5–10 jobs faster than waiting for organic search to kick in. Use those jobs to earn Google reviews, then redirect spend to Google Ads.",
                  },
                  {
                    title: "You only quote large installations.",
                    body: "Some plumbers use Bark selectively — only buying bathroom fit or central heating enquiries, ignoring callouts and maintenance. On high-value jobs the credit cost is absorbable even at moderate conversion rates.",
                  },
                  {
                    title: "You're working in a rural or low-competition area.",
                    body: "Fewer plumbers competing for the same Bark leads means higher conversion rates. In areas where Google competition is also low, the urgency to move away from Bark is less acute.",
                  },
                  {
                    title: "You've just moved into a new service area.",
                    body: "If you've expanded geographically and have no local reputation yet, Bark can bridge the gap while your GBP and website build organic visibility.",
                  },
                ].map(({ title, body }) => (
                  <li key={title} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60" />
                    <span>
                      <span className="font-medium text-foreground">{title}</span>{" "}
                      {body}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                If you{"'"}re an established plumber with Gas Safe registration, a solid review count and a competitive area — Bark is almost certainly not the best use of your marketing budget. The credit spend that keeps Bark running for a month would fund several weeks of targeted Google Ads.
              </p>
            </section>
          </SectionReveal>

          {/* Section 9: Bottom line */}
          <SectionReveal delay={80}>
            <section className="mt-12 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Bottom Line for UK Plumbers
              </h2>
              <p>
                Bark works. It generates enquiries. But the economics only make sense in specific situations — large-ticket jobs, rural markets, or early-stage businesses with no alternative yet.
              </p>
              <p>
                For most UK plumbers, the credit model, shared leads, unverified Gas Safe status and complete absence of emergency callout capture make it a poor long-term strategy. You{"'"}re renting customers from a marketplace instead of building an asset that brings them directly to you.
              </p>
              <p>
                Redirecting Bark spend into Google Ads and a properly built website isn{"'"}t an overnight fix — it takes two to four months to see meaningful results. But it compounds. A Google Business Profile with 60 reviews keeps generating enquiries at zero marginal cost. A well-run Google Ads campaign gets more efficient as the data accumulates. Bark stops the moment you stop paying.
              </p>
              <p>
                Read the broader guide:{" "}
                <Link href="/blog/is-bark-worth-it-tradesmen" className="text-secondary hover:underline">
                  Is Bark worth it for tradesmen? Full breakdown
                </Link>
                {" "}or see how the electricians version compares:{" "}
                <Link href="/blog/is-bark-worth-it-electricians" className="text-secondary hover:underline">
                  Is Bark worth it for electricians?
                </Link>
              </p>
            </section>
          </SectionReveal>

          {/* FAQ */}
          <SectionReveal delay={80}>
            <section className="mt-14">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-6">
                <FAQAccordionSection items={faqItems} />
              </div>
            </section>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal delay={80}>
            <section className="mt-14 rounded-2xl border border-secondary/30 bg-secondary/5 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Stop Competing for Shared Leads
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                NobleLeads builds the full system — website, Google Ads, Google Business Profile and automated follow-up — so plumbing enquiries come directly to you. No shared leads. No credits. No competing with four others for the same job. Emergency callouts included.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <Link
                  href="/plumbers"
                  className="inline-flex items-center justify-center rounded-lg border border-secondary/40 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-secondary/70 hover:bg-secondary/10"
                >
                  How it works for plumbers →
                </Link>
              </div>
            </section>
          </SectionReveal>

        </div>
      </article>

      <Footer />
      <MobileCTABar />
    </main>
  )
}
