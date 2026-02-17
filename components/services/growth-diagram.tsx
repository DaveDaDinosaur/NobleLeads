"use client"

import { PILLARS } from "@/lib/services-data"

const RADIUS = 42
const CENTER = 50

function getNodePosition(index: number) {
  const angle = (index * 60 - 90) * (Math.PI / 180)
  return {
    cx: CENTER + RADIUS * Math.cos(angle),
    cy: CENTER + RADIUS * Math.sin(angle),
  }
}

export function GrowthDiagram() {
  return (
    <div className="growth-diagram relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        aria-label="Growth System: six pillars connected to a central system"
      >
        <defs>
          <linearGradient id="hub-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(215, 52%, 23%)" />
            <stop offset="100%" stopColor="hsl(215, 52%, 18%)" />
          </linearGradient>
          <linearGradient id="node-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(42, 40%, 62%)" />
            <stop offset="100%" stopColor="hsl(42, 40%, 48%)" />
          </linearGradient>
          <filter id="hub-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Spokes */}
        {PILLARS.map((_, i) => {
          const { cx, cy } = getNodePosition(i)
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={cx}
              y2={cy}
              stroke="hsl(42, 40%, 56%)"
              strokeOpacity="0.35"
              strokeWidth="0.6"
            />
          )
        })}
        {/* Outer ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS + 2}
          fill="none"
          stroke="hsl(42, 40%, 56%)"
          strokeOpacity="0.2"
          strokeWidth="0.4"
        />
        {/* Central hub */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={8}
          fill="url(#hub-fill)"
          stroke="hsl(42, 40%, 56%)"
          strokeWidth="0.5"
          strokeOpacity="0.6"
          filter="url(#hub-glow)"
        />
        <text
          x={CENTER}
          y={CENTER}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-[hsl(42,40%,75%)]"
          style={{ fontSize: "5px", fontWeight: 600, letterSpacing: "0.08em" }}
        >
          SYSTEM
        </text>
        {/* Nodes */}
        {PILLARS.map((pillar, i) => {
          const { cx, cy } = getNodePosition(i)
          return (
            <a
              key={pillar.id}
              href={`#${pillar.id}`}
              className="cursor-pointer"
              aria-label={`${pillar.label}: ${pillar.summary}`}
            >
              <g transform={`translate(${cx}, ${cy})`}>
                <circle
                  r={6}
                  fill="url(#node-fill)"
                  stroke="hsl(42, 40%, 56%)"
                  strokeWidth="0.5"
                  strokeOpacity="0.8"
                />
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="hsl(220, 30%, 6%)"
                  style={{ fontSize: "4.2px", fontWeight: 700, letterSpacing: "0.02em" }}
                >
                  {pillar.label}
                </text>
              </g>
            </a>
          )
        })}
      </svg>
    </div>
  )
}
