// Serves the call as a calendar file. iPhones open text/calendar responses straight into the Calendar app.

function stamp(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")
}

export function GET(request: Request) {
  const url = new URL(request.url)
  const start = new Date(url.searchParams.get("start") ?? "")
  const mins = Math.min(Math.max(Number(url.searchParams.get("mins")) || 30, 5), 180)
  if (Number.isNaN(start.getTime())) return new Response("Missing start time", { status: 400 })
  const end = new Date(start.getTime() + mins * 60000)

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NobleLeads//Pre-call//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:call-${stamp(start)}@nobleleads.uk`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    "SUMMARY:Call with George at NobleLeads",
    "DESCRIPTION:Your growth plan call. George will go through your local market\\, the plan for your business\\, and what it would cost. Need to move it? Call 01223 679988.",
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Call with George at NobleLeads",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n")

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="nobleleads-call.ics"',
      "Cache-Control": "no-store",
    },
  })
}
