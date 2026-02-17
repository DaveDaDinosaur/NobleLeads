"use client"

import { useRef, useEffect, useState } from "react"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "scale"
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = () => setPrefersReducedMotion(mq.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform = {
    up: "translateY(50px)",
    left: "translateX(-50px)",
    right: "translateX(50px)",
    scale: "scale(0.92)",
  }[direction]

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms`,
        transitionDuration: prefersReducedMotion ? "0ms" : "700ms",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) translateX(0) scale(1)" : (prefersReducedMotion ? "none" : hiddenTransform),
        filter: isVisible ? "blur(0px)" : (prefersReducedMotion ? "none" : "blur(4px)"),
      }}
    >
      {children}
    </div>
  )
}
