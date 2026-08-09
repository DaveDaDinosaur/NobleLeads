import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata } from "../../(shared)/seo-config"
import { getArticleSchema } from "../../(shared)/schema"

const canonicalPath = "/case-studies/focus-refurbishment"

export const metadata: Metadata = buildMetadata({
  title: "Focus Refurbishment Case Study",
  description:
    "How NobleLeads helped Focus Refurbishment, a commercial refurbishment company operating across the M25 and Kent, go from referral-only to a full lead and operations system.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Focus Refurbishment, From Referrals and a Broken Website to a Full Growth System",
  description:
    "How NobleLeads rebuilt Focus Refurbishment's digital presence, launched targeted ad campaigns and automated their operations, helping a 25-year-old commercial refurbishment company modernise for growth.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-04",
  dateModified: "2026-08-09",
})

const stats = [
  { value: "24", label: "Leads in the latest fortnight", sub: "14 website + 10 phone" },
  { value: "9.49%", label: "Fire door ad CTR", sub: "2–3× the search benchmark" },
  { value: "~£21", label: "Cost per website lead", sub: "About a third of the market average" },
  { value: "25+", label: "Years in business", sub: "Trading since 2000" },
]

const built = [
  {
    title: "A website that actually works",
    body: (
      <>
        We rebuilt their online presence from the ground up — a properly structured,
        fast-loading website with dedicated service pages for fire door installation,
        painting and decorating, roofing and refurbishment. The Google Business Profile
        was corrected, populated with real project photography and optimised for local
        search across their service area,{" "}
        <a
          href="https://focusrefurbishmentltd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary/80 transition-colors hover:text-secondary"
        >
          live at focusrefurbishmentltd.com
        </a>
        .
      </>
    ),
  },
  {
    title: "Targeted ads with dedicated landing pages",
    body: (
      <>
        <p>
          Rather than driving ad traffic to a generic homepage, we built dedicated
          landing pages for each service — each one written and designed to convert a
          visitor who had just searched for that specific work. The first campaign to
          launch was fire doors, targeting commercial clients across the M25 and Kent.
          Within two weeks of going live, Focus had received three serious fire door
          enquiries — a service that had previously generated zero inbound interest
          online.
        </p>
        <p className="mt-3">
          Painting and decorating and roofing campaigns followed, with the full
          refurbishment campaign in production alongside case study video content filmed
          on site.
        </p>
      </>
    ),
  },
  {
    title: "A full operations system",
    body: (
      <>
        <p>
          This is where the real transformation happened. We implemented a complete
          client management system — CRM with full pipeline visibility, tracked phone
          numbers so every call is attributed to the right campaign, and an AI-powered
          chatbot handling out-of-hours enquiries so no lead goes unresponded to
          overnight.
        </p>
        <p className="mt-3">
          Automations were built for review collection after every job, missed-call
          text-back within 60 seconds, and a fast follow-up sequence for every campaign
          form submission. Quoting, invoicing and client communications — previously
          manual and time-consuming — are now streamlined through the system. Social
          media management was also brought under the same roof.
        </p>
        <p className="mt-3">
          Craig now has a clear view of every enquiry, every quote and every active job
          in one place, accessible on his phone. The admin that previously required a
          dedicated person is now largely automated.
        </p>
      </>
    ),
  },
]

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
      {children}
    </p>
  )
}

