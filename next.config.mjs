const removedTradePages = [
  "/window-cleaners",
  "/domestic-cleaners",
  "/carpet-cleaners",
  "/end-of-tenancy-cleaners",
  "/electricians",
  "/plumbers",
  "/landscapers",
  "/painters-decorators",
  "/tree-surgeons",
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/pricing", destination: "/growth-system", permanent: true },
      { source: "/services", destination: "/growth-system", permanent: true },
      { source: "/contact", destination: "/survey", permanent: true },
      { source: "/get-more-leads", destination: "/", permanent: true },
      { source: "/builders", destination: "/refurbishments-extensions", permanent: true },
      { source: "/bathroom-fitters", destination: "/refurbishments-extensions", permanent: true },
      { source: "/ev-charger-installers", destination: "/solar-heat-pumps", permanent: true },
      ...removedTradePages.map((source) => ({
        source,
        destination: "/trades",
        permanent: true,
      })),
    ]
  },
}

export default nextConfig
