import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionReveal } from "@/components/section-reveal"
import { tradeHref, trades } from "@/lib/trades"

const RELATED_COUNT = 3

export function RelatedTrades({ currentSlug }: { currentSlug: string }) {
  const currentIndex = trades.findIndex((trade) => trade.slug === currentSlug)
  const related = Array.from({ length: RELATED_COUNT }, (_, i) => {
    const index = (currentIndex + 1 + i) % trades.length
    return trades[index]
  })

  return (
    <SectionReveal delay={120}>
      <section className="mt-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="label-mono text-muted-foreground">Other trades we work with</h2>
          <Link href="/trades" className="label-mono text-secondary hover:underline">
            All trades
          </Link>
        </div>
        <div className="mt-5 border-t border-border">
          {related.map((trade) => (
            <Link
              key={trade.slug}
              href={tradeHref(trade)}
              className="group flex items-center justify-between gap-6 border-b border-border py-4 transition-colors hover:text-secondary"
            >
              <span>
                <span className="block text-base font-medium text-foreground transition-colors group-hover:text-secondary">
                  {trade.name}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{trade.benefit}</span>
              </span>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-secondary transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </SectionReveal>
  )
}
