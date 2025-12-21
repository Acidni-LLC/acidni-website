export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid bg-glow">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            Transform Your Enterprise with{' '}
            <span className="gradient-text">AI & Modern Architecture</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 text-balance">
            We help organizations adopt AI intelligently, modernize legacy applications, 
            and build software that scales. From strategy to deployment — we deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="btn-primary">
              Explore Our Services
            </a>
            <a href="/products" className="btn-secondary">
              View Our Products
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What We Do
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Four pillars of technology transformation
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Consulting Card */}
            <div className="card card-hover p-8">
              <div className="w-12 h-12 rounded-lg bg-acidni-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Adoption & Integration</h3>
              <p className="text-slate-400 mb-4">
                Navigate the AI landscape with confidence. We implement practical AI solutions 
                that drive real business value.
              </p>
              <a href="/services/ai-consulting" className="text-acidni-400 hover:text-acidni-300 font-medium">
                Learn More →
              </a>
            </div>

            {/* App Modernization Card */}
            <div className="card card-hover p-8">
              <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Application Modernization</h3>
              <p className="text-slate-400 mb-4">
                Transform legacy systems into modern, scalable cloud applications without 
                disrupting your business.
              </p>
              <a href="/services/app-modernization" className="text-acidni-400 hover:text-acidni-300 font-medium">
                Learn More →
              </a>
            </div>

            {/* CannaTech Card */}
            <div className="card card-hover p-8">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">CannaTech Consulting</h3>
              <p className="text-slate-400 mb-4">
                Technology solutions for the cannabis industry — compliance systems, data platforms, 
                and analytics.
              </p>
              <a href="/services/cannatech" className="text-emerald-400 hover:text-emerald-300 font-medium">
                Learn More →
              </a>
            </div>

            {/* Software Products Card */}
            <div className="card card-hover p-8">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Packaged Software</h3>
              <p className="text-slate-400 mb-4">
                We don't just consult — we build. Our published products prove our engineering 
                excellence.
              </p>
              <a href="/products" className="text-acidni-400 hover:text-acidni-300 font-medium">
                See Products →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Built by Us
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Real products. Real users. Real proof of our engineering capabilities.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ACCM Product Card */}
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="badge badge-new">🆕 NEW</span>
              </div>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-acidni-500 to-accent-500 flex items-center justify-center mb-6">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">ACCM - Copilot Chat Manager</h3>
              <p className="text-acidni-400 text-sm mb-4">Published on VS Marketplace</p>
              <p className="text-slate-400 mb-6">
                Never lose a Copilot conversation again. Manage, search, export, and organize 
                your GitHub Copilot chat histories with word clouds and deep search.
              </p>
              <ul className="text-slate-300 text-sm space-y-2 mb-6">
                <li>📊 Dashboard with statistics & word clouds</li>
                <li>🔍 Deep search across all conversations</li>
                <li>📤 Export to JSON, Markdown, or HTML</li>
                <li>🗂️ Organize by workspace or project</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Install from Marketplace
                </a>
                <a 
                  href="https://github.com/Acidni-LLC/copilot-chat-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Terprint Product Card */}
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="badge bg-amber-500/20 text-amber-300">🚀 Coming Soon</span>
              </div>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Terprint</h3>
              <p className="text-emerald-400 text-sm mb-4">Cannabis Data Intelligence</p>
              <p className="text-slate-400 mb-6">
                Comprehensive data platform for Florida medical marijuana. Real-time menu 
                aggregation, COA data extraction, and analytics powered by Azure.
              </p>
              <ul className="text-slate-300 text-sm space-y-2 mb-6">
                <li>🌿 Real-time dispensary menu data</li>
                <li>🔬 Automated COA extraction</li>
                <li>📊 Custom Power BI visualizations</li>
                <li>☁️ Azure-native SaaS architecture</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://sales.terprint.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm bg-gradient-to-r from-emerald-500 to-teal-500"
                >
                  Join Waitlist
                </a>
                <a href="/products/terprint" className="btn-secondary text-sm">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Acidni Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Choose Acidni?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-acidni-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="font-semibold mb-2">Azure Experts</h3>
              <p className="text-slate-400 text-sm">
                Deep expertise across Functions, App Services, SQL, Cosmos DB, and more.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-semibold mb-2">Proven Builders</h3>
              <p className="text-slate-400 text-sm">
                We ship our own products. ACCM is live on VS Marketplace with more extensions coming.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">End-to-End Delivery</h3>
              <p className="text-slate-400 text-sm">
                From strategy to production — we own the entire lifecycle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold mb-2">Practical AI</h3>
              <p className="text-slate-400 text-sm">
                Solutions that deliver ROI, not science projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Let's discuss how Acidni can help you adopt AI, modernize your applications, 
            or build custom solutions.
          </p>
          <a href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
