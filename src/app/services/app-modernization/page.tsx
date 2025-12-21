import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Application Modernization Services',
  description: 'Transform legacy systems into modern, scalable cloud applications. Azure migration, microservices architecture, and DevOps transformation.',
}

const capabilities = [
  {
    title: 'Legacy Assessment',
    description: 'Comprehensive analysis of your existing systems to identify modernization opportunities, risks, and the optimal migration path.',
    icon: '🔍',
  },
  {
    title: 'Cloud Migration',
    description: 'Azure-first migration strategies. Lift-and-shift, re-platform, or re-architect — we choose the right approach for each workload.',
    icon: '☁️',
  },
  {
    title: 'Microservices Architecture',
    description: 'Break monoliths into maintainable, scalable microservices. Domain-driven design, API gateways, and service mesh implementation.',
    icon: '🔧',
  },
  {
    title: 'API Modernization',
    description: 'Transform legacy interfaces into modern REST and GraphQL APIs. API management, versioning, and developer portal setup.',
    icon: '🔌',
  },
  {
    title: 'DevOps Transformation',
    description: 'Implement CI/CD pipelines, infrastructure as code, and GitOps practices. Azure DevOps and GitHub Actions expertise.',
    icon: '🔄',
  },
  {
    title: 'Containerization',
    description: 'Docker and Kubernetes expertise. Azure Kubernetes Service (AKS), container orchestration, and Helm charts.',
    icon: '📦',
  },
]

const migrationPaths = [
  {
    title: 'Rehost (Lift & Shift)',
    description: 'Move applications to Azure with minimal changes. Fast migration for systems that work well as-is.',
    best: 'Quick wins, stable legacy apps',
    icon: '🏗️',
  },
  {
    title: 'Replatform',
    description: 'Minor optimizations during migration. Switch to managed services like Azure SQL or App Service.',
    best: 'Cost optimization, reduced ops',
    icon: '🔄',
  },
  {
    title: 'Refactor',
    description: 'Redesign applications using cloud-native patterns. Microservices, serverless, and event-driven architecture.',
    best: 'Scalability, agility, innovation',
    icon: '⚡',
  },
  {
    title: 'Rebuild',
    description: 'Start fresh with modern architecture while preserving business logic. Maximum flexibility and capability.',
    best: 'Technical debt, new capabilities',
    icon: '🚀',
  },
]

export default function AppModernizationPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link 
              href="/services" 
              className="text-acidni-400 hover:text-acidni-300 text-sm font-medium mb-4 inline-flex items-center gap-2"
            >
              ← Back to Services
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 mt-4">
              Application{' '}
              <span className="gradient-text">Modernization</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Transform legacy systems into modern, scalable cloud applications — 
              without disrupting your business operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Modernizing
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Modernization Capabilities</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            End-to-end modernization services from assessment to production deployment.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="card card-hover p-8">
                <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{capability.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-slate-400">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Paths Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Migration Strategies</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            The right approach depends on your goals. We help you choose.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {migrationPaths.map((path) => (
              <div key={path.title} className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{path.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                    <p className="text-slate-400 mb-3">{path.description}</p>
                    <p className="text-sm">
                      <span className="text-accent-400 font-medium">Best for:</span>{' '}
                      <span className="text-slate-300">{path.best}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Technologies & Platforms</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Azure-native expertise with a modern technology stack.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Azure App Service',
              'Azure Kubernetes (AKS)',
              'Azure Functions',
              'Azure SQL',
              'Cosmos DB',
              'Azure Service Bus',
              'Azure DevOps',
              'GitHub Actions',
              'Docker',
              'Kubernetes',
              'Terraform',
              '.NET Core',
              'Node.js',
              'React',
              'Next.js',
            ].map((tech) => (
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

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Legacy Systems Holding You Back?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Let's assess your current applications and build a modernization roadmap 
            that fits your timeline and budget.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Schedule an Assessment
          </Link>
        </div>
      </section>
    </div>
  )
}
