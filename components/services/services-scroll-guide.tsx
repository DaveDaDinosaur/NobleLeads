"use client"

import { useEffect, useState, useRef } from "react"

const PILLARS = [
  { id: "attract", label: "Attract" },
  { id: "capture", label: "Capture" },
  { id: "convert", label: "Convert" },
  { id: "authority", label: "Authority" },
  { id: "contract-growth", label: "Contract" },
  { id: "growth-management", label: "Growth" },
] as const

export function ServicesScrollGuide() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fillProgress, setFillProgress] = useState(0)
  const [isInRange, setIsInRange] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const getSectionTops = () => {
      const tops: number[] = []
      PILLARS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) tops.push(el.getBoundingClientRect().top + window.scrollY)
      })
      return tops
    }

    const onScroll = () => {
      const viewportMid = window.scrollY + window.innerHeight * 0.35
      const tops = getSectionTops()
      if (tops.length === 0) return

      const start = tops[0] - window.innerHeight * 0.2
      const end = tops[tops.length - 1] + 400
      const inRange = viewportMid >= start && viewportMid <= end
      setIsInRange(inRange)

      if (!inRange) return

      // Which section are we in?
      let idx = 0
      for (let i = tops.length - 1; i >= 0; i--) {
        if (viewportMid >= tops[i] - 100) {
          idx = i
          break
        }
      }
      setActiveIndex(idx)

      // Fill progress 0–1 through the pillar range
      const range = end - start
      const through = viewportMid - start
      const progress = range > 0 ? Math.min(1, Math.max(0, through / range)) : 0
      setFillProgress(progress)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Desktop: vertical rail on the left, reacts to scroll */}
      <div
        ref={containerRef}
        aria-hidden
        className="fixed left-0 top-0 bottom-0 z-20 w-16 hidden lg:flex flex-col items-center pointer-events-none"
      >
        <div className="sticky top-[7rem] flex flex-col items-center gap-0 w-full">
          {/* Vertical track */}
          <div className="relative w-px h-[280px] rounded-full bg-border/50 overflow-hidden">
            <div
              className="absolute left-0 top-0 w-full bg-secondary/70 rounded-full transition-all duration-300 ease-out"
              style={{ height: `${fillProgress * 100}%` }}
            />
          </div>

          {/* Nodes */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-between h-[280px] py-0">
            {PILLARS.map((pillar, i) => {
              const isActive = isInRange && activeIndex === i
              const isPast = fillProgress > (i + 0.5) / PILLARS.length
              return (
                <a
                  key={pillar.id}
                  href={`#${pillar.id}`}
                  className="pointer-events-auto flex items-center gap-2 group focus:outline-none"
                >
                  <span
                    className={`
                      flex h-3 w-3 shrink-0 rounded-full border-2 transition-all duration-300
                      ${isActive
                        ? "border-secondary bg-secondary scale-125 shadow-lg shadow-secondary/40"
                        : isPast
                          ? "border-secondary/60 bg-secondary/30"
                          : "border-border/60 bg-card/50"
                      }
                    `}
                  />
                  <span
                    className={`
                      max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider
                      transition-all duration-300
                      ${isActive ? "max-w-[80px] opacity-100 text-secondary ml-1" : "opacity-0 text-muted-foreground"}
                    `}
                  >
                    {pillar.label}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile: thin progress bar below nav when in pillar range */}
      <div className="lg:hidden fixed top-16 left-0 right-0 z-20 h-0.5 bg-border/50 pointer-events-none">
        <div
          className="h-full bg-secondary/80 transition-all duration-300 ease-out"
          style={{ width: `${fillProgress * 100}%` }}
        />
      </div>
    </>
  )
}
