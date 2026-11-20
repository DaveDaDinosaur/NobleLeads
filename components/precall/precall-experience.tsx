"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, Pencil, Phone, X } from "lucide-react"

import { EASE_OUT, gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap"
import { SplitReveal } from "@/components/motion/split-reveal"
import { CallTicket } from "@/components/precall/call-ticket"
import { PlanCard, planProgress } from "@/components/precall/plan-card"
import { SealArt } from "@/components/precall/precall-art"
import { Footer, ProfileCheck, QuestionStep, type Profile } from "@/components/precall/question-step"
import { trackEvent } from "@/lib/analytics"
import {
  buildQuestions,
  CALL_PHONE,
  CALL_PHONE_HREF,
  callDayLabel,
  callDeliverables,
  isAnswered,
  planLines,
  reactionFor,
  tradeLabel as tradeLabelFor,
  STORAGE_PREFIX,
  type PrecallAnswers,
  type PrecallContext,
  type QuestionId,
} from "@/lib/precall"
import { caseStudies } from "@/lib/proof"

type ScreenId = "welcome" | "check" | QuestionId | "done"
type Saved = { v: 2; screen: ScreenId; answers: PrecallAnswers; profile: Profile; sent?: boolean; declined?: boolean }

function readSaved(key: string): Saved | null {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return null
    const saved = JSON.parse(raw) as Saved
    return saved?.v === 2 ? saved : null
  } catch {
    return null
  }
}

function writeSaved(key: string, saved: Saved) {
  try {
    window.localStorage.setItem(key, JSON.stringify(saved))
  } catch {
    // Private browsing or full storage. The flow still works, it just won't remember progress.
  }
}

function dayPhrase(day?: string) {
  if (!day) return "our call"
  return day === "today" || day === "tomorrow" ? `${day}'s call` : `our call on ${day}`
}

const isDesktop = () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches

