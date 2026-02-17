"use client"

import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"
import {
  Globe,
  LayoutDashboard,
  MessageSquare,
  Award,
  Building2,
  TrendingUp,
  ArrowRight,
  Check,
} from "lucide-react"

const SECTIONS = [
  {
    id: "attract",
    title: "Attract",
    subtitle: "Get found and get clicked",
    icon: Globe,
    color: "secondary",
    services: [
      {
        title: "Conversion Website System",
        description:
          "A high-converting, mobile-first website designed specifically for property service businesses to generate consistent enquiries.",
      },
      {
        title: "Local SEO & Visibility Setup",
        description:
          "Optimised site structure, service pages and local targeting to improve Google visibility.",
      },
      {
        title: "Ongoing SEO & Content Expansion",
        description:
          "Monthly service pages, location pages and content updates to increase long-term search presence.",
      },
    ],
  },
  {
    id: "capture",
    title: "Capture",
    subtitle: "Never miss an enquiry",
    icon: LayoutDashboard,
    color: "secondary",
    services: [
      {
        title: "CRM & Pipeline System",
        description:
          "A custom lead tracking system to manage enquiries, quotes and closed jobs in one place.",
      },
      {
        title: "Instant Lead Alert System",
        description:
          "Automated SMS and email notifications when new enquiries are submitted.",
      },
      {
        title: "Booking & Appointment System",
        description:
          "Integrated calendar system with confirmations and reminders to reduce no-shows.",
      },
    ],
  },
  {
    id: "convert",
    title: "Convert",
    subtitle: "Turn quotes into contracts",
    icon: MessageSquare,
    color: "secondary",
    services: [
      {
        title: "Quote Follow-Up Automation",
        description:
          "Automated reminders and follow-up messages to increase quote acceptance rates.",
      },
      {
        title: "Customer Reactivation Campaigns",
        description:
          "Targeted SMS and email campaigns to generate new work from past customers.",
      },
      {
        title: "Review & Reputation Growth System",
        description:
          "Automated review requests and structured reputation management to increase trust and rankings.",
      },
    ],
  },
  {
    id: "authority",
    title: "Authority",
    subtitle: "Build trust and credibility",
    icon: Award,
    color: "secondary",
    services: [
      {
        title: "Social Authority Pack",
        description:
          "Branded social media templates and content assets to strengthen online credibility.",
      },
      {
        title: "Capability & Authority Build",
        description:
          "Structured website sections showcasing accreditations, insurance, compliance and case studies.",
      },
      {
        title: "Company Profile & Documentation Pack",
        description:
          "Professional capability statement and tender-ready documentation templates.",
      },
    ],
  },
  {
    id: "contract-growth",
    title: "Contract Growth",
    subtitle: "Win commercial and council work",
    icon: Building2,
    color: "secondary",
    services: [
      {
        title: "Tender-Ready Digital Infrastructure",
        description:
          "Website and documentation structured specifically to support commercial and council contract applications.",
      },
      {
        title: "Contract Opportunity Monitoring",
        description:
          "Ongoing monitoring of relevant tender opportunities delivered directly to the client.",
      },
      {
        title: "Tender Tracking CRM",
        description:
          "Pipeline system to manage contract opportunities, submissions and follow-ups.",
      },
    ],
  },
  {
    id: "growth-management",
    title: "Growth Management",
    subtitle: "Scale with clarity and control",
    icon: TrendingUp,
    color: "secondary",
    services: [
      {
        title: "Automation & Workflow Setup",
        description:
          "Custom automation to streamline enquiries, follow-ups and internal processes.",
      },
      {
        title: "Performance Dashboard & Reporting",
        description:
          "Clear reporting on leads, pipeline value, conversion rates and growth metrics.",
      },
      {
        title: "Ongoing Growth Management",
        description:
          "Continuous optimisation of systems, automation and digital presence to support long-term scaling.",
      },
    ],
  },
] as const

export function ServiceSections() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro + value prop */}
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80 border-b border-secondary/20 pb-2">
              What we offer
            </span>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              One system, six pillars.{" "}
              <span className="text-secondary">Build what you need.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              We don&apos;t sell one-size-fits-all packages. You choose the modules that match your stage—from first website to full growth engine and contract tenders.
            </p>
            <p className="mt-2 text-xs text-muted-foreground/80">
              <span className="hidden lg:inline">Scroll to explore—the guide on the left tracks your journey through each pillar.</span>
              <span className="lg:hidden">Scroll to explore—your progress through the pillars is shown as you go.</span>
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-14 sm:space-y-16 lg:space-y-20">
          {SECTIONS.map((block, blockIndex) => {
            const Icon = block.icon
            const globalIndex = blockIndex * 3
            return (
              <SectionReveal key={block.id} delay={blockIndex * 80}>
                <div id={block.id} className="scroll-mt-24">
                  {/* Section header */}
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl border-2 border-secondary/40 bg-secondary/10">
                        <Icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                          {block.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                          {block.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-secondary/60 uppercase tracking-wider">
                      {globalIndex + 1}–{globalIndex + block.services.length} of 18
                    </span>
                  </div>

                  {/* Service cards */}
                  <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
                    {block.services.map((service, i) => (
                      <SectionReveal
                        key={service.title}
                        delay={blockIndex * 80 + i * 50}
                        direction="up"
                      >
                        <div className="group h-full rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:border-secondary/30 hover:bg-card/60">
                          <span className="text-[10px] font-mono font-bold text-secondary/60 tabular-nums">
                            {String(globalIndex + i + 1).padStart(2, "0")}
                          </span>
                          <h4 className="mt-2 text-base font-semibold text-foreground group-hover:text-secondary transition-colors">
                            {service.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </SectionReveal>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>

        {/* Mid-page CTA: after all sections, before WhoWeServe */}
        <SectionReveal delay={200}>
          <div className="mt-16 sm:mt-20 rounded-2xl border border-secondary/25 bg-card/30 backdrop-blur-sm p-8 sm:p-10 lg:p-12 text-center">
            <p className="text-sm font-medium text-secondary/90">
              Not sure which modules you need?
            </p>
            <h3 className="mt-2 text-xl sm:text-2xl font-bold text-foreground">
              Book a strategy call. We&apos;ll map your gaps and recommend the right build.
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-secondary" />
                No obligation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-secondary" />
                30-minute call
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-secondary" />
                UK property services specialist
              </span>
            </div>
            <Link
              href="/contact"
              className="mt-6 min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
            >
              Book Your Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
