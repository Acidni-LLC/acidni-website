import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Acidni LLC - a technology consulting company specializing in AI adoption, application modernization, and custom software development.',
}

const values = [
  {
    title: 'Practical Over Theoretical',
    description: 'We focus on solutions that deliver real business value. No science projects, just results.',
    icon: '🎯',
  },
  {
    title: 'Azure Excellence',
    description: 'Deep expertise in Microsoft Azure. We choose the right services for your needs.',
    icon: '☁️',
  },
  {
    title: 'Build to Ship',
    description: 'We don\'t just consult — we build and ship production software. Our own products prove it.',
    icon: '🚀',
  },
  {
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly. We stay current through constant learning and building.',
    icon: '📚',
  },
]

const expertise = [
  {
    category: 'AI & Machine Learning',
    skills: ['Azure OpenAI', 'GPT-4', 'Semantic Kernel', 'GitHub Copilot', 'Power Automate AI'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['Azure App Service', 'Azure Functions', 'AKS', 'Azure SQL', 'Cosmos DB'],
  },
  {
    category: 'Development',
    skills: ['.NET Core', 'TypeScript', 'React', 'Next.js', 'Python'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Azure DevOps', 'GitHub Actions', 'Docker', 'Terraform', 'VS Code Extensions'],
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

      {/* Mission Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-slate-400 text-lg mb-6">
              We help organizations adopt AI intelligently, modernize legacy applications, 
              and build software that scales. We believe technology transformation should 
              deliver measurable business value, not just impressive demos.
            </p>
            <p className="text-slate-400 mb-6">
              Founded with a focus on practical, production-ready solutions, Acidni LLC 
              brings deep Azure expertise and real product experience to every engagement. 
              Our own published products — ACCM on VS Marketplace with more VS Code extensions 
              in development — demonstrate the quality we deliver.
            </p>
            <p className="text-slate-300 font-medium">
              From strategy to code, we own the entire lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Values</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            The principles that guide how we work and what we deliver.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-acidni-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Expertise</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Technologies we work with every day.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area) => (
              <div key={area.category} className="card p-6">
                <h3 className="font-semibold text-acidni-400 mb-4">{area.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Proof of Excellence</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Our published products demonstrate our engineering capabilities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/products/accm" className="card card-hover p-8 block">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-acidni-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">ACCM</h3>
                    <span className="badge badge-new text-xs">NEW</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Published on VS Marketplace</p>
                  <p className="text-slate-300">
                    VS Code extension for managing GitHub Copilot conversations.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/products/terprint" className="card card-hover p-8 block">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">Terprint</h3>
                    <span className="badge bg-amber-500/20 text-amber-300 text-xs">Coming Soon</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">Cannabis Data Platform</p>
                  <p className="text-slate-300">
                    Real-time dispensary data aggregation and analytics.
                  </p>
                </div>
              </div>
            </Link>
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
            Whether you need AI strategy, application modernization, or custom development — 
            we're ready to help.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
