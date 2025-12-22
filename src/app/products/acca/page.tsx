import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ACCA - Chat Cost Analyzer',
  description: 'Track AI token usage and costs across your VS Code AI workflows with model-aware pricing and summaries.',
  keywords: ['VS Code extension', 'AI cost', 'token usage', 'GitHub Copilot', 'OpenAI', 'developer tools'],
}

const features = [
  { title: 'Per-Chat Cost', description: 'See estimated cost per conversation with token breakdowns.', icon: '🧾' },
  { title: 'Session Totals', description: 'Track total usage and cost across a coding session.', icon: 'Σ' },
  { title: 'Model Pricing', description: 'Supports multiple models with configurable pricing profiles.', icon: '🧠' },
  { title: 'Exports', description: 'Export summaries for reporting or expense tracking.', icon: '📤' },
]

export default function ACCAPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/products" className="text-acidni-400 hover:text-acidni-300 text-sm font-medium mb-4 inline-flex items-center gap-2">
                ← Back to Products
              </Link>
              <div className="flex items-center gap-3 mt-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <span className="text-3xl">🧮</span>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold">ACCA</h1>
                  <p className="text-slate-400">Chat Cost Analyzer</p>
                </div>
              </div>

              <span className="badge badge-new mb-4">🆕 Published on VS Marketplace</span>

              <p className="text-xl text-slate-300 mb-6">
                Keep an eye on AI usage. ACCA estimates token usage and costs so your team can stay informed and on budget.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=AcidniLLC.ai-chat-cost-analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Install from VS Marketplace
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center">
                <span className="text-[120px]">🧮</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Features</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Visibility into AI usage and spend, right inside VS Code.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card card-hover p-8 text-center">
                <div className="w-12 h-12 rounded-lg bg-fuchsia-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{f.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Track Your AI Spend</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Bring cost transparency to your AI development workflow.
          </p>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=AcidniLLC.ai-chat-cost-analyzer"
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
