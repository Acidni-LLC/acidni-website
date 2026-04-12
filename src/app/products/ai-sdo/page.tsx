import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acidni AI SDO — AI Software Development Organization as a Service',
  description:
    'Replace your entire software development team with autonomous AI agents. 50+ pre-built agents handle requirements, architecture, coding, testing, and deployment — governed by enterprise-grade SDLC controls. Starting at $249/mo.',
  keywords: [
    'AI software development organization',
    'AI SDO',
    'autonomous software delivery',
    'AI agents for software development',
    'SDLC automation',
    'AI-powered DevOps',
    'software development as a service',
    'GitHub Copilot alternative',
    'AI coding agents',
    'enterprise AI development',
    'autonomous development team',
    'AI software engineers',
    'automated software delivery',
    'AI dev team',
    'software development automation',
  ],
  openGraph: {
    title: 'Acidni AI SDO — AI Software Development Organization',
    description:
      '50+ autonomous AI agents that handle your entire SDLC. Requirements, architecture, coding, testing, deployment — all governed by enterprise controls.',
    url: 'https://acidni.net/products/ai-sdo',
    type: 'website',
  },
}

const capabilities = [
  {
    title: '50+ Pre-Built AI Agents',
    description:
      'Business analysts, architects, engineers, QA leads, DevOps engineers, and more — each with specialized skills and clear RACI responsibilities.',
    icon: '🤖',
  },
  {
    title: 'Full SDLC Automation',
    description:
      'From intake to deployment. Agents process meeting notes, generate requirements, design architecture, write code, run tests, and deploy — autonomously.',
    icon: '🔄',
  },
  {
    title: 'Enterprise Governance',
    description:
      'Architecture Review Board, Change Advisory Board, Security Council, and Technical Steering Committee — all built-in. Protected code zones prevent unauthorized changes.',
    icon: '🛡️',
  },
  {
    title: 'GitHub & Azure DevOps Integration',
    description:
      'Native integration with GitHub repos, GitHub Actions CI/CD, Azure DevOps work items, and Azure Container Apps deployment.',
    icon: '🔗',
  },
  {
    title: 'CMDB-Driven Operations',
    description:
      'Every product, service, and infrastructure component tracked in a Configuration Management Database. Agents always know the current state of truth.',
    icon: '📋',
  },
  {
    title: 'Custom Agent Builder',
    description:
      'Define custom agent roles with specialized skills, tool access, and governance rules. Extend the SDO with domain-specific expertise.',
    icon: '🛠️',
  },
]

const agentRoles = [
  { department: 'Product', roles: ['Product Manager', 'Business Analyst', 'Technical Writer'] },
  { department: 'Architecture', roles: ['Enterprise Architect', 'Security Architect', 'Application Architect'] },
  { department: 'Engineering', roles: ['Software Engineer', 'Full-Stack Developer', 'DevOps Engineer', 'Release Manager'] },
  { department: 'Quality', roles: ['QA Lead', 'Test Engineer', 'Project Assessor'] },
  { department: 'Operations', roles: ['SRE Engineer', 'Incident Commander', 'Operations Manager'] },
  { department: 'Delivery', roles: ['Project Manager', 'Scrum Master'] },
  { department: 'Compliance', roles: ['FinOps Analyst', 'Auditor', 'Compliance Officer'] },
  { department: 'Support', roles: ['Support Engineer', 'Support Manager'] },
]

