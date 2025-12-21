import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Training & Workforce Development',
  description: 'Acidni LLC provides enterprise training programs to upskill your workforce in AI, Azure, modern development practices, and emerging technologies.',
}

const trainingPrograms = [
  {
    title: 'AI & Machine Learning Fundamentals',
    description: 'Demystify AI for your team. From understanding LLMs to practical prompt engineering and Azure OpenAI integration.',
    icon: '🧠',
    topics: ['AI fundamentals & terminology', 'Prompt engineering best practices', 'Azure OpenAI services', 'GitHub Copilot productivity'],
    duration: '1-3 days',
    audience: 'Developers, analysts, technical managers',
  },
  {
    title: 'Azure Cloud Mastery',
    description: 'Comprehensive Azure training from fundamentals to advanced architecture. Prepare your team for cloud-native development.',
    icon: '☁️',
    topics: ['Azure fundamentals & services', 'Infrastructure as Code (Bicep/ARM)', 'Azure Functions & serverless', 'DevOps & CI/CD pipelines'],
    duration: '2-5 days',
    audience: 'Developers, IT professionals, architects',
  },
  {
    title: 'Modern Development Practices',
    description: 'Transform how your team builds software. Modern architectures, clean code, and DevOps culture.',
    icon: '💻',
    topics: ['Microservices architecture', 'API design & REST best practices', 'Test-driven development', 'Git workflows & code review'],
    duration: '2-4 days',
    audience: 'Development teams, tech leads',
  },
  {
    title: 'CannaTech Industry Training',
    description: 'Specialized training for cannabis industry technology challenges. Compliance, data systems, and market intelligence.',
    icon: '🌿',
    topics: ['Cannabis data compliance', 'Seed-to-sale system integration', 'COA data extraction', 'Analytics & market intelligence'],
    duration: '1-2 days',
    audience: 'Cannabis tech teams, compliance officers',
  },
  {
    title: 'Power Platform & Low-Code',
    description: 'Empower citizen developers with Power Platform skills. Build apps, automate workflows, and create reports without code.',
    icon: '⚡',
    topics: ['Power Apps fundamentals', 'Power Automate workflows', 'Power BI dashboards', 'Dataverse & data modeling'],
    duration: '2-3 days',
    audience: 'Business analysts, citizen developers',
  },
  {
    title: 'Custom Training Programs',
    description: 'Tailored training designed around your specific technology stack, projects, and team skill gaps.',
    icon: '🎯',
    topics: ['Customized curriculum', 'Your codebase & systems', 'Hands-on labs', 'Follow-up coaching'],
    duration: 'Flexible',
    audience: 'Your specific teams',
  },
]

const deliveryFormats = [
  {
    title: 'On-Site Workshops',
    description: 'Intensive, hands-on training at your location. Maximum engagement with your teams and systems.',
    icon: '🏢',
  },
  {
    title: 'Virtual Instructor-Led',
    description: 'Live, interactive training sessions delivered remotely. Same quality, global accessibility.',
    icon: '💻',
  },
  {
    title: 'Hybrid Programs',
    description: 'Combine self-paced learning modules with live instructor sessions for flexibility.',
    icon: '🔄',
  },
  {
    title: 'Lunch & Learn Series',
    description: 'Bite-sized training sessions that fit into busy schedules. Build skills incrementally.',
    icon: '🍽️',
  },
]

const benefits = [
  'Customized content for your tech stack',
  'Real-world exercises using your systems',
  'Hands-on labs and projects',
  'Post-training support and resources',
  'Skills assessments and certifications prep',
  'Train-the-trainer options available',
]

export default function TrainingPage() {
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
              Training &{' '}
              <span className="gradient-text">Workforce Development</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Upskill your workforce with practical, hands-on training from experts who build 
              production systems every day. We don't just teach theory — we share real-world experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Training Catalog
              </Link>
              <Link href="/services/speaking" className="btn-secondary">
                Public Speaking →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Training Programs</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Expert-led training in the technologies and practices that drive modern enterprise success.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => (
              <div key={program.title} className="card card-hover p-8 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-acidni-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{program.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-slate-400 mb-4 flex-grow">{program.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-acidni-400 mb-2">Topics Covered:</h4>
                  <ul className="space-y-1">
                    {program.topics.map((topic) => (
                      <li key={topic} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-acidni-500 mt-1">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-700 mt-auto">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Duration: <span className="text-slate-300">{program.duration}</span></span>
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    For: <span className="text-slate-300">{program.audience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Flexible Delivery Options</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Training that fits your team's schedule, location, and learning preferences.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFormats.map((format) => (
              <div key={format.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-acidni-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{format.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{format.title}</h3>
                <p className="text-slate-400 text-sm">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Train with Acidni?</h2>
              <p className="text-slate-400 mb-8">
                Our trainers aren't just educators — they're practitioners who build production systems 
                every day. We bring real-world experience, current best practices, and practical 
                examples from our own consulting work and published products.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-acidni-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-12 bg-gradient-to-br from-acidni-500/10 to-transparent">
              <div className="text-center">
                <div className="text-6xl mb-6">🎓</div>
                <div className="text-5xl font-bold gradient-text mb-2">100%</div>
                <p className="text-slate-400">Practical, hands-on learning</p>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-sm text-slate-500 italic">
                    "Not theory from textbooks — real patterns from production systems"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Upskill Your Team?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Let's discuss your training needs. Whether it's a single workshop or an ongoing 
            development program, we'll design curriculum that drives real skill growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
              Request Training Quote
            </Link>
            <Link href="/services/speaking" className="btn-secondary border-white/30 hover:bg-white/10">
              Explore Speaking Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
