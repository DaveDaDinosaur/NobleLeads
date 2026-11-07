"use client"

import { useEffect, useRef } from "react"

import { trackEvent } from "@/lib/analytics"

export function ThankYouTracker() {
  // Strict mode runs effects twice in development, which would count the booking twice.
  const sent = useRef(false)

  useEffect(() => {
    if (sent.current) return
    sent.current = true
    trackEvent("call_booked", { source: "ghl_booking_widget" })
  }, [])

  return null
}
