"use client"

import { useRef } from "react"
import { Check } from "lucide-react"

import { EASE_OUT, gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap"
import type { PlanLine } from "@/lib/precall"

type PlanCardProps = {
  lines: PlanLine[]
  businessName?: string
  ready?: boolean
  dayLabel?: string
  className?: string
}

const placeholderWidths = ["w-3/5", "w-4/5", "w-2/5", "w-1/2", "w-3/4", "w-2/3", "w-1/3"]

export function planProgress(lines: PlanLine[]) {
  return lines.filter((line) => line.value || line.skipped).length
}

export function PlanCard({ lines, businessName, ready, dayLabel, className = "" }: PlanCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const previous = useRef<Map<string, string | undefined> | null>(null)
  const signature = lines.map((line) => `${line.id}:${line.value ?? ""}:${line.skipped ? 1 : 0}`).join("|")
  const filled = planProgress(lines)

  useGSAP(
    () => {
      const root = ref.current
      if (!root) return
      const before = previous.current
      previous.current = new Map(lines.map((line) => [line.id, line.value]))
      // First paint: nothing to celebrate yet.
      if (!before || prefersReducedMotion()) return

      lines.forEach((line) => {
        if (!line.value || before.get(line.id) === line.value) return
        const row = root.querySelector<HTMLElement>(`[data-line="${line.id}"]`)
        if (!row) return
        gsap.fromTo(
          row.querySelector("[data-value]"),
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, ease: EASE_OUT }
        )
        gsap.fromTo(
          row,
          { backgroundColor: "hsla(42, 40%, 56%, 0.16)" },
          { backgroundColor: "hsla(42, 40%, 56%, 0)", duration: 1.6, ease: "power2.out" }
        )
        gsap.fromTo(
          row.querySelector("[data-tick]"),
          { scale: 0, rotate: -45 },
          { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(2.4)" }
        )
      })
    },
    { scope: ref, dependencies: [signature] }
  )

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion()) return
      gsap.fromTo(
        "[data-seal]",
        { scale: 0.4, opacity: 0, rotate: -20 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.9, ease: "back.out(2)", delay: 0.2 }
      )
    },
    { scope: ref, dependencies: [ready] }
  )

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-lg border bg-card transition-colors duration-700 ${
        ready ? "border-secondary/40" : "border-border"
      } ${className}`}
    >
      {/* Blueprint corner marks */}
      <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-secondary/50" aria-hidden />
      <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-secondary/50" aria-hidden />
      <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-secondary/50" aria-hidden />
      <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-secondary/50" aria-hidden />

      <div className="border-b border-border px-6 pb-5 pt-7 sm:px-8">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="label-mono text-muted-foreground">Growth plan</p>
            <p className="display mt-2 truncate text-2xl text-foreground sm:text-3xl">{businessName || "Your business"}</p>
          </div>
          {ready ? (
            <span
              data-seal
              className="flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded-md border border-secondary bg-secondary/10 text-center"
            >
              <Check className="h-4 w-4 text-secondary" />
              <span className="label-mono mt-0.5 text-[8px] leading-none text-secondary">Ready</span>
            </span>
          ) : (
            <span className="label-mono flex-shrink-0 rounded-[4px] border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
              Drafting
            </span>
          )}
        </div>
        <div className="mt-5 flex gap-1" aria-hidden>
          {lines.map((line, index) => (
            <span
              key={line.id}
              className={`h-[3px] flex-1 transition-colors duration-500 ${
                index < filled ? "bg-secondary" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <p className="sr-only">
          {filled} of {lines.length} parts of your plan filled in
        </p>
      </div>

      <dl className="px-3 py-3 sm:px-5">
        {lines.map((line, index) => (
          <div
            key={line.id}
            data-line={line.id}
            className="grid grid-cols-[1.25rem_6.5rem_1fr] items-start gap-2 rounded-md px-3 py-2.5 sm:grid-cols-[1.25rem_7.5rem_1fr]"
          >
            <span className="mt-0.5 flex h-4 w-4 items-center justify-center">
              {line.value ? (
                <span data-tick className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-secondary">
                  <Check className="h-2.5 w-2.5 text-secondary-foreground" strokeWidth={3} />
                </span>
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
              )}
            </span>
            <dt className="label-mono pt-0.5 text-[10px] text-muted-foreground">{line.label}</dt>
            <dd className="min-w-0 overflow-hidden text-sm leading-snug">
              {line.value ? (
                <span data-value className="block break-words text-foreground">
                  {line.value}
                  {line.known ? (
                    <span className="label-mono ml-2 inline-block whitespace-nowrap align-middle text-[9px] text-secondary/80">
                      You told us
                    </span>
                  ) : null}
                </span>
              ) : line.skipped ? (
                <span className="block text-muted-foreground">We{"'"}ll cover this on the call</span>
              ) : (
                <span
                  className={`mt-1.5 block h-2 rounded-full bg-muted precall-shimmer ${placeholderWidths[index % placeholderWidths.length]}`}
                />
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-border px-6 py-4 sm:px-8">
        <p className="text-xs leading-relaxed text-muted-foreground">
          {ready
            ? `I'll bring this to ${dayLabel ? `the call ${dayLabel === "today" || dayLabel === "tomorrow" ? dayLabel : `on ${dayLabel}`}` : "our call"}, with your local search numbers and competitors.`
            : "Fills in as you answer. Skipped questions just get covered on the call."}
        </p>
      </div>
    </div>
  )
}
