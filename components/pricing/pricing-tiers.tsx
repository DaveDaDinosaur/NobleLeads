"use client"

import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

const CORE_INCLUDES = [
  "Conversion-focused website build",
  "Hosting & maintenance",
  "Lead capture forms connected",
  "Google review integration",
  "Basic tracking & reporting",
  "Mobile optimisation",
  "Ongoing support",
]

const GROWTH_INCLUDES = [
  "Paid ads management",
  "Funnel build for enquiries",
  "Missed call text-back system",
  "SMS & email follow-up sequences",
  "Lead tracking dashboard",
  "Ongoing campaign adjustments",
]

const DOMINATE_INCLUDES = [
  "Advanced funnel systems",
  "Multi-campaign ad strategy",
  "Advanced automation & email campaigns",
  "Market expansion planning",
  "Monthly performance review call",
]

const DOMINATE_TENDER = [
  "Compliance visibility upgrades",
  "Opportunity monitoring setup",
  "Structured readiness framework for commercial contract positioning",
]

function TierCard({
  name,
  badge,
  setup,
  ongoing,
  commitment,
  description,
  includesPrefix,
  includes,
  tenderSection,
  ctaLabel,
  highlighted,
}: {
  name: string
  badge?: string
  setup: string
  ongoing: string
  commitment: string
  description: string
  includesPrefix?: string
  includes: string[]
  tenderSection?: { title: string; items: string[] }
  ctaLabel: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-card/40 backdrop-blur-sm overflow-hidden ${
        highlighted
          ? "border-secondary/50 shadow-lg shadow-secondary/10 ring-2 ring-secondary/20 lg:scale-[1.02] z-10"
          : "border-border/50"
      }`}
    >
      {badge && (
        <div className="absolute top-0 right-0 left-0 py-2 px-4 bg-secondary/20 border-b border-secondary/30">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-secondary">
            {badge}
          </p>
        </div>
      )}
      <div className={`p-6 sm:p-8 ${badge ? "pt-12 sm:pt-14" : ""}`}>
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Setup</span>
            <span className="font-semibold text-foreground">{setup}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Monthly management</span>
            <span className="font-semibold text-foreground">{ongoing}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Commitment</span>
            <span className="font-medium text-foreground">{commitment}</span>
          </div>
        </div>

        {includesPrefix && (
          <p className="mt-6 text-sm font-medium text-foreground/90">{includesPrefix}</p>
        )}
        <ul className={`space-y-2.5 ${includesPrefix ? "mt-3" : "mt-6"}`}>
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
              <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {tenderSection && (
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              {tenderSection.title}
            </p>
            <ul className="space-y-2">
              {tenderSection.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href="/contact"
          className={`mt-8 w-full min-touch inline-flex items-center justify-center gap-2 rounded-lg font-semibold py-3.5 text-sm transition-all duration-200 active:scale-[0.98] ${
            highlighted
              ? "bg-secondary text-secondary-foreground hover:opacity-90 hover:shadow-lg hover:shadow-secondary/20"
              : "border border-border/60 bg-card/60 text-foreground hover:border-secondary/50 hover:text-secondary"
          }`}
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export function PricingTiers() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" id="pricing-tiers">
      <SectionReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <TierCard
            name="Noble Core"
            setup="£995"
            ongoing="£97/month or £900/year"
            commitment="Month-to-month"
            description="A professional website built to convert visitors into real enquiries."
            includes={CORE_INCLUDES}
            ctaLabel="Start With Core"
          />
          <TierCard
            name="Noble Growth"
            badge="Most Popular"
            setup="£1,495"
            ongoing="£495/month + ad spend"
            commitment="3-month initial optimisation period"
            description="Active lead generation with paid ads and follow-up systems."
            includesPrefix="Everything in Core, plus:"
            includes={GROWTH_INCLUDES}
            ctaLabel="Scale With Growth"
            highlighted
          />
          <TierCard
            name="Noble Dominate"
            setup="£1,995"
            ongoing="£895/month + ad spend"
            commitment="3-month rollout period"
            description="Multi-channel growth and commercial positioning for serious operators."
            includesPrefix="Everything in Growth, plus:"
            includes={DOMINATE_INCLUDES}
            tenderSection={{
              title: "Tender Positioning Infrastructure",
              items: DOMINATE_TENDER,
            }}
            ctaLabel="Build Market Authority"
          />
        </div>
      </SectionReveal>
    </section>
  )
}
