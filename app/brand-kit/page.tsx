import { readFileSync } from "fs"
import { join } from "path"

export default function BrandKitPage() {
  const html = readFileSync(
    join(process.cwd(), "app/brand-kit/brand-package.html"),
    "utf-8"
  )
  return (
    <iframe
      srcDoc={html}
      className="fixed inset-0 h-full w-full border-0"
      title="NobleLeads Brand Design Package"
    />
  )
}
