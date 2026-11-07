"use client"

import { useEffect } from "react"

import { trackEvent } from "@/lib/analytics"
import { captureAttribution } from "@/lib/attribution"
import { COOKIE_CONSENT_UPDATED_EVENT } from "@/lib/cookie-consent"

export function CtaClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null
      const link = target?.closest('a[href="/survey"], a[href^="/survey#"], a[href^="/survey?"]')
      if (!link) return

      trackEvent("book_call_click", {
        page_path: window.location.pathname,
        link_text: link.textContent?.trim().slice(0, 100),
      })
    }

    captureAttribution()
    document.addEventListener("click", onClick)
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, captureAttribution)
    return () => {
      document.removeEventListener("click", onClick)
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, captureAttribution)
    }
  }, [])

  return null
}
