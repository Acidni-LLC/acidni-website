// ============================================================================
// Marketplace Product Catalog Data
// ============================================================================
// Curated product catalog sourced from Azure Marketplace offer definitions
// in acidni-publisher-portal/marketplace-offers/offers/
// ============================================================================

export type MarketplaceProduct = {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  category: string
  status: 'live' | 'preview' | 'coming-soon'
  isFeatured: boolean
  hasFreeTrial: boolean
  pricing: {
    startingPrice: string
    billingFrequency: string
    isCustomPricing: boolean
  }
  plans: {
    name: string
    price: string
    frequency: string
    features: string[]
    isPopular?: boolean
  }[]
  links: {
    marketplace?: string
    website?: string
    sales?: string
    docs?: string
  }
  gradient: string
}

export type ProductCategory = {
  id: string
  name: string
  icon: string
  count: number
}

/**
 * Curated marketplace products for the Acidni website.
 * Only includes customer-facing products (not internal services or private plans).
 */
export const marketplaceProducts: MarketplaceProduct[] = [
  {
    id: 'gridsight',
    name: 'GridSight',
    tagline: 'Unified Azure infrastructure monitoring and cost optimization',
    description:
      'AI-powered platform that automates Azure monitoring, delivering 71x ROI by replacing manual infrastructure oversight. Real-time visibility, cost optimization, and anomaly detection across all your Azure subscriptions.',
    icon: '📡',
    category: 'Infrastructure',
    status: 'preview',
    isFeatured: true,
    hasFreeTrial: true,
    pricing: {
      startingPrice: '$99',
      billingFrequency: '/mo',
      isCustomPricing: false,
    },
    plans: [
      {
        name: 'Free Trial',
        price: '$0',
        frequency: '14 days',
        features: [
          'Up to 5 Azure subscriptions',
          '100 monitored resources',
          'Basic alerting',
          'Email support',
        ],
      },
      {
        name: 'Starter',
        price: '$99',
        frequency: '/mo',
        features: [
          'Up to 10 Azure subscriptions',
          '500 monitored resources',
          'Standard alerting',
          'Cost optimization recommendations',
          'Email support',
        ],
      },
      {
        name: 'Professional',
        price: '$199',
        frequency: '/mo',
        features: [
          'Up to 50 Azure subscriptions',
          '2,500 monitored resources',
          'AI-powered cost insights',
          'Custom dashboards',
          'Anomaly detection',
          'Priority support',
        ],
        isPopular: true,
      },
      {
        name: 'Enterprise',
        price: '$499',
        frequency: '/mo',
        features: [
          'Up to 200 Azure subscriptions',
          '10,000 monitored resources',
          'Unlimited AI insights',
          'Compliance reporting',
          'RBAC and SSO',
          'Dedicated support & SLA',
        ],
      },
    ],
    links: {
      website: 'https://gridsight.acidni.net',
      sales: 'https://sales.gridsight.acidni.net',
      docs: 'https://docs.gridsight.acidni.net',
    },
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'acidni-sdo-saas',
    name: 'Acidni AI SDO',
    tagline: 'AI-powered Software Development Organization as a Service',
    description:
      'Transform your software delivery with an AI-driven development organization. Autonomous agents handle requirements, architecture, coding, testing, and deployment — governed by enterprise-grade controls.',
    icon: '🤖',
    category: 'Developer Tools',
    status: 'preview',
    isFeatured: true,
    hasFreeTrial: true,
    pricing: {
      startingPrice: '$499',
      billingFrequency: '/mo',
      isCustomPricing: false,
    },
    plans: [
      {
        name: 'Starter',
        price: '$499',
        frequency: '/mo',
        features: [
          'Up to 3 projects',
          '5 AI agent slots',
          'Basic workflows',
          'GitHub integration',
          'Email support',
        ],
      },
      {
        name: 'Professional',
        price: '$1,499',
        frequency: '/mo',
        features: [
          'Up to 10 projects',
          '15 AI agent slots',
          'Advanced workflows',
          'Azure DevOps + GitHub',
          'Custom agent roles',
          'Priority support',
        ],
        isPopular: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        frequency: '',
        features: [
          'Unlimited projects',
          'Unlimited agents',
          'Custom governance',
          'SSO & RBAC',
          'Dedicated instance',
          'SLA guarantee',
        ],
      },
    ],
    links: {
      website: '/products/ai-sdo',
      sales: 'https://sales.sdo.acidni.net',
    },
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'terprint-data-api',
    name: 'Terprint Data Platform',
    tagline: 'Comprehensive cannabis data intelligence API',
    description:
      'Real-time dispensary menu aggregation, normalized product data, and analytics for the Florida medical marijuana market. Power your applications with lab-verified COA data and pricing intelligence.',
    icon: '🌿',
    category: 'Data & Analytics',
    status: 'preview',
    isFeatured: true,
    hasFreeTrial: true,
    pricing: {
      startingPrice: '$49',
      billingFrequency: '/mo',
      isCustomPricing: false,
    },
    plans: [
      {
        name: 'Developer',
        price: '$49',
        frequency: '/mo',
        features: [
          '5,000 API calls/month',
          'Menu data access',
          'Basic product search',
          'Community support',
        ],
      },
      {
        name: 'Professional',
        price: '$199',
        frequency: '/mo',
        features: [
          '50,000 API calls/month',
          'Full menu + COA data',
          'Real-time webhooks',
          'Historical data access',
          'Priority support',
        ],
        isPopular: true,
      },
      {
        name: 'Enterprise',
        price: '$499',
        frequency: '/mo',
        features: [
          'Unlimited API calls',
          'Custom data feeds',
          'Dedicated endpoints',
          'SLA guarantee',
          'Dedicated support',
        ],
      },
    ],
    links: {
      website: 'https://terprint.acidni.net',
      sales: 'https://sales.terprint.com',
    },
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'terprint-doctor-portal',
    name: 'Terprint Doctor Portal',
    tagline: 'FDA-ready clinical decision support with EHR integration',
    description:
      'Evidence-based cannabis prescribing platform for healthcare providers. FHIR R4 integration with Epic, Cerner, Meditech, and NextGen. 6 interactive clinical visualizations and AI-powered recommendations.',
    icon: '🩺',
    category: 'Healthcare',
    status: 'live',
    isFeatured: true,
    hasFreeTrial: true,
    pricing: {
      startingPrice: '$79',
      billingFrequency: '/mo',
      isCustomPricing: false,
    },
    plans: [
      {
        name: 'Solo Practice',
        price: '$79',
        frequency: '/mo',
        features: [
          '1 provider license',
          'Basic patient lookup',
          'COA data access',
          'Email support',
        ],
      },
      {
        name: 'Clinic',
        price: '$299',
        frequency: '/mo',
        features: [
          'Up to 5 providers',
          'EHR integration',
          'AI recommendations',
          'Clinical visualizations',
          'Priority support',
        ],
        isPopular: true,
      },
      {
        name: 'Enterprise',
        price: '$999',
        frequency: '/mo',
        features: [
          'Unlimited providers',
          'Full EHR suite',
          'Custom integrations',
          'HIPAA audit trail',
          'Dedicated support & SLA',
        ],
      },
    ],
    links: {
      website: 'https://doctor.terprint.com',
      sales: 'https://sales.terprint.com',
    },
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'textatruck',
    name: 'Text-a-Truck',
    tagline: 'AI-powered fleet safety hazard reporting',
    description:
      'Turn any driver into a safety reporter. When someone spots a hazard on your vehicle, they text a simple number. AI processes the report instantly and your driver gets an alert — via SMS, voice, or web.',
    icon: '🚛',
    category: 'Fleet & Safety',
    status: 'coming-soon',
    isFeatured: false,
    hasFreeTrial: true,
    pricing: {
      startingPrice: '$99',
      billingFrequency: '/mo',
      isCustomPricing: false,
    },
    plans: [
      {
        name: 'Starter',
        price: '$99',
        frequency: '/mo',
        features: [
          'Up to 10 vehicles',
          'SMS + voice intake',
          'Driver notifications',
          'Basic reporting',
        ],
      },
      {
        name: 'Fleet',
        price: '$299',
        frequency: '/mo',
        features: [
          'Up to 50 vehicles',
          'Web portal',
          'AI classification',
          'Analytics dashboard',
          'Priority support',
        ],
        isPopular: true,
      },
      {
        name: 'Enterprise',
        price: '$799',
        frequency: '/mo',
        features: [
          'Unlimited vehicles',
          'Custom integrations',
          'API access',
          'SSO & RBAC',
          'SLA guarantee',
        ],
      },
    ],
    links: {
      website: 'https://textatruck.com',
      sales: 'https://textatruck.com',
    },
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 'acidni-solar-portal',
    name: 'Acidni Solar Portal',
    tagline: 'Solar energy monitoring and reporting dashboard',
    description:
      'Real-time monitoring and analytics for solar energy systems. Track production, consumption, and savings with AI-powered forecasting and automated utility reporting.',
    icon: '☀️',
    category: 'Energy',
    status: 'preview',
    isFeatured: false,
    hasFreeTrial: true,
    pricing: {
      startingPrice: '$49',
      billingFrequency: '/mo',
      isCustomPricing: false,
    },
    plans: [
      {
        name: 'Residential',
        price: '$49',
        frequency: '/mo',
        features: [
          'Single system monitoring',
          'Production tracking',
          'Savings calculator',
          'Mobile app access',
        ],
      },
      {
        name: 'Commercial',
        price: '$199',
        frequency: '/mo',
        features: [
          'Multi-site monitoring',
          'AI forecasting',
          'Automated reporting',
          'API integration',
          'Priority support',
        ],
        isPopular: true,
      },
    ],
    links: {
      website: 'https://solar.acidni.net',
    },
    gradient: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'marketplace-publisher-toolkit',
    name: 'Marketplace Publisher Toolkit',
    tagline: 'Streamline your Azure Marketplace publishing workflow',
    description:
      'Tools and templates for ISVs publishing SaaS offers on Azure Marketplace. Manage offers, plans, pricing, and publishing — all from a unified interface with Partner Center API integration.',
    icon: '🛠️',
    category: 'Developer Tools',
    status: 'preview',
    isFeatured: false,
    hasFreeTrial: true,
    pricing: {
      startingPrice: '$99',
      billingFrequency: '/mo',
      isCustomPricing: false,
    },
    plans: [
      {
        name: 'Starter',
        price: '$99',
        frequency: '/mo',
        features: [
          'Up to 5 offers',
          'Offer builder UI',
          'Publishing workflow',
          'Basic analytics',
        ],
      },
      {
        name: 'Professional',
        price: '$299',
        frequency: '/mo',
        features: [
          'Unlimited offers',
          'Partner Center API',
          'Automated publishing',
          'Revenue analytics',
          'Priority support',
        ],
        isPopular: true,
      },
    ],
    links: {
      website: 'https://marketplace.acidni.net',
    },
    gradient: 'from-slate-500 to-zinc-600',
  },
]

