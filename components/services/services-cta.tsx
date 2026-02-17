"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 border-t border-border/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
            Ready To Build A System That Works While You&apos;re On The Tools?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            We build the infrastructure. You focus on the work.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98] w-full sm:w-auto"
            >
              Book Strategy Call
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#what-we-deliver"
              className="min-touch inline-flex items-center justify-center rounded-lg border border-border/50 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-secondary/50 hover:text-secondary w-full sm:w-auto"
            >
              See what we deliver
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
