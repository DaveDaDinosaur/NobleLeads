"use client"

import { SectionReveal } from "@/components/section-reveal"
import { Phone, Zap, Star, BarChart3 } from "lucide-react"

const OUTCOMES = [
  {
    icon: Phone,
    title: "More Calls",
    description: "Your website and campaigns are built to turn visitors into real enquiries.",
  },
  {
    icon: Zap,
    title: "Faster Follow-Up",
    description: "Missed call texts and automated follow-ups mean fewer lost leads.",
  },
  {
    icon: Star,
    title: "Stronger Credibility",
    description: "Your reviews are presented properly so customers trust you before they call.",
  },
  {
    icon: BarChart3,
    title: "Clear Visibility",
    description: "You can see where enquiries come from and what's working.",
  },
]

export function PricingWhatYouGet() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl text-center">
            What This Actually Does For Your Business
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OUTCOMES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-5 sm:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background/80 mb-4">
                  <Icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you&apos;re serious about consistent enquiries instead of relying on word of mouth, this is the system that makes it happen.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
