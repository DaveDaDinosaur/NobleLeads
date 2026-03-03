import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brand Kit",
  description: "Internal brand reference.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
}

export default function BrandKitLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>
}
