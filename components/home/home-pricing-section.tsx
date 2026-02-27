import { SectionReveal } from "@/components/section-reveal"
import { PricingTiers } from "@/components/pricing/pricing-tiers"

export function HomePricingSection() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
              Three clear packages built for where your business is now. No hidden
              retainers, no confusing add-ons—just a marketing system you can
              budget for.
            </p>
          </div>
        </SectionReveal>
        <PricingTiers />
      </div>
    </section>
  )
}

