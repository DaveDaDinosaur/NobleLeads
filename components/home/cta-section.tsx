"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section
      id="call"
      className="relative py-14 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal direction="scale">
          <div className="relative rounded-2xl border border-secondary/20 bg-card p-8 sm:p-12 lg:p-20 text-center overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-secondary/50" />

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/[0.03] blur-[100px]" />

            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
                One conversation could change the trajectory of your business.
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
                If one additional commercial contract per month would cover this
                investment, the question isn{"'"}t whether you can afford it. It{"'"}s
                whether you can afford to keep doing what you{"'"}re doing.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[11px] text-muted-foreground/80">
                <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  UK-based growth partner
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Property services specialist
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  GDPR-conscious data handling
                </span>
              </div>
              <div className="mt-8 sm:mt-10 flex flex-col items-stretch sm:items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 sm:px-10 py-4 text-base font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Your Strategy Call
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              </div>
              <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-muted-foreground/60">
                No obligation. A straightforward conversation about your growth.
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-secondary/30" />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
