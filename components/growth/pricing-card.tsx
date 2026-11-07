import { SurveyCTA } from "@/components/growth/survey-cta"
import {
  FIRST_TERM_COST,
  formatGBP,
  MIN_AD_SPEND,
  MIN_TERM_MONTHS,
  MONTHLY_FEE,
  SETUP_FEE,
} from "@/lib/offer"

const includes = [
  "Website built in-house",
  "Google Ads set up and managed",
  "Google Business Profile",
  "Call and conversion tracking",
  "Noble Leads Portal and app",
  "30 days of social posts a month",
  "Monthly report with video walkthrough",
  "Direct line to your account manager",
]

export function PricingCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-border p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-14">
          <p className="label-mono text-muted-foreground">
            <span className="mr-2 text-secondary">●</span>The Growth System
          </p>

          <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-8">
            <div>
              <p className="label-mono text-muted-foreground">Monthly</p>
              <p className="display mt-3 text-7xl tabular-nums text-foreground sm:text-8xl lg:text-[8.5rem]">
                {formatGBP(MONTHLY_FEE)}
              </p>
            </div>
            <div className="pb-2">
              <p className="label-mono text-muted-foreground">Setup, one-off</p>
              <p className="display mt-3 text-4xl tabular-nums text-foreground/80 sm:text-5xl">
                {formatGBP(SETUP_FEE)}
              </p>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-1 border-t border-border sm:grid-cols-3">
            {[
              ["Ad spend", `About ${formatGBP(MIN_AD_SPEND)}/mo min, paid on top`],
              ["Term", `${MIN_TERM_MONTHS} months, then rolling`],
              ["VAT", "None"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-border py-4 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0">
                <dt className="label-mono text-muted-foreground">{k}</dt>
                <dd className="mt-1.5 text-sm text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col p-6 sm:p-10 lg:col-span-5 lg:p-14">
          <p className="label-mono text-muted-foreground">What you get</p>
          <ul className="mt-6 divide-y divide-border/70 border-y border-border/70">
            {includes.map((item, i) => (
              <li key={item} className="flex items-baseline gap-4 py-3 text-sm text-foreground/90">
                <span className="label-mono w-6 text-[10px] text-secondary">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Your first {MIN_TERM_MONTHS} months come to {formatGBP(FIRST_TERM_COST)} at the minimum ad
            spend, setup included. Leave and you keep your website.
          </p>
          <SurveyCTA className="mt-auto pt-10" />
        </div>
      </div>
    </div>
  )
}
