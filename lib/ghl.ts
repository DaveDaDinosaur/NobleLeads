// Server-only helpers for the GoHighLevel API. The token never leaves the server.

const API_BASE = "https://services.leadconnectorhq.com"
export const LOCATION_ID = "rDzOdgNXidfxh3AveWDf"

let fieldIds: Map<string, string> | null = null

export function ghlToken() {
  return process.env.GHL_PRIVATE_TOKEN
}

export function clean(value: unknown, max = 300) {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

export function toE164(phone: string) {
  const compact = phone.replace(/[^\d+]/g, "")
  if (compact.startsWith("+")) return compact
  if (compact.startsWith("44")) return `+${compact}`
  if (compact.startsWith("0")) return `+44${compact.slice(1)}`
  return compact
}

export async function ghl(path: string, token: string, method = "GET", body?: unknown, timeoutMs = 10000) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: "2021-07-28",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
    signal: AbortSignal.timeout(timeoutMs),
  })
  if (!res.ok) throw new Error(`GHL ${method} ${path} failed (${res.status}): ${await res.text()}`)
  return res.json()
}

/** Custom field ids keyed by lower-case field name, loaded once per server instance. */
export async function getFieldIds(token: string) {
  if (fieldIds) return fieldIds
  const data = await ghl(`/locations/${LOCATION_ID}/customFields?model=contact`, token)
  const fields = (data.customFields ?? []) as { id: string; name: string }[]
  fieldIds = new Map(fields.map((field) => [field.name.toLowerCase(), field.id]))
  return fieldIds
}

/** Turns { "Field name": value } into GHL's customFields array, skipping blanks and unknown fields. */
export function toCustomFields(ids: Map<string, string>, values: Record<string, string | undefined>, logPrefix: string) {
  return Object.entries(values).flatMap(([name, value]) => {
    const text = clean(value, 1000)
    if (!text) return []
    const id = ids.get(name.toLowerCase())
    if (!id) {
      console.error(`${logPrefix}: no GHL custom field named "${name}"`)
      return []
    }
    return [{ id, field_value: text }]
  })
}

/** GHL contact ids are 20 or so letters and digits. Anything else is rejected before calling the API. */
export function isContactId(value: unknown): value is string {
  return typeof value === "string" && /^[A-Za-z0-9]{15,40}$/.test(value)
}
