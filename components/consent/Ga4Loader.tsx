"use client"

import { useEffect } from "react"

import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_UPDATED_EVENT,
  readCookieConsent,
} from "@/lib/cookie-consent"

const GA_MEASUREMENT_ID = "G-3HHVV0V655"
const GA_SCRIPT_ID = "ga4-script"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function initGtag() {
  if (typeof window === "undefined") return

  if (!window.dataLayer) {
    window.dataLayer = []
  }

  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
  }

  window.gtag("js", new Date())
  window.gtag("config", GA_MEASUREMENT_ID)
}

function loadGaIfConsented() {
  if (typeof window === "undefined") return
  const consent = readCookieConsent()
  if (!consent?.analytics) return

  const existing = document.getElementById(GA_SCRIPT_ID) as
    | HTMLScriptElement
    | null

  if (existing) {
    initGtag()
    return
  }

  const script = document.createElement("script")
  script.id = GA_SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.onload = () => initGtag()
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
