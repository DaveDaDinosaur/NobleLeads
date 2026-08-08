import Link from "next/link"
import { ArrowRight } from "lucide-react"

type CaseStudyCtaProps = {
  headline?: string
  body?: string
}

export function CaseStudyCta({
  headline = "Want a system like this for your business?",
  body = "Whether you're starting from scratch or scaling what's already working, we'll build the infrastructure — leads, ops and follow-up — so growth isn't left to chance.",
}: CaseStudyCtaProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-card p-8 text-center sm:p-12 lg:p-16">
      <div
        className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-secondary/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/[0.04] blur-[100px]"
        aria-hidden
      />

      <div className="relative">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {body}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="group inline-flex min-touch items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98] sm:text-base"
          >
            Book a Free Discovery Call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex min-touch items-center justify-center rounded-lg border border-border/50 bg-card/40 px-8 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-secondary/40"
          >
            See Our Packages
          </Link>
        </div>
        <p className="mt-4 text-xs text-muted-foreground/70 sm:text-sm">
          No obligation. A straight conversation about your growth.
        </p>
      </div>

      <div
        className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-secondary/30"
        aria-hidden
      />
    </div>
  )
}
