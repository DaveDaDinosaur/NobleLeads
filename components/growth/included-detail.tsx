import { ChevronDown } from "lucide-react"

import { buildDetail, formatGBP, MONTHLY_FEE, runDetail, SETUP_FEE, type OfferGroup } from "@/lib/offer"

function Group({ group }: { group: OfferGroup }) {
  return (
    <details className="group border-b border-border">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
        <span className="text-lg font-medium text-foreground transition-colors group-hover:text-secondary">
          {group.title}
        </span>
        <span className="flex items-center gap-3">
          <span className="label-mono text-muted-foreground">{group.items.length} items</span>
          <ChevronDown className="h-4 w-4 text-secondary transition-transform duration-300 group-open:rotate-180" />
        </span>
      </summary>
      <ul className="pb-6">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-4 py-1.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </details>
  )
}

function Column({
  label,
  price,
  unit,
  groups,
}: {
  label: string
  price: string
  unit: string
  groups: OfferGroup[]
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-5">
        <p className="label-mono text-secondary">{label}</p>
        <p className="text-foreground">
          <span className="display text-3xl tabular-nums">{price}</span>{" "}
          <span className="label-mono text-muted-foreground">{unit}</span>
        </p>
      </div>
      {groups.map((group) => (
        <Group key={group.title} group={group} />
      ))}
    </div>
  )
}

/** Every line of the Build and the Run, grouped and collapsed so it scans in seconds. */
export function IncludedDetail() {
  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
      <Column label="The Build" price={formatGBP(SETUP_FEE)} unit="one-off" groups={buildDetail} />
      <Column label="The Run" price={formatGBP(MONTHLY_FEE)} unit="a month" groups={runDetail} />
    </div>
  )
}