export function PrecallExperience({ context }: { context: PrecallContext }) {
  const [profile, setProfile] = useState<Profile>({})
  // What we know, with any corrections from the check screen laid over the CRM's version.
  const known = useMemo<PrecallContext>(
    () => ({
      ...context,
      businessName: profile.businessName ?? context.businessName,
      tradeName: profile.trade ?? context.tradeName,
      town: profile.town ?? context.town,
    }),
    [context, profile]
  )
  const questions = useMemo(() => buildQuestions(known), [known])
  const hasCheck = Boolean(context.businessName || context.tradeName || context.town)
  const screens = useMemo<ScreenId[]>(
    () => ["welcome", ...(hasCheck ? (["check"] as const) : []), ...questions.map((q) => q.id), "done"],
    [hasCheck, questions]
  )
  const storageKey = `${STORAGE_PREFIX}${context.contactId ?? "guest"}`
  const day = callDayLabel(context.callStart)
  const firstName = context.firstName

  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<PrecallAnswers>({})
  // After an answer: what they picked, and what it means for them, held for a beat before the next question.
  const [payoff, setPayoff] = useState<Payoff | null>(null)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [declined, setDeclined] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  const stageRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const planButtonRef = useRef<HTMLButtonElement>(null)
  const asideRef = useRef<HTMLDivElement>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const saveQueue = useRef<Promise<unknown>>(Promise.resolve())
  const partialSig = useRef("")
  const payoffTimer = useRef<number>(undefined)
  const answersRef = useRef(answers)
  answersRef.current = answers

  const screen = screens[Math.min(index, screens.length - 1)]
  const question = questions.find((q) => q.id === screen)
  const lines = useMemo(() => planLines(answers, known, questions), [answers, known, questions])
  const pathScreens: ScreenId[] = screens.filter((s) => s !== "welcome" && s !== "done")
  const pathIndex = pathScreens.indexOf(screen)
  const answeredCount = questions.filter((q) => isAnswered(q.id, answers)).length
  const onPath = pathIndex >= 0

  // Restore progress, if they've been here before.
  useEffect(() => {
    const saved = readSaved(storageKey)
    if (saved) {
      setAnswers(saved.answers ?? {})
      setProfile(saved.profile ?? {})
      setSent(Boolean(saved.sent))
      setDeclined(Boolean(saved.declined))
      const at = screens.indexOf(saved.screen)
      if (at > 0) {
        setIndex(at)
        if (saved.screen !== "done") trackEvent("precall_resume", { step: at })
      }
    }
    setHydrated(true)
    trackEvent("precall_view", { known_contact: context.contactId ? 1 : 0, has_call_time: context.callStart ? 1 : 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (hydrated) writeSaved(storageKey, { v: 2, screen, answers, profile, sent, declined })
  }, [hydrated, storageKey, screen, answers, profile, sent, declined])

  // Remember where the last tap was, so answers can fly from the finger to the plan.
  useEffect(() => {
    pointer.current = { x: window.innerWidth / 2, y: window.innerHeight - 90 }
    const onDown = (e: PointerEvent) => {
      pointer.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("pointerdown", onDown, { passive: true })
    return () => window.removeEventListener("pointerdown", onDown)
  }, [])

  const post = useCallback(
    (stage: "progress" | "partial" | "complete", next: PrecallAnswers, match?: { email?: string; phone?: string }) => {
      if (!context.contactId && !match) return Promise.resolve(false)
      const body = JSON.stringify({ contactId: context.contactId, stage, answers: next, match })
      const run = saveQueue.current.then(() =>
        fetch("/api/precall", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true })
          .then((res) => res.ok)
          .catch(() => false)
      )
      saveQueue.current = run.catch(() => undefined)
      return run
    },
    [context.contactId]
  )

  // If they leave part way, send what they've given so far as a note. Once per new set of answers.
  useEffect(() => {
    if (!context.contactId) return
    const onHide = () => {
      if (document.visibilityState !== "hidden" || !onPath) return
      const current = answersRef.current
      const sig = JSON.stringify(current)
      if (sig === "{}" || sig === partialSig.current) return
      partialSig.current = sig
      const body = JSON.stringify({ contactId: context.contactId, stage: "partial", answers: current })
      try {
        navigator.sendBeacon("/api/precall", new Blob([body], { type: "text/plain" }))
      } catch {
        // Nothing to do. Each step is already saved as they go.
      }
    }
    document.addEventListener("visibilitychange", onHide)
    return () => document.removeEventListener("visibilitychange", onHide)
  }, [context.contactId, onPath])

  // The pieces of each new screen settle in quickly, top to bottom.
  useGSAP(
    () => {
      const stage = stageRef.current
      if (!stage || prefersReducedMotion()) return
      const items = stage.querySelectorAll("[data-head], [data-anim]")
      gsap.fromTo(items, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: EASE_OUT, stagger: 0.06, delay: 0.1, clearProps: "transform,opacity" })
      // Throttled animation frames must never leave a screen invisible.
      const safety = window.setTimeout(() => gsap.set(items, { clearProps: "transform,opacity" }), 1800)
      return () => window.clearTimeout(safety)
    },
    { dependencies: [screen, declined, Boolean(payoff)], scope: stageRef }
  )

  useEffect(() => () => window.clearTimeout(payoffTimer.current), [])

  /**
   * Moves between screens without sliding: the current content lifts and fades, the next settles up into place.
   * Never relies on an animation finishing, so throttled frames can't strand anyone between screens.
   */
  function go(update: () => void, direction: 1 | -1 = 1) {
    const stage = stageRef.current
    window.clearTimeout(payoffTimer.current)
    const swap = () => {
      update()
      scrollRef.current?.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" })
    }
    if (!stage || prefersReducedMotion()) {
      swap()
      return
    }
    let finished = false
    const complete = () => {
      if (finished) return
      finished = true
      out.kill()
      swap()
      gsap.fromTo(stage, { y: 20 * direction, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: EASE_OUT, clearProps: "transform,opacity" })
      window.setTimeout(() => gsap.set(stage, { clearProps: "transform,opacity" }), 1100)
    }
    const out = gsap.to(stage, { y: -12 * direction, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: complete })
    window.setTimeout(complete, 420)
  }

  /** A little chip carrying their answer from their finger into the plan. */
  function flyToPlan(text: string) {
    if (prefersReducedMotion()) return
    const target = isDesktop() ? asideRef.current : planButtonRef.current
    if (!target) return
    const rect = target.getBoundingClientRect()
    const chip = document.createElement("span")
    chip.textContent = text.length > 26 ? `${text.slice(0, 25)}…` : text
    chip.className =
      "pointer-events-none fixed left-0 top-0 z-[70] whitespace-nowrap rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground shadow-[0_8px_30px_hsl(42_40%_56%/0.35)]"
    document.body.appendChild(chip)
    const width = chip.offsetWidth
    const start = { x: pointer.current.x - width / 2, y: pointer.current.y - 14 }
    const end = { x: rect.left + rect.width / 2 - width / 2, y: rect.top + Math.min(rect.height / 2, 60) - 14 }
    const cleanup = () => chip.remove()
    gsap.set(chip, start)
    gsap.to(chip, {
      motionPath: {
        path: [start, { x: (start.x + end.x) / 2 + 30, y: Math.min(start.y, end.y) - 70 }, end],
        curviness: 1.4,
      },
      scale: 0.5,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        cleanup()
        gsap.fromTo(target, { scale: isDesktop() ? 1.015 : 1.25 }, { scale: 1, duration: 0.6, ease: "back.out(3)", clearProps: "transform" })
      },
    })
    window.setTimeout(cleanup, 1400)
  }

  function start() {
    trackEvent("precall_start")
    setDeclined(false)
    const firstOpen = answeredCount > 0 ? screens.findIndex((s, i) => i > 0 && s !== "check" && s !== "done" && !isAnswered(s as QuestionId, answers)) : 1
    go(() => {
      setPayoff(null)
      setIndex(firstOpen > 0 ? firstOpen : 1)
    })
  }

  function decline() {
    trackEvent("precall_decline")
    go(() => {
      setDeclined(true)
      setIndex(screens.length - 1)
    })
  }

  function checked(changes: Profile) {
    const next: PrecallAnswers = {
      ...answers,
      ...(changes.trade ? { trade: changes.trade } : {}),
      ...(changes.town ? { town: changes.town } : {}),
      ...(changes.businessName ? { businessName: changes.businessName } : {}),
    }
    setProfile((p) => ({ ...p, ...changes }))
    setAnswers(next)
    const fixed = Object.keys(changes).length > 0
    if (fixed) post("progress", next)
    trackEvent("precall_check", { corrected: fixed ? 1 : 0 })
    go(() => {
      setPayoff(null)
      setIndex(index + 1)
    })
  }

  function finish(next: PrecallAnswers) {
    const skipped = next.skipped?.length ?? 0
    trackEvent("precall_complete", { answered: questions.length - skipped, skipped })
    if (context.contactId) post("complete", next).then((ok) => ok && setSent(true))
    go(() => {
      setDeclined(false)
      setIndex(screens.length - 1)
    })
  }

  function commit(id: QuestionId, next: PrecallAnswers, skippedIt: boolean) {
    const before = planLines(answers, known, questions)
    const after = planLines(next, known, questions)
    const changed = after.find((line) => line.value && line.value !== before.find((b) => b.id === line.id)?.value)
    setAnswers(next)
    if (changed?.value && !skippedIt) flyToPlan(changed.value)

    const last = screen === questions[questions.length - 1]?.id
    if (!last) post("progress", next)
    const text = skippedIt ? "No problem. We'll cover that one on the call." : reactionFor(id, next, known)
    const advance = () => {
      window.clearTimeout(payoffTimer.current)
      if (last) {
        finish(next)
        return
      }
      go(() => {
        setPayoff(null)
        setIndex((i) => i + 1)
      })
    }
    if (!text) {
      advance()
      return
    }
    // Long enough to read comfortably, short enough that it never feels like waiting.
    const words = text.split(/\s+/).length
    const hold = prefersReducedMotion() ? 2600 : Math.min(5600, Math.max(skippedIt ? 1900 : 2900, 1400 + words * 140))
    setPayoff({
      id,
      answer: skippedIt ? "Skipped for now" : (summaryFor(id, next) ?? "Got it"),
      text,
      hold,
      skipped: skippedIt,
      advance,
    })
    window.clearTimeout(payoffTimer.current)
    payoffTimer.current = window.setTimeout(advance, hold)
  }

  /** A short version of their answer, for the chip and the folded rows. */
  function summaryFor(id: QuestionId, a: PrecallAnswers) {
    if (id === "agenda") return a.agenda && a.agenda.length > 60 ? `${a.agenda.slice(0, 57)}...` : a.agenda
    const line = planLines(a, known, questions).find((l) => l.id === id)
    return line?.value
  }

  function answer(patch: Partial<PrecallAnswers>) {
    if (!question) return
    const next: PrecallAnswers = { ...answers, ...patch, skipped: (answers.skipped ?? []).filter((id) => id !== question.id) }
    trackEvent("precall_answer", { question: question.id, step: pathIndex + 1 })
    commit(question.id, next, false)
  }

  function skip() {
    if (!question) return
    const next: PrecallAnswers = { ...answers, skipped: Array.from(new Set([...(answers.skipped ?? []), question.id])) }
    trackEvent("precall_skip", { question: question.id, step: pathIndex + 1 })
    commit(question.id, next, true)
  }

  function back() {
    // During the "what this means" beat, back just reopens the question they answered.
    if (payoff) {
      window.clearTimeout(payoffTimer.current)
      go(() => setPayoff(null), -1)
      return
    }
    go(() => setIndex(Math.max(0, index - 1)), -1)
  }

  function jumpTo(target: ScreenId) {
    trackEvent("precall_edit", { step: target })
    go(() => {
      setPayoff(null)
      setHistoryOpen(false)
      setIndex(screens.indexOf(target))
    }, -1)
  }

  // Steps already done, newest last, for the folded rows above the current question.
  const history = pathScreens.slice(0, Math.max(pathIndex, 0)).map((id) => {
    if (id === "check") {
      return { id, label: "Details", value: [known.businessName, tradeLabelFor(known.tradeName)].filter(Boolean).join(", ") }
    }
    const qid = id as QuestionId
    const skippedIt = answers.skipped?.includes(qid)
    return {
      id,
      label: questions.find((q) => q.id === qid)?.short ?? qid,
      value: skippedIt ? "Skipped" : (summaryFor(qid, answers) ?? "Skipped"),
    }
  })

  const filled = planProgress(lines)

  return (
    <div className="fixed inset-0 flex h-[100dvh] flex-col bg-background">
      {/* Top bar: back, progress along the path, and the plan they're building. */}
      <header className="pt-safe relative z-20 flex-shrink-0">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-3 sm:px-6">
          {onPath ? (
            <button
              type="button"
              onClick={back}
              aria-label="Back"
              className="min-touch flex flex-shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : (
            <Link href="/" className="min-touch flex flex-shrink-0 items-center gap-2 pl-1" aria-label="NobleLeads home">
              <Image src="/images/noble-leads-logo.png" alt="" width={20} height={25} sizes="20px" priority className="object-contain" />
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Noble <span className="text-gold-ripple">Leads</span>
              </span>
            </Link>
          )}

          <div className="flex min-w-0 flex-1 items-center gap-1" aria-hidden={!onPath}>
            {onPath
              ? pathScreens.map((s, i) => (
                  <span key={s} className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                    <span
                      className="block h-full rounded-full bg-secondary transition-all duration-500 ease-out"
                      style={{ width: i < pathIndex ? "100%" : i === pathIndex ? "35%" : "0%" }}
                    />
                  </span>
                ))
              : null}
          </div>
          {onPath ? (
            <span className="sr-only" aria-live="polite">
              Step {pathIndex + 1} of {pathScreens.length}
            </span>
          ) : null}

          {onPath ? (
            <button
              ref={planButtonRef}
              type="button"
              onClick={() => setSheetOpen(true)}
              className="min-touch relative flex flex-shrink-0 items-center gap-2 rounded-md border border-border bg-card py-1.5 pl-1.5 pr-3 lg:hidden"
              aria-label={`Your plan, ${filled} of ${lines.length} filled in`}
            >
              <ProgressRing value={filled / Math.max(lines.length, 1)} />
              <span className="label-mono text-[10px] text-foreground">Plan</span>
            </button>
          ) : (
            <a
              href={CALL_PHONE_HREF}
              onClick={() => trackEvent("precall_call_click", { location: "header" })}
              className="min-touch inline-flex flex-shrink-0 items-center gap-2 px-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5 text-secondary" />
              <span className="hidden sm:inline">{CALL_PHONE}</span>
            </a>
          )}
        </div>
      </header>

      <div ref={scrollRef} className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain" data-lenis-prevent>
        <div className="mx-auto flex min-h-full max-w-6xl justify-center gap-14 px-5 sm:px-8 lg:justify-between">
          <div ref={stageRef} className="flex w-full max-w-xl flex-col pt-2 sm:pt-6">
            {screen === "welcome" ? (
              <Welcome
                context={known}
                firstName={firstName}
                day={day}
                questionCount={pathScreens.length}
                resuming={answeredCount > 0}
                onStart={start}
                onDecline={decline}
              />
            ) : null}

            {screen === "check" ? (
              <div className="flex flex-1 flex-col">
                <StepHeading eyebrow="Quick check" title="Have I got this right?" hint="So your plan's built on the right details." />
                <ProfileCheck context={context} onDone={checked} />
              </div>
            ) : null}

            {question ? (
              <div className="flex flex-1 flex-col">
                <History rows={history} open={historyOpen} onToggle={() => setHistoryOpen((o) => !o)} onEdit={jumpTo} />
                <div key={`${question.id}-${payoff ? "payoff" : "ask"}`} className="flex flex-1 flex-col">
                  <SplitReveal
                    key={question.id}
                    as="h2"
                    onLoad
                    duration={payoff ? 0 : 1.2}
                    className={`display mt-4 text-balance leading-[1.02] text-foreground transition-[font-size,color] duration-500 ${
                      payoff ? "text-xl text-foreground/60 sm:text-2xl" : "text-[2rem] sm:text-4xl"
                    }`}
                  >
                    {question.question}
                  </SplitReveal>
                  {payoff ? (
                    <PayoffBeat payoff={payoff} />
                  ) : (
                    <>
                      <p className="mt-2.5 text-[15px] text-muted-foreground" data-anim>
                        {question.hint}
                      </p>
                      <QuestionStep
                        key={question.id}
                        question={question}
                        answers={answers}
                        context={known}
                        isLast={question.id === questions[questions.length - 1]?.id}
                        onAnswer={answer}
                        onSkip={skip}
                      />
                    </>
                  )}
                </div>
              </div>
            ) : null}

            {screen === "done" ? (
              <Done
                context={known}
                firstName={firstName}
                day={day}
                answers={answers}
                lines={lines}
                declined={declined}
                sent={sent}
                onSent={() => setSent(true)}
                post={post}
                onStart={start}
                onEdit={() =>
                  go(() => {
                    setPayoff(null)
                    setIndex(hasCheck ? 2 : 1)
                  }, -1)
                }
              />
            ) : null}
          </div>

          <aside className="hidden w-[360px] flex-shrink-0 lg:block">
            <div ref={asideRef} className="sticky top-6 py-6">
              <PlanCard lines={lines} businessName={known.businessName} ready={screen === "done" && !declined} dayLabel={day} />
            </div>
          </aside>
        </div>
      </div>

      {sheetOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-background/70 backdrop-blur-sm lg:hidden" onClick={() => setSheetOpen(false)}>
          <div
            className="pb-safe max-h-[85dvh] overflow-y-auto overscroll-contain rounded-t-lg border-t border-border bg-background px-3 pt-3"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                aria-label="Close your plan"
                className="min-touch flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <PlanCard lines={lines} businessName={known.businessName} dayLabel={day} />
            <div className="h-4" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

function ProgressRing({ value }: { value: number }) {
  const r = 9
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 -rotate-90" aria-hidden>
      <circle cx="12" cy="12" r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
      <circle
        cx="12"
        cy="12"
        r={r}
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - value)}
        style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(.2,.8,.2,1)" }}
      />
    </svg>
  )
}

