"use client"

import { useRef, useEffect, useState } from "react"
import { useMouseParallax } from "@/hooks/use-mouse-parallax"

const PARALLAX_FACTOR = 24

export function BlogHero({ postCount }: { postCount: number }) {
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
      {/* Orb background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: orbsVisible ? 1 : 0 }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0">
          <div
            className="absolute -top-20 -right-20 w-[560px] h-[560px] transition-transform duration-300 ease-out"
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
            className="absolute bottom-1/3 -left-20 w-[440px] h-[440px] transition-transform duration-300 ease-out"
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
            className="absolute top-1/2 left-1/2 w-[360px] h-[360px] transition-transform duration-300 ease-out"
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

      {/* Hero text */}
      <section
        ref={sectionRef}
        className="relative z-10 pt-28 sm:pt-32 pb-10 lg:pt-36 lg:pb-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80">
            Trade Marketing Blog · {postCount} articles
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Marketing That Makes Sense<br className="hidden sm:block" />
            <span className="text-muted-foreground"> for UK Trades.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
            No fluff, no jargon — just honest guidance on how to get more of the
            right enquiries coming direct to your business, without being
            dependent on Checkatrade, Bark or Facebook groups.
          </p>
        </div>
      </section>
    </>
  )
}
