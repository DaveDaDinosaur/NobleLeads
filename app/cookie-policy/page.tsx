import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "How Noble Leads uses essential and analytics cookies, and how you can manage your consent preferences.",
  canonicalPath: "/cookie-policy",
})

export default function CookiePolicyPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Effective date: 2 June 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/85 sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                What Are Cookies?
              </h2>
              <p className="mt-3">
                Cookies are small text files placed on your device to help websites
                function, remember preferences, and understand how visitors use a
                site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                How We Use Cookies
              </h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>
                  Essential cookies: required for core website functionality and
                  security.
                </li>
                <li>
                  Analytics cookies: help us understand site performance and improve
                  user experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Analytics Cookies
              </h2>
              <p className="mt-3">
                We use Google Analytics 4 (GA4) only when you provide analytics
                consent. GA4 may collect information such as pages visited, time on
                site, device/browser information, and approximate location data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Third-Party Booking Tools
              </h2>
              <p className="mt-3">
                Our contact booking flow uses LeadConnector/Msgsndr embeds. These
                third-party services may set cookies or similar technologies inside
                the embedded booking interface, based on their own policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Managing Consent
              </h2>
              <p className="mt-3">
                You can accept or reject non-essential cookies via our cookie
                consent banner. If you later change your preference, you can update
                it from the cookie settings controls shown in the banner interface.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Contact Details
              </h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Noble Leads (Company number 17063686)</li>
                <li>27 Old Gloucester Street, London, United Kingdom, WC1N 3AX</li>
                <li>Email: hello@nobleleads.uk</li>
                <li>Phone: +44 1223 679988</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
