import type { ReactNode } from "react"

export type HowItWorksStep = {
  title: string
  body: ReactNode
}

export function HowItWorksSteps({ steps }: { steps: HowItWorksStep[] }) {
  return (
    <ol className="mt-5 space-y-5">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4">
          <div className="flex-shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 text-xs font-bold text-secondary">
            {i + 1}
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-foreground">{step.title}</p>
            <div className="text-sm leading-relaxed text-muted-foreground">{step.body}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}
