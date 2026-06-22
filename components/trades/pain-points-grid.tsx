import type { LucideIcon } from "lucide-react"

export type PainPoint = {
  icon: LucideIcon
  heading: string
  body: string
}

export function PainPointsGrid({ items }: { items: PainPoint[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
      {items.map(({ icon: Icon, heading, body }) => (
        <div
          key={heading}
          className="rounded-xl border border-border/50 bg-card/40 p-4 space-y-2"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex-shrink-0 rounded-md bg-secondary/10 p-1.5 text-secondary">
              <Icon className="h-4 w-4" />
            </div>
            <p className="text-sm font-semibold text-foreground leading-snug">{heading}</p>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{body}</p>
        </div>
      ))}
    </div>
  )
}
