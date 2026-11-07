"use client"

import { useEffect } from "react"

import { ensureGtag, GA_MEASUREMENT_ID } from "@/lib/analytics"
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_UPDATED_EVENT,
  readCookieConsent,
} from "@/lib/cookie-consent"

const GA_SCRIPT_ID = "ga4-script"

function loadGaIfConsented() {
  if (typeof window === "undefined") return
  const consent = readCookieConsent()
  if (!consent?.analytics) return

  const existing = document.getElementById(GA_SCRIPT_ID) as
    | HTMLScriptElement
    | null

  ensureGtag()
  if (existing) return

  const script = document.createElement("script")
  script.id = GA_SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function Ga4Loader() {
  useEffect(() => {
    loadGaIfConsented()

    const handleConsentUpdate = () => {
      loadGaIfConsented()
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key === COOKIE_CONSENT_STORAGE_KEY) {
        loadGaIfConsented()
      }
    }

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdate)
    window.addEventListener("storage", handleStorage)

    return () => {
      window.removeEventListener(
        COOKIE_CONSENT_UPDATED_EVENT,
        handleConsentUpdate
      )
      window.removeEventListener("storage", handleStorage)
    }
  }, [])

  return null
}
