import type { Metadata } from 'next'
import Link from 'next/link'
import ProductCatalogSection from '@/components/ProductCatalogSection'

export const metadata: Metadata = {
  title: 'Products | Enterprise Software',
  description: 'From evidence-based clinical decision support to open data standards—Acidni builds the infrastructure that powers modern cannabis healthcare and commerce.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Built by Us,{' '}
              <span className="gradient-text">Used by Many</span>
            </h1>
            <p className="text-xl text-slate-400">
              We don&apos;t just consult — we build and ship our own products. 
              Real software solving real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Product Catalog from CMDB */}
      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <ProductCatalogSection />
        </div>
      </section>

      {/* Why We Build Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Why We Build Products</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Our products serve two purposes: solving real problems and proving our engineering capabilities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-acidni-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Solve Real Problems</h3>
              <p className="text-slate-400 text-sm">
                Our products address genuine pain points we've encountered in our own work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Prove Our Skills</h3>
              <p className="text-slate-400 text-sm">
                Published products on VS Marketplace and Azure Marketplace demonstrate our capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-semibold mb-2">Stay Current</h3>
              <p className="text-slate-400 text-sm">
                Building products keeps us sharp on the latest technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Want Us to Build Something for You?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Our product experience translates directly to client projects. 
            Let's discuss what you need built.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