const pricingTiers = [
  {
    name: 'Solo',
    price: '$249',
    period: '/month',
    description: 'For individual developers and small projects',
    features: [
      '1 project',
      '10 AI agent slots',
      'GitHub integration',
      'Basic SDLC workflows',
      'Community support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Team',
    price: '$449',
    period: '/month',
    description: 'For small teams shipping multiple projects',
    features: [
      '5 projects',
      '25 AI agent slots',
      'GitHub + Azure DevOps',
      'Advanced workflows',
      'Custom agent roles',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Business',
    price: '$699',
    period: '/month',
    description: 'For organizations with governance requirements',
    features: [
      '15 projects',
      '50 AI agent slots',
      'Full governance suite',
      'Protected code zones',
      'CMDB integration',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: '$1,499',
    period: '/month',
    description: 'For large-scale software delivery organizations',
    features: [
      'Unlimited projects',
      'Unlimited agents',
      'Custom governance policies',
      'SSO & RBAC',
      'Dedicated instance',
      'SLA guarantee',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const useCases = [
  {
    title: 'Startup CTO',
    description: 'Ship products faster without hiring a full engineering team. AI agents handle the SDLC while you focus on product-market fit.',
    icon: '🚀',
  },
  {
    title: 'Enterprise DevOps',
    description: 'Automate governance, compliance audits, and deployment pipelines. Every change tracked, every decision documented.',
    icon: '🏢',
  },
  {
    title: 'Agency / Consultancy',
    description: 'Deliver client projects faster with AI agents that follow your methodology. Scale capacity without scaling headcount.',
    icon: '💼',
  },
  {
    title: 'Open Source Maintainer',
    description: 'Automate issue triage, PR reviews, release notes, and changelog management. Keep your project healthy with less effort.',
    icon: '🌐',
  },
]

const faqs = [
  {
    question: 'What is an AI Software Development Organization?',
    description:
      'An AI SDO is a fully autonomous, AI-powered Center of Excellence for software delivery. Instead of hiring individual developers, you deploy an entire organization of specialized AI agents — each with defined roles, responsibilities, and governance controls — that collaborate to deliver software from requirements to production.',
  },
  {
    question: 'How is this different from GitHub Copilot or Cursor?',
    description:
      'GitHub Copilot and Cursor are AI coding assistants — they help individual developers write code faster. Acidni AI SDO is an AI organization — it handles the entire software delivery lifecycle including requirements gathering, architecture, coding, testing, deployment, compliance, and project management. It replaces the need for a full development team, not just a code editor.',
  },
  {
    question: 'What governance controls are included?',
    description:
      'Every plan includes RACI-based work routing, protected code zones (Gold/Silver/Bronze classification), conventional commits enforcement, and CI/CD pipeline automation. Business and Enterprise plans add Architecture Review Board, Change Advisory Board, Security Council, compliance auditing, and CMDB integration.',
  },
  {
    question: 'Can I customize the AI agents?',
    description:
      'Yes. Team plans and above include the Custom Agent Builder. Define agent roles with specialized skills, tool access permissions, governance rules, and collaboration patterns. Agents can be tailored to your tech stack, coding standards, and workflow preferences.',
  },
  {
    question: 'What technologies are supported?',
    description:
      'Acidni AI SDO agents support Python, TypeScript, C#/.NET, Node.js, and more. Native integrations with GitHub, Azure DevOps, Azure Container Apps, Cosmos DB, Key Vault, and the full Azure ecosystem. Agents follow your existing coding standards and can learn your codebase conventions.',
  },
  {
    question: 'Is my code secure?',
    description:
      'Security is built into the governance framework. Protected code zones prevent unauthorized modifications to critical files. All secrets are managed via Azure Key Vault. Container images are scanned for vulnerabilities. Agents follow OWASP security standards and never expose credentials.',
  },
]

export default function AISDOPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/products"
              className="text-acidni-400 hover:text-acidni-300 text-sm font-medium mb-4 inline-flex items-center gap-2"
            >
              ← Back to Products
            </Link>
            <div className="flex justify-center mt-4 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Entire Dev Team,{' '}
              <span className="gradient-text">Powered by AI</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Acidni AI SDO is an AI-powered Software Development Organization — 50+ autonomous
              agents that handle your entire SDLC from requirements to production.
            </p>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Not just a code assistant. A full AI organization with business analysts, architects,
              engineers, QA leads, DevOps engineers, and compliance officers — all governed by
              enterprise-grade controls.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://sales.sdo.acidni.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start Free Trial
              </a>
              <a
                href="https://sdo.acidni.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Platform
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Is an AI SDO? */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Is an AI Software Development Organization?
            </h2>
            <p className="text-slate-400 text-lg">
              Traditional software delivery requires teams of specialists — product managers,
              architects, developers, testers, DevOps engineers, and project managers. An AI SDO
              replaces these roles with specialized AI agents that collaborate autonomously,
              following the same SDLC processes and governance controls you&apos;d expect from a
              world-class development organization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-3">👨‍💻</div>
              <h3 className="font-semibold mb-2">Traditional Team</h3>
              <p className="text-slate-400 text-sm">
                8-12 specialists, months to hire, $50K+ monthly payroll, coordination overhead
              </p>
            </div>
            <div className="card p-6 text-center border-acidni-500/30">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2 text-acidni-400">AI SDO</h3>
              <p className="text-slate-400 text-sm">
                50+ AI agents, instant deployment, starting at $249/mo, autonomous coordination
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-semibold mb-2">Same Governance</h3>
              <p className="text-slate-400 text-sm">
                RACI matrix, code reviews, change management, security controls, compliance auditing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Platform Capabilities
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Everything you need to run a fully autonomous software delivery operation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card p-6 hover:border-acidni-500/30 transition-all">
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                <p className="text-slate-400 text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Roles */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Meet Your AI Team
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Specialized agents organized by department — just like a real software organization.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentRoles.map((dept) => (
              <div key={dept.department} className="card p-6">
                <h3 className="font-semibold text-acidni-400 mb-3">{dept.department}</h3>
                <ul className="space-y-2">
                  {dept.roles.map((role) => (
                    <li key={role} className="flex items-center gap-2 text-slate-300 text-sm">
                      <svg
                        className="w-4 h-4 text-emerald-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Who Uses Acidni AI SDO?
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            From solo founders to enterprise DevOps teams — AI-powered delivery scales with you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="card p-6 text-center">
                <div className="text-3xl mb-3">{uc.icon}</div>
                <h3 className="font-semibold mb-2">{uc.title}</h3>
                <p className="text-slate-400 text-sm">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Start small and scale as your needs grow. All plans include a 14-day free trial.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`card p-6 flex flex-col ${
                  tier.popular
                    ? 'border-acidni-500/50 ring-1 ring-acidni-500/20'
                    : ''
                }`}
              >
                {tier.popular && (
                  <span className="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-semibold bg-acidni-500/20 text-acidni-300 mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-slate-400 text-sm">{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                      <svg
                        className="w-4 h-4 text-emerald-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={
                    tier.name === 'Enterprise'
                      ? 'https://sales.sdo.acidni.net'
                      : 'https://sales.sdo.acidni.net'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-2.5 px-4 rounded-lg font-medium text-sm transition-colors ${
                    tier.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Available: Managed SDO */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="card p-8 md:p-12 max-w-4xl mx-auto text-center border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-purple-500/5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Need a Fully Managed Solution?
            </h2>
            <p className="text-slate-400 text-lg mb-6 max-w-2xl mx-auto">
              <strong className="text-white">Acidni Managed SDO</strong> — We run everything. You
              bring business goals, we deliver production software. Dedicated AI teams, human
              oversight, and guaranteed SLAs.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-400 mb-8">
              <span>Starting at <strong className="text-white">$4,999/mo</strong></span>
              <span>|</span>
              <span>Dedicated AI team</span>
              <span>|</span>
              <span>Human-in-the-loop oversight</span>
            </div>
            <a
              href="https://sales.sdo.acidni.net"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-slate-400 text-sm">{faq.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Deploy Your AI Development Team?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Start your 14-day free trial. No credit card required. Deploy autonomous agents in
            minutes, not months.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://sales.sdo.acidni.net"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-slate-900 hover:bg-slate-100"
            >
              Start Free Trial
            </a>
            <a href="/contact" className="btn-secondary border-white/30 text-white hover:bg-white/10">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
