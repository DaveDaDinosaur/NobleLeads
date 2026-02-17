"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.15, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let raf: number
    const update = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const viewCenter = window.innerHeight / 2
        const diff = (center - viewCenter) * speed
        setOffset(diff)
      }
      raf = requestAnimationFrame(update)
    }
    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      <div style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}>
        {children}
      </div>
    </div>
  )
}
