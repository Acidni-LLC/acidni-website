import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Doctor Portal | Evidence-Based Cannabis Recommendations for Physicians',
  description: 'AI-powered medical cannabis recommendation system for physicians. CDES-M compliant, FHIR-ready, integrating terpene science with healthcare workflows.',
  keywords: [
    'medical cannabis physician portal',
    'cannabis recommendation software',
    'CDES-M healthcare integration',
    'terpene-based treatment recommendations',
    'FHIR cannabis data',
    'physician cannabis education',
    'medical marijuana recommendations',
    'evidence-based cannabis therapy',
    'cannabis EHR integration',
    'pulmonology cannabis',
    'oncology cannabis',
  ],
}

const features = [
  {
    title: 'AI-Powered Recommendations',
    description: 'Evidence-based cannabis product recommendations tailored to patient conditions, symptoms, and treatment goals.',
    icon: '',
  },
  {
    title: 'CDES-M Compliant',
    description: 'Built on the Cannabis Data Exchange Standard - Medical Extension for healthcare interoperability.',
    icon: '',
  },
  {
    title: 'FHIR R4 Ready',
    description: 'Export recommendations as FHIR resources. Seamless integration with EHR systems.',
    icon: '',
  },
  {
    title: 'Terpene Science',
    description: 'Leverage terpene profiles for targeted therapeutic effects. Anti-inflammatory, anxiolytic, and more.',
    icon: '',
  },
  {
    title: 'Patient-Specific Dosing',
    description: 'Titration schedules, delivery method guidance, and start-low-go-slow protocols.',
    icon: '',
  },
  {
    title: 'Documentation Ready',
    description: 'Generate compliance-ready documentation with ICD-10 codes and clinical rationale.',
    icon: '',
  },
]

const specialties = [
  {
    name: 'Pulmonology',
    conditions: ['COPD', 'Chronic Cough', 'Sleep Apnea', 'Pulmonary Fibrosis'],
    icon: '',
    highlight: 'Demo: Jan 13',
  },
  {
    name: 'Oncology',
    conditions: ['Chemotherapy Side Effects', 'Cancer Pain', 'Appetite Stimulation', 'Nausea'],
    icon: '',
    highlight: 'Demo: Jan 16',
  },
  {
    name: 'Pain Management',
    conditions: ['Chronic Pain', 'Neuropathy', 'Fibromyalgia', 'Arthritis'],
    icon: '',
    highlight: 'Coming Soon',
  },
  {
    name: 'Neurology',
    conditions: ['Epilepsy', 'Multiple Sclerosis', 'Parkinsons', 'Migraines'],
    icon: '',
    highlight: 'Coming Soon',
  },
  {
    name: 'Psychiatry',
    conditions: ['PTSD', 'Anxiety', 'Depression', 'Insomnia'],
    icon: '',
    highlight: 'Coming Soon',
  },
  {
    name: 'Gastroenterology',
    conditions: ['Crohns Disease', 'IBS', 'Nausea/Vomiting', 'Appetite Loss'],
    icon: '',
    highlight: 'Coming Soon',
  },
]

const workflow = [
  {
    step: 1,
    title: 'Patient Profile',
    description: 'Enter patient demographics, qualifying condition, current medications, and treatment history.',
  },
  {
    step: 2,
    title: 'Symptom Assessment',
    description: 'AI analyzes symptoms and identifies therapeutic targets using terpene science.',
  },
  {
    step: 3,
    title: 'Product Matching',
    description: 'Real-time matching against Florida dispensary inventory for available products.',
  },
  {
    step: 4,
    title: 'Recommendation',
    description: 'Generate detailed recommendation with rationale, dosing, and patient education.',
  },
  {
    step: 5,
    title: 'Documentation',
    description: 'Export FHIR-compliant records, ICD-10 codes, and compliance documentation.',
  },
]

