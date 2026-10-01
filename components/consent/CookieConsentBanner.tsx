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

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-border/60 bg-background/95 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">
              We use cookies
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Essential cookies keep this site working. We only enable analytics
              cookies if you consent. Read our{" "}
              <Link
                href="/privacy-policy"
                className="text-secondary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/cookie-policy"
                className="text-secondary underline-offset-4 hover:underline"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>

          {showSettings ? (
            <div className="rounded-lg border border-border/60 bg-card/70 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Analytics cookies
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Help us understand site usage and improve performance.
                  </p>
                </div>
                <label className="inline-flex items-center gap-2 text-xs text-foreground">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    className="h-4 w-4 accent-secondary"
                  />
                  Enabled
                </label>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={saveSettings}
                  className="rounded-md bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-gold-300"
                >
                  Save settings
                </button>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted/60"
                >
                  Back
                </button>
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={acceptAnalytics}
              className="rounded-md bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-gold-300"
            >
              Accept analytics
            </button>
            <button
              type="button"
              onClick={rejectNonEssential}
              className="rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted/60"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => setShowSettings((prev) => !prev)}
              className="rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted/60"
            >
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
