"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useMouseParallax } from "@/hooks/use-mouse-parallax"

const PARALLAX_FACTOR = 24

export function PricingHero() {
  const mouse = useMouseParallax()
  const sectionRef = useRef<HTMLElement>(null)
  const [orbsVisible, setOrbsVisible] = useState(true)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => setOrbsVisible(e.isIntersecting),
      { threshold: 0.1, rootMargin: "0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: orbsVisible ? 1 : 0 }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 about-orb-parallax-wrapper">
          <div
            className="absolute -top-20 -right-20 w-[560px] h-[560px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `translate(${mouse.x * PARALLAX_FACTOR}px, ${mouse.y * PARALLAX_FACTOR * 0.7}px)`,
            }}
          >
            <div
              className="about-hero-orb w-full h-full rounded-full blur-[100px]"
              style={{
                background: "radial-gradient(circle, hsl(215 52% 35% / 0.5) 0%, transparent 70%)",
              }}
            />
          </div>
          <div
            className="absolute bottom-1/5 -left-20 w-[440px] h-[440px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `translate(${mouse.x * -PARALLAX_FACTOR * 0.8}px, ${mouse.y * -PARALLAX_FACTOR * 0.6}px)`,
            }}
          >
            <div
              className="about-hero-orb w-full h-full rounded-full blur-[95px]"
              style={{
                animationDelay: "-7s",
                background: "radial-gradient(circle, hsl(42 45% 60% / 0.4) 0%, transparent 70%)",
              }}
            />
          </div>
          <div
            className="absolute top-1/2 left-1/2 w-[360px] h-[360px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `translate(calc(-50% + ${mouse.x * PARALLAX_FACTOR * 0.5}px), calc(-50% + ${mouse.y * PARALLAX_FACTOR * 0.5}px))`,
            }}
          >
            <div
              className="about-hero-orb w-full h-full rounded-full blur-[85px]"
              style={{
                animationDelay: "-14s",
                background: "radial-gradient(circle, hsl(215 40% 30% / 0.35) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />
      </div>

      <section
        ref={sectionRef}
        className="relative pt-28 sm:pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden z-10"
      >
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
              Growth Systems Built For Trade Businesses
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Clear pricing. Proper setup. Ongoing management. Designed to bring in consistent enquiries.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]"
              >
                Book A Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <p className="text-sm text-muted-foreground">
                Pick the level that fits where your business is now.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
