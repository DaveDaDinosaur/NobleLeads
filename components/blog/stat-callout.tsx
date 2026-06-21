"use client"

type Accent = "gold" | "blue" | "purple" | "green" | "pink"

const accentBorder: Record<Accent, string> = {
  gold:   "border-t-[#C9A84C]",
  blue:   "border-t-[#4C9AC9]",
  purple: "border-t-[#9A4CC9]",
  green:  "border-t-[#4CC97A]",
  pink:   "border-t-[#C94C7A]",
}

const accentText: Record<Accent, string> = {
  gold:   "text-[#C9A84C]",
  blue:   "text-[#4C9AC9]",
  purple: "text-[#9A4CC9]",
  green:  "text-[#4CC97A]",
  pink:   "text-[#C94C7A]",
}

export function StatCallout({
  stat,
  label,
  accent = "gold",
}: {
  stat: string
  label: string
  accent?: Accent
}) {
  return (
    <div
      className={`my-8 rounded-xl border border-border/40 bg-card/50 border-t-2 px-6 py-5 ${accentBorder[accent]}`}
    >
      <p className={`text-3xl font-bold tracking-tight sm:text-4xl ${accentText[accent]}`}>
        {stat}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {label}
      </p>
    </div>
  )
}
