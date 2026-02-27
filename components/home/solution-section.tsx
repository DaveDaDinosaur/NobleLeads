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
    title: "Conversion-Focused Website",
    description:
      "Built to turn visitors into phone calls and form submissions. Not a brochure—a tool that brings in enquiries.",
  },
  {
    icon: Target,
    title: "Paid Lead Generation",
    description:
      "Ads aimed at prospects actively looking for your services. Every lead tracked and measured.",
  },
  {
    icon: Bot,
    title: "Round-the-Clock Capture",
    description:
      "Enquiries captured and qualified even when you're on the tools. Fewer missed calls and lost leads.",
  },
  {
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description:
      "SMS and email sequences that follow up every lead automatically. Fast response without the manual chase.",
  },
  {
    icon: PhoneCall,
    title: "Call Tracking",
    description:
      "See which leads came from where. Track every call, form and conversion so you know what's working.",
  },
  {
    icon: BarChart3,
    title: "Clear Pipeline Visibility",
    description:
      "A clear view of your leads, conversion and ROI. No black box—you see what you're getting.",
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
                The NobleLeads Growth System
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We don{"'"}t sell one-off websites or ad campaigns. We build a
                three-part system: a website that converts, paid traffic that targets
                your area, and automation that follows up every lead—so you can focus
                on the work.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Step 1:{" "}
                <span className="font-medium text-foreground">
                  Conversion website
                </span>{" "}
                – your trade site built to turn visitors into enquiries. Step 2:{" "}
                <span className="font-medium text-foreground">
                  Targeted traffic
                </span>{" "}
                – Google Ads and local SEO putting you in front of people actively
                searching. Step 3:{" "}
                <span className="font-medium text-foreground">
                  Automation
                </span>{" "}
                – CRM, missed call text-back and follow-up that closes more of the
                leads you{"'"}re already getting.
              </p>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Learn more about each part of the system:{" "}
                <Link
                  href="/services"
                  className="font-semibold text-secondary hover:underline"
                >
                  website design for trades
                </Link>
                ,{" "}
                <Link
                  href="/services"
                  className="font-semibold text-secondary hover:underline"
                >
                  Google Ads for trades
                </Link>{" "}
                and{" "}
                <Link
                  href="/services"
                  className="font-semibold text-secondary hover:underline"
                >
                  CRM &amp; automation for trades
                </Link>
                .
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
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
