"use client"

/**
 * Small, purpose-drawn illustrations for the pre-call flow. Each one reacts to the answer being given,
 * so the lead sees their plan take shape rather than filling in a form.
 * Drawn in the site's gold-on-dark line style. Motion is CSS or GSAP and switches off for reduced motion.
 */

import { useRef } from "react"

import { EASE_OUT, gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap"

const GOLD = "hsl(var(--secondary))"
const LINE = "hsl(var(--border))"
const MUTED = "hsl(var(--muted-foreground) / 0.5)"

/** Draws every [data-draw] stroke on when the illustration first appears. */
function useDrawOn(ref: React.RefObject<SVGSVGElement | null>) {
  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return
      gsap.from(ref.current.querySelectorAll("[data-draw]"), {
        drawSVG: "0%",
        duration: 1.1,
        ease: "power2.inOut",
        stagger: 0.06,
      })
    },
    { scope: ref }
  )
}

/** Jobs: a blueprint of a job, with a gold pin dropped in for each kind of job they pick. */
export function BlueprintArt({ count }: { count: number }) {
  const ref = useRef<SVGSVGElement>(null)
  useDrawOn(ref)
  const pins = [
    [70, 58],
    [128, 50],
    [100, 92],
    [58, 104],
    [142, 100],
  ]

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion() || count === 0) return
      const pin = ref.current.querySelector(`[data-pin="${count - 1}"]`)
      if (pin) gsap.fromTo(pin, { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "back.out(2.6)" })
    },
    { scope: ref, dependencies: [count] }
  )

  return (
    <svg ref={ref} viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
      <defs>
        <pattern id="bp-grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0H0V10" fill="none" stroke={LINE} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="200" height="130" fill="url(#bp-grid)" opacity="0.6" />
      <g fill="none" stroke={MUTED} strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
        <path data-draw d="M40 66 L100 24 L160 66" />
        <path data-draw d="M52 58 V116 H148 V58" />
        <path data-draw d="M88 116 V86 H112 V116" />
        <path data-draw d="M62 72 H80 V88 H62 Z M71 72 V88 M62 80 H80" />
        <path data-draw d="M120 72 H138 V88 H120 Z M129 72 V88 M120 80 H138" />
        <path data-draw d="M128 38 V24 H138 V45" />
      </g>
      <g stroke={GOLD} strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6">
        <path d="M30 116 H170" />
        <path d="M30 120 V112 M170 120 V112" />
      </g>
      {pins.map(([x, y], i) => (
        <g key={i} data-pin={i} opacity={i < count ? 1 : 0} style={{ transition: "opacity 0.3s" }}>
          <circle cx={x} cy={y} r="9" fill={GOLD} opacity="0.15" />
          <path d={`M${x} ${y + 6} C${x - 6} ${y - 1} ${x - 5} ${y - 8} ${x} ${y - 8} C${x + 5} ${y - 8} ${x + 6} ${y - 1} ${x} ${y + 6} Z`} fill={GOLD} />
          <circle cx={x} cy={y - 3} r="1.8" fill="hsl(var(--background))" />
        </g>
      ))}
    </svg>
  )
}

/** Fixed, hand-placed enquiry dots so the map looks the same every time. */
const mapDots = [
  [104, 92], [88, 108], [116, 112], [78, 84], [132, 88], [100, 66], [64, 110], [140, 120], [118, 140],
  [76, 136], [150, 70], [52, 78], [158, 104], [96, 150], [44, 124], [128, 46], [70, 50], [164, 140],
  [40, 92], [152, 156], [36, 150], [100, 30], [172, 60], [24, 64], [176, 112], [58, 166], [140, 176],
]
const ringRadii = [16, 30, 46, 62, 80]