export default function FocusRefurbishmentCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          {/* Hero */}
          <SectionReveal>
            <header>
              <SectionLabel>Case Study · Commercial Refurbishment</SectionLabel>
              <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Focus Refurbishment, From Referrals and a Broken Website to a Full
                Growth System
              </h1>
              <div
                className="mt-5 h-px w-12 bg-gradient-to-r from-secondary/70 to-transparent"
                aria-hidden
              />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Focus Refurbishment have been delivering commercial and domestic
                refurbishment work across the M25 and Kent since 2000. Twenty-five years
                of strong work, a solid reputation, and until recently, almost no digital
                presence to show for it. This is how that changed.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/50 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Noble Growth Package
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/50 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Sidcup, South East London &amp; Kent
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/50 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Commercial &amp; Domestic
                </span>
                <a
                  href="https://focusrefurbishmentltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/5 px-3 py-1 text-secondary transition-colors hover:bg-secondary/10"
                >
                  focusrefurbishmentltd.com ↗
                </a>
              </div>
            </header>
          </SectionReveal>

          <SectionReveal delay={60}>
            <figure className="mt-10 sm:mt-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/40 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.55)]">
                <Image
                  src="/images/case-studies/focus-refurbishment-website.png"
                  alt="Focus Refurbishment homepage with branded fleet and commercial contractor positioning"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 48rem"
                  className="object-cover object-[70%_center]"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-muted-foreground/70">
                The rebuilt Focus Refurbishment website
              </figcaption>
            </figure>
          </SectionReveal>

          {/* Results */}
          <SectionReveal delay={80}>
            <div className="relative mt-10 overflow-hidden rounded-2xl border border-border/40 bg-card/40 sm:mt-12">
              <div
                className="absolute top-0 left-1/2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/40 to-transparent"
                aria-hidden
              />
              <div className="grid grid-cols-2 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-3 py-6 text-center sm:px-4 sm:py-7 ${
                      i > 0 ? "border-l border-border/30" : ""
                    } ${i >= 2 ? "border-t border-border/30 sm:border-t-0" : ""}`}
                  >
                    <p className="text-2xl font-bold tabular-nums text-secondary sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium leading-snug text-foreground sm:text-xs">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Situation */}
          <SectionReveal delay={100}>
            <section className="mt-14 space-y-5 text-sm leading-relaxed text-muted-foreground sm:mt-16 sm:text-base">
              <SectionLabel>The challenge</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                The Situation
              </h2>
              <p>
                Craig, owner of Focus Refurbishment, had built a genuinely strong
                business over 25 years — quality work, repeat commercial clients and a
                reputation that spoke for itself in the right circles. But the business
                had hit a ceiling that referrals alone couldn{"'"}t break through.
              </p>
              <p>
                Work came in waves. Good months were great. Quiet months were stressful.
                There was no way to turn the tap on when the pipeline emptied, and no
                system in place to chase the next contract opportunity without doing it
                all manually.
              </p>
              <p>
                Craig had a clear ambition: consistent commercial contracts, less feast
                and famine. But the infrastructure wasn{"'"}t there. The website had
                three pages, loaded slowly and felt, in Craig{"'"}s own words, like a Word
                document. The Google Business Profile had a wrong address, almost no
                photos and no reviews. The enquiry form emailed an inbox that wasn{"'"}t
                being monitored properly.
              </p>
              <p>
                Craig had tried Facebook ads at some point, but without a proper landing
                page or follow-up system, nothing stuck. Admin was piling up. His mum,
                who had been handling a lot of the back-office work, was ready to retire,
                and Craig knew the business needed to modernise.
              </p>
              <p>That{"'"}s when he got in touch with NobleLeads.</p>
            </section>
          </SectionReveal>

          <SectionReveal delay={110}>
            <div className="mt-10 rounded-2xl border border-secondary/15 bg-secondary/[0.04] px-5 py-6 sm:px-7 sm:py-7">
              <blockquote className="border-l-4 border-l-[#C9A84C] pl-5 text-base font-medium italic leading-relaxed text-[#C9A84C]/90 sm:text-lg">
                The missed call text-back alone paid for the first month. Missed calls
                get a reply within seconds, quotes are followed up automatically and I
                can see exactly what came from which campaign — no more guessing.
              </blockquote>
              <p className="mt-4 text-xs text-muted-foreground/75">
                Craig H., Owner, Focus Refurbishment
              </p>
            </div>
          </SectionReveal>

          {/* What we found */}
          <SectionReveal delay={120}>
            <section className="mt-14 space-y-5 text-sm leading-relaxed text-muted-foreground sm:mt-16 sm:text-base">
              <SectionLabel>Discovery</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                What We Found
              </h2>
              <p>
                We visited Craig and the team in Sidcup to understand the business
                properly — the work they do, the clients they want more of, and the
                day-to-day that was taking up too much time.
              </p>
              <p>
                The picture was clear: Focus had everything a strong commercial
                contractor needs — experience, quality, range of services — but none of
                it was visible online. A potential client Googling them would find a
                slow, sparse website with a wrong address and no social proof. Compared
                to competitors with polished digital presences, the gap was significant.
              </p>
              <p>
                Beyond the front end, there was no system behind the business. Quotes
                went out and were followed up manually, or not at all. Invoicing was
                manual. Reviews weren{"'"}t being collected. There was no CRM, no
                pipeline visibility, and no way to see at a glance where the business
                stood on any given week.
              </p>
            </section>
          </SectionReveal>
        </div>

        {/* What we built — soft band for rhythm */}
        <SectionReveal delay={140}>
          <section className="mt-14 border-y border-border/30 bg-card/20 sm:mt-16">
            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 lg:px-0">
              <SectionLabel>The work</SectionLabel>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                What We Built
              </h2>

              <div className="mt-8 space-y-8">
                {built.map((item, i) => (
                  <div key={item.title} className="flex gap-4 sm:gap-5">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-secondary/35 bg-secondary/10 text-xs font-bold text-secondary">
                      {i + 1}
                    </div>
                    <div className="min-w-0 space-y-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <h3 className="text-base font-semibold text-foreground sm:text-lg">
                        {item.title}
                      </h3>
                      <div>{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* On-site video production */}
        <SectionReveal delay={160}>
          <section className="border-y border-border/40 bg-card/30">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-0">
              <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-10">
                <div>
                  <SectionLabel>On-site production</SectionLabel>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                    Scripted, filmed and edited in person
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    We met Focus on site, scripted the pieces with them, recorded on
                    real jobs and edited the final cuts ourselves. We{"'"}ve produced
                    three videos so far — including a Grade II listed walkthrough and a
                    full room refurb with mural — now running on their website and in
                    their ads.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {["Scripted", "Recorded on site", "Edited in-house", "3 videos"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/40 px-3 py-1"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <figure className="mx-auto w-full max-w-[220px] sm:mx-0 sm:max-w-[240px] sm:justify-self-end">
                  <div
                    className="relative overflow-hidden rounded-lg border border-border/50 bg-background shadow-md shadow-black/20"
                    style={{ aspectRatio: "9 / 16" }}
                  >
                    <iframe
                      src="https://player.vimeo.com/video/1198024690?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Focus Refurbishment, Grade II listed building refurbishment"
                    />
                  </div>
                  <figcaption className="mt-2 text-center text-[11px] leading-snug text-muted-foreground/70 sm:text-left">
                    Grade II listed walkthrough — one of three
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        </SectionReveal>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          {/* Outcome */}
          <SectionReveal delay={180}>
            <section className="mt-14 space-y-5 text-sm leading-relaxed text-muted-foreground sm:mt-16 sm:text-base">
              <SectionLabel>The outcome</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                Where They Are Now
              </h2>
              <p>
                The early signal — three fire door enquiries in the first fortnight —
                has turned into a proper pipeline. After we relaunched and refined the
                campaign, Focus landed a further{" "}
                <span className="font-semibold text-foreground">
                  six fire door conversions and eight more leads
                </span>{" "}
                across refurbishment, extensions, rubbish removal and bathroom remodels,
                from a business that had zero online lead generation before us.
              </p>
              <p>
                And it keeps accelerating. In the most recent fortnight the system
                produced{" "}
                <span className="font-semibold text-foreground">
                  24 leads, 14 through the website and 10 by phone
                </span>
                , with volume nearly quadrupling from the first week to the second. The
                Fire Doors campaign is running at a{" "}
                <span className="font-semibold text-foreground">
                  9.49% click-through rate
                </span>
                , two to three times the typical search benchmark, at around{" "}
                <span className="font-semibold text-foreground">£21 per website lead</span>
                , roughly a third of the fire door market average. On ad placement,
                Focus now lands at the top of the page as often as the two biggest names
                in the space.
              </p>

              <div className="grid grid-cols-3 gap-3 py-2">
                {[
                  { value: "24", label: "Leads / fortnight" },
                  { value: "9.49%", label: "Fire door CTR" },
                  { value: "~£21", label: "Per website lead" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-secondary/20 bg-secondary/[0.05] px-3 py-4 text-center"
                  >
                    <p className="text-xl font-bold text-secondary sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-muted-foreground sm:text-[11px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                The search visibility is compounding alongside the ads. The site now
                pulls over a thousand impressions for fire door installation in London
                and ranks for refurbishment, renovation and loft conversion searches
                across Sidcup and Kent — the exact work Craig wants more of. Paid brings
                the enquiries in today while the rankings build the free pipeline
                underneath.
              </p>
              <p>
                Craig is also working towards BM TRADA certification, a requirement for
                certain commercial fire door contracts, which will unlock a wider tier of
                contract opportunities the system is already being built to support. The
                move to Noble Dominate, and with it a full commercial contract
                positioning strategy, is the natural next step.
              </p>
              <p>
                The ambition Craig came to us with — consistent commercial contracts, a
                business that doesn{"'"}t rely on who happened to call this week — is
                already happening. The infrastructure is in place. Now it compounds.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="relative mt-14 overflow-hidden rounded-2xl border border-secondary/25 bg-card/40 px-6 py-10 text-center sm:mt-16 sm:px-8 sm:py-12">
              <div
                className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-secondary/45"
                aria-hidden
              />
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want a system like this for your business?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you{"'"}re starting from scratch or looking to scale what{"'"}s
                already working, we{"'"}ll build the infrastructure to grow consistently
                — leads, operations and everything in between.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
                >
                  Book a Free Discovery Call
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex min-touch items-center justify-center rounded-lg border border-border/50 bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-secondary/40"
                >
                  More case studies
                </Link>
              </div>
            </section>
          </SectionReveal>
        </div>
      </article>

      <Footer />
      <MobileCTABar />
      <JsonLd data={[articleSchema]} />
    </main>
  )
}
