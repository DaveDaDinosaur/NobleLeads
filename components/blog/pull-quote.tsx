"use client"

type Accent = "gold" | "blue" | "purple" | "green" | "pink"

const accentStyles: Record<Accent, string> = {
  gold:   "border-l-[#C9A84C] text-[#C9A84C]/90",
  blue:   "border-l-[#4C9AC9] text-[#4C9AC9]/90",
  purple: "border-l-[#9A4CC9] text-[#9A4CC9]/90",
  green:  "border-l-[#4CC97A] text-[#4CC97A]/90",
  pink:   "border-l-[#C94C7A] text-[#C94C7A]/90",
}

export function PullQuote({
  children,
  accent = "gold",
}: {
  children: React.ReactNode
  accent?: Accent
}) {
  return (
    <blockquote
      className={`my-8 border-l-4 pl-5 text-base font-medium italic leading-relaxed sm:text-lg ${accentStyles[accent]}`}
    >
      {children}
    </blockquote>
  )
}
