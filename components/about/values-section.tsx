"use client"

import { SectionReveal } from "@/components/section-reveal"
import { Crown, Target, Handshake, Brain, Gauge, Eye } from "lucide-react"

const values = [
  {
    icon: Crown,
    title: "Premium, Not Corporate",
    description:
      "We position ourselves above freelancers and below large agencies. Premium service, accessible pricing, personal attention.",
  },
  {
    icon: Target,
    title: "Results-Obsessed",
    description:
      "Every decision is filtered through one question: does this generate more enquiries and revenue for our clients?",
  },
  {
    icon: Handshake,
    title: "Integrity First",
    description:
      "We maintain pricing integrity. We don't discount. We don't compete on price. We compete on results and specialisation.",
  },
  {
    icon: Brain,
    title: "Strategic Thinking",
    description:
      "We think like business owners, not marketers. Every recommendation is grounded in commercial reality and ROI.",
  },
  {
    icon: Gauge,
    title: "Speed & Efficiency",
    description:
      "We move fast. Systems can be live within 48 hours. We value momentum because your business can't afford to wait.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description:
      "You see every metric. Every lead. Every penny spent. No hidden dashboards. No vanity metrics. Just clarity.",
  },
]

export function ValuesSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              What we stand for.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <SectionReveal key={value.title} delay={i * 80}>
              <div className="group flex flex-col items-center text-center rounded-xl border border-border/40 bg-card/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-secondary/30 hover:bg-card/60 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted">
                  <value.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
