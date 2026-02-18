"use client"

import { useRef, useEffect, useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { useMouseParallax } from "@/hooks/use-mouse-parallax"

const PARALLAX_FACTOR = 24

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
  const mouse = useMouseParallax()
  const sectionRef = useRef<HTMLElement>(null)
  const [orbsVisible, setOrbsVisible] = useState(true)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => setOrbsVisible(e.isIntersecting),
      { threshold: 0.1, rootMargin: "0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* Fixed orbs — same as about/services, hidden when hero is out of view */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: orbsVisible ? 1 : 0 }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 about-orb-parallax-wrapper">
          <div
            className="absolute -top-20 -right-20 w-[560px] h-[560px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `translate(${mouse.x * PARALLAX_FACTOR}px, ${mouse.y * PARALLAX_FACTOR * 0.7}px)`,
            }}
          >
            <div
              className="about-hero-orb w-full h-full rounded-full blur-[100px]"
              style={{
                background: "radial-gradient(circle, hsl(215 52% 35% / 0.5) 0%, transparent 70%)",
              }}
            />
          </div>
          <div
            className="absolute bottom-1/5 -left-20 w-[440px] h-[440px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `translate(${mouse.x * -PARALLAX_FACTOR * 0.8}px, ${mouse.y * -PARALLAX_FACTOR * 0.6}px)`,
            }}
          >
            <div
              className="about-hero-orb w-full h-full rounded-full blur-[95px]"
              style={{
                animationDelay: "-7s",
                background: "radial-gradient(circle, hsl(42 45% 60% / 0.4) 0%, transparent 70%)",
              }}
            />
          </div>
          <div
            className="absolute top-1/2 left-1/2 w-[360px] h-[360px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{
              transform: `translate(calc(-50% + ${mouse.x * PARALLAX_FACTOR * 0.5}px), calc(-50% + ${mouse.y * PARALLAX_FACTOR * 0.5}px))`,
            }}
          >
            <div
              className="about-hero-orb w-full h-full rounded-full blur-[85px]"
              style={{
                animationDelay: "-14s",
                background: "radial-gradient(circle, hsl(215 40% 30% / 0.35) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />
      </div>

      <section
        ref={sectionRef}
        className="relative pt-28 sm:pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden z-10"
      >
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
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
    </>
  )
}
