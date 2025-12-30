#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

function pick(obj, keys) {
  const out = {}
  for (const k of keys) if (obj && obj[k] !== undefined) out[k] = obj[k]
  return out
}

function toSlug(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$|--+/g, '-')
}

function toOfferShape(src) {
  function getAt(obj, path) {
    try {
      return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj)
    } catch {
      return undefined
    }
  }
  function pickFirst(obj, paths, fallback) {
    for (const p of paths) {
      const v = getAt(obj, p)
      if (v !== undefined && v !== null && String(v).length > 0) return v
    }
    return fallback
  }

  const slug = src.slug || src.id || toSlug(pickFirst(src, ['title', 'name', 'listing.title', 'offer.title', 'product.name', 'metadata.name'], ''))
  const name = pickFirst(src, ['name', 'title', 'listing.title', 'offer.title', 'product.name', 'metadata.name'], slug)
  const summary = pickFirst(src, ['summary', 'shortDescription', 'listing.summary', 'listing.shortDescription', 'offer.summary'], '')
  const description = pickFirst(src, ['description', 'longDescription', 'listing.description', 'offer.description'], summary)
  const statusRaw = String(src.status || '').toLowerCase()
  const status = (
    statusRaw.includes('publish') || statusRaw.includes('public') || statusRaw.includes('live')
      ? 'available'
      : statusRaw.includes('preview') || statusRaw.includes('private preview')
      ? 'preview'
      : statusRaw.includes('coming') || statusRaw.includes('soon') || statusRaw.includes('plan')
      ? 'coming-soon'
      : (src.status || 'preview')
  )
  const links = Object.assign({}, pickFirst(src, ['links', 'listing.links', 'offer.links'], {}) || {})
  // Map common top-level URL fields into links
  if (src.azureMarketplaceUrl || src.marketplaceUrl || src.productUrl) {
    links.marketplace = src.azureMarketplaceUrl || src.marketplaceUrl || src.productUrl
  }
  if (src.docsUrl || src.documentationUrl) {
    links.docs = src.docsUrl || src.documentationUrl
  }
  if (src.websiteUrl || src.siteUrl) {
    links.website = src.websiteUrl || src.siteUrl
  }
  if (src.salesUrl || src.demoUrl) {
    links.sales = src.salesUrl || src.demoUrl
  }
  if (src.contactUrl || src.supportUrl) {
    links.contact = src.contactUrl || src.supportUrl
  }
  function titleCaseFromSlug(s) {
    return (s || '').split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  }
  function summaryFromSlug(s) {
    const lower = s.toLowerCase()
    if (lower.includes('coa')) return 'Extract structured cannabinoid and terpene data from COAs.'
    if (lower.includes('api') && lower.includes('data')) return 'API access to Terprint data and normalized entities.'
    if (lower.includes('api') && lower.includes('deals')) return 'Deals API for promotions, pricing, and trends.'
    if (lower.includes('stock')) return 'Inventory insights and stock movement reporting.'
    if (lower.includes('batch')) return 'Batch processing pipelines for large data workflows.'
    if (lower.includes('infographics')) return 'Infographics and visualizations powered by Terprint.'
    if (lower.includes('enterprise')) return 'Enterprise bundle with managed services and SLAs.'
    return 'Terprint capability available via Azure Marketplace.'
  }
  function iconFromSlug(s) {
    const lower = s.toLowerCase()
    if (lower.includes('coa')) return '🔬'
    if (lower.includes('data-api')) return '🔌'
    if (lower.includes('deals')) return '💸'
    if (lower.includes('stock')) return '📦'
    if (lower.includes('batch')) return '⚙️'
    if (lower.includes('infographics')) return '🖼️'
    if (lower.includes('enterprise')) return '🏢'
    if (lower.includes('ai') && lower.includes('chat')) return '💬'
    if (lower.includes('ai')) return '🤖'
    return '🌿'
  }
  function taglineFromSlug(s) {
    const lower = s.toLowerCase()
    if (lower.includes('data-api')) return 'Access normalized cannabis data via API'
    if (lower.includes('coa')) return 'Automated COA parsing and enrichment'
    if (lower.includes('deals')) return 'Promotions and pricing insights via API'
    if (lower.includes('stock')) return 'Inventory signals and stock movement API'
    if (lower.includes('batch')) return 'Scale pipelines for high-volume workloads'
    if (lower.includes('infographics')) return 'Branded visuals powered by Terprint'
    if (lower.includes('enterprise')) return 'Managed services with SLAs'
    if (lower.includes('ai') && lower.includes('chat')) return 'AI chat assistance powered by Azure OpenAI'
    return ''
  }
  const finalName = name && name !== slug ? name : titleCaseFromSlug(slug)
  const finalTagline = src.tagline || taglineFromSlug(slug)
  const finalSummary = summary || summaryFromSlug(slug)
  const finalDescription = description || finalSummary
  // Default helpful CTAs
  links.sales = links.sales || 'https://sales.terprint.com'
  links.contact = links.contact || '/contact'

  return {
    slug,
    name: finalName,
    tagline: finalTagline,
    summary: finalSummary,
    description: finalDescription,
    icon: pickFirst(src, ['icon', 'listing.icon'], iconFromSlug(slug)),
    status,
    audience: Array.isArray(src.audience) ? src.audience : undefined,
    features: Array.isArray(src.features) ? src.features.slice(0, 6) : undefined,
    pricing: Array.isArray(src.pricing) ? src.pricing.slice(0, 4) : undefined,
    links: pick(links, ['website', 'marketplace', 'sales', 'docs', 'contact']),
  }
}

