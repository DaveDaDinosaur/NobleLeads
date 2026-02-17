"use client"

import { SectionReveal } from "@/components/section-reveal"
import { PILLARS } from "@/lib/services-data"

export function SystemOverview() {
  return (
    <section id="system-overview" className="relative py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <p className="text-center text-sm font-medium text-secondary uppercase tracking-wider">
            Six pillars · 18 integrated services
          </p>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl max-w-2xl mx-auto">
            How The Growth System Works
          </h2>
          <p className="mt-4 text-center text-muted-foreground text-base max-w-xl mx-auto">
            Each pillar connects to the next so your business attracts, captures and converts leads with authority and scale.
          </p>
        </SectionReveal>
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <SectionReveal key={pillar.id} delay={i * 50} direction="up">
                <a
                  href={`#${pillar.id}`}
                  className="group flex flex-col rounded-xl border border-border/60 bg-card/50 p-6 text-left transition-all duration-200 hover:border-secondary/40 hover:bg-card/70"
                  title={pillar.summary}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-secondary/15 border border-secondary/25">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground uppercase tracking-wide group-hover:text-secondary transition-colors">
                      {pillar.label}
                    </h3>
                  </div>
                  <p className="text-sm leading-snug text-muted-foreground">
                    {pillar.summary}
                  </p>
                </a>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
