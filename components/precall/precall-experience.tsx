"use client"

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Check, Minus, Pencil, Phone, X } from "lucide-react"

import { EASE_OUT, gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap"
import { CallTicket } from "@/components/precall/call-ticket"
import {
  bubbleShape,
  cardShape,
  cloudShape,
  coinsShape,
  diaryShape,
  documentShape,
  houseShape,
  networkShape,
  ringsShape,
  tilesShape,
  type Shape,
} from "@/components/precall/dot-shapes"
import { DotStage, type DotStageHandle } from "@/components/precall/dot-stage"
import { PlanCard, planProgress } from "@/components/precall/plan-card"
import { Footer, ProfileCheck, QuestionStep, type Profile } from "@/components/precall/question-step"
import { trackEvent } from "@/lib/analytics"
import {
  buildQuestions,
  CALL_PHONE,
  CALL_PHONE_HREF,
  callDayLabel,
  callDeliverables,
  effectiveJobValue,
  formatJobValue,
  isAnswered,
  jobValueStops,
  nearestStopIndex,
  planLines,
  radiusOptions,
  reactionFor,
  sourceOptions,
  STORAGE_PREFIX,
  tradeLabel,
  type PrecallAnswers,
  type PrecallContext,
  type Question,
  type QuestionId,
} from "@/lib/precall"
import { caseStudies } from "@/lib/proof"

type Phase = "welcome" | "flow" | "done"
type StepId = "check" | QuestionId
type Mode = "folded" | "recap" | "reveal" | "active"
type Saved = {
  v: 3
  phase: Phase
  stepIndex: number
  answers: PrecallAnswers
  profile: Profile
  payoffs: Partial<Record<StepId, string>>
  sent?: boolean
  declined?: boolean
}

function readSaved(key: string): Saved | null {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return null
    const saved = JSON.parse(raw) as Saved
    return saved?.v === 3 ? saved : null
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

/** Long enough to read the payoff, then the next question builds underneath on its own. */
function readTime(text: string) {
  const words = text.split(/\s+/).length
  return Math.min(Math.max(1100 + words * 60, 1600), 3200)
}

const stepLabels: Record<StepId, string> = {
  check: "Details",
  trade: "Trade",
  jobs: "Jobs",
  area: "Area",
  jobValue: "Typical job",
  capacity: "Target",
  sources: "Work from",
  agenda: "On the call",
}

/** One line saying what they answered, for the answer chip and the folded row. */
function summaryFor(id: StepId, a: PrecallAnswers, known: PrecallContext) {
  switch (id) {
    case "check":
      return [known.businessName, tradeLabel(known.tradeName), known.town].filter(Boolean).join(" · ")
    case "trade":
      return tradeLabel(a.trade)
    case "jobs":
      return [...(a.jobs ?? []), ...(a.jobsOther ? [a.jobsOther] : [])].join(", ") || undefined
    case "area":
      return [a.town ?? known.town, a.radius].filter(Boolean).join(", ") || undefined
    case "jobValue":
      return typeof a.jobValue === "number" ? formatJobValue(a.jobValue) : undefined
    case "capacity":
      return a.capacity ? `${a.capacity} extra jobs a month` : undefined
    case "sources":
      return a.sources?.join(", ") || undefined
    case "agenda":
      return a.agenda ? (a.agenda.length > 90 ? `${a.agenda.slice(0, 88)}…` : a.agenda) : "Nothing in particular"
  }
}

const isDesktop = () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches

export function PrecallExperience({ context }: { context: PrecallContext }) {
  const [profile, setProfile] = useState<Profile>({})
  // What we know, with any corrections from the check step laid over the CRM's version.
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
  const steps = useMemo<StepId[]>(() => [...(hasCheck ? (["check"] as StepId[]) : []), ...questions.map((q) => q.id)], [hasCheck, questions])
  const storageKey = `${STORAGE_PREFIX}${context.contactId ?? "guest"}`
  const day = callDayLabel(context.callStart)
  const firstName = context.firstName

  const [phase, setPhase] = useState<Phase>("welcome")
  const [stepIndex, setStepIndex] = useState(0)
  const [revealing, setRevealing] = useState(false)
  const [answers, setAnswers] = useState<PrecallAnswers>({})
  const [draft, setDraft] = useState<Partial<PrecallAnswers>>({})
  const [payoffs, setPayoffs] = useState<Partial<Record<StepId, string>>>({})
  const [sent, setSent] = useState(false)
  const [declined, setDeclined] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [scrollKey, setScrollKey] = useState(0)

  const scrollRef = useRef<HTMLDivElement>(null)
  const welcomeRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<DotStageHandle>(null)
  const planButtonRef = useRef<HTMLButtonElement>(null)
  const revealTimer = useRef<number>(undefined)
  const saveQueue = useRef<Promise<unknown>>(Promise.resolve())
  const partialSig = useRef("")
  const answersRef = useRef(answers)
  answersRef.current = answers

  const lines = useMemo(() => planLines(answers, known, questions), [answers, known, questions])
  const filled = planProgress(lines)
  const position = phase === "done" ? steps.length : stepIndex
  const currentStep = phase === "flow" ? steps[Math.min(stepIndex, steps.length - 1)] : undefined
  const answeredCount = questions.filter((q) => isAnswered(q.id, answers)).length

  const isStepDone = useCallback(
    (id: StepId, a: PrecallAnswers = answers) =>
      id === "check" ? Boolean(payoffs.check) : isAnswered(id, a) || Boolean(a.skipped?.includes(id)),
    [answers, payoffs.check]
  )

  // Restore progress, if they've been here before.
  useEffect(() => {
    const saved = readSaved(storageKey)
    if (saved) {
      setAnswers(saved.answers ?? {})
      setProfile(saved.profile ?? {})
      setPayoffs(saved.payoffs ?? {})
      setSent(Boolean(saved.sent))
      setDeclined(Boolean(saved.declined))
      if (saved.phase === "flow") {
        setPhase("flow")
        setStepIndex(Math.min(saved.stepIndex, steps.length - 1))
        trackEvent("precall_resume", { step: saved.stepIndex + 1 })
      } else if (saved.phase === "done") {
        setPhase("done")
      }
    }
    setHydrated(true)
    trackEvent("precall_view", { known_contact: context.contactId ? 1 : 0, has_call_time: context.callStart ? 1 : 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (hydrated) writeSaved(storageKey, { v: 3, phase, stepIndex, answers, profile, payoffs, sent, declined })
  }, [hydrated, storageKey, phase, stepIndex, answers, profile, payoffs, sent, declined])

  useEffect(() => () => window.clearTimeout(revealTimer.current), [])

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
      if (document.visibilityState !== "hidden" || phase !== "flow") return
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
  }, [context.contactId, phase])

  /** Eases the thread so `element` sits near the top. Re-aims every frame while blocks above fold away. */
  const scrollToElement = useCallback((find: () => Element | null, offset = 16) => {
    const box = scrollRef.current
    if (!box) return
    const aim = () => {
      const el = find()
      if (!el) return box.scrollTop
      const top = el.getBoundingClientRect().top - box.getBoundingClientRect().top + box.scrollTop - offset
      return Math.max(0, Math.min(top, box.scrollHeight - box.clientHeight))
    }
    if (prefersReducedMotion()) {
      box.scrollTop = aim()
      return
    }
    const from = box.scrollTop
    const proxy = { p: 0 }
    gsap.to(proxy, {
      p: 1,
      duration: 0.9,
      ease: "power3.inOut",
      onUpdate: () => {
        box.scrollTop = from + (aim() - from) * proxy.p
      },
    })
  }, [])

  // After moving on: bring the last answer's payoff to the top, with the new question underneath.
  useEffect(() => {
    if (!scrollKey) return
    const box = scrollRef.current
    scrollToElement(() => box?.querySelector('[data-mode="recap"] [data-payoff]') ?? box?.querySelector('[data-mode="active"]') ?? null)
  }, [scrollKey, scrollToElement])

  // The answer chip breaks into dots that fly up into the picture.
  useEffect(() => {
    if (!revealing || !currentStep) return
    const raf = requestAnimationFrame(() => {
      const box = scrollRef.current
      stageRef.current?.burstFrom(box?.querySelector(`[data-step="${currentStep}"] [data-chip]`) ?? null)
      scrollToElement(() => box?.querySelector(`[data-step="${currentStep}"]`) ?? null, 12)
    })
    return () => cancelAnimationFrame(raf)
  }, [revealing, currentStep, scrollToElement])

  const onDraft = useCallback((patch: Partial<PrecallAnswers>) => setDraft((d) => ({ ...d, ...patch })), [])

  function bumpPlan() {
    const target = isDesktop() ? null : planButtonRef.current
    if (target && !prefersReducedMotion()) {
      gsap.fromTo(target, { scale: 1.18 }, { scale: 1, duration: 0.6, ease: "back.out(3)", clearProps: "transform" })
    }
  }

  function start() {
    trackEvent("precall_start")
    const first = steps.findIndex((id) => !isStepDone(id))
    const go = () => {
      setDeclined(false)
      setPhase(first === -1 ? "done" : "flow")
      setStepIndex(Math.max(first, 0))
      setRevealing(false)
      setDraft({})
      scrollRef.current?.scrollTo({ top: 0 })
    }
    const el = welcomeRef.current
    if (!el || prefersReducedMotion()) return go()
    gsap.to(el, { opacity: 0, y: -12, duration: 0.25, ease: "power2.in", onComplete: go })
    window.setTimeout(go, 400)
  }

  function decline() {
    trackEvent("precall_decline")
    setDeclined(true)
    setPhase("done")
    scrollRef.current?.scrollTo({ top: 0 })
  }

  /** The next step that still needs an answer, or the end. Lets edits jump straight back to where they were. */
  function advance(fromIndex: number, latest: PrecallAnswers, latestPayoffs: Partial<Record<StepId, string>>) {
    const done = (id: StepId) =>
      id === "check" ? Boolean(latestPayoffs.check) : isAnswered(id, latest) || Boolean(latest.skipped?.includes(id))
    const next = steps.findIndex((id, i) => i > fromIndex && !done(id))
    setRevealing(false)
    setDraft({})
    if (next === -1) {
      setPhase("done")
      const skipped = latest.skipped?.length ?? 0
      trackEvent("precall_complete", { answered: questions.length - skipped, skipped })
      if (context.contactId) post("complete", latest).then((ok) => ok && setSent(true))
    } else {
      setStepIndex(next)
    }
    setScrollKey((k) => k + 1)
  }

  /** Shows their answer and what it means for them, then moves on by itself. */
  function reveal(id: StepId, next: PrecallAnswers, payoff: string) {
    const nextPayoffs = { ...payoffs, [id]: payoff }
    setAnswers(next)
    setPayoffs(nextPayoffs)
    setRevealing(true)
    bumpPlan()
    window.clearTimeout(revealTimer.current)
    revealTimer.current = window.setTimeout(() => advance(stepIndex, next, nextPayoffs), readTime(payoff))
  }

  function checked(changes: Profile) {
    const next: PrecallAnswers = {
      ...answers,
      ...(changes.trade ? { trade: changes.trade } : {}),
      ...(changes.town ? { town: changes.town } : {}),
      ...(changes.businessName ? { businessName: changes.businessName } : {}),
    }
    setProfile((p) => ({ ...p, ...changes }))
    const fixed = Object.keys(changes).length > 0
    if (fixed) post("progress", next)
    trackEvent("precall_check", { corrected: fixed ? 1 : 0 })
    const business = changes.businessName ?? known.businessName
    reveal(
      "check",
      next,
      `${fixed ? "Updated, thanks." : "Good."} Everything I prepare will be built around ${business ?? "your business"}, not a template.`
    )
  }

  function answer(question: Question, patch: Partial<PrecallAnswers>) {
    const next: PrecallAnswers = { ...answers, ...patch, skipped: (answers.skipped ?? []).filter((id) => id !== question.id) }
    trackEvent("precall_answer", { question: question.id, step: stepIndex + 1 })
    post("progress", next)
    reveal(question.id, next, reactionFor(question.id, next, known) ?? "Noted. That's going into your plan.")
  }

  function skip(question: Question) {
    const next: PrecallAnswers = { ...answers, skipped: Array.from(new Set([...(answers.skipped ?? []), question.id])) }
    trackEvent("precall_skip", { question: question.id, step: stepIndex + 1 })
    post("progress", next)
    reveal(question.id, next, "No problem. We'll cover that one on the call.")
  }

  /** Go back to any step to change it. Everything else stays as it is. */
  function edit(index: number) {
    window.clearTimeout(revealTimer.current)
    setPhase("flow")
    setRevealing(false)
    setDraft({})
    setStepIndex(index)
    window.setTimeout(() => {
      const box = scrollRef.current
      scrollToElement(() => box?.querySelector('[data-mode="active"]') ?? null)
    }, 60)
  }

  function back() {
    if (revealing) {
      window.clearTimeout(revealTimer.current)
      setRevealing(false)
      return
    }
    if (stepIndex === 0) {
      setPhase("welcome")
      return
    }
    edit(stepIndex - 1)
  }

  // The picture the dots should be making right now, and where on the page.
  const { anchorId, shape } = useMemo((): { anchorId: string; shape: Shape } => {
    if (phase === "welcome") return { anchorId: "stage-welcome", shape: cloudShape() }
    if (phase === "done") return { anchorId: "stage-done", shape: documentShape(!declined) }
    const a = { ...answers, ...draft }
    const id = steps[Math.min(stepIndex, steps.length - 1)]
    const anchor = `stage-${id}`
    switch (id) {
      case "check":
        return { anchorId: anchor, shape: cardShape() }
      case "trade":
        return { anchorId: anchor, shape: tilesShape() }
      case "jobs":
        return { anchorId: anchor, shape: houseShape(Math.min((a.jobs?.length ?? 0) + (a.jobsOther ? 1 : 0), 5)) }
      case "area":
        return { anchorId: anchor, shape: ringsShape(a.radius ? radiusOptions.indexOf(a.radius) : -1) }
      case "jobValue": {
        const value = typeof a.jobValue === "number" ? a.jobValue : (effectiveJobValue(a, known) ?? 5000)
        return { anchorId: anchor, shape: coinsShape(1 + Math.round((nearestStopIndex(value) / (jobValueStops.length - 1)) * 10)) }
      }
      case "capacity":
        return { anchorId: anchor, shape: diaryShape(a.capacity) }
      case "sources":
        return {
          anchorId: anchor,
          shape: networkShape(
            sourceOptions.length,
            (a.sources ?? []).map((s) => sourceOptions.indexOf(s)).filter((i) => i >= 0)
          ),
        }
      case "agenda":
        return { anchorId: anchor, shape: bubbleShape() }
    }
  }, [phase, declined, answers, draft, steps, stepIndex, known])

  const stageOverlay = (id: StepId) => {
    if (id !== "area") return null
    const a = { ...answers, ...draft }
    const town = a.town ?? known.town
    if (!town) return null
    return (
      <span className="label-mono absolute inset-x-0 -bottom-5 text-center text-[10px] text-foreground/80">
        {town}
        {a.radius ? ` · ${a.radius}` : ""}
      </span>
    )
  }

  return (
    <div className="fixed inset-0 flex h-[100dvh] flex-col bg-background">
      <header className="pt-safe relative z-30 flex-shrink-0">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-3 sm:px-6">
          {phase === "flow" ? (
            <button
              type="button"
              onClick={back}
              aria-label="Back"
              className="min-touch flex flex-shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
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

          <div className="flex min-w-0 flex-1 items-center gap-1" aria-hidden>
            {phase === "flow"
              ? steps.map((id, i) => (
                  <span key={id} className="h-[3px] flex-1 overflow-hidden bg-muted">
                    <span
                      className="block h-full bg-secondary transition-all duration-700 ease-out"
                      style={{ width: i < position || (i === position && revealing) ? "100%" : i === position ? "30%" : "0%" }}
                    />
                  </span>
                ))
              : null}
          </div>
          {phase === "flow" ? (
            <span className="sr-only" aria-live="polite">
              Step {position + 1} of {steps.length}
            </span>
          ) : null}

          {phase === "flow" ? (
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

      <div className="relative min-h-0 flex-1">
        <div ref={scrollRef} className="absolute inset-0 overflow-y-auto overscroll-contain" data-lenis-prevent>
          <div className="mx-auto flex max-w-6xl justify-center gap-14 px-5 sm:px-8 lg:justify-between">
            <div className="w-full max-w-xl pt-2 sm:pt-6">
              {phase === "welcome" ? (
                <div ref={welcomeRef}>
                  <Welcome
                    context={known}
                    firstName={firstName}
                    day={day}
                    stepCount={steps.length}
                    resuming={answeredCount > 0}
                    onStart={start}
                    onDecline={decline}
                  />
                </div>
              ) : null}

              {phase !== "welcome" && !(phase === "done" && declined && !answeredCount) ? (
                <ol className="pb-2">
                  {steps.map((id, i) => {
                    if (i > position) return null
                    const mode: Mode =
                      i === position ? (revealing ? "reveal" : "active") : i === position - 1 ? "recap" : "folded"
                    const question = questions.find((q) => q.id === id)
                    return (
                      <StepBlock
                        key={id}
                        id={id}
                        mode={mode}
                        title={id === "check" ? "Have I got this right?" : (question?.question ?? "")}
                        hint={id === "check" ? "So your plan's built on the right details." : (question?.hint ?? "")}
                        label={stepLabels[id]}
                        summary={summaryFor(id, answers, known)}
                        skipped={Boolean(answers.skipped?.includes(id as QuestionId))}
                        payoff={payoffs[id]}
                        overlay={stageOverlay(id)}
                        onEdit={() => edit(i)}
                      >
                        {id === "check" ? (
                          <ProfileCheck context={context} onDone={checked} />
                        ) : question ? (
                          <QuestionStep
                            key={question.id}
                            question={question}
                            answers={answers}
                            context={known}
                            isLast={i === steps.length - 1}
                            onAnswer={(patch) => answer(question, patch)}
                            onSkip={() => skip(question)}
                            onDraft={onDraft}
                          />
                        ) : null}
                      </StepBlock>
                    )
                  })}
                </ol>
              ) : null}

              {phase === "done" ? (
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
                />
              ) : null}

              {/* Room below, so each new step can scroll up into place. */}
              {phase === "flow" ? <div className="h-[45dvh]" aria-hidden /> : null}
            </div>

            <aside className="hidden w-[360px] flex-shrink-0 lg:block">
              <div className="sticky top-6 py-6">
                <PlanCard lines={lines} businessName={known.businessName} ready={phase === "done" && !declined} dayLabel={day} />
              </div>
            </aside>
          </div>
        </div>

        <DotStage ref={stageRef} anchorId={anchorId} shape={shape} scroller={scrollRef} />
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
                className="min-touch flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
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
        strokeDasharray={c}
        strokeDashoffset={c * (1 - value)}
        style={{ transition: "stroke-dashoffset 0.6s cubic-bezier(.2,.8,.2,1)" }}
      />
    </svg>
  )
}

/**
 * One step of the thread. The same block changes shape as they move on:
 * active (the question) → reveal (their answer and what it means for them) → recap → folded row.
 * Height changes animate, so the page reads as one thing building, not slides swapping.
 */
function StepBlock({
  id,
  mode,
  title,
  hint,
  label,
  summary,
  skipped,
  payoff,
  overlay,
  onEdit,
  children,
}: {
  id: StepId
  mode: Mode
  title: string
  hint: string
  label: string
  summary?: string
  skipped: boolean
  payoff?: string
  overlay: React.ReactNode
  onEdit: () => void
  children: React.ReactNode
}) {
  const ref = useRef<HTMLLIElement>(null)
  const lastHeight = useRef(0)
  const lastMode = useRef<Mode | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver(() => {
      if (!gsap.isTweening(el)) lastHeight.current = el.offsetHeight
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Smoothly change height between modes.
  useLayoutEffect(() => {
    const el = ref.current
    const before = lastMode.current
    lastMode.current = mode
    if (!el || before === null || before === mode || prefersReducedMotion()) {
      if (el) lastHeight.current = el.offsetHeight
      return
    }
    const from = lastHeight.current
    const to = el.offsetHeight
    if (from && Math.abs(from - to) > 2) {
      gsap.fromTo(
        el,
        { height: from, overflow: "hidden" },
        {
          height: to,
          duration: 0.6,
          ease: "power3.inOut",
          clearProps: "height,overflow",
          onComplete: () => {
            lastHeight.current = el.offsetHeight
          },
        }
      )
    }
  }, [mode])

  // What arrives in each mode.
  useGSAP(
    () => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return
      let targets: Element[] = []
      if (mode === "active") {
        targets = Array.from(el.querySelectorAll("[data-head], [data-anim]"))
        gsap.fromTo(targets, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: EASE_OUT, stagger: 0.035, delay: 0.15, clearProps: "transform,opacity" })
      } else if (mode === "reveal") {
        const chip = el.querySelector("[data-chip]")
        const words = Array.from(el.querySelectorAll("[data-word]"))
        targets = [...(chip ? [chip] : []), ...words]
        if (chip) gsap.fromTo(chip, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)", clearProps: "transform,opacity" })
        gsap.fromTo(words, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4, ease: EASE_OUT, stagger: 0.03, delay: 0.25, clearProps: "transform,opacity" })
      }
      // Throttled animation frames must never leave anything invisible.
      const safety = window.setTimeout(() => gsap.set(targets, { clearProps: "transform,opacity" }), 1600)
      return () => window.clearTimeout(safety)
    },
    { scope: ref, dependencies: [mode] }
  )

  if (mode === "folded") {
    return (
      <li ref={ref} data-step={id} data-mode={mode}>
        <button
          type="button"
          onClick={onEdit}
          className="group flex w-full items-center gap-3 border-b border-border py-3 text-left"
          aria-label={`Change ${label}`}
        >
          <span
            className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-[3px] ${skipped ? "border border-border" : "bg-secondary"}`}
          >
            {skipped ? <Minus className="h-2.5 w-2.5 text-muted-foreground" /> : <Check className="h-2.5 w-2.5 text-secondary-foreground" strokeWidth={3} />}
          </span>
          <span className="label-mono w-24 flex-shrink-0 whitespace-nowrap text-[10px] text-muted-foreground">{label}</span>
          <span className="min-w-0 flex-1 truncate text-sm text-foreground/85">{skipped ? "On the call" : summary}</span>
          <Pencil className="h-3 w-3 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </button>
      </li>
    )
  }

  if (mode === "recap" || mode === "reveal") {
    return (
      <li ref={ref} data-step={id} data-mode={mode} className="pt-6">
        <p className="text-sm text-muted-foreground">{title}</p>
        {mode === "reveal" ? (
          <div id={`stage-${id}`} className="relative mt-3 h-32 sm:h-40" aria-hidden>
            {overlay}
          </div>
        ) : null}
        <button
          type="button"
          onClick={onEdit}
          data-chip
          className="mt-3 inline-flex max-w-full items-center gap-2 rounded-md border border-secondary/50 bg-secondary/10 px-3 py-2 text-left text-sm text-foreground"
          aria-label={`Your answer: ${skipped ? "skipped" : summary}. Change it`}
        >
          {skipped ? <Minus className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" /> : <Check className="h-3.5 w-3.5 flex-shrink-0 text-secondary" strokeWidth={3} />}
          <span className="truncate">{skipped ? "Skipped" : summary}</span>
        </button>
        {payoff ? (
          <div data-payoff className="mt-4 border-l-2 border-secondary pl-4" aria-live="polite">
            <p className="label-mono text-[10px] text-secondary">What this means for you</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-foreground">
              {payoff.split(" ").map((word, i) => (
                <span key={i} data-word className="inline-block whitespace-pre">
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>
        ) : null}
        {/* The thread carries on into the next step. */}
        <span className="ml-[1px] mt-5 block h-8 w-px bg-gradient-to-b from-secondary/60 to-transparent" aria-hidden />
      </li>
    )
  }

  return (
    <li ref={ref} data-step={id} data-mode={mode} className="pt-4">
      <h2 className="display text-balance text-[2rem] leading-[1.02] text-foreground sm:text-4xl" data-head>
        {title}
      </h2>
      <p className="mt-2.5 text-[15px] text-muted-foreground" data-head>
        {hint}
      </p>
      <div id={`stage-${id}`} className="relative my-4 h-32 sm:h-40" aria-hidden>
        {overlay}
      </div>
      {children}
    </li>
  )
}

function Welcome({
  context,
  firstName,
  day,
  stepCount,
  resuming,
  onStart,
  onDecline,
}: {
  context: PrecallContext
  firstName?: string
  day?: string
  stepCount: number
  resuming: boolean
  onStart: () => void
  onDecline: () => void
}) {
  const business = context.businessName
  const minutes = stepCount <= 6 ? "About a minute" : "About 2 minutes"
  const when = !day ? "On the call" : day === "today" || day === "tomorrow" ? day.charAt(0).toUpperCase() + day.slice(1) : `On ${day}`
  const path = [
    { title: "You tell me about the business", body: `${minutes}. Mostly taps, skip anything.`, now: true },
    { title: "I do the homework", body: "Your local searches, what they cost, and who you're up against." },
    { title: "We go through your plan", body: `${when}. Your numbers, not a sales pitch.` },
  ]

  return (
    <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col">
      <div id="stage-welcome" className="h-20 sm:h-24" aria-hidden />
      <h1 className="display mt-2 text-balance text-[2.4rem] leading-[0.98] text-foreground sm:text-5xl">
        {firstName ? `Thanks, ${firstName}. You're booked in.` : "Thanks. You're booked in."}
      </h1>

      <div className="mt-6">
        <CallTicket context={context} />
      </div>

      <div className="mt-8 flex items-start gap-3">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-secondary/40 bg-secondary/10 text-xs font-semibold text-secondary">
          G
        </span>
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

      <ol className="relative mt-8 space-y-5 pl-9">
        <span className="absolute bottom-2 left-[0.6875rem] top-2 w-px bg-border" aria-hidden />
        {path.map((item, i) => (
          <li key={item.title} className="relative">
            <span
              className={`absolute -left-9 top-0.5 flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-[4px] border text-[10px] font-semibold ${
                item.now ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-background text-muted-foreground"
              }`}
            >
              {i + 1}
            </span>
            <p className={`text-[15px] font-medium ${item.now ? "text-foreground" : "text-foreground/80"}`}>{item.title}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-auto">
        <Footer canNext onNext={onStart} nextLabel={resuming ? "Carry on" : "Let's do it"} onSkip={onDecline} skipLabel="Not now" />
      </div>
    </div>
  )
}

/** "Here's what we're preparing for you." Each item ticks off in turn, like work being done. */
function CallPack({ items, animate }: { items: ReturnType<typeof callDeliverables>; animate: boolean }) {
  const [done, setDone] = useState(animate && !prefersReducedMotion() ? 0 : items.length)
  useEffect(() => {
    if (done >= items.length) return
    const timer = window.setTimeout(() => setDone((d) => d + 1), done === 0 ? 900 : 650)
    return () => window.clearTimeout(timer)
  }, [done, items.length])

  return (
    <ul className="mt-5 space-y-2">
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
                <span className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-secondary">
                  <Check className="h-3 w-3 text-secondary-foreground" strokeWidth={3} />
                </span>
              ) : working ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-secondary/30 border-t-secondary motion-reduce:animate-none" />
              ) : (
                <span className="h-2 w-2 rounded-[2px] bg-border" />
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
}) {
  const ref = useRef<HTMLDivElement>(null)
  const skipped = answers.skipped?.length ?? 0
  const [contact, setContact] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "missed">("idle")
  const needsMatch = !declined && !context.contactId && !sent
  const items = callDeliverables(answers, context)

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return
      const targets = ref.current.querySelectorAll("[data-anim]")
      gsap.fromTo(targets, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: EASE_OUT, stagger: 0.06, delay: 0.3, clearProps: "transform,opacity" })
      const safety = window.setTimeout(() => gsap.set(targets, { clearProps: "transform,opacity" }), 2000)
      return () => window.clearTimeout(safety)
    },
    { scope: ref }
  )

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
    <div ref={ref} data-mode="done" className="flex flex-col pb-10 pt-4">
      <div id="stage-done" className="h-28 sm:h-32" aria-hidden />
      {declined ? (
        <>
          <p className="label-mono mt-4 text-secondary" data-anim>
            No problem
          </p>
          <h2 className="display mt-3 text-balance text-[2rem] leading-[1.02] text-foreground sm:text-4xl" data-anim>
            We{"'"}ll cover it all on the call.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground" data-anim>
            Here{"'"}s what you{"'"}ll leave {dayPhrase(day)} with. If you change your mind, a minute of taps now means we can have
            it ready before we speak.
          </p>
        </>
      ) : (
        <>
          <h2 className="display mt-4 text-balance text-center text-[2rem] leading-[1.02] text-foreground sm:text-4xl" data-anim>
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
          className="min-touch mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-4 text-[15px] font-semibold text-secondary-foreground transition-transform active:scale-[0.99]"
          data-anim
        >
          Go on then, build my plan
        </button>
      ) : null}

      {needsMatch ? (
        <form onSubmit={sendMatch} className="mt-6 rounded-md border border-secondary/30 bg-secondary/[0.05] p-5" data-anim>
          <p className="text-sm font-medium text-foreground">One last thing, so we can match this to your booking.</p>
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
              We couldn{"'"}t find a booking with that. Try the other one, or call {CALL_PHONE} and we{"'"}ll sort it.
            </p>
          ) : null}
        </form>
      ) : null}

      {sent && !context.contactId ? (
        <p className="mt-4 text-sm text-secondary" data-anim>
          Sent. We{"'"}ve got it.
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
        <p className="mt-6 text-xs text-muted-foreground">Want to change something? Tap any answer above.</p>
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
