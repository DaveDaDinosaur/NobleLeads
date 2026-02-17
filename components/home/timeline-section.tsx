"use client"

import { useRef, useEffect, useState } from "react"
import { Search, Palette, Wrench, Rocket } from "lucide-react"

const STEPS = [
  {
    id: "discovery",
    label: "Discovery",
    icon: Search,
    description:
      "We map your current lead flow, audience, and goals so the system is built for your business—not a template.",
    credibility: "Strategy call in 48hr",
  },
  {
    id: "design",
    label: "Design",
    icon: Palette,
    description:
      "Conversion-focused structure and copy. Every page and message is designed to move prospects toward one action: contacting you.",
    credibility: "UK-based creative",
  },
  {
    id: "build",
    label: "Build",
    icon: Wrench,
    description:
      "Website, ads, automation, and tracking go in. We work in focused sprints so you see progress quickly.",
    credibility: "Transparent build process",
  },
  {
    id: "launch",
    label: "Launch",
    icon: Rocket,
    description:
      "Go live. We monitor performance, optimise, and hand you a clear dashboard so you own the system long-term.",
    credibility: "Typical launch in 48hr",
  },
] as const

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleIndex, setVisibleIndex] = useState(-1)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const stepEls = STEPS.map((_, i) => section.querySelector(`[data-step="${i}"]`))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const step = Number((entry.target as HTMLElement).dataset.step)
          if (!Number.isNaN(step) && step >= 0) {
            setVisibleIndex((prev) => (step > prev ? step : prev))
          }
        })
      },
      { threshold: 0.2, rootMargin: "-5% 0px -20% 0px" }
    )

    stepEls.forEach((el) => el && observer.observe(el))

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const viewHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height
      // Progress: 0 when section top at 40% viewport, 1 when section bottom reaches 45% (line completes while section still well visible)
      const start = viewHeight * 0.4
      const end = viewHeight * 0.45 - sectionHeight
      const progress = sectionHeight > 0
        ? Math.min(1, Math.max(0, (start - sectionTop) / (start - end)))
        : 0
      setLineProgress(progress)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-14 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary/80 border-b border-secondary/20 pb-2">
            How we work
          </span>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
            From first call to{" "}
            <span className="text-secondary">live system.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            A clear, proven path—Discovery → Design → Build → Launch
          </p>
        </div>

        {/* Desktop: horizontal timeline with 3D cards */}
        <div className="hidden lg:block relative">
          {/* Animated timeline track */}
          <div
            className="absolute top-[4.5rem] left-0 right-0 h-0.5 rounded-full bg-border/60 overflow-hidden"
            data-timeline-line
            aria-hidden
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-secondary/40 to-secondary transition-all duration-700 ease-out"
              style={{ width: `${lineProgress * 100}%` }}
            />
          </div>

          <div className="relative grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isVisible = visibleIndex >= i
              return (
                <div
                  key={step.id}
                  data-step={i}
                  className="relative flex flex-col items-center"
                >
                  {/* Node */}
                  <div
                    className={`
                      relative z-10 w-16 h-16 rounded-2xl border-2 flex items-center justify-center
                      transition-all duration-500 ease-out
                      ${isVisible
                        ? "border-secondary bg-secondary/15 shadow-lg shadow-secondary/20 scale-100 opacity-100"
                        : "border-border/50 bg-card/50 scale-90 opacity-60"
                      }
                    `}
                    style={{
                      transform: isVisible
                        ? "translateZ(0) rotateY(0deg)"
                        : "translateZ(-20px) rotateY(12deg)",
                    }}
                  >
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>

                  {/* Card with 3D effect */}
                  <div className="mt-6 w-full [perspective:800px]">
                    <div
                      className={`
                        w-full rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm
                        p-5 transition-all duration-500 ease-out
                        ${isVisible ? "opacity-100" : "opacity-70"}
                      `}
                      style={{
                        transformStyle: "preserve-3d",
                        transform: isVisible
                          ? "translateZ(0) rotateY(0deg) scale(1)"
                          : `translateZ(-24px) rotateY(${i % 2 === 0 ? -8 : 8}deg) scale(0.97)`,
                        boxShadow: isVisible
                          ? "0 20px 40px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(197,165,90,0.06)"
                          : "0 4px 12px -4px rgba(0,0,0,0.2)",
                      }}
                    >
                    <span className="text-[10px] font-mono font-bold text-secondary/70 uppercase tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-foreground">
                      {step.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                    <p className="mt-3 text-[11px] font-medium text-secondary/90 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary/80" />
                      {step.credibility}
                    </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline with 3D cards */}
        <div className="lg:hidden space-y-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            const isVisible = visibleIndex >= i
            return (
              <div
                key={step.id}
                data-step={i}
                className="relative flex gap-4"
              >
                {/* Left: line + node */}
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      relative z-10 w-12 h-12 rounded-xl border-2 flex items-center justify-center flex-shrink-0
                      transition-all duration-500
                      ${isVisible
                        ? "border-secondary bg-secondary/15 shadow-lg shadow-secondary/15"
                        : "border-border/50 bg-card/50"
                      }
                    `}
                  >
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[2rem] mt-2 bg-gradient-to-b from-border/60 to-transparent" />
                  )}
                </div>

                {/* Right: card */}
                <div
                  className={`
                    flex-1 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm p-4
                    transition-all duration-500
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-80 -translate-x-2"}
                  `}
                  style={{
                    boxShadow: isVisible
                      ? "0 12px 28px -8px rgba(0,0,0,0.3)"
                      : "0 4px 12px -4px rgba(0,0,0,0.2)",
                  }}
                >
                  <span className="text-[10px] font-mono font-bold text-secondary/70 uppercase tracking-wider">
                    {String(i + 1).padStart(2, "0")} — {step.label}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <p className="mt-2 text-[11px] font-medium text-secondary/90 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary/80" />
                    {step.credibility}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom credibility strip */}
        <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-4 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/30 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            No long-term lock-in
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/30 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Property services specialist
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/30 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            UK-based team
          </span>
        </div>
      </div>
    </section>
  )
}
