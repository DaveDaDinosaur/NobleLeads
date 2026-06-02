export const COOKIE_CONSENT_STORAGE_KEY = "noble_cookie_consent"
export const COOKIE_CONSENT_UPDATED_EVENT = "noble-cookie-consent-updated"

export type CookieConsent = {
  analytics: boolean
  updatedAt: string
}

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null

  const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw) as Partial<CookieConsent>
    if (typeof parsed.analytics !== "boolean") return null

    return {
      analytics: parsed.analytics,
      updatedAt:
        typeof parsed.updatedAt === "string"
          ? parsed.updatedAt
          : new Date().toISOString(),
    }
  } catch {
    return null
  }
}

export function saveCookieConsent(analytics: boolean) {
  if (typeof window === "undefined") return

  const value: CookieConsent = {
    analytics,
    updatedAt: new Date().toISOString(),
  }

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(value))
  window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATED_EVENT))
}
