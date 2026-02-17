"use client"

import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"
import { PILLARS } from "@/lib/services-data"
import { ArrowRight, Check } from "lucide-react"

export function PillarSections() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <p className="text-sm font-medium text-secondary uppercase tracking-wider">
            What we deliver
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Every Pillar, Every Service
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Clear outcomes and the exact systems we implement so you know what you&apos;re investing in.
          </p>
        </SectionReveal>
        <div className="mt-12 space-y-8 sm:space-y-10">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <SectionReveal key={pillar.id} delay={i * 40}>
                <article
                  id={pillar.id}
                  className="scroll-mt-24 rounded-xl border border-border/60 bg-card/40 overflow-hidden transition-colors hover:border-border/80"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Accent + header */}
                    <div className="lg:col-span-12 flex flex-col sm:flex-row sm:items-center gap-4 p-6 sm:p-8 border-b border-border/50">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/25 flex-shrink-0">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {pillar.heading}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {pillar.problem}
                        </p>
                      </div>
                    </div>
                    {/* What we implement + outcome */}
                    <div className="lg:col-span-12 p-6 sm:p-8 pt-0 sm:pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="md:col-span-2">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary/90 mb-3">
                            What We Implement
                          </h4>
                          <ul className="space-y-3">
                            {pillar.services.map((service) => (
                              <li key={service.title} className="flex gap-3">
                                <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                                <div>
                                  <span className="text-sm font-medium text-foreground">
                                    {service.title}
                                  </span>
                                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="md:col-span-1">
                          <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-4 h-full">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary/90 mb-2">
                              Outcome
                            </h4>
                            <p className="text-sm font-semibold text-foreground leading-snug">
                              {pillar.outcome}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="mt-6 min-touch inline-flex items-center gap-2 rounded-lg border border-secondary/40 bg-secondary/5 px-4 py-2.5 text-sm font-semibold text-secondary transition-colors duration-200 hover:bg-secondary/10 hover:border-secondary/50"
                      >
                        See How This Applies To Your Business
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
