import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { PullQuote } from "@/components/blog/pull-quote"
import { BrowserFrame } from "@/components/case-studies/browser-frame"
import { CaseStudyResults } from "@/components/case-studies/case-study-results"
import { CaseStudyCta } from "@/components/case-studies/case-study-cta"
import { buildMetadata } from "../../(shared)/seo-config"
import { getArticleSchema } from "../../(shared)/schema"

const canonicalPath = "/case-studies/focus-refurbishment"

export const metadata: Metadata = buildMetadata({
  title: "Focus Refurbishment Case Study",
  description:
    "How NobleLeads helped Focus Refurbishment go from referral-only and a broken website to 24 leads a fortnight, 9.49% fire-door CTR and a full growth system.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Focus Refurbishment: From Referrals to a Full Growth System",
  description:
    "How NobleLeads rebuilt Focus Refurbishment's digital presence, launched targeted ad campaigns and automated operations for a 25-year commercial refurbishment company.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-06-04",
  dateModified: "2026-08-08",
})

const stats = [
  { value: "24", label: "Leads in latest fortnight", sub: "14 website + 10 phone" },
  { value: "9.49%", label: "Fire door ad CTR", sub: "2–3× search benchmark" },
  { value: "~£21", label: "Cost per website lead", sub: "~⅓ of market average" },
  { value: "25+", label: "Years in business", sub: "Trading since 2000" },
]

const built = [
  {
    title: "Website that converts",
    body: "Fast, structured site with dedicated pages for fire doors, painting, roofing and refurbishment — plus a corrected, photo-rich Google Business Profile.",
  },
  {
    title: "Ads with landing pages",
    body: "Service-specific campaigns and landing pages. Fire doors alone produced three serious enquiries in two weeks — from a service that previously had zero inbound.",
  },
  {
    title: "Full operations system",
    body: "CRM, call tracking, out-of-hours chatbot, missed-call text-back, review automation and streamlined quoting — admin that used to need a person, now largely automatic.",
  },
]

export default function FocusRefurbishmentCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,hsl(215_52%_35%/0.35)_0%,transparent_70%)] blur-[80px]" />
          <div className="absolute bottom-0 left-[-8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,hsl(42_45%_55%/0.18)_0%,transparent_70%)] blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Case Study · Commercial Refurbishment
              </p>
              <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                From referrals and a broken site to{" "}
                <span className="text-secondary">24 leads a fortnight</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Focus Refurbishment had 25 years of quality work across the M25 and
                Kent — and almost no digital presence. We built the website, ads and
                ops system that turned that reputation into a measurable pipeline.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group inline-flex min-touch items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
                >
                  Book a Discovery Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://focusrefurbishmentltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-touch items-center justify-center gap-2 rounded-lg border border-border/50 bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-secondary/40"
                >
                  Visit live site
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {["Noble Growth", "Sidcup · SE London & Kent", "Commercial & Domestic"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/40 px-3 py-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={80}>
            <div className="mt-10 sm:mt-12">
              <BrowserFrame
                src="/images/case-studies/focus-refurbishment-website.png"
                alt="Focus Refurbishment website homepage showing branded fleet and commercial contractor positioning"
                url="focusrefurbishmentltd.com"
                priority
                objectPosition="object-[70%_center]"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal direction="scale">
            <CaseStudyResults stats={stats} />
          </SectionReveal>
        </div>
      </section>

      {/* Challenge */}
      <section className="pb-4 sm:pb-6">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
              The challenge
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Strong work. Invisible online.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Craig had built Focus over 25 years on quality and referrals — but
                feast-and-famine months kept hitting. The website felt like a Word
                document, the Google listing had a wrong address and almost no photos,
                and the enquiry form emailed an inbox nobody monitored properly.
              </p>
              <p>
                Facebook ads had been tried. Without a landing page or follow-up
                system, nothing stuck. Admin was piling up, and the back-office person
                who held it together was ready to retire.
              </p>
            </div>
            <PullQuote>
              The missed call text-back alone paid for the first month… I can see
              exactly what came from which campaign, no more guessing.
            </PullQuote>
            <p className="text-xs text-muted-foreground/80">
              — Craig H., Owner, Focus Refurbishment
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* What we built */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                What we built
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Website. Ads. Operations. One system.
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3">
            {built.map((item, i) => (
              <SectionReveal key={item.title} delay={60 + i * 70}>
                <div className="h-full border-t border-secondary/30 pt-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 text-xs font-bold text-secondary">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video + proof */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                On-site proof
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Content competitors can{"'"}t copy
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We filmed on site — real projects, real team. This Grade II listed
                walkthrough runs on the website and in ads, so prospects see the
                standard of work before they call.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  "6 fire door conversions after campaign relaunch",
                  "8 more leads across refurb, extensions & bathrooms",
                  "1,000+ impressions for fire door installs in London",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>

            <SectionReveal delay={100} direction="right">
              <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none lg:justify-self-end">
                <div
                  className="relative overflow-hidden rounded-2xl border border-border/40 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.7)]"
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
                <p className="mt-3 text-center text-xs text-muted-foreground/70 lg:text-left">
                  Grade II listed refurbishment walkthrough
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Results narrative */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
              The outcome
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              A pipeline that compounds
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Paid brings enquiries in today. Organic rankings for fire doors,
                refurbishment and loft conversions across Sidcup and Kent build the
                free pipeline underneath. Focus now sits at the top of the page for
                fire door ads as often as the two biggest names in the space.
              </p>
              <p>
                Craig is working toward BM TRADA certification for higher-tier
                commercial fire door contracts — and the system is already being built
                to support that next step on Noble Dominate.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={80}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "24", label: "Leads / fortnight" },
                { value: "9.49%", label: "Fire door CTR" },
                { value: "~£21", label: "Per website lead" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-secondary/20 bg-secondary/5 px-4 py-5 text-center"
                >
                  <p className="text-2xl font-bold text-secondary">{item.value}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 pt-4 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionReveal direction="scale">
            <CaseStudyCta
              headline="Ready to stop relying on who happens to call this week?"
              body="We'll map your situation in a free discovery call — and show you what a system like Focus's would look like for your trade."
            />
          </SectionReveal>

          <SectionReveal delay={80}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Also see{" "}
              <Link
                href="/case-studies/thermal-render-specialists"
                className="font-semibold text-secondary hover:underline"
              >
                Thermal Render Specialists
              </Link>{" "}
              ·{" "}
              <Link href="/case-studies" className="font-semibold text-secondary hover:underline">
                All case studies
              </Link>
            </p>
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <MobileCTABar />
      <JsonLd data={[articleSchema]} />
    </main>
  )
}
