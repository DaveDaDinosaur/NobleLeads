import type { Metadata } from "next"

import { PrecallExperience } from "@/components/precall/precall-experience"
import { getFieldIds, ghl, ghlToken, isContactId, LOCATION_ID } from "@/lib/ghl"
import {
  cleanBusinessName,
  cleanFirstName,
  cleanTown,
  DEFAULT_CALL_MINUTES,
  readJobValue,
  readSavedAnswers,
  type PrecallContext,
} from "@/lib/precall"

export const metadata: Metadata = {
  title: { absolute: "Before your call | NobleLeads" },
  description: "A few quick questions so your call is about your plan, not paperwork.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
}

export const dynamic = "force-dynamic"

type SearchParams = Promise<Record<string, string | string[] | undefined>>

function param(params: Record<string, string | string[] | undefined>, ...keys: string[]) {
  for (const key of keys) {
    const value = params[key]
    const text = (Array.isArray(value) ? value[0] : value)?.trim()
    if (text) return text.slice(0, 120)
  }
  return undefined
}

/** Reads "2026-11-20 14:00:00" as London time. Full ISO strings and epoch milliseconds pass straight through. */
function toIso(raw?: string) {
  if (!raw) return undefined
  if (/^\d{12,}$/.test(raw)) return new Date(Number(raw)).toISOString()
  const local = raw.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/)
  if (local) {
    const [, y, mo, d, h, mi, s] = local.map(Number)
    const asUtc = Date.UTC(y, mo - 1, d, h, mi, s || 0)
    const londonHour = Number(
      new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/London", hour: "2-digit", hourCycle: "h23" }).format(asUtc)
    )
    const offsetHours = (londonHour - h + 24) % 24
    return new Date(asUtc - offsetHours * 3600000).toISOString()
  }
  const date = new Date(raw)
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString()
}

type GhlEvent = { startTime?: string; endTime?: string; appointmentStatus?: string; deleted?: boolean }

async function loadContext(params: Record<string, string | string[] | undefined>): Promise<PrecallContext> {
  const contactId = param(params, "c", "cid")
  const context: PrecallContext = {
    contactId: isContactId(contactId) ? contactId : undefined,
    firstName: param(params, "fn"),
    businessName: param(params, "bn"),
    tradeName: param(params, "tr"),
    town: param(params, "tw"),
    callStart: toIso(param(params, "t")),
    callMinutes: DEFAULT_CALL_MINUTES,
  }

  const token = ghlToken()
  if (!context.contactId || !token) {
    context.businessName = cleanBusinessName(context.businessName)
    context.firstName = cleanFirstName(context.firstName, context.businessName)
    context.town = cleanTown(context.town)
    return context
  }

  // Anything that fails here just falls back to the URL values, so the page always loads.
  const [contactResult, eventsResult, idsResult] = await Promise.allSettled([
    ghl(`/contacts/${context.contactId}`, token, "GET", undefined, 1500),
    ghl(`/contacts/${context.contactId}/appointments`, token, "GET", undefined, 1500),
    getFieldIds(token),
  ])

  if (contactResult.status === "fulfilled" && contactResult.value.contact?.locationId === LOCATION_ID) {
    const contact = contactResult.value.contact as {
      firstName?: string
      companyName?: string
      city?: string
      tags?: string[]
      customFields?: { id: string; value?: unknown }[]
    }
    context.businessName = context.businessName ?? contact.companyName ?? undefined
    // Use the link's name if it's a real name, otherwise try the contact's.
    if (!cleanFirstName(context.firstName, context.businessName)) context.firstName = contact.firstName ?? undefined
    context.fromSurvey = Boolean(contact.tags?.some((tag) => tag.toLowerCase() === "survey complete"))

    // Pull in anything the survey (or a rep) already saved, so we don't ask it again.
    const ids = idsResult.status === "fulfilled" ? idsResult.value : new Map<string, string>()
    const field = (name: string) => {
      const id = ids.get(name)
      const value = id ? contact.customFields?.find((f) => f.id === id)?.value : undefined
      return typeof value === "string" && value.trim() ? value.trim().slice(0, 1500) : undefined
    }
    const trade = field("trade")
    if (!context.tradeName && trade && trade !== "Other") context.tradeName = trade
    context.town = context.town ?? field("area") ?? (contact.city?.trim() || undefined)
    // The survey and this page share the job value field. Older survey leads have it in "Average job value".
    const jobValue = readJobValue(field("typical job value"))
    context.jobValueBand = jobValue.band ?? readJobValue(field("average job value")).band
    context.frustration = field("biggest frustration")
    // Anything this page saved before (another device, or cleared browser), so it isn't asked twice.
    context.saved = readSavedAnswers((name) => field(name))
  } else {
    // The id didn't check out, so don't save answers against it.
    context.contactId = undefined
  }

  if (context.contactId && eventsResult.status === "fulfilled") {
    const events = ((eventsResult.value.events ?? []) as GhlEvent[])
      .filter((event) => !event.deleted && !/cancel|invalid|noshow/i.test(event.appointmentStatus ?? ""))
      .map((event) => ({ start: toIso(event.startTime), end: toIso(event.endTime) }))
      .filter((event): event is { start: string; end: string | undefined } => Boolean(event.start))
      .filter((event) => new Date(event.start).getTime() > Date.now() - 2 * 3600000)
      .sort((a, b) => a.start.localeCompare(b.start))
    const next = events[0]
    if (next) {
      context.callStart = next.start
      if (next.end) {
        const minutes = Math.round((new Date(next.end).getTime() - new Date(next.start).getTime()) / 60000)
        if (minutes > 0 && minutes <= 180) context.callMinutes = minutes
      }
    }
  }

  // CRM records get messy, so everything shown on screen goes through a sanity check first.
  context.businessName = cleanBusinessName(context.businessName)
  context.firstName = cleanFirstName(context.firstName, context.businessName)
  context.town = cleanTown(context.town)
  return context
}

export default async function PrecallPage({ searchParams }: { searchParams: SearchParams }) {
  const context = await loadContext(await searchParams)
  return <PrecallExperience context={context} />
}
