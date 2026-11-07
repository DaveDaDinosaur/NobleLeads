import { readCookieConsent } from "@/lib/cookie-consent"

export const GA_MEASUREMENT_ID = "G-3HHVV0V655"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = {
  [key: string]: unknown
}

let configured = false

/**
 * Sets up the gtag queue and config straight away, like Google's own snippet, so events
 * fired before gtag.js finishes loading are queued rather than lost. Child components run
 * their effects before the layout's Ga4Loader, so the thank-you page relies on this.
 */
export function ensureGtag() {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer ?? []
  if (typeof window.gtag !== "function") {
    // gtag.js only processes commands pushed as the raw `arguments` object.
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments)
    }
  }
  if (configured) return
  configured = true
  window.gtag("js", new Date())
  window.gtag("config", GA_MEASUREMENT_ID)
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return
  try {
    if (!readCookieConsent()?.analytics) return
  } catch {
    return
  }

  ensureGtag()
  window.gtag?.("event", eventName, params ?? {})
}
