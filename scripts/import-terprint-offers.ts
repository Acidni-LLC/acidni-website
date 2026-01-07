#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

type SrcOffer = {
  slug?: string
  id?: string
  name?: string
  title?: string
  tagline?: string
  summary?: string
  shortDescription?: string
  description?: string
  longDescription?: string
  icon?: string
  status?: string
  audience?: string[]
  features?: { title: string; description: string }[]
  pricing?: { plan: string; price?: string; details?: string }[]
  links?: Record<string, string>
}

function pick<T extends Record<string, any>>(obj: T, keys: string[]) {
  const out: Record<string, any> = {}
  for (const k of keys) if (obj && obj[k] !== undefined) out[k] = obj[k]
  return out
}

function toOfferShape(src: SrcOffer) {
  const slug = src.slug || src.id || (src.title || src.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$|--+/g, '-')
  const name = src.name || src.title || slug
  const summary = src.summary || src.shortDescription || ''
  const description = src.description || src.longDescription || summary
  const status = (src.status || 'preview') as 'available' | 'coming-soon' | 'preview'
  const links = src.links || {}
  return {
    slug,
    name,
    tagline: src.tagline || '',
    summary,
    description,
    icon: src.icon || '🌿',
    status,
    audience: Array.isArray(src.audience) ? src.audience : undefined,
    features: Array.isArray(src.features) ? src.features.slice(0, 6) : undefined,
    pricing: Array.isArray(src.pricing) ? src.pricing.slice(0, 4) : undefined,
    links: pick(links, ['website', 'marketplace', 'sales', 'docs', 'contact']),
  }
}

function readJsonSafe(file: string): any {
  try {
    const raw = fs.readFileSync(file, 'utf8')
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function collectOffers(srcDir: string) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true })
  const offers: any[] = []
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const offerDir = path.join(srcDir, entry.name)
    const candidates = ['listing.json', 'offer.json', 'marketplace.json']
    let data: any = null
    for (const c of candidates) {
      const fp = path.join(offerDir, c)
      if (fs.existsSync(fp)) {
        data = readJsonSafe(fp)
        if (data) break
      }
    }
    if (!data) {
      const files = fs.readdirSync(offerDir).filter((f) => f.endsWith('.json'))
      for (const f of files) {
        data = readJsonSafe(path.join(offerDir, f))
        if (data && (data.name || data.title)) break
      }
    }
    if (!data) continue
    const mapped = toOfferShape({ ...data, slug: entry.name })
    offers.push(mapped)
  }
  return offers
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
