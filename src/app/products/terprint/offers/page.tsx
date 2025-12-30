import type { Metadata } from 'next'
import Link from 'next/link'
import { offers } from '@/lib/terprint-offers'

export const metadata: Metadata = {
  title: 'Terprint Products – Offers',
  description:
    'Explore Terprint offers including Menu Aggregation API, COA Extraction Service, Terpene Radar Visual, and Dispensary Analytics Suite.',
}

export default function TerprintOffersIndexPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/products" className="text-acidni-400 hover:text-acidni-300 text-sm font-medium inline-flex items-center gap-2">
              ← Back to Products
            </Link>
            <span className="text-slate-500">/</span>
            <Link href="/products/terprint" className="text-acidni-400 hover:text-acidni-300 text-sm font-medium inline-flex items-center gap-2">
              Terprint
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Terprint Offers</h1>
              <p className="text-slate-400">Productized capabilities available via Azure Marketplace</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <Link
                key={offer.slug}
                href={`/products/terprint/offers/${offer.slug}`}
                className="card card-hover p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-xl">{offer.icon ?? '🌿'}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{offer.name}</div>
                    <div className="text-xs text-slate-400">{offer.tagline}</div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4">{offer.summary}</p>

                <div className="mt-auto flex items-center gap-2">
                  {offer.status === 'available' && (
                    <span className="badge bg-emerald-500/20 text-emerald-300">Available</span>
                  )}
                  {offer.status === 'preview' && (
                    <span className="badge bg-amber-500/20 text-amber-300">Preview</span>
                  )}
                  {offer.status === 'coming-soon' && (
                    <span className="badge bg-slate-500/20 text-slate-300">Coming Soon</span>
                  )}
                  <span className="badge bg-indigo-500/20 text-indigo-300">Azure Marketplace</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://sales.terprint.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-gradient-to-r from-emerald-500 to-teal-500"
            >
              Request Access or Demo
            </a>
            <Link
              href="/products/terprint/offers/marketplace"
              className="btn-secondary ml-3"
            >
              View Marketplace Data
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
