"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Check, Pencil } from "lucide-react"

import { gsap, prefersReducedMotion } from "@/components/motion/gsap"
import { jobsToCoverFirstTerm, MIN_TERM_MONTHS } from "@/lib/offer"
import {
  capacityOptions,
  findTrade,
  formatJobValue,
  jobOptionsFor,
  jobValueStops,
  nearestStopIndex,
  radiusOptions,
  sourceOptions,
  tradeLabel,
  usesPaidHelp,
  type PrecallAnswers,
  type PrecallContext,
  type Question,
} from "@/lib/precall"
import { trades } from "@/lib/trades"

type StepProps = {
  question: Question
  answers: PrecallAnswers
  context: PrecallContext
  isLast: boolean
  onAnswer: (patch: Partial<PrecallAnswers>) => void
  onSkip: () => void
  /** Live, uncommitted choices, so the dot picture can react before they press Next. */
  onDraft: (patch: Partial<PrecallAnswers>) => void
}

export const inputClass =
  "min-touch w-full min-w-0 rounded-md border border-border bg-card px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary sm:text-sm"

/** How long a single tap shows its tick before moving on. */
const AUTO_ADVANCE_MS = 240

function Chip({
  label,
  selected,
  onClick,
  multi,
}: {
  label: string
  selected: boolean
  onClick: () => void
  multi?: boolean
}) {
  return (
    <button
      type="button"
      role={multi ? "checkbox" : "radio"}
      aria-checked={selected}
      onClick={onClick}
      data-anim
      className={`group min-touch flex w-full items-center justify-between gap-3 rounded-md border px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-200 active:scale-[0.98] sm:text-sm ${
        selected
          ? "border-secondary bg-secondary/10 text-foreground"
          : "border-border bg-card text-foreground/85 hover:border-secondary/50"
      }`}
    >
      <span>{label}</span>
      <span
        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[4px] border transition-all duration-200 ${
          selected ? "scale-100 border-secondary bg-secondary" : "scale-90 border-border"
        }`}
      >
        <Check
          className={`h-3 w-3 text-secondary-foreground transition-transform duration-200 ${selected ? "scale-100" : "scale-0"}`}
          strokeWidth={3}
        />
      </span>
    </button>
  )
}

/** The action bar. Stays pinned to the bottom of the screen while its step is on screen. */
export function Footer({
  onSkip,
  onNext,
  canNext,
  isLast,
  showNext = true,
  nextLabel,
  skipLabel = "Skip",
}: {
  onSkip?: () => void
  onNext?: () => void
  canNext?: boolean
  isLast?: boolean
  showNext?: boolean
  nextLabel?: string
  skipLabel?: string
}) {
  return (
    <div className="pb-safe sticky bottom-0 z-20 -mx-5 mt-6 bg-gradient-to-t from-background from-70% to-transparent px-5 pt-6 sm:-mx-8 sm:px-8">
      <div className="flex items-center gap-3 pb-3">
        {onSkip ? (
          <button
            type="button"
            onClick={onSkip}
            className="min-touch flex-shrink-0 rounded-md px-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {skipLabel}
          </button>
        ) : null}
        {showNext ? (
          <button
            type={onNext ? "button" : "submit"}
            onClick={onNext}
            disabled={!canNext}
            className="group min-touch inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-secondary px-6 py-4 text-[15px] font-semibold text-secondary-foreground transition-all active:scale-[0.99] disabled:opacity-35 sm:ml-auto sm:min-w-[11rem] sm:flex-none"
          >
            {nextLabel ?? (isLast ? "Finish my plan" : "Next")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <span className="flex-1 text-right text-xs text-muted-foreground">Tap one to carry on</span>
        )}
      </div>
    </div>
  )
}

/** Single choice: tap, see the tick, then move on. */
function useAutoAdvance(onAnswer: StepProps["onAnswer"]) {
  const [picked, setPicked] = useState<string>()
  const timer = useRef<number>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])
  return {
    picked,
    pick(value: string, patch: Partial<PrecallAnswers>) {
      setPicked(value)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => onAnswer(patch), prefersReducedMotion() ? 0 : AUTO_ADVANCE_MS)
    },
  }
}

/** Shows what a typed trade will be treated as, so typos are caught gently. */
function TradeMatch({ value }: { value: string }) {
  const match = findTrade(value)
  if (!value.trim()) return null
  return (
    <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
      {match && match.name.toLowerCase() !== value.trim().toLowerCase() ? (
        <>
          Got it, <span className="text-secondary">{match.name}</span>.
        </>
      ) : match ? null : (
        <>We{"'"}ll use {tradeLabel(value)}. No problem if it{"'"}s not in the list.</>
      )}
    </p>
  )
}

function TradeStep({ answers, onAnswer, onSkip }: StepProps) {
  const { picked, pick } = useAutoAdvance(onAnswer)
  const [other, setOther] = useState(findTrade(answers.trade) ? "" : (answers.trade ?? ""))
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (other.trim()) onAnswer({ trade: findTrade(other)?.name ?? other.trim() })
      }}
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="radiogroup">
        {trades.map((trade) => (
          <Chip
            key={trade.slug}
            label={trade.name}
            selected={(picked ?? answers.trade) === trade.name}
            onClick={() => pick(trade.name, { trade: trade.name })}
          />
        ))}
      </div>
      <div className="mt-3" data-anim>
        <input
          type="text"
          aria-label="Your trade, if it isn't listed"
          placeholder="Something else? Type it here"
          value={other}
          onChange={(e) => setOther(e.target.value)}
          className={inputClass}
        />
        <TradeMatch value={other} />
      </div>
      <Footer onSkip={onSkip} canNext={other.trim().length > 1} showNext={other.trim().length > 0} />
    </form>
  )
}

function JobsStep({ answers, context, onAnswer, onSkip, onDraft, isLast }: StepProps) {
  const options = jobOptionsFor(answers.trade ?? context.tradeName)
  const [jobs, setJobs] = useState<string[]>(answers.jobs ?? [])
  const [otherOpen, setOtherOpen] = useState(Boolean(answers.jobsOther))
  const [other, setOther] = useState(answers.jobsOther ?? "")
  const toggle = (job: string) => setJobs((list) => (list.includes(job) ? list.filter((j) => j !== job) : [...list, job]))
  const count = jobs.length + (otherOpen && other.trim() ? 1 : 0)
  const jobsOther = otherOpen && other.trim() ? other.trim() : undefined

  useEffect(() => onDraft({ jobs, jobsOther }), [jobs, jobsOther, onDraft])

  return (
    <>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((job) => (
          <Chip key={job} label={job} multi selected={jobs.includes(job)} onClick={() => toggle(job)} />
        ))}
        <Chip label="Something else" multi selected={otherOpen} onClick={() => setOtherOpen((open) => !open)} />
      </div>
      {otherOpen ? (
        <input
          type="text"
          autoFocus
          aria-label="Other jobs you want more of"
          placeholder="Which jobs?"
          value={other}
          onChange={(e) => setOther(e.target.value)}
          className={`${inputClass} mt-2`}
        />
      ) : null}
      <Footer onSkip={onSkip} isLast={isLast} canNext={count > 0} onNext={() => onAnswer({ jobs, jobsOther })} />
    </>
  )
}

function AreaStep({ answers, context, onAnswer, onSkip, onDraft, isLast }: StepProps) {
  // When we already know their base, only the radius is asked. They can still correct the town.
  const [editingTown, setEditingTown] = useState(!context.town)
  const [town, setTown] = useState(answers.town ?? "")
  const [radius, setRadius] = useState(answers.radius)
  const canNext = editingTown ? town.trim().length > 1 : Boolean(radius)

  useEffect(() => onDraft({ radius, town: editingTown ? town.trim() || undefined : undefined }), [radius, town, editingTown, onDraft])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!canNext) return
        onAnswer(editingTown ? { town: town.trim(), radius } : { radius })
      }}
    >
      {editingTown ? (
        <input
          type="text"
          data-anim
          autoFocus={Boolean(context.town)}
          aria-label="Town or postcode"
          autoComplete="address-level2"
          placeholder="Your town or postcode"
          value={town}
          onChange={(e) => setTown(e.target.value)}
          className={`${inputClass} mb-4`}
        />
      ) : null}
      <p className="min-h-4 text-center text-xs text-muted-foreground" aria-live="polite" data-anim>
        {radius ? "Ads show to everyone in the gold area. Outside it, you never pay a penny." : "Pick how far you'll go."}
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5" data-anim role="radiogroup" aria-label="How far you'll travel">
        {radiusOptions.map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={radius === option}
            onClick={() => setRadius(option)}
            className={`min-touch rounded-md border px-3 py-2 text-sm transition-all duration-200 active:scale-95 ${
              radius === option
                ? "border-secondary bg-secondary/10 text-foreground"
                : "border-border bg-card text-foreground/80 hover:border-secondary/50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {!editingTown ? (
        <p className="mt-4 text-center text-xs text-muted-foreground" data-anim>
          Not based in {context.town}?{" "}
          <button type="button" onClick={() => setEditingTown(true)} className="text-foreground underline underline-offset-4">
            Change it
          </button>
        </p>
      ) : null}
      <Footer onSkip={onSkip} isLast={isLast} canNext={canNext} />
    </form>
  )
}

