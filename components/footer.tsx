import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  trades: [
    { label: "Window Cleaners", href: "/window-cleaners" },
    { label: "Roofers", href: "/roofers" },
    { label: "Landscapers", href: "/landscaping-marketing" },
    { label: "Driveway Contractors", href: "/driveway-contractors" },
  ],
  services: [
    { label: "Website Design for Trades", href: "/website-design-for-trades" },
    { label: "Google Ads for Trades", href: "/google-ads-for-trades" },
    { label: "CRM & Automation", href: "/crm-automation" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background pb-safe">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <Link href="/" className="flex items-center gap-3 min-touch">
                <Image
                  src="/images/noble-leads-logo.png"
                  alt="Noble Leads"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="object-contain"
                />
                <span className="text-lg font-semibold text-foreground">
                  Noble Leads
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                We build enquiry and conversion systems for UK trade businesses.
                Your reputation, properly positioned—so you get a consistent flow
                of qualified leads.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-secondary font-medium">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Accepting new clients
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Navigation
              </h4>
              <ul className="mt-5 flex flex-col gap-1">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="min-touch inline-flex py-2 text-sm text-foreground/70 transition-colors hover:text-secondary active:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trades */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Trades we work with
              </h4>
              <ul className="mt-5 flex flex-col gap-1">
                {footerLinks.trades.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="min-touch inline-flex py-2 text-sm text-foreground/70 transition-colors hover:text-secondary active:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Services
              </h4>
              <ul className="mt-5 flex flex-col gap-1">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="min-touch inline-flex py-2 text-sm text-foreground/70 transition-colors hover:text-secondary active:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Ready for consistent enquiries?
              </h4>
              <p className="mt-5 text-sm text-foreground/70 leading-relaxed">
                One strategy call can clarify your next steps.
              </p>
              <Link
                href="/contact"
                className="group mt-5 min-touch inline-flex items-center gap-2 py-2 text-sm font-semibold text-secondary transition-colors hover:text-gold-300 active:text-gold-400"
              >
                Book a Strategy Call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-6 sm:py-8">
          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              {"© 2026 Noble Leads. All rights reserved. United Kingdom."}
            </p>
            <div className="flex flex-wrap gap-4">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="min-touch text-xs text-muted-foreground hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
