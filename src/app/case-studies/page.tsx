import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real examples of Acidni LLC solutions. See how we\'ve helped solve problems with ACCM and Terprint.',
}

const caseStudies = [
  {
    title: 'ACCM - Solving the Copilot Chat History Problem',
    subtitle: 'VS Code Extension Development',
    problem: 'Developers using GitHub Copilot generate valuable conversations daily, but these chats are ephemeral. Once closed, the knowledge is lost forever. There was no way to search, organize, or export these conversations.',
    solution: 'We built ACCM (Acidni Copilot Chat Manager), a VS Code extension that captures, organizes, and makes Copilot conversations searchable. The extension includes a dashboard with word clouds, deep search capabilities, and multiple export formats.',
    results: [
      'Published on VS Code Marketplace',
      'Dashboard with statistics and word cloud visualizations',
      'Deep search across all historical conversations',
      'Export to JSON, Markdown, or HTML formats',
      'Organize chats by workspace or project',
    ],
    technologies: ['TypeScript', 'VS Code Extension API', 'Webview API', 'Chart.js'],
    icon: '💬',
    gradient: 'from-acidni-500 to-accent-500',
    href: '/products/accm',
    externalLink: 'https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager',
  },
  {
    title: 'Terprint - Cannabis Data Intelligence Platform',
    subtitle: 'Azure SaaS Development (Coming Soon)',
    problem: 'The Florida medical marijuana industry lacks comprehensive data infrastructure. Patients can\'t easily compare products by terpene profiles, and dispensaries have no way to understand market trends or competitive positioning.',
    solution: 'We\'re building Terprint, a comprehensive data platform that aggregates dispensary menus in real-time, extracts lab data from COAs (Certificates of Analysis), and provides actionable analytics through custom Power BI visualizations.',
    results: [
      'Launching soon on Azure',
      'Real-time menu aggregation from Florida dispensaries',
      'Automated COA data extraction for terpenes and cannabinoids',
      'Custom Power BI Terpene Radar visualization',
      'RESTful APIs for third-party integration',
    ],
    technologies: ['Azure Functions', 'Azure SQL', 'Power BI', 'Custom Visuals', 'Python', '.NET Core', 'React'],
    icon: '🌿',
    gradient: 'from-emerald-500 to-teal-500',
    href: '/products/terprint',
    externalLink: 'https://sales.terprint.com',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Case{' '}
              <span className="gradient-text">Studies</span>
            </h1>
            <p className="text-xl text-slate-400">
              Real problems. Real solutions. See how we build products that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div key={study.title} className="relative">
                {/* Case Study Header */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${study.gradient} flex items-center justify-center mb-6`}>
                      <span className="text-4xl">{study.icon}</span>
                    </div>
                    <p className="text-acidni-400 text-sm font-medium mb-2">{study.subtitle}</p>
                    <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                    <div className="flex flex-wrap gap-3">
                      <Link href={study.href} className="btn-primary text-sm">
                        View Product
                      </Link>
                      <a 
                        href={study.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm"
                      >
                        Visit Site →
                      </a>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                    <div className={`w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br ${study.gradient} bg-opacity-10 flex items-center justify-center`}>
                      <span className="text-[100px] opacity-30">{study.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Problem */}
                  <div className="card p-6">
                    <h3 className="font-semibold text-rose-400 mb-4 flex items-center gap-2">
                      <span>⚠️</span> The Problem
                    </h3>
                    <p className="text-slate-400 text-sm">{study.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="card p-6">
                    <h3 className="font-semibold text-acidni-400 mb-4 flex items-center gap-2">
                      <span>💡</span> Our Solution
                    </h3>
                    <p className="text-slate-400 text-sm">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="card p-6">
                    <h3 className="font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                      <span>✅</span> Results
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-8">
                  <p className="text-slate-500 text-sm mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Case Studies */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">More Coming Soon</h2>
            <p className="text-slate-400 mb-8">
              We're working with clients on exciting AI and modernization projects. 
              New case studies will be added as projects complete.
            </p>
            <div className="card p-8 bg-slate-800/30">
              <p className="text-slate-500 text-sm mb-4">Interested in being featured?</p>
              <Link href="/contact" className="text-acidni-400 hover:text-acidni-300 font-medium">
                Work with us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Let's discuss how we can help solve your technology challenges.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
