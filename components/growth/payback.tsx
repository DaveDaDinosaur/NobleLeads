import {
  DEFAULT_MARGIN,
  FIRST_TERM_COST,
  formatGBP,
  jobProfit,
  jobsToCoverFirstTerm,
  MIN_AD_SPEND,
  MIN_TERM_MONTHS,
  MONTHLY_FEE,
  SETUP_FEE,
} from "@/lib/offer"
import type { Trade } from "@/lib/trades"

const jobName = (trade: Trade) => trade.typicalJob.label.replace(/^an? /, "")
const jobCount = (trade: Trade, count: number) => `${count} extra ${jobName(trade)}${count === 1 ? "" : "s"}`

function Disclaimer() {
  return (
    <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
      An example using a {DEFAULT_MARGIN}% margin and the minimum ad spend, so yours will differ. It
      isn{"'"}t a forecast, and we don{"'"}t promise a number of leads or jobs.
    </p>
  )
}

export function PaybackExample({ trade }: { trade: Trade }) {
  const { value, label } = trade.typicalJob
  const count = jobsToCoverFirstTerm(value)

  return (
    <>
      <dl className="grid grid-cols-1 gap-x-10 md:grid-cols-3">
        <div className="border-t border-border py-7">
          <dt className="label-mono text-muted-foreground">{label.replace(/^./, (c) => c.toUpperCase())}</dt>
          <dd className="display mt-5 text-6xl tabular-nums text-foreground">{formatGBP(value)}</dd>
          <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Leaves about {formatGBP(jobProfit(value))} profit at a {DEFAULT_MARGIN}% margin.
          </dd>
        </div>
        <div className="border-t border-border py-7">
          <dt className="label-mono text-muted-foreground">Your first {MIN_TERM_MONTHS} months</dt>
          <dd className="display mt-5 text-6xl tabular-nums text-foreground">{formatGBP(FIRST_TERM_COST)}</dd>
          <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {formatGBP(SETUP_FEE)} setup, plus {formatGBP(MONTHLY_FEE)} fee and {formatGBP(MIN_AD_SPEND)} ad
            spend a month.
          </dd>
        </div>
        <div className="border-t border-secondary py-7">
          <dt className="label-mono text-secondary">What covers it</dt>
          <dd className="display mt-5 text-6xl tabular-nums text-secondary">{count}</dd>
          <dd className="mt-4 text-sm leading-relaxed text-foreground">
            {jobCount(trade, count)} in your first {MIN_TERM_MONTHS} months covers everything, ad spend
            and setup included.
          </dd>
        </div>
      </dl>
      <Disclaimer />
    </>
  )
}

export function PaybackTable({ trades }: { trades: Trade[] }) {
  return (
    <>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Your first {MIN_TERM_MONTHS} months cost{" "}
        <span className="text-foreground">{formatGBP(FIRST_TERM_COST)}</span>: {formatGBP(SETUP_FEE)} setup,
        plus {formatGBP(MONTHLY_FEE)} fee and {formatGBP(MIN_AD_SPEND)} ad spend a month.
      </p>
      <table className="mt-10 w-full border-t border-border text-left">
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="label-mono py-3 pr-4 font-normal text-muted-foreground">Typical job</th>
            <th scope="col" className="label-mono hidden py-3 pr-4 text-right font-normal text-muted-foreground sm:table-cell">Worth</th>
            <th scope="col" className="label-mono hidden py-3 pr-4 text-right font-normal text-muted-foreground sm:table-cell">Profit</th>
            <th scope="col" className="label-mono py-3 text-right font-normal text-secondary">Extra jobs to cover it</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.slug} className="border-b border-border">
              <th scope="row" className="py-5 pr-4 text-lg font-medium text-foreground sm:text-xl">
                {jobName(trade).replace(/^./, (c) => c.toUpperCase())}
              </th>
              <td className="hidden py-5 pr-4 text-right tabular-nums text-muted-foreground sm:table-cell">
                {formatGBP(trade.typicalJob.value)}
              </td>
              <td className="hidden py-5 pr-4 text-right tabular-nums text-muted-foreground sm:table-cell">
                {formatGBP(jobProfit(trade.typicalJob.value))}
              </td>
              <td className="display py-5 text-right text-4xl tabular-nums text-secondary">
                {jobsToCoverFirstTerm(trade.typicalJob.value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Disclaimer />
    </>
  )
}
