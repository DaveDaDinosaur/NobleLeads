import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { CaseStudyCta } from "@/components/case-studies/case-study-cta"
import { buildMetadata } from "../(shared)/seo-config"

const caseStudies = [
  {
    slug: "focus-refurbishment",
    client: "Focus Refurbishment",
    sector: "Commercial Refurbishment",
    location: "Sidcup, South East London & Kent",
    package: "Noble Growth",
    headline: "From referrals and a broken website to a full growth system.",
    result: "24 leads in the latest fortnight · 9.49% fire door CTR · ~£21 CPL",
    href: "/case-studies/focus-refurbishment",
    externalHref: "https://focusrefurbishmentltd.com",
    image: "/images/case-studies/focus-refurbishment-website.png",
    imageAlt: "Focus Refurbishment website homepage",
    imagePosition: "object-[70%_center]",
    featured: true,
  },
  {
    slug: "thermal-render-specialists",
    client: "Thermal Render Specialists",
    sector: "Render & External Wall Insulation",
    location: "Gravesend & South East London",
    package: "Noble Growth",
    headline: "From no website at all to page one for render searches in weeks.",
    result: "Top 3 for dozens of render searches · Ads & tracking live from day one",
    href: "/case-studies/thermal-render-specialists",
    externalHref: "https://thermalrenderspecialists.co.uk",
    image: "/images/case-studies/thermal-render-specialists-website.png",
    imageAlt: "Thermal Render Specialists website homepage",
    imagePosition: "object-top",
    featured: false,
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Client Case Studies",
  description:
    "Real results for UK trade businesses. See how NobleLeads builds lead systems, ad campaigns and operations that turn referrals into consistent growth.",
  canonicalPath: "/case-studies",
})

export default function CaseStudiesPage() {
  const featured = caseStudies.find((cs) => cs.featured) ?? caseStudies[0]
  const others = caseStudies.filter((cs) => cs.slug !== featured.slug)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-24 right-[-12%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,hsl(215_52%_35%/0.32)_0%,transparent_70%)] blur-[80px]" />
          <div className="absolute top-1/3 left-[-10%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,hsl(42_45%_55%/0.16)_0%,transparent_70%)] blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Case Studies
              </p>
              <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Real businesses.{" "}
                <span className="text-secondary">Real results.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Honest accounts of what we built, why we built it, and what happened —
                for UK trades who decided to stop relying on referrals alone.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Featured */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <Link
              href={featured.href}
              className="group grid overflow-hidden rounded-2xl border border-border/40 bg-card/50 transition-all duration-300 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10 lg:grid-cols-2"
            >
              <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[340px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-[1.03] ${featured.imagePosition}`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/80"
                  aria-hidden
                />
              </div>

              <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-secondary/30 bg-secondary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary">
                    Featured
                  </span>
                  <span className="rounded-full border border-border/50 bg-card/60 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
                    {featured.package}
                  </span>
                </div>
                <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.18em] text-secondary/80">
                  {featured.sector}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {featured.client}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {featured.headline}
                </p>
                <div className="mt-5 rounded-xl border border-secondary/20 bg-secondary/5 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
                    Key result
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{featured.result}</p>
                </div>
                <p className="mt-4 text-xs text-muted-foreground/70">{featured.location}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </SectionReveal>

          {/* Remaining grid */}
          {others.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2">
              {others.map((cs, i) => (
                <SectionReveal key={cs.slug} delay={80 + i * 60}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/40 transition-all duration-300 hover:border-secondary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-secondary/10">
                    <Link href={cs.href} className="relative block aspect-[16/10] overflow-hidden">
                      <Image
                        src={cs.image}
                        alt={cs.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className={`object-cover transition-transform duration-700 group-hover:scale-[1.03] ${cs.imagePosition}`}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
                        aria-hidden
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary/80">
                            {cs.sector}
                          </p>
                          <h2 className="mt-2 text-lg font-semibold text-foreground">
                            <Link href={cs.href} className="hover:text-secondary transition-colors">
                              {cs.client}
                            </Link>
                          </h2>
                        </div>
                        <span className="flex-shrink-0 rounded-full border border-secondary/30 bg-secondary/5 px-2.5 py-1 text-[10px] font-semibold text-secondary">
                          {cs.package}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {cs.headline}
                      </p>
                      <div className="mt-4 rounded-lg border border-secondary/20 bg-secondary/5 px-4 py-3">
                        <p className="text-[11px] font-semibold text-secondary">Key result</p>
                        <p className="mt-1 text-sm text-foreground/90">{cs.result}</p>
                      </div>
                      <p className="mt-3 text-[11px] text-muted-foreground/70">{cs.location}</p>
                      <div className="mt-5 flex items-center gap-4 text-xs">
                        <Link
                          href={cs.href}
                          className="inline-flex items-center gap-1.5 font-semibold text-secondary hover:underline"
                        >
                          Read case study
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <a
                          href={cs.externalHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-secondary"
                        >
                          Visit site
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </article>
                </SectionReveal>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionReveal direction="scale">
            <CaseStudyCta
              headline="Your trade could be next."
              body="Book a free discovery call and we'll show you what a system like these would look like for your business — no fluff, no lock-in pitch."
            />
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <MobileCTABar />
    </main>
  )
}
