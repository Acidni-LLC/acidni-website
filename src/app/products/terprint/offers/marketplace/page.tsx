import type { Metadata } from 'next'
import Link from 'next/link'
import { offers } from '@/lib/terprint-offers'

export const metadata: Metadata = {
  title: 'Terprint Marketplace Data Overview',
  description: 'Concise, actionable overview of Terprint marketplace offers with status, summary, pricing, and links.',
}

export default function TerprintMarketplaceOverviewPage() {
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

          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <span className="text-2xl">🧾</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Marketplace Data Overview</h1>
              <p className="text-slate-400">Imported listings rendered as a concise table</p>
            </div>
          </div>

          {offers.length === 0 ? (
            <div className="card p-6">
              <div className="font-semibold mb-2">No marketplace data yet</div>
              <p className="text-slate-400 text-sm">Run the importer and refresh: npm run import:terprint "C:\\Users\\JamiesonGill\\Documents\\GitHub\\Acidni-LLC\\terprint-marketplace\\marketplace-offers\\offers"</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-400 border-b border-slate-800">
                    <th className="py-3 pr-4">Name</th>
                    <th className="py-3 pr-4">Status</th>
                    <th className="py-3 pr-4">Tagline</th>
                    <th className="py-3 pr-4">Summary</th>
                    <th className="py-3 pr-4">Audience</th>
                    <th className="py-3 pr-4">Pricing</th>
                    <th className="py-3 pr-4">Features</th>
                    <th className="py-3 pr-4">Links</th>
                  </tr>
                </thead>
                <tbody>
                  {offers.map((o) => {
                    const firstPrice = o.pricing?.[0]
                    return (
                      <tr key={o.slug} className="border-b border-slate-800/60 hover:bg-slate-800/60">
                        <td className="py-4 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{o.icon ?? '🌿'}</span>
                            <Link href={`/products/terprint/offers/${o.slug}`} className="text-acidni-300 hover:text-acidni-200 font-medium">
                              {o.name}
                            </Link>
                          </div>
                        </td>
                        <td className="py-4 pr-4">
                          {o.status === 'available' && (
                            <span className="badge bg-emerald-500/20 text-emerald-300">Available</span>
                          )}
                          {o.status === 'preview' && (
                            <span className="badge bg-amber-500/20 text-amber-300">Preview</span>
                          )}
                          {o.status === 'coming-soon' && (
                            <span className="badge bg-slate-500/20 text-slate-300">Coming Soon</span>
                          )}
                        </td>
                        <td className="py-4 pr-4 text-slate-300">{o.tagline}</td>
                        <td className="py-4 pr-4 text-slate-400">{o.summary}</td>
                        <td className="py-4 pr-4 text-slate-300">{o.audience?.join(', ')}</td>
                        <td className="py-4 pr-4">
                          {firstPrice ? (
                            <div className="text-slate-300">
                              <span className="font-medium">{firstPrice.plan}</span>
                              {firstPrice.price && <span className="ml-2 text-emerald-300">{firstPrice.price}</span>}
                            </div>
                          ) : (
                            <span className="text-slate-500">—</span>
                          )}
                        </td>
                        <td className="py-4 pr-4 text-slate-300">{o.features?.length ?? 0}</td>
                        <td className="py-4 pr-4">
                          <div className="flex flex-wrap gap-2">
                            {o.links?.marketplace && (
                              <a href={o.links.marketplace} target="_blank" rel="noopener noreferrer" className="badge bg-indigo-500/20 text-indigo-300">Marketplace</a>
                            )}
                            {o.links?.sales && (
                              <a href={o.links.sales} target="_blank" rel="noopener noreferrer" className="badge bg-emerald-500/20 text-emerald-300">Demo</a>
                            )}
                            {o.links?.docs && (
                              <a href={o.links.docs} target="_blank" rel="noopener noreferrer" className="badge bg-sky-500/20 text-sky-300">Docs</a>
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
