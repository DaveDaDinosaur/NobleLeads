import type { Attribution } from "@/lib/survey"
import { readCookieConsent } from "@/lib/cookie-consent"

const STORAGE_KEY = "noble_attribution"

/** Keeps the ad click details from the landing URL, once the visitor has accepted cookies. */
export function captureAttribution() {
  if (typeof window === "undefined") return
  try {
    if (!readCookieConsent()?.analytics) return
    const params = new URLSearchParams(window.location.search)
    const attribution: Attribution = {
      gclid: params.get("gclid") ?? undefined,
      utmCampaign: params.get("utm_campaign") ?? undefined,
      utmTerm: params.get("utm_term") ?? undefined,
    }
    if (!attribution.gclid && !attribution.utmCampaign && !attribution.utmTerm) return
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution))
  } catch {
    // Storage can be blocked. The lead still goes through without attribution.
  }
}

export function readAttribution(): Attribution {
  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) ?? "{}") as Attribution
  } catch {
    return {}
  }
}
