"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { PhoneCall, Search, Wrench, Rocket } from "lucide-react"

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Strategy Call",
    description:
      "We diagnose your current lead flow, identify the gaps, and map out exactly what needs to happen to create predictable revenue.",
  },
  {
    icon: Search,
    number: "02",
    title: "System Build",
    description:
      "We install your custom growth system: website, ads, automation, CRM pipeline, tracking, and follow-up sequences.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Launch & Optimise",
    description:
      "Your system goes live. We monitor performance daily, optimise relentlessly, and ensure every lead is captured and followed up.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Scale & Grow",
    description:
      "As results compound, we scale what works. More budget into winning campaigns. More automation. More contracts.",
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-14 sm:py-16 lg:py-22"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.06}>
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80 border-b border-secondary/20 pb-2">
                How It Works
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
                From first call to{" "}
                <span className="text-secondary">full pipeline.</span>
              </h2>
            </div>
          </SectionReveal>
        </ParallaxSection>

        {/* Timeline layout */}
        <div className="mt-12 sm:mt-20 relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/30 via-border/30 to-transparent" />

          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <SectionReveal
                  key={step.title}
                  delay={i * 150}
                  direction={isLeft ? "left" : "right"}
                >
                  <div className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${isLeft ? "" : "lg:flex-row-reverse"}`}>
                    {/* Content card */}
                    <div className={`flex-1 ${isLeft ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                      <div className="inline-flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-bold text-secondary/60 tabular-nums">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
                        {step.description}
                      </p>
                    </div>

                    {/* Center node */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl border border-secondary/30 bg-card/50 backdrop-blur-md shadow-lg shadow-secondary/5">
                      <step.icon className="h-6 w-6 text-secondary" />
                    </div>

                    {/* Spacer for the other side */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
