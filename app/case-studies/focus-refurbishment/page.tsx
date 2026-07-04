import type { Metadata } from "next"
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
    "How NobleLeads helped Focus Refurbishment — a commercial refurbishment company operating across the M25 and Kent — go from referral-only to a full lead and operations system.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Focus Refurbishment — From Referrals and a Broken Website to a Full Growth System",
  description:
    "How NobleLeads rebuilt Focus Refurbishment's digital presence, launched targeted ad campaigns and automated their operations — helping a 25-year-old commercial refurbishment company modernise for growth.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-04",
})

const stats = [
  { value: "3", label: "Serious fire door enquiries", sub: "Within 2 weeks of launch" },
  { value: "25+", label: "Years in business", sub: "Trading since 2000" },
  { value: "4", label: "Ad campaigns live", sub: "Fire doors, painting, roofing & refurb" },
  { value: "0→∞", label: "Lead system", sub: "Built from scratch" },
]

export default function FocusRefurbishmentCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Case Study · Commercial Refurbishment
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Focus Refurbishment — From Referrals and a Broken Website to a Full Growth System
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Focus Refurbishment have been delivering commercial and domestic
                refurbishment work across the M25 and Kent since 2000. Twenty-five
                years of strong work, a solid reputation — and until recently, almost
                no digital presence to show for it. This is how that changed.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
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
            <div className="relative mt-8 overflow-hidden rounded-xl border border-border/30 sm:mt-10">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/case-studies/focus-refurbishment-website.png"
                  alt="Focus Refurbishment homepage with branded fleet and commercial contractor positioning"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 48rem"
                  className="object-cover object-[70%_center]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
                  aria-hidden
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <article className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          {/* Stats bar */}
          <SectionReveal delay={80}>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/40 bg-card/60 p-4 text-center backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-secondary sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold text-foreground leading-snug">{stat.label}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">{stat.sub}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* The situation */}
          <SectionReveal delay={100}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Situation
              </h2>
              <p>
                Craig, owner of Focus Refurbishment, had built a genuinely strong
                business over 25 years — quality work, repeat commercial clients and
                a reputation that spoke for itself in the right circles. But the
                business had hit a ceiling that referrals alone couldn{"'"}t break through.
              </p>
              <p>
                Work came in waves. Good months were great. Quiet months were stressful.
                There was no way to turn the tap on when the pipeline emptied, and no
                system in place to chase the next contract opportunity without doing it
                all manually.
              </p>
              <p>
                Craig had a clear ambition — consistent commercial contracts, less
                feast and famine — but the infrastructure wasn{"'"}t there to support it.
                The website had three pages, loaded slowly and felt, in Craig{"'"}s own
                words, like a word document. The Google Business Profile had a wrong
                address listed, almost no photos and no reviews. The lead enquiry form
                on the site? It sent an email to an inbox that wasn{"'"}t being monitored
                properly.
              </p>
              <p>
                Craig had tried Facebook ads at some point, but without a proper
                landing page or follow-up system behind them, nothing stuck. Admin was
                piling up. His mum — who had been handling a lot of the back-office
                work — was ready to retire, and Craig knew the business needed to
                modernise.
              </p>
              <p>
                That{"'"}s when he got in touch with NobleLeads.
              </p>
            </section>
          </SectionReveal>

          {/* What we found */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What We Found
              </h2>
              <p>
                We visited Craig and the team in Sidcup to understand the business
                properly — the work they do, the clients they want more of and the
                day-to-day that was taking up too much time.
              </p>
              <p>
                The picture was clear: Focus Refurbishment had everything a strong
                commercial contractor needs — experience, quality, range of services —
                but none of it was visible online. A potential client Googling them
                would find a slow, sparse website with a wrong address and no social
                proof. Compared to competitors with polished digital presences, the
                gap was significant.
              </p>
              <p>
                Beyond the front end, there was no system behind the business. Quotes
                went out and were followed up manually — or not at all. Invoicing was
                a manual process. Reviews weren{"'"}t being collected. There was no CRM,
                no pipeline visibility and no way to see at a glance where the
                business stood on any given week.
              </p>
            </section>
          </SectionReveal>

          {/* What we built */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What We Built
              </h2>

              <p className="font-semibold text-foreground">A Website That Actually Works</p>
              <p>
                We rebuilt their online presence from the ground up — a properly
                structured, fast-loading website with dedicated service pages for
                fire door installation, painting and decorating, roofing and
                refurbishment. The Google Business Profile was corrected, populated
                with real project photography and optimised for local search across
                their service area —{" "}
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

              <p className="font-semibold text-foreground">Targeted Ad Campaigns With Dedicated Landing Pages</p>
              <p>
                Rather than driving ad traffic to a generic homepage, we built
                dedicated landing pages for each service — each one written and
                designed to convert a visitor who had just searched for that specific
                work. The first campaign to launch was fire doors, targeting commercial
                clients across the M25 and Kent. Within two weeks of going live,
                Focus had received three serious fire door enquiries — a service that
                had previously generated zero inbound interest online.
              </p>
              <p>
                Painting and decorating and roofing campaigns followed, with the
                full refurbishment campaign in production alongside case study video
                content filmed on site.
              </p>

              <p className="font-semibold text-foreground">A Full Operations System</p>
              <p>
                This is where the real transformation happened. We implemented a
                complete client management system — CRM with full pipeline visibility,
                tracked phone numbers so every call is attributed to the right campaign,
                and an AI-powered chatbot handling out-of-hours enquiries so no lead
                goes unresponded to overnight.
              </p>
              <p>
                Automations were built for review collection after every job, missed
                call text-back within 60 seconds and a fast follow-up sequence for
                every campaign form submission. Quoting, invoicing and client
                communications — previously manual and time-consuming — are now
                streamlined through the system. Social media management was also
                brought under the same roof.
              </p>
              <p>
                Craig now has a clear view of every enquiry, every quote and every
                active job in one place, accessible on his phone. The admin that
                previously required a dedicated person is now largely automated.
              </p>
            </section>
          </SectionReveal>

          {/* Video content */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                On-Site Video Content
              </h2>
              <p>
                During our visit to Sidcup, we filmed a walkthrough of a completed
                refurbishment project — giving potential clients a genuine look at
                the standard of work Focus delivers. That content is live on their
                website and will be used as part of their ongoing ad campaigns.
              </p>
              <p>
                A full case study video is also in production, which will give Focus
                Refurbishment a piece of content that no competitor can replicate —
                real work, real team, real results, told on camera.
              </p>
            </section>
          </SectionReveal>

          {/* Where they are now */}
          <SectionReveal delay={180}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Where They Are Now
              </h2>
              <p>
                Focus Refurbishment are on the Noble Growth package and the campaigns
                are in their optimisation phase — building data, refining targeting
                and gathering the early enquiries that show the system is working.
                Three qualified fire door enquiries in the first fortnight of a brand
                new campaign, with zero previous online lead generation, is a strong
                signal.
              </p>
              <p>
                Craig is also working towards BM TRADA certification — a requirement
                for certain commercial fire door contracts — which will unlock a wider
                tier of contract opportunities the system is already being built to
                support. The move to Noble Dominate, and with it a full commercial
                contract positioning strategy, is the natural next step.
              </p>
              <p>
                The ambition Craig came to us with — consistent commercial contracts,
                a business that doesn{"'"}t rely on who happened to call this week — is
                well within reach. The infrastructure is in place. Now it compounds.
              </p>
            </section>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal delay={200}>
            <section className="mt-12 rounded-2xl border border-secondary/30 bg-card/30 p-6 sm:p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want a System Like This for Your Business?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you{"'"}re starting from scratch or looking to scale what{"'"}s
                already working, we{"'"}ll build you the infrastructure to grow
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
                  href="/pricing"
                  className="inline-flex min-touch items-center justify-center rounded-lg border border-border/50 bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground hover:border-secondary/40 transition-all duration-300"
                >
                  See Our Packages
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
