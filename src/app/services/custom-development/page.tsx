import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Development Services',
  description: 'Full-stack application development, VS Code extensions, Azure Functions, and Power Platform solutions. We build software that solves real problems.',
}

const capabilities = [
  {
    title: 'Full-Stack Applications',
    description: 'Modern web applications built with React, Next.js, and .NET. Responsive, accessible, and performant.',
    icon: '🌐',
  },
  {
    title: 'VS Code Extensions',
    description: 'Custom VS Code extensions to supercharge developer productivity. Published and proven (see ACCM).',
    icon: '💻',
  },
  {
    title: 'Azure Functions & Serverless',
    description: 'Event-driven, scalable solutions. Azure Functions, Logic Apps, and Durable Functions expertise.',
    icon: '⚡',
  },
  {
    title: 'Power Platform Solutions',
    description: 'Low-code solutions with Power Apps, Power Automate, and Power BI. Rapid development for business users.',
    icon: '🔋',
  },
  {
    title: 'API Development',
    description: 'RESTful and GraphQL APIs. API design, documentation, versioning, and Azure API Management.',
    icon: '🔌',
  },
  {
    title: 'Integration Services',
    description: 'Connect your systems. Azure Integration Services, Logic Apps, Service Bus, and custom middleware.',
    icon: '🔗',
  },
]

const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['.NET Core', 'Node.js', 'Python', 'Azure Functions', 'FastAPI'],
  database: ['Azure SQL', 'Cosmos DB', 'PostgreSQL', 'MongoDB', 'Redis'],
  cloud: ['Azure App Service', 'AKS', 'Azure Storage', 'Key Vault', 'Application Insights'],
  devtools: ['VS Code', 'GitHub', 'Azure DevOps', 'Docker', 'Terraform'],
}

export default function CustomDevelopmentPage() {
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
              Custom{' '}
              <span className="gradient-text">Development</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              We don't just consult — we build. From VS Code extensions to enterprise applications, 
              our own products prove our engineering excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link href="/products" className="btn-secondary">
                See Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">What We Build</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            End-to-end development services for web, cloud, and developer tools.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="card card-hover p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{capability.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-slate-400">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Point - ACCM */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="card p-8 lg:p-12 bg-gradient-to-br from-acidni-500/10 to-accent-500/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="badge badge-new mb-4">Published on VS Marketplace</span>
                <h2 className="text-3xl font-bold mb-4">ACCM - Copilot Chat Manager</h2>
                <p className="text-slate-400 mb-6">
                  Our VS Code extension for managing GitHub Copilot conversations. 
                  This is the kind of quality we deliver — polished, useful, and production-ready.
                </p>
                <ul className="space-y-2 text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Dashboard with statistics & word clouds
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Deep search across all conversations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Export to JSON, Markdown, or HTML
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    Built with TypeScript & VS Code API
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    Install Extension
                  </a>
                  <Link href="/products/accm" className="btn-secondary text-sm">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-acidni-500 to-accent-500 flex items-center justify-center">
                  <span className="text-6xl">💬</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Tech Stack</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Modern tools and frameworks for building reliable software.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="font-semibold text-emerald-400 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-acidni-400 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-accent-400 mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.database.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-amber-400 mb-4">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.cloud.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6 md:col-span-2 lg:col-span-2">
              <h3 className="font-semibold text-rose-400 mb-4">Dev Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.devtools.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Let's discuss your requirements and see how we can help bring your vision to life.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
