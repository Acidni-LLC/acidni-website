# Acidni LLC Corporate Website - Copilot Instructions

## 🎯 Project Overview

You are building the **Acidni LLC corporate website** — a modern, professional site showcasing our AI consulting, application modernization services, and packaged software products.

**Company**: Acidni LLC  
**Domain**: acidni.net  
**Industry**: Enterprise Software Consulting & AI Solutions  
**Target Audience**: CTOs, IT Directors, Enterprise Architects, Business Decision Makers, Developers

---

## 🏢 About Acidni LLC

### Company Description
Acidni LLC is a technology consulting company specializing in:
1. **AI Adoption & Integration** — Helping enterprises implement AI/ML solutions
2. **Application Modernization** — Migrating legacy systems to modern cloud architectures
3. **Packaged Software Products** — Building and selling SaaS solutions and developer tools

### Mission Statement
> "Empowering enterprises to embrace the future through intelligent AI adoption and seamless application modernization."

### Value Proposition
- Deep expertise in Microsoft Azure, AI/ML, and modern development practices
- Proven track record with real products (Terprint, ACCM)
- End-to-end delivery: strategy → architecture → implementation → support
- Focus on practical, business-value-driven solutions

---

## 🚀 Our Products

### Product 1: ACCM - Acidni Copilot Chat Manager
**Type**: VS Code Extension (Published on VS Marketplace)  
**URL**: https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager  
**GitHub**: https://github.com/Acidni-LLC/copilot-chat-manager

**Description**: A powerful VS Code extension for managing, organizing, searching, and exporting GitHub Copilot chat histories with word clouds and deep search.

**Key Features**:
- 📊 Dashboard view with statistics and word cloud visualization
- 🗂️ Sidebar views: All Chats, By Workspace, Recent
- 📤 Export to JSON, Markdown, or HTML
- 📥 Import chats with duplicate detection
- 🔍 Full-text search and deep search with context highlighting
- 🏷️ Project attachment for organization

**Why It Matters**: Developers using GitHub Copilot generate valuable conversations that get lost. ACCM helps developers preserve, organize, and search their AI pair-programming knowledge.

---

### Product 2: Terprint
**Type**: SaaS Platform (Azure Marketplace)  
**URL**: https://terprint.com  
**Industry**: Cannabis/Medical Marijuana Data Analytics

**Description**: Terprint is a comprehensive data platform for the Florida medical marijuana industry. We aggregate dispensary menus, extract lab results, and provide actionable analytics.

**Key Features**:
- Real-time menu aggregation from Florida dispensaries
- COA (Certificate of Analysis) data extraction
- Terpene profiles and cannabinoid percentages
- Custom Power BI visualizations (Terpene Radar)
- Azure-native architecture
- Available on Azure Marketplace

**Why It Matters**: Medical marijuana patients need accurate terpene and cannabinoid data to make informed decisions. Terprint provides the data infrastructure the industry needs.

---

## 📄 Website Pages & Structure

### 1. **Home Page** (`/`)
- Hero section with bold tagline and CTA
- Quick overview of 3 service pillars (AI, Modernization, Products)
- Featured products section (ACCM and Terprint)
- Client logos / trust indicators (if available)
- Contact CTA

### 2. **Services** (`/services/`)
Main services landing page with cards linking to:

#### 2a. AI Consulting (`/services/ai-consulting/`)
- AI strategy and roadmap development
- Machine learning model development
- Azure OpenAI / Copilot integration
- Intelligent automation (RPA + AI)
- Data analytics and insights platforms

#### 2b. Application Modernization (`/services/app-modernization/`)
- Legacy system assessment
- Cloud migration (Azure-first)
- Microservices architecture
- API modernization
- DevOps transformation
- Containerization (Docker, Kubernetes)

#### 2c. Custom Development (`/services/custom-development/`)
- Full-stack application development
- Azure Functions / serverless solutions
- VS Code extensions
- Power Platform solutions
- Integration services

### 3. **Products** (`/products/`)
Showcase packaged software:

#### 3a. ACCM (`/products/accm/`)
- VS Code extension for Copilot chat management
- Features: Dashboard, Export, Search, Word Clouds
- Link to VS Marketplace
- Installation instructions
- GitHub link

#### 3b. Terprint (`/products/terprint/`)
- Cannabis dispensary data aggregation platform
- Real-time menu data, terpene profiles, COA extraction
- Power BI analytics and custom visualizations
- Azure Marketplace SaaS offering
- Link to terprint.com

### 4. **About** (`/about/`)
- Company story and founding
- Team (if applicable)
- Technology partnerships (Microsoft Partner Network)
- Company values

### 5. **Case Studies** (`/case-studies/`)
- ACCM: Solving the Copilot chat history problem
- Terprint: End-to-end data platform
- (Future case studies from consulting engagements)

