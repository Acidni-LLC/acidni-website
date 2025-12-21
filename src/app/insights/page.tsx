import type { Metadata } from 'next'
import Link from 'next/link'
import Parser from 'rss-parser'

export const metadata: Metadata = {
  title: 'Insights & News',
  description: 'Stay up-to-date with the latest in AI, Azure, cloud computing, and modern development from Microsoft and the Acidni team.',
}

interface FeedItem {
  title: string
  link: string
  pubDate: string
  contentSnippet?: string
  creator?: string
  source: string
  sourceColor: string
}

async function getNews(): Promise<FeedItem[]> {
  const parser = new Parser()
  
  const feeds = [
    { 
      url: 'https://azure.microsoft.com/en-us/blog/feed/', 
      source: 'Azure Blog',
      sourceColor: 'acidni'
    },
    { 
      url: 'https://devblogs.microsoft.com/feed/', 
      source: 'Microsoft DevBlogs',
      sourceColor: 'accent'
    },
  ]

  const allItems: FeedItem[] = []

  for (const feed of feeds) {
    try {
      const parsed = await parser.parseURL(feed.url)
      const items = parsed.items.slice(0, 5).map(item => ({
        title: item.title || 'Untitled',
        link: item.link || '#',
        pubDate: item.pubDate || new Date().toISOString(),
        contentSnippet: item.contentSnippet?.slice(0, 200) + '...',
        creator: item.creator,
        source: feed.source,
        sourceColor: feed.sourceColor,
      }))
      allItems.push(...items)
    } catch (error) {
      console.error(`Failed to fetch ${feed.source}:`, error)
    }
  }

  // Sort by date, newest first
  return allItems.sort((a, b) => 
    new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  ).slice(0, 12)
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export default async function InsightsPage() {
  const news = await getNews()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Insights &{' '}
              <span className="gradient-text">Tech News</span>
            </h1>
            <p className="text-xl text-slate-400">
              Stay current with the latest in AI, Azure, cloud computing, and modern development. 
              Curated from Microsoft's official channels and the Acidni team.
            </p>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              'Azure AI',
              'GitHub Copilot',
              'Cloud Architecture',
              'DevOps',
              'Machine Learning',
              'Serverless',
              'Microsoft Foundry',
              'Modern Development',
            ].map((topic) => (
              <span 
                key={topic} 
                className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Latest from Microsoft</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    item.sourceColor === 'acidni' 
                      ? 'bg-acidni-500/20 text-acidni-400' 
                      : 'bg-accent-500/20 text-accent-400'
                  }`}>
                    {item.source}
                  </span>
                  <span className="text-xs text-slate-500">{formatDate(item.pubDate)}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-acidni-400 transition-colors">
                  {item.title}
                </h3>
                {item.contentSnippet && (
                  <p className="text-slate-400 text-sm line-clamp-3 flex-grow">
                    {item.contentSnippet}
                  </p>
                )}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <span className="text-acidni-400 text-sm font-medium flex items-center gap-1">
                    Read more 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Acidni Expertise Areas */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Topics We Speak & Train On</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            These are the areas where Acidni has deep expertise. We provide training, 
            consulting, and speaking engagements on these topics.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Azure OpenAI, GPT models, GitHub Copilot, intelligent automation',
                icon: '🧠',
                link: '/services/ai-consulting',
              },
              {
                title: 'Azure Cloud',
                description: 'Cloud architecture, migration, serverless, Kubernetes, DevOps',
                icon: '☁️',
                link: '/services/app-modernization',
              },
              {
                title: 'Modern Development',
                description: 'Microservices, APIs, VS Code extensions, full-stack apps',
                icon: '💻',
                link: '/services/custom-development',
              },
              {
                title: 'CannaTech',
                description: 'Cannabis industry technology, compliance, data platforms',
                icon: '🌿',
                link: '/services/cannatech',
              },
            ].map((area) => (
              <Link 
                key={area.title}
                href={area.link}
                className="card card-hover p-6 text-center"
              >
                <span className="text-4xl mb-4 block">{area.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                <p className="text-slate-400 text-sm">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Want Us to Speak at Your Event?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            We're available for keynotes, technical sessions, workshops, and panel discussions 
            on AI, Azure, and modern development topics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/speaking" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
              Book a Speaker
            </Link>
            <Link href="/services/training" className="btn-secondary border-white/30 hover:bg-white/10">
              Explore Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
