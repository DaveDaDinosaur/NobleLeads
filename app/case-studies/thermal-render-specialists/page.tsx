import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { BrowserFrame } from "@/components/case-studies/browser-frame"
import { CaseStudyResults } from "@/components/case-studies/case-study-results"
import { CaseStudyCta } from "@/components/case-studies/case-study-cta"
import { buildMetadata } from "../../(shared)/seo-config"
import { getArticleSchema } from "../../(shared)/schema"

const canonicalPath = "/case-studies/thermal-render-specialists"

export const metadata: Metadata = buildMetadata({
  title: "Thermal Render Specialists Case Study",
  description:
    "How NobleLeads took Thermal Render Specialists from no website to top 3 for dozens of render searches within weeks — with ads and tracking live from day one.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Thermal Render Specialists: From Invisible to Page One",
  description:
    "How NobleLeads built Thermal Render Specialists a full online presence from scratch and had them ranking top 3 for render searches across the South East within weeks.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-08-01",
  dateModified: "2026-08-08",
})

const stats = [
  { value: "0→P1", label: "No website to page one", sub: "In weeks, not months" },
  { value: "Top 3", label: "Dozens of render searches", sub: "#1 for several core terms" },
  { value: "5.0★", label: "Google rating", sub: "Across 19 reviews" },
  { value: "Day 1", label: "Ads & tracking live", sub: "Measurable from launch" },
]

const built = [
  {
    title: "Website from scratch",
    body: "First-ever site with dedicated EWI, silicone render and commercial pages, clear guarantees, and conversion tracking on every quote form.",
  },
  {
    title: "Brand + visual proof",
    body: "Logo and brand identity plus interactive before-and-after sliders — the most persuasive thing a render specialist can show a cautious homeowner.",
  },
  {
    title: "GBP, ads & analytics",
    body: "Optimised Google Business Profile, Google Ads from day one (6.3% CTR), and Analytics + Search Console wired in so every result is measurable.",
  },
]

export default function ThermalRenderSpecialistsCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,hsl(215_52%_35%/0.35)_0%,transparent_70%)] blur-[80px]" />
          <div className="absolute bottom-0 left-[-8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,hsl(42_45%_55%/0.18)_0%,transparent_70%)] blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Case Study · Render &amp; External Wall Insulation
              </p>
              <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                From no website to{" "}
                <span className="text-secondary">page one for render searches</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Dan runs an approved Baumit, K Rend and Licata installer in Gravesend —
                skilled work, long guarantees, and until we stepped in, zero online
                presence. Within weeks he was dominating South East render searches.
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
                  href="https://thermalrenderspecialists.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-touch items-center justify-center gap-2 rounded-lg border border-border/50 bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-secondary/40"
                >
                  Visit live site
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {["Noble Growth", "Gravesend · SE London", "EWI & Silicone Render"].map(
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
                src="/images/case-studies/thermal-render-specialists-website.png"
                alt="Thermal Render Specialists homepage with EWI and silicone render positioning"
                url="thermalrenderspecialists.co.uk"
                priority
                objectPosition="object-top"
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
              The work was there. The website wasn{"'"}t.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Thermal Render Specialists had manufacturer approvals and guarantees up
                to 25 years — but no website at all. Every enquiry came through word of
                mouth, so the pipeline rose and fell with whoever passed Dan{"'"}s name on.
              </p>
              <p>
                For a visual trade where homeowners are cautious about who they trust
                with the outside of their house, being invisible on Google is a serious
                handbrake on growth.
              </p>
            </div>
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
                Presence, proof and paid traffic — from day one
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

      {/* Before / after showcase */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Visual proof
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Let the transformation sell the job
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Render is a visual sell — so we made the results the hero. Drag the
                slider to watch a tired exterior become a clean, insulated finish.
                That{"'"}s the kind of detail that turns a browse into an enquiry.
              </p>
            </SectionReveal>

            <SectionReveal delay={80} direction="right">
              <BeforeAfterSlider
                beforeSrc="/images/case-studies/trs-entrance-before.webp"
                afterSrc="/images/case-studies/trs-entrance-after.webp"
                beforeAlt="Boundary wall with dull, weathered render before Thermal Render Specialists"
                afterAlt="The same wall with a crisp bright white silicone render finish after"
              />
              <p className="mt-2 text-center text-xs text-muted-foreground/70">
                Drag to reveal — real Thermal Render Specialists project
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
              The outcome
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Invisible one week. Dominating the next.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Within the first week the site moved from position 69 to the top of
                page one. Thermal Render Specialists now ranks top three for dozens of
                render searches — including #1 for terms like &quot;external
                rendering&quot; and &quot;commercial rendering london&quot;.
              </p>
              <p>
                Paid and organic traffic are climbing week on week. A business that
                homeowners couldn{"'"}t find a few weeks earlier is now one of the first
                names they see — with the reviews and photos to back it up.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={80}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "0→P1", label: "In the first week" },
                { value: "Top 3", label: "Dozens of terms" },
                { value: "6.3%", label: "Ads CTR" },
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
              headline="Starting from nothing — or ready to scale?"
              body="Whether you're invisible online like Dan was, or looking to grow what's already working, we'll build the infrastructure that compounds."
            />
          </SectionReveal>

          <SectionReveal delay={80}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Also see{" "}
              <Link
                href="/case-studies/focus-refurbishment"
                className="font-semibold text-secondary hover:underline"
              >
                Focus Refurbishment
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
