"use client"

import { useEffect } from "react"

import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_UPDATED_EVENT,
  readCookieConsent,
} from "@/lib/cookie-consent"
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID, ensureGtagStub } from "@/lib/analytics"

const GA_SCRIPT_ID = "ga4-script"

let configured = false

// Consent Mode v2 (basic): nothing loads until the visitor accepts. On accept we
// queue the consent signals Google Ads requires for UK/EEA traffic, then config,
// all synchronously so any events fired before gtag.js downloads are kept.
function loadGtagIfConsented() {
  if (typeof window === "undefined" || configured) return
  if (!readCookieConsent()?.analytics) return

  ensureGtagStub()
  const gtag = window.gtag!

  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  })
  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  })
  gtag("js", new Date())
  gtag("config", GA_MEASUREMENT_ID)
  if (GOOGLE_ADS_ID) gtag("config", GOOGLE_ADS_ID)
  configured = true

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement("script")
    script.id = GA_SCRIPT_ID
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)
  }
}

export function Ga4Loader() {
  useEffect(() => {
    loadGtagIfConsented()

    const handleStorage = (event: StorageEvent) => {
      if (event.key === COOKIE_CONSENT_STORAGE_KEY) loadGtagIfConsented()
    }

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, loadGtagIfConsented)
    window.addEventListener("storage", handleStorage)
    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, loadGtagIfConsented)
      window.removeEventListener("storage", handleStorage)
    }
  }, [])

  return null
}
