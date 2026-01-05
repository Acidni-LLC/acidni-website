import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ACCM - Copilot Chat Manager',
  description: 'A powerful VS Code extension for managing, organizing, searching, and exporting GitHub Copilot chat histories with word clouds and deep search.',
  keywords: ['VS Code extension', 'GitHub Copilot', 'Copilot chat manager', 'chat history', 'developer tools'],
}

const features = [
  {
    title: 'Dashboard View',
    description: 'Get a bird\'s eye view of all your Copilot conversations with statistics, trends, and beautiful word cloud visualizations.',
    icon: '📊',
  },
  {
    title: 'Deep Search',
    description: 'Search across all your conversations with context highlighting. Find that one code snippet from weeks ago in seconds.',
    icon: '🔍',
  },
  {
    title: 'Multiple Export Formats',
    description: 'Export your conversations to JSON for archival, Markdown for documentation, or HTML for sharing.',
    icon: '📤',
  },
  {
    title: 'Import & Backup',
    description: 'Import previously exported chats with smart duplicate detection. Never lose your AI pair-programming knowledge.',
    icon: '📥',
  },
  {
    title: 'Organize by Workspace',
    description: 'Automatically organize conversations by workspace or project. Filter views to see only what\'s relevant.',
    icon: '🗂️',
  },
  {
    title: 'Word Cloud Visualization',
    description: 'Visualize your most discussed topics with interactive word clouds. Understand patterns in your AI conversations.',
    icon: '☁️',
  },
]

const installation = [
  { step: '1', text: 'Open VS Code' },
  { step: '2', text: 'Press Ctrl+Shift+X (or Cmd+Shift+X on Mac)' },
  { step: '3', text: 'Search for "Copilot Chat Manager"' },
  { step: '4', text: 'Click Install' },
]

export default function ACCMPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link 
              href="/products" 
              className="text-acidni-400 hover:text-acidni-300 text-sm font-medium mb-4 inline-flex items-center gap-2"
            >
              ← Back to Products
            </Link>
            <div className="flex items-center gap-3 mt-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-acidni-500 to-accent-500 flex items-center justify-center">
                <span className="text-3xl">💬</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">ACCM</h1>
                <p className="text-slate-400">Copilot Chat Manager</p>
              </div>
            </div>
            
            <span className="badge badge-new mb-4">🆕 Published on VS Marketplace</span>
            
            <p className="text-xl text-slate-300 mb-6">
              Never lose a Copilot conversation again. Manage, search, export, and organize 
              your GitHub Copilot chat histories.
            </p>
            
            <p className="text-slate-400 mb-8">
              Developers using GitHub Copilot generate valuable conversations that often get lost. 
              ACCM helps you preserve, organize, and search your AI pair-programming knowledge 
              so you can reference past solutions and track your learning journey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Install from VS Marketplace
              </a>
              <a 
                href="https://github.com/Acidni-LLC/copilot-chat-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Features</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Everything you need to manage your Copilot conversations effectively.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card card-hover p-8">
                <div className="w-12 h-12 rounded-lg bg-acidni-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Installation</h2>
            <p className="text-slate-400 text-center mb-12">
              Get started in under a minute.
            </p>
            
            <div className="space-y-4 mb-8">
              {installation.map((item) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-acidni-500 flex items-center justify-center font-bold text-white flex-shrink-0">
                    {item.step}
                  </div>
                  <p className="text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="card p-6 bg-slate-800">
              <p className="text-slate-400 text-sm mb-2">Or install via command line:</p>
              <code className="font-mono text-acidni-400 text-sm">
                ext install AcidniLLC.copilot-chat-manager
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Use Cases</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            How developers are using ACCM.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-4">📚 Knowledge Base</h3>
              <p className="text-slate-400">
                Build a searchable archive of solutions you've developed with Copilot. 
                Reference past conversations when tackling similar problems.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-4">📝 Documentation</h3>
              <p className="text-slate-400">
                Export conversations as Markdown to include in project documentation. 
                Capture the reasoning behind code decisions.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-4">🎓 Learning Tracker</h3>
              <p className="text-slate-400">
                Track your learning journey. See what topics you've explored and 
                how your questions have evolved over time.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-4">👥 Team Sharing</h3>
              <p className="text-slate-400">
                Export and share valuable conversations with team members. 
                Spread knowledge across your development team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Resources</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-6 flex items-center gap-4"
              >
                <span className="text-2xl">🏪</span>
                <div className="text-left">
                  <div className="font-semibold">VS Marketplace</div>
                  <div className="text-sm text-slate-400">Install extension</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/Acidni-LLC/copilot-chat-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-6 flex items-center gap-4"
              >
                <span className="text-2xl">🐙</span>
                <div className="text-left">
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-slate-400">Source code & issues</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Organize Your Copilot Chats?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Install ACCM today and never lose a valuable AI conversation again.
          </p>
          <a 
            href="https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-slate-900 hover:bg-slate-100"
          >
            Install Extension
          </a>
        </div>
      </section>
    </div>
  )
}
