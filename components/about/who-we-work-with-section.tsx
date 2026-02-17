"use client"

import { SectionReveal } from "@/components/section-reveal"
import { Check } from "lucide-react"

const points = [
  "Deliver quality workmanship",
  "Value their reputation",
  "Want more predictable growth",
  "Are ready to build proper infrastructure",
]

export function WhoWeWorkWithSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-muted/10" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            Who We Work Best With
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Established property service businesses that:
          </p>
        </SectionReveal>
        <ul className="mt-5 space-y-3">
          {points.map((point, i) => (
            <SectionReveal key={point} delay={80 + i * 40}>
              <li className="flex items-center gap-3 rounded-lg border border-border/40 bg-card/30 py-3 px-4 transition-colors hover:border-border/60 hover:bg-card/40">
                <Check className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden />
                <span className="text-foreground/95 font-medium">{point}</span>
              </li>
            </SectionReveal>
          ))}
        </ul>
        <SectionReveal delay={280}>
          <p className="mt-8 text-base leading-relaxed text-foreground/90">
            If you&apos;re serious about strengthening your position, we&apos;ll
            likely be a strong fit.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
