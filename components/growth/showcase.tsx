import type { ReactNode } from "react"
import Image from "next/image"
import { Search } from "lucide-react"

import { SectionReveal } from "@/components/section-reveal"

function Frame({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-lg border border-border bg-card">{children}</div>
      <figcaption className="label-mono mt-3 text-[10px] text-muted-foreground/80">{caption}</figcaption>
    </figure>
  )
}

function WebsiteVisual() {
  return (
    <Frame caption="Real client site: Focus Refurbishment">
      <div className="relative aspect-[16/10]">
        <Image
          src="/images/case-studies/focus-refurbishment-website.png"
          alt="The website we built for Focus Refurbishment"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[70%_center]"
        />
      </div>
    </Frame>
  )
}

function AdVisual({ search }: { search: string }) {
  return (
    <Frame caption="Example ad, for illustration">
      <div className="p-5 sm:p-8">
        <div className="flex items-center gap-3 rounded-full border border-border px-4 py-2.5 text-sm text-foreground/90">
          <Search className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <span className="truncate">{search}</span>
        </div>
        <div className="mt-6 border-l-2 border-secondary pl-4">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Sponsored</span> · yourbusiness.co.uk
          </p>
          <p className="mt-2 text-lg font-medium leading-snug text-secondary sm:text-xl">
            Your Business | Local, Insured and Reviewed
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Your own ad, sending people to your own site. They enquire with you, not five other firms.
          </p>
        </div>
      </div>
    </Frame>
  )
}

function Bubble({ from, children }: { from: "lead" | "you"; children: ReactNode }) {
  return (
    <p
      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
        from === "you"
          ? "self-end rounded-br-sm bg-secondary text-secondary-foreground"
          : "self-start rounded-bl-sm bg-muted text-foreground"
      }`}
    >
      {children}
    </p>
  )
}

function FollowUpVisual() {
  return (
    <Frame caption="Example messages, for illustration">
      <div className="flex flex-col gap-3 p-5 sm:p-8">
        <p className="label-mono self-center text-[10px] text-muted-foreground">Missed call, 10:42</p>
        <Bubble from="you">Hi, sorry we missed you, we{"'"}re on a job. What can we help with?</Bubble>
        <Bubble from="lead">Hi, after a quote for some work on our house.</Bubble>
        <Bubble from="you">No problem. We{"'"}ll call you back today. Any time better than others?</Bubble>
      </div>
    </Frame>
  )
}

function ReportVisual() {
  return (
    <Frame caption="Real numbers: Focus Refurbishment">
      <dl className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {[
          ["24", "Leads in a fortnight"],
          ["~£21", "Per website lead, fire door ads"],
          ["9.49%", "Click-through rate, fire door ads"],
        ].map(([value, label]) => (
          <div key={label} className="p-5 sm:p-6">
            <dd className="display text-4xl tabular-nums text-secondary">{value}</dd>
            <dt className="mt-3 text-xs leading-relaxed text-muted-foreground">{label}</dt>
          </div>
        ))}
      </dl>
    </Frame>
  )
}

export function Showcase({ search = "roofers near me" }: { search?: string }) {
  const rows = [
    {
      label: "The website",
      title: "A site that makes you look like the firm to call.",
      body: "Built by our own team around your jobs and your area, with your photos, reviews and accreditations up front. Click-to-call and quote forms on every page.",
      visual: <WebsiteVisual />,
    },
    {
      label: "The ads",
      title: "Seen by people searching for your work today.",
      body: "Google Ads aimed at the jobs you want, in the places you cover. We check them daily, review searches weekly and block the ones that waste money.",
      visual: <AdVisual search={search} />,
    },
    {
      label: "The follow-up",
      title: "No enquiry goes cold while you're on the tools.",
      body: "A missed call gets a text back automatically. New enquiries reach your phone straight away, and the Noble Leads Portal keeps following up by text and email.",
      visual: <FollowUpVisual />,
    },
    {
      label: "The numbers",
      title: "You see what every lead costs.",
      body: "Every call and form is tracked. Each month you get a plain-English report and a short video showing the leads, the spend, what we changed and what's next.",
      visual: <ReportVisual />,
    },
  ]

  return (
    <div>
      {rows.map((row, i) => (
        <SectionReveal key={row.label}>
          <div className="grid grid-cols-1 items-center gap-8 border-t border-border py-10 sm:py-14 lg:grid-cols-12 lg:gap-16">
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
              <p className="label-mono text-muted-foreground">
                <span className="mr-2 text-secondary">{String(i + 1).padStart(2, "0")}</span>
                {row.label}
              </p>
              <h3 className="display mt-5 text-balance text-3xl leading-[1.02] text-foreground sm:text-4xl">
                {row.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">{row.body}</p>
            </div>
            <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>{row.visual}</div>
          </div>
        </SectionReveal>
      ))}
    </div>
  )
}
