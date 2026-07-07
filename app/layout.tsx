import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import { CookieConsentBanner } from "@/components/consent/CookieConsentBanner"
import { CtaClickTracker } from "@/components/consent/CtaClickTracker"
import { Ga4Loader } from "@/components/consent/Ga4Loader"

import { getSiteUrl } from "./(shared)/seo-config"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Noble Leads | Growth Systems for Property Service Businesses",
    template: "%s | Noble Leads",
  },
  description:
    "Noble Leads is a UK-based growth agency that builds automated lead generation and conversion systems for property service businesses. More visibility. More credibility. More enquiries. More revenue.",
  keywords: [
    "lead generation",
    "property services",
    "UK growth agency",
    "trade business marketing",
    "commercial enquiries",
  ],
  icons: {
    icon: [{ url: "/favicon.png", sizes: "any", type: "image/png" }],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Noble Leads | Growth Systems for Property Service Businesses",
    description:
      "Automated lead generation and conversion systems for UK property service businesses.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Leads | Growth Systems for Property Service Businesses",
    description:
      "Automated lead generation and conversion systems for UK property service businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0E17",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="font-sans antialiased">
        <Ga4Loader />
        <CtaClickTracker />
        <CookieConsentBanner />
        {children}
      </body>
    </html>
  )
}
