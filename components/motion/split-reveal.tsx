"use client"

import { useRef, type ReactNode } from "react"

import { EASE_OUT, gsap, prefersReducedMotion, SplitText, useGSAP } from "@/components/motion/gsap"

type SplitRevealProps = {
  as?: "div" | "h1" | "h2" | "h3" | "p"
  className?: string
  children: ReactNode
  delay?: number
  onLoad?: boolean
}

export function SplitReveal({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
  onLoad = false,
}: SplitRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const Comp = Tag as "div"

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      gsap.set(el, { visibility: "visible" })
      if (prefersReducedMotion()) return

      const split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "reveal-line-inner",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 115,
            duration: 1.2,
            ease: EASE_OUT,
            stagger: 0.09,
            delay,
            scrollTrigger: onLoad ? undefined : { trigger: el, start: "top 88%", once: true },
          })
        },
      })

      return () => split.revert()
    },
    { scope: ref }
  )

  return (
    <Comp ref={ref} className={className} data-split>
      {children}
    </Comp>
  )
}
