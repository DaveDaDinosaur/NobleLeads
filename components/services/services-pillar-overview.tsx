"use client"

import { SectionReveal } from "@/components/section-reveal"
import { PILLARS } from "@/lib/services-data"

export function ServicesPillarOverview() {
  return (
    <section className="relative py-12 sm:py-14 lg:py-16 overflow-hidden w-full min-w-0">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-muted/15" aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" aria-hidden />

      <div className="relative w-full min-w-0 px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
              6 pillars · 18 integrated services
            </p>
            <h2 className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
              The six pillars of your growth journey
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Click any pillar to jump to the details below.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-8 sm:mt-10 mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            const displayLabel = pillar.id === "contract-growth" ? "Growth" : pillar.label
            return (
              <SectionReveal key={pillar.id} delay={i * 40} direction="up">
                <a
                  href={`#${pillar.id}`}
                  className="group flex flex-col items-center gap-2 rounded-lg border border-border/50 bg-card/40 py-3.5 px-3 text-center transition-all duration-200 hover:border-secondary/40 hover:bg-card/60"
                  title={`Jump to ${displayLabel}`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary/10 border border-secondary/20">
                    <Icon className="h-4 w-4 text-secondary" aria-hidden />
                  </div>
                  <span className="text-xs font-bold text-foreground uppercase tracking-wide group-hover:text-secondary transition-colors leading-tight">
                    {displayLabel}
                  </span>
                </a>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
