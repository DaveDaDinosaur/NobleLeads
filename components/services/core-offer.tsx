"use client"

import { SectionReveal } from "@/components/section-reveal"
import {
  Globe,
  Smartphone,
  PenTool,
  FormInput,
  PhoneCall,
  ShieldCheck,
  Star,
  Server,
  Check,
} from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Conversion-Focused Design",
    description:
      "Every element is strategically placed to guide visitors toward one action: contacting you.",
  },
  {
    icon: PenTool,
    title: "Professional Copywriting",
    description:
      "Service-specific copy written to speak directly to your ideal clients and their pain points.",
  },
  {
    icon: FormInput,
    title: "Enquiry Capture Forms",
    description:
      "Strategically placed forms that make it effortless for prospects to get in touch.",
  },
  {
    icon: PhoneCall,
    title: "Click-to-Call Integration",
    description:
      "One-tap calling on mobile devices. Remove every barrier between a visitor and a phone call.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Build",
    description:
      "Over 70% of your visitors are on mobile. We build for them first, then enhance for desktop.",
  },
  {
    icon: Star,
    title: "Review Integration",
    description:
      "Showcase your best Google reviews automatically. Let your existing reputation close the deal.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Compliance",
    description:
      "GDPR-compliant privacy policy, cookie notice, and data handling built in from day one.",
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    description:
      "Ongoing hosting, security updates, and performance monitoring. Your site stays fast and secure.",
  },
]

export function CoreOffer() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Foundation
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Conversion Website Build
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              This is where every client relationship starts. A professionally
              designed, conversion-focused website that turns your online
              presence into a lead-generating asset.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <SectionReveal key={feature.title} delay={i * 60}>
              <div className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-secondary/30 hover:bg-card/80 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                  <feature.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={400}>
          <div className="mt-16 rounded-xl border border-secondary/20 bg-card/60 p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  What This Means For You
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-lg">
                  A website that works as hard as you do. Every page, every
                  button, every word is designed with one outcome in mind.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "More phone calls from your website",
                  "Higher perceived professionalism",
                  "Visitors convert even when you're on site",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
