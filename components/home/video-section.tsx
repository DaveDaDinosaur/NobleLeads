"use client"

import Link from "next/link"
import { SectionReveal } from "@/components/section-reveal"

export function VideoSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <SectionReveal>
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
              Sound familiar?
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Most tradesmen are brilliant at their trade.
              <br className="hidden sm:block" />
              <span className="text-muted-foreground"> Getting consistent work is the hard part.</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Video */}
        <SectionReveal delay={80}>
          <div className="overflow-hidden rounded-2xl border border-border/30 shadow-2xl shadow-black/40">
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/b89c9a4952ec4c109ce04b5401ada1d2"
                frameBorder="0"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Noble Leads — How It Works"
              />
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal delay={120}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
            >
              Book a Free Discovery Call
            </Link>
            <p className="text-xs text-muted-foreground/70">
              15 minutes · No pressure · Just clarity on what{"'"}s possible
            </p>
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}
