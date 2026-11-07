"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { RuleList } from "@/components/growth/rules"
import { trackEvent } from "@/lib/analytics"
import { readAttribution } from "@/lib/attribution"
import {
  BOOKING_URL,
  DEFAULT_MARGIN,
  FIRST_TERM_COST,
  formatGBP,
  jobsToCoverFirstTerm,
  MIN_AD_SPEND,
  MIN_JOB_VALUE,
  MIN_TERM_MONTHS,
  MONTHLY_FEE,
  SETUP_FEE,
} from "@/lib/offer"
import {
  capacityOptions,
  CONSENT_TEXT,
  decisionMakerOptions,
  frustrationOptions,
  jobValueFloor,
  jobValueOptions,
  leadOutcome,
  priceReactionOptions,
  type LeadTier,
  type NotYetReason,
  type SurveyAnswers,
  type SurveyDetails,
  type SurveyOption,
} from "@/lib/survey"
import { trades } from "@/lib/trades"

type AnswerKey = "trade" | "frustration" | "jobValue" | "capacity" | "decisionMaker" | "priceReaction"

type Screen =
  | { id: AnswerKey; type: "choice"; question: string; hint?: string; options: SurveyOption[]; other?: boolean }
  | { id: "area"; type: "area"; question: string; hint: string }
  | { id: "details"; type: "details"; question: string; hint: string }

const screens: Screen[] = [
  {
    id: "trade",
    type: "choice",
    question: "Let's build your plan. What's your trade?",
    hint: "About two minutes. We only work with UK trades.",
    options: trades.map((trade) => ({ value: trade.name, label: trade.name })),
    other: true,
  },
  {
    id: "area",
    type: "area",
    question: "Where do you want more work?",
    hint: "We'll look at who you're up against there.",
  },
  {
    id: "frustration",
    type: "choice",
    question: "What's holding you back right now?",
    hint: "Pick the closest. It shapes your plan.",
    options: frustrationOptions,
  },
  {
    id: "details",
    type: "details",
    question: "Who should we speak to?",
    hint: "We'll look at your business before we talk.",
  },
  {
    id: "jobValue",
    type: "choice",
    question: "What's a typical job worth to you?",
    hint: "We'll use this to show you what it takes to pay for itself.",
    options: jobValueOptions,
  },
  {
    id: "capacity",
    type: "choice",
    question: "If more work came in, when could you take it on?",
    hint: "So we can plan when to start.",
    options: capacityOptions,
  },
  {
    id: "decisionMaker",
    type: "choice",
    question: "Who makes the call on investing in marketing?",
    hint: "So we get the right people on your call.",
    options: decisionMakerOptions,
  },
  {
    id: "priceReaction",
    type: "choice",
    question: "Is that something you could invest to win more work?",
    options: priceReactionOptions,
  },
]

const valueItems = [
  "A website built to turn visitors into enquiries",
  "Google Ads managed for you, aimed at people searching for your trade in your area",
  "Instant follow-up, so every missed call gets a text back",
  "Tracking and reporting, so you see what each lead costs",
  "It's all yours, including the website if you ever leave",
]

const notYetCopy: Record<NotYetReason, { title: string; body: string }> = {
  price: {
    title: "That's completely fair.",
    body: "It's a real investment, and it should only start when it's comfortable. We'll keep in touch, and you're welcome to come back whenever the time is right.",
  },
  capacity: {
    title: "Sounds like you've got plenty on.",
    body: "That's a good problem to have. There's no point bringing in work you can't take on yet, so come back when you've got room for more.",
  },
  decision: {
    title: "Thanks for looking into this.",
    body: "The best next step is for whoever makes the decision to see it for themselves. Send them the link below, and they can go through the same questions.",
  },
  jobValue: {
    title: "Now probably isn't the right time.",
    body: `The system works best on jobs worth ${formatGBP(MIN_JOB_VALUE)} or more. Below that, it's hard for the ads to pay for themselves, and we'd rather tell you now than take your money.`,
  },
}

const emptyDetails: SurveyDetails = { firstName: "", businessName: "", phone: "", email: "", website: "" }

