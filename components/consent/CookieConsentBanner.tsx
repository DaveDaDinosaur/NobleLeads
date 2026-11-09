"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { readCookieConsent, saveCookieConsent } from "@/lib/cookie-consent"

export function CookieConsentBanner() {
  const [isReady, setIsReady] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    const consent = readCookieConsent()
    if (consent) {
      setAnalyticsEnabled(consent.analytics)
      setShowBanner(false)
    } else {
      setShowBanner(true)
    }

    setIsReady(true)
  }, [])

  if (!isReady || !showBanner) {
    return null
  }

  const acceptAnalytics = () => {
    saveCookieConsent(true)
    setAnalyticsEnabled(true)
    setShowBanner(false)
  }

  const rejectNonEssential = () => {
    saveCookieConsent(false)
    setAnalyticsEnabled(false)
    setShowBanner(false)
  }

  const saveSettings = () => {
    saveCookieConsent(analyticsEnabled)
    setShowBanner(false)
    setShowSettings(false)
  }

  const button =
    "rounded-full px-4 py-2.5 text-xs font-semibold transition-colors sm:py-2"

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-border/60 bg-background/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-4 lg:px-8">
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          We only use analytics cookies if you say yes.{" "}
          <Link href="/cookie-policy" className="text-secondary underline underline-offset-4">
            Cookie Policy
          </Link>
        </p>

        {showSettings ? (
          <div className="flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-card/70 px-4 py-3">
            <label className="flex items-center gap-3 text-xs text-foreground">
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                className="h-4 w-4 accent-secondary"
              />
              Analytics cookies
            </label>
            <button
              type="button"
              onClick={saveSettings}
              className={`${button} bg-secondary text-secondary-foreground hover:bg-gold-300`}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex flex-shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={acceptAnalytics}
              className={`${button} bg-secondary text-secondary-foreground hover:bg-gold-300`}
            >
              Accept
            </button>
            <button
              type="button"
              onClick={rejectNonEssential}
              className={`${button} border border-border text-foreground hover:bg-muted/60`}
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="px-2 py-2.5 text-xs font-semibold text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Settings
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
