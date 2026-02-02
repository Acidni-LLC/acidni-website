import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Jamieson Webster & Acidni LLC',
  description: 'Learn about Acidni LLC - enterprise AI consulting, legacy modernization, and custom software development. Azure Gold Partner with 25+ years of Fortune 500 experience.',
}

const credentials = [
  'Microsoft Azure Gold Partner',
  'Azure AI Engineer Associate',
  'Azure Solutions Architect Expert',
  '25+ years hands-on architecture',
]

const competencies = [
  { name: 'Enterprise AI Adoption', icon: '' },
  { name: 'Legacy Modernization', icon: '' },
  { name: 'Cloud Migration', icon: '' },
  { name: 'Cannabis Technology', icon: '' },
  { name: 'Azure Marketplace SaaS', icon: '' },
  { name: 'Renewable Energy Analytics', icon: '' },
]

const products = [
  { name: 'ACCM', desc: 'VS Code Marketplace with 1,000+ users', color: 'acidni' },
  { name: 'Terprint', desc: '15+ live Azure Marketplace SaaS offers', color: 'emerald' },
  { name: 'GridSight', desc: 'Solar analytics platform', color: 'amber' },
  { name: 'Publisher Toolkit', desc: 'Marketplace automation', color: 'violet' },
]

const reasons = [
  {
    title: 'Battle-Tested Experience',
    description: 'Proven in demanding environments, including disaster recovery, cannabis data pipelines, and Azure Marketplace submissions.',
  },
  {
    title: 'End-to-End Delivery',
    description: 'From strategic planning to production deployment, Acidni covers the full lifecycle. Handoffs are minimized; scope is end-to-end.',
  },
  {
    title: 'Transparent Economics',
    description: 'Fixed-price packages with clear deliverables; disciplined scope management.',
  },
  {
    title: 'Product-Backed Credibility',
    description: 'Active products in market demonstrate expertise better than any case study.',
  },
  {
    title: 'Azure Gold Partner Access',
    description: 'Direct access to Microsoft resources, support, and co-sell opportunities.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About{' '}
              <span className="gradient-text">Acidni LLC</span>
            </h1>
            <p className="text-xl text-slate-400">
              Empowering enterprises to embrace the future through intelligent AI adoption
              and seamless application modernization.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">The Founder</h2>
            <p className="text-slate-300 text-lg mb-6">
              <strong>Jamieson Webster</strong> is the founder and principal architect of Acidni LLC, 
              bringing over 25 years of enterprise architecture experience to help organizations 
              navigate AI adoption, legacy modernization, and complex software transformations.
            </p>
            
            <div className="card p-6 mb-8 border-l-4 border-acidni-500">
              <h3 className="text-xl font-semibold mb-3 text-acidni-400">Hurricane Sandy Chief Architect</h3>
              <p className="text-slate-400">
                Jamieson has delivered mission-critical systems for Fortune 500 enterprises and startups. 
                During <strong>Hurricane Sandy in 2012</strong>, he served as <strong>Chief Architect</strong> for 
                one of the largest U.S. disaster recovery operations, managing the technological response 
                for a Fortune 500 serving millions of customers.
              </p>
              <p className="text-slate-300 mt-4 font-medium">
                That experience shaped his approach: <strong>pragmatic, resilient, and built to last.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-acidni-400 mb-4">Certifications & Partnerships</h3>
                <ul className="space-y-2">
                  {credentials.map((cred) => (
                    <li key={cred} className="flex items-center gap-2 text-slate-300">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-acidni-400 mb-4">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((comp) => (
                    <span key={comp.name} className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                      {comp.icon} {comp.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build-First Philosophy */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Build-First Philosophy</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Acidni <strong>builds production systems</strong>; recommendations are backed by code, 
            deployed infrastructure, and operational experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="card p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-slate-400 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-300 text-center mt-8 max-w-2xl mx-auto">
            When you engage Acidni for AI or SaaS development, you work with a team that 
            <strong> uses and operates the same systems we deliver</strong>.
          </p>
        </div>
      </section>

      {/* Why Clients Choose Acidni */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Clients Choose Acidni</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            From $1M startups to Fortune 500 enterprises
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="card p-6">
                <div className="w-10 h-10 rounded-full bg-acidni-500/20 flex items-center justify-center mb-4">
                  <span className="text-acidni-400 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-slate-400 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers Overview */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">From Small Business to Fortune 500</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Acidni serves organizations across the entire spectrum
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-acidni-400">Small Business</h3>
              <p className="text-slate-400 text-sm mb-2">$1M-$50M revenue</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li> Quick-start AI ($5K-$15K)</li>
                <li> Custom AI solutions ($25K-$75K)</li>
                <li> Employee productivity automation</li>
              </ul>
            </div>
            <div className="card p-6 border border-acidni-500/30">
              <h3 className="text-xl font-semibold mb-4 text-acidni-400">Mid-Market</h3>
              <p className="text-slate-400 text-sm mb-2">$50M-$500M revenue</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li> AI readiness assessments ($35K)</li>
                <li> Legacy modernization roadmaps ($65K)</li>
                <li> AI pilot implementations ($120K)</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-acidni-400">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-2">$500M+ revenue</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li> Discovery workshops ($15K)</li>
                <li> Multi-app transformations ($200K-$800K+)</li>
                <li> AI centers of excellence</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl text-slate-300 italic mb-6">
              "Too many AI projects fail because they're led by people who've never shipped production AI systems. 
              Too many modernization efforts collapse because the consultant has never actually migrated a legacy application. 
              At Acidni, we only recommend what we've proven worksbecause we've built it, deployed it, and lived with the consequences."
            </blockquote>
            <p className="text-acidni-400 font-semibold"> Jamieson Webster, Founder</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Whether you're a $1M startup exploring AI or a Fortune 500 enterprise modernizing legacy systems, 
            Acidni has the experience, credibility, and proven delivery capability to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
              Schedule a Free Consultation
            </Link>
            <Link href="/products" className="btn-secondary border-white text-white hover:bg-white/10">
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
