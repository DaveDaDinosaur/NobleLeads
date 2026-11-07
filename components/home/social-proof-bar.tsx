"use client"

import Link from "next/link"
import { useRef } from "react"

import { gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap"
import { formatGBP, GO_LIVE_WORKING_DAYS, MIN_JOB_VALUE } from "@/lib/offer"

const markers = [
  { label: "Exclusive leads" },
  { label: "Built in-house", href: "/growth-system" },
  { label: "You keep the website" },
  { label: "Focus Refurbishment", href: "/case-studies/focus-refurbishment" },
  { label: "Thermal Render", href: "/case-studies/thermal-render-specialists" },
  { label: `Live in ${GO_LIVE_WORKING_DAYS} working days`, href: "/how-it-works" },
  { label: `Jobs from ${formatGBP(MIN_JOB_VALUE)}` },
  { label: "Cambridge · UK" },
]

export function SocialProofBar() {
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = track.current
      if (!el || prefersReducedMotion()) return
      const loop = gsap.to(el, { xPercent: -50, duration: 48, ease: "none", repeat: -1 })
      const onEnter = () => gsap.to(loop, { timeScale: 0.2, duration: 0.6 })
      const onLeave = () => gsap.to(loop, { timeScale: 1, duration: 0.6 })
      el.addEventListener("pointerenter", onEnter)
      el.addEventListener("pointerleave", onLeave)
      return () => {
        el.removeEventListener("pointerenter", onEnter)
        el.removeEventListener("pointerleave", onLeave)
      }
    },
    { scope: track }
  )

  const items = [...markers, ...markers]

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-background py-6 sm:py-8">
      <p className="label-mono mb-4 px-4 text-muted-foreground sm:px-6 lg:px-10">
        Owned, not rented
      </p>
      <div ref={track} className="flex w-max items-center">
        {items.map((marker, i) => {
          const cloned = i >= markers.length
          const inner = (
            <>
              <span className="display px-6 text-4xl text-foreground/85 transition-colors duration-300 group-hover:text-secondary sm:px-10 sm:text-6xl">
                {marker.label}
              </span>
              <span className="accent-mono text-3xl text-secondary/60 sm:text-5xl">*</span>
            </>
          )
          const className = "group flex items-center whitespace-nowrap"

          if (marker.href && !cloned) {
            return (
              <Link key={`${marker.label}-${i}`} href={marker.href} className={className}>
                {inner}
              </Link>
            )
          }

          return (
            <span
              key={`${marker.label}-${i}`}
              className={className}
              aria-hidden={cloned || undefined}
            >
              {inner}
            </span>
          )
        })}
      </div>
    </section>
  )
}
