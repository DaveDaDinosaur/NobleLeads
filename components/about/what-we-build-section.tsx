"use client"

import { SectionReveal } from "@/components/section-reveal"
import { MapPin, Layout, Zap, Shield, BarChart3, FileCheck } from "lucide-react"

const blocks = [
  {
    icon: MapPin,
    title: "Positioning Systems",
    description:
      "Clear market positioning that makes you the obvious choice in your area.",
  },
  {
    icon: Layout,
    title: "Conversion Infrastructure",
    description:
      "Websites and landing environments built to turn traffic into booked work.",
  },
  {
    icon: Zap,
    title: "Lead Generation Engines",
    description:
      "Scalable acquisition that creates demand when you need it — not just when referrals happen.",
  },
  {
    icon: Shield,
    title: "Authority Assets",
    description:
      "Review integration, trust signals and presence that reinforce your reputation.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description:
      "Reporting tied to commercial metrics — not vanity numbers.",
  },
  {
    icon: FileCheck,
    title: "Tender-Ready Infrastructure",
    description:
      "Capability statements, policy frameworks and structured response templates built to support successful commercial contract applications.",
  },
]

export function WhatWeBuildSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-muted/10" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              What We Build
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground">
              Digital systems for measurable revenue growth.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block, i) => {
            const Icon = block.icon
            return (
              <SectionReveal key={block.title} delay={i * 50}>
                <div className="rounded-xl border border-border/50 bg-card/40 p-6 sm:p-8 h-full transition-all duration-200 hover:border-secondary/30 hover:bg-card/50 hover:shadow-lg hover:shadow-black/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 border border-secondary/20 mb-4">
                    <Icon className="h-5 w-5 text-secondary" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {block.description}
                  </p>
                </div>
              </SectionReveal>
            )
          })}
        </div>

        <SectionReveal delay={280}>
          <p className="mt-10 text-center text-sm font-medium text-foreground/90 max-w-xl mx-auto">
            Everything we deploy is measured against one outcome: sustainable
            revenue growth.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
