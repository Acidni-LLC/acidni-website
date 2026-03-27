import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | AI Consulting & Application Modernization',
  description: 'AI consulting, legacy modernization, and custom development.',
}

const smallBusiness = [
  {
    name: 'AI Opportunity Assessment',
    duration: '1 week',
    description: 'Identify your highest-value AI opportunities. Walk away with a prioritized roadmap.',
  },
  {
    name: 'AI POC Sprint',
    duration: '2 weeks',
    description: 'Working prototype of your top AI use case. Prove value before committing.',
  },
  {
    name: 'Employee Productivity AI',
    duration: '3 weeks',
    description: 'Deploy Copilot, ChatGPT, or custom AI tools across your team.',
  },
  {
    name: 'Custom AI Solution',
    duration: '4-6 weeks',
    description: 'Production AI system tailored to your workflow.',
  },
  {
    name: 'Multi-Process Automation',
    duration: '8-10 weeks',
    description: 'Connect multiple systems with AI-powered automation.',
  },
  {
    name: 'AI Center of Excellence',
    duration: '12 weeks',
    description: 'Build internal AI capability with governance, training, and infrastructure.',
  },
]

const midMarket = [
  {
    name: 'AI Readiness Assessment',
    duration: '2 weeks',
    description: 'Comprehensive analysis of data, infrastructure, and organization readiness for AI.',
    deliverables: ['Data maturity assessment', 'Infrastructure review', 'Governance framework', '90-day implementation plan'],
  },
  {
    name: 'Legacy Modernization Roadmap',
    duration: '4 weeks',
    description: 'Complete application portfolio analysis with migration strategy and cost modeling.',
    deliverables: ['Application inventory', 'Technical debt assessment', 'Migration patterns', 'Business case with ROI'],
  },
  {
    name: 'AI Pilot Implementation',
    duration: '8 weeks',
    description: 'Production-ready AI solution with go/no-go checkpoints at weeks 2, 4, and 6.',
    deliverables: ['Working AI system', 'Integration with existing tools', 'User training', 'Operations runbook'],
  },
]

const enterprise = [
  {
    name: 'Discovery Workshop',
    duration: '2 days',
    description: 'Executive alignment session for complex transformations.',
  },
  {
    name: 'Multi-App Transformation',
    duration: '16-24 weeks',
    description: 'Modernize interconnected application portfolios.',
  },
  {
    name: 'Enterprise AI Platform',
    duration: '24-52 weeks',
    description: 'Organization-wide AI infrastructure and governance.',
  },
]

const services = [
  {
    title: 'AI Adoption & Integration',
    description: 'From strategy to production. We implement AI solutions that deliver measurable business value.',
    href: '/services/ai-consulting',
    icon: '',
    features: [
      'Azure OpenAI & Copilot integration',
      'Custom model development',
      'Intelligent automation',
      'AI strategy & roadmaps',
    ],
  },
  {
    title: 'Application Modernization',
    description: 'Transform legacy systems into modern cloud applications without disrupting operations.',
    href: '/services/app-modernization',
    icon: '',
    features: [
      'Cloud migration (Azure-first)',
      'Microservices architecture',
      'API modernization',
      'DevOps transformation',
    ],
  },
  {
    title: 'Custom Development',
    description: 'Full-stack applications, VS Code extensions, Azure Functions. We build what you need.',
    href: '/services/custom-development',
    icon: '',
    features: [
      'Full-stack applications',
      'VS Code extensions',
      'Azure serverless',
      'Power Platform solutions',
    ],
  },
  {
    title: 'CannaTech Consulting',
    description: 'Technology solutions for cannabis. We understand compliance, data, and market intelligence.',
    href: '/services/cannatech',
    icon: '',
    features: [
      'Dispensary data platforms',
      'Compliance systems',
      'COA extraction & analytics',
      'Seed-to-sale integrations',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-slate-400">
              Clear deliverables. Defined scope. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Small Business Packages */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-2">Small Business</h2>
          <p className="text-slate-400 mb-8">$1M-$50M revenue</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallBusiness.map((pkg) => (
              <div key={pkg.name} className="card p-6">
                <h3 className="font-semibold text-lg mb-4">{pkg.name}</h3>
                <p className="text-slate-500 text-sm mb-2">{pkg.duration}</p>
                <p className="text-slate-400 text-sm">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Market Packages */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-2">Mid-Market</h2>
          <p className="text-slate-400 mb-8">$50M-$500M revenue</p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {midMarket.map((pkg) => (
              <div key={pkg.name} className="card p-6 border border-acidni-500/20">
                <div className="mb-4">
                  <h3 className="font-semibold text-xl mb-2">{pkg.name}</h3>
                  <span className="text-slate-500 text-sm">{pkg.duration}</span>
                </div>
                <p className="text-slate-400 mb-4">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Packages */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-2">Enterprise</h2>
          <p className="text-slate-400 mb-8">$500M+ revenue</p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {enterprise.map((pkg) => (
              <div key={pkg.name} className="card p-6">
                <h3 className="font-semibold text-xl mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-sm mb-2">{pkg.duration}</p>
                <p className="text-slate-400">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Service Areas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card p-8">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="text-acidni-400 hover:text-acidni-300 font-medium">
                  Learn more 
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Schedule a free consultation. We will help you identify the right approach for your situation.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
