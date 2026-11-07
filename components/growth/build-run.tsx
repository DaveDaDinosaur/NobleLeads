import {
  buildSummary,
  formatGBP,
  leavingTerms,
  MONTHLY_FEE,
  runSummary,
  SETUP_FEE,
} from "@/lib/offer"

function Column({
  index,
  label,
  price,
  unit,
  title,
  items,
}: {
  index: string
  label: string
  price: string
  unit: string
  title: string
  items: string[]
}) {
  return (
    <div className="flex h-full flex-col border-t border-border py-8 lg:px-10 lg:first:pl-0 lg:last:pr-0 lg:[&:last-child]:border-l">
      <div className="flex items-baseline justify-between gap-4">
        <p className="label-mono text-muted-foreground">
          <span className="mr-2 text-secondary">{index}</span>
          {label}
        </p>
        <p className="label-mono text-muted-foreground">{unit}</p>
      </div>
      <p className="display mt-8 text-6xl tabular-nums text-foreground sm:text-7xl">{price}</p>
      <h3 className="mt-4 text-xl font-medium text-foreground">{title}</h3>
      <ul className="mt-8 divide-y divide-border/70 border-y border-border/70">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4 py-3.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BuildRun() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Column
          index="A"
          label="The Build"
          unit="One-off"
          price={formatGBP(SETUP_FEE)}
          title="We build your lead system"
          items={buildSummary}
        />
        <Column
          index="B"
          label="The Run"
          unit="Per month"
          price={formatGBP(MONTHLY_FEE)}
          title="We run it, every month"
          items={runSummary}
        />
      </div>
      <div className="mt-6 flex flex-col gap-1 border-l-2 border-secondary pl-5 sm:flex-row sm:items-baseline sm:gap-4">
        <p className="label-mono flex-shrink-0 text-secondary">If you leave</p>
        <p className="text-sm text-muted-foreground">{leavingTerms}</p>
      </div>
    </>
  )
}
