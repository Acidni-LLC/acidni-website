import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Text-a-Truck | AI-Powered Fleet Safety & Hazard Reporting',
  description: 'Turn any driver into a safety reporter. AI-powered hazard reporting that notifies your fleet in seconds via SMS, voice, or web. Protect your fleet from unsecured loads, blown tires, and road hazards.',
  keywords: ['fleet safety', 'hazard reporting', 'trucking safety', 'AI fleet management', 'road safety', 'SMS alerts', 'cargo spill prevention', 'DOT compliance', 'fleet notifications', 'commercial vehicle safety'],
  openGraph: {
    title: 'Text-a-Truck - AI-Powered Fleet Safety Platform',
    description: 'Turn any driver into a safety reporter. AI-powered hazard reporting that notifies your fleet in seconds.',
    url: 'https://acidni.net/products/text-a-truck',
    type: 'website',
  },
}

const features = [
  {
    title: 'Multi-Channel Intake',
    description: 'Accept reports via SMS, voice calls, email, or web. No app required—anyone can report in seconds.',
    icon: '📱',
  },
  {
    title: 'AI-Powered Processing',
    description: 'Azure OpenAI GPT-4 extracts vehicle details, hazard type, and location from natural language. No forms to fill out.',
    icon: '🤖',
  },
  {
    title: 'TAT-ID Vehicle Registry',
    description: 'Unique IDs for every vehicle. Printable stickers make reporting easy. Instant matching when reports come in.',
    icon: '🏷️',
  },
  {
    title: 'Real-Time Notifications',
    description: 'Drivers get SMS alerts. Dispatchers get emails. Configure escalation rules for critical situations.',
    icon: '⚡',
  },
  {
    title: 'Fleet Management Portal',
    description: 'Register vehicles, track incidents, manage drivers, and configure notifications from one dashboard.',
    icon: '🖥️',
  },
  {
    title: 'Analytics & Insights',
    description: 'Track incident trends, response times, and fleet safety scores. Export reports for compliance.',
    icon: '📊',
  },
]

