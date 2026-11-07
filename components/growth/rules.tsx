import type { ReactNode } from "react"

export function RuleColumns({
  items,
  columns = 3,
  numbered = true,
}: {
  items: { title: string; body: ReactNode }[]
  columns?: 2 | 3
  numbered?: boolean
}) {
  return (
    <div className={`grid grid-cols-1 gap-x-10 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map((item, i) => (
        <div key={item.title} className="border-t border-border py-7 sm:py-8">
          {numbered ? (
            <p className="label-mono text-secondary">{String(i + 1).padStart(2, "0")}</p>
          ) : null}
          <h3 className={`text-xl font-medium text-foreground ${numbered ? "mt-5" : ""}`}>{item.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export function RuleList({
  items,
  columns = 1,
  tone = "muted",
}: {
  items: string[]
  columns?: 1 | 2
  tone?: "muted" | "strong"
}) {
  return (
    <ul className={`grid grid-cols-1 gap-x-10 border-t border-border/70 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-4 border-b border-border/70 py-3.5 text-sm leading-relaxed ${
            tone === "strong" ? "text-foreground/90" : "text-muted-foreground"
          }`}
        >
          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function RuleRows({
  rows,
}: {
  rows: { label: string; body: ReactNode; accent?: boolean }[]
}) {
  return (
    <dl className="border-t border-border">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-1 gap-2 border-b border-border py-5 sm:grid-cols-12 sm:gap-6 sm:py-6">
          <dt className={`label-mono pt-1 sm:col-span-4 ${row.accent ? "text-secondary" : "text-muted-foreground"}`}>
            {row.label}
          </dt>
          <dd className={`text-sm leading-relaxed sm:col-span-8 sm:text-base ${row.accent ? "text-foreground" : "text-muted-foreground"}`}>
            {row.body}
          </dd>
        </div>
      ))}
    </dl>
  )
}
