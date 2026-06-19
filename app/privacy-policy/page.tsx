import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { buildMetadata } from "../(shared)/seo-config"

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Noble Leads collects, uses, stores, and protects personal data under UK GDPR and the Data Protection Act 2018.",
  canonicalPath: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navigation />
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Effective date: 2 June 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/85 sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Who We Are</h2>
              <p className="mt-3">
                Noble Leads is the data controller for personal data collected via
                this website. Our details are:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Noble Leads (Company number 17063686)</li>
                <li>27 Old Gloucester Street, London, United Kingdom, WC1N 3AX</li>
                <li>Email: hello@nobleleads.uk</li>
                <li>Phone: +44 1223 679988</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Personal Data We Collect
              </h2>
              <p className="mt-3">
                Depending on how you interact with us, we may collect contact
                details (name, email address, phone number), business information
                you submit in enquiries, communication records, and website usage
                data collected through analytics tools.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                How We Use Personal Data
              </h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>To respond to enquiries and book discovery calls.</li>
                <li>To provide and improve our services.</li>
                <li>
                  To monitor website performance and user journeys (where analytics
                  consent is provided).
                </li>
                <li>To maintain security and prevent misuse of our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Legal Bases for Processing
              </h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>
                  Contract: to take steps requested by you before entering into a
                  service agreement.
                </li>
                <li>
                  Legitimate interests: to run and improve our business and
                  communications in a proportionate way.
                </li>
                <li>
                  Consent: for non-essential analytics and similar technologies.
                </li>
                <li>Legal obligation: where processing is required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Sharing and Processors
              </h2>
              <p className="mt-3">
                We may use trusted service providers to operate our website and
                booking flows, including Google Analytics and LeadConnector
                integrations. These providers process data on our instructions or as
                separate controllers depending on the service function.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                International Transfers
              </h2>
              <p className="mt-3">
                Some providers (such as Google services) may process personal data
                outside the UK. Where this occurs, we rely on appropriate safeguards
                such as adequacy regulations or approved contractual mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Data Retention
              </h2>
              <p className="mt-3">
                We keep personal data only as long as necessary for the purposes set
                out in this policy, including service delivery, legal, accounting,
                and reporting obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Your Rights
              </h2>
              <p className="mt-3">
                Under UK GDPR, you may have rights to access, rectify, erase,
                restrict, or object to processing, and in some cases data
                portability. You can also withdraw consent at any time for
                consent-based processing.
              </p>
              <p className="mt-3">
                To exercise your rights, contact hello@nobleleads.uk. You also have
                the right to lodge a complaint with the UK Information
                Commissioner&apos;s Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  className="text-secondary underline-offset-4 hover:underline"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Any material
                changes will be published on this page with an updated effective
                date.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
