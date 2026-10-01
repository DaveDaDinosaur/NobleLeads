import { readCookieConsent } from "@/lib/cookie-consent"

export const GA_MEASUREMENT_ID = "G-3HHVV0V655"

// Google Ads conversion tag. Fill in from Ads → Goals → Conversions →
// [conversion] → Tag setup → "Use Google tag manually". Leave blank to disable.
export const GOOGLE_ADS_ID = "" // e.g. "AW-123456789"
export const ADS_CONVERSION_LABELS = {
  lead: "", // qualifying form submitted
  booking: "", // discovery call booked
  call: "", // phone number tapped (optional)
} as const

export type AdsConversion = keyof typeof ADS_CONVERSION_LABELS

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = {
  [key: string]: unknown
}

// Defines the dataLayer queue and gtag stub synchronously so events fired
// before gtag.js finishes downloading are queued instead of dropped.
// gtag.js only processes commands pushed as the raw `arguments` object.
export function ensureGtagStub() {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments)
    }
  }
}

function hasConsent() {
  return readCookieConsent()?.analytics === true
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined" || !hasConsent()) return
  ensureGtagStub()
  window.gtag?.("event", eventName, params ?? {})
}

export function trackAdsConversion(kind: AdsConversion) {
  const label = ADS_CONVERSION_LABELS[kind]
  if (typeof window === "undefined" || !GOOGLE_ADS_ID || !label || !hasConsent()) {
    return
  }
  ensureGtagStub()
  window.gtag?.("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${label}` })
}
