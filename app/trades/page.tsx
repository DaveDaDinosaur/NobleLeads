import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionReveal } from "@/components/section-reveal"
import { PageHero, PageSection, PageShell } from "@/components/growth/page-shell"
import { SectionHeading } from "@/components/growth/section-heading"
import { FinalCTA } from "@/components/growth/final-cta"
import { formatGBP, MIN_JOB_VALUE } from "@/lib/offer"
import { tradeHref, trades } from "@/lib/trades"
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = buildMetadata({
  title: "Trades We Work With",
  description:
    "NobleLeads works with UK trades doing jobs worth £2k or more: fire doors, EWI and render, roofing, extensions, loft conversions, kitchens, driveways, solar and stairlifts.",
  canonicalPath: "/trades",
})

export default function TradesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Trades"
        title={
          <>
            Built for trades doing <span className="accent-mono text-secondary">high-value work.</span>
          </>
        }
        intro={`We work with established trades whose average job is worth ${formatGBP(MIN_JOB_VALUE)} or more. That's where a proper lead system earns its keep.`}
      />

      <PageSection>
        <SectionReveal>
          <ul className="border-t border-border">
            {trades.map((trade, i) => (
              <li key={trade.slug} className="border-b border-border">
                <Link
                  href={tradeHref(trade)}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-6 sm:py-7 lg:grid-cols-12 lg:gap-x-8"
                >
                  <span className="label-mono hidden text-secondary lg:col-span-1 lg:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="display text-3xl text-foreground transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-secondary sm:text-4xl lg:col-span-5">
                    {trade.name}
                  </h2>
                  <ArrowRight className="row-span-2 h-5 w-5 text-secondary transition-transform duration-500 group-hover:translate-x-1 lg:order-last lg:col-span-1 lg:row-span-1 lg:justify-self-end" />
                  <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-5">{trade.benefit}</p>
                </Link>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </PageSection>

      <PageSection narrow>
        <SectionReveal>
          <SectionHeading
            eyebrow="Not on the list?"
            title="We work with other trades too."
            intro={`These are the trades we feature, not the only ones we work with. The system works best where one job is worth ${formatGBP(MIN_JOB_VALUE)} or more, so if that's you, tell us what you do.`}
          />
        </SectionReveal>
      </PageSection>

      <FinalCTA />
    </PageShell>
  )
}
