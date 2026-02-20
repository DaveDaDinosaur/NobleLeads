"use client"

import { SectionReveal } from "@/components/section-reveal"
import { Layout, Link2, Rocket } from "lucide-react"

const BUILD_ITEMS = [
  "Conversion-focused website",
  "Service pages structured for enquiries",
  "Forms and tracking installed",
]

const CONNECT_ITEMS = [
  "Enquiries routed correctly",
  "Call tracking configured",
  "Reviews integrated",
  "Follow-up systems connected",
]

const LAUNCH_ITEMS = [
  "Fully tested",
  "Mobile optimised",
  "Ready to bring enquiries",
]

function PhaseCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  items: string[]
}) {
  return (
    <div className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background/80">
          <Icon className="h-5 w-5 text-secondary" />
        </div>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-muted-foreground leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PricingWhySetup() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              The Build Phase
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
              Before anything goes live, we build your system properly.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <PhaseCard icon={Layout} title="Build" items={BUILD_ITEMS} />
            <PhaseCard icon={Link2} title="Connect" items={CONNECT_ITEMS} />
            <PhaseCard icon={Rocket} title="Launch" items={LAUNCH_ITEMS} />
          </div>
          <p className="mt-10 text-center text-sm sm:text-base text-foreground/90 font-medium max-w-2xl mx-auto leading-relaxed">
            The setup investment covers the full build and launch of your enquiry system. Built once — built properly.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
