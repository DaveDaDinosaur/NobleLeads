"use client"

import { useEffect } from "react"

import { trackAdsConversion, trackEvent } from "@/lib/analytics"

export function ThankYouTracker() {
  useEffect(() => {
    trackEvent("call_booked", { source: "ghl_booking_widget" })
    trackAdsConversion("booking")
  }, [])

  return null
}