const hazardTypes = [
  { hazard: 'Unsecured Load', example: '"Boxes falling off truck on I-95"' },
  { hazard: 'Blown Tire', example: '"Semi with shredded tire, debris everywhere"' },
  { hazard: 'Smoke/Fire', example: '"Truck engine smoking heavily"' },
  { hazard: 'Erratic Driving', example: '"18-wheeler swerving between lanes"' },
  { hazard: 'Fluid Leak', example: '"Oil trail behind white box truck"' },
  { hazard: 'Door Open', example: '"Trailer doors swinging open on highway"' },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'For small fleets getting started',
    vehicles: '25 vehicles',
    features: [
      '500 SMS notifications',
      'SMS intake + AI processing',
      'Driver notifications',
      'Basic portal',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For growing fleets',
    vehicles: '100 vehicles',
    features: [
      '2,000 SMS + 100 voice minutes',
      'Voice IVR + email intake',
      'Webhook integrations',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$799',
    period: '/month',
    description: 'For large enterprises',
    vehicles: '500 vehicles',
    features: [
      '10,000 SMS + 500 voice minutes',
      'Analytics dashboard',
      'Law enforcement integration',
      '99.9% SLA',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const stats = [
  { value: '500+', label: 'Cargo spill incidents daily on US highways' },
  { value: '$1.2B', label: 'Annual cost of tire debris accidents' },
  { value: '4,000+', label: 'Crashes caused by unsecured loads/year' },
]

export default function TextATruckPage() {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-3xl">🚛</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">Text-a-Truck</h1>
                <p className="text-slate-400">AI-Powered Fleet Safety Platform</p>
              </div>
            </div>
            
            <span className="badge bg-amber-500/20 text-amber-300 mb-4">🚀 Coming Soon</span>
            
            <p className="text-xl text-slate-300 mb-6">
              Turn Any Driver Into a Safety Reporter
            </p>
            
            <p className="text-slate-400 mb-8">
              AI-powered hazard reporting that notifies your fleet in seconds—via SMS, voice, or web.
              When someone sees a hazard on your vehicle, they text a simple number. Our AI processes the 
              report instantly. Your driver gets an alert. Problem solved before accidents happen.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://textatruck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-gradient-to-r from-orange-500 to-red-500"
              >
                Join Waitlist
              </a>
              <a 
                href="/contact"
                className="btn-secondary"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container-custom">
          <h2 className="text-xl font-semibold text-center mb-8 text-slate-300">The Cost of Not Knowing</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="text-3xl font-bold text-orange-400 mb-2">{stat.value}</div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">You're the Last to Know About Your Own Vehicles</h2>
          <p className="text-slate-300 mb-8">
            Fleet operators face a troubling reality: when their vehicles have safety issues on the road, 
            they're often the last to find out. Other drivers see the problem. Law enforcement sees it. 
            But the fleet? They don't know until it's too late.
          </p>
          <p className="text-orange-400 font-semibold">
            Accidents. Citations. Lawsuits. Reputation damage. All preventable—if you knew in time.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Know in Seconds, Not After the Accident</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Text-a-Truck gives your fleet eyes on every road.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <div className="text-orange-400 font-bold text-lg mb-2">1. Someone Sees a Hazard</div>
              <p className="text-slate-400 text-sm">
                A fellow driver spots boxes falling off your truck on I-95.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📲</span>
              </div>
              <div className="text-orange-400 font-bold text-lg mb-2">2. They Report via SMS</div>
              <p className="text-slate-400 text-sm">
                "White 18-wheeler TAT-SL-0042 has boxes falling off on I-95 N"
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔔</span>
              </div>
              <div className="text-orange-400 font-bold text-lg mb-2">3. Your Driver Gets Alerted</div>
              <p className="text-slate-400 text-sm">
                Within seconds, your driver receives an SMS with the hazard details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Everything You Need for Road Safety</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Built on Azure with enterprise-grade reliability and AI-powered intelligence.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card card-hover p-8">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hazard Types */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">We Detect What Others Report</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Our AI understands natural language reports and categorizes hazards automatically.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {hazardTypes.map((item) => (
              <div key={item.hazard} className="card p-4">
                <h3 className="font-semibold text-orange-400 mb-1">{item.hazard}</h3>
                <p className="text-slate-400 text-sm italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Plans That Scale With Your Fleet</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-4">
            14-day free trial. No credit card required.
          </p>
          <p className="text-orange-400 text-center text-sm mb-12">
            🎉 Launching soon — join the waitlist for early access pricing
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.name} 
                className={`card p-6 relative ${tier.popular ? 'ring-2 ring-orange-500' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge bg-orange-500 text-white text-xs">Most Popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-xs mb-4">{tier.vehicles}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400">{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact"
                  className={`w-full text-center py-2 px-4 rounded-lg font-medium transition-colors block ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-8">Built on Azure. Enterprise Ready.</h2>
          <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">☁️</span> Microsoft Azure Partner
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔒</span> SOC 2 Type II (planned)
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌍</span> GDPR Compliant
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span> 99.9% Uptime SLA
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Azure Container Apps • Azure OpenAI • Azure Communication Services • Microsoft Entra ID
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Start Protecting Your Fleet Today
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto mb-10">
            14-day free trial. No credit card required. Set up in under an hour.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://textatruck.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-slate-900 hover:bg-slate-100"
            >
              Join Waitlist
            </a>
            <a 
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-white/10"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">Built For</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-semibold">Trucking Companies</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Long-haul fleets, regional carriers, and LTL operators. Stop finding out about problems after accidents.
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="font-semibold">Construction Fleets</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Dump trucks, concrete mixers, flatbeds, and equipment haulers. High-visibility vehicles need extra vigilance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
