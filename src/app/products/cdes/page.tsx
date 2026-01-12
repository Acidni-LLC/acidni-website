import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDES - Cannabis Data Exchange Standard | Acidni",
  description: "Open-source data standards for the cannabis industry. CDES provides interoperable data models for strains, terpenes, cannabinoids, and healthcare integration.",
};

export default function CDESPage() {
  const packages = [
    {
      name: "cdes",
      version: "1.1.0",
      description: "Core Cannabis Data Exchange Standard - base models for strains, terpenes, cannabinoids",
      pypi: "https://pypi.org/project/cdes/",
      github: "https://github.com/Acidni-LLC/cdes-sdk-python",
      install: "pip install cdes",
    },
    {
      name: "cdes-m",
      version: "1.0.0", 
      description: "CDES Medical - FHIR R4 integration for healthcare interoperability",
      pypi: "https://pypi.org/project/cdes-m/",
      github: "https://github.com/Acidni-LLC/cdes-m-sdk-python",
      install: "pip install cdes-m",
    },
    {
      name: "cdes-gdpr",
      version: "1.0.0",
      description: "GDPR compliance library - consent management, data subject rights, anonymization",
      pypi: "https://pypi.org/project/cdes-gdpr/",
      github: "https://github.com/Acidni-LLC/cdes-gdpr-sdk-python",
      install: "pip install cdes-gdpr",
    },
    {
      name: "cdes-mk",
      version: "0.1.0",
      description: "CDES Market - retail and e-commerce data models",
      pypi: "https://pypi.org/project/cdes-mk/",
      github: "https://github.com/Acidni-LLC/cdes-mk-sdk-python",
      install: "pip install cdes-mk",
    },
    {
      name: "cdes-fs",
      version: "0.1.0",
      description: "CDES Financial Services - compliance and reporting models",
      pypi: "https://pypi.org/project/cdes-fs/",
      github: "https://github.com/Acidni-LLC/cdes-fs-sdk-python",
      install: "pip install cdes-fs",
    },
    {
      name: "cdes-c",
      version: "0.1.0",
      description: "CDES Cultivation - growing and production data models",
      pypi: "https://pypi.org/project/cdes-c/",
      github: "https://github.com/Acidni-LLC/cdes-c-sdk-python",
      install: "pip install cdes-c",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 rounded-full mb-6">
            <span className="text-green-400 text-sm font-medium">Open Source</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cannabis Data Exchange Standard
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The first open-source data standard for the cannabis industry. 
            Interoperable, compliant, and ready for healthcare integration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://pypi.org/project/cdes/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              View on PyPI
            </a>
            <a
              href="https://github.com/Acidni-LLC/cdes-sdk-python"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Quick Install */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Quick Install</h2>
          <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
            <code className="text-green-400">pip install cdes cdes-m cdes-gdpr</code>
          </div>
        </div>
      </section>

      {/* Package Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">CDES Package Ecosystem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-mono rounded">
                    v{pkg.version}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{pkg.description}</p>
                <div className="bg-gray-900 rounded p-3 font-mono text-xs text-green-400 mb-4">
                  {pkg.install}
                </div>
                <div className="flex gap-3">
                  <a
                    href={pkg.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    PyPI 
                  </a>
                  <a
                    href={pkg.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-gray-300"
                  >
                    GitHub 
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Built For</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "", title: "Healthcare", desc: "FHIR R4 compliant for EHR integration" },
              { icon: "", title: "Dispensaries", desc: "Standardized menu and inventory data" },
              { icon: "", title: "Cultivators", desc: "Strain genetics and batch tracking" },
              { icon: "", title: "Compliance", desc: "GDPR, HIPAA, state regulations" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to standardize your cannabis data?</h2>
          <p className="text-gray-300 mb-8">
            Join the growing ecosystem of dispensaries, cultivators, and healthcare providers using CDES.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/services/doctor-portal"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              Explore Doctor Portal
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}