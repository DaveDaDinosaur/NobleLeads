"use client"

/**
 * One field of dots that lives across the whole pre-call flow, in the spirit of the homepage hero.
 * It forms whatever picture belongs to the current step, inside that step's placeholder. When the
 * step changes the dots break apart, travel down the page and re-form as the next picture, so each
 * answer visibly builds the next part. Drawn on a plain 2D canvas so it stays smooth on older phones.
 */

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

import { prefersReducedMotion } from "@/components/motion/gsap"
import type { Dot, Shape } from "@/components/precall/dot-shapes"

const COUNT = 520
const GOLD = [214, 176, 102]
const PALE = [219, 224, 240]

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  /** Frames to keep drifting before heading for the target. Staggers the re-forming. */
  wait: number
  target?: Dot
  alpha: number
  gold: number
  size: number
  seed: number
}

export type DotStageHandle = {
  /** Breaks an element (an answer chip) into dots that fly into the picture. */
  burstFrom: (element: Element | null) => void
}

type DotStageProps = {
  /** Id of the element the picture should fill. */
  anchorId: string
  shape: Shape
  /** The scrolling element the anchors live in. */
  scroller: React.RefObject<HTMLDivElement | null>
}

export const DotStage = forwardRef<DotStageHandle, DotStageProps>(function DotStage({ anchorId, shape, scroller }, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const live = useRef({ anchorId, shape, lastKey: "", lastAnchor: "" })
  live.current.anchorId = anchorId
  live.current.shape = shape

  useImperativeHandle(ref, () => ({
    burstFrom(element) {
      const canvas = canvasRef.current
      const box = scroller.current
      if (!element || !canvas || !box || prefersReducedMotion()) return
      const rect = element.getBoundingClientRect()
      const origin = box.getBoundingClientRect()
      const list = particles.current
      for (let n = 0; n < 60; n++) {
        const p = list[Math.floor(Math.random() * list.length)]
        p.x = rect.left - origin.left + Math.random() * rect.width
        p.y = rect.top - origin.top + box.scrollTop + Math.random() * rect.height
        p.vx = (Math.random() - 0.5) * 3
        p.vy = -1 - Math.random() * 3
        p.wait = 4 + Math.random() * 10
        p.alpha = 1
        p.gold = 1
      }
    },
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    const box = scroller.current
    if (!canvas || !box) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const reduced = prefersReducedMotion()

    if (!particles.current.length) {
      particles.current = Array.from({ length: COUNT }, (_, i) => ({
        x: Math.random() * box.clientWidth,
        y: Math.random() * box.clientHeight * 0.6,
        vx: 0,
        vy: 0,
        wait: 0,
        alpha: 0,
        gold: Math.random() > 0.5 ? 1 : 0,
        size: 0.8 + Math.random() * 0.7,
        seed: i * 12.9898,
      }))
    }

    let width = 0
    let height = 0
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = box.clientWidth
      height = box.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(box)

    /** Hands each particle a dot in the new shape. Spare particles become faint dust around it. */
    const assign = (next: Shape, scatter: boolean) => {
      const list = particles.current
      const dust = Math.max(COUNT - next.dots.length, 0)
      list.forEach((p, i) => {
        if (i < next.dots.length) {
          p.target = next.dots[i]
        } else {
          const k = i - next.dots.length
          const a = (k / Math.max(dust, 1)) * Math.PI * 2 * 7.3 + p.seed
          p.target = {
            x: next.vb[0] / 2 + Math.cos(a) * next.vb[0] * (0.25 + ((k * 37) % 100) / 400),
            y: next.vb[1] / 2 + Math.sin(a) * next.vb[1] * (0.25 + ((k * 53) % 100) / 400),
            gold: p.gold,
            alpha: 0.07,
          }
        }
        if (scatter && !reduced) {
          // Break apart: a gentle push, then each dot heads for its new place a moment apart.
          p.vx += (Math.random() - 0.5) * 2.4
          p.vy += (Math.random() - 0.5) * 2.4
          p.wait = Math.random() * 22
        }
      })
    }

    let frame = 0
    let raf = 0
    let last = performance.now()
    const started = last
    const draw = (now: number = performance.now()) => {
      raf = requestAnimationFrame(draw)
      frame++
      // Time-based, so slow or throttled devices still land every dot in the right place.
      const dt = Math.min((now - last) / 16.67, 30)
      last = now
      const ease = 1 - Math.pow(0.9, dt)
      const fade = 1 - Math.pow(0.92, dt)
      const damp = Math.pow(0.94, dt)
      const { anchorId: id, shape: current } = live.current
      if (current.key !== live.current.lastKey) {
        assign(current, live.current.lastKey !== "")
        live.current.lastKey = current.key
      } else if (frame % 6 === 0 || id !== live.current.lastAnchor) {
        assign(current, false)
      }
      live.current.lastAnchor = id

      const anchor = document.getElementById(id)
      const origin = box.getBoundingClientRect()
      const scroll = box.scrollTop
      let ox = width / 2
      let oy = scroll + height * 0.3
      let scale = 1
      let visible = false
      if (anchor) {
        const r = anchor.getBoundingClientRect()
        if (r.width > 0 && r.height > 0) {
          scale = Math.min(r.width / current.vb[0], r.height / current.vb[1])
          ox = r.left - origin.left + (r.width - current.vb[0] * scale) / 2
          oy = r.top - origin.top + scroll + (r.height - current.vb[1] * scale) / 2
          visible = true
        }
      }

      const time = (now - started) / 1000
      ctx.clearRect(0, 0, width, height)
      for (const p of particles.current) {
        const t = p.target
        if (!t) continue
        let tx = t.x
        let ty = t.y
        if (t.flow) {
          const f = t.flow
          const k = (time * f.speed + f.offset) % 1
          const u = 1 - k
          tx = u * u * f.ax + 2 * u * k * f.cx + k * k * f.bx
          ty = u * u * f.ay + 2 * u * k * f.cy + k * k * f.by
        }
        const sx = ox + tx * scale
        const sy = oy + ty * scale
        const targetAlpha = visible ? (t.alpha ?? 0.6) : 0

        if (reduced) {
          p.x = sx
          p.y = sy
          p.alpha = targetAlpha
          p.gold = t.gold ?? 0
        } else if (p.wait > 0) {
          p.wait -= dt
          p.x += p.vx * dt
          p.y += p.vy * dt
          p.vx *= damp
          p.vy *= damp
        } else {
          const drift = t.flow ? 0 : 0.5
          p.x += (sx + Math.sin(time * 0.9 + p.seed) * drift - p.x) * ease
          p.y += (sy + Math.cos(time * 0.7 + p.seed) * drift - p.y) * ease
          p.vx *= damp
          p.vy *= damp
        }
        p.alpha += (targetAlpha - p.alpha) * fade
        p.gold += ((t.gold ?? 0) - p.gold) * fade

        const y = p.y - scroll
        if (p.alpha < 0.02 || y < -10 || y > height + 10) continue
        const radius = (t.bright ? 1.9 : 1.25) * p.size
        const r = Math.round(PALE[0] + (GOLD[0] - PALE[0]) * p.gold)
        const g = Math.round(PALE[1] + (GOLD[1] - PALE[1]) * p.gold)
        const b = Math.round(PALE[2] + (GOLD[2] - PALE[2]) * p.gold)
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha.toFixed(3)})`
        ctx.beginPath()
        ctx.arc(p.x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [scroller])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-10" aria-hidden />
})
