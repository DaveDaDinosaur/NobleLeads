/**
 * What we deliver — six-step journey. Section names and copy as per NobleLeads.
 */

export type ServiceItem = {
  title: string
  description: string
}

export type JourneyStep = {
  id: string
  step: number
  label: string
  services: ServiceItem[]
}

export const WHAT_WE_DELIVER_JOURNEY: JourneyStep[] = [
  {
    id: "attract",
    step: 1,
    label: "Attract",
    services: [
      {
        title: "Conversion Website System",
        description:
          "A high-converting, mobile-first website designed specifically for property service businesses to generate consistent enquiries.",
      },
      {
        title: "Local SEO & Visibility Setup",
        description:
          "Optimised site structure, service pages and local targeting to improve Google visibility.",
      },
      {
        title: "Ongoing SEO & Content Expansion",
        description:
          "Monthly service pages, location pages and content updates to increase long-term search presence.",
      },
    ],
  },
  {
    id: "capture",
    step: 2,
    label: "Capture",
    services: [
      {
        title: "CRM & Pipeline System",
        description:
          "A custom lead tracking system to manage enquiries, quotes and closed jobs in one place.",
      },
      {
        title: "Instant Lead Alert System",
        description:
          "Automated SMS and email notifications when new enquiries are submitted.",
      },
      {
        title: "Booking & Appointment System",
        description:
          "Integrated calendar system with confirmations and reminders to reduce no-shows.",
      },
    ],
  },
  {
    id: "convert",
    step: 3,
    label: "Convert",
    services: [
      {
        title: "Quote Follow-Up Automation",
        description:
          "Automated reminders and follow-up messages to increase quote acceptance rates.",
      },
      {
        title: "Customer Reactivation Campaigns",
        description:
          "Targeted SMS and email campaigns to generate new work from past customers.",
      },
      {
        title: "Review & Reputation Growth System",
        description:
          "Automated review requests and structured reputation management to increase trust and rankings.",
      },
    ],
  },
  {
    id: "authority",
    step: 4,
    label: "Authority",
    services: [
      {
        title: "Social Authority Pack",
        description:
          "Branded social media templates and content assets to strengthen online credibility.",
      },
      {
        title: "Capability & Authority Build",
        description:
          "Structured website sections showcasing accreditations, insurance, compliance and case studies.",
      },
      {
        title: "Company Profile & Documentation Pack",
        description:
          "Professional capability statement and tender-ready documentation templates.",
      },
    ],
  },
  {
    id: "contract-growth",
    step: 5,
    label: "Contract Growth",
    services: [
      {
        title: "Tender-Ready Digital Infrastructure",
        description:
          "Website and documentation structured specifically to support commercial and council contract applications.",
      },
      {
        title: "Contract Opportunity Monitoring",
        description:
          "Ongoing monitoring of relevant tender opportunities delivered directly to the client.",
      },
      {
        title: "Tender Tracking CRM",
        description:
          "Pipeline system to manage contract opportunities, submissions and follow-ups.",
      },
    ],
  },
  {
    id: "growth-management",
    step: 6,
    label: "Growth Management",
    services: [
      {
        title: "Automation & Workflow Setup",
        description:
          "Custom automation to streamline enquiries, follow-ups and internal processes.",
      },
      {
        title: "Performance Dashboard & Reporting",
        description:
          "Clear reporting on leads, pipeline value, conversion rates and growth metrics.",
      },
      {
        title: "Ongoing Growth Management",
        description:
          "Continuous optimisation of systems, automation and digital presence to support long-term scaling.",
      },
    ],
  },
]
