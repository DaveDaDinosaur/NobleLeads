"use client"

import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServicesROI() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            If One Extra Job Covers The Investment…
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="rounded-xl border border-border/50 bg-card/40 px-6 py-4 min-w-[140px]">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Avg. job value</p>
              <p className="text-2xl font-bold text-secondary mt-1">£X</p>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="rounded-xl border border-border/50 bg-card/40 px-6 py-4 min-w-[140px]">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">2 extra jobs</p>
              <p className="text-2xl font-bold text-foreground mt-1">£2X</p>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="rounded-xl border border-secondary/30 bg-secondary/10 px-6 py-4 min-w-[140px]">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary">System covered</p>
              <p className="text-2xl font-bold text-secondary mt-1">✓</p>
            </div>
          </div>
          <p className="mt-8 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            This isn&apos;t discretionary marketing. It&apos;s infrastructure that pays back in enquiries and jobs.
          </p>
          <Link
            href="/contact"
            className="mt-8 min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
          >
            Map this to your business
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
