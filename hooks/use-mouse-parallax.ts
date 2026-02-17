"use client"

import { useState, useEffect, useCallback } from "react"

/**
 * Returns normalized mouse position (-1 to 1) and optional pixel offset
 * for parallax. Throttled for performance.
 */
export function useMouseParallax() {
  const [m, setM] = useState({ x: 0, y: 0 })

  const handleMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1
    const y = (e.clientY / window.innerHeight) * 2 - 1
    setM({ x, y })
  }, [])

  useEffect(() => {
    let raf = 0
    const throttled = (e: MouseEvent) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        handleMove(e)
        raf = 0
      })
    }
    window.addEventListener("mousemove", throttled, { passive: true })
    return () => window.removeEventListener("mousemove", throttled)
  }, [handleMove])

  return m
}
