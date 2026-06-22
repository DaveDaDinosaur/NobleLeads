import Link from "next/link"

type TradePackagesProps = {
  core: string
  growth: string
  dominate: string
}

export function TradePackages({ core, growth, dominate }: TradePackagesProps) {
  return (
    <div className="mt-4 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-border/50 bg-card/30 p-4 space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Noble Core
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{core}</p>
        </div>
        <div className="rounded-xl border border-secondary/35 bg-secondary/5 p-4 space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
            Noble Growth
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{growth}</p>
        </div>
        <div className="rounded-xl border border-border/50 bg-card/30 p-4 space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Noble Dominate
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{dominate}</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground/80">
        Full pricing on our{" "}
        <Link href="/pricing" className="font-semibold text-secondary hover:underline">
          pricing page
        </Link>
        .
      </p>
    </div>
  )
}
