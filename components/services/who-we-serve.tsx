"use client"

import { SectionReveal } from "@/components/section-reveal"
import {
  Wrench,
  Flame,
  Zap,
  Paintbrush,
  TreePine,
  ShowerHead,
  Shield,
  Building2,
  HardHat,
  Sparkles,
} from "lucide-react"

const trades = [
  { icon: Sparkles, name: "Commercial Cleaners" },
  { icon: Shield, name: "Fire & Security" },
  { icon: Zap, name: "Electricians" },
  { icon: Building2, name: "Facilities Maintenance" },
  { icon: HardHat, name: "Roofers" },
  { icon: Paintbrush, name: "Painters & Decorators" },
  { icon: TreePine, name: "Landscapers" },
  { icon: ShowerHead, name: "Plumbers & Heating" },
  { icon: Wrench, name: "General Builders" },
  { icon: Flame, name: "Driveway & Paving" },
]

function TradeCard({
  icon: Icon,
  name,
}: {
  icon: React.ComponentType<{ className?: string }>
  name: string
}) {
  return (
    <div className="group flex flex-shrink-0 w-[160px] sm:w-[180px] flex flex-col items-center gap-3 rounded-xl border border-border/40 bg-card/40 px-5 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-secondary/30 hover:bg-card/70 hover:shadow-lg hover:shadow-secondary/5">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
        <Icon className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:scale-110" />
      </div>
      <span className="text-xs font-semibold text-foreground/80 leading-tight">
        {name}
      </span>
    </div>
  )
}

export function WhoWeServe() {
  const duplicated = [...trades, ...trades]

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Industries
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
              Built for{" "}
              <span className="text-secondary">property services.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              We don&apos;t work with everyone. We specialise in UK property
              service businesses because we understand the market, the
              clients, and the revenue model.
            </p>
          </div>
        </SectionReveal>

        {/* Looping carousel */}
        <div className="mt-10 sm:mt-14 relative w-full min-w-0">
          <div className="w-full min-w-0 overflow-hidden mask-fade-both">
            <div className="flex w-max gap-4 carousel-scroll-loop">
              {duplicated.map((trade, i) => (
                <TradeCard key={`${trade.name}-${i}`} icon={trade.icon} name={trade.name} />
              ))}
            </div>
          </div>
        </div>

        <SectionReveal delay={200}>
          <div className="mt-12 sm:mt-14 rounded-xl border border-border/30 bg-card/30 p-6 sm:p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t see your trade listed? If you&apos;re a UK property service business
              with strong reviews and ambition to grow,{" "}
              <span className="text-secondary font-medium">
                we want to hear from you.
              </span>
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