const detailFields: { key: keyof SurveyDetails; label: string; type: string; autoComplete: string; optional?: boolean }[] = [
  { key: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { key: "businessName", label: "Business name", type: "text", autoComplete: "organization" },
  { key: "phone", label: "Mobile number", type: "tel", autoComplete: "tel" },
  { key: "email", label: "Email", type: "email", autoComplete: "email" },
  { key: "website", label: "Website or Google listing (optional)", type: "text", autoComplete: "url", optional: true },
]

function detailsValid(d: SurveyDetails) {
  return (
    d.firstName.trim().length > 1 &&
    d.businessName.trim().length > 1 &&
    d.phone.replace(/\D/g, "").length >= 10 &&
    /^\S+@\S+\.\S+$/.test(d.email.trim())
  )
}

const inputClass =
  "min-touch w-full min-w-0 rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary"

function PriceBlock({ jobValue }: { jobValue?: string }) {
  const floor = jobValue ? jobValueFloor[jobValue] : undefined

  return (
    <div className="mt-6">
      <p className="label-mono mb-4 text-muted-foreground">Here{"'"}s what you{"'"}d get</p>
      <RuleList items={valueItems} tone="strong" />
      <p className="mt-5 border-l-2 border-secondary pl-4 text-sm text-foreground">
        Focus Refurbishment: 24 leads in a fortnight.
      </p>
      <p className="mt-6 text-base leading-relaxed text-foreground">
        The Growth System is {formatGBP(SETUP_FEE)} one-off setup, then {formatGBP(MONTHLY_FEE)} a month plus ad
        spend, which starts at around {formatGBP(MIN_AD_SPEND)} a month.
      </p>
      {floor ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          That{"'"}s {formatGBP(FIRST_TERM_COST)} for your first {MIN_TERM_MONTHS} months. At {formatGBP(floor)} a job
          and a {DEFAULT_MARGIN}% margin, {jobsToCoverFirstTerm(floor)} extra{" "}
          {jobsToCoverFirstTerm(floor) === 1 ? "job covers" : "jobs cover"} it. That{"'"}s an example, not a forecast.
        </p>
      ) : null}
    </div>
  )
}

