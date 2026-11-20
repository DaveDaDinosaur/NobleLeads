"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CalendarPlus, Check, Phone, X } from "lucide-react"

import { prefersReducedMotion } from "@/components/motion/gsap"
import { callLinks, timeLabel } from "@/components/precall/call-ticket"
import { PlanCard, planProgress } from "@/components/precall/plan-card"
import { PrecallDiagram, type DiagramState, type Scene } from "@/components/precall/precall-diagram"
import { Footer, ProfileCheck, QuestionStep, type Profile } from "@/components/precall/question-step"
import { trackEvent } from "@/lib/analytics"
import {
  buildQuestions,
  CALL_PHONE,
  CALL_PHONE_HREF,
  callDayLabel,
  callDeliverables,
  captionFor,
  effectiveJobValue,
  formatJobValue,
  isAnswered,
  jobValueStops,
  nearestStopIndex,
  planLines,
  radiusOptions,
  sourceOptions,
  STORAGE_PREFIX,
  type PrecallAnswers,
  type PrecallContext,
  type Question,
  type QuestionId,
} from "@/lib/precall"
import { caseStudies } from "@/lib/proof"

type StepId = "check" | QuestionId
type ScreenId = "welcome" | StepId | "done"
type Saved = {
  v: 4
  screen: ScreenId
  answers: PrecallAnswers
  profile: Profile
  checked?: boolean
  sent?: boolean
  declined?: boolean
}

const TZ = "Europe/London"
/** How long the caption holds with its picture before the next question comes in. */
const HOLD_MS = 1500

