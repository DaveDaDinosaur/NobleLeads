"use client"

import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function PricingCTA() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 border-t border-border/50">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
            Ready To Bring In More Enquiries?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Book a strategy call and we’ll recommend the right option for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98] w-full sm:w-auto"
            >
              Book Strategy Call
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+441223679988"
              className="min-touch inline-flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-secondary/50 hover:text-secondary w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Speak To The Team
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
