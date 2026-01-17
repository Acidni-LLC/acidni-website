import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terprint Doctor Portal | FDA-Ready Cannabis Prescribing Platform with FHIR R4 EHR Integration',
  description: 'Clinical decision support platform with Epic, Cerner, Meditech, NextGen EHR connectivity via FHIR R4. Lab-verified COA data, AI recommendations, 6 D3 charts. ISO 13485, HIPAA compliant. Live at doctor.terprint.com.',
  keywords: ['cannabis prescribing software', 'medical marijuana doctor portal', 'FHIR R4 integration', 'Epic MyChart cannabis', 'Cerner cannabis integration', 'clinical decision support', 'COA data', 'terpene analysis', 'FDA SaMD compliance', 'HIPAA cannabis software', 'ISO 13485 healthcare software', 'evidence-based cannabis medicine'],
  openGraph: {
    title: 'Terprint Doctor Portal - FDA-Ready Cannabis Prescribing Platform',
    description: 'First cannabis CDS platform with FHIR R4 EHR integration. Connect Epic, Cerner, Meditech, NextGen. Live at doctor.terprint.com.',
    url: 'https://acidni.net/products/terprint-doctor-portal',
    type: 'website',
  },
}

const features = [
  {
    title: 'FHIR R4 + CDES-M EHR Integration',
    description: 'Seamlessly connect with Epic MyChart, Cerner, Meditech, and NextGen via SMART on FHIR 2.1. Cannabis recommendations flow directly into patient health timelines.',
    icon: '🏥',
  },
  {
    title: 'FDA SaMD Compliance Roadmap',
    description: 'Clinical Decision Support (CDS) platform pursuing FDA clearance. ISO 13485 QMS implementation and transparent methodology with research citations.',
    icon: '⚖️',
  },
  {
    title: '6 Interactive D3.js Clinical Charts',
    description: 'Symptom Efficacy Spider Chart, Terpene Radar, Symptom Trends, Product Match Bar Chart, Evidence Heatmap, and Cannabinoid Ratio Dial.',
    icon: '📊',
  },
  {
    title: 'AI-Powered Product Finder',
    description: 'Instant product matches with 0-100% scoring. Multi-level filters for symptom, terpene, THC:CBD ratio, dispensary, and price.',
    icon: '🎯',
  },
  {
    title: 'Lab-Verified COA Data',
    description: 'Real-time Certificate of Analysis from every Florida dispensary via Terprint Data API v2. Includes cannabinoids, terpenes, batch numbers, and PubMed citations.',
    icon: '🔬',
  },
  {
    title: 'Multi-Site Admin Dashboard',
    description: 'Manage all clinic locations, providers, and protocols from one interface. Role-based access with Admin, Doctor, Staff, and Readonly permissions.',
    icon: '🏢',
  },
]