function readSaved(key: string): Saved | null {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return null
    const saved = JSON.parse(raw) as Saved
    return saved?.v === 4 ? saved : null
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

function whenPhrase(day?: string) {
  if (!day) return "the call"
  return day === "today" || day === "tomorrow" ? `${day}'s call` : `${day}'s call`
}

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
  const links = callLinks(context)

  const [screen, setScreen] = useState<ScreenId>("welcome")
  const [direction, setDirection] = useState<1 | -1>(1)
  const [holding, setHolding] = useState(false)
  const [caption, setCaption] = useState<string>()
  const [answers, setAnswers] = useState<PrecallAnswers>({})
  const [draft, setDraft] = useState<Partial<PrecallAnswers>>({})
  const [profileDraft, setProfileDraft] = useState<Profile>({})
  const [checked, setChecked] = useState(false)
  const [sent, setSent] = useState(false)
  const [declined, setDeclined] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  const holdTimer = useRef<number>(undefined)
  const saveQueue = useRef<Promise<unknown>>(Promise.resolve())
  const partialSig = useRef("")
  const answersRef = useRef(answers)
  answersRef.current = answers

  const lines = useMemo(() => planLines(answers, known, questions), [answers, known, questions])
  const filled = planProgress(lines)
  const stepIndex = steps.indexOf(screen as StepId)
  const onStep = stepIndex >= 0
  const question = questions.find((q) => q.id === screen)
  const answeredCount = questions.filter((q) => isAnswered(q.id, answers)).length

  // Restore progress, if they've been here before.
  useEffect(() => {
    const saved = readSaved(storageKey)
    if (saved) {
      setAnswers(saved.answers ?? {})
      setProfile(saved.profile ?? {})
      setChecked(Boolean(saved.checked))
      setSent(Boolean(saved.sent))
      setDeclined(Boolean(saved.declined))
      if (saved.screen === "done" || steps.includes(saved.screen as StepId)) {
        setScreen(saved.screen)
        if (saved.screen !== "done") trackEvent("precall_resume", { step: steps.indexOf(saved.screen as StepId) + 1 })
      }
    }
    setHydrated(true)
    trackEvent("precall_view", { known_contact: context.contactId ? 1 : 0, has_call_time: context.callStart ? 1 : 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (hydrated) writeSaved(storageKey, { v: 4, screen, answers, profile, checked, sent, declined })
  }, [hydrated, storageKey, screen, answers, profile, checked, sent, declined])

  useEffect(() => () => window.clearTimeout(holdTimer.current), [])

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
      if (document.visibilityState !== "hidden" || !onStep) return
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
  }, [context.contactId, onStep])

  const onDraft = useCallback((patch: Partial<PrecallAnswers>) => setDraft((d) => ({ ...d, ...patch })), [])

  function show(next: ScreenId, dir: 1 | -1) {
    window.clearTimeout(holdTimer.current)
    setDirection(dir)
    setHolding(false)
    setCaption(undefined)
    setDraft({})
    setScreen(next)
  }

  /** The next step still to answer, or the end. Lets a changed answer jump straight back to where they were. */
  function nextScreen(from: number, latest: PrecallAnswers, isChecked: boolean): ScreenId {
    const done = (id: StepId) => (id === "check" ? isChecked : isAnswered(id, latest) || Boolean(latest.skipped?.includes(id)))
    return steps.find((id, i) => i > from && !done(id)) ?? "done"
  }

  /** Their answer lands on the diagram with its caption, holds a beat, then the next question rises in. */
  function settle(next: PrecallAnswers, line: string, isChecked = checked) {
    setAnswers(next)
    setCaption(line)
    setHolding(true)
    const target = nextScreen(stepIndex, next, isChecked)
    window.clearTimeout(holdTimer.current)
    holdTimer.current = window.setTimeout(
      () => {
        if (target === "done") {
          const skipped = next.skipped?.length ?? 0
          trackEvent("precall_complete", { answered: questions.length - skipped, skipped })
          if (context.contactId) post("complete", next).then((ok) => ok && setSent(true))
          setDeclined(false)
        }
        show(target, 1)
      },
      prefersReducedMotion() ? 900 : HOLD_MS
    )
  }

  function start() {
    trackEvent("precall_start")
    setDeclined(false)
    show(nextScreen(-1, answers, checked), 1)
  }

  function decline() {
    trackEvent("precall_decline")
    setDeclined(true)
    show("done", 1)
  }

  function confirmDetails(changes: Profile) {
    const next: PrecallAnswers = {
      ...answers,
      ...(changes.trade ? { trade: changes.trade } : {}),
      ...(changes.town ? { town: changes.town } : {}),
      ...(changes.businessName ? { businessName: changes.businessName } : {}),
    }
    setProfile((p) => ({ ...p, ...changes }))
    setChecked(true)
    const fixed = Object.keys(changes).length > 0
    if (fixed) post("progress", next)
    trackEvent("precall_check", { corrected: fixed ? 1 : 0 })
    settle(next, captionFor("check", next, { ...known, businessName: changes.businessName ?? known.businessName }), true)
  }

  function answer(q: Question, patch: Partial<PrecallAnswers>) {
    const next: PrecallAnswers = { ...answers, ...patch, skipped: (answers.skipped ?? []).filter((id) => id !== q.id) }
    trackEvent("precall_answer", { question: q.id, step: stepIndex + 1 })
    post("progress", next)
    settle(next, captionFor(q.id, next, known))
  }

  function skip(q: Question) {
    const next: PrecallAnswers = { ...answers, skipped: Array.from(new Set([...(answers.skipped ?? []), q.id])) }
    trackEvent("precall_skip", { question: q.id, step: stepIndex + 1 })
    post("progress", next)
    settle(next, "No problem. We'll cover it on the call.")
  }

  function back() {
    if (holding) {
      // Changed their mind mid-caption: stay on this question.
      window.clearTimeout(holdTimer.current)
      setHolding(false)
      setCaption(undefined)
      return
    }
    if (screen === "done") return show(declined ? "welcome" : steps[steps.length - 1], -1)
    show(stepIndex <= 0 ? "welcome" : steps[stepIndex - 1], -1)
  }

  // What the diagram shows: the current screen, with live (not yet submitted) choices.
  const scene: Scene = screen === "done" ? (declined ? "welcome" : "done") : screen
  const diagram = useMemo<DiagramState>(() => {
    const a = { ...answers, ...draft }
    const start = links?.start
    const value = typeof a.jobValue === "number" ? a.jobValue : (effectiveJobValue(a, known) ?? 5000)
    return {
      day: start
        ? {
            weekday: start.toLocaleDateString("en-GB", { weekday: "short", timeZone: TZ }).toUpperCase(),
            date: start.toLocaleDateString("en-GB", { day: "numeric", timeZone: TZ }),
            time: timeLabel(start),
          }
        : undefined,
      businessName: (screen === "check" ? profileDraft.businessName : undefined) ?? known.businessName,
      tradeName: (screen === "check" ? profileDraft.trade : undefined) ?? known.tradeName,
      town: (screen === "check" ? profileDraft.town : undefined) ?? a.town ?? known.town,
      pins: Math.min((a.jobs?.length ?? 0) + (a.jobsOther ? 1 : 0), 5),
      ringIndex: a.radius ? radiusOptions.indexOf(a.radius) : -1,
      value: nearestStopIndex(value) / (jobValueStops.length - 1),
      valueLabel: formatJobValue(value),
      capacity: a.capacity,
      sources: sourceOptions.map((s) => Boolean(a.sources?.includes(s))),
      stamped: !declined,
    }
  }, [answers, draft, known, links?.start, declined, screen, profileDraft])

  const welcomeCaption = links
    ? `${links.start.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: TZ })}, ${timeLabel(links.start)}`
    : "Your call is booked"
  // Before they answer, the line under the diagram says how to use it. After, it says what it means for them.
  const hint = screen === "check" ? "Tap anything that's wrong to fix it." : question?.hint
  const shownCaption =
    caption ?? (screen === "welcome" ? welcomeCaption : screen === "done" && !declined ? `Your plan, ready for ${whenPhrase(day)}` : hint)
  const captionIsHint = !caption && Boolean(hint) && shownCaption === hint

  return (
    <div className="fixed inset-0 flex h-[100dvh] flex-col bg-background">
      <header className="pt-safe flex-shrink-0">
        <div className="mx-auto flex h-14 max-w-md items-center gap-3 px-3">
          {screen !== "welcome" ? (
            <button
              type="button"
              onClick={back}
              aria-label="Back"
              className="min-touch flex flex-shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : (
            <Link href="/" className="min-touch flex flex-shrink-0 items-center pl-2" aria-label="NobleLeads home">
              <Image src="/images/noble-leads-logo.png" alt="" width={18} height={22} sizes="18px" priority className="object-contain" />
            </Link>
          )}

          <div className="flex min-w-0 flex-1 items-center gap-1" aria-hidden>
            {onStep
              ? steps.map((id, i) => (
                  <span key={id} className="h-[2px] flex-1 overflow-hidden bg-muted">
                    <span
                      className="block h-full bg-secondary transition-all duration-500 ease-out"
                      style={{ width: i < stepIndex || (i === stepIndex && holding) ? "100%" : "0%" }}
                    />
                  </span>
                ))
              : null}
          </div>
          {onStep ? (
            <span className="sr-only" aria-live="polite">
              Question {stepIndex + 1} of {steps.length}
            </span>
          ) : null}

          {onStep || (screen === "done" && !declined) ? (
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              className="min-touch flex flex-shrink-0 items-center gap-2 rounded-md border border-border px-2.5"
              aria-label={`Your plan, ${filled} of ${lines.length} filled in`}
            >
              <ProgressRing value={filled / Math.max(lines.length, 1)} />
              <span className="label-mono text-[10px] text-foreground">Plan</span>
            </button>
          ) : (
            <a
              href={CALL_PHONE_HREF}
              onClick={() => trackEvent("precall_call_click", { location: "header" })}
              aria-label={`Call ${CALL_PHONE}`}
              className="min-touch flex flex-shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-secondary" />
            </a>
          )}
        </div>
      </header>

      <main
        className="mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col transition-opacity duration-300"
        style={{ opacity: hydrated ? 1 : 0 }}
      >
        {/* The diagram: one picture that changes with every answer. */}
        <div className="h-[30dvh] max-h-[250px] min-h-[160px] flex-shrink-0 px-6">
          <PrecallDiagram scene={scene} state={diagram} />
        </div>

        {/* The caption: what the picture means for them. */}
        <div className="flex min-h-[3rem] flex-shrink-0 items-center justify-center px-6" aria-live="polite">
          <p
            key={shownCaption}
            className={`text-balance text-center leading-snug ${captionIsHint ? "text-[13px] text-muted-foreground" : "text-[15px] text-secondary"} ${
              shownCaption ? "precall-rise" : ""
            }`}
          >
            {shownCaption}
          </p>
        </div>

        {/* The question. Glides out while the caption holds, and the next one rises in. */}
        <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pt-3" data-lenis-prevent>
          <div
            key={screen}
            className={`flex min-h-full flex-col ${direction === 1 ? "precall-rise" : "precall-drop"} transition-all duration-300 ease-out ${
              holding ? "pointer-events-none -translate-y-4 opacity-0" : ""
            }`}
          >
            {screen === "welcome" ? (
              <Welcome known={known} resuming={answeredCount > 0} stepCount={steps.length} onStart={start} onDecline={decline} />
            ) : null}

            {screen === "check" ? (
              <>
                <Heading text="Have I got this right?" />
                <ProfileCheck context={context} onDone={confirmDetails} onChange={setProfileDraft} />
              </>
            ) : null}

            {question ? (
              <>
                <Heading text={question.question} />
                <QuestionStep
                  key={question.id}
                  question={question}
                  answers={answers}
                  context={known}
                  isLast={stepIndex === steps.length - 1}
                  onAnswer={(patch) => answer(question, patch)}
                  onSkip={() => skip(question)}
                  onDraft={onDraft}
                />
              </>
            ) : null}

            {screen === "done" ? (
              <Done
                known={known}
                day={day}
                answers={answers}
                declined={declined}
                links={links}
                sent={sent}
                onSent={() => setSent(true)}
                post={post}
                onStart={start}
                onShowPlan={() => setSheetOpen(true)}
              />
            ) : null}
          </div>
        </div>
      </main>

      {sheetOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-background/70 backdrop-blur-sm" onClick={() => setSheetOpen(false)}>
          <div
            className="pb-safe mx-auto max-h-[85dvh] w-full max-w-md overflow-y-auto overscroll-contain rounded-t-lg border-t border-border bg-background px-3 pt-3"
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
            <PlanCard lines={lines} businessName={known.businessName} ready={screen === "done" && !declined} dayLabel={day} />
            <div className="h-4" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

function Heading({ text }: { text: string }) {
  return <h1 className="display mb-5 text-balance text-[1.75rem] leading-[1.08] text-foreground">{text}</h1>
}

function ProgressRing({ value }: { value: number }) {
  const r = 8
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 22 22" className="h-5 w-5 -rotate-90" aria-hidden>
      <circle cx="11" cy="11" r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
      <circle
        cx="11"
        cy="11"
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

function Welcome({
  known,
  resuming,
  stepCount,
  onStart,
  onDecline,
}: {
  known: PrecallContext
  resuming: boolean
  stepCount: number
  onStart: () => void
  onDecline: () => void
}) {
  const name = known.firstName
  return (
    <>
      <h1 className="display text-balance text-[2rem] leading-[1.05] text-foreground">
        {name ? `You're booked in, ${name}.` : "You're booked in."}
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        {resuming
          ? "You've made a start. Finish off and we'll have everything we need."
          : `${stepCount <= 6 ? "A minute" : "Two minutes"} of taps now, and we'll come to the call with a plan built for ${
              known.businessName ?? "your business"
            }.`}
      </p>
      <Footer canNext onNext={onStart} nextLabel={resuming ? "Carry on" : "Let's do it"} onSkip={onDecline} skipLabel="Not now" />
    </>
  )
}

/** "Here's what we're getting ready." Each item ticks off in turn, like work being done. */
function CallPack({ items, animate }: { items: ReturnType<typeof callDeliverables>; animate: boolean }) {
  const [done, setDone] = useState(animate && !prefersReducedMotion() ? 0 : items.length)
  useEffect(() => {
    if (done >= items.length) return
    const timer = window.setTimeout(() => setDone((d) => d + 1), done === 0 ? 1000 : 600)
    return () => window.clearTimeout(timer)
  }, [done, items.length])

  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const ticked = i < done
        return (
          <li key={item.id} className="flex items-start gap-3 py-3.5">
            <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center">
              {ticked ? (
                <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-secondary">
                  <Check className="h-2.5 w-2.5 text-secondary-foreground" strokeWidth={3} />
                </span>
              ) : (
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-secondary/30 border-t-secondary motion-reduce:animate-none" />
              )}
            </span>
            <div className="min-w-0">
              <p className={`text-[15px] transition-colors duration-500 ${ticked ? "text-foreground" : "text-muted-foreground"}`}>{item.title}</p>
              <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function Done({
  known,
  day,
  answers,
  declined,
  links,
  sent,
  onSent,
  post,
  onStart,
  onShowPlan,
}: {
  known: PrecallContext
  day?: string
  answers: PrecallAnswers
  declined: boolean
  links: ReturnType<typeof callLinks>
  sent: boolean
  onSent: () => void
  post: (stage: "complete", next: PrecallAnswers, match?: { email?: string; phone?: string }) => Promise<boolean>
  onStart: () => void
  onShowPlan: () => void
}) {
  const [contact, setContact] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "missed">("idle")
  const needsMatch = !declined && !known.contactId && !sent
  const items = callDeliverables(answers, known)
  const name = known.firstName

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
    <div className="pb-8">
      <h1 className="display text-balance text-[1.75rem] leading-[1.08] text-foreground">
        {declined ? "No problem. We'll cover it all on the call." : name ? `Leave it with us, ${name}.` : "Leave it with us."}
      </h1>
      <p className="mb-4 mt-2 text-[15px] text-muted-foreground">
        {declined ? "Here's what you'll leave the call with." : "Here's what we're preparing for you."}
      </p>

      <CallPack items={items} animate={!declined} />

      {declined ? (
        <button
          type="button"
          onClick={onStart}
          className="min-touch mt-5 w-full rounded-md bg-secondary px-6 py-4 text-[15px] font-semibold text-secondary-foreground transition-transform active:scale-[0.99]"
        >
          Build my plan first
        </button>
      ) : null}

      {needsMatch ? (
        <form onSubmit={sendMatch} className="mt-5">
          <p className="text-sm text-foreground">So we can match this to your booking:</p>
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              inputMode="email"
              autoComplete="email"
              aria-label="Your email or mobile"
              placeholder="Email or mobile"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="min-touch w-full min-w-0 flex-1 rounded-md border border-border bg-card px-4 py-3 text-base text-foreground outline-none placeholder:text-muted-foreground focus:border-secondary sm:text-sm"
            />
            <button
              type="submit"
              disabled={!contact.trim() || status === "sending"}
              className="min-touch rounded-md bg-secondary px-5 text-sm font-semibold text-secondary-foreground disabled:opacity-40"
            >
              {status === "sending" ? "Sending" : "Send"}
            </button>
          </div>
          {status === "missed" ? (
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              We couldn{"'"}t find a booking with that. Try the other one, or call {CALL_PHONE}.
            </p>
          ) : null}
        </form>
      ) : null}
      {sent && !known.contactId ? <p className="mt-4 text-sm text-secondary">Sent. We{"'"}ve got it.</p> : null}

      <div className="mt-6 grid grid-cols-2 gap-2">
        {links ? (
          <>
            <a
              href={links.ics}
              onClick={() => trackEvent("precall_add_calendar", { type: "ics" })}
              className="min-touch inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 text-xs font-semibold text-foreground"
            >
              <CalendarPlus className="h-4 w-4 text-secondary" />
              Apple or Outlook
            </a>
            <a
              href={links.google}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("precall_add_calendar", { type: "google" })}
              className="min-touch inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 text-xs font-semibold text-foreground"
            >
              <CalendarPlus className="h-4 w-4 text-secondary" />
              Google
            </a>
          </>
        ) : null}
        {!declined ? (
          <button
            type="button"
            onClick={onShowPlan}
            className="min-touch col-span-2 rounded-md border border-border px-3 text-xs font-semibold text-foreground"
          >
            See your plan
          </button>
        ) : null}
      </div>

      <p className="label-mono mt-8 text-[10px] text-muted-foreground">While you wait</p>
      <ul className="mt-1">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <Link
              href={study.href}
              target="_blank"
              onClick={() => trackEvent("precall_case_study", { slug: study.slug })}
              className="group flex items-center justify-between gap-4 border-b border-border py-3.5"
            >
              <span className="min-w-0">
                <span className="block text-sm text-foreground">{study.client}</span>
                <span className="block truncate text-xs text-muted-foreground">{study.result}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-secondary" />
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-muted-foreground">
        Need to move the call? <a href={CALL_PHONE_HREF} className="text-foreground underline-offset-4 hover:underline">{CALL_PHONE}</a>
      </p>
    </div>
  )
}
