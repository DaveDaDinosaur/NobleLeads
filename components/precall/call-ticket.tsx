"use client"

import { CalendarPlus, Phone } from "lucide-react"

import { trackEvent } from "@/lib/analytics"
import { CALL_PHONE, CALL_PHONE_HREF, callDate, type PrecallContext } from "@/lib/precall"

const TZ = "Europe/London"
const EVENT_TITLE = "Call with George at NobleLeads"
const EVENT_DETAILS =
  "Your growth plan call. George will go through your local market, the plan for your business, and what it would cost. Need to move it? Call 01223 679988."

function stamp(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")
}

function timeLabel(date: Date) {
  return date
    .toLocaleTimeString("en-GB", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: TZ })
    .replace(":00", "")
    .replace(" ", "")
}

export function CallTicket({ context }: { context: PrecallContext }) {
  const start = callDate(context.callStart)
  const end = start ? new Date(start.getTime() + context.callMinutes * 60000) : undefined

  const google =
    start && end
      ? `https://calendar.google.com/calendar/render?${new URLSearchParams({
          action: "TEMPLATE",
          text: EVENT_TITLE,
          dates: `${stamp(start)}/${stamp(end)}`,
          details: EVENT_DETAILS,
          ctz: TZ,
        })}`
      : undefined
  const ics =
    start
      ? `/api/precall/ics?${new URLSearchParams({ start: start.toISOString(), mins: String(context.callMinutes) })}`
      : undefined

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-card" data-ticket>
      <div className="relative p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <p className="label-mono text-secondary">Your call</p>
          <span className="label-mono inline-flex items-center gap-2 text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Booked
          </span>
        </div>

        {start && end ? (
          <>
            <p className="display mt-5 text-4xl text-foreground sm:text-5xl" data-ticket-date>
              {start.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: TZ })}
            </p>
            <p className="mt-3 text-lg tabular-nums text-foreground/90">
              {timeLabel(start)} to {timeLabel(end)}
            </p>
          </>
        ) : (
          <p className="display mt-5 text-3xl leading-[1.05] text-foreground sm:text-4xl">
            It{"'"}s in the diary.
          </p>
        )}

        <div className="mt-5 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-secondary/40 bg-secondary/10 text-sm font-semibold text-secondary">
            G
          </span>
          <p className="text-sm leading-snug text-muted-foreground">
            With <span className="text-foreground">George</span>, founder of NobleLeads
            {start ? null : ". The time is in your text or email."}
          </p>
        </div>
      </div>

      {/* Ticket perforation */}
      <div className="relative h-px" aria-hidden>
        <div className="absolute inset-x-6 top-0 border-t border-dashed border-border" data-ticket-tear />
        <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full border border-border bg-background" />
        <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full border border-border bg-background" />
      </div>

      <div className="flex flex-wrap items-center gap-2 p-4 sm:px-8 sm:py-5">
        {ics && google ? (
          <>
            <a
              href={ics}
              onClick={() => trackEvent("precall_add_calendar", { type: "ics" })}
              className="min-touch inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-secondary/50"
            >
              <CalendarPlus className="h-4 w-4 text-secondary" />
              Apple or Outlook
            </a>
            <a
              href={google}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("precall_add_calendar", { type: "google" })}
              className="min-touch inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-secondary/50"
            >
              <CalendarPlus className="h-4 w-4 text-secondary" />
              Google
            </a>
          </>
        ) : null}
        <a
          href={CALL_PHONE_HREF}
          onClick={() => trackEvent("precall_call_click", { location: "ticket" })}
          className="min-touch ml-auto inline-flex items-center gap-2 px-2 py-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone className="h-3.5 w-3.5" />
          Need to move it? {CALL_PHONE}
        </a>
      </div>
    </div>
  )
}
