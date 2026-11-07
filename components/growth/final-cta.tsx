import { SplitReveal } from "@/components/motion/split-reveal"
import { SurveyCTA } from "@/components/growth/survey-cta"

export function FinalCTA({
  title = "Own your leads. Stop renting them.",
  body = "Tell us a bit about your business and pick a time to talk. We'll go through your numbers and show you what the system would look like for you.",
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-32 lg:py-44">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/[0.12] blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <p className="label-mono text-muted-foreground">
          <span className="mr-2 text-secondary">(→)</span>Next step
        </p>
        <SplitReveal
          as="h2"
          className="display mt-6 max-w-6xl text-balance text-[13vw] text-foreground sm:text-8xl lg:text-[9rem]"
        >
          {title}
        </SplitReveal>
        <div className="mt-12 flex flex-col gap-8 border-t border-border pt-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">{body}</p>
          <SurveyCTA size="lg" />
        </div>
      </div>
    </section>
  )
}
