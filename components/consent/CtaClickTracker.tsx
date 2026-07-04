"use client"

import { useEffect } from "react"

import { trackEvent } from "@/lib/analytics"

export function CtaClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null
      const link = target?.closest('a[href="/contact"], a[href^="/contact#"], a[href^="/contact?"]')
      if (!link) return

      trackEvent("book_call_click", {
        page_path: window.location.pathname,
        link_text: link.textContent?.trim().slice(0, 100),
      })
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return null
}
