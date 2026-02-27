"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollFade, setScrollFade] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.6)))
      setScrollFade(progress)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content fades & parallaxes as you scroll */}
      <div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24 sm:py-28 lg:py-32"
        style={{
          opacity: 1 - scrollFade * 1.3,
          transform: `translateY(${scrollFade * -80}px)`,
          willChange: "transform, opacity",
        }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/20 px-4 py-2 sm:px-5 text-[11px] sm:text-xs font-medium text-muted-foreground backdrop-blur-md animate-fade-in text-center"
            style={{ animationDelay: "200ms" }}
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span className="sm:hidden">UK Growth Agency</span>
            <span className="hidden sm:inline">UK Growth Agency for Property Service Businesses</span>
          </div>

          {/* Main headline */}
          <h1
            className="mt-6 sm:mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[1.08] animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            More Leads. More Jobs.
            <br />
            <span className="text-secondary">More Revenue.</span>
            <br />
            <span className="text-foreground/80">For UK Trades.</span>
          </h1>

          {/* Subheading */}
          <p
            className="mt-4 sm:mt-6 max-w-2xl px-1 text-sm leading-relaxed text-muted-foreground sm:text-base sm:text-lg lg:text-xl animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            We{"'"}re a marketing agency for tradesmen in the UK that builds the systems
            turning your trade skills into consistent enquiries. No Checkatrade
            dependency. No Bark fees. Just a lead machine you own.
          </p>

          {/* CTA buttons */}
          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-fade-in-up w-full max-w-sm sm:max-w-none mx-auto"
            style={{ animationDelay: "800ms" }}
          >
            <Link
              href="/contact"
              className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-4 sm:px-8 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Your Free Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
            </Link>
            <Link
              href="/services"
              className="group min-touch inline-flex items-center justify-center rounded-lg border border-border/40 bg-card/20 px-6 py-4 sm:px-8 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:border-secondary/40 hover:bg-card/40 active:scale-[0.98]"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted-foreground/80 animate-fade-in-up" style={{ animationDelay: "850ms" }}>
            Free 30-minute strategy call · No obligation
          </p>

          {/* Trust indicators - horizontal strip */}
          <div
            className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 animate-fade-in-up"
            style={{ animationDelay: "1000ms" }}
          >
            <div className="flex flex-col items-center min-w-[4rem]">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tabular-nums">97%</span>
              <span className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide text-center">Client Retention</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border/30" />
            <div className="flex flex-col items-center min-w-[4rem]">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tabular-nums">5x</span>
              <span className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide text-center">Avg. ROI</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border/30" />
            <div className="flex flex-col items-center min-w-[4rem]">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tabular-nums">48hr</span>
              <span className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide text-center">System Launch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll prompt */}
      <div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in pb-safe"
        style={{
          animationDelay: "1400ms",
          opacity: 1 - scrollFade * 3,
        }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium">Scroll to explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
