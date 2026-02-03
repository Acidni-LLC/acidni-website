import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Jamieson Gill & Acidni LLC | Enterprise Architecture & Cloud Migration',
  description: 'Learn about Acidni LLC - enterprise architecture, legacy modernization, and custom software development. 25+ years of Fortune 500 experience including Hurricane Sandy disaster recovery and Orion Space Program.',
}

const credentials = [
  'Microsoft Gold Certified Partner (2007)',
  'Cisco Small Business Award Winner (2008)',
  'BS Management Information Systems - RIT',
  '25+ years enterprise architecture',
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
  { name: 'ACCM', desc: 'VS Code Marketplace - 1,000+ active users', color: 'acidni' },
  { name: 'Terprint', desc: '15 Azure Marketplace SaaS offers', color: 'emerald' },
  { name: 'GridSight', desc: 'Solar analytics platform', color: 'amber' },
  { name: 'Text-a-Truck', desc: 'Fleet safety reporting', color: 'orange' },
]

const keyAccomplishments = [
  {
    title: 'Hurricane Sandy - NYC & NJ',
    year: '2012-2014',
    role: 'Chief Architect',
    description: 'Chief Architect for NYC Hurricane Sandy recovery system of record. NYC DOI saved $30 million in fraud, waste and abuse from information obtained from the system. Member of NJ DCA Commissioner\'s "Tiger Team" to accelerate the RREM home repair process.',
  },
  {
    title: 'Lockheed Martin - Orion Space Program',
    year: '2015',
    role: 'Staff Software Engineer',
    description: 'Staff Software Engineer on the Orion Space Program. Managed Developer Operations Tools for Test Labs and Integrated Product Teams. Managed development tooling for Flight Software, Ground Software, and Simulation systems.',
  },
  {
    title: 'Humana - Enterprise Architecture',
    year: '2020-2023',
    role: 'Enterprise Architect',
    description: 'Enterprise Architect for OKR tracking system, ArMet architecture metrics visualization, and ServiceNow/Orbus IServer integration for alignment and modernization.',
  },
  {
    title: 'Eastdil Secured',
    year: '2019-2020',
    role: 'Application Architect',
    description: 'Application Architect for migrating divested company applications from Wells Fargo private cloud to Azure public cloud. Architected migrations for application components including mail and file systems.',
  },
  {
    title: 'T-Mobile Integration',
    year: '2016-2018',
    role: 'Software Architect',
    description: 'Developed DriveDollar, a multi-tier cloud application integrating with T-Mobile SyncUP Drive devices for fleet driving management, tax compliance, and QuickBooks integration.',
  },
]

const reasons = [
  {
    title: 'Fortune 500 Experience',
    description: 'Hurricane Sandy Chief Architect. $30M fraud prevention for NYC. Orion Space Program at Lockheed Martin. Real pressure, real delivery.',
  },
  {
    title: 'We Build, Not Just Consult',
    description: 'ACCM on VS Marketplace. Terprint on Azure Marketplace. GridSight, Text-a-Truck. Real products with real users prove we can deliver.',
  },
  {
    title: 'Fixed-Price Transparency',
    description: 'Clear deliverables, defined scope, honest pricing. No surprise bills. No endless discovery phases. You know what you get.',
  },
  {
    title: 'Microsoft Partner Heritage',
    description: 'Achieved Microsoft Gold Certified Partner status in 2007. Proven track record with Microsoft technologies and Azure cloud migrations.',
  },
  {
    title: 'End-to-End Ownership',
    description: 'Strategy to production. No handoffs to junior teams. The architect who plans the work delivers the work.',
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
              Enterprise AI adoption and application modernization. From $1M startups to Fortune 500.
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
              <strong>Jamieson Gill</strong> is the founder and principal architect of Acidni LLC.
              25+ years of IT experience as a leader delivering results for companies as: virtual CIO/CTO,
              enterprise architect, solution architect, full stack software developer, and systems engineer.
            </p>

            <div className="card p-6 mb-8 border-l-4 border-acidni-500">
              <h3 className="text-xl font-semibold mb-3 text-acidni-400">Career Highlights</h3>
              <p className="text-slate-400">
                Before founding Acidni, Jamieson built <strong>Savitas Strategic Software Solutions</strong>,
                achieving <strong>Microsoft Gold Certified Partner</strong> status in 2007 with the ISV Solutions Competency.
                Earlier career included data conversions for insurance companies and building enterprise solutions
                for Fortune 500 clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-acidni-400 mb-4">Credentials</h3>
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
                <h3 className="font-semibold text-acidni-400 mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((comp) => (
                    <span key={comp.name} className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                      {comp.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Accomplishments */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Key Accomplishments</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Real projects, real impact, verified results
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {keyAccomplishments.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-acidni-400">{item.title}</h3>
                  <span className="px-2 py-1 rounded bg-slate-700 text-slate-300 text-xs">{item.year}</span>
                  <span className="px-2 py-1 rounded bg-acidni-500/20 text-acidni-400 text-xs">{item.role}</span>
                </div>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build-First Philosophy */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">We Build, Not Just Consult</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Every recommendation is backed by production code. These are our products, live in market.
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
            When you hire Acidni, you work with architects who <strong>build and operate the same systems we recommend</strong>.
          </p>
        </div>
      </section>

      {/* Why Clients Choose Acidni */}
      <section className="section-padding bg-slate-900">
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
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Service Portfolio</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Fixed-price packages for every stage of growth
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-acidni-400">Small Business</h3>
              <p className="text-slate-400 text-sm mb-2">$1M-$50M revenue</p>
              <p className="text-2xl font-bold text-white mb-4">$5K - $75K</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>AI Opportunity Assessment</li>
                <li>POC Sprint (2 weeks)</li>
                <li>Employee Productivity AI</li>
                <li>Custom AI Solutions</li>
              </ul>
            </div>
            <div className="card p-6 border border-acidni-500/30">
              <h3 className="text-xl font-semibold mb-4 text-acidni-400">Mid-Market</h3>
              <p className="text-slate-400 text-sm mb-2">$50M-$500M revenue</p>
              <p className="text-2xl font-bold text-white mb-4">$35K - $195K</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>AI Readiness Assessment ($35K)</li>
                <li>Legacy Modernization Roadmap ($65K)</li>
                <li>AI Pilot Implementation ($120K)</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-acidni-400">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-2">$500M+ revenue</p>
              <p className="text-2xl font-bold text-white mb-4">$200K - $800K+</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>Discovery Workshop ($15K)</li>
                <li>Multi-App Transformations</li>
                <li>AI Centers of Excellence</li>
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
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl text-slate-300 italic mb-6">
              "Too many AI projects fail because consultants have never shipped production AI.
              Too many modernization efforts collapse because the architect never migrated a legacy app.
              At Acidni, we only recommend what we've built, deployed, and operated ourselves."
            </blockquote>
            <p className="text-acidni-400 font-semibold">- Jamieson Gill, Founder</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Talk?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Whether you're a startup exploring AI or an enterprise modernizing legacy systems,
            we have the experience and products to prove we can deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
              Schedule a Consultation
            </Link>
            <Link href="/products" className="btn-secondary border-white text-white hover:bg-white/10">
              See Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

