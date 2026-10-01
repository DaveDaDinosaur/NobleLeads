import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"

import { GHL_BOOKING_URL } from "@/components/contact/booking-embed"
import { LpEmbed } from "@/components/lp/lp-embed"
import { LpFooter, LpHeader } from "@/components/lp/lp-shell"
import { LeadSubmittedTracker } from "@/components/lp/lp-tracking"
import { buildMetadata } from "../../(shared)/seo-config"

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Book Your Growth Call",
    description: "Pick a time for your free 15-minute growth call with Noble Leads.",
    canonicalPath: "/lp/booking",
  }),
  robots: { index: false, follow: false },
}

export default function LpBookingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <LeadSubmittedTracker />
      <LpHeader />

      <section className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15">
            <CheckCircle2 className="h-6 w-6 text-secondary" />
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Thanks, that&apos;s the hard part done
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Last step: pick a time for your free 15-minute growth call. We&apos;ll look over
            your answers beforehand and come with ideas specific to your business.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-secondary/30 bg-card/50 p-4 sm:p-6">
          <LpEmbed src={GHL_BOOKING_URL} title="Book your free growth call" minHeight={720} />
        </div>
      </section>

      <LpFooter />
    </main>
  )
}
