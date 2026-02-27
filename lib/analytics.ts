export const GA_MEASUREMENT_ID = "G-3HHVV0V655"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = {
  [key: string]: unknown
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return
  }

  window.gtag("event", eventName, params ?? {})
}

