"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MobileCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight || 1
      const docHeight = document.documentElement.scrollHeight

      // Show after user has scrolled past most of the hero,
      // and hide again near the very bottom to avoid clashing with footer/CTA.
      const pastHero = scrollY > vh * 0.6
      const beforeBottom = scrollY < docHeight - vh * 1.4
      setVisible(pastHero && beforeBottom)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden pb-safe">
      <div className="mx-auto max-w-7xl px-4 pb-3">
        <div className="rounded-xl border border-secondary/40 bg-background/95 backdrop-blur-lg shadow-lg shadow-secondary/20 px-4 py-3 flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[11px] font-medium text-foreground/90">
              Ready for predictable enquiries?
            </p>
            <p className="text-[10px] text-muted-foreground">
              30-minute strategy call · No obligation
            </p>
          </div>
          <Link
            href="/contact"
            className="min-touch inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-2 text-[11px] font-semibold text-secondary-foreground whitespace-nowrap transition-all duration-200 hover:bg-gold-300 active:scale-[0.97]"
          >
            Book call
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

