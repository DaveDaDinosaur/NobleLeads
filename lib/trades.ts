import {
  Bath,
  Building2,
  Droplets,
  Hammer,
  HardHat,
  KeyRound,
  Layers,
  PaintBucket,
  PlugZap,
  SprayCan,
  TreePine,
  Trees,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type Trade = {
  name: string
  benefit: string
  href: string
  icon: LucideIcon
}

export const trades: Trade[] = [
  {
    name: "Window Cleaners",
    benefit: "Build rounds and reduce Bark dependency",
    href: "/window-cleaners",
    icon: Droplets,
  },
  {
    name: "Roofers",
    benefit: "Fill your pipeline beyond storm season",
    href: "/roofers",
    icon: HardHat,
  },
  {
    name: "Electricians",
    benefit: "Win rewires, EICRs and commercial contracts",
    href: "/electricians",
    icon: Zap,
  },
  {
    name: "Plumbers",
    benefit: "Attract boiler installs and bathroom fits",
    href: "/plumbers",
    icon: Wrench,
  },
  {
    name: "Landscapers",
    benefit: "Keep your diary full between projects",
    href: "/landscapers",
    icon: Trees,
  },
  {
    name: "Painters & Decorators",
    benefit: "Attract clients who pay for quality",
    href: "/painters-decorators",
    icon: PaintBucket,
  },
  {
    name: "Domestic Cleaners",
    benefit: "Build a full book of loyal regular clients",
    href: "/domestic-cleaners",
    icon: SprayCan,
  },
  {
    name: "Driveway & Paving",
    benefit: "Win high-value installs and commercial jobs",
    href: "/driveway-paving",
    icon: Hammer,
  },
  {
    name: "Builders",
    benefit: "Win extensions, conversions and refurb work",
    href: "/builders",
    icon: Building2,
  },
  {
    name: "Bathroom Fitters",
    benefit: "Fill your diary with bathroom install leads",
    href: "/bathroom-fitters",
    icon: Bath,
  },
  {
    name: "Carpet Cleaners",
    benefit: "Book more domestic and commercial cleans",
    href: "/carpet-cleaners",
    icon: Layers,
  },
  {
    name: "Tree Surgeons",
    benefit: "Get emergency and planned tree work enquiries",
    href: "/tree-surgeons",
    icon: TreePine,
  },
  {
    name: "EV Charger Installers",
    benefit: "Capture the growing home charging market",
    href: "/ev-charger-installers",
    icon: PlugZap,
  },
  {
    name: "End of Tenancy Cleaners",
    benefit: "Win landlord and agency cleaning contracts",
    href: "/end-of-tenancy-cleaners",
    icon: KeyRound,
  },
]
