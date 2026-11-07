"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

import { gsap, prefersReducedMotion, ScrollTrigger } from "@/components/motion/gsap"

let lenis: Lenis | null = null

export function scrollToY(y: number) {
  if (lenis) lenis.scrollTo(y, { duration: 1.1 })
  else window.scrollTo({ top: y, behavior: prefersReducedMotion() ? "auto" : "smooth" })
}

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (prefersReducedMotion()) return

    lenis = new Lenis({ lerp: 0.1, anchors: { offset: -80 } })
    lenis.on("scroll", ScrollTrigger.update)

    const tick = (time: number) => lenis?.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      gsap.ticker.lagSmoothing(500, 33)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
    ScrollTrigger.refresh()
  }, [pathname])

  return null
}
