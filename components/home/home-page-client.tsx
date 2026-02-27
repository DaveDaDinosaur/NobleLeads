"use client"

import { useCallback, useEffect, useRef, useState } from "react"
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
  const scrollProgress = useRef(0)
  const scrollStateRef = useRef<typeof import("@/components/hero-scene").scrollState | null>(null)
  const [heroActivated, setHeroActivated] = useState(false)
  const [showHeroScene, setShowHeroScene] = useState(false)

  useEffect(() => {
    // Activate hero immediately on touch / coarse pointer devices (mobile, tablets)
    const mq = window.matchMedia("(pointer: fine)")
    if (!mq.matches) {
      setHeroActivated(true)
      return
    }

    // On desktop, only activate once the user interacts (scroll or mouse move)
    const activate = () => {
      setHeroActivated(true)
      window.removeEventListener("scroll", activate)
      window.removeEventListener("mousemove", activate)
    }

    window.addEventListener("scroll", activate, { passive: true })
    window.addEventListener("mousemove", activate)

    return () => {
      window.removeEventListener("scroll", activate)
      window.removeEventListener("mousemove", activate)
    }
  }, [])

  useEffect(() => {
    if (!heroActivated) return

    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(
        () => setShowHeroScene(true),
        { timeout: 1500 }
      )
      return () => (window as any).cancelIdleCallback?.(id)
    }

    const t = window.setTimeout(() => setShowHeroScene(true), 1200)
    return () => window.clearTimeout(t)
  }, [heroActivated])

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const rawProgress = Math.min(scrollY / Math.max(docHeight, 1), 1)
    // Smooth progress to avoid jittery camera/orb movement
    const current = scrollProgress.current
    const smoothed = current + (rawProgress - current) * 0.18
    scrollProgress.current = smoothed

    scrollVelocity.current = (scrollY - lastScrollY.current) * 0.01
    lastScrollY.current = scrollY

    if (scrollStateRef.current) {
      scrollStateRef.current.progress = smoothed
      scrollStateRef.current.velocity = scrollVelocity.current
      return
    }

    if (!heroActivated) return

    import("@/components/hero-scene")
      .then((mod) => {
        scrollStateRef.current = mod.scrollState
        mod.scrollState.progress = smoothed
        mod.scrollState.velocity = scrollVelocity.current
      })
      .catch(() => {
        // ignore dynamic import errors on scroll
      })
  }, [heroActivated])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

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

