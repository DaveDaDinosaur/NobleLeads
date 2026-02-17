/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "recharts",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
