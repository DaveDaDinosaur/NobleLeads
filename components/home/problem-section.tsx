"use client"

import { useRef } from "react"

import { SectionHeading } from "@/components/growth/section-heading"
import { gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap"

const problems = [
  {
    title: "Referrals",
    body: "Great when they come in. But you can't turn them on when the diary's empty, and you can't plan a team around them.",
  },
  {
    title: "Directories",
    body: "Checkatrade, Bark and Rated People sell the same lead to several firms. You pay every month, win or lose. Stop paying and you've got nothing.",
  },
  {
    title: "Missed calls",
    body: "You're up a scaffold or fitting a kitchen. The phone rings, you can't answer, and they ring the next firm on the list.",
  },
]

const rivals = ["Your firm", "Firm B", "Firm C", "Firm D", "Firm E"]

function SplitVisual() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!root.current || prefersReducedMotion()) return
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", immediateRender: false },
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      })
      tl.from("[data-stamp]", { scale: 0.7, stagger: 0.06, duration: 0.35, ease: "back.out(2)" })
        .from("[data-own-lock]", { scale: 0.7, duration: 0.35, ease: "back.out(2)" }, 0.2)
    },
    { scope: root }
  )

  return (
    <div
      ref={root}
      className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card/40"
      aria-label="A directory sells one lead to five firms. Noble Leads sends that lead to you only."
    >
      <div className="hairline-grid absolute inset-0 opacity-40" aria-hidden />

      <div className="relative px-5 pb-6 pt-6 sm:px-7 sm:pt-7">
        <div data-source className="mx-auto max-w-[240px]">
          <p className="label-mono text-center text-[9px] text-muted-foreground">Homeowner enquiry</p>
          <div className="mt-2 rounded-2xl border border-foreground/15 bg-background/95 p-4 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between">
              <span className="label-mono text-[9px] text-secondary">New enquiry</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <p className="display mt-2 text-2xl text-foreground">Re-roof</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">3-bed semi · Bromley</p>
            <div className="mt-3 h-px bg-border" />
            <p className="mt-2 text-[10px] text-muted-foreground">Est. £6,000</p>
          </div>
        </div>

        <div data-fork className="relative mx-auto h-12 w-full max-w-[420px] origin-top">
          <svg viewBox="0 0 420 48" className="h-full w-full" aria-hidden>
            <path d="M210 0 V12" fill="none" stroke="hsl(var(--border))" strokeWidth="1.5" />
            <path d="M210 12 C210 32 70 32 70 48" fill="none" stroke="hsl(var(--foreground) / 0.25)" strokeWidth="1.5" />
            <path d="M210 12 C210 32 350 32 350 48" fill="none" stroke="hsl(var(--secondary) / 0.7)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-2xl border border-border/80 bg-background/40 p-4 sm:p-5">
            <p className="label-mono text-[9px] text-muted-foreground">Directories</p>
            <p className="mt-1 text-sm font-medium text-foreground">One lead. Sold five times.</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              Checkatrade, Bark, Rated People. Five firms pay. One job.
            </p>

            <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
              {rivals.map((firm) => (
                <li key={firm} data-dir-row className="flex items-center gap-2 py-2.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                  <span className="min-w-0 flex-1 truncate text-[11px] text-foreground/85">Re-roof · £6k</span>
                  <span className="label-mono shrink-0 text-[8px] text-muted-foreground">{firm}</span>
                  <span data-stamp className="label-mono shrink-0 text-[8px] text-red-300/85">
                    Charged
                  </span>
                </li>
              ))}
            </ul>

            <p data-odds className="label-mono mt-4 text-[9px] text-red-300/80">
              Five firms. One job.
            </p>
          </div>

          <div className="rounded-2xl border border-secondary/35 bg-secondary/[0.06] p-4 sm:p-5">
            <p className="label-mono text-[9px] text-secondary">Noble Leads</p>
            <p className="mt-1 text-sm font-medium text-foreground">One lead. Yours only.</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              Lands on your website. The Portal sends it to you. Nobody else sees it.
            </p>

            <div data-own-card className="relative mt-6">
              <div
                className="pointer-events-none absolute -inset-6 rounded-full bg-secondary/15 blur-2xl"
                aria-hidden
              />
              <div className="relative rounded-2xl border border-secondary/50 bg-background/95 p-4 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between">
                  <span className="label-mono text-[9px] text-secondary">Your enquiry</span>
                  <span data-own-lock className="label-mono text-[8px] text-secondary">
                    Exclusive
                  </span>
                </div>
                <p className="display mt-2 text-2xl text-foreground">Re-roof</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">3-bed semi · Bromley</p>
                <div className="mt-3 h-px bg-border" />
                <p className="mt-2 text-[10px] text-muted-foreground">Est. £6,000</p>
                <p className="label-mono mt-3 text-[9px] text-secondary">Your firm · you own it</p>
              </div>
            </div>

            <p data-odds className="label-mono mt-6 text-[9px] text-secondary">
              You own the lead. You keep the job.
            </p>
          </div>
        </div>

        <p className="mt-5 text-center text-[10px] text-muted-foreground/70">
          Illustration of a shared directory lead versus a lead you own.
        </p>
      </div>
    </div>
  )
}

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="02"
          size="lg"
          eyebrow="The problem"
          title={
            <>
              Most trades don{"'"}t have a system.{" "}
              <span className="accent-mono text-muted-foreground">They have habits.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ol className="divide-y divide-border/70 border-y border-border/70">
              {problems.map((problem, i) => (
                <li key={problem.title} className="grid grid-cols-[3rem_1fr] gap-4 py-7 sm:py-9">
                  <span className="label-mono pt-2 text-secondary">0{i + 1}</span>
                  <div>
                    <h3 className="display text-3xl text-foreground sm:text-4xl">{problem.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {problem.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-md text-lg leading-snug text-foreground sm:text-xl">
              Own your leads, don{"'"}t rent them. We build you a system that brings
              enquiries to you and nobody else, and follows up every one.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="lg:sticky lg:top-24">
              <SplitVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
