"use client"

import { SectionReveal } from "@/components/section-reveal"

export function PricingIntro() {
  return (
    <section className="pt-6 pb-4 sm:pt-8 sm:pb-6 lg:pt-10 lg:pb-8">
      <SectionReveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            How we&apos;re priced
          </p>
          <p className="mt-3 text-base sm:text-lg text-foreground/90 leading-relaxed">
            We help trade businesses win more enquiries and present themselves professionally online.
          </p>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Each option includes the initial build and ongoing management. No hidden layers—you see what you get.
          </p>
          <div className="mt-6 mx-auto h-px w-12 rounded-full bg-secondary/40" aria-hidden />
        </div>
      </SectionReveal>
    </section>
  )
}