function readJsonSafe(file) {
  try {
    const raw = fs.readFileSync(file, 'utf8')
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function collectOffers(srcDir) {
  function collectFrom(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const out = []

    // Aggregate file
    const aggregatePath = path.join(dir, 'offers.json')
    if (fs.existsSync(aggregatePath)) {
      const aggregate = readJsonSafe(aggregatePath)
      if (Array.isArray(aggregate)) {
        for (const item of aggregate) out.push(toOfferShape(item))
      }
    }

    // JSON files directly under dir
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'offers.json') {
        const data = readJsonSafe(path.join(dir, entry.name))
        if (data) {
          const slug = toSlug(path.basename(entry.name, '.json'))
          out.push(toOfferShape({ ...data, slug }))
        }
      }
    }

    // Folders: try well-known filenames; if none found, recurse
    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const sub = path.join(dir, entry.name)
      const candidates = ['listing.json', 'offer.json', 'marketplace.json']
      let data = null
      for (const c of candidates) {
        const fp = path.join(sub, c)
        if (fs.existsSync(fp)) {
          data = readJsonSafe(fp)
          if (data) break
        }
      }
      if (data) {
        out.push(toOfferShape({ ...data, slug: entry.name }))
      } else {
        // Recurse into deeper directories
        const nested = collectFrom(sub)
        out.push(...nested)
      }
    }
    return out
  }

  return collectFrom(srcDir)
}

function main() {
  const srcDir = process.argv[2]
  if (!srcDir) {
    console.error('Usage: import-terprint-offers <path-to-marketplace-offers>')
    process.exit(1)
  }
  const absSrc = path.resolve(srcDir)
  if (!fs.existsSync(absSrc)) {
    console.error('Source path not found:', absSrc)
    process.exit(1)
  }

  const offers = collectOffers(absSrc)
  const outPath = path.resolve(path.join(__dirname, '..', 'src', 'lib', 'terprint-offers.generated.ts'))
  const header = 'export const generatedOffers = ' + JSON.stringify(offers, null, 2) + '\n'
  fs.writeFileSync(outPath, header, 'utf8')
  console.log(`Wrote ${offers.length} offers →`, outPath)
}

main()