const pricingTiers = [
  {
    name: 'Solo',
    price: '$79',
    period: '/month',
    description: 'Perfect for independent practitioners',
    providers: '1 provider',
    features: [
      'COA data search',
      'Terpene profiles',
      'Product comparison',
      'Basic reports',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Solo+',
    price: '$129',
    period: '/month',
    description: 'Add AI recommendations & patient portal',
    providers: '1 provider',
    features: [
      'Everything in Solo',
      'Patient Portal included',
      'AI recommendations',
      'Unlimited sites',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Clinic',
    price: '$299',
    period: '/month',
    description: 'For group practices (2-5 providers)',
    providers: '2-5 providers',
    features: [
      'Everything in Solo+',
      'Advanced analytics',
      'Practice insights',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For clinic chains & health systems',
    providers: '21+ providers',
    features: [
      'Volume pricing ($35/provider)',
      'Multi-site admin console',
      'API access & white-label',
      'EMR integration & SLA',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const differentiators = [
  {
    us: 'FHIR R4 + Epic/Cerner Integration',
    them: 'No EHR connectivity',
  },
  {
    us: 'FDA SaMD Compliance Roadmap',
    them: 'Consumer app, not clinical',
  },
  {
    us: 'Lab-verified COA data',
    them: 'Marketing estimates',
  },
  {
    us: '6 D3.js Clinical Charts',
    them: 'Basic lists',
  },
  {
    us: 'Per-provider pricing',
    them: 'Per-site pricing',
  },
]

export default function TerprintDoctorPortalPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link 
              href="/products" 
              className="text-acidni-400 hover:text-acidni-300 text-sm font-medium mb-4 inline-flex items-center gap-2"
            >
              ← Back to Products
            </Link>
            <div className="flex items-center gap-3 mt-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="text-3xl">🩺</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">Terprint Doctor Portal</h1>
                <p className="text-slate-400">FDA-Ready Clinical Decision Support</p>
              </div>
            </div>
            
            <span className="badge bg-emerald-500/20 text-emerald-300 mb-4">✓ Live Now at doctor.terprint.com</span>
            
            <p className="text-xl text-slate-300 mb-6">
              Transform Cannabis Medicine with Evidence-Based Precision
            </p>
            
            <p className="text-slate-400 mb-8">
              The first FDA-ready clinical decision support platform with FHIR R4 health record interoperability. 
              Connect your Epic, Cerner, or Meditech EHR and start prescribing smarter. 6 interactive D3 
              visualizations, AI-powered recommendations, and lab-verified COA data from every Florida dispensary.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://doctor.terprint.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Start Free Trial
              </a>
              <a 
                href="https://sales.terprint.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-sm text-cyan-400 mb-2">Epic MyChart</div>
              <p className="text-slate-400 text-xs">SMART on FHIR 2.1</p>
            </div>
            <div>
              <div className="text-sm text-cyan-400 mb-2">FHIR R4</div>
              <p className="text-slate-400 text-xs">CDES-M Extension</p>
            </div>
            <div>
              <div className="text-sm text-cyan-400 mb-2">6 D3 Charts</div>
              <p className="text-slate-400 text-xs">Clinical Insights</p>
            </div>
            <div>
              <div className="text-sm text-cyan-400 mb-2">Live Now</div>
              <p className="text-slate-400 text-xs">doctor.terprint.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Healthcare Providers Deserve Better Cannabis Tools</h2>
          <p className="text-slate-300 mb-8 text-center">
            You became a doctor to help patients, not to spend 15 minutes per consultation researching cannabis products. Most physicians lack:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 bg-red-500/5 border-red-500/20">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Lab-Verified Data</h3>
                  <p className="text-slate-400 text-sm">COA information scattered across dispensary websites</p>
                </div>
              </div>
            </div>
            <div className="card p-6 bg-red-500/5 border-red-500/20">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Evidence-Based Guidance</h3>
                  <p className="text-slate-400 text-sm">Limited access to peer-reviewed cannabis research</p>
                </div>
              </div>
            </div>
            <div className="card p-6 bg-red-500/5 border-red-500/20">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">EHR Integration</h3>
                  <p className="text-slate-400 text-sm">Cannabis recommendations don't sync to patient records</p>
                </div>
              </div>
            </div>
            <div className="card p-6 bg-red-500/5 border-red-500/20">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Regulatory Compliance</h3>
                  <p className="text-slate-400 text-sm">No clear FDA pathway for cannabis CDS software</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-cyan-400 font-semibold mt-8 text-lg">
            Terprint Doctor Portal solves all four.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <p className="text-slate-400">Florida Dispensary Coverage</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$79</div>
              <p className="text-slate-400">Starting Price / Month</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">14-day</div>
              <p className="text-slate-400">Free Trial, No Credit Card</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Platform Features</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Everything you need to make evidence-based cannabis recommendations.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card card-hover p-8">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Simple Per-Provider Pricing</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-4">
            No per-site fees. Unlimited locations on all plans. Annual billing saves ~21%.
          </p>
          <p className="text-cyan-400 text-center text-sm mb-12">
            🎉 Founder's pricing available for first 100 customers — locked in for life
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.name} 
                className={`card p-6 relative ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge bg-cyan-500 text-white text-xs">Most Popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-xs mb-4">{tier.providers}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400">{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={tier.name === 'Enterprise' ? 'https://sales.terprint.com' : 'https://doctor.terprint.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-2 px-4 rounded-lg font-medium transition-colors block ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Terprint Doctor Portal?</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            We built this because nothing else gives doctors real lab data.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                <h3 className="font-semibold text-cyan-400 mb-4">Terprint</h3>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg">
                <h3 className="font-semibold text-slate-400 mb-4">Others</h3>
              </div>
              {differentiators.map((diff, index) => (
                <>
                  <div key={`us-${index}`} className="p-3 bg-cyan-500/5 rounded flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-300">{diff.us}</span>
                  </div>
                  <div key={`them-${index}`} className="p-3 bg-slate-800/50 rounded flex items-center gap-2">
                    <svg className="w-5 h-5 text-slate-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-500">{diff.them}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make Evidence-Based Recommendations?
          </h2>
          <p className="text-cyan-100 max-w-2xl mx-auto mb-10">
            Start your 14-day free trial today. No credit card required. 
            See why doctors are switching to real lab data.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://doctor.terprint.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-slate-900 hover:bg-slate-100"
            >
              Start Free Trial
            </a>
            <a 
              href="https://sales.terprint.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white text-white hover:bg-white/10"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Products</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/products/terprint" className="card card-hover p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <h3 className="font-semibold">Terprint Data Platform</h3>
                  <p className="text-slate-400 text-sm">The data infrastructure powering Doctor Portal</p>
                </div>
              </div>
            </Link>
            <Link href="/services/cannatech" className="card card-hover p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <div>
                  <h3 className="font-semibold">CannaTech Services</h3>
                  <p className="text-slate-400 text-sm">Custom cannabis tech solutions</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
