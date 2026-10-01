import Image from "next/image"
import Link from "next/link"

import { LpCallButton } from "@/components/lp/lp-tracking"

// Landing pages deliberately have no site navigation: the logo isn't a link and
// the only way forward is the form or the phone.
export function LpHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/90 backdrop-blur-xl pt-safe">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/images/noble-leads-logo.png"
            alt="Noble Leads"
            width={28}
            height={28}
            sizes="28px"
            priority
            className="object-contain"
          />
          <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
            Noble <span className="text-gold-ripple">Leads</span>
          </span>
        </div>
        <LpCallButton className="inline-flex min-touch items-center gap-2 rounded-lg border border-secondary/40 bg-secondary/10 px-3 py-2 text-xs font-semibold text-secondary transition-colors hover:bg-secondary/20 sm:px-4 sm:text-sm" />
      </div>
    </header>
  )
}

export function LpFooter() {
  return (
    <footer className="border-t border-border/40 pb-28 pt-8 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Noble Leads · Company no. 17063686 · 27 Old Gloucester Street, London WC1N 3AX</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-secondary">
            Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="hover:text-secondary">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
