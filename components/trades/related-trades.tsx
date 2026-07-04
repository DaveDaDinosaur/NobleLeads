import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionReveal } from "@/components/section-reveal"
import { trades } from "@/lib/trades"

const RELATED_COUNT = 3

export function RelatedTrades({ currentHref }: { currentHref: string }) {
  const currentIndex = trades.findIndex((trade) => trade.href === currentHref)
  const related = Array.from({ length: RELATED_COUNT }, (_, i) => {
    const index = (currentIndex + 1 + i) % trades.length
    return trades[index]
  })

  return (
    <SectionReveal delay={220}>
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          Marketing for Other Trades
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          NobleLeads works with UK property service businesses across the board.{" "}
          <Link href="/#trades" className="font-medium text-secondary hover:underline">
            See all the trades we work with
          </Link>
          .
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {related.map((trade) => (
            <Link
              key={trade.href}
              href={trade.href}
              className="group flex flex-col justify-between rounded-xl border border-border/40 bg-card/50 p-5 transition-all duration-300 hover:border-secondary/40 hover:bg-card"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary/80">
                  {trade.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{trade.benefit}</p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-secondary transition-transform group-hover:translate-x-0.5">
                View trade page
                <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SectionReveal>
  )
}
