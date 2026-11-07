"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"

import { CTA_LABEL, SURVEY_PATH } from "@/lib/offer"

const navLinks = [
  { href: "/growth-system", label: "Growth System" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/trades", label: "Trades" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 20
      setIsScrolled((prev) => (prev === next ? prev : next))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-safe ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group min-touch">
              <Image
                src="/images/noble-leads-logo.png"
                alt="Noble Leads"
                width={28}
                height={28}
                sizes="28px"
                priority
                className="transition-transform duration-300 group-hover:scale-105 object-contain flex-shrink-0"
              />
              <span className="text-sm sm:text-base font-semibold tracking-tight text-foreground">
                Noble <span className="text-gold-ripple">Leads</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    isActive(link.href)
                      ? "text-secondary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href={SURVEY_PATH}
                className="group inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-gold-300"
              >
                {CTA_LABEL}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden min-touch inline-flex items-center justify-center p-3 -m-1 text-foreground rounded-lg hover:bg-muted/50 active:bg-muted transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full gap-2 px-6 pb-safe">
          {[{ href: "/", label: "Home" }, ...navLinks].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`display min-touch flex items-baseline gap-4 text-5xl sm:text-6xl transition-all duration-500 py-1 ${
                pathname === link.href
                  ? "text-secondary"
                  : "text-foreground hover:text-secondary active:text-secondary"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <span className="label-mono text-xs text-secondary">{String(i + 1).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
          <Link
            href={SURVEY_PATH}
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 min-touch inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all duration-300 hover:bg-gold-300 active:scale-[0.98]"
            style={{
              transitionDelay: isMobileMenuOpen ? "450ms" : "0ms",
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {CTA_LABEL}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  )
}
