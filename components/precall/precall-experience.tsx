"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronUp, Phone, X } from "lucide-react"

import { EASE_OUT, gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap"
import { scrollToY } from "@/components/motion/smooth-scroll"
import { SplitReveal } from "@/components/motion/split-reveal"
import { CallTicket } from "@/components/precall/call-ticket"
import { PlanCard, planProgress } from "@/components/precall/plan-card"
import { QuestionStep } from "@/components/precall/question-step"
import { trackEvent } from "@/lib/analytics"
import {
  buildQuestions,
  CALL_PHONE,
  CALL_PHONE_HREF,
  callDayLabel,
  findTrade,
  isAnswered,
  planLines,
  reactionFor,
  STORAGE_PREFIX,
  type PrecallAnswers,
  type PrecallContext,
  type QuestionId,
} from "@/lib/precall"
import { caseStudies, testimonials } from "@/lib/proof"

type Phase = "intro" | "questions" | "done"

const numberWords = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
function countWord(n: number) {
  return numberWords[n] ?? String(n)
}
type Saved = { v: 1; phase: Phase; step: number; answers: PrecallAnswers; sent?: boolean }

function readSaved(key: string): Saved | null {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return null
    const saved = JSON.parse(raw) as Saved
    return saved?.v === 1 ? saved : null
  } catch {
    return null
  }
}

function writeSaved(key: string, saved: Saved) {
  try {
    window.localStorage.setItem(key, JSON.stringify(saved))
  } catch {
    // Private browsing or full storage. The page still works, it just won't remember progress.
  }
}

function dayPhrase(day?: string) {
  if (!day) return "our call"
  return day === "today" || day === "tomorrow" ? `${day}'s call` : `the call on ${day}`
}

