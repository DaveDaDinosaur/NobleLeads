import type { Metadata, Viewport } from "next"
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google"

import { CookieConsentBanner } from "@/components/consent/CookieConsentBanner"
import { CtaClickTracker } from "@/components/consent/CtaClickTracker"
import { Ga4Loader } from "@/components/consent/Ga4Loader"
import { SmoothScroll } from "@/components/motion/smooth-scroll"

import { getSiteUrl } from "./(shared)/seo-config"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
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
    default: "Noble Leads | Own Your Leads. Lead Systems for UK Trades",
    template: "%s | Noble Leads",
  },
  description:
    "NobleLeads is a UK lead generation agency for trades with high-value jobs. We build and run your own website, Google Ads and automatic follow-up. You own it.",
  keywords: [
    "lead generation",
    "lead generation for trades",
    "Checkatrade alternative",
    "Google Ads for trades",
    "trade website design",
  ],
  icons: {
    icon: [{ url: "/favicon.png", sizes: "any", type: "image/png" }],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Noble Leads | Own Your Leads. Lead Systems for UK Trades",
    description:
      "Own your leads, don't rent them. Website, Google Ads and automatic follow-up for UK trades with high-value jobs.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Leads | Own Your Leads. Lead Systems for UK Trades",
    description:
      "Own your leads, don't rent them. Website, Google Ads and automatic follow-up for UK trades with high-value jobs.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#07080B",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="font-sans antialiased">
        <Ga4Loader />
        <CtaClickTracker />
        <CookieConsentBanner />
        <SmoothScroll />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  )
}