### 6. **Contact** (`/contact/`)
- Contact form
- Email: contact@acidni.net
- Location (if applicable)
- Calendly or meeting scheduler embed

---

## 🎨 Design Guidelines

### Visual Style
- **Modern & Professional** — Clean, minimal, enterprise-appropriate
- **Tech-forward** — Subtle tech/AI visual elements (gradients, abstract patterns, code snippets)
- **High contrast** — Dark mode preferred with vibrant accent colors
- **Animations** — Subtle Framer Motion animations for polish

### Color Palette
```
Primary Blue:    #0ea5e9 (acidni-500)
Dark Blue:       #0c4a6e (acidni-900)
Accent Purple:   #d946ef (accent-500)
Background:      #0f172a (slate-900) or #ffffff
Text Primary:    #f8fafc (slate-50) on dark / #0f172a on light
Text Secondary:  #94a3b8 (slate-400)
```

### Typography
- **Headings**: Poppins (bold, display)
- **Body**: Inter (clean, readable)
- **Code/Tech**: JetBrains Mono

### Components to Build
- Responsive navbar with mobile menu
- Hero sections with gradient backgrounds
- Service cards with icons
- Product showcase cards with badges (NEW, PUBLISHED)
- Feature grids
- Testimonial/quote blocks
- CTA sections
- Footer with links and social

---

## 🛠️ Technical Requirements

### Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + Heroicons
- **Deployment**: Azure Static Web Apps

### File Structure
```
acidni-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── ai-consulting/page.tsx
│   │   │   ├── app-modernization/page.tsx
│   │   │   └── custom-development/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   ├── accm/page.tsx
│   │   │   └── terprint/page.tsx
│   │   ├── about/page.tsx
│   │   ├── case-studies/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Products.tsx
│   │   │   └── CTA.tsx
│   │   └── shared/
│   │       ├── ContactForm.tsx
│   │       ├── ServiceCard.tsx
│   │       └── ProductCard.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.ico
└── docs/
    ├── CONTENT.md
    └── DEPLOYMENT.md
```

### SEO Requirements
- Proper meta tags on each page
- OpenGraph images
- Structured data (JSON-LD) for organization and products
- Sitemap generation
- robots.txt

---

## 📝 Content Guidelines

### Tone of Voice
- **Professional** but approachable
- **Confident** without being arrogant
- **Technical** when appropriate, but accessible to business users
- **Action-oriented** — clear CTAs

### Key Messages to Convey
1. "We help enterprises adopt AI practically and profitably"
2. "Modernize your legacy apps without disrupting your business"
3. "From strategy to code — we deliver end-to-end"
4. "Azure experts with real product experience"
5. "Our own products prove our engineering excellence"
6. "We build tools developers love" (ACCM)

### SEO Keywords
- AI consulting services
- Application modernization
- Azure cloud migration
- Enterprise AI solutions
- Legacy system modernization
- Custom software development
- Azure OpenAI integration
- Digital transformation consulting
- VS Code extension development
- GitHub Copilot tools
- Copilot chat manager

---

## 🚀 Implementation Order

When building this site, follow this order:

1. **Setup** — Install dependencies, verify build works
2. **Layout** — Navbar, Footer, base layout
3. **Home page** — Hero, services overview, products showcase, CTA
4. **Products pages** — ACCM and Terprint detailed pages
5. **Services pages** — Main services page + subpages
6. **About page** — Company info
7. **Contact page** — Form + info
8. **Polish** — Animations, responsive testing, SEO

---

## ⚠️ Important Notes

- **DO NOT** use placeholder images from external URLs — use solid color placeholders or SVG patterns
- **DO** make all pages fully responsive (mobile-first)
- **DO** use semantic HTML for accessibility
- **DO** add proper loading states and error handling
- **DO** keep bundle size reasonable — lazy load where appropriate
- **DO** add "Published on VS Marketplace" badge for ACCM
- **DO** add "Available on Azure Marketplace" badge for Terprint

---

## 🔗 Product Links

### ACCM - Acidni Copilot Chat Manager
- **VS Marketplace**: https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager
- **GitHub**: https://github.com/Acidni-LLC/copilot-chat-manager
- **Install Command**: `ext install AcidniLLC.copilot-chat-manager`

### Terprint
- **Website**: https://terprint.com
- **Sales Site**: https://sales.terprint.com
- **Azure Marketplace**: (link when available)

---

## 📞 Contact Information for Site

- **Email**: contact@acidni.net
- **Website**: https://acidni.net
- **GitHub**: https://github.com/Acidni-LLC
- **VS Marketplace Publisher**: https://marketplace.visualstudio.com/publishers/AcidniLLC
- **LinkedIn**: (add if available)

---

**Now go build an amazing website that showcases Acidni's capabilities and products!** 🚀