/**
 * Product categories derived from the catalog
 */
export const productCategories: ProductCategory[] = [
  { id: 'all', name: 'All Products', icon: '🏢', count: marketplaceProducts.length },
  { id: 'Infrastructure', name: 'Infrastructure', icon: '📡', count: marketplaceProducts.filter(p => p.category === 'Infrastructure').length },
  { id: 'Developer Tools', name: 'Developer Tools', icon: '🛠️', count: marketplaceProducts.filter(p => p.category === 'Developer Tools').length },
  { id: 'Data & Analytics', name: 'Data & Analytics', icon: '📊', count: marketplaceProducts.filter(p => p.category === 'Data & Analytics').length },
  { id: 'Healthcare', name: 'Healthcare', icon: '🩺', count: marketplaceProducts.filter(p => p.category === 'Healthcare').length },
  { id: 'Fleet & Safety', name: 'Fleet & Safety', icon: '🚛', count: marketplaceProducts.filter(p => p.category === 'Fleet & Safety').length },
  { id: 'Energy', name: 'Energy', icon: '☀️', count: marketplaceProducts.filter(p => p.category === 'Energy').length },
]

export function getFeaturedProducts(): MarketplaceProduct[] {
  return marketplaceProducts.filter(p => p.isFeatured)
}

export function getProductsByCategory(category: string): MarketplaceProduct[] {
  if (category === 'all') return marketplaceProducts
  return marketplaceProducts.filter(p => p.category === category)
}

export function getProductById(id: string): MarketplaceProduct | undefined {
  return marketplaceProducts.find(p => p.id === id)
}
