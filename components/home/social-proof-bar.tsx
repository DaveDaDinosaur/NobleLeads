export function SocialProofBar() {
  const trades = [
    "Window cleaners",
    "Roofers",
    "Landscapers",
    "Driveway & paving",
    "Domestic & commercial cleaners",
    "Plumbers",
    "Electricians",
    "Painters & decorators",
  ]

  return (
    <section className="relative border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 sm:text-sm">
        <p className="font-medium text-muted-foreground">
          Trusted by{" "}
          <span className="text-secondary">
            cleaners, roofers, landscapers &amp; more across the UK
          </span>
          .
        </p>
        <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs text-muted-foreground/80">
          {trades.map((trade) => (
            <span
              key={trade}
              className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/60 px-3 py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              {trade}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

