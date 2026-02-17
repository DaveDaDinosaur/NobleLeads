"use client"

import { SectionReveal } from "@/components/section-reveal"

const pillars = [
  {
    number: "01",
    title: "We Diagnose, Not Pitch",
    description:
      "We identify where revenue is being left on the table and show you how to capture it. If we can't materially improve your position, we won't take you on.",
  },
  {
    number: "02",
    title: "Revenue Over Aesthetics",
    description:
      "Design without performance is decoration. Every system is judged by commercial impact.",
  },
  {
    number: "03",
    title: "Commercial Thinking",
    description:
      "We think like operators, not marketers. Every recommendation must make financial sense.",
  },
  {
    number: "04",
    title: "Long-Term Growth",
    description:
      "We build infrastructure that compounds over time — not quick wins.",
  },
]

export function MissionSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/20" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance max-w-2xl">
            Built on Conviction. Not Trends.
          </h2>
        </SectionReveal>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 80}>
              <div className="flex gap-6 rounded-xl border border-border/50 bg-card/50 p-6 sm:p-8 backdrop-blur-sm transition-colors hover:border-secondary/30 hover:bg-card/70">
                <span className="text-2xl font-bold text-secondary/50 font-mono flex-shrink-0 tabular-nums">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
