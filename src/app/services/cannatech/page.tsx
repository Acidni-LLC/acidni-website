import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CannaTech Consulting | Cannabis Technology Solutions',
  description: 'Technology consulting for the cannabis industry. Data platforms, compliance systems, dispensary technology, and analytics solutions from Acidni LLC.',
  keywords: [
    'cannabis technology',
    'cannatech consulting',
    'dispensary technology',
    'cannabis compliance software',
    'cannabis data analytics',
    'marijuana technology solutions',
    'cannabis point of sale',
    'seed to sale tracking',
    'cannabis business intelligence',
  ],
}

const capabilities = [
  {
    title: 'Data & Analytics Platforms',
    description: 'Build comprehensive data platforms that aggregate menu data, lab results, terpene profiles, and market intelligence.',
    icon: '📊',
  },
  {
    title: 'Compliance & Tracking Systems',
    description: 'Implement seed-to-sale tracking, state reporting integrations, and compliance automation to keep your operations legal.',
    icon: '✅',
  },
  {
    title: 'Dispensary Technology',
    description: 'Point-of-sale systems, inventory management, e-commerce solutions, and customer loyalty platforms.',
    icon: '🏪',
  },
  {
    title: 'Lab Data Integration',
    description: 'COA extraction, cannabinoid/terpene data processing, and lab result verification systems.',
    icon: '🔬',
  },
  {
    title: 'Market Intelligence',
    description: 'Competitive analysis tools, pricing optimization, and demand forecasting for cannabis businesses.',
    icon: '📈',
  },
  {
    title: 'Custom Visualizations',
    description: 'Power BI dashboards, terpene radar charts, and custom reporting for data-driven decisions.',
    icon: '🎯',
  },
]

const industries = [
  'Dispensaries & Retailers',
  'Cultivators & Growers',
  'Processors & Manufacturers',
  'Testing Laboratories',
  'Distribution Companies',
  'Cannabis Tech Startups',
  'Investment Firms',
  'Regulatory Bodies',
]

export default function CannaTechPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 gradient-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
              <span>🌿</span>
              <span>Cannabis Industry Specialists</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              CannaTech Consulting
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Technology consulting for the cannabis industry. We understand the unique challenges 
              of cannabis businesses — from compliance complexities to data fragmentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-emerald-500 hover:bg-emerald-600">
                Discuss Your Project
              </Link>
              <Link href="/products/terprint" className="btn-secondary">
                See Terprint (Coming Soon) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why CannaTech Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Cannabis Needs <span className="text-emerald-400">Specialized Tech Partners</span>
              </h2>
              <p className="text-slate-400 mb-6">
                The cannabis industry faces unique technology challenges that generic consulting firms don't understand:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">⚖️</span>
                  <div>
                    <strong className="text-white">Complex Compliance</strong>
                    <p className="text-slate-400 text-sm">Every state has different regulations, reporting requirements, and tracking mandates.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">🔗</span>
                  <div>
                    <strong className="text-white">Fragmented Data</strong>
                    <p className="text-slate-400 text-sm">Dispensary menus, lab results, and sales data live in silos across different platforms.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">🏦</span>
                  <div>
                    <strong className="text-white">Banking Limitations</strong>
                    <p className="text-slate-400 text-sm">Traditional payment processors and financial tools often don't serve cannabis businesses.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 text-xl">📊</span>
                  <div>
                    <strong className="text-white">Market Intelligence Gap</strong>
                    <p className="text-slate-400 text-sm">Limited access to aggregated market data makes strategic decisions difficult.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card p-8 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/30">
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">🌿</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Proven Experience</h3>
                <p className="text-slate-400 mb-6">
                  We're building Terprint — a production data platform for the Florida medical marijuana market.
                </p>
                <Link href="/products/terprint" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  Learn about Terprint →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              CannaTech Capabilities
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From data aggregation to compliance automation — we build technology solutions 
              tailored for cannabis operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="card p-6 hover:border-emerald-500/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{capability.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                <p className="text-slate-400">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Who We Work With
            </h2>
            <p className="text-slate-400">
              Technology solutions for every segment of the cannabis supply chain.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div 
                key={industry}
                className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terprint Showcase */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="card p-8 lg:p-12 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4">
                  Coming Soon
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Terprint: Florida Cannabis Data Platform
                </h3>
                <p className="text-slate-300 mb-6">
                  We're building Terprint from the ground up — a comprehensive platform that will aggregate 
                  dispensary menus, extract COA lab data, and provide analytics for the Florida 
                  medical marijuana market.
                </p>
                <ul className="space-y-2 mb-6 text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    Real-time menu aggregation from all Florida dispensaries
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    Automated COA data extraction and processing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    Terpene profiles and cannabinoid analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    Custom Power BI visualizations (Terpene Radar)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    Azure-native architecture
                  </li>
                </ul>
                <Link href="/products/terprint" className="btn-primary bg-emerald-500 hover:bg-emerald-600">
                  Learn More About Terprint
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 rounded-3xl bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-8xl">🌿</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-900 to-green-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Modernize Your Cannabis Operations?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Whether you're a dispensary looking for better analytics, or a startup building 
            the next cannabis platform — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
              Schedule a Consultation
            </Link>
            <Link href="/products/terprint" className="btn-secondary border-white/30 hover:bg-white/10">
              Learn About Terprint
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
