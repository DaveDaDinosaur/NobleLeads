"use client"

import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"
import { X, Check, ArrowRight } from "lucide-react"

const WITHOUT = [
  "Missed calls",
  "Slow replies",
  "No tracking",
  "Inconsistent work",
  "No contract visibility",
]

const WITH = [
  "Instant alerts",
  "Automated follow-up",
  "Full pipeline visibility",
  "Review growth",
  "Contract-ready positioning",
]

export function ServicesContrast() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl border border-border/50 overflow-hidden">
            {/* Left: Without */}
            <div className="bg-muted/40 backdrop-blur-sm p-8 sm:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-border/50">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Without a proper system
              </h3>
              <ul className="mt-6 space-y-3">
                {WITHOUT.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-muted-foreground/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: With */}
            <div className="bg-card/40 backdrop-blur-sm p-8 sm:p-10 lg:p-12 border-border/30">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                With NobleLeads
              </h3>
              <ul className="mt-6 space-y-3">
                {WITH.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/90">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
            >
              Book Your Strategy Call
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