export function GrowthSurvey() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<SurveyAnswers>({})
  const [details, setDetails] = useState<SurveyDetails>(emptyDetails)
  const [consent, setConsent] = useState(false)
  const [company, setCompany] = useState("")
  const [otherTrade, setOtherTrade] = useState("")
  const [area, setArea] = useState("")
  const [outcome, setOutcome] = useState<null | { tier: LeadTier; reason?: NotYetReason }>(null)
  const saveQueue = useRef<Promise<unknown>>(Promise.resolve())
  const panelRef = useRef<HTMLDivElement>(null)

  const current = screens[step]
  const detailsIndex = screens.findIndex((screen) => screen.id === "details")
  const firstName = details.firstName.trim().split(/\s+/)[0]

  useEffect(() => {
    trackEvent("survey_step", { step: step + 1, question: current.id })
  }, [step, current.id])

  // A question can be shorter than the last one, so bring the top of the survey back into view.
  useEffect(() => {
    const panel = panelRef.current
    if (panel && panel.getBoundingClientRect().top < 0) panel.scrollIntoView({ block: "start" })
  }, [step, outcome])

  const bookingSrc = useMemo(() => {
    const params = new URLSearchParams({
      first_name: details.firstName.trim(),
      email: details.email.trim(),
      phone: details.phone.trim(),
    })
    return `${BOOKING_URL}?${params.toString()}`
  }, [details])

  // Saves run one at a time, so a quick tap can't create the same contact twice.
  function save(stage: "details" | "progress" | "complete", nextAnswers: SurveyAnswers) {
    const body = JSON.stringify({
      stage,
      consent,
      company,
      details,
      answers: nextAnswers,
      attribution: readAttribution(),
    })
    saveQueue.current = saveQueue.current
      .then(() =>
        fetch("/api/survey", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true,
        })
      )
      .catch(() => undefined)
  }

  function advance(nextAnswers: SurveyAnswers) {
    setAnswers(nextAnswers)
    if (step < detailsIndex) {
      setStep(step + 1)
      return
    }
    if (step === screens.length - 1) {
      const result = leadOutcome(nextAnswers)
      save("complete", nextAnswers)
      trackEvent("survey_complete", { tier: result.tier })
      setOutcome(result)
      return
    }
    save("progress", nextAnswers)
    setStep(step + 1)
  }

  if (outcome && outcome.tier !== "Not yet") {
    return (
      <div ref={panelRef} className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card">
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        <div className="border-b border-border p-6 sm:p-10">
          <p className="label-mono text-secondary">Thanks, {firstName}</p>
          <h2 className="display mt-4 text-3xl text-foreground sm:text-4xl">Pick a time that suits you.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We{"'"}ll go through your numbers and show you how the Growth System would work for your
            business. No pressure.
            {outcome.tier === "Needs partner" ? " Bring your partner or colleague along, so you can decide together." : ""}
          </p>
        </div>
        <iframe
          src={bookingSrc}
          className="block min-h-[760px] w-full border-0"
          scrolling="auto"
          title="Book a call with NobleLeads"
        />
      </div>
    )
  }

  if (outcome) {
    const copy = notYetCopy[outcome.reason ?? "jobValue"]
    return (
      <div ref={panelRef} className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 sm:p-10">
        <p className="label-mono text-muted-foreground">Thanks, {firstName}</p>
        <h2 className="display mt-4 text-3xl text-foreground sm:text-4xl">{copy.title}</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{copy.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setOutcome(null)}
            className="min-touch inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-secondary/40"
          >
            <ArrowLeft className="h-4 w-4" />
            Change my answer
          </button>
          <Link
            href={outcome.reason === "decision" ? "/growth-system" : "/blog"}
            className="min-touch inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-secondary hover:underline"
          >
            {outcome.reason === "decision" ? "See the Growth System" : "Read our free guides"}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div ref={panelRef} className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card">
      <div className="h-px w-full bg-border">
        <div
          className="h-full bg-secondary transition-all duration-500"
          style={{ width: `${Math.round((step / screens.length) * 100)}%` }}
        />
      </div>
      <div className="p-6 sm:p-10">
        <div className="label-mono flex items-center justify-between text-muted-foreground">
          <span>
            {step + 1} of {screens.length}
          </span>
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </button>
          ) : null}
        </div>

        {current.id === "priceReaction" ? <PriceBlock jobValue={answers.jobValue} /> : null}

        <h2
          className={`display text-balance text-foreground ${
            current.id === "priceReaction" ? "mt-6 text-2xl leading-[1.05] sm:text-3xl" : "mt-6 text-3xl leading-[1.02] sm:text-4xl"
          }`}
        >
          {current.question}
        </h2>
        {current.hint ? <p className="mt-3 text-sm text-muted-foreground">{current.hint}</p> : null}

        {current.type === "choice" ? (
          <>
            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {current.options.map((option) => {
                const selected = answers[current.id] === option.value && !(current.other && answers.otherTrade)
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      advance({
                        ...answers,
                        [current.id]: option.value,
                        ...(current.other ? { otherTrade: undefined } : {}),
                      })
                    }
                    className={`min-touch flex items-center justify-between gap-3 rounded-lg border px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                      selected ? "border-secondary text-foreground" : "border-border text-foreground/85 hover:border-secondary/50"
                    }`}
                  >
                    {option.label}
                    <ArrowRight className={`h-4 w-4 flex-shrink-0 ${selected ? "text-secondary" : "text-muted-foreground/50"}`} />
                  </button>
                )
              })}
            </div>
            {current.other ? (
              <form
                className="mt-2.5 flex gap-2.5"
                onSubmit={(e) => {
                  e.preventDefault()
                  const value = otherTrade.trim()
                  if (value) advance({ ...answers, trade: "Other", otherTrade: value })
                }}
              >
                <input
                  type="text"
                  aria-label="Your trade, if it isn't listed"
                  autoComplete="off"
                  placeholder="Other trade"
                  value={otherTrade}
                  onChange={(e) => setOtherTrade(e.target.value)}
                  className={`${inputClass} flex-1`}
                />
                <button
                  type="submit"
                  disabled={!otherTrade.trim()}
                  className="min-touch flex-shrink-0 rounded-lg bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </form>
            ) : null}
          </>
        ) : null}

        {current.type === "area" ? (
          <form
            className="mt-8 flex gap-2.5"
            onSubmit={(e) => {
              e.preventDefault()
              const value = area.trim()
              if (value) advance({ ...answers, area: value })
            }}
          >
            <input
              type="text"
              aria-label="Town or postcode"
              autoComplete="address-level2"
              placeholder="Town or postcode"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className={`${inputClass} flex-1`}
            />
            <button
              type="submit"
              disabled={!area.trim()}
              className="min-touch flex-shrink-0 rounded-lg bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </form>
        ) : null}

        {current.type === "details" ? (
          <form
            className="mt-8"
            onSubmit={(e) => {
              e.preventDefault()
              if (!detailsValid(details) || !consent) return
              save("details", answers)
              trackEvent("generate_lead", { source: "website_survey" })
              setStep(step + 1)
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {detailFields.map((field) => (
                <label key={field.key} className={field.key === "website" ? "sm:col-span-2" : ""}>
                  <span className="text-xs font-medium text-muted-foreground">{field.label}</span>
                  <input
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required={!field.optional}
                    value={details[field.key]}
                    onChange={(e) => setDetails((d) => ({ ...d, [field.key]: e.target.value }))}
                    className={`${inputClass} mt-1.5`}
                  />
                </label>
              ))}
            </div>
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[hsl(var(--secondary))]"
              />
              <span>
                {CONSENT_TEXT} See our{" "}
                <Link href="/privacy-policy" className="underline hover:text-foreground">
                  privacy policy
                </Link>
                .
              </span>
            </label>
            <button
              type="submit"
              disabled={!detailsValid(details) || !consent}
              className="group mt-6 min-touch inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        ) : null}
      </div>
    </div>
  )
}
