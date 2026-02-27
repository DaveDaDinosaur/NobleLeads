"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AlertTriangle, Clock, TrendingDown, UserX } from "lucide-react"

const problems = [
  {
    icon: UserX,
    title: "Relying on Referrals",
    description:
      "Your pipeline is unpredictable. Feast or famine months make it impossible to plan, hire, or grow with confidence.",
    stat: "73%",
    statLabel: "of trades rely solely on word-of-mouth",
  },
  {
    icon: TrendingDown,
    title: "Invisible Online",
    description:
      "Competitors with worse reviews and lower quality work are winning contracts because they show up where you don't.",
    stat: "88%",
    statLabel: "of buyers search online first",
  },
  {
    icon: Clock,
    title: "Manual Follow-Up",
    description:
      "Every missed call, slow reply, and forgotten lead is revenue walking out the door. You don't have time to chase every enquiry.",
    stat: "5min",
    statLabel: "response window before leads go cold",
  },
  {
    icon: AlertTriangle,
    title: "No Conversion System",
    description:
      "Your website (if you have one) is a digital brochure. It doesn't persuade, capture, or convert visitors into paying clients.",
    stat: "2.3%",
    statLabel: "avg. trade website conversion rate",
  },
]

export function ProblemSection() {
  return (
    <section
      id="reality"
      className="relative py-14 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.08}>
          <SectionReveal>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80 border-b border-secondary/20 pb-2">
                The Reality
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl">
                You{"'"}re Great at Your Trade.{" "}
                <span className="text-muted-foreground">
                  Getting Clients Shouldn{"'"}t Be This Hard.
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground max-w-lg">
                Most trade businesses we work with share the same gap: strong work,
                proven results, loyal clients—but no system to consistently attract
                new enquiries.
              </p>
            </div>
          </SectionReveal>
        </ParallaxSection>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2">
          {problems.map((problem, i) => (
            <SectionReveal
              key={problem.title}
              delay={i * 120}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className="group relative rounded-xl border border-border/40 bg-card/30 p-6 sm:p-8 lg:p-10 backdrop-blur-sm transition-all duration-500 hover:border-secondary/30 hover:bg-card/60 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted/80 border border-border/30">
                    <problem.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-secondary/80">{problem.stat}</span>
                    <span className="block text-[10px] text-muted-foreground max-w-[120px] leading-tight">{problem.statLabel}</span>
                  </div>
                </div>

                <h3 className="relative mt-6 text-lg font-semibold text-foreground">
                  {problem.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
