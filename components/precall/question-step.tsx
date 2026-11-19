"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Check } from "lucide-react"

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
}

const inputClass =
  "min-touch w-full min-w-0 rounded-xl border border-border bg-background/40 px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary sm:text-sm"

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
      className={`group min-touch flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-300 active:scale-[0.98] sm:text-sm ${
        selected
          ? "border-secondary bg-secondary/10 text-foreground"
          : "border-border text-foreground/85 hover:border-secondary/50 hover:bg-muted/40"
      }`}
    >
      <span>{label}</span>
      <span
        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center border transition-all duration-300 ${
          multi ? "rounded-md" : "rounded-full"
        } ${selected ? "scale-100 border-secondary bg-secondary" : "scale-90 border-border"}`}
      >
        <Check
          className={`h-3 w-3 text-secondary-foreground transition-transform duration-300 ${selected ? "scale-100" : "scale-0"}`}
          strokeWidth={3}
        />
      </span>
    </button>
  )
}

function Footer({
  onSkip,
  onNext,
  canNext,
  isLast,
  showNext = true,
}: {
  onSkip: () => void
  onNext?: () => void
  canNext?: boolean
  isLast: boolean
  showNext?: boolean
}) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4" data-anim>
      <button
        type="button"
        onClick={onSkip}
        className="min-touch px-1 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        Skip this one
      </button>
      {showNext ? (
        <button
          type={onNext ? "button" : "submit"}
          onClick={onNext}
          disabled={!canNext}
          className="group min-touch inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLast ? "Finish my plan" : "Next"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      ) : null}
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
      timer.current = window.setTimeout(() => onAnswer(patch), prefersReducedMotion() ? 0 : 380)
    },
  }
}

function TradeStep({ answers, onAnswer, onSkip, isLast }: StepProps) {
  const { picked, pick } = useAutoAdvance(onAnswer)
  const [other, setOther] = useState(findTrade(answers.trade) ? "" : (answers.trade ?? ""))
  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="radiogroup">
        {trades.map((trade) => (
          <Chip
            key={trade.slug}
            label={trade.name}
            selected={(picked ?? answers.trade) === trade.name}
            onClick={() => pick(trade.name, { trade: trade.name })}
          />
        ))}
      </div>
      <form
        className="mt-2.5 flex gap-2.5"
        data-anim
        onSubmit={(e) => {
          e.preventDefault()
          if (other.trim()) onAnswer({ trade: other.trim() })
        }}
      >
        <input
          type="text"
          aria-label="Your trade, if it isn't listed"
          placeholder="Something else"
          value={other}
          onChange={(e) => setOther(e.target.value)}
          className={`${inputClass} flex-1`}
        />
        <button
          type="submit"
          disabled={!other.trim()}
          className="min-touch flex-shrink-0 rounded-xl bg-secondary px-5 text-sm font-semibold text-secondary-foreground disabled:opacity-40"
        >
          Next
        </button>
      </form>
      <Footer onSkip={onSkip} isLast={isLast} showNext={false} />
    </>
  )
}

function JobsStep({ answers, context, onAnswer, onSkip, isLast }: StepProps) {
  const options = jobOptionsFor(answers.trade ?? context.tradeName)
  const [jobs, setJobs] = useState<string[]>(answers.jobs ?? [])
  const [otherOpen, setOtherOpen] = useState(Boolean(answers.jobsOther))
  const [other, setOther] = useState(answers.jobsOther ?? "")
  const toggle = (job: string) => setJobs((list) => (list.includes(job) ? list.filter((j) => j !== job) : [...list, job]))
  const canNext = jobs.length > 0 || other.trim().length > 0

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
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
          className={`${inputClass} mt-2.5`}
        />
      ) : null}
      <Footer
        onSkip={onSkip}
        isLast={isLast}
        canNext={canNext}
        onNext={() => onAnswer({ jobs, jobsOther: otherOpen && other.trim() ? other.trim() : undefined })}
      />
    </>
  )
}

function RadiusRings({ town, radius }: { town: string; radius?: string }) {
  const index = radius ? radiusOptions.indexOf(radius) : -1
  return (
    <div className="relative mx-auto mt-6 aspect-square w-full max-w-[11rem] sm:max-w-[15rem]" aria-hidden data-anim>
      {radiusOptions.map((option, i) => {
        const size = 28 + i * 18
        const active = i <= index
        return (
          <span
            key={option}
            className={`absolute left-1/2 top-1/2 rounded-full border transition-all duration-700 ease-out ${
              active ? "border-secondary/60 bg-secondary/[0.05]" : "border-border/70"
            } ${i === index ? "precall-ring-pulse" : ""}`}
            style={{ width: `${size}%`, height: `${size}%`, transform: "translate(-50%, -50%)" }}
          />
        )
      })}
      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_0_6px_hsl(42_40%_56%/0.18)]" />
        <span className="label-mono mt-2 max-w-[8rem] truncate text-[10px] text-foreground">{town || "Your base"}</span>
      </span>
    </div>
  )
}

function AreaStep({ answers, context, onAnswer, onSkip, isLast }: StepProps) {
  // When we already know their base, only the radius is asked. They can still correct the town.
  const [editingTown, setEditingTown] = useState(!context.town || Boolean(answers.town))
  const [town, setTown] = useState(answers.town ?? "")
  const [radius, setRadius] = useState(answers.radius)
  const shownTown = editingTown ? town.trim() : (context.town ?? "")
  const canNext = editingTown ? town.trim().length > 0 : Boolean(radius)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (canNext) onAnswer({ town: editingTown ? town.trim() : undefined, radius })
      }}
    >
      {editingTown ? (
        <input
          type="text"
          data-anim
          autoFocus={Boolean(context.town)}
          aria-label="Town or postcode"
          autoComplete="address-level2"
          placeholder="Town or postcode"
          value={town}
          onChange={(e) => setTown(e.target.value)}
          className={`${inputClass} mt-8`}
        />
      ) : null}
      <RadiusRings town={shownTown} radius={radius} />
      {editingTown ? (
        <p className="label-mono mt-4 text-center text-[10px] text-muted-foreground" data-anim>
          How far would you travel?
        </p>
      ) : (
        <p className="mt-3 text-center text-xs text-muted-foreground" data-anim>
          Not based in {context.town}?{" "}
          <button
            type="button"
            onClick={() => setEditingTown(true)}
            className="min-touch text-foreground underline underline-offset-4"
          >
            Change it
          </button>
        </p>
      )}
      <div className="mt-3 flex flex-wrap justify-center gap-2" data-anim role="radiogroup">
        {radiusOptions.map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={radius === option}
            onClick={() => setRadius(option)}
            className={`min-touch rounded-full border px-4 py-2 text-sm transition-all duration-300 active:scale-95 ${
              radius === option
                ? "border-secondary bg-secondary/10 text-foreground"
                : "border-border text-foreground/80 hover:border-secondary/50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <Footer onSkip={onSkip} isLast={isLast} canNext={canNext} />
    </form>
  )
}

