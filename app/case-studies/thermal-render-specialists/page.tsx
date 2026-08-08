import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata } from "../../(shared)/seo-config"
import { getArticleSchema } from "../../(shared)/schema"

const canonicalPath = "/case-studies/thermal-render-specialists"

export const metadata: Metadata = buildMetadata({
  title: "Thermal Render Specialists Case Study",
  description:
    "How NobleLeads took Thermal Render Specialists, an EWI and silicone render firm in South East London, from no website at all to ranking top 3 for render searches within weeks of launch.",
  canonicalPath,
})

const articleSchema = getArticleSchema({
  headline: "Thermal Render Specialists, From No Online Presence to Page One for Render Searches",
  description:
    "How NobleLeads built Thermal Render Specialists a full online presence from scratch, website, branding, Google Business Profile, Google Ads and tracking, and had them ranking top 3 for render searches across the South East within weeks.",
  url: `https://nobleleads.uk${canonicalPath}`,
  datePublished: "2026-08-01",
})

const stats = [
  { value: "0→Page 1", label: "From no website to page one", sub: "In weeks, not months" },
  { value: "Top 3", label: "For dozens of render searches", sub: "#1 for several core terms" },
  { value: "5.0★", label: "Google rating", sub: "Across 19 reviews" },
  { value: "Day 1", label: "Ads & tracking live from launch", sub: "Measurable from the first visitor" },
]

export default function ThermalRenderSpecialistsCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
          <SectionReveal>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Case Study · Render &amp; External Wall Insulation
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Thermal Render Specialists, From No Online Presence to Page One for Render Searches
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Dan runs Thermal Render Specialists, an external wall insulation and
                silicone render firm based in Gravesend, serving South East London and
                the surrounding counties. Genuinely skilled, manufacturer-approved
                work, and until we stepped in, no website at all. This is how NobleLeads
                took him from completely invisible to dominating render searches across
                the South East, in a matter of weeks.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/40 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Noble Growth Package
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/40 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Gravesend &amp; South East London
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/40 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  EWI &amp; Silicone Render
                </span>
                <a
                  href="https://thermalrenderspecialists.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/5 px-3 py-1 text-secondary transition-colors hover:bg-secondary/10"
                >
                  thermalrenderspecialists.co.uk ↗
                </a>
              </div>
            </header>
          </SectionReveal>

          <SectionReveal delay={60}>
            <figure className="mt-8 sm:mt-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/30">
                <Image
                  src="/images/case-studies/thermal-render-specialists-website.png"
                  alt="Thermal Render Specialists homepage with branded EWI and silicone render hero and approved-installer trust bar"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 48rem"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-2.5 text-center text-xs text-muted-foreground/70">
                The Thermal Render Specialists website
              </figcaption>
            </figure>
          </SectionReveal>
        </div>
      </section>

      <article className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">

          <SectionReveal delay={80}>
            <div className="mt-2 grid grid-cols-2 border-y border-border/40 sm:grid-cols-4">
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

          {/* The situation */}
          <SectionReveal delay={100}>
            <section className="mt-12 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Situation
              </h2>
              <p>
                Dan is an approved installer for Baumit, K Rend and Licata, offering
                external wall insulation and silicone render systems with guarantees
                of up to 25 years. The workmanship was there. The accreditations were
                there. What wasn{"'"}t there was any way for a homeowner to find him.
              </p>
              <p>
                Thermal Render Specialists had no website. None. Every enquiry came
                through word of mouth and repeat contacts, which meant the pipeline
                rose and fell with whoever happened to pass his name on that month.
                Meanwhile, the people who most wanted his service, homeowners typing
                {" "}&quot;external wall insulation&quot; and &quot;render specialists&quot;
                into Google every day, had no way of reaching him at all.
              </p>
              <p>
                For a trade where the buying decision is highly visual, and where
                homeowners are cautious about who they trust with the outside of their
                house, being invisible online is a serious handbrake on growth.
              </p>
            </section>
          </SectionReveal>

          {/* What we built */}
          <SectionReveal delay={120}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                What We Built
              </h2>

              <p className="font-semibold text-foreground">A Complete Website From Scratch</p>
              <p>
                We built Thermal Render Specialists their first ever website, {" "}
                <a
                  href="https://thermalrenderspecialists.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary/80 transition-colors hover:text-secondary"
                >
                  live at thermalrenderspecialists.co.uk
                </a>
                . A fast, properly structured site with dedicated pages for external
                wall insulation, silicone render and commercial work, clear
                explanations of the systems and guarantees, and free quote forms with
                conversion tracking wired in so every enquiry is captured and measured.
              </p>

              <p className="font-semibold text-foreground">Branding and a Logo That Fits the Work</p>
              <p>
                We designed the Thermal Render Specialists logo and brand look, giving
                a skilled operator a professional identity that matches the standard
                of the work and reassures cautious homeowners before they{"'"}ve even
                made contact.
              </p>

              <p className="font-semibold text-foreground">Before-and-After Sliders That Sell the Transformation</p>
              <p>
                Render and EWI is a visual sell, so we made the results the hero.
                Interactive before-and-after sliders let a homeowner drag across a
                real project and watch a tired, dated exterior become a clean, insulated,
                modern finish. It is the single most persuasive thing a render
                specialist can show, and it does the convincing before Dan ever picks
                up the phone.
              </p>

              <p className="font-semibold text-foreground">Google Business Profile and Reviews</p>
              <p>
                We set up and optimised the Google Business Profile so Thermal Render
                Specialists shows up in local and map results, backed by a 5.0 star
                rating across 19 reviews, the kind of social proof that turns a search
                into a booked survey.
              </p>

              <p className="font-semibold text-foreground">Google Ads From Day One</p>
              <p>
                Rather than wait months for organic rankings, we launched Google Ads
                targeting external wall insulation searches across South East London,
                sending that traffic straight to purpose-built pages. Early campaigns
                are running at a 6.3% click-through rate, well above the search
                benchmark for the sector.
              </p>

              <p className="font-semibold text-foreground">Analytics and Search Console From Launch</p>
              <p>
                Crucially, the site launched with Google Analytics and Search Console
                configured from day one, so every click, enquiry and ranking movement
                has been measurable from the very first visitor. There is no guessing
                what is working, the data has been there since launch.
              </p>

              <p className="font-semibold text-foreground">Content That Rode the Heatwave</p>
              <p>
                During the summer heatwave we published blog content on how to cool a
                room and a house down, tying Dan{"'"}s core service, insulation that
                keeps homes cooler in summer and warmer in winter, to what people were
                actually searching for that week. Instagram content and social ads are
                next in the pipeline.
              </p>
            </section>
          </SectionReveal>

          {/* Interactive showcase */}
          <SectionReveal delay={130}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                An Interactive Site That Sells the Work
              </h2>
              <p>
                Render is a visual sell, so we didn{"'"}t just post static photos, we
                built the transformation into the page. Drag the slider below to see
                the same wall before and after. This is a live example of the kind of
                interactive, conversion-focused detail we build into every site, the
                sort of thing that keeps a homeowner on the page and turns a browse
                into an enquiry.
              </p>
              <div className="not-prose">
                <BeforeAfterSlider
                  beforeSrc="/images/case-studies/trs-entrance-before.webp"
                  afterSrc="/images/case-studies/trs-entrance-after.webp"
                  beforeAlt="Boundary wall with dull, weathered render before Thermal Render Specialists"
                  afterAlt="The same wall with a crisp bright white silicone render finish after"
                />
                <p className="mt-2 text-center text-xs text-muted-foreground/70">
                  Drag to reveal, real Thermal Render Specialists project, South East London.
                </p>
              </div>
            </section>
          </SectionReveal>

          {/* Early results */}
          <SectionReveal delay={140}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                The Results
              </h2>
              <p>
                Because everything was measured from day one, the traction isn{"'"}t a
                guess, it{"'"}s in the data. Within the first week of going live the
                site rocketed from position 69 to the top of page one, and it hasn{"'"}t
                looked back.
              </p>
              <p>
                Thermal Render Specialists now ranks in the{" "}
                <span className="font-semibold text-foreground">top three for dozens
                of render searches</span>, sitting at{" "}
                <span className="font-semibold text-foreground">number one</span> for
                terms like &quot;external rendering&quot;, &quot;render
                specialists&quot; and &quot;commercial rendering london&quot;, plus a
                long list of location searches right across the South East. For the
                exact service Dan sells, he is now one of the first names a homeowner
                sees, backed by a 5.0 star rating and the photos to prove the work.
              </p>
              <p>
                Paid and organic traffic are both climbing week on week, visitors are
                spending nearly two minutes on the site, and the Google Ads are
                converting searches into enquiries from day one. A business that was
                completely invisible a few weeks earlier is now dominating its local
                search results, exactly the outcome NobleLeads is built to deliver.
              </p>
            </section>
          </SectionReveal>

          {/* Where they are now */}
          <SectionReveal delay={160}>
            <section className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                Where They Are Now
              </h2>
              <p>
                Thermal Render Specialists are on the Noble Growth package, with the
                foundations now firmly in place: a website that converts, a Google
                presence that ranks, paid campaigns that bring in enquiries immediately
                and a full analytics setup showing exactly what is working. Instagram
                content and social ads are the next layer being added.
              </p>
              <p>
                The difference is simple. A few weeks ago, a homeowner searching for
                external wall insulation in South East London would never have found
                Dan. Now he is one of the first names they see, with the reviews, the
                photos and the proof to back it up. The infrastructure is built. From
                here, it compounds.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal delay={200}>
            <section className="mt-14 border-t border-border/40 pt-10 text-center">
              <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                Want a system like this for your business?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                Whether you{"'"}re starting from nothing like Dan or looking to scale
                what{"'"}s already working, we{"'"}ll build the infrastructure to grow
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