/** Area: a stylised local map. Enquiries inside their travel radius light up gold. */
export function MapArt({ town, ringIndex }: { town?: string; ringIndex: number }) {
  const ref = useRef<SVGSVGElement>(null)
  useDrawOn(ref)
  const reach = ringIndex >= 0 ? ringRadii[ringIndex] : 0

  return (
    <svg ref={ref} viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
      <g fill="none" stroke={LINE} strokeWidth="1.4" strokeLinecap="round">
        <path data-draw d="M0 120 C40 112 70 130 100 100 S160 70 200 84" />
        <path data-draw d="M92 0 C96 40 84 70 100 100 S110 160 104 200" />
        <path data-draw d="M10 30 C50 60 70 70 100 100" opacity="0.6" />
        <path data-draw d="M190 180 C150 150 130 130 100 100" opacity="0.6" />
        <path data-draw d="M0 176 C50 170 60 150 88 140" opacity="0.4" />
        <path data-draw d="M200 20 C170 36 150 30 128 46" opacity="0.4" />
      </g>
      {ringRadii.map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          fill={i <= ringIndex ? "hsl(var(--secondary) / 0.05)" : "none"}
          stroke={i <= ringIndex ? "hsl(var(--secondary) / 0.55)" : LINE}
          strokeWidth="1"
          strokeDasharray={i === ringIndex ? "none" : "3 4"}
          className={i === ringIndex ? "precall-svg-pulse" : undefined}
          style={{ transition: "stroke 0.5s, fill 0.5s", transformOrigin: "100px 100px" }}
        />
      ))}
      {mapDots.map(([x, y], i) => {
        const lit = Math.hypot(x - 100, y - 100) <= reach
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={lit ? 2.6 : 1.8}
            fill={lit ? GOLD : MUTED}
            style={{ transition: `fill 0.4s ${i * 0.012}s, r 0.4s ${i * 0.012}s` }}
          />
        )
      })}
      <circle cx="100" cy="100" r="9" fill="hsl(var(--secondary) / 0.18)" />
      <circle cx="100" cy="100" r="4.5" fill={GOLD} />
      {town ? (
        <text x="100" y="122" textAnchor="middle" className="label-mono" fontSize="8" fill="hsl(var(--foreground))">
          {town.length > 18 ? `${town.slice(0, 17)}…` : town}
        </text>
      ) : null}
    </svg>
  )
}

/** Count of enquiries lit inside a radius, for the caption under the map. */
export function dotsInside(ringIndex: number) {
  if (ringIndex < 0) return 0
  return mapDots.filter(([x, y]) => Math.hypot(x - 100, y - 100) <= ringRadii[ringIndex]).length
}

/** Job value: a stack of coins that grows as the slider moves. */
export function CoinStackArt({ level }: { level: number }) {
  const coins = Math.max(1, Math.min(12, level))
  return (
    <svg viewBox="0 0 120 140" className="h-full w-full" aria-hidden>
      <ellipse cx="60" cy="128" rx="44" ry="7" fill="hsl(var(--secondary) / 0.08)" />
      {Array.from({ length: 12 }, (_, i) => {
        const y = 118 - i * 9
        const shown = i < coins
        return (
          <g
            key={i}
            style={{
              opacity: shown ? 1 : 0,
              transform: `translateY(${shown ? 0 : -14}px)`,
              transition: `opacity 0.25s ${shown ? i * 0.025 : 0}s, transform 0.4s cubic-bezier(.2,1.4,.4,1) ${shown ? i * 0.025 : 0}s`,
            }}
          >
            <path d={`M28 ${y} V${y + 6} A32 7 0 0 0 92 ${y + 6} V${y}`} fill="hsl(42 40% 42%)" />
            <ellipse cx="60" cy={y} rx="32" ry="7" fill={GOLD} />
            <ellipse cx="60" cy={y} rx="22" ry="4.2" fill="none" stroke="hsl(42 40% 42%)" strokeWidth="1" />
          </g>
        )
      })}
    </svg>
  )
}

const capacityFill: Record<string, number> = { "1 or 2": 2, "3 to 5": 5, "6 to 10": 10, "More than 10": 14 }
/** Spread across a month so it reads like a real diary, not a progress bar. */
const fillOrder = [8, 2, 16, 11, 5, 18, 13, 0, 7, 15, 3, 10, 17, 6, 19, 1, 12, 9, 4, 14]

/** Capacity: next month's diary, with a booked job dropped onto each day they could fill. */
export function CalendarArt({ capacity }: { capacity?: string }) {
  const filled = new Set(fillOrder.slice(0, capacity ? capacityFill[capacity] ?? 0 : 0))
  return (
    <div className="w-full" aria-hidden>
      <div className="label-mono mb-2 grid grid-cols-5 gap-1.5 text-center text-[9px] text-muted-foreground">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {Array.from({ length: 20 }, (_, i) => {
          const on = filled.has(i)
          const order = fillOrder.indexOf(i)
          return (
            <span
              key={i}
              className={`relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-md border transition-colors duration-300 ${
                on ? "border-secondary/60 bg-secondary/15" : "border-border bg-muted/20"
              }`}
              style={{ transitionDelay: on ? `${order * 35}ms` : "0ms" }}
            >
              <span
                className={`h-1.5 rounded-full bg-secondary transition-all duration-300 ${on ? "w-3/5 opacity-100" : "w-0 opacity-0"}`}
                style={{ transitionDelay: on ? `${order * 35 + 80}ms` : "0ms" }}
              />
            </span>
          )
        })}
      </div>
    </div>
  )
}

