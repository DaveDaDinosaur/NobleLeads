"use client"

import { useEffect } from "react"
import { Phone } from "lucide-react"

import { trackAdsConversion, trackEvent } from "@/lib/analytics"

export const LP_PHONE_DISPLAY = "01223 679988"
export const LP_PHONE_TEL = "tel:+441223679988"

export function LpCallButton({
  className,
  label = LP_PHONE_DISPLAY,
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      href={LP_PHONE_TEL}
      onClick={() => {
        trackEvent("phone_click", { page_path: window.location.pathname })
        trackAdsConversion("call")
      }}
      className={className}
    >
      <Phone className="h-4 w-4 flex-shrink-0" />
      {label}
    </a>
  )
}

const LEAD_TRACKED_KEY = "nl_lp_lead_tracked"

// Fires once per session when the qualifying form redirects to /lp/booking,
// so a refresh doesn't double-count the conversion.
export function LeadSubmittedTracker() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(LEAD_TRACKED_KEY)) return
      sessionStorage.setItem(LEAD_TRACKED_KEY, "1")
    } catch {
      // storage blocked: still record the conversion
    }
    trackEvent("generate_lead", { source: "lp_qualifying_form" })
    trackAdsConversion("lead")
  }, [])

  return null
}
