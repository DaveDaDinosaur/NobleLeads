"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useMouseParallax } from "@/hooks/use-mouse-parallax"

const PARALLAX_FACTOR = 18

export function AboutCTA() {
  const mouse = useMouseParallax()

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden border-t border-border/40">
      {/* Orbs sit behind this section only — scroll with the section */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-muted/40" />
        <div className="absolute inset-0 about-orb-parallax-wrapper overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 w-[480px] h-[480px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `translate(calc(-50% + ${mouse.x * PARALLAX_FACTOR}px), calc(-50% + ${mouse.y * PARALLAX_FACTOR * 0.8}px))`,
            }}
          >
            <div
              className="about-cta-orb w-full h-full rounded-full blur-[110px]"
              style={{
                background: "radial-gradient(circle, hsl(42 45% 60% / 0.35) 0%, transparent 70%)",
              }}
            />
          </div>
          <div
            className="absolute bottom-0 right-1/4 w-[320px] h-[320px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `translate(${mouse.x * -PARALLAX_FACTOR * 0.7}px, ${mouse.y * PARALLAX_FACTOR * 0.5}px)`,
            }}
          >
            <div
              className="about-cta-orb w-full h-full rounded-full blur-[90px]"
              style={{
                animationDelay: "-9s",
                background: "radial-gradient(circle, hsl(215 40% 30% / 0.2) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
            Growth Shouldn&apos;t Be Accidental.
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            The best trade businesses run on structured systems that generate
            enquiries consistently—not referrals and hope. Ready to operate at
            that level? Let&apos;s talk.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
            >
              Book a Strategy Call
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No pressure. We focus on clarity and next steps.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
