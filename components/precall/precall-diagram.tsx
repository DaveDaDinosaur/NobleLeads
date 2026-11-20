"use client"

/**
 * The one diagram at the top of the pre-call flow. It changes scene for each step and reacts as
 * they answer, so the picture does the explaining. Everything animates with CSS transforms,
 * opacity and colour, which stay smooth on phones (including Safari).
 */

import type { CSSProperties, ReactNode } from "react"

import { tradeLabel } from "@/lib/precall"

export type Scene = "welcome" | "check" | "trade" | "jobs" | "area" | "jobValue" | "capacity" | "sources" | "agenda" | "done"

export type DiagramState = {
  /** "SAT", "21", "2pm", for the calendar page. */
  day?: { weekday: string; date: string; time: string }
  businessName?: string
  tradeName?: string
  town?: string
  pins: number
  ringIndex: number
  /** 0 to 1 along the job value slider. */
  value: number
  valueLabel?: string
  capacity?: string
  sources: boolean[]
  stamped: boolean
}

const GOLD = "hsl(var(--secondary))"
const GOLD_DEEP = "hsl(42 40% 40%)"
const LINE = "hsl(var(--muted-foreground) / 0.55)"
const FAINT = "hsl(var(--border))"
const TEXT = "hsl(var(--foreground))"
const MUTED = "hsl(var(--muted-foreground))"
const EASE = "cubic-bezier(.2,.8,.2,1)"

const t = (props: string, ms = 600, delay = 0): CSSProperties => ({
  transition: props
    .split(",")
    .map((p) => `${p.trim()} ${ms}ms ${EASE} ${delay}ms`)
    .join(", "),
})

/** A scene fades and rises into place when it becomes current, and steps aside when it isn't. */
function SceneGroup({ active, children }: { active: boolean; children: ReactNode }) {
  return (
    <g
      aria-hidden={!active}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(10px)",
        ...t("opacity, transform", 550, active ? 120 : 0),
      }}
    >
      {children}
    </g>
  )
}

