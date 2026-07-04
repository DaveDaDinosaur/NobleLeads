"use client"

import { useEffect } from "react"

import { trackEvent } from "@/lib/analytics"

export function ThankYouTracker() {
  useEffect(() => {
    trackEvent("call_booked", { source: "ghl_booking_widget" })
  }, [])

  return null
}