function JobValueStep({ answers, context, onAnswer, onSkip, onDraft, isLast }: StepProps) {
  const start = answers.jobValue ?? findTrade(answers.trade ?? context.tradeName)?.typicalJob.value ?? 5000
  const [index, setIndex] = useState(nearestStopIndex(start))
  const value = jobValueStops[index]
  const jobs = jobsToCoverFirstTerm(value)
  const numberRef = useRef<HTMLSpanElement>(null)
  const shown = useRef({ v: value })

  useEffect(() => onDraft({ jobValue: value }), [value, onDraft])

  // Rolls the big number between stops rather than snapping.
  useEffect(() => {
    const el = numberRef.current
    if (!el) return
    if (prefersReducedMotion()) {
      el.textContent = formatJobValue(value)
      return
    }
    const tween = gsap.to(shown.current, {
      v: value,
      duration: 0.35,
      ease: "power3.out",
      onUpdate: () => {
        const rounded = Math.round(shown.current.v / 50) * 50
        el.textContent = rounded === value ? formatJobValue(value) : formatJobValue(rounded).replace("+", "")
      },
    })
    return () => {
      tween.kill()
    }
  }, [value])

  const percent = (index / (jobValueStops.length - 1)) * 100

  return (
    <>
      <div className="text-center" data-anim>
        <span ref={numberRef} className="display block text-5xl tabular-nums text-foreground sm:text-6xl">
          {formatJobValue(value)}
        </span>
        <span className="label-mono mt-2 block text-muted-foreground">a typical job</span>
      </div>
      <div className="mt-5" data-anim>
        <input
          type="range"
          min={0}
          max={jobValueStops.length - 1}
          step={1}
          value={index}
          aria-label="Typical job value"
          aria-valuetext={formatJobValue(value)}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="precall-range w-full"
          style={{ ["--fill" as string]: `${percent}%` }}
        />
        <div className="label-mono mt-1 flex justify-between text-[10px] text-muted-foreground">
          <span>£500</span>
          <span>£50k+</span>
        </div>
      </div>
      <div className="mt-5 rounded-md border border-secondary/25 bg-secondary/[0.06] p-4" data-anim>
        <p className="text-[15px] leading-snug text-foreground">
          About <span className="tabular-nums text-secondary">{jobs}</span> extra {jobs === 1 ? "job" : "jobs"} would cover your
          first {MIN_TERM_MONTHS} months.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">At a 30% margin. A rough guide, we{"'"}ll do it properly on the call.</p>
      </div>
      <Footer onSkip={onSkip} isLast={isLast} canNext onNext={() => onAnswer({ jobValue: value })} />
    </>
  )
}

