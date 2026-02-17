"use client"

import { SectionReveal } from "@/components/section-reveal"

export function PositioningSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <SectionReveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="border-l-2 border-secondary/40 pl-6 sm:pl-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance leading-snug">
                This Was Never About Websites.
              </h2>
            </div>
          </SectionReveal>
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <SectionReveal delay={60}>
              <p>
                We saw talented tradespeople losing work to competitors with
                better systems — not better standards, reviews or service. Just
                better positioning, messaging and lead generation. That gap
                compounds.
              </p>
            </SectionReveal>
            <SectionReveal delay={120}>
              <p>
                So we built Noble Leads to close it. Websites are one component;
                what we actually build is performance infrastructure that
                generates, captures and converts demand.
              </p>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
