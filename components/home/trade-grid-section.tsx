import Link from "next/link"
import {
  Sparkles,
  Droplets,
  Building2,
  HardHat,
  TreePine,
  Flame,
  Paintbrush,
  ShowerHead,
  Zap,
  Shield,
  FileCheck2,
  FileText,
} from "lucide-react"

import { SectionReveal } from "@/components/section-reveal"

const trades = [
  {
    name: "Window Cleaners",
    benefit: "Get more window cleaning clients",
    href: "/window-cleaners",
    icon: Droplets,
  },
  {
    name: "House Cleaning Companies",
    benefit: "Get more regular cleaning contracts",
    href: "/house-cleaning-companies",
    icon: Sparkles,
  },
  {
    name: "Commercial Cleaners",
    benefit: "Win higher-value commercial cleaning work",
    href: "/commercial-cleaning-marketing",
    icon: Building2,
  },
  {
    name: "Roofers",
    benefit: "Fill your roofing schedule with good jobs",
    href: "/roofers",
    icon: HardHat,
  },
  {
    name: "Landscapers",
    benefit: "Smooth out the seasonal ups and downs",
    href: "/landscaping-marketing",
    icon: TreePine,
  },
  {
    name: "Driveway Contractors",
    benefit: "Generate more paving and driveway projects",
    href: "/driveway-contractors",
    icon: Flame,
  },
  {
    name: "Painters & Decorators",
    benefit: "Book more interior and exterior projects",
    href: "/painters-decorators",
    icon: Paintbrush,
  },
  {
    name: "Pressure Washing",
    benefit: "Monetise every high-margin exterior clean",
    href: "/pressure-washing-marketing",
    icon: ShowerHead,
  },
  {
    name: "Plumbers",
    benefit: "Be the first plumber prospects call",
    href: "/plumbing-marketing",
    icon: Shield,
  },
  {
    name: "Electricians",
    benefit: "Win more urgent and project work",
    href: "/electrical-contractors",
    icon: Zap,
  },
  {
    name: "Facilities Management",
    benefit: "Position for long-term FM contracts",
    href: "/facilities-management",
    icon: FileCheck2,
  },
  {
    name: "Tender Support",
    benefit: "Get tender-ready and win bigger work",
    href: "/tender-services",
    icon: FileText,
  },
]

export function TradeGridSection() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl">
              We Specialise In Your Trade
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
              NobleLeads works exclusively with UK property service businesses. Pick
              your trade to see how we turn your skills into a lead system you own.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trades.map((trade) => {
            const Icon = trade.icon
            return (
              <SectionReveal key={trade.href} direction="scale" delay={50}>
                <Link
                  href={trade.href}
                  className="group flex h-full flex-col justify-between rounded-xl border border-border/40 bg-card/40 p-5 sm:p-6 text-left transition-all duration-300 hover:border-secondary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-secondary/10"
                >
                  <div>
                    <div className="inline-flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                        <Icon className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/80">
                        {trade.name}
                      </p>
                    </div>
                    <p className="mt-3 text-sm font-medium text-foreground">
                      {trade.benefit}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold text-secondary group-hover:translate-x-0.5 transition-transform">
                    View trade page
                    <span aria-hidden className="ml-1">
                      →
                    </span>
                  </span>
                </Link>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

