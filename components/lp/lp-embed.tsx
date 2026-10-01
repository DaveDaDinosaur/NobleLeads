"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

// Ad attribution params forwarded from the landing page URL into the GHL
// form/calendar so each lead keeps its campaign, keyword and click ID.
// Deliberately an allow-list: never forward anything that could hold personal data.
const FORWARDED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
]

type LpEmbedProps = {
  src: string
  title: string
  minHeight: number
  extraParams?: Record<string, string>
}

export function LpEmbed({ src, title, minHeight, extraParams }: LpEmbedProps) {
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null)

  useEffect(() => {
    const url = new URL(src)
    const pageParams = new URLSearchParams(window.location.search)
    for (const key of FORWARDED_PARAMS) {
      const value = pageParams.get(key)
      if (value) url.searchParams.set(key, value)
    }
    for (const [key, value] of Object.entries(extraParams ?? {})) {
      url.searchParams.set(key, value)
    }
    setResolvedSrc(url.toString())
  }, [src, extraParams])

  return (
    <div className="w-full overflow-hidden rounded-xl bg-card/30" style={{ minHeight }}>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      {resolvedSrc ? (
        <iframe
          src={resolvedSrc}
          title={title}
          className="block w-full border-0"
          style={{ minHeight }}
          scrolling="auto"
        />
      ) : (
        <div className="flex items-center justify-center text-sm text-muted-foreground" style={{ minHeight }}>
          Loading…
        </div>
      )}
    </div>
  )
}
