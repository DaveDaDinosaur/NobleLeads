"use client"

import { SectionReveal } from "@/components/section-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Qualified Leads Generated Monthly",
    description: "Across all client accounts",
  },
  {
    value: 340,
    suffix: "%",
    label: "Avg. Enquiry Increase",
    description: "Within first 90 days",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Automated Lead Capture",
    description: "No missed opportunities",
  },
  {
    value: 4,
    suffix: ".8x",
    label: "Return on Investment",
    description: "Average across all clients",
  },
]

export function StatsSection() {
  return (
    <section
      id="results"
      className="relative py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal direction="scale">
          <div className="relative rounded-2xl border border-border/40 bg-card/20 p-6 sm:p-10 lg:p-16 backdrop-blur-md overflow-hidden">
            {/* Subtle interior glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

            <div className="relative grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center lg:items-start lg:text-left ${
                    i > 0 ? "lg:border-l lg:border-border/20 lg:pl-10" : ""
                  }`}
                >
                  <span className="text-2xl font-bold text-secondary sm:text-3xl lg:text-5xl tabular-nums">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2000 + i * 200}
                    />
                  </span>
                  <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-foreground leading-tight">
                    {stat.label}
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
