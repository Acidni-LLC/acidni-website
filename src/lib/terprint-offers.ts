export type Offer = {
  slug: string
  name: string
  tagline: string
  summary: string
  description: string
  icon?: string
  status?: 'available' | 'coming-soon' | 'preview'
  audience?: string[]
  features?: { title: string; description: string }[]
  pricing?: { plan: string; price?: string; details?: string }[]
  requirements?: string[]
  links?: {
    website?: string
    marketplace?: string
    sales?: string
    docs?: string
    contact?: string
  }
}

// TODO: Replace placeholder offers with the real Azure Marketplace offers.
// Populate this list based on terprint-marketplace/marketplace-offers/offers.
const manualOffers: Offer[] = [
  {
    slug: 'menu-aggregation-api',
    name: 'Menu Aggregation API',
    tagline: 'Real-time Florida dispensary menus via a clean API',
    summary:
      'Aggregate and query up-to-date dispensary product menus across Florida with normalized structures and identifiers.',
    description:
      'Terprint continuously ingests dispensary menus across Florida, normalizes product data, and exposes it via a developer-friendly REST API. Use it for price tracking, inventory monitoring, and competitive analysis.',
    icon: '🧩',
    status: 'preview',
    audience: ['Developers', 'Dispensaries', 'Analysts'],
    features: [
      { title: 'Normalized Data', description: 'Consistent product schemas across sources.' },
      { title: 'Near Real-Time Ingest', description: 'Frequent refresh cycles with change tracking.' },
      { title: 'Query and Filter', description: 'Flexible filters by brand, strain, form, and price.' },
    ],
    pricing: [
      { plan: 'Developer', price: '$99/mo', details: '5k requests, fair-use cache' },
      { plan: 'Business', price: '$499/mo', details: '100k requests, priority support' },
    ],
    links: {
      website: 'https://terprint.com',
      sales: 'https://sales.terprint.com',
      marketplace: 'https://azuremarketplace.microsoft.com/marketplace/apps/acidni.terprint-menu-aggregation',
      contact: '/contact',
    },
  },
  {
    slug: 'coa-extraction-service',
    name: 'COA Extraction Service',
    tagline: 'Automated certificate-of-analysis parsing and enrichment',
    summary:
      'Extract cannabinoid percentages and terpene profiles from lab COAs with resilient PDF/HTML parsing and validation.',
    description:
      'Upload or point us at COAs and we will extract structured cannabinoid and terpene data, validate units, and enrich records with synonyms and standard identifiers. Integrate with QA and labeling workflows.',
    icon: '🔬',
    status: 'coming-soon',
    audience: ['Labs', 'Dispensaries', 'Regulatory'],
    features: [
      { title: 'Multi-format Parsing', description: 'Handles PDF, HTML, and image-based scans.' },
      { title: 'Unit Normalization', description: 'Consistent units across labs and vendors.' },
      { title: 'Integrity Checks', description: 'Detects outliers and missing fields.' },
    ],
    pricing: [
      { plan: 'Per-Document', price: '$0.25/doc', details: 'Volume discounts available' },
    ],
    links: {
      website: 'https://terprint.com',
      sales: 'https://sales.terprint.com',
      marketplace: 'https://azuremarketplace.microsoft.com/marketplace/apps/acidni.terprint-coa-extraction',
      contact: '/contact',
    },
  },
  {
    slug: 'terpene-radar-visual',
    name: 'Terpene Radar (Power BI Visual)',
    tagline: 'Visualize terpene profiles at a glance',
    summary:
      'A custom Power BI visual for quickly comparing terpene distribution across products and batches.',
    description:
      'Drop-in Power BI visual that renders radar charts for terpene sets, supports interactive filtering, and highlights dominant profiles to aid decision-making and education.',
    icon: '📊',
    status: 'available',
    audience: ['Analysts', 'Educators', 'Business Users'],
    features: [
      { title: 'Interactive', description: 'Cross-filtering with other visuals and slicers.' },
      { title: 'Configurable', description: 'Customize terpene lists and thresholds.' },
      { title: 'Theme-aware', description: 'Adapts to Power BI report themes.' },
    ],
    pricing: [
      { plan: 'Per Seat', price: '$19/user/mo', details: 'Commercial license' },
    ],
    links: {
      website: 'https://terprint.com',
      sales: 'https://sales.terprint.com',
      marketplace: 'https://azuremarketplace.microsoft.com/marketplace/apps/acidni.terprint-terpene-radar',
      docs: 'https://terprint.com/docs/terpene-radar',
      contact: '/contact',
    },
  },
  {
    slug: 'dispensary-analytics-suite',
    name: 'Dispensary Analytics Suite',
    tagline: 'Price, inventory, and trend analytics dashboards',
    summary:
      'Out-of-the-box dashboards powered by Terprint data for competitive insights and operations decisions.',
    description:
      'Pre-built Power BI dashboards for dispensaries with curated metrics covering pricing trends, product availability, and regional market movement. Delivered with Azure-native infrastructure.',
    icon: '📈',
    status: 'preview',
    audience: ['Dispensaries', 'Executives'],
    features: [
      { title: 'Competitive Index', description: 'Benchmark prices and promotions vs competitors.' },
      { title: 'Inventory Signals', description: 'Detect stockouts and replenishment windows.' },
      { title: 'Regional Trends', description: 'Spot shifts by city and time-of-day.' },
    ],
    pricing: [
      { plan: 'Starter', price: '$299/mo', details: 'Single location' },
      { plan: 'Enterprise', price: 'Custom', details: 'Multi-location, SSO, support' },
    ],
    links: {
      website: 'https://terprint.com',
      sales: 'https://sales.terprint.com',
      marketplace: 'https://azuremarketplace.microsoft.com/marketplace/apps/acidni.terprint-dispensary-analytics',
      contact: '/contact',
    },
  },
]

import { generatedOffers } from './terprint-offers.generated'

export const offers: Offer[] = (generatedOffers && generatedOffers.length ? generatedOffers : manualOffers) as Offer[]

export function getOfferBySlug(slug: string): Offer | undefined {
  return offers.find((o) => o.slug === slug)
}
