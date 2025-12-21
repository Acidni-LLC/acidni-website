import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Consulting Services',
  description: 'Acidni LLC helps enterprises adopt AI practically and profitably. Azure OpenAI integration, machine learning solutions, and intelligent automation.',
}

const capabilities = [
  {
    title: 'AI Strategy & Roadmap',
    description: 'Define your AI vision with a practical, phased roadmap that aligns with business objectives and delivers measurable ROI.',
    icon: '🎯',
  },
  {
    title: 'Azure OpenAI Integration',
    description: 'Leverage GPT-4, embeddings, and Azure AI services to build intelligent applications and automate complex workflows.',
    icon: '☁️',
  },
  {
    title: 'GitHub Copilot Adoption',
    description: 'Maximize developer productivity with GitHub Copilot. We help teams adopt AI-assisted coding practices effectively.',
    icon: '🤖',
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Build custom ML models for prediction, classification, and optimization. From proof-of-concept to production deployment.',
    icon: '🧮',
  },
  {
    title: 'Intelligent Automation',
    description: 'Combine RPA with AI to automate complex business processes. Document processing, decision automation, and more.',
    icon: '⚡',
  },
  {
    title: 'Data Analytics Platforms',
    description: 'Turn data into insights with custom analytics solutions. Power BI dashboards, data pipelines, and AI-driven analytics.',
    icon: '📊',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We assess your current state, identify AI opportunities, and understand your business objectives.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We develop a practical AI roadmap with prioritized use cases, technology recommendations, and success metrics.',
  },
  {
    step: '03',
    title: 'Pilot',
    description: 'We build a proof-of-concept to validate feasibility, demonstrate value, and refine the approach.',
  },
  {
    step: '04',
    title: 'Scale',
    description: 'We deploy to production, integrate with existing systems, and establish governance for ongoing success.',
  },
]

export default function AIConsultingPage() {
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
              AI Adoption &{' '}
              <span className="gradient-text">Integration</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Navigate the AI landscape with confidence. We implement practical AI solutions 
              that drive real business value — not science projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your AI Journey
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
          <h2 className="text-3xl font-bold mb-4 text-center">Our AI Capabilities</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            From strategy to implementation, we cover the full spectrum of enterprise AI needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div key={capability.title} className="card card-hover p-8">
                <div className="w-12 h-12 rounded-lg bg-acidni-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{capability.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-slate-400">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Approach</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            A proven methodology that minimizes risk and maximizes value.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={phase.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-acidni-500 to-transparent" />
                )}
                <div className="text-5xl font-bold text-acidni-500/30 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-slate-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Technologies We Use</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Azure-first, but framework-agnostic when it makes sense.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Azure OpenAI',
              'GPT-4',
              'Azure AI Services',
              'GitHub Copilot',
              'Azure Machine Learning',
              'Semantic Kernel',
              'LangChain',
              'Power Automate',
              'Azure Functions',
              'Cosmos DB',
              'Power BI',
              'Python',
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
            Ready to Embrace AI?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Let's discuss how AI can transform your business. Whether you're just starting 
            or looking to scale existing initiatives, we can help.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