/** Sources: where work comes from, drawn as lines feeding into their business. Picked sources light up and flow. */
export function NetworkArt({ options, active, label }: { options: string[]; active: string[]; label?: string }) {
  const ref = useRef<SVGSVGElement>(null)
  useDrawOn(ref)
  const cx = 100
  const cy = 74
  const nodes = options.map((option, i) => {
    // A fan above their business, so every source visibly feeds into it.
    const angle = Math.PI * 1.08 + (i / (options.length - 1)) * Math.PI * 0.84
    return { option, x: cx + Math.cos(angle) * 88, y: cy + 6 + Math.sin(angle) * 66 }
  })
  const name = label && label.length <= 18 ? label : "You"
  const pill = Math.max(40, name.length * 5 + 18)

  return (
    <svg ref={ref} viewBox="0 0 200 100" className="h-full w-full overflow-visible" aria-hidden>
      {nodes.map(({ option, x, y }) => {
        const on = active.includes(option)
        return (
          <g key={option}>
            <path
              data-draw
              d={`M${x} ${y} Q${(x + cx) / 2} ${cy + 20} ${cx} ${cy + 8}`}
              fill="none"
              stroke={on ? GOLD : LINE}
              strokeWidth={on ? 1.4 : 1}
              style={{ transition: "stroke 0.4s" }}
            />
            {on ? (
              <path
                d={`M${x} ${y} Q${(x + cx) / 2} ${cy + 20} ${cx} ${cy + 8}`}
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="1.6"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray="6 94"
                className="precall-flow"
              />
            ) : null}
            <circle cx={x} cy={y} r={on ? 5 : 3.5} fill={on ? GOLD : "hsl(var(--card))"} stroke={on ? GOLD : MUTED} style={{ transition: "all 0.35s" }} />
          </g>
        )
      })}
      <rect x={cx - pill / 2} y={cy + 4} width={pill} height="18" rx="9" fill="hsl(var(--card))" stroke={GOLD} />
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize="7.5" className="label-mono" fill="hsl(var(--foreground))">
        {name}
      </text>
    </svg>
  )
}

/** The finished plan: a sealed document that stamps itself. */
export function SealArt() {
  const ref = useRef<SVGSVGElement>(null)
  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return
      const tl = gsap.timeline({ delay: 0.15 })
      tl.from(ref.current.querySelectorAll("[data-draw]"), { drawSVG: "0%", duration: 0.9, ease: "power2.inOut", stagger: 0.05 })
      tl.from("[data-stamp]", { scale: 2.2, opacity: 0, rotate: -30, transformOrigin: "50% 50%", duration: 0.5, ease: "power4.in" }, "-=0.2")
      tl.to(ref.current, { y: 2, duration: 0.08, yoyo: true, repeat: 1, ease: "power1.inOut" })
      tl.from("[data-burst] line", { scale: 0, opacity: 0, transformOrigin: "142px 92px", duration: 0.6, ease: EASE_OUT, stagger: 0.02 }, "-=0.1")
    },
    { scope: ref }
  )
  return (
    <svg ref={ref} viewBox="0 0 200 130" className="h-full w-full overflow-visible" aria-hidden>
      <g fill="none" stroke={MUTED} strokeWidth="1.2" strokeLinecap="round">
        <path data-draw d="M56 12 H128 L148 32 V122 H56 Z" />
        <path data-draw d="M128 12 V32 H148" />
        <path data-draw d="M70 44 H120" stroke={GOLD} />
        <path data-draw d="M70 58 H134" />
        <path data-draw d="M70 70 H112" />
        <path data-draw d="M70 82 H126" />
        <path data-draw d="M70 94 H100" />
      </g>
      <g data-burst stroke={GOLD} strokeWidth="1.2" strokeLinecap="round">
        {Array.from({ length: 10 }, (_, i) => {
          const a = (i / 10) * Math.PI * 2
          return <line key={i} x1={142 + Math.cos(a) * 26} y1={92 + Math.sin(a) * 26} x2={142 + Math.cos(a) * 32} y2={92 + Math.sin(a) * 32} />
        })}
      </g>
      <g data-stamp>
        <circle cx="142" cy="92" r="20" fill="hsl(var(--background))" stroke={GOLD} strokeWidth="1.5" />
        <circle cx="142" cy="92" r="16" fill="hsl(var(--secondary) / 0.12)" stroke={GOLD} strokeWidth="0.6" strokeDasharray="2 2" />
        <path d="M134 92 L140 98 L151 86" fill="none" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}
