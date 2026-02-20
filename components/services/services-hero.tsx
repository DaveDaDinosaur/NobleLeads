"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { useMouseParallax } from "@/hooks/use-mouse-parallax"

const PARALLAX_FACTOR = 24

export function ServicesHero() {
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
      {/* Fixed orbs — same as about page, stay in place while scrolling */}
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
        className="relative pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden z-10"
      >
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Built for UK property services
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
              What we build for you
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              One system: more enquiries, faster follow-up, stronger positioning and contract-ready credibility.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "More inbound enquiries",
                "Faster follow-up",
                "Stronger credibility and contract-ready positioning",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/90">
                  <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group min-touch inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                Book Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#what-we-deliver"
                className="min-touch inline-flex items-center rounded-lg border border-border bg-transparent px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-secondary/50 hover:text-secondary"
              >
                See what we deliver
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
