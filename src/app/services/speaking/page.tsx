import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Public Speaking & Conference Presentations',
  description: 'Book Acidni LLC experts for keynotes, conference sessions, workshops, and panel discussions on AI, Azure, modern development, and digital transformation.',
}

const speakingTopics = [
  {
    title: 'AI for the Enterprise',
    description: 'Practical strategies for adopting AI in enterprise environments. Moving beyond hype to real business value.',
    icon: '🧠',
    formats: ['Keynote', 'Breakout Session', 'Workshop'],
    audiences: ['CxOs', 'IT Leaders', 'Technical Teams'],
  },
  {
    title: 'Azure & Cloud Architecture',
    description: 'Building scalable, resilient systems on Azure. Real patterns from production deployments.',
    icon: '☁️',
    formats: ['Technical Deep-Dive', 'Workshop', 'Panel'],
    audiences: ['Architects', 'Developers', 'DevOps'],
  },
  {
    title: 'Application Modernization',
    description: 'Strategies for migrating legacy systems. The good, the bad, and the gotchas we\'ve learned.',
    icon: '🔄',
    formats: ['Case Study', 'Panel', 'Breakout Session'],
    audiences: ['IT Directors', 'Tech Leads', 'Enterprise Architects'],
  },
  {
    title: 'GitHub Copilot & AI-Assisted Development',
    description: 'Maximizing developer productivity with AI coding assistants. Best practices and real workflows.',
    icon: '🤖',
    formats: ['Demo-Heavy Session', 'Workshop', 'Lunch & Learn'],
    audiences: ['Developers', 'Engineering Managers', 'Tech Leads'],
  },
  {
    title: 'Cannabis Technology & Data',
    description: 'Technology challenges and opportunities in the cannabis industry. Compliance, data, and market intelligence.',
    icon: '🌿',
    formats: ['Industry Keynote', 'Panel', 'Breakout'],
    audiences: ['Cannabis Industry Professionals', 'Tech Vendors', 'Investors'],
  },
  {
    title: 'Building Products as a Consultancy',
    description: 'How we built Terprint and ACCM while running a consulting business. Product development lessons learned.',
    icon: '🚀',
    formats: ['Fireside Chat', 'Keynote', 'Panel'],
    audiences: ['Entrepreneurs', 'Consultants', 'Product Managers'],
  },
]

const speakingFormats = [
  {
    title: 'Keynotes',
    description: 'Inspiring, high-energy presentations for large audiences. Set the tone for your event.',
    duration: '30-60 minutes',
    icon: '🎤',
  },
  {
    title: 'Breakout Sessions',
    description: 'Deep-dive technical sessions with demos and practical takeaways.',
    duration: '45-90 minutes',
    icon: '📊',
  },
  {
    title: 'Workshops',
    description: 'Hands-on, interactive sessions where attendees build and learn by doing.',
    duration: 'Half-day to full-day',
    icon: '🛠️',
  },
  {
    title: 'Panel Discussions',
    description: 'Engage in thoughtful discourse with industry peers on relevant topics.',
    duration: '45-60 minutes',
    icon: '👥',
  },
  {
    title: 'Webinars',
    description: 'Virtual presentations for global audiences. Live or pre-recorded options.',
    duration: '30-60 minutes',
    icon: '💻',
  },
  {
    title: 'Podcast Appearances',
    description: 'Share insights as a guest on your podcast. Expert perspective on tech topics.',
    duration: '30-90 minutes',
    icon: '🎙️',
  },
]

const pastEvents = [
  'Microsoft Partner Events',
  'Azure User Groups',
  'Industry Conferences',
  'Corporate Summits',
  'Developer Meetups',
  'Executive Roundtables',
]

export default function SpeakingPage() {
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
              Public Speaking &{' '}
              <span className="gradient-text">Thought Leadership</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Engage your audience with speakers who don't just present slides — they share 
              hard-won insights from building real systems and shipping real products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Speaker
              </Link>
              <Link href="/services/training" className="btn-secondary">
                ← Training Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Speaking Topics</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Topics we're passionate about and have deep experience delivering.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakingTopics.map((topic) => (
              <div key={topic.title} className="card card-hover p-8">
                <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{topic.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                <p className="text-slate-400 mb-4">{topic.description}</p>
                
                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <div>
                    <span className="text-xs font-semibold text-accent-400 uppercase tracking-wider">Formats:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {topic.formats.map((format) => (
                        <span key={format} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent-400 uppercase tracking-wider">Best For:</span>
                    <p className="text-sm text-slate-400 mt-1">{topic.audiences.join(' • ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Engagement Formats</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            From intimate workshops to keynote stages — we adapt to your event's needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakingFormats.map((format) => (
              <div key={format.title} className="card p-6 border-l-4 border-accent-500">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{format.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{format.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{format.description}</p>
                    <span className="text-xs text-accent-400">{format.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Us */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Book Acidni Speakers?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Practitioner Perspective</h3>
                    <p className="text-slate-400">We build systems for a living. Every talk includes real examples from our consulting and products.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Audience-Tailored Content</h3>
                    <p className="text-slate-400">We customize every presentation for your specific audience, industry, and event theme.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Actionable Takeaways</h3>
                    <p className="text-slate-400">Attendees leave with concrete next steps, not just inspiration. Practical over theoretical.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Engaging Delivery</h3>
                    <p className="text-slate-400">Dynamic presentations with demos, stories, and audience interaction. Never death by PowerPoint.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-8 bg-gradient-to-br from-accent-500/10 to-transparent">
              <h3 className="text-xl font-semibold mb-6 text-center">Event Types We've Spoken At</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {pastEvents.map((event) => (
                  <span 
                    key={event} 
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium"
                  >
                    {event}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <p className="text-slate-400 text-sm italic">
                  "Technical depth with business context — exactly what our audience needed."
                </p>
                <p className="text-slate-500 text-xs mt-2">— Event Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Planning Your Next Event?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Whether it's a technical conference, corporate summit, or industry event — 
            let's discuss how we can deliver value to your audience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
              Book a Speaker
            </Link>
            <Link href="/services/training" className="btn-secondary border-white/30 hover:bg-white/10">
              Explore Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
