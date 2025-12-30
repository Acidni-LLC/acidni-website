import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terprint - Cannabis Data Intelligence',
  description: 'Comprehensive data platform for Florida medical marijuana. Real-time menu aggregation, COA data extraction, terpene profiles, and analytics powered by Azure.',
  keywords: ['cannabis data', 'dispensary data', 'terpene profiles', 'COA extraction', 'medical marijuana', 'Florida MMJ'],
}

const features = [
  {
    title: 'Real-Time Menu Aggregation',
    description: 'We aggregate dispensary menus from across Florida in real-time, providing the most up-to-date product availability data.',
    icon: '🌿',
  },
  {
    title: 'COA Data Extraction',
    description: 'Automated extraction of Certificate of Analysis data including cannabinoid percentages, terpene profiles, and testing results.',
    icon: '🔬',
  },
  {
    title: 'Terpene Profiles',
    description: 'Detailed terpene breakdowns help patients understand the effects and benefits of different products.',
    icon: '🧪',
  },
  {
    title: 'Custom Power BI Visualizations',
    description: 'Including our proprietary Terpene Radar visualization for intuitive terpene profile comparison.',
    icon: '📊',
  },
  {
    title: 'Azure-Native Architecture',
    description: 'Built on Azure with enterprise-grade reliability, scalability, and security.',
    icon: '☁️',
  },
  {
    title: 'API Access',
    description: 'RESTful APIs for integrating dispensary and product data into your own applications.',
    icon: '🔌',
  },
]

const useCases = [
  {
    title: 'For Patients',
    description: 'Make informed decisions about medical marijuana products based on accurate terpene and cannabinoid data.',
    icon: '🏥',
  },
  {
    title: 'For Dispensaries',
    description: 'Understand competitive pricing, product trends, and market positioning.',
    icon: '🏪',
  },
  {
    title: 'For Researchers',
    description: 'Access aggregated data for cannabis research and analysis.',
    icon: '🔬',
  },
  {
    title: 'For Developers',
    description: 'Build applications using our comprehensive cannabis data APIs.',
    icon: '💻',
  },
]

const techStack = [
  'Azure Functions',
  'Azure SQL Database',
  'Azure Blob Storage',
  'Azure Data Factory',
  'Power BI',
  'Custom Power BI Visuals',
  'Python',
  '.NET Core',
  'React',
]

export default function TerprintPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link 
                href="/products" 
                className="text-acidni-400 hover:text-acidni-300 text-sm font-medium mb-4 inline-flex items-center gap-2"
              >
                ← Back to Products
              </Link>
              <div className="flex items-center gap-3 mt-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <span className="text-3xl">🌿</span>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold">Terprint</h1>
                  <p className="text-slate-400">Cannabis Data Intelligence</p>
                </div>
              </div>
              
              <span className="badge bg-amber-500/20 text-amber-300 mb-4">🚀 Coming Soon</span>
              
              <p className="text-xl text-slate-300 mb-6">
                The data platform powering smarter decisions in the Florida medical marijuana industry.
              </p>
              
              <p className="text-slate-400 mb-8">
                Terprint will aggregate dispensary menus, extract lab results from COAs, and provide 
                actionable analytics. Our platform will help patients make informed decisions and 
                businesses understand their market.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://sales.terprint.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-gradient-to-r from-emerald-500 to-teal-500"
                >
                  Join the Waitlist
                </a>
                <a 
                  href="/contact"
                  className="btn-secondary"
                >
                  Contact Us
                </a>
                <a 
                  href="/products/terprint/offers"
                  className="btn-secondary"
                >
                  View Terprint Products
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-[120px]">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Platform Features</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Comprehensive data infrastructure for the cannabis industry.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card card-hover p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Who Uses Terprint</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Data solutions for every stakeholder in the cannabis ecosystem.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{useCase.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{useCase.title}</h3>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terpene Radar Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Terpene Radar Visualization</h2>
              <p className="text-slate-400 mb-6">
                Our custom Power BI visualization makes it easy to understand and compare 
                terpene profiles at a glance. The radar chart displays multiple terpenes 
                simultaneously, helping users quickly identify dominant profiles.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  Compare multiple products side-by-side
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  Identify dominant terpenes instantly
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  Interactive filtering and drill-down
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  Custom Power BI visual
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">📊</span>
                  <p className="text-slate-400">Terpene Radar Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Built on Azure</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Enterprise-grade infrastructure for reliable, scalable data processing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://sales.terprint.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-6 flex items-center gap-4"
              >
                <span className="text-2xl">🚀</span>
                <div className="text-left">
                  <div className="font-semibold">Join the Waitlist</div>
                  <div className="text-sm text-slate-400">Be first to know when we launch</div>
                </div>
              </a>
              
              <a 
                href="/contact"
                className="card card-hover p-6 flex items-center gap-4"
              >
                <span className="text-2xl">💬</span>
                <div className="text-left">
                  <div className="font-semibold">Contact Us</div>
                  <div className="text-sm text-slate-400">Questions or partnerships</div>
                </div>
              </a>
              
              <Link 
                href="/products/terprint/offers"
                className="card card-hover p-6 flex items-center gap-4"
              >
                <span className="text-2xl">🧩</span>
                <div className="text-left">
                  <div className="font-semibold">Explore Terprint Products</div>
                  <div className="text-sm text-slate-400">See available and upcoming offers</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Be First to Access Cannabis Data Intelligence
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-10">
            Terprint is launching soon. Join the waitlist to be notified when the most 
            comprehensive cannabis data platform in Florida goes live.
          </p>
          <a 
            href="https://sales.terprint.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-slate-900 hover:bg-slate-100"
          >
            Join the Waitlist
          </a>
        </div>
      </section>
    </div>
  )
}
