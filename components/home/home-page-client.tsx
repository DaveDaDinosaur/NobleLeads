"use client"

import { useCallback, useEffect, useRef } from "react"
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
  const lastScrollY = useRef(0)
  const scrollVelocity = useRef(0)
  const scrollStateRef = useRef<typeof import("@/components/hero-scene").scrollState | null>(null)

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = Math.min(scrollY / Math.max(docHeight, 1), 1)
    scrollVelocity.current = (scrollY - lastScrollY.current) * 0.01
    lastScrollY.current = scrollY

    if (scrollStateRef.current) {
      scrollStateRef.current.progress = progress
      scrollStateRef.current.velocity = scrollVelocity.current
      return
    }

    import("@/components/hero-scene").then((mod) => {
      scrollStateRef.current = mod.scrollState
      mod.scrollState.progress = progress
      mod.scrollState.velocity = scrollVelocity.current
    })
  }, [])

  useEffect(() => {
    let raf: number
    const tick = () => {
      scrollVelocity.current *= 0.92
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(raf)
    }
  }, [handleScroll])

  return (
    <>
      {/* Persistent 3D background that reacts to scroll */}
      <HeroScene />

      <main className="relative z-10">
        <Navigation />
        <HeroSection />
        <SocialProofBar />
        <div className="relative -mt-2 bg-background/90 backdrop-blur-sm sm:-mt-4">
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

