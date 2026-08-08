import Image from "next/image"
import type { ReactNode } from "react"

type BrowserFrameProps = {
  src: string
  alt: string
  url?: string
  priority?: boolean
  objectPosition?: string
  children?: ReactNode
}

export function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  objectPosition = "object-top",
  children,
}: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/40 bg-card/60 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.65)]">
      <div className="flex items-center gap-2 border-b border-border/40 bg-card/90 px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        {url ? (
          <div className="ml-2 flex min-w-0 flex-1 items-center rounded-md border border-border/40 bg-background/60 px-3 py-1">
            <span className="truncate font-mono text-[10px] text-muted-foreground sm:text-[11px]">
              {url}
            </span>
          </div>
        ) : (
          <div className="ml-2 h-5 flex-1 rounded-md border border-border/30 bg-background/40" />
        )}
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 72rem"
          className={`object-cover ${objectPosition}`}
        />
        {children}
      </div>
    </div>
  )
}
