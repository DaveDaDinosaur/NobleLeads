"use client"

import { Mail, MapPin, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nobleleads.uk",
    href: "mailto:hello@nobleleads.uk",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01223 679988",
    href: "tel:+441223679988",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United Kingdom",
    href: null,
  },
]

export function ContactHero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-10 lg:pt-40 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-navy-500/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Get in Touch
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-6xl leading-[1.1]">
            Let{"'"}s build your{" "}
            <span className="text-secondary">growth system.</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground sm:text-lg">
            Book a strategy call and we{"'"}ll walk through your current lead flow,
            identify the gaps, and map out exactly how to create predictable
            revenue for your business.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/40 px-4 py-3 sm:px-5 backdrop-blur-sm min-touch"
            >
              <item.icon className="h-4 w-4 text-secondary" />
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-foreground">
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