function JobValueStep({ answers, context, onAnswer, onSkip, isLast }: StepProps) {
  const start = answers.jobValue ?? findTrade(answers.trade ?? context.tradeName)?.typicalJob.value ?? 5000
  const [index, setIndex] = useState(nearestStopIndex(start))
  const [touched, setTouched] = useState(typeof answers.jobValue === "number")
  const value = jobValueStops[index]
  const jobs = jobsToCoverFirstTerm(value)
  const numberRef = useRef<HTMLSpanElement>(null)
  const shown = useRef({ v: value })

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
      duration: 0.45,
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
      <div className="mt-10 text-center" data-anim>
        <span ref={numberRef} className="display block text-6xl tabular-nums text-foreground sm:text-7xl">
          {formatJobValue(value)}
        </span>
        <span className="label-mono mt-3 block text-muted-foreground">a typical job</span>
      </div>
      <div className="mt-8" data-anim>
        <input
          type="range"
          min={0}
          max={jobValueStops.length - 1}
          step={1}
          value={index}
          aria-label="Typical job value"
          aria-valuetext={formatJobValue(value)}
          onChange={(e) => {
            setIndex(Number(e.target.value))
            setTouched(true)
          }}
          className="precall-range w-full"
          style={{ ["--fill" as string]: `${percent}%` }}
        />
        <div className="label-mono mt-2 flex justify-between text-[10px] text-muted-foreground">
          <span>£500</span>
          <span>£50k+</span>
        </div>
      </div>
      <div
        className={`mt-8 border-l-2 border-secondary pl-4 transition-opacity duration-500 ${touched ? "opacity-100" : "opacity-60"}`}
        data-anim
      >
        <p className="text-base leading-snug text-foreground">
          About {jobs} extra {jobs === 1 ? "job" : "jobs"} would cover your first {MIN_TERM_MONTHS} months.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">At a 30% margin. A rough guide, we{"'"}ll do it properly on the call.</p>
      </div>
      <Footer onSkip={onSkip} isLast={isLast} canNext onNext={() => onAnswer({ jobValue: value })} />
    </>
  )
}

function SingleStep({
  options,
  field,
  answers,
  onAnswer,
  onSkip,
  isLast,
}: StepProps & { options: string[]; field: "capacity" }) {
  const { picked, pick } = useAutoAdvance(onAnswer)
  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-2.5" role="radiogroup">
        {options.map((option) => (
          <Chip
            key={option}
            label={option}
            selected={(picked ?? answers[field]) === option}
            onClick={() => pick(option, { [field]: option })}
          />
        ))}
      </div>
      <Footer onSkip={onSkip} isLast={isLast} showNext={false} />
    </>
  )
}

function SourcesStep({ answers, onAnswer, onSkip, isLast }: StepProps) {
  const [sources, setSources] = useState<string[]>(answers.sources ?? [])
  const [note, setNote] = useState(answers.triedNote ?? "")
  const toggle = (s: string) => setSources((list) => (list.includes(s) ? list.filter((x) => x !== s) : [...list, s]))
  const followUp = usesPaidHelp(sources)
  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {sourceOptions.map((source) => (
          <Chip key={source} label={source} multi selected={sources.includes(source)} onClick={() => toggle(source)} />
        ))}
      </div>
      {followUp ? (
        <label className="mt-5 block">
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

function AgendaStep({ answers, onAnswer, onSkip, isLast }: StepProps) {
  const [agenda, setAgenda] = useState(answers.agenda ?? "")
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onAnswer({ agenda: agenda.trim() || undefined })
      }}
    >
      <textarea
        rows={4}
        data-anim
        value={agenda}
        onChange={(e) => setAgenda(e.target.value)}
        placeholder="How quickly could I be live? What happens if I get too busy?"
        className={`${inputClass} mt-8 resize-none`}
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
      return <SingleStep {...props} options={capacityOptions} field="capacity" />
    case "sources":
      return <SourcesStep {...props} />
    case "agenda":
      return <AgendaStep {...props} />
  }
}
