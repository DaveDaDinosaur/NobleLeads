"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import {
  Globe,
  Target,
  Bot,
  BarChart3,
  MessageSquare,
  PhoneCall,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const systemParts = [
  {
    icon: Globe,
    title: "High-Converting Website",
    description:
      "Not a brochure. A conversion engine built to turn visitors into phone calls and form submissions.",
  },
  {
    icon: Target,
    title: "Targeted Advertising",
    description:
      "Google Ads targeting high-intent commercial keywords. Every penny tracked, every lead measured.",
  },
  {
    icon: Bot,
    title: "AI Enquiry Capture",
    description:
      "An intelligent chatbot that qualifies and captures leads 24/7. No missed opportunities.",
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description:
      "SMS and email sequences that nurture every lead automatically. Instant responses. Zero manual effort.",
  },
  {
    icon: PhoneCall,
    title: "Call Tracking",
    description:
      "Know exactly which leads came from where. Track every call, every form, every conversion.",
  },
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    description:
      "Real-time visibility into your lead pipeline. Cost per lead, conversion rates, ROI. Complete clarity.",
  },
]

export function SolutionSection() {
  return (
    <section
      id="system"
      className="relative py-14 sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ParallaxSection speed={0.06}>
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80 border-b border-secondary/20 pb-2">
                The System
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
                One system. Every enquiry captured.{" "}
                <span className="text-secondary">Every lead converted.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We don{"'"}t sell websites, ads, or marketing packages. We install a
                complete commercial enquiry acquisition system that works while
                you work.
              </p>
            </div>
          </SectionReveal>
        </ParallaxSection>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systemParts.map((part, i) => (
            <SectionReveal key={part.title} delay={i * 100} direction="scale">
              <div className="group relative rounded-xl border border-border/40 bg-card/30 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:border-secondary/30 hover:bg-card/60 h-full">
                {/* Number + icon row */}
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/40 border border-border/30 transition-all duration-300 group-hover:bg-primary/60 group-hover:border-secondary/30">
                    <part.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-xs font-mono text-secondary/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground group-hover:text-secondary transition-colors duration-300">
                  {part.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {part.description}
                </p>

                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-px h-0 bg-secondary/40 group-hover:h-full transition-all duration-700" />
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={600}>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg border border-secondary/30 bg-secondary/5 px-6 py-3.5 text-sm font-semibold text-secondary backdrop-blur-sm transition-all duration-300 hover:bg-secondary/10 hover:border-secondary/50 active:scale-[0.98]"
            >
              See full service breakdown
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
