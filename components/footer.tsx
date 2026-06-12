import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Mail, Phone } from "lucide-react"

const companyLinks = [
  { label: "Home", href: "/" },
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

const tradesMidpoint = Math.ceil(trades.length / 2)

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Sitemap", href: "/sitemap.xml" },
]

function FooterLinkList({
  links,
}: {
  links: { label: string; href: string }[]
}) {
  return (
    <ul className="flex flex-col gap-1">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="min-touch inline-flex py-1.5 text-sm text-foreground/70 transition-colors hover:text-secondary active:text-secondary"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background pb-safe">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:gap-x-8">
            {/* Brand + contact */}
            <div className="sm:col-span-2 lg:col-span-4">
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

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="mailto:hello@nobleleads.uk"
                  className="group inline-flex items-center gap-2.5 text-sm text-foreground/80 transition-colors hover:text-secondary"
                >
                  <Mail className="h-4 w-4 text-secondary/80" />
                  hello@nobleleads.uk
                </a>
                <a
                  href="tel:+441223679988"
                  className="group inline-flex items-center gap-2.5 text-sm text-foreground/80 transition-colors hover:text-secondary"
                >
                  <Phone className="h-4 w-4 text-secondary/80" />
                  01223 679988
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-secondary">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Accepting new clients
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Company
              </h4>
              <div className="mt-5">
                <FooterLinkList links={companyLinks} />
              </div>
            </div>

            {/* Trades — two balanced columns */}
            <div className="sm:col-span-2 lg:col-span-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Trades we work with
              </h4>
              <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
                <FooterLinkList links={trades.slice(0, tradesMidpoint)} />
                <FooterLinkList links={trades.slice(tradesMidpoint)} />
              </div>
            </div>

            {/* CTA */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Get started
              </h4>
              <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                One strategy call can clarify your next steps.
              </p>
              <Link
                href="/contact"
                className="group mt-5 min-touch inline-flex items-center gap-2 py-2 text-sm font-semibold text-secondary transition-colors hover:text-gold-300 active:text-gold-400"
              >
                Book a Strategy Call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Cambridge-based · Serving trades across the UK
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-6 sm:py-8">
          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Noble Leads. All rights reserved. · Company no. 17063686
            </p>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="min-touch text-xs text-muted-foreground transition-colors hover:text-secondary"
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
