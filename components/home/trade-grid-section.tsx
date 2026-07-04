"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { SectionReveal } from "@/components/section-reveal"
import { cn } from "@/lib/utils"
import { trades, type Trade } from "@/lib/trades"

const INITIAL_VISIBLE = 6

function TradeCard({ trade }: { trade: Trade }) {
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
    <section id="trades" className="relative py-14 sm:py-16 lg:py-20 scroll-mt-24">
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
