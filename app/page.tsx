"use client"

import { useEffect, useRef, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import dynamic from "next/dynamic"

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
const TimelineSection = dynamic(
  () => import("@/components/home/timeline-section").then((mod) => ({ default: mod.TimelineSection })),
  { ssr: true }
)
const TestimonialsSection = dynamic(
  () => import("@/components/home/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
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

export default function HomePage() {
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
      scrollVelocity.current *= 0.92 // dampen
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
        <div className="relative bg-background/90 backdrop-blur-sm -mt-2 sm:-mt-4">
          <ProblemSection />

          {/* Divider pulse */}
          <div className="relative py-4">
            <div className="mx-auto w-16 h-px bg-secondary/40" />
          </div>

          <SolutionSection />
          <StatsSection />
          <TimelineSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </div>
        <MobileCTABar />
      </main>
    </>
  )
}
