"use client"

import { SectionReveal } from "@/components/section-reveal"
import {
  Target,
  BarChart3,
  Bot,
  Zap,
  TrendingUp,
  Settings,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const growthServices = [
  {
    icon: Target,
    title: "Lead Generation Systems",
    description:
      "Google Ads, landing pages, and conversion funnels targeting high-intent commercial keywords in your service area.",
    outcomes: [
      "Predictable monthly enquiries",
      "Measured cost per lead",
      "Only high-intent traffic",
    ],
  },
  {
    icon: Bot,
    title: "AI Chatbot & Automation",
    description:
      "24/7 intelligent enquiry capture with automated SMS and email follow-up sequences. No lead goes cold.",
    outcomes: [
      "Instant lead response",
      "Automated qualification",
      "Zero missed opportunities",
    ],
  },
  {
    icon: BarChart3,
    title: "CRM & Pipeline Management",
    description:
      "A visual pipeline to track every enquiry from first contact to signed contract. Complete visibility.",
    outcomes: [
      "Every lead tracked",
      "Clear conversion data",
      "Structured follow-up process",
    ],
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimisation",
    description:
      "Ongoing testing, refinement, and improvement of every touchpoint to increase your lead-to-contract rate.",
    outcomes: [
      "Higher close rates",
      "Improved user experience",
      "Data-driven decisions",
    ],
  },
  {
    icon: Settings,
    title: "Business Process Automation",
    description:
      "Streamline your enquiry handling, quoting, and follow-up. Less admin, more time on revenue-generating work.",
    outcomes: [
      "Reduced manual admin",
      "Faster quote turnaround",
      "Consistent client experience",
    ],
  },
  {
    icon: Zap,
    title: "Monthly Optimisation & Reporting",
    description:
      "Proactive performance management. We don't set and forget. Every month we optimise, report, and strategise.",
    outcomes: [
      "Monthly performance reports",
      "Continuous improvement",
      "Strategic growth planning",
    ],
  },
]

export function GrowthPackages() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-navy-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Growth Systems
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Scale beyond the{" "}
              <span className="text-secondary">website.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The website is your foundation. These growth services are how we
              turn that foundation into a predictable, scalable revenue engine.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {growthServices.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 100}>
              <div className="group flex flex-col h-full rounded-xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-secondary/30 hover:bg-card/70">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/40 flex-shrink-0">
                    <service.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-border/30 flex flex-wrap gap-3">
                  {service.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="inline-flex items-center rounded-full bg-muted/80 px-3 py-1 text-xs font-medium text-foreground/70"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={600}>
          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold/20 active:scale-[0.98]"
            >
              Discuss Your Growth Plan
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