function StepHeading({ eyebrow, title, hint }: { eyebrow?: string; title: string; hint: string }) {
  return (
    <>
      {eyebrow ? (
        <p className="label-mono mt-4 text-secondary" data-head>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display mt-4 text-balance text-[2rem] leading-[1.02] text-foreground sm:text-4xl" data-head>
        {title}
      </h2>
      <p className="mt-2.5 text-[15px] text-muted-foreground" data-head>
        {hint}
      </p>
    </>
  )
}

function Avatar({ size = "h-8 w-8" }: { size?: string }) {
  return (
    <span className={`flex ${size} flex-shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 text-xs font-semibold text-secondary`}>
      G
    </span>
  )
}

type Payoff = { id: QuestionId; answer: string; text: string; hold: number; skipped: boolean; advance: () => void }

/**
 * The beat after each answer. Their answer settles into a chip, then a clear line on what it means for them,
 * with a thin gold rule that fills while it holds. Tap anywhere on it to move straight on.
 */
function PayoffBeat({ payoff }: { payoff: Payoff }) {
  const ref = useRef<HTMLButtonElement>(null)
  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return
      gsap.from("[data-chip]", { y: 12, opacity: 0, scale: 0.96, duration: 0.7, ease: EASE_OUT })
      gsap.from("[data-rule]", { scaleY: 0, transformOrigin: "top", duration: 1, ease: EASE_OUT, delay: 0.3 })
    },
    { scope: ref }
  )
  return (
    <button
      ref={ref}
      type="button"
      onClick={payoff.advance}
      className="mt-5 flex flex-1 flex-col text-left"
      aria-label="Next question"
    >
      <span
        data-chip
        className={`inline-flex max-w-full items-center gap-2 self-start rounded-md border px-3 py-2 text-sm ${
          payoff.skipped ? "border-border text-muted-foreground" : "border-secondary/50 bg-secondary/10 text-foreground"
        }`}
      >
        {payoff.skipped ? null : (
          <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm bg-secondary">
            <Check className="h-2.5 w-2.5 text-secondary-foreground" strokeWidth={3} />
          </span>
        )}
        <span className="truncate">{payoff.answer}</span>
      </span>

      <span className="relative mt-10 block pl-5">
        <span data-rule className="absolute inset-y-0 left-0 w-0.5 bg-secondary" aria-hidden />
        {payoff.skipped ? null : (
          <span className="label-mono block text-secondary" data-anim>
            What this means for you
          </span>
        )}
        <SplitReveal
          as="p"
          onLoad
          delay={0.45}
          duration={1.2}
          className="display mt-3 text-balance text-[1.5rem] leading-[1.22] text-foreground sm:text-[1.85rem]"
        >
          <span aria-live="polite">{payoff.text}</span>
        </SplitReveal>
      </span>

      <span className="mt-auto block pb-8 pt-10" aria-hidden>
        <span className="block h-px w-full overflow-hidden bg-border">
          <span className="precall-hold block h-full bg-secondary" style={{ animationDuration: `${payoff.hold}ms` }} />
        </span>
        <span className="label-mono mt-3 block text-[10px] text-muted-foreground">Tap to carry on</span>
      </span>
    </button>
  )
}

