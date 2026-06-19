"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Script from "next/script"

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
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(
        () => setShowHeroScene(true),
        { timeout: 1500 }
      )
      return () => window.cancelIdleCallback(id)
    }

    const t = setTimeout(() => setShowHeroScene(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
      {/* Deferred 3D background so LCP (hero text) isn't blocked by Three.js */}
      {showHeroScene && <HeroScene />}

      <main className="relative z-10">
        <Navigation />
        <HeroSection />
        <SocialProofBar />
        {/* Slightly translucent section background so 3D globes can show through edges */}
        <div className="relative -mt-2 bg-background/80 sm:-mt-4">
          {/* Spokesperson video */}
          <section className="py-10 sm:py-14">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/1202920123?badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title="Noble Leads — How It Works"
                />
              </div>
            </div>
          </section>

          {/* Divider pulse */}
          <div className="relative py-4">
            <div className="mx-auto h-px w-16 bg-secondary/40" />
          </div>

          <ProblemSection />
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