export default function DoctorPortalPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <span></span>
              <span>For Healthcare Providers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Doctor Portal
            </h1>
            <p className="text-xl text-slate-300 mb-4 max-w-2xl">
              AI-powered cannabis recommendations that speak your language.
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl">
              Evidence-based recommendations, FHIR-ready data, and seamless EHR integration.
              Built on <span className="text-blue-400">CDES-M</span> for healthcare interoperability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-blue-500 hover:bg-blue-600">
                Request Demo
              </Link>
              <a href="https://cdes.world" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Learn About CDES-M 
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                The Challenge Physicians Face
              </h2>
              <p className="text-slate-400 mb-6">
                Medical cannabis is now legal in 38 states, but physicians are left navigating without tools:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl"></span>
                  <div>
                    <strong className="text-white">No Medical Training</strong>
                    <p className="text-slate-400 text-sm">Medical schools dont teach cannabinoid therapeutics or terpene pharmacology.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl"></span>
                  <div>
                    <strong className="text-white">Data Fragmentation</strong>
                    <p className="text-slate-400 text-sm">Cannabis data is isolated from healthcare systems. No FHIR, no EHR integration.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl"></span>
                  <div>
                    <strong className="text-white">Product Overwhelm</strong>
                    <p className="text-slate-400 text-sm">Thousands of products with varying THC/CBD ratios, terpene profiles, and delivery methods.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl"></span>
                  <div>
                    <strong className="text-white">Compliance Burden</strong>
                    <p className="text-slate-400 text-sm">State-specific requirements, documentation needs, and liability concerns.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30">
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl"></span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Doctor Portal Solves This</h3>
                <p className="text-slate-400 mb-6">
                  Evidence-based AI recommendations, real-time inventory matching, and healthcare-grade documentation.
                </p>
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-medium">
                  Schedule a Demo 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for Healthcare Workflows
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Not a consumer app repackaged. Purpose-built for physicians with healthcare standards at the core.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card p-6 hover:border-blue-500/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              5-Step Clinical Workflow
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From patient intake to documentation in under 5 minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {workflow.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="card p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <span className="text-blue-500 text-2xl"></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Specialty-Specific Recommendations
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tailored protocols for different medical specialties. AI learns from condition-specific evidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty) => (
              <div key={specialty.name} className="card p-6 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{specialty.icon}</span>
                    <h3 className="text-xl font-semibold">{specialty.name}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    specialty.highlight.includes('Jan 13') ? 'bg-green-500/20 text-green-300' :
                    specialty.highlight.includes('Jan 16') ? 'bg-amber-500/20 text-amber-300' :
                    'bg-slate-700 text-slate-400'
                  }`}>
                    {specialty.highlight}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {specialty.conditions.map((condition) => (
                    <span key={condition} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CDES-M Integration Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="card p-8 lg:p-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                  Healthcare Standards
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Built on CDES-M
                </h3>
                <p className="text-slate-300 mb-6">
                  The Doctor Portal is powered by <strong>CDES-M</strong> (Cannabis Data Exchange Standard - Medical Extension),
                  our open specification that bridges cannabis data with healthcare systems.
                </p>
                <ul className="space-y-2 mb-6 text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500"></span>
                    FHIR R4 resource mappings for providers and recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500"></span>
                    ICD-10-CM diagnosis code integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500"></span>
                    NPI provider identification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500"></span>
                    SNOMED CT and LOINC terminology mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500"></span>
                    Open-source specification on GitHub
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a href="https://cdes.world" target="_blank" rel="noopener noreferrer" className="btn-primary bg-blue-500 hover:bg-blue-600">
                    Explore CDES-M
                  </a>
                  <a href="https://github.com/Acidni-LLC/cdes-m-spec" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="card p-4 text-center bg-slate-800">
                    <span className="text-2xl mb-2 block"></span>
                    <span className="text-sm font-medium">FHIR R4</span>
                  </div>
                  <div className="card p-4 text-center bg-slate-800">
                    <span className="text-2xl mb-2 block"></span>
                    <span className="text-sm font-medium">ICD-10</span>
                  </div>
                  <div className="card p-4 text-center bg-slate-800">
                    <span className="text-2xl mb-2 block"></span>
                    <span className="text-sm font-medium">NPI</span>
                  </div>
                  <div className="card p-4 text-center bg-slate-800">
                    <span className="text-2xl mb-2 block"></span>
                    <span className="text-sm font-medium">SNOMED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900 to-cyan-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to See Doctor Portal in Action?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Schedule a demo to see how Doctor Portal can transform your medical cannabis practice with
            evidence-based AI recommendations and healthcare-grade documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
              Request Demo
            </Link>
            <Link href="/services/cannatech" className="btn-secondary border-white/30 hover:bg-white/10">
              Learn About CannaTech Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
