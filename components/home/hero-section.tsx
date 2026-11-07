"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"

import { SurveyCTA } from "@/components/growth/survey-cta"
import { SplitReveal } from "@/components/motion/split-reveal"
import { EASE_OUT, gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap"
import { formatGBP, MIN_JOB_VALUE } from "@/lib/offer"

const LeadField = dynamic(
  () => import("@/components/home/lead-field").then((mod) => ({ default: mod.LeadField })),
  { ssr: false }
)

const path = [
  { n: "01", title: "Found on Google", body: "Your ads and profile, in front of people searching now." },
  { n: "02", title: "Answered in seconds", body: "Every call and form gets a reply, even on the tools." },
  { n: "03", title: "Booked in your diary", body: "Followed up until they say yes. Then a review." },
]

function HeroPath() {
  return (
    <ol className="grid grid-cols-1 border-t border-foreground/15 sm:grid-cols-3" data-hero-fade>
      {path.map((step, i) => (
        <li
          key={step.n}
          className="relative border-b border-foreground/10 py-4 sm:border-b-0 sm:py-5 sm:pr-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6"
        >
          <span
            className="hero-path-bar absolute left-0 top-[-1px] h-px w-full origin-left bg-secondary"
            style={{ animationDelay: `${1.4 + i * 0.5}s` }}
            aria-hidden
          />
          <p className="label-mono text-secondary">{step.n}</p>
          <p className="mt-2 text-base font-medium text-foreground">{step.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  )
}

export function HeroSection() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from("[data-hero-fade]", {
        autoAlpha: 0,
        y: 24,
        duration: 1.2,
        ease: EASE_OUT,
        stagger: 0.12,
        delay: 0.7,
      })
      gsap.to("[data-hero-content]", {
        yPercent: -12,
        autoAlpha: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      })
    },
    { scope: root }
  )

  return (
    <section ref={root} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <LeadField />

      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 pb-8 pt-24 sm:px-6 sm:pt-28 lg:px-10"
      >
        <div className="flex items-center justify-between" data-hero-fade>
          <p className="label-mono text-muted-foreground">
            <span className="text-secondary">(N°01)</span> Lead systems for UK trades
          </p>
          <p className="label-mono hidden text-muted-foreground sm:block">
            Jobs worth {formatGBP(MIN_JOB_VALUE)}+
          </p>
        </div>

        <div className="flex flex-1 items-center py-10 lg:py-0">
          <SplitReveal
            as="h1"
            onLoad
            delay={0.15}
            className="display text-[10.4vw] text-foreground sm:text-[9vw] lg:text-[7.4vw] 2xl:text-[116px]"
          >
            <span className="block">More enquiries.</span>
            <span className="block">More booked jobs.</span>
            <span className="block accent-mono text-secondary">All of them yours.</span>
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5" data-hero-fade>
            <p className="max-w-md text-base leading-relaxed text-foreground/75 sm:text-lg">
              We build and run your own lead system for high-value trades. A website, Google
              Ads and follow-up on every enquiry, so more of them turn into booked work.
              Not shared with five other firms, and you own all of it.
            </p>
            <SurveyCTA size="lg" className="mt-7" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <HeroPath />
          </div>
        </div>
      </div>
    </section>
  )
}
