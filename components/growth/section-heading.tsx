import type { ReactNode } from "react"

import { SplitReveal } from "@/components/motion/split-reveal"

type SectionHeadingProps = {
  eyebrow?: string
  index?: string
  title: ReactNode
  intro?: ReactNode
  align?: "start" | "center"
  as?: "h1" | "h2"
  size?: "md" | "lg"
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  intro,
  align = "start",
  as = "h2",
  size = "md",
}: SectionHeadingProps) {
  const centred = align === "center"
  const titleSize =
    as === "h1"
      ? "text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem]"
      : size === "lg"
        ? "text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
        : "text-4xl sm:text-5xl lg:text-6xl"

  return (
    <div className={centred ? "mx-auto max-w-4xl text-center" : "max-w-5xl"}>
      {eyebrow ? (
        <p className="label-mono text-muted-foreground">
          {index ? <span className="mr-2 text-secondary">({index})</span> : null}
          {eyebrow}
        </p>
      ) : null}
      <SplitReveal
        as={as}
        onLoad={as === "h1"}
        className={`display mt-5 text-balance text-foreground ${titleSize}`}
      >
        {title}
      </SplitReveal>
      {intro ? (
        <div
          className={`mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg ${
            centred ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {intro}
        </div>
      ) : null}
    </div>
  )
}