function CapacityStep({ answers, onAnswer, onSkip, onDraft }: StepProps) {
  const { picked, pick } = useAutoAdvance(onAnswer)
  const current = picked ?? answers.capacity
  useEffect(() => onDraft({ capacity: current }), [current, onDraft])
  return (
    <>
      <div className="grid grid-cols-2 gap-2" role="radiogroup">
        {capacityOptions.map((option) => (
          <Chip key={option} label={option} selected={current === option} onClick={() => pick(option, { capacity: option })} />
        ))}
      </div>
      <Footer onSkip={onSkip} showNext={false} />
    </>
  )
}

function SourcesStep({ answers, onAnswer, onSkip, onDraft, isLast }: StepProps) {
  const [sources, setSources] = useState<string[]>(answers.sources ?? [])
  const [note, setNote] = useState(answers.triedNote ?? "")
  const toggle = (s: string) => setSources((list) => (list.includes(s) ? list.filter((x) => x !== s) : [...list, s]))
  const followUp = usesPaidHelp(sources)
  useEffect(() => onDraft({ sources }), [sources, onDraft])
  return (
    <>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {sourceOptions.map((source) => (
          <Chip key={source} label={source} multi selected={sources.includes(source)} onClick={() => toggle(source)} />
        ))}
      </div>
      {followUp ? (
        <label className="mt-4 block">
          <span className="text-sm text-muted-foreground">How has that gone? Optional, but it helps.</span>
          <textarea
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Leads were rubbish, cost too much, it works but I want more..."
            className={`${inputClass} mt-2 resize-none`}
          />
        </label>
      ) : null}
      <Footer
        onSkip={onSkip}
        isLast={isLast}
        canNext={sources.length > 0}
        onNext={() => onAnswer({ sources, triedNote: followUp && note.trim() ? note.trim() : undefined })}
      />
    </>
  )
}

const agendaPrompts = [
  "How quickly could I be live?",
  "What if I get too busy?",
  "Do I own the website?",
  "How much would I spend on ads?",
]

