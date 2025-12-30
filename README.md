# Acidni LLC Corporate Website

Modern corporate website for Acidni LLC — showcasing AI consulting, application modernization services, and our published software products.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📦 Our Products

### ACCM - Acidni Copilot Chat Manager
**VS Code Extension** — Manage, search, export, and organize your GitHub Copilot chat histories.

- 🔗 [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager)
- 🔗 [GitHub](https://github.com/Acidni-LLC/copilot-chat-manager)

### Terprint
**SaaS Platform** — Cannabis data intelligence for Florida medical marijuana dispensaries.

- 🔗 [Website](https://terprint.com)

---

## 📁 Project Structure

```
acidni-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/              # Utility functions
│   └── styles/           # Global styles
├── public/               # Static assets
├── docs/                 # Documentation
│   ├── CONTENT.md        # All website copy
│   └── DEPLOYMENT.md     # Deployment guide
└── .github/
    └── copilot-instructions.md  # AI coding instructions
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React, Heroicons
- **Language:** TypeScript
- **Deployment:** Azure Static Web Apps

---

## 📄 Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, services, products showcase |
| Services | `/services/` | Services landing page |
| AI Consulting | `/services/ai-consulting/` | AI adoption services |
| App Modernization | `/services/app-modernization/` | Legacy modernization |
| Custom Development | `/services/custom-development/` | Custom software |
| Products | `/products/` | Software products |
| ACCM | `/products/accm/` | Copilot Chat Manager |
| Terprint | `/products/terprint/` | Terprint product page |
| Terprint Offers | `/products/terprint/offers/` | List of Terprint marketplace products |
| Offer Detail | `/products/terprint/offers/[slug]` | Individual offer overview page |
| About | `/about/` | Company information |
| Contact | `/contact/` | Contact form |

---

## 🎨 Design

- **Theme:** Dark mode with blue/purple accents
- **Typography:** Poppins (headings), Inter (body)
- **Colors:** See `tailwind.config.ts` for full palette

---

## 📦 Deployment

Automated via GitHub Actions. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for details.

On push to `master`, the workflow builds and deploys to Azure Static Web Apps.

---

## 📝 Content

All website copy is documented in [docs/CONTENT.md](docs/CONTENT.md). Update that file for content changes.

---

## 🧩 Terprint Offers (Marketplace Import)

To display concise, actionable summaries of Terprint marketplace products:

1. Generate offers from your marketplace repo.

```bash
npm run import:terprint "C:\\Users\\JamiesonGill\\Documents\\GitHub\\Acidni-LLC\\terprint-marketplace\\marketplace-offers\\offers"
```

2. The script writes a compact module to:

- `src/lib/terprint-offers.generated.ts`

3. Pages automatically use the generated data. If the generated file is empty, the site falls back to manual defaults in `src/lib/terprint-offers.ts`.

4. Visit:

- `/products/terprint/offers` for the index
- `/products/terprint/offers/<slug>` for details

Fields shown: name, tagline, summary, features (up to 6), pricing (up to 4), audience, and CTAs (Azure Marketplace, Demo, Docs, Contact).

Note: You can rerun the import anytime as listings evolve.

---

## 🤖 AI Development

This project includes comprehensive Copilot instructions in `.github/copilot-instructions.md`. Open this project in VS Code with Copilot to get AI assistance tailored to this codebase.

---

## 📞 Contact

- **Email:** contact@acidni.net
- **Website:** https://acidni.net
- **GitHub:** https://github.com/Acidni-LLC
- **VS Marketplace:** https://marketplace.visualstudio.com/publishers/AcidniLLC

---

© 2025 Acidni LLC. All rights reserved.
