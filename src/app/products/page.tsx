import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products | Enterprise Software for the Cannabis Industry',
  description: 'From evidence-based clinical decision support to open data standards—Acidni builds the infrastructure that powers modern cannabis healthcare and commerce.',
}

const products = [
  {
    name: 'ACCM - Copilot Chat Manager',
    tagline: 'Never lose a Copilot conversation again',
    description: 'A powerful VS Code extension for managing, organizing, searching, and exporting GitHub Copilot chat histories with word clouds and deep search.',
    href: '/products/accm',
    icon: '💬',
    badge: '🆕 NEW',
    badgeClass: 'badge-new',
    gradient: 'from-acidni-500 to-accent-500',
    published: 'Published on VS Marketplace',
    features: [
      'Dashboard with statistics & word clouds',
      'Deep search across all conversations',
      'Export to JSON, Markdown, or HTML',
      'Organize by workspace or project',
    ],
    cta: {
      primary: {
        text: 'Install Extension',
        href: 'https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager',
        external: true,
      },
      secondary: {
        text: 'Learn More',
        href: '/products/accm',
      },
    },
  },
  {
    name: 'ACCA - Chat Cost Analyzer',
    tagline: 'Track AI token usage and costs',
    description:
      'Estimate and track AI chat token usage and costs across your VS Code AI workflows. Stay on budget with model-aware pricing and session totals.',
    href: '/products/acca',
    icon: '🧮',
    badge: '🆕 NEW',
    badgeClass: 'badge-new',
    gradient: 'from-violet-500 to-fuchsia-500',
    published: 'Published on VS Marketplace',
    features: [
      'Per-chat and session cost estimates',
      'Model-aware pricing profiles',
      'Token usage and cost breakdowns',
      'Export summaries for reporting',
    ],
    cta: {
      primary: {
        text: 'Install Extension',
        href: 'https://marketplace.visualstudio.com/items?itemName=AcidniLLC.ai-chat-cost-analyzer',
        external: true,
      },
      secondary: {
        text: 'Learn More',
        href: '/products/acca',
      },
    },
  },
  {
    name: 'Terprint Doctor Portal',
    tagline: 'FDA-Ready Clinical Decision Support with FHIR R4 EHR Integration',
    description:
      'Evidence-based cannabis prescribing platform connecting Epic, Cerner, Meditech, and NextGen EHRs. 6 interactive D3 visualizations, AI-powered recommendations, and lab-verified COA data—now live at doctor.terprint.com.',
    href: '/products/terprint-doctor-portal',
    icon: '🩺',
    badge: '✓ Live',
    badgeClass: 'bg-emerald-500/20 text-emerald-300',
    gradient: 'from-cyan-500 to-blue-500',
    published: 'Live at doctor.terprint.com',
    features: [
      '🏥 4 Major EHRs Supported',
      '📊 6 D3.js Clinical Charts',
      '⚖️ FDA SaMD Compliant',
      '🔒 HIPAA + ISO 13485',
    ],
    cta: {
      primary: {
        text: 'Start Free Trial',
        href: 'https://doctor.terprint.com',
        external: true,
      },
      secondary: {
        text: 'Learn More',
        href: '/products/terprint-doctor-portal',
      },
    },
  },
  {
    name: 'Acidni AI Chat Expert',
    tagline: 'Expert AI workflows for developers',
    description:
      'Advanced AI-assisted development workflows designed by Acidni. Opinionated prompts, tools, and workflows to accelerate enterprise-grade coding.',
    href: '/products/ai-chat-expert',
    icon: '🧠',
    badge: 'Coming Soon',
    badgeClass: 'bg-amber-500/20 text-amber-300',
    gradient: 'from-indigo-500 to-cyan-500',
    published: 'Launching Soon',
    features: [
      'Task-focused AI workflows',
      'Code-aware context shaping',
      'Enterprise-ready safety rails',
      'Seamless VS Code integration',
    ],
    cta: {
      primary: {
        text: 'Join Waitlist',
        href: '/contact',
      },
      secondary: {
        text: 'Learn More',
        href: '/products/ai-chat-expert',
      },
    },
  },
  {
    name: 'Terprint',
    tagline: 'Cannabis Data Intelligence',
    description: 'Comprehensive data platform for Florida medical marijuana. Real-time menu aggregation, COA data extraction, and analytics powered by Azure.',
    href: '/products/terprint',
    icon: '🌿',
    badge: 'Coming Soon',
    badgeClass: 'bg-amber-500/20 text-amber-300',
    gradient: 'from-emerald-500 to-teal-500',
    published: 'Launching Soon',
    features: [
      'Real-time dispensary menu data',
      'Automated COA extraction',
      'Custom Power BI visualizations',
      'Azure-native SaaS architecture',
    ],
    cta: {
      primary: {
        text: 'Join Waitlist',
        href: 'https://sales.terprint.com',
        external: true,
      },
      secondary: {
        text: 'Learn More',
        href: '/products/terprint',
      },
    },
  },
  {
    name: 'Text-a-Truck',
    tagline: 'Turn Any Driver Into a Safety Reporter',
    description: 'AI-powered hazard reporting that notifies your fleet in seconds—via SMS, voice, or web. When someone sees a hazard on your vehicle, they text a simple number. Our AI processes the report instantly. Your driver gets an alert.',
    href: '/products/text-a-truck',
    icon: '🚛',
    badge: 'Coming Soon',
    badgeClass: 'bg-amber-500/20 text-amber-300',
    gradient: 'from-orange-500 to-red-500',
    published: 'Launching Soon',
    features: [
      'Multi-channel intake (SMS, voice, web)',
      'Azure OpenAI GPT-4 processing',
      'Real-time driver notifications',
      'Fleet management portal',
    ],
    cta: {
      primary: {
        text: 'Join Waitlist',
        href: 'https://textatruck.com',
        external: true,
      },
      secondary: {
        text: 'Learn More',
        href: '/products/text-a-truck',
      },
    },
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Built by Us,{' '}
              <span className="gradient-text">Used by Many</span>
            </h1>
            <p className="text-xl text-slate-400">
              We don't just consult — we build and ship our own products. 
              Real software solving real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="card p-8 lg:p-12 relative overflow-hidden"
              >
                <div className="absolute top-6 right-6">
                  <span className={`badge ${product.badgeClass}`}>{product.badge}</span>
                </div>
                
                <div className="">
                  <div className="">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6`}>
                      <span className="text-4xl">{product.icon}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className={`text-sm mb-4 ${index === 0 ? 'text-acidni-400' : 'text-emerald-400'}`}>
                      {product.published}
                    </p>
                    <p className="text-xl text-slate-300 mb-4">{product.tagline}</p>
                    <p className="text-slate-400 mb-6">{product.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-slate-300">
                          <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={product.cta.primary.href}
                        target={product.cta.primary.external ? '_blank' : undefined}
                        rel={product.cta.primary.external ? 'noopener noreferrer' : undefined}
                        className={`btn-primary ${index === 1 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : ''}`}
                      >
                        {product.cta.primary.text}
                      </a>
                      <Link href={product.cta.secondary.href} className="btn-secondary">
                        {product.cta.secondary.text}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Build Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Why We Build Products</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Our products serve two purposes: solving real problems and proving our engineering capabilities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-acidni-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Solve Real Problems</h3>
              <p className="text-slate-400 text-sm">
                Our products address genuine pain points we've encountered in our own work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Prove Our Skills</h3>
              <p className="text-slate-400 text-sm">
                Published products on VS Marketplace and Azure Marketplace demonstrate our capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-semibold mb-2">Stay Current</h3>
              <p className="text-slate-400 text-sm">
                Building products keeps us sharp on the latest technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Want Us to Build Something for You?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Our product experience translates directly to client projects. 
            Let's discuss what you need built.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