function AgendaStep({ answers, onAnswer, onSkip, isLast }: StepProps) {
  const [agenda, setAgenda] = useState(answers.agenda ?? "")
  const add = (prompt: string) =>
    setAgenda((text) => (text.includes(prompt) ? text : `${text.trim() ? `${text.trim()} ` : ""}${prompt}`))
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onAnswer({ agenda: agenda.trim() || undefined })
      }}
    >
      <div className="flex flex-wrap gap-2" data-anim>
        {agendaPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => add(prompt)}
            className={`min-touch rounded-md border px-3.5 py-2 text-left text-sm transition-colors ${
              agenda.includes(prompt)
                ? "border-secondary bg-secondary/10 text-foreground"
                : "border-border bg-card text-foreground/80 hover:border-secondary/50"
            }`}
          >
            {prompt}
          </button>
        ))}
      </div>
      <textarea
        rows={4}
        data-anim
        value={agenda}
        onChange={(e) => setAgenda(e.target.value)}
        placeholder="Or type anything you like"
        className={`${inputClass} mt-3 resize-none`}
      />
      <Footer onSkip={onSkip} isLast={isLast} canNext />
    </form>
  )
}

export function QuestionStep(props: StepProps) {
  switch (props.question.id) {
    case "trade":
      return <TradeStep {...props} />
    case "jobs":
      return <JobsStep {...props} />
    case "area":
      return <AreaStep {...props} />
    case "jobValue":
      return <JobValueStep {...props} />
    case "capacity":
      return <CapacityStep {...props} />
    case "sources":
      return <SourcesStep {...props} />
    case "agenda":
      return <AgendaStep {...props} />
  }
}

export type Profile = { businessName?: string; trade?: string; town?: string }

/**
 * "Have I got this right?" Shows what we hold on them, one tap to confirm, tap a row to fix it.
 * Catches messy CRM data before it ends up in the plan.
 */
export function ProfileCheck({ context, onDone }: { context: PrecallContext; onDone: (changes: Profile) => void }) {
  const original: Profile = { businessName: context.businessName, trade: tradeLabel(context.tradeName), town: context.town }
  const [values, setValues] = useState<Profile>(original)
  const [editing, setEditing] = useState<keyof Profile>()
  const rows = (
    [
      { key: "businessName", label: "Business", placeholder: "Business name" },
      { key: "trade", label: "Trade", placeholder: "What you do" },
      { key: "town", label: "Based in", placeholder: "Town or postcode" },
    ] as const
  ).filter((row) => Boolean(original[row.key]))

  const changes: Profile = {}
  for (const row of rows) {
    const value = values[row.key]?.trim()
    if (value && value !== original[row.key]) changes[row.key] = row.key === "trade" ? (findTrade(value)?.name ?? value) : value
  }
  const changed = Object.keys(changes).length > 0
  const valid = rows.every((row) => (values[row.key]?.trim().length ?? 0) > 1)

  return (
    <>
      <ul className="overflow-hidden rounded-md border border-border bg-card" data-anim>
        {rows.map((row) => (
          <li key={row.key} className="border-b border-border last:border-b-0">
            {editing === row.key ? (
              <div className="p-4">
                <label className="label-mono text-[10px] text-muted-foreground" htmlFor={`profile-${row.key}`}>
                  {row.label}
                </label>
                <input
                  id={`profile-${row.key}`}
                  autoFocus
                  type="text"
                  value={values[row.key] ?? ""}
                  placeholder={row.placeholder}
                  onChange={(e) => setValues((v) => ({ ...v, [row.key]: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      setEditing(undefined)
                    }
                  }}
                  className={`${inputClass} mt-2 bg-background`}
                />
                {row.key === "trade" ? <TradeMatch value={values.trade ?? ""} /> : null}
                <button type="button" onClick={() => setEditing(undefined)} className="min-touch mt-1 text-sm font-medium text-secondary">
                  Done
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setEditing(row.key)}
                className="min-touch flex w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-muted/30"
              >
                <span className="label-mono w-20 flex-shrink-0 text-[10px] text-muted-foreground">{row.label}</span>
                <span className="min-w-0 flex-1 truncate text-[15px] text-foreground">
                  {row.key === "trade" ? tradeLabel(values.trade) : values[row.key]}
                </span>
                <Pencil className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
              </button>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted-foreground" data-anim>
        Tap anything that{"'"}s wrong and I{"'"}ll update it.
      </p>
      <Footer canNext={valid} nextLabel={changed ? "Save and carry on" : "Yes, that's right"} onNext={() => onDone(changes)} />
    </>
  )
}
