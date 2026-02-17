"use client"

import Link from "next/link"
import { SectionReveal } from "@/components/section-reveal"
import { WHAT_WE_DELIVER_JOURNEY } from "@/lib/what-we-deliver-data"
import { PILLARS } from "@/lib/services-data"
import { ArrowRight } from "lucide-react"

export function WhatWeDeliver() {
  const getPillarIcon = (stepId: string) =>
    PILLARS.find((p) => p.id === stepId)?.icon
  return (
    <section
      id="what-we-deliver"
      className="relative py-20 sm:py-24 lg:py-28 scroll-mt-24"
    >
      {/* Section header */}
      <SectionReveal>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider">
            What we deliver
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Your growth journey
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Six steps that take you from visibility to scale. We build each
            piece so it connects to the next.
          </p>
        </div>
        <div className="mx-auto mt-10 h-px w-16 rounded-full bg-secondary/40" />
      </SectionReveal>

      {/* Journey steps — clear cards with spacing */}
      <div className="mt-16 sm:mt-20 lg:mt-24 space-y-6 sm:space-y-8">
        {WHAT_WE_DELIVER_JOURNEY.map((step, index) => {
          const PillarIcon = getPillarIcon(step.id)
          return (
          <SectionReveal key={step.id} delay={index * 50}>
            <article
              id={step.id}
              className="relative scroll-mt-28 rounded-2xl border border-border/60 bg-card/40 overflow-hidden transition-colors hover:border-border/80 hover:bg-card/50"
              aria-labelledby={`step-${step.id}-title`}
            >
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 lg:gap-10">
                  {/* Step indicator + icon */}
                  <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 flex-shrink-0">
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border-2 border-secondary/50 bg-secondary/10 shadow-[0_0_0_1px_hsl(var(--background))]"
                      aria-hidden
                    >
                      {PillarIcon && (
                        <PillarIcon className="h-5 w-5 text-secondary" />
                      )}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-left">
                      Step {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      id={`step-${step.id}-title`}
                      className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                    >
                      {step.label}
                    </h3>
                    <ul className="mt-6 space-y-5 sm:space-y-6" role="list">
                      {step.services.map((service) => (
                        <li
                          key={service.title}
                          className="border-l-2 border-secondary/30 pl-5 sm:pl-6 py-0.5"
                        >
                          <span className="text-sm font-semibold text-foreground">
                            {service.title}
                          </span>
                          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </SectionReveal>
          )
        })}
      </div>

      {/* Conversion close */}
      <SectionReveal delay={300}>
        <div className="mt-14 sm:mt-16 lg:mt-20 rounded-2xl border border-secondary/40 bg-secondary/10 px-8 py-10 sm:px-12 sm:py-12 text-center shadow-[inset_0_1px_0_0_hsl(var(--secondary)/0.15)]">
          <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            You&apos;ve seen the journey. Ready to start?
          </p>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            We&apos;ll map these steps to your business and priorities on a
            free strategy call.
          </p>
          <Link
            href="/contact"
            className="group mt-8 min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-7 py-4 text-sm font-semibold text-secondary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
          >
            Book a free strategy call
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </SectionReveal>
    </section>
  )
}