/** Everything answered so far, folded into slim rows. The latest shows; earlier ones tuck under a toggle.
 *  Hidden on phones, where the plan button in the top bar already holds every answer. */
function History({
  rows,
  open,
  onToggle,
  onEdit,
}: {
  rows: { id: ScreenId; label: string; value: string }[]
  open: boolean
  onToggle: () => void
  onEdit: (id: ScreenId) => void
}) {
  if (!rows.length) return null
  const earlier = rows.slice(0, -1)
  const shown = open ? rows : rows.slice(-1)
  return (
    <div className="mt-2 hidden border-y border-border sm:block" data-anim>
      {earlier.length ? (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="min-touch flex w-full items-center justify-between py-2 text-left"
        >
          <span className="label-mono text-[10px] text-muted-foreground">
            {open ? "Your answers" : `${earlier.length} earlier ${earlier.length === 1 ? "answer" : "answers"}`}
          </span>
          <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      ) : null}
      <ul>
        {shown.map((row) => (
          <li key={row.id} className="border-t border-border first:border-t-0">
            <button
              type="button"
              onClick={() => onEdit(row.id)}
              className="group min-touch flex w-full items-center gap-3 py-2.5 text-left"
            >
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm bg-secondary/15">
                {row.value === "Skipped" ? (
                  <span className="h-px w-2 bg-muted-foreground" />
                ) : (
                  <Check className="h-2.5 w-2.5 text-secondary" strokeWidth={3} />
                )}
              </span>
              <span className="label-mono w-24 flex-shrink-0 truncate text-[10px] text-muted-foreground">{row.label}</span>
              <span className="min-w-0 flex-1 truncate text-sm text-foreground/85">{row.value}</span>
              <Pencil className="h-3 w-3 flex-shrink-0 text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Welcome({
  context,
  firstName,
  day,
  questionCount,
  resuming,
  onStart,
  onDecline,
}: {
  context: PrecallContext
  firstName?: string
  day?: string
  questionCount: number
  resuming: boolean
  onStart: () => void
  onDecline: () => void
}) {
  const business = context.businessName
  const minutes = questionCount <= 6 ? "About a minute" : "About 2 minutes"
  const path = [
    { title: "You tell me about the business", body: `${minutes}. Mostly taps, skip anything.`, now: true },
    { title: "I do the homework", body: "Your local searches, what they cost, and who you're up against." },
    {
      title: "We go through your plan",
      body: `${!day ? "On the call" : day === "today" || day === "tomorrow" ? day.charAt(0).toUpperCase() + day.slice(1) : `On ${day}`}. Your numbers, not a sales pitch.`,
    },
  ]

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="display mt-4 text-balance text-[2.4rem] leading-[0.98] text-foreground sm:text-5xl" data-head>
        {firstName ? `Thanks, ${firstName}. You're booked in.` : "Thanks. You're booked in."}
      </h1>

      <div className="mt-6" data-anim>
        <CallTicket context={context} />
      </div>

      <div className="mt-8 flex items-start gap-3" data-anim>
        <Avatar size="h-9 w-9" />
        <div>
          <p className="text-[15px] leading-relaxed text-foreground">
            Most calls like this open with twenty minutes of questions. I{"'"}d rather spend ours showing you what
            {business ? <> {business}</> : " your business"} could be winning.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            {resuming
              ? "You've made a start already. Finish off and I'll have everything I need."
              : context.fromSurvey
                ? "You've already told me the basics. A few more taps and I'll do the homework for you."
                : "Give me a minute now and I'll do the homework for you."}
          </p>
          <p className="label-mono mt-3 text-[10px] text-muted-foreground">George, founder</p>
        </div>
      </div>

      <ol className="relative mt-8 space-y-5 pl-9" data-anim>
        <span className="absolute bottom-2 left-[0.6875rem] top-2 w-px bg-border" aria-hidden />
        {path.map((item, i) => (
          <li key={item.title} className="relative">
            <span
              className={`absolute -left-9 top-0.5 flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full border text-[10px] font-semibold ${
                item.now ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-background text-muted-foreground"
              }`}
            >
              {i + 1}
            </span>
            {item.now ? <span className="precall-ring-pulse absolute -left-9 top-0.5 h-[1.375rem] w-[1.375rem] rounded-full" aria-hidden /> : null}
            <p className={`text-[15px] font-medium ${item.now ? "text-foreground" : "text-foreground/80"}`}>{item.title}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ol>

      <Footer
        canNext
        onNext={onStart}
        nextLabel={resuming ? "Carry on" : "Let's do it"}
        onSkip={onDecline}
        skipLabel="Not now"
      />
    </div>
  )
}

/** "Here's what I'm preparing for you." Each item ticks off in turn, like work being done. */
function CallPack({ items, animate }: { items: ReturnType<typeof callDeliverables>; animate: boolean }) {
  const [done, setDone] = useState(animate && !prefersReducedMotion() ? 0 : items.length)
  useEffect(() => {
    if (done >= items.length) return
    const timer = window.setTimeout(() => setDone((d) => d + 1), done === 0 ? 700 : 650)
    return () => window.clearTimeout(timer)
  }, [done, items.length])

  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item, i) => {
        const ticked = i < done
        const working = i === done
        return (
          <li
            key={item.id}
            className={`flex items-start gap-3.5 rounded-md border p-4 transition-colors duration-500 ${
              ticked ? "border-secondary/30 bg-secondary/[0.05]" : "border-border bg-card"
            }`}
          >
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center">
              {ticked ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-3 w-3 text-secondary-foreground" strokeWidth={3} />
                </span>
              ) : working ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-secondary/30 border-t-secondary motion-reduce:animate-none" />
              ) : (
                <span className="h-2 w-2 rounded-full bg-border" />
              )}
            </span>
            <div className="min-w-0">
              <p className="text-[15px] font-medium text-foreground">{item.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function Done({
  context,
  firstName,
  day,
  answers,
  lines,
  declined,
  sent,
  onSent,
  post,
  onStart,
  onEdit,
}: {
  context: PrecallContext
  firstName?: string
  day?: string
  answers: PrecallAnswers
  lines: ReturnType<typeof planLines>
  declined: boolean
  sent: boolean
  onSent: () => void
  post: (stage: "complete", next: PrecallAnswers, match?: { email?: string; phone?: string }) => Promise<boolean>
  onStart: () => void
  onEdit: () => void
}) {
  const skipped = answers.skipped?.length ?? 0
  const [contact, setContact] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "missed">("idle")
  const needsMatch = !declined && !context.contactId && !sent
  const items = callDeliverables(answers, context)

  async function sendMatch(e: React.FormEvent) {
    e.preventDefault()
    const value = contact.trim()
    if (!value) return
    setStatus("sending")
    const match = value.includes("@") ? { email: value } : { phone: value }
    const ok = await post("complete", answers, match)
    if (ok) onSent()
    else setStatus("missed")
  }

  return (
    <div className="flex flex-1 flex-col pb-10">
      {declined ? (
        <>
          <p className="label-mono mt-4 text-secondary" data-head>
            No problem
          </p>
          <h2 className="display mt-4 text-balance text-[2rem] leading-[1.02] text-foreground sm:text-4xl" data-head>
            We{"'"}ll cover it all on the call.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground" data-anim>
            Here{"'"}s what you{"'"}ll leave {dayPhrase(day)} with. If you change your mind, a minute of taps now means I can have
            it ready before we speak.
          </p>
        </>
      ) : (
        <>
          <div className="mx-auto mt-2 h-28 w-40" data-anim>
            <SealArt />
          </div>
          <h2 className="display mt-2 text-balance text-center text-[2rem] leading-[1.02] text-foreground sm:text-4xl" data-head>
            {firstName ? `Leave it with us, ${firstName}.` : "Leave it with us."}
          </h2>
          <p className="mt-3 text-center text-[15px] leading-relaxed text-muted-foreground" data-anim>
            Here{"'"}s what we{"'"}re getting ready for {dayPhrase(day)}.
            {skipped > 0 ? ` The ${skipped === 1 ? "one" : skipped} you skipped, we'll cover on the call.` : ""}
          </p>
        </>
      )}

      <div data-anim>
        <CallPack items={items} animate={!declined} />
      </div>

      {declined ? (
        <button
          type="button"
          onClick={onStart}
          className="min-touch mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-4 text-[15px] font-semibold text-secondary-foreground transition-transform active:scale-[0.98]"
          data-anim
        >
          Go on then, build my plan
        </button>
      ) : null}

      {needsMatch ? (
        <form onSubmit={sendMatch} className="mt-6 rounded-md border border-secondary/30 bg-secondary/[0.05] p-5" data-anim>
          <p className="text-sm font-medium text-foreground">One last thing, so I can match this to your booking.</p>
          <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
            <input
              type="text"
              inputMode="email"
              autoComplete="email"
              aria-label="Your email or mobile"
              placeholder="Email or mobile"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="min-touch w-full min-w-0 flex-1 rounded-md border border-border bg-background px-4 py-3.5 text-base text-foreground outline-none placeholder:text-muted-foreground focus:border-secondary sm:text-sm"
            />
            <button
              type="submit"
              disabled={!contact.trim() || status === "sending"}
              className="min-touch rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground disabled:opacity-40"
            >
              {status === "sending" ? "Sending" : "Send to George"}
            </button>
          </div>
          {status === "missed" ? (
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              I couldn{"'"}t find a booking with that. Try the other one, or call {CALL_PHONE} and I{"'"}ll sort it.
            </p>
          ) : null}
        </form>
      ) : null}

      {sent && !context.contactId ? (
        <p className="mt-4 text-sm text-secondary" data-anim>
          Sent. I{"'"}ve got it.
        </p>
      ) : null}

      {!declined ? (
        <div className="mt-8 lg:hidden" data-anim>
          <PlanCard lines={lines} businessName={context.businessName} ready dayLabel={day} />
        </div>
      ) : null}

      <div className="mt-8" data-anim>
        <p className="label-mono mb-3 text-muted-foreground">Make sure it{"'"}s in your diary</p>
        <CallTicket context={context} />
      </div>

      <div className="mt-10" data-anim>
        <p className="label-mono text-muted-foreground">While you wait</p>
        <ul className="mt-3">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <Link
                href={study.href}
                target="_blank"
                onClick={() => trackEvent("precall_case_study", { slug: study.slug })}
                className="group grid grid-cols-[1fr_auto] items-start gap-4 border-b border-border py-4"
              >
                <div>
                  <p className="label-mono text-[10px] text-muted-foreground">{study.sector}</p>
                  <p className="mt-1 font-medium text-foreground transition-colors group-hover:text-secondary">{study.client}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{study.result}</p>
                </div>
                <ArrowUpRight className="mt-5 h-4 w-4 text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {!declined ? (
        <button
          type="button"
          onClick={onEdit}
          className="min-touch mt-8 inline-flex items-center gap-2 self-start rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-secondary/50"
          data-anim
        >
          <ArrowLeft className="h-4 w-4" />
          Change an answer
        </button>
      ) : null}

      <p className="mt-10 text-xs text-muted-foreground">
        NobleLeads. Lead systems for UK trades.{" "}
        <Link href="/privacy-policy" className="underline-offset-4 hover:underline">
          Privacy policy
        </Link>
      </p>
    </div>
  )
}
