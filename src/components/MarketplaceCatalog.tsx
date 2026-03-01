'use client'

import { useState } from 'react'
import {
  marketplaceProducts,
  productCategories,
  getProductsByCategory,
  type MarketplaceProduct,
} from '@/lib/marketplace-catalog'

function StatusBadge({ status }: { status: MarketplaceProduct['status'] }) {
  const styles = {
    live: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    preview: 'bg-acidni-500/20 text-acidni-300 border-acidni-500/30',
    'coming-soon': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  }
  const labels = {
    live: '✓ Live',
    preview: 'Preview',
    'coming-soon': 'Coming Soon',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

function PricingBadge({ product }: { product: MarketplaceProduct }) {
  if (product.pricing.isCustomPricing) {
    return <span className="text-sm text-slate-400">Custom Pricing</span>
  }
  return (
    <span className="text-sm text-slate-400">
      Starting at{' '}
      <span className="text-white font-semibold">{product.pricing.startingPrice}</span>
      <span className="text-slate-500">{product.pricing.billingFrequency}</span>
    </span>
  )
}

function ProductCard({
  product,
  onShowPricing,
}: {
  product: MarketplaceProduct
  onShowPricing: (product: MarketplaceProduct) => void
}) {
  return (
    <div className="card p-6 flex flex-col h-full group hover:border-acidni-500/30 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0`}>
          <span className="text-2xl">{product.icon}</span>
        </div>
        <div className="flex items-center gap-2">
          {product.hasFreeTrial && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-violet-500/20 text-violet-300 border border-violet-500/30">
              Free Trial
            </span>
          )}
          <StatusBadge status={product.status} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
      <p className="text-sm text-acidni-400 mb-3">{product.tagline}</p>
      <p className="text-sm text-slate-400 mb-4 line-clamp-3 flex-grow">{product.description}</p>

      {/* Pricing */}
      <div className="mb-4 pb-4 border-b border-slate-700/50">
        <PricingBadge product={product} />
      </div>

      {/* Plans Preview */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-1.5">
          {product.plans.map((plan) => (
            <span
              key={plan.name}
              className={`text-xs px-2 py-1 rounded-md ${
                plan.isPopular
                  ? 'bg-acidni-500/20 text-acidni-300 border border-acidni-500/30'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {plan.name}{plan.price !== 'Custom' ? ` ${plan.price}` : ''}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-auto">
        {product.links.website ? (
          <a
            href={product.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4 flex-1 text-center"
          >
            Learn More
          </a>
        ) : (
          <span className="btn-primary text-sm py-2 px-4 flex-1 text-center opacity-60 cursor-not-allowed">
            Coming Soon
          </span>
        )}
        <button
          onClick={() => onShowPricing(product)}
          className="btn-secondary text-sm py-2 px-4"
        >
          Pricing
        </button>
      </div>
    </div>
  )
}

function PricingModal({
  product,
  onClose,
}: {
  product: MarketplaceProduct
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-slate-900 border border-slate-700/50 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
          aria-label="Close pricing modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="p-6 pb-0 sm:p-8 sm:pb-0">
          <div className="flex items-center gap-4 mb-2">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
              <span className="text-2xl">{product.icon}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{product.name}</h2>
              <p className="text-sm text-slate-400">{product.tagline}</p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="p-6 sm:p-8">
          <div className={`grid gap-4 ${
            product.plans.length <= 2 ? 'md:grid-cols-2' :
            product.plans.length === 3 ? 'md:grid-cols-3' :
            'md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {product.plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-5 border ${
                  plan.isPopular
                    ? 'border-acidni-500/50 bg-acidni-500/5 ring-1 ring-acidni-500/20'
                    : 'border-slate-700/50 bg-slate-800/30'
                }`}
              >
                {plan.isPopular && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-acidni-500/20 text-acidni-300 mb-3">
                    ⭐ Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.frequency && (
                    <span className="text-sm text-slate-400">{plan.frequency}</span>
                  )}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400 mb-3">
              Need a custom plan? Want to discuss enterprise requirements?
            </p>
            <a href="/contact" className="btn-primary text-sm py-2 px-6">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MarketplaceCatalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<MarketplaceProduct | null>(null)

  const filteredProducts = getProductsByCategory(activeCategory)

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {productCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-acidni-500/20 text-acidni-300 border border-acidni-500/40'
                : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:text-slate-300 hover:border-slate-600'
            }`}
          >
            <span className="mr-1.5">{cat.icon}</span>
            {cat.name}
            <span className="ml-1.5 text-xs opacity-60">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onShowPricing={(p) => setSelectedProduct(p)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-400 text-lg">No products in this category yet.</p>
        </div>
      )}

      {/* Pricing Modal */}
      {selectedProduct && (
        <PricingModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  )
}
