"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bath,
  Building2,
  ChevronDown,
  Droplets,
  Hammer,
  HardHat,
  KeyRound,
  Layers,
  PaintBucket,
  PlugZap,
  SprayCan,
  TreePine,
  Trees,
  Wrench,
  Zap,
} from "lucide-react"

import { SectionReveal } from "@/components/section-reveal"
import { cn } from "@/lib/utils"

const INITIAL_VISIBLE = 6

const trades = [
  {
    name: "Window Cleaners",
    benefit: "Build rounds and reduce Bark dependency",
    href: "/window-cleaners",
    icon: Droplets,
  },
  {
    name: "Roofers",
    benefit: "Fill your pipeline beyond storm season",
    href: "/roofers",
    icon: HardHat,
  },
  {
    name: "Electricians",
    benefit: "Win rewires, EICRs and commercial contracts",
    href: "/electricians",
    icon: Zap,
  },
  {
    name: "Plumbers",
    benefit: "Attract boiler installs and bathroom fits",
    href: "/plumbers",
    icon: Wrench,
  },
  {
    name: "Landscapers",
    benefit: "Keep your diary full between projects",
    href: "/landscapers",
    icon: Trees,
  },
  {
    name: "Painters & Decorators",
    benefit: "Attract clients who pay for quality",
    href: "/painters-decorators",
    icon: PaintBucket,
  },
  {
    name: "Domestic Cleaners",
    benefit: "Build a full book of loyal regular clients",
    href: "/domestic-cleaners",
    icon: SprayCan,
  },
  {
    name: "Driveway & Paving",
    benefit: "Win high-value installs and commercial jobs",
    href: "/driveway-paving",
    icon: Hammer,
  },
  {
    name: "Builders",
    benefit: "Win extensions, conversions and refurb work",
    href: "/builders",
    icon: Building2,
  },
  {
    name: "Bathroom Fitters",
    benefit: "Fill your diary with bathroom install leads",
    href: "/bathroom-fitters",
    icon: Bath,
  },
  {
    name: "Carpet Cleaners",
    benefit: "Book more domestic and commercial cleans",
    href: "/carpet-cleaners",
    icon: Layers,
  },
  {
    name: "Tree Surgeons",
    benefit: "Get emergency and planned tree work enquiries",
    href: "/tree-surgeons",
    icon: TreePine,
  },
  {
    name: "EV Charger Installers",
    benefit: "Capture the growing home charging market",
    href: "/ev-charger-installers",
    icon: PlugZap,
  },
  {
    name: "End of Tenancy Cleaners",
    benefit: "Win landlord and agency cleaning contracts",
    href: "/end-of-tenancy-cleaners",
    icon: KeyRound,
  },
]

function TradeCard({ trade }: { trade: (typeof trades)[number] }) {
  const Icon = trade.icon

  return (
    <Link
      href={trade.href}
      className="group flex h-full flex-col justify-between rounded-xl border border-border/40 bg-card p-5 text-left transition-all duration-300 hover:border-secondary/40 hover:bg-card hover:shadow-lg hover:shadow-secondary/10 sm:p-6"
    >
      <div>
        <div className="inline-flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
            <Icon className="h-4 w-4 text-secondary" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/80">
            {trade.name}
          </p>
        </div>
        <p className="mt-3 text-sm font-medium text-foreground">{trade.benefit}</p>
      </div>
      <span className="mt-4 inline-flex items-center text-xs font-semibold text-secondary transition-transform group-hover:translate-x-0.5">
        View trade page
        <span aria-hidden className="ml-1">
          →
        </span>
      </span>
    </Link>
  )
}

export function TradeGridSection() {
  const [expanded, setExpanded] = useState(false)
  const visibleTrades = expanded ? trades : trades.slice(0, INITIAL_VISIBLE)
  const hiddenCount = trades.length - INITIAL_VISIBLE

  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl">
              We Specialise In Your Trade
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              NobleLeads works exclusively with UK property service businesses. Pick
              your trade to see how we turn your skills into a lead system you own.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTrades.map((trade, i) => (
            <SectionReveal
              key={trade.href}
              direction="scale"
              delay={expanded && i >= INITIAL_VISIBLE ? (i - INITIAL_VISIBLE) * 40 : 50}
            >
              <TradeCard trade={trade} />
            </SectionReveal>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-8 flex justify-center sm:mt-10">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="group inline-flex min-touch items-center gap-2 rounded-full border border-border/50 bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-secondary/40 hover:bg-card/70"
            >
              {expanded ? "Show fewer trades" : `Show all ${trades.length} trades`}
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-secondary transition-transform duration-300",
                  expanded && "rotate-180"
                )}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
