# Acidni Website — Architecture

> Modern corporate website for Acidni LLC — static site deployed to Azure Static Web Apps.

## System Overview

```text
┌────────────────────────────────────────────────┐
│            Azure Static Web Apps               │
│  ┌──────────────────┐  ┌───────────────────┐   │
│  │  Next.js SSG     │  │  Azure Functions  │   │
│  │  (Static Export) │  │  /api/* routes    │   │
│  └──────────────────┘  └───────────────────┘   │
└────────────────────────┬───────────────────────┘
                         │
    ┌────────────────────┼────────────────────┐
    ▼                    ▼                    ▼
┌────────┐       ┌─────────────┐      ┌──────────┐
│ IONOS  │       │ Azure APIM  │      │ GA4      │
│ DNS    │       │ (Backend)   │      │ Analytics│
└────────┘       └─────────────┘      └──────────┘
```

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js (Static Export) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Hosting | Azure Static Web Apps |
| API Layer | Azure Functions (Node.js) |
| DNS | IONOS (via acidni-dns) |
| Analytics | Google Analytics 4 |
| CI/CD | GitHub Actions (2 workflows) |

## Project Structure

| Directory | Purpose |
|-----------|---------|
| `src/` | Next.js pages, components, styles |
| `public/` | Static assets (images, favicon) |
| `api/` | Azure Functions API (health endpoint, contact, feedback) |
| `packages/` | Shared packages |
| `scripts/` | Build and deployment scripts |
| `docs/` | Documentation |
| `__tests__/` | Jest test suite |

## Deployment

- Push to `master` → GitHub Actions → Azure Static Web Apps
- Static export (no SSR) with SWA config routing
- Custom domain: `www.acidni.net`

## CMDB Reference

Product code: `awebsite` | CI ID: `APP-000051` | Status: published