export function PrecallExperience({ context }: { context: PrecallContext }) {
  const questions = useMemo(() => buildQuestions(context), [context])
  const storageKey = `${STORAGE_PREFIX}${context.contactId ?? "guest"}`
  const day = callDayLabel(context.callStart)
  const firstName = context.firstName?.split(/\s+/)[0]

  const [phase, setPhase] = useState<Phase>("intro")
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<PrecallAnswers>({})
  const [reaction, setReaction] = useState<string>()
  const [sent, setSent] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [latest, setLatest] = useState<{ label: string; value: string }>()
  const [hydrated, setHydrated] = useState(false)

  const stageRef = useRef<HTMLDivElement>(null)
  const flowRef = useRef<HTMLDivElement>(null)
  const saveQueue = useRef<Promise<unknown>>(Promise.resolve())
  const partialSig = useRef("")
  const answersRef = useRef(answers)
  answersRef.current = answers

  const lines = useMemo(() => planLines(answers, context, questions), [answers, context, questions])
  const question = questions[Math.min(step, questions.length - 1)]
  const answeredCount = questions.filter((q) => isAnswered(q.id, answers)).length

  // Restore progress, if they've been here before.
  useEffect(() => {
    const saved = readSaved(storageKey)
    if (saved) {
      setAnswers(saved.answers ?? {})
      setSent(Boolean(saved.sent))
      if (saved.phase === "questions") {
        setPhase("questions")
        setStep(Math.min(saved.step, questions.length - 1))
        setReaction("Welcome back. Picking up where you left off.")
        trackEvent("precall_resume", { step: saved.step + 1 })
      } else if (saved.phase === "done") {
        setPhase("done")
      }
    }
    setHydrated(true)
    trackEvent("precall_view", { known_contact: context.contactId ? 1 : 0, has_call_time: context.callStart ? 1 : 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (hydrated) writeSaved(storageKey, { v: 1, phase, step, answers, sent })
  }, [hydrated, storageKey, phase, step, answers, sent])

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
      if (document.visibilityState !== "hidden" || phase !== "questions") return
      const current = answersRef.current
      const sig = JSON.stringify(current)
      if (sig === "{}" || sig === partialSig.current) return
      partialSig.current = sig
      const body = JSON.stringify({ contactId: context.contactId, stage: "partial", answers: current })
      try {
        navigator.sendBeacon("/api/precall", new Blob([body], { type: "text/plain" }))
      } catch {
        // Nothing to do. The answers saved on each step are already in GHL.
      }
    }
    document.addEventListener("visibilitychange", onHide)
    return () => document.removeEventListener("visibilitychange", onHide)
  }, [context.contactId, phase])

  // Each new screen eases in.
  useGSAP(
    () => {
      const stage = stageRef.current
      if (!stage || prefersReducedMotion()) return
      gsap.fromTo(
        stage.querySelectorAll("[data-head], [data-anim]"),
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: EASE_OUT, stagger: 0.045, clearProps: "transform,opacity" }
      )
    },
    { dependencies: [phase, step], scope: stageRef }
  )

  // The ticket arrives like it's being handed over.
  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.from("[data-ticket]", { y: 40, rotate: -2, opacity: 0, duration: 1.1, ease: EASE_OUT, delay: 0.35 })
    gsap.from("[data-ticket-tear]", { scaleX: 0, transformOrigin: "left", duration: 1, ease: EASE_OUT, delay: 0.9 })
    gsap.from("[data-intro-fade]", { y: 24, opacity: 0, duration: 0.9, ease: EASE_OUT, delay: 0.6, stagger: 0.08 })
  })

  function bringFlowIntoView() {
    const el = flowRef.current
    if (!el) return
    const top = el.getBoundingClientRect().top
    if (top < 64 || top > window.innerHeight * 0.45) scrollToY(window.scrollY + top - 88)
  }

  function transition(update: () => void) {
    const stage = stageRef.current
    if (!stage || prefersReducedMotion()) {
      update()
      requestAnimationFrame(bringFlowIntoView)
      return
    }
    let finished = false
    const complete = () => {
      if (finished) return
      finished = true
      tween.kill()
      update()
      gsap.set(stage, { opacity: 1, y: 0 })
      requestAnimationFrame(bringFlowIntoView)
    }
    const tween = gsap.to(stage, { opacity: 0, y: -14, duration: 0.22, ease: "power2.in", onComplete: complete })
    // Animation frames can be throttled (low power mode, background tabs). Never let that block the next question.
    window.setTimeout(complete, 400)
  }

  function start() {
    trackEvent("precall_start")
    transition(() => {
      setPhase("questions")
      setStep(0)
      setReaction(undefined)
    })
  }

  function finish(next: PrecallAnswers) {
    const skipped = next.skipped?.length ?? 0
    trackEvent("precall_complete", { answered: questions.length - skipped, skipped })
    if (context.contactId) {
      post("complete", next).then((ok) => ok && setSent(true))
    }
    transition(() => setPhase("done"))
  }

  function commit(id: QuestionId, next: PrecallAnswers, skippedIt: boolean) {
    setAnswers(next)
    const before = planLines(answers, context, questions)
    const after = planLines(next, context, questions)
    const changed = after.find((line, i) => line.value && line.value !== before[i]?.value)
    if (changed?.value) setLatest({ label: changed.label, value: changed.value })

    if (step >= questions.length - 1) {
      finish(next)
      return
    }
    post("progress", next)
    transition(() => {
      setReaction(skippedIt ? "No problem, we'll cover that one on the call." : reactionFor(id, next, context))
      setStep(step + 1)
    })
  }

  function answer(patch: Partial<PrecallAnswers>) {
    const next: PrecallAnswers = {
      ...answers,
      ...patch,
      skipped: (answers.skipped ?? []).filter((id) => id !== question.id),
    }
    trackEvent("precall_answer", { question: question.id, step: step + 1 })
    commit(question.id, next, false)
  }

  function skip() {
    const next: PrecallAnswers = {
      ...answers,
      skipped: Array.from(new Set([...(answers.skipped ?? []), question.id])),
    }
    trackEvent("precall_skip", { question: question.id, step: step + 1 })
    commit(question.id, next, true)
  }

  function back() {
    transition(() => {
      setReaction(undefined)
      setStep(Math.max(0, step - 1))
    })
  }

  const businessName = context.businessName
  const tradeName = findTrade(answers.trade ?? context.tradeName)?.plural

  return (
    <main className="min-h-screen overflow-x-hidden pb-28 lg:pb-0">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="min-touch flex items-center gap-2">
          <Image src="/images/noble-leads-logo.png" alt="Noble Leads" width={24} height={30} sizes="24px" priority className="object-contain" />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Noble <span className="text-gold-ripple">Leads</span>
          </span>
        </Link>
        <a
          href={CALL_PHONE_HREF}
          onClick={() => trackEvent("precall_call_click", { location: "header" })}
          className="min-touch inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone className="h-3.5 w-3.5 text-secondary" />
          {CALL_PHONE}
        </a>
      </header>

      <section className="relative pb-16 pt-6 sm:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 lg:col-span-7">
              <p className="label-mono text-muted-foreground" data-intro-fade>
                Before your call
              </p>
              <SplitReveal as="h1" onLoad className="display mt-4 text-balance text-[2.6rem] leading-[0.95] text-foreground sm:text-6xl">
                {firstName ? `Thanks, ${firstName}. You're booked in.` : "Thanks. You're booked in."}
              </SplitReveal>

              <div className="mt-8">
                <CallTicket context={context} />
              </div>

              {phase === "done" ? (
                <div className="mt-6 lg:hidden">
                  <PlanCard lines={lines} businessName={businessName} ready dayLabel={day} />
                </div>
              ) : null}

              <div ref={flowRef} className="mt-6 scroll-mt-24">
                <div className="overflow-hidden rounded-3xl border border-border bg-card">
                  {phase === "questions" ? (
                    <div className="h-px w-full bg-border">
                      <div
                        className="h-full bg-secondary transition-all duration-700 ease-out"
                        style={{ width: `${Math.round((step / questions.length) * 100)}%` }}
                      />
                    </div>
                  ) : null}

                  <div ref={stageRef} className="p-6 sm:p-10">
                    {phase === "intro" ? (
                      <div>
                        <p className="label-mono text-secondary" data-head>
                          A quick favour
                        </p>
                        <h2 className="display mt-4 text-balance text-3xl leading-[1.02] text-foreground sm:text-4xl" data-head>
                          Want me to come prepared?
                        </h2>
                        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base" data-anim>
                          {context.fromSurvey
                            ? `You've already told me the basics, so there are just ${countWord(questions.length)} quick ones left. Then I'll turn up with a plan built around `
                            : `Following on from our chat, tap through ${countWord(questions.length)} quick questions and I'll turn up with a plan built around `}
                          {businessName ? <span className="text-foreground">{businessName}</span> : "your business"}. That way we
                          spend the call on your plan, not on me asking questions.
                        </p>
                        <ul className="mt-6 flex flex-wrap gap-2" data-anim>
                          {[questions.length <= 5 ? "About a minute" : "About 2 minutes", "Mostly taps", "Skip anything"].map((tag) => (
                            <li key={tag} className="label-mono rounded-full border border-border px-3 py-1.5 text-[10px] text-foreground/80">
                              {tag}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" data-anim>
                          <button
                            type="button"
                            onClick={start}
                            className="group min-touch inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-semibold text-secondary-foreground transition-transform active:scale-[0.98]"
                          >
                            {answeredCount > 0 ? "Carry on with my plan" : "Build my plan"}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </button>
                          <a
                            href="#next"
                            onClick={() => trackEvent("precall_decline")}
                            className="min-touch inline-flex items-center justify-center gap-2 px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            I{"'"}d rather just talk on the call
                            <ArrowDown className="h-3.5 w-3.5" />
                          </a>
                        </div>
                        <p className="mt-6 text-sm text-muted-foreground" data-anim>
                          George
                        </p>
                      </div>
                    ) : null}

                    {phase === "questions" ? (
                      <div>
                        <div className="label-mono flex items-center justify-between text-muted-foreground" data-head>
                          <span>
                            {step + 1} of {questions.length}
                          </span>
                          {step > 0 ? (
                            <button
                              type="button"
                              onClick={back}
                              className="min-touch -my-3 inline-flex items-center gap-1 transition-colors hover:text-foreground"
                            >
                              <ArrowLeft className="h-3.5 w-3.5" />
                              Back
                            </button>
                          ) : null}
                        </div>

                        {reaction ? (
                          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-secondary/25 bg-secondary/[0.06] p-4" data-head aria-live="polite">
                            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-secondary/40 text-xs font-semibold text-secondary">
                              G
                            </span>
                            <p className="text-sm leading-relaxed text-foreground/90">{reaction}</p>
                          </div>
                        ) : null}

                        <h2 className="display mt-6 text-balance text-3xl leading-[1.02] text-foreground sm:text-4xl" data-head>
                          {question.question}
                        </h2>
                        <p className="mt-3 text-sm text-muted-foreground" data-head>
                          {question.hint}
                        </p>

                        <QuestionStep
                          key={question.id}
                          question={question}
                          answers={answers}
                          context={context}
                          isLast={step === questions.length - 1}
                          onAnswer={answer}
                          onSkip={skip}
                        />
                      </div>
                    ) : null}

                    {phase === "done" ? (
                      <DonePanel
                        firstName={firstName}
                        day={day}
                        answers={answers}
                        context={context}
                        sent={sent}
                        onSent={() => setSent(true)}
                        post={post}
                        onEdit={() =>
                          transition(() => {
                            setPhase("questions")
                            setStep(0)
                            setReaction("Change whatever you like. Everything else stays as it is.")
                          })
                        }
                      />
                    ) : null}
                  </div>
                </div>
              </div>

              {/* On phones the plan sits under the intro as a preview, and under the finish screen in full. */}
              {phase === "intro" ? (
                <div className="mt-6 lg:hidden">
                  <PlanCard lines={lines} businessName={businessName} dayLabel={day} />
                </div>
              ) : null}
            </div>

            <aside className="hidden lg:col-span-5 lg:block">
              <div className="sticky top-8">
                <PlanCard lines={lines} businessName={businessName} ready={phase === "done"} dayLabel={day} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <NextSteps minutes={context.callMinutes} tradePlural={tradeName} />

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>NobleLeads. Lead systems for UK trades.</p>
          <div className="flex gap-5">
            <a href={CALL_PHONE_HREF} className="hover:text-foreground">
              {CALL_PHONE}
            </a>
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy policy
            </Link>
          </div>
        </div>
      </footer>

      {phase === "questions" ? (
        <MobilePlanBar
          filled={planProgress(lines)}
          total={lines.length}
          latest={latest}
          open={sheetOpen}
          onToggle={setSheetOpen}
        >
          <PlanCard lines={lines} businessName={businessName} dayLabel={day} />
        </MobilePlanBar>
      ) : null}
    </main>
  )
}

function DonePanel({
  firstName,
  day,
  answers,
  context,
  sent,
  onSent,
  post,
  onEdit,
}: {
  firstName?: string
  day?: string
  answers: PrecallAnswers
  context: PrecallContext
  sent: boolean
  onSent: () => void
  post: (stage: "complete", next: PrecallAnswers, match?: { email?: string; phone?: string }) => Promise<boolean>
  onEdit: () => void
}) {
  const skipped = answers.skipped?.length ?? 0
  const [contact, setContact] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "missed">("idle")
  const needsMatch = !context.contactId && !sent

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
    <div>
      <p className="label-mono text-secondary" data-head>
        All done
      </p>
      <h2 className="display mt-4 text-balance text-3xl leading-[1.02] text-foreground sm:text-4xl" data-head>
        {firstName ? `That's everything, ${firstName}.` : "That's everything."}
      </h2>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base" data-anim>
        Thanks for taking the time. Before {dayPhrase(day)} I{"'"}ll look up what people in your area are searching
        for, what it costs, and who you{"'"}re up against. Then we can spend the call on your plan and your numbers.
      </p>
      {skipped > 0 ? (
        <p className="mt-3 text-sm text-muted-foreground" data-anim>
          You skipped {skipped}. No problem, we{"'"}ll cover {skipped === 1 ? "it" : "them"} on the call.
        </p>
      ) : null}

      {needsMatch ? (
        <form onSubmit={sendMatch} className="mt-8 rounded-2xl border border-secondary/30 bg-secondary/[0.05] p-5" data-anim>
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
              className="min-touch w-full min-w-0 flex-1 rounded-xl border border-border bg-background/40 px-4 py-3.5 text-base text-foreground outline-none placeholder:text-muted-foreground focus:border-secondary sm:text-sm"
            />
            <button
              type="submit"
              disabled={!contact.trim() || status === "sending"}
              className="min-touch rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground disabled:opacity-40"
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
        <p className="mt-6 text-sm text-secondary" data-anim>
          Sent. I{"'"}ve got it.
        </p>
      ) : null}

      <button
        type="button"
        onClick={onEdit}
        className="min-touch mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-secondary/50"
        data-anim
      >
        <ArrowLeft className="h-4 w-4" />
        Change an answer
      </button>
    </div>
  )
}

function MobilePlanBar({
  filled,
  total,
  latest,
  open,
  onToggle,
  children,
}: {
  filled: number
  total: number
  latest?: { label: string; value: string }
  open: boolean
  onToggle: (open: boolean) => void
  children: React.ReactNode
}) {
  const latestRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      if (!latest || prefersReducedMotion() || !latestRef.current) return
      gsap.fromTo(latestRef.current, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, ease: EASE_OUT })
    },
    { dependencies: [latest?.value] }
  )

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => onToggle(true)}
        aria-expanded={open}
        className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 pt-3 text-left backdrop-blur-lg"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="label-mono text-[10px] text-secondary">Your plan</span>
          <span className="label-mono inline-flex items-center gap-1 text-[10px] text-muted-foreground">
            {filled} of {total} filled in
            <ChevronUp className="h-3.5 w-3.5" />
          </span>
        </div>
        <div className="mt-2 flex gap-1" aria-hidden>
          {Array.from({ length: total }, (_, i) => (
            <span key={i} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i < filled ? "bg-secondary" : "bg-muted"}`} />
          ))}
        </div>
        <span className="mt-2 block h-5 overflow-hidden text-sm">
          <span ref={latestRef} className="block truncate text-foreground/90">
            {latest ? (
              <>
                <span className="text-muted-foreground">{latest.label}:</span> {latest.value}
              </>
            ) : (
              <span className="text-muted-foreground">Fills in as you answer. Tap to see it.</span>
            )}
          </span>
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-background/70 backdrop-blur-sm" onClick={() => onToggle(false)}>
          <div
            className="pb-safe max-h-[85vh] overflow-y-auto overscroll-contain rounded-t-3xl border-t border-border bg-background px-3 pt-3"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => onToggle(false)}
                aria-label="Close your plan"
                className="min-touch flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
            <div className="h-4" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

function NextSteps({ minutes, tradePlural }: { minutes: number; tradePlural?: string }) {
  const steps = [
    {
      label: "Before the call",
      body: "I research your area: what people are searching for, what each click costs, and who you're up against.",
    },
    {
      label: "On the call",
      body: `About ${minutes} minutes. We go through your plan, your numbers and what it would cost. Ask me anything.`,
    },
    {
      label: "After the call",
      body: "You decide. No pressure and no hard sell. If it's not a good fit, I'll tell you.",
    },
  ]
  const quote = testimonials[0]

  return (
    <section id="next" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="label-mono text-muted-foreground">What happens next</p>
            <SplitReveal as="h2" className="display mt-4 text-balance text-3xl leading-[1.02] text-foreground sm:text-5xl">
              A call about your business, not a sales script.
            </SplitReveal>
          </div>
          <ol className="lg:col-span-7">
            {steps.map((item, index) => (
              <li key={item.label} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border py-6 first:pt-0">
                <span className="display text-2xl tabular-nums text-secondary">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="label-mono text-muted-foreground">
              {tradePlural ? `Work for trades like ${tradePlural}` : "Recent work"}
            </p>
            {quote ? (
              <blockquote className="mt-5 border-l-2 border-secondary pl-4">
                <p className="text-lg leading-snug text-foreground">
                  {"“"}Chuffed to bits with the leads that are coming through.{"”"}
                </p>
                <footer className="label-mono mt-3 text-[10px] text-muted-foreground">
                  {quote.name}, {quote.business}
                </footer>
              </blockquote>
            ) : null}
          </div>
          <div className="lg:col-span-7">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={study.href}
                target="_blank"
                onClick={() => trackEvent("precall_case_study", { slug: study.slug })}
                className="group grid grid-cols-[1fr_auto] items-start gap-4 border-b border-border py-5 first:pt-0"
              >
                <div>
                  <p className="label-mono text-[10px] text-muted-foreground">{study.sector}</p>
                  <p className="mt-1.5 font-medium text-foreground transition-colors group-hover:text-secondary">{study.client}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{study.result}</p>
                </div>
                <ArrowUpRight className="mt-6 h-4 w-4 text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
