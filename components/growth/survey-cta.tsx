import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { CTA_LABEL, CTA_SUBTEXT, SURVEY_PATH } from "@/lib/offer"

type SurveyCTAProps = {
  label?: string
  subtext?: string | null
  size?: "md" | "lg"
  align?: "start" | "center"
  className?: string
}

export function SurveyCTA({
  label = CTA_LABEL,
  subtext = CTA_SUBTEXT,
  size = "md",
  align = "start",
  className = "",
}: SurveyCTAProps) {
  const sizing =
    size === "lg" ? "py-2 pl-7 pr-2 text-base sm:pl-8" : "py-1.5 pl-6 pr-1.5 text-sm"
  const dot = size === "lg" ? "h-11 w-11" : "h-9 w-9"

  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      <Link
        href={SURVEY_PATH}
        className={`group min-touch inline-flex items-center justify-center gap-4 rounded-full bg-secondary font-semibold text-secondary-foreground transition-[transform,box-shadow] duration-500 ease-out hover:shadow-[0_18px_60px_-12px_rgba(197,165,90,0.55)] active:scale-[0.98] ${sizing}`}
      >
        {label}
        <span
          className={`relative flex ${dot} items-center justify-center overflow-hidden rounded-full bg-secondary-foreground text-secondary`}
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:-translate-y-6 group-hover:translate-x-6" />
          <ArrowUpRight className="absolute h-4 w-4 -translate-x-6 translate-y-6 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      </Link>
      {subtext ? (
        <p className="label-mono text-[10px] text-muted-foreground/80">{subtext}</p>
      ) : null}
    </div>
  )
}
