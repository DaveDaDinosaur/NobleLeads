import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { PullQuote } from "@/components/blog/pull-quote"
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
  dateModified: "2026-08-08",
})

const stats = [
  { value: "24", label: "Leads in the latest fortnight", sub: "14 website + 10 phone" },
  { value: "9.49%", label: "Fire door ad CTR", sub: "2–3× the search benchmark" },
  { value: "~£21", label: "Cost per website lead", sub: "About a third of the market average" },
  { value: "25+", label: "Years in business", sub: "Trading since 2000" },
]

export default function FocusRefurbishmentCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <article className="pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Case Study · Commercial Refurbishment
              </p>
              <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Focus Refurbishment, From Referrals and a Broken Website to a Full
                Growth System
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Focus Refurbishment have been delivering commercial and domestic
                refurbishment work across the M25 and Kent since 2000. Twenty-five
                years of strong work, a solid reputation, and until recently, almost
                no digital presence to show for it. This is how that changed.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/40 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Noble Growth Package
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/40 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Sidcup, South East London &amp; Kent
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/40 px-3 py-1">
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
            <figure className="mt-8 sm:mt-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/30">
                <Image
                  src="/images/case-studies/focus-refurbishment-website.png"
                  alt="Focus Refurbishment homepage with branded fleet and commercial contractor positioning"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 48rem"
                  className="object-cover object-[70%_center]"
                />
              </div>
              <figcaption className="mt-2.5 text-center text-xs text-muted-foreground/70">
                The rebuilt Focus Refurbishment website
              </figcaption>
            </figure>
          </SectionReveal>

          {/* Results — one quiet strip, not four separate cards */}
          <SectionReveal delay={80}>
            <div className="mt-10 grid grid-cols-2 border-y border-border/40 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-3 py-5 text-center sm:px-4 sm:py-6 ${
                    i > 0 ? "border-l border-border/30" : ""
                  } ${i >= 2 ? "border-t border-border/30 sm:border-t-0" : ""}`}
                >
                  <p className="text-xl font-bold tabular-nums text-secondary sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-foreground sm:text-xs">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Situation
              </h2>
              <p>
                Craig, owner of Focus Refurbishment, had built a genuinely strong
                business over 25 years — quality work, repeat commercial clients and a
                reputation that spoke for itself in the right circles. But the business
                had hit a ceiling that referrals alone couldn{"'"}t break through.
              </p>
              <p>
                Work came in waves. Good months were great. Quiet months were
                stressful. There was no way to turn the tap on when the pipeline
                emptied, and no system in place to chase the next contract opportunity
                without doing it all manually.
              </p>
              <p>
                Craig had a clear ambition: consistent commercial contracts, less feast
                and famine. But the infrastructure wasn{"'"}t there. The website had
                three pages, loaded slowly and felt, in Craig{"'"}s own words, like a
                Word document. The Google Business Profile had a wrong address, almost
                no photos and no reviews. The enquiry form emailed an inbox that
                wasn{"'"}t being monitored properly.
              </p>
              <p>
                Craig had tried Facebook ads at some point, but without a proper
                landing page or follow-up system, nothing stuck. Admin was piling up.
                His mum, who had been handling a lot of the back-office work, was ready
                to retire, and Craig knew the business needed to modernise.
              </p>
              <p>That{"'"}s when he got in touch with NobleLeads.</p>
            </section>
          </SectionReveal>

          <SectionReveal delay={110}>
            <PullQuote>
              The missed call text-back alone paid for the first month. Missed calls
              get a reply within seconds, quotes are followed up automatically and I
              can see exactly what came from which campaign — no more guessing.
            </PullQuote>
            <p className="-mt-4 text-xs text-muted-foreground/75">
              Craig H., Owner, Focus Refurbishment
            </p>
          </SectionReveal>

          <SectionReveal delay={120}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
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

          <SectionReveal delay={140}>
            <section className="mt-12 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What We Built
              </h2>

              <div className="mt-6 space-y-8">
                <div className="space-y-3 border-l border-secondary/25 pl-5">
                  <h3 className="text-base font-semibold text-foreground">
                    A website that actually works
                  </h3>
                  <p>
                    We rebuilt their online presence from the ground up — a properly
                    structured, fast-loading website with dedicated service pages for
                    fire door installation, painting and decorating, roofing and
                    refurbishment. The Google Business Profile was corrected, populated
                    with real project photography and optimised for local search across
                    their service area,{" "}
                    <a
                      href="https://focusrefurbishmentltd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/80 transition-colors hover:text-secondary"
                    >
                      live at focusrefurbishmentltd.com
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-3 border-l border-secondary/25 pl-5">
                  <h3 className="text-base font-semibold text-foreground">
                    Targeted ads with dedicated landing pages
                  </h3>
                  <p>
                    Rather than driving ad traffic to a generic homepage, we built
                    dedicated landing pages for each service — each one written and
                    designed to convert a visitor who had just searched for that
                    specific work. The first campaign to launch was fire doors,
                    targeting commercial clients across the M25 and Kent. Within two
                    weeks of going live, Focus had received three serious fire door
                    enquiries — a service that had previously generated zero inbound
                    interest online.
                  </p>
                  <p>
                    Painting and decorating and roofing campaigns followed, with the
                    full refurbishment campaign in production alongside case study video
                    content filmed on site.
                  </p>
                </div>

                <div className="space-y-3 border-l border-secondary/25 pl-5">
                  <h3 className="text-base font-semibold text-foreground">
                    A full operations system
                  </h3>
                  <p>
                    This is where the real transformation happened. We implemented a
                    complete client management system — CRM with full pipeline
                    visibility, tracked phone numbers so every call is attributed to the
                    right campaign, and an AI-powered chatbot handling out-of-hours
                    enquiries so no lead goes unresponded to overnight.
                  </p>
                  <p>
                    Automations were built for review collection after every job,
                    missed-call text-back within 60 seconds, and a fast follow-up
                    sequence for every campaign form submission. Quoting, invoicing and
                    client communications — previously manual and time-consuming — are
                    now streamlined through the system. Social media management was also
                    brought under the same roof.
                  </p>
                  <p>
                    Craig now has a clear view of every enquiry, every quote and every
                    active job in one place, accessible on his phone. The admin that
                    previously required a dedicated person is now largely automated.
                  </p>
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={160}>
            <section className="mt-12 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-10">
                <div className="grid grid-cols-2 gap-3 order-2 sm:order-1">
                  <figure>
                    <div
                      className="relative overflow-hidden rounded-xl border border-border/40"
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
                    <figcaption className="mt-2 text-center text-[11px] leading-snug text-muted-foreground/70">
                      Grade II listed walkthrough
                    </figcaption>
                  </figure>
                  <figure>
                    <div
                      className="relative overflow-hidden rounded-xl border border-border/40"
                      style={{ aspectRatio: "9 / 16" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/1198381228?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Focus Refurbishment, A Full Room Refurb with Mural"
                      />
                    </div>
                    <figcaption className="mt-2 text-center text-[11px] leading-snug text-muted-foreground/70">
                      Full room refurb with mural
                    </figcaption>
                  </figure>
                </div>
                <div className="space-y-4 order-1 sm:order-2">
                  <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                    On-Site Video Content
                  </h2>
                  <p>
                    We filmed on site with Focus to capture the standard of their work
                    on camera — content no competitor can replicate: real projects,
                    real team, real results. One is a Grade II listed building
                    walkthrough; the other a full room refurb with mural. Both run on
                    their website and inside their ad campaigns, giving prospective
                    clients proof before they ever pick up the phone.
                  </p>
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={180}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Where They Are Now
              </h2>
              <p>
                The early signal — three fire door enquiries in the first fortnight —
                has turned into a proper pipeline. After we relaunched and refined the
                campaign, Focus landed a further{" "}
                <span className="font-semibold text-foreground">
                  six fire door conversions and eight more leads
                </span>{" "}
                across refurbishment, extensions, rubbish removal and bathroom
                remodels, from a business that had zero online lead generation before
                us.
              </p>
              <p>
                And it keeps accelerating. In the most recent fortnight the system
                produced{" "}
                <span className="font-semibold text-foreground">
                  24 leads, 14 through the website and 10 by phone
                </span>
                , with volume nearly quadrupling from the first week to the second.
                The Fire Doors campaign is running at a{" "}
                <span className="font-semibold text-foreground">
                  9.49% click-through rate
                </span>
                , two to three times the typical search benchmark, at around{" "}
                <span className="font-semibold text-foreground">
                  £21 per website lead
                </span>
                , roughly a third of the fire door market average. On ad placement,
                Focus now lands at the top of the page as often as the two biggest
                names in the space.
              </p>
              <p>
                The search visibility is compounding alongside the ads. The site now
                pulls over a thousand impressions for fire door installation in London
                and ranks for refurbishment, renovation and loft conversion searches
                across Sidcup and Kent — the exact work Craig wants more of. Paid
                brings the enquiries in today while the rankings build the free
                pipeline underneath.
              </p>
              <p>
                Craig is also working towards BM TRADA certification, a requirement for
                certain commercial fire door contracts, which will unlock a wider tier
                of contract opportunities the system is already being built to support.
                The move to Noble Dominate, and with it a full commercial contract
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
            <section className="mt-14 border-t border-border/40 pt-10 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want a system like this for your business?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you{"'"}re starting from scratch or looking to scale what{"'"}s
                already working, we{"'"}ll build the infrastructure to grow
                consistently — leads, operations and everything in between.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex min-touch items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
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
