import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/home/mobile-cta-bar"
import { SectionReveal } from "@/components/section-reveal"
import { buildMetadata } from "../(shared)/seo-config"

const caseStudies = [
  {
    slug: "focus-refurbishment",
    client: "Focus Refurbishment",
    sector: "Commercial Refurbishment",
    location: "Sidcup, South East London & Kent",
    package: "Noble Growth",
    headline: "From referrals and a broken website to a full growth and operations system.",
    result: "24 leads in the latest fortnight, with a 9.49% fire door CTR at ~£21 per lead.",
    href: "/case-studies/focus-refurbishment",
    externalHref: "https://focusrefurbishmentltd.com",
    image: "/images/case-studies/focus-refurbishment-website.png",
    imageAlt: "Focus Refurbishment website",
    imagePosition: "object-[70%_center]",
  },
  {
    slug: "thermal-render-specialists",
    client: "Thermal Render Specialists",
    sector: "Render & External Wall Insulation",
    location: "Gravesend & South East London",
    package: "Noble Growth",
    headline: "From no website at all to ranking on page one for render searches in weeks.",
    result: "Top 3 for dozens of render searches within weeks of launch, with Google Ads and tracking live from day one.",
    href: "/case-studies/thermal-render-specialists",
    externalHref: "https://thermalrenderspecialists.co.uk",
    image: "/images/case-studies/thermal-render-specialists-website.png",
    imageAlt: "Thermal Render Specialists website",
    imagePosition: "object-top",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "Client Case Studies",
  description:
    "Real results for real UK trade businesses. See how NobleLeads builds lead generation systems, ad campaigns and operational infrastructure that helps trades grow consistently.",
  canonicalPath: "/case-studies",
})

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="relative pb-10 pt-28 sm:pt-32 lg:pb-14 lg:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
                Case Studies
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Real businesses. Real results.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Every case study here is a genuine account of what we built, why we
                built it and what happened. No vanity metrics, just honest results
                from UK trade businesses who decided to stop relying on referrals and
                build something that works.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <SectionReveal key={cs.slug} direction="up" delay={i * 80}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border/40 bg-card/40 transition-all duration-300 hover:border-secondary/40 hover:bg-card/70">
                  <Link href={cs.href} className="relative block aspect-[16/9] overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover ${cs.imagePosition}`}
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary/80">
                          {cs.sector}
                        </p>
                        <h2 className="mt-2 text-base font-semibold text-foreground sm:text-lg">
                          <Link href={cs.href} className="transition-colors hover:text-secondary">
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
                      <p className="text-xs font-semibold text-secondary">Key result</p>
                      <p className="mt-1 text-sm text-foreground/90">{cs.result}</p>
                    </div>

                    <p className="mt-3 text-[11px] text-muted-foreground/70">{cs.location}</p>

                    <div className="mt-5 flex items-center gap-4 text-xs">
                      <Link
                        href={cs.href}
                        className="inline-flex items-center font-semibold text-secondary hover:underline"
                      >
                        Read case study →
                      </Link>
                      <a
                        href={cs.externalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-secondary"
                      >
                        Visit site ↗
                      </a>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTABar />
    </main>
  )
}
