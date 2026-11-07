"use client"

import { useEffect, useRef, useState } from "react"

import { SectionHeading } from "@/components/growth/section-heading"
import { gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap"

const VIMEO_SRC =
  "https://player.vimeo.com/video/1202920123?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1"

export function VideoFeature() {
  const root = useRef<HTMLElement>(null)
  const frame = useRef<HTMLDivElement>(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const el = frame.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true)
          io.disconnect()
        }
      },
      { rootMargin: "400px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.fromTo(
        frame.current,
        { scale: 0.86, borderRadius: 48 },
        {
          scale: 1,
          borderRadius: 24,
          ease: "none",
          scrollTrigger: { trigger: frame.current, start: "top 95%", end: "top 30%", scrub: true },
        }
      )
    },
    { scope: root }
  )

  return (
    <section ref={root} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="03"
          eyebrow="Watch"
          size="md"
          title={
            <>
              Does this <span className="accent-mono text-secondary">sound like you?</span>
            </>
          }
        />
        <div
          ref={frame}
          className="relative mt-12 aspect-video w-full overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_60px_160px_-60px_rgba(0,0,0,0.9)]"
        >
          {load ? (
            <iframe
              src={VIMEO_SRC}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Does this sound like you?"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="label-mono text-muted-foreground">Loading video</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
