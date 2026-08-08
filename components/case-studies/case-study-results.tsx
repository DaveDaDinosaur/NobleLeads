export type CaseStudyStat = {
  value: string
  label: string
  sub?: string
}

export function CaseStudyResults({ stats }: { stats: CaseStudyStat[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/80">
      <div
        className="absolute top-0 left-1/2 h-px w-[min(100%,28rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/40 to-transparent"
        aria-hidden
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-border/30 lg:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col px-5 py-6 text-center sm:px-6 sm:py-8 lg:text-left"
          >
            <p className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl lg:text-4xl tabular-nums">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold leading-snug text-foreground sm:text-sm">
              {stat.label}
            </p>
            {stat.sub ? (
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                {stat.sub}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-0 left-1/2 h-px w-[min(100%,28rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/25 to-transparent"
        aria-hidden
      />
    </div>
  )
}
