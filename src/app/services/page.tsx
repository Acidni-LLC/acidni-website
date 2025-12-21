import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Acidni LLC offers AI consulting, application modernization, and custom development services to help enterprises transform their technology.',
}

const services = [
  {
    title: 'AI Adoption & Integration',
    description: 'Navigate the AI landscape with confidence. We help enterprises implement practical AI solutions that drive real business value — from strategy to production.',
    href: '/services/ai-consulting',
    icon: '🧠',
    color: 'acidni',
    features: [
      'AI strategy & roadmap development',
      'Azure OpenAI & Copilot integration',
      'Machine learning model development',
      'Intelligent automation (RPA + AI)',
      'Data analytics platforms',
    ],
  },
  {
    title: 'Application Modernization',
    description: 'Transform legacy systems into modern, scalable cloud applications. We migrate your critical systems to Azure without disrupting your business.',
    href: '/services/app-modernization',
    icon: '🔄',
    color: 'accent',
    features: [
      'Legacy system assessment',
      'Cloud migration (Azure-first)',
      'Microservices architecture',
      'API modernization',
      'DevOps transformation',
    ],
  },
  {
    title: 'Custom Development',
    description: 'From VS Code extensions to full-stack applications, we build software that solves real problems. Our own published products prove our engineering excellence.',
    href: '/services/custom-development',
    icon: '💻',
    color: 'emerald',
    features: [
      'Full-stack application development',
      'VS Code extension development',
      'Azure Functions & serverless',
      'Power Platform solutions',
      'Integration services',
    ],
  },
  {
    title: 'CannaTech Consulting',
    description: 'Technology solutions for the cannabis industry. We understand the unique challenges of compliance, data fragmentation, and market intelligence in this emerging space.',
    href: '/services/cannatech',
    icon: '🌿',
    color: 'green',
    features: [
      'Dispensary data platforms',
      'Compliance & tracking systems',
      'COA extraction & analytics',
      'Market intelligence tools',
      'Seed-to-sale integrations',
    ],
  },
  {
    title: 'Training & Workforce Development',
    description: 'Upskill your teams with practical, hands-on training from experts who build production systems every day. We don\'t just teach theory — we share real-world experience.',
    href: '/services/training',
    icon: '🎓',
    color: 'amber',
    features: [
      'AI & Machine Learning training',
      'Azure Cloud certification prep',
      'Modern development practices',
      'Custom training programs',
      'On-site & virtual delivery',
    ],
  },
  {
    title: 'Public Speaking',
    description: 'Engage your audience with speakers who share hard-won insights from building real systems. Keynotes, workshops, and technical sessions that deliver value.',
    href: '/services/speaking',
    icon: '🎤',
    color: 'rose',
    features: [
      'Keynote presentations',
      'Technical deep-dives',
      'Hands-on workshops',
      'Panel discussions',
      'Webinars & podcasts',
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
              Technology Services That{' '}
              <span className="gradient-text">Drive Results</span>
            </h1>
            <p className="text-xl text-slate-400">
              From AI strategy to legacy modernization — we partner with enterprises 
              to deliver transformation that matters.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-${service.color}-500/20 flex items-center justify-center mb-6`}>
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-slate-400 text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-300">
                        <svg className={`w-5 h-5 text-${service.color}-500 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="btn-primary">
                    Learn More →
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`card p-12 bg-gradient-to-br from-${service.color}-500/10 to-transparent`}>
                    <div className="aspect-square flex items-center justify-center">
                      <span className="text-[120px] opacity-50">{service.icon}</span>
                    </div>
                  </div>
                </div>
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
            Let's have a conversation about your technology challenges. 
            We'll help you identify the right approach for your business.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
