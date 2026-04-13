import type { Metadata } from 'next'
import Link from 'next/link'
import MarketplaceCatalog from '@/components/MarketplaceCatalog'

export const metadata: Metadata = {
  title: 'Products | Enterprise Software',
  description: 'From evidence-based clinical decision support to open data standardsAcidni builds the infrastructure that powers modern cannabis healthcare and commerce.',
}

const featuredProducts = [
  {
    name: 'ACCM - Copilot Chat Manager',
    tagline: 'Never lose a Copilot conversation again',
    description: 'A powerful VS Code extension for managing, organizing, searching, and exporting GitHub Copilot chat histories with word clouds and deep search.',
    href: '/products/accm',
    icon: '',
    badge: ' NEW',
    badgeClass: 'badge-new',
    gradient: 'from-acidni-500 to-accent-500',
    published: 'Available on GitHub',
    features: [
      'Dashboard with statistics & word clouds',
      'Deep search across all conversations',
      'Export to JSON, Markdown, or HTML',
      'Organize by workspace or project',
    ],
    cta: {
      primary: {
        text: 'View on GitHub',
        href: 'https://github.com/Acidni-LLC/copilot-chat-manager',
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
    icon: '',
    badge: ' NEW',
    badgeClass: 'badge-new',
    gradient: 'from-violet-500 to-fuchsia-500',
    published: 'Coming Soon to VS Marketplace',
    features: [
      'Per-chat and session cost estimates',
      'Model-aware pricing profiles',
      'Token usage and cost breakdowns',
      'Export summaries for reporting',
    ],
    cta: {
      primary: {
        text: 'Learn More',
        href: '/products/acca',
        external: false,
      },
      secondary: {
        text: 'Learn More',
        href: '/products/acca',
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
              We don't just consult  we build and ship our own products.
              Real software solving real problems.
            </p>
          </div>
        </div>
      </section>

      {/* VS Code Extensions - Featured */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="badge badge-new mb-4 inline-block">VS Code Marketplace</span>
            <h2 className="text-3xl font-bold mb-3">Published Extensions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Available now on the Visual Studio Marketplace  install and start using today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="card p-8 relative overflow-hidden group hover:border-acidni-500/30 transition-all duration-300"
              >
                <div className="absolute top-6 right-6">
                  <span className={`badge ${product.badgeClass}`}>{product.badge}</span>
                </div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-5`}>
                  <span className="text-3xl">{product.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-acidni-400 mb-3">{product.published}</p>
                <p className="text-lg text-slate-300 mb-2">{product.tagline}</p>
                <p className="text-slate-400 mb-5">{product.description}</p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={product.cta.primary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    {product.cta.primary.text}
                  </a>
                  <Link href={product.cta.secondary.href} className="btn-secondary text-sm">
                    {product.cta.secondary.text}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Product Catalog */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="badge badge-marketplace mb-4 inline-block">Azure Marketplace</span>
            <h2 className="text-3xl font-bold mb-3">
              Product <span className="gradient-text">Catalog</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade SaaS products available on the Azure Marketplace.
              Click any product to explore plans and pricing.
            </p>
          </div>
          <MarketplaceCatalog />
        </div>
      </section>

      {/* Why We Build Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Why We Build Products</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Our products serve two purposes: solving real problems and proving our engineering capabilities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-acidni-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl"></span>
              </div>
              <h3 className="font-semibold mb-2">Solve Real Problems</h3>
              <p className="text-slate-400 text-sm">
                Our products address genuine pain points we've encountered in our own work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl"></span>
              </div>
              <h3 className="font-semibold mb-2">Prove Our Skills</h3>
              <p className="text-slate-400 text-sm">
                Published products on VS Marketplace and Azure Marketplace demonstrate our capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl"></span>
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
