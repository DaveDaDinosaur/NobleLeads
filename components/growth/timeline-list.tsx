import { timeline } from "@/lib/offer"

export function TimelineList({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="border-t border-border">
      {timeline.map((step, i) => (
        <li
          key={step.title}
          className="group grid grid-cols-[3rem_1fr] gap-x-4 border-b border-border py-5 transition-colors duration-500 hover:bg-card/50 sm:grid-cols-[4rem_10rem_1fr] sm:gap-x-6 sm:py-6"
        >
          <span className="label-mono pt-1 text-secondary">{String(i + 1).padStart(2, "0")}</span>
          <p className="label-mono pt-1 text-muted-foreground max-sm:col-start-2">{step.day}</p>
          <div className="max-sm:col-start-2 max-sm:mt-2">
            <h3 className="text-lg font-medium text-foreground transition-transform duration-500 group-hover:translate-x-1 sm:text-xl">
              {step.title}
            </h3>
            {compact ? null : (
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
