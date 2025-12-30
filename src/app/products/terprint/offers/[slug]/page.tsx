import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { offers, getOfferBySlug, type Offer } from '@/lib/terprint-offers'

type Params = { slug: string }

export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const offer = getOfferBySlug(params.slug)
  if (!offer) return {}
  return {
    title: `${offer.name} – Terprint`,
    description: offer.summary,
    keywords: ['Terprint', 'cannabis', 'data', 'Azure Marketplace', offer.name],
    openGraph: {
      title: `${offer.name} – Terprint`,
      description: offer.summary,
      type: 'website',
      url: `https://acidni.net/products/terprint/offers/${offer.slug}`,
    },
  }
}

export default function TerprintOfferPage({ params }: { params: Params }) {
  const offer = getOfferBySlug(params.slug)
  if (!offer) return notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: offer.name,
    description: offer.summary,
    brand: { '@type': 'Organization', name: 'Terprint' },
    url: `https://acidni.net/products/terprint/offers/${offer.slug}`,
    offers: {
      '@type': 'Offer',
      availability: offer.status === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      priceCurrency: 'USD',
      price: offer.pricing?.[0]?.price?.replace(/[^0-9.]/g, '') ?? undefined,
    },
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/products" className="text-acidni-400 hover:text-acidni-300 text-sm font-medium inline-flex items-center gap-2">
              ← Back to Products
            </Link>
            <span className="text-slate-500">/</span>
            <Link href="/products/terprint/offers" className="text-acidni-400 hover:text-acidni-300 text-sm font-medium inline-flex items-center gap-2">
              Terprint Offers
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <span className="text-2xl">{offer.icon ?? '🌿'}</span>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold">{offer.name}</h1>
                  <p className="text-slate-400">{offer.tagline}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
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

              <p className="text-xl text-slate-300 mb-4">{offer.summary}</p>
              {offer.description && (
                <div className="mb-8">
                  <details className="group">
                    <summary className="cursor-pointer text-slate-300 hover:text-white inline-flex items-center gap-2">
                      <span>More details</span>
                      <svg className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.29a.75.75 0 0 1-.02-1.08z" />
                      </svg>
                    </summary>
                    <div className="mt-3 text-slate-400">
                      {offer.description}
                    </div>
                  </details>
                </div>
              )}

              {offer.features && offer.features.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {offer.features.map((f) => (
                    <div key={f.title} className="card p-6">
                      <div className="font-semibold mb-2">{f.title}</div>
                      <div className="text-slate-400 text-sm">{f.description}</div>
                    </div>
                  ))}
                </div>
              )}

              {offer.pricing && offer.pricing.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Pricing</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {offer.pricing.map((p) => (
                      <div key={p.plan} className="card p-6">
                        <div className="flex items-baseline gap-2 mb-2">
                          <div className="text-lg font-semibold">{p.plan}</div>
                          {p.price && <div className="text-emerald-300">{p.price}</div>}
                        </div>
                        {p.details && <div className="text-slate-400 text-sm">{p.details}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {offer.links?.marketplace && (
                  <a
                    href={offer.links.marketplace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-indigo-600"
                  >
                    View on Azure Marketplace
                  </a>
                )}
                {offer.links?.sales && (
                  <a
                    href={offer.links.sales}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Request Demo
                  </a>
                )}
                {offer.links?.docs && (
                  <a
                    href={offer.links.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View Docs
                  </a>
                )}
                <Link href={offer.links?.contact ?? '/contact'} className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-1">
              {offer.audience && (
                <div className="card p-6 mb-6">
                  <div className="font-semibold mb-3">Best for</div>
                  <div className="flex flex-wrap gap-2">
                    {offer.audience.map((a) => (
                      <span key={a} className="badge bg-slate-800 text-slate-300">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="card p-6">
                <div className="font-semibold mb-3">About Terprint</div>
                <p className="text-slate-400 text-sm">
                  Terprint is an Azure-native cannabis data platform providing menu aggregation, COA extraction, and analytics.
                </p>
              </div>

              {offer.requirements && offer.requirements.length > 0 && (
                <div className="card p-6 mt-6">
                  <div className="font-semibold mb-3">Requirements</div>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {offer.requirements.map((r) => (
                      <li key={r} className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