function initials(name?: string) {
  if (!name) return "•"
  return name
    .split(/\s+/)
    .filter((w) => /^[a-z]/i.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("")
}

function clip(text: string | undefined, max: number) {
  if (!text) return ""
  return text.length > max ? `${text.slice(0, max - 1)}…` : text
}

const pinSpots: [number, number][] = [
  [118, 118],
  [182, 118],
  [150, 92],
  [112, 160],
  [188, 160],
]
const ringRadii = [20, 38, 56, 74, 92]
const capacityFill: Record<string, number> = { "1 or 2": 2, "3 to 5": 5, "6 to 10": 10, "More than 10": 14 }
const fillOrder = [8, 2, 16, 11, 5, 18, 13, 0, 7, 15, 3, 10, 17, 6, 19, 1, 12, 9, 4, 14]

export function PrecallDiagram({ scene, state }: { scene: Scene; state: DiagramState }) {
  const coins = 1 + Math.round(state.value * 10)
  const filledDays = new Set(fillOrder.slice(0, state.capacity ? capacityFill[state.capacity] ?? 0 : 0))
  const sourceCount = state.sources.length

  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" role="img" aria-label="Your plan, drawn as you answer">
      {/* Welcome and not now: their call, as a calendar page. */}
      <SceneGroup active={scene === "welcome"}>
        <rect x="104" y="34" width="92" height="112" rx="4" fill="hsl(var(--card))" stroke={LINE} />
        <path d="M104 38 a4 4 0 0 1 4 -4 h84 a4 4 0 0 1 4 4 v20 h-92 z" fill={GOLD} />
        <text x="150" y="51" textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="2" fill="hsl(var(--secondary-foreground))">
          {state.day?.weekday ?? "BOOKED"}
        </text>
        <text x="150" y="104" textAnchor="middle" fontSize="40" fontWeight="600" fill={TEXT}>
          {state.day?.date ?? "✓"}
        </text>
        <text x="150" y="130" textAnchor="middle" fontSize="11" fill={MUTED}>
          {state.day?.time ?? "In the diary"}
        </text>
        <path d="M120 28 v12 M180 28 v12" stroke={LINE} strokeWidth="2" strokeLinecap="round" />
      </SceneGroup>

      {/* Check: their business card. */}
      <SceneGroup active={scene === "check"}>
        <rect x="46" y="44" width="208" height="124" rx="4" fill="hsl(var(--card))" stroke={LINE} />
        <rect x="64" y="64" width="36" height="36" rx="3" fill="hsl(var(--secondary) / 0.14)" stroke={GOLD} />
        <text x="82" y="87" textAnchor="middle" fontSize="13" fontWeight="600" fill={GOLD}>
          {initials(state.businessName)}
        </text>
        <text x="112" y="80" fontSize="13" fontWeight="600" fill={TEXT}>
          {clip(state.businessName ?? "Your business", 20)}
        </text>
        <text x="112" y="96" fontSize="10" fill={MUTED}>
          {clip(tradeLabel(state.tradeName) ?? "", 26)}
        </text>
        <path d="M64 124 H236" stroke={FAINT} />
        <circle cx="70" cy="146" r="3" fill={GOLD} />
        <text x="80" y="149" fontSize="10" fill={MUTED}>
          {clip(state.town ?? "Your area", 30)}
        </text>
      </SceneGroup>

      {/* Trade: a grid of tiles. */}
      <SceneGroup active={scene === "trade"}>
        {Array.from({ length: 9 }, (_, i) => (
          <rect
            key={i}
            x={102 + (i % 3) * 34}
            y={46 + Math.floor(i / 3) * 34}
            width="28"
            height="28"
            rx="3"
            fill={i === 4 ? "hsl(var(--secondary) / 0.18)" : "none"}
            stroke={i === 4 ? GOLD : LINE}
          />
        ))}
      </SceneGroup>

      {/* Jobs: a house, with a pin dropped for each kind of job they want. */}
      <SceneGroup active={scene === "jobs"}>
        <g fill="none" stroke={LINE} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
          <path d="M78 112 L150 56 L222 112" />
          <path d="M92 102 V186 H208 V102" />
          <path d="M138 186 V152 H162 V186" />
          <path d="M104 126 H128 V146 H104 Z M172 126 H196 V146 H172 Z" />
        </g>
        <path d="M60 186 H240" stroke={FAINT} />
        {pinSpots.map(([x, y], i) => {
          const on = i < state.pins
          return (
            <g key={i} style={{ transform: `translateY(${on ? 0 : -26}px)`, opacity: on ? 1 : 0, ...t("transform, opacity", 500) }}>
              <path
                d={`M${x} ${y + 8} C${x - 7} ${y} ${x - 7} ${y - 9} ${x} ${y - 9} C${x + 7} ${y - 9} ${x + 7} ${y} ${x} ${y + 8} Z`}
                fill={GOLD}
              />
              <circle cx={x} cy={y - 3} r="2.4" fill="hsl(var(--background))" />
            </g>
          )
        })}
      </SceneGroup>

      {/* Area: travel rings around their base. Rings up to their distance fill gold. */}
      <SceneGroup active={scene === "area"}>
        {ringRadii.map((r, i) => {
          const on = i <= state.ringIndex
          return (
            <circle
              key={r}
              cx="150"
              cy="106"
              r={r}
              fill={on ? "hsl(var(--secondary) / 0.06)" : "transparent"}
              stroke={on ? GOLD : FAINT}
              strokeWidth={i === state.ringIndex ? 1.6 : 1}
              style={t("fill, stroke", 500, on ? i * 70 : 0)}
            />
          )
        })}
        <circle cx="150" cy="106" r="5" fill={GOLD} />
        <text x="150" y="214" textAnchor="middle" fontSize="10" letterSpacing="1.5" fill={TEXT}>
          {clip(state.town?.toUpperCase(), 24)}
        </text>
      </SceneGroup>

      {/* Job value: a stack of coins and the figure. */}
      <SceneGroup active={scene === "jobValue"}>
        <ellipse cx="150" cy="200" rx="46" ry="7" fill="hsl(var(--secondary) / 0.1)" />
        {Array.from({ length: 11 }, (_, i) => {
          const on = i < coins
          const y = 190 - i * 10
          return (
            <g key={i} style={{ opacity: on ? 1 : 0, transform: `translateY(${on ? 0 : -12}px)`, ...t("opacity, transform", 350, on ? i * 25 : 0) }}>
              <path d={`M114 ${y} v6 a36 8 0 0 0 72 0 v-6`} fill={GOLD_DEEP} />
              <ellipse cx="150" cy={y} rx="36" ry="8" fill={GOLD} />
              <ellipse cx="150" cy={y} rx="24" ry="4.6" fill="none" stroke={GOLD_DEEP} />
            </g>
          )
        })}
        {/* The figure rides on top of the stack. */}
        <text
          x="150"
          y="168"
          textAnchor="middle"
          fontSize="28"
          fontWeight="600"
          fill={TEXT}
          style={{ transform: `translateY(${-(coins - 1) * 10}px)`, ...t("transform", 400) }}
        >
          {state.valueLabel}
        </text>
      </SceneGroup>

      {/* Capacity: next month's diary, with the jobs they could take dropped in. */}
      <SceneGroup active={scene === "capacity"}>
        {["M", "T", "W", "T", "F"].map((d, i) => (
          <text key={i} x={87 + i * 32} y="38" textAnchor="middle" fontSize="9" fill={MUTED}>
            {d}
          </text>
        ))}
        {Array.from({ length: 20 }, (_, i) => {
          const on = filledDays.has(i)
          const x = 74 + (i % 5) * 32
          const y = 48 + Math.floor(i / 5) * 36
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width="26"
                height="30"
                rx="3"
                fill={on ? "hsl(var(--secondary) / 0.18)" : "transparent"}
                stroke={on ? GOLD : FAINT}
                style={t("fill, stroke", 400, on ? fillOrder.indexOf(i) * 40 : 0)}
              />
              <rect
                x={x + 6}
                y={y + 13}
                width="14"
                height="4"
                rx="1"
                fill={GOLD}
                style={{ opacity: on ? 1 : 0, ...t("opacity", 300, on ? fillOrder.indexOf(i) * 40 + 120 : 0) }}
              />
            </g>
          )
        })}
      </SceneGroup>

      {/* Sources: where work comes from, feeding into their business. */}
      <SceneGroup active={scene === "sources"}>
        {state.sources.map((on, i) => {
          const angle = Math.PI * 1.08 + (i / Math.max(sourceCount - 1, 1)) * Math.PI * 0.84
          const x = 150 + Math.cos(angle) * 112
          const y = 178 + Math.sin(angle) * 140
          const d = `M${x} ${y} Q${(x + 150) / 2} ${172} 150 ${172}`
          return (
            <g key={i}>
              <path d={d} fill="none" stroke={on ? GOLD : FAINT} strokeWidth={on ? 1.5 : 1} style={t("stroke", 400)} />
              {on ? <path d={d} fill="none" stroke={TEXT} strokeWidth="2" strokeLinecap="round" pathLength={100} strokeDasharray="5 95" className="precall-flow" /> : null}
              <circle cx={x} cy={y} r={on ? 6 : 4} fill={on ? GOLD : "hsl(var(--card))"} stroke={on ? GOLD : LINE} style={t("fill, stroke", 400)} />
            </g>
          )
        })}
        <rect x="136" y="160" width="28" height="24" rx="3" fill="hsl(var(--card))" stroke={GOLD} />
        <path d="M142 172 L150 165 L158 172 V179 H142 Z" fill="none" stroke={GOLD} strokeLinejoin="round" />
      </SceneGroup>

      {/* Agenda: a speech bubble, waiting for their question. */}
      <SceneGroup active={scene === "agenda"}>
        <path d="M84 52 H216 a4 4 0 0 1 4 4 V140 a4 4 0 0 1 -4 4 H134 L110 168 L114 144 H84 a4 4 0 0 1 -4 -4 V56 a4 4 0 0 1 4 -4 Z" fill="hsl(var(--card))" stroke={LINE} />
        {[130, 150, 170].map((x, i) => (
          <circle key={x} cx={x} cy="98" r="4.5" fill={GOLD} className="precall-typing" style={{ animationDelay: `${i * 0.18}s` }} />
        ))}
      </SceneGroup>

      {/* Done: their plan, stamped. */}
      <SceneGroup active={scene === "done"}>
        <path d="M100 24 H178 L200 46 V196 H100 Z" fill="hsl(var(--card))" stroke={LINE} strokeLinejoin="round" />
        <path d="M178 24 V46 H200" fill="none" stroke={LINE} />
        <path d="M116 66 H170" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
        {[86, 102, 118, 134].map((y, i) => (
          <path key={y} d={`M116 ${y} H${[184, 160, 176, 146][i]}`} stroke={FAINT} strokeWidth="2" strokeLinecap="round" />
        ))}
        <g
          style={{
            opacity: state.stamped ? 1 : 0,
            transform: state.stamped ? "scale(1) rotate(0deg)" : "scale(1.8) rotate(-24deg)",
            transformOrigin: "190px 166px",
            ...t("opacity, transform", 450, 500),
          }}
        >
          <circle cx="190" cy="166" r="24" fill="hsl(var(--background))" stroke={GOLD} strokeWidth="1.6" />
          <circle cx="190" cy="166" r="19" fill="hsl(var(--secondary) / 0.12)" stroke={GOLD} strokeDasharray="2 2.5" />
          <path d="M180 166 L187 173 L201 158" fill="none" stroke={GOLD} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </SceneGroup>
    </svg>
  )
}
