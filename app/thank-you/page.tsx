import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { SectionReveal } from "@/components/section-reveal"
import { ThankYouTracker } from "@/components/contact/thank-you-tracker"
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Call Booked",
    description: "Your call with NobleLeads is booked.",
    canonicalPath: "/thank-you",
  }),
  robots: {
    index: false,
    follow: false,
  },
}

const nextSteps = [
  {
    step: "1",
    title: "Check Your Inbox",
    description:
      "A calendar invite and confirmation email are on their way. Add it to your calendar so you don't miss it.",
  },
  {
    step: "2",
    title: "Have Your Details Handy",
    description:
      "Know your average job value, what you spend on directories or ads now, and roughly how many enquiries you get a month. It makes the call far more useful.",
  },
  {
    step: "3",
    title: "We'll Call You",
    description:
      "We'll dial in at your booked time. If anything comes up beforehand, reply to the confirmation email and we'll sort it.",
  },
]

export default function ThankYouPage() {
  return (
    <main>
      <ThankYouTracker />
      <Navigation />
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15">
              <CheckCircle2 className="h-7 w-7 text-secondary" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Call Is Booked
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Thanks for booking a time with us. Here's what happens next.
            </p>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            {nextSteps.map((item, index) => (
              <SectionReveal key={item.step} delay={index * 150}>
                <div className="h-full border-t border-border pt-5">
                  <p className="label-mono text-secondary">0{item.step}</p>
                  <h3 className="mt-4 text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={450}>
            <p className="mt-12 text-sm text-muted-foreground">
              Need to change the time?{" "}
              <a
                href="mailto:hello@nobleleads.uk"
                className="font-medium text-secondary hover:underline"
              >
                Email us
              </a>{" "}
              or explore{" "}
              <Link href="/case-studies" className="font-medium text-secondary hover:underline">
                what we've built for other trades
              </Link>{" "}
              while you wait.
            </p>
          </SectionReveal>
        </div>
      </section>
      <Footer />
    </main>
  )
}
