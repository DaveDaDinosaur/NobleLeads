import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Mail, Phone } from "lucide-react"

const companyLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const trades = [
  { label: "Window Cleaners", href: "/window-cleaners" },
  { label: "Roofers", href: "/roofers" },
  { label: "Electricians", href: "/electricians" },
  { label: "Plumbers", href: "/plumbers" },
  { label: "Landscapers", href: "/landscapers" },
  { label: "Painters & Decorators", href: "/painters-decorators" },
  { label: "Domestic Cleaners", href: "/domestic-cleaners" },
  { label: "Driveway & Paving", href: "/driveway-paving" },
  { label: "Builders", href: "/builders" },
  { label: "Bathroom Fitters", href: "/bathroom-fitters" },
  { label: "Carpet Cleaners", href: "/carpet-cleaners" },
  { label: "Tree Surgeons", href: "/tree-surgeons" },
  { label: "EV Charger Installers", href: "/ev-charger-installers" },
  { label: "End of Tenancy Cleaners", href: "/end-of-tenancy-cleaners" },
]

const legalLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Cookies", href: "/cookie-policy" },
  { label: "Sitemap", href: "/sitemap.xml" },
]

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/80">
      {children}
    </span>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background pb-safe">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main row */}
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-12 lg:py-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 min-touch">
              <Image
                src="/images/noble-leads-logo.png"
                alt="Noble Leads"
                width={32}
                height={32}
                sizes="32px"
                className="object-contain"
              />
              <span className="text-base font-semibold text-foreground">
                Noble Leads
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Enquiry and conversion systems for UK trade businesses.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground/70">
              <a
                href="mailto:hello@nobleleads.uk"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-secondary"
              >
                <Mail className="h-3.5 w-3.5 text-secondary/70" />
                hello@nobleleads.uk
              </a>
              <span className="hidden text-border sm:inline">·</span>
              <a
                href="tel:+441223679988"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-secondary"
              >
                <Phone className="h-3.5 w-3.5 text-secondary/70" />
                01223 679988
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-3 flex flex-col gap-0.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex py-1 text-sm text-foreground/65 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-4 lg:text-right">
            <FooterHeading>Get started</FooterHeading>
            <Link
              href="/contact"
              className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-gold-300"
            >
              Book a Discovery Call
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <p className="mt-3 text-xs text-muted-foreground lg:ml-auto lg:max-w-[220px]">
              Cambridge-based · Serving trades across the UK
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-emerald-400/90">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Accepting new clients
            </p>
          </div>
        </div>

        {/* Trades */}
        <div className="border-t border-border/30 py-6">
          <FooterHeading>Trades we work with</FooterHeading>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-0 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {trades.map((trade) => (
              <li key={trade.href}>
                <Link
                  href={trade.href}
                  className="inline-flex py-1 text-xs text-foreground/55 transition-colors hover:text-secondary"
                >
                  {trade.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 py-5">
          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Noble Leads · Company no. 17063686</p>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-secondary"
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
