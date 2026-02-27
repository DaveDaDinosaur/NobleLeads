"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SocialProofBar } from "@/components/home/social-proof-bar"
import { TradeGridSection } from "@/components/home/trade-grid-section"
import { HomePricingSection } from "@/components/home/home-pricing-section"
import { HomeFAQSection } from "@/components/home/faq-section"

const HeroScene = dynamic(
  () => import("@/components/hero-scene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
)

const ProblemSection = dynamic(
  () => import("@/components/home/problem-section").then((mod) => ({ default: mod.ProblemSection })),
  { ssr: true }
)
const SolutionSection = dynamic(
  () => import("@/components/home/solution-section").then((mod) => ({ default: mod.SolutionSection })),
  { ssr: true }
)
const StatsSection = dynamic(
  () => import("@/components/home/stats-section").then((mod) => ({ default: mod.StatsSection })),
  { ssr: true }
)
const TestimonialsSection = dynamic(
  () =>
    import("@/components/home/testimonials-section").then((mod) => ({
      default: mod.TestimonialsSection,
    })),
  { ssr: true }
)
const CTASection = dynamic(
  () => import("@/components/home/cta-section").then((mod) => ({ default: mod.CTASection })),
  { ssr: true }
)
const MobileCTABar = dynamic(
  () => import("@/components/home/mobile-cta-bar").then((mod) => ({ default: mod.MobileCTABar })),
  { ssr: true }
)

export function HomePageClient() {
  const [showHeroScene, setShowHeroScene] = useState(false)

  useEffect(() => {
    // Defer heavy 3D hero until the browser is idle or a short delay has passed
    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(
        () => setShowHeroScene(true),
        { timeout: 1500 }
      )
      return () => (window as any).cancelIdleCallback?.(id)
    }

    const t = window.setTimeout(() => setShowHeroScene(true), 1200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      {/* Deferred 3D background so LCP (hero text) isn't blocked by Three.js */}
      {showHeroScene && <HeroScene />}

      <main className="relative z-10">
        <Navigation />
        <HeroSection />
        <SocialProofBar />
        {/* Slightly translucent section background so 3D globes can show through edges */}
        <div className="relative -mt-2 bg-background/80 sm:-mt-4">
          <ProblemSection />

          {/* Divider pulse */}
          <div className="relative py-4">
            <div className="mx-auto h-px w-16 bg-secondary/40" />
          </div>

          <SolutionSection />
          <TradeGridSection />
          <HomePricingSection />
          <StatsSection />
          <TestimonialsSection />
          <HomeFAQSection />
          <CTASection />
          <Footer />
        </div>
        <MobileCTABar />
      </main>
    </>
  )
}

