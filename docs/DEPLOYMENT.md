# Acidni Website Deployment Guide

## Overview

The Acidni corporate website is deployed to **Azure Static Web Apps** using Next.js static export.

---

## Prerequisites

- Node.js 18+
- npm or pnpm
- Azure CLI (for deployment)
- Azure Static Web Apps CLI (optional)

---

## Local Development

### 1. Install Dependencies

```bash
cd acidni-website
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

### 3. Build for Production

```bash
npm run build
```

Output will be in the `out/` directory.

---

## Deployment Options

### Option 1: Azure Static Web Apps (Recommended)

#### Create Static Web App Resource

```bash
az staticwebapp create \
  --name swa-acidni-website \
  --resource-group rg-acidni-shared \
  --source https://github.com/Acidni-LLC/terprint-config \
  --location eastus2 \
  --branch main \
  --app-location "/acidni-website" \
  --output-location "out" \
  --login-with-github
```

#### Manual Deployment

```bash
# Build the site
npm run build

# Deploy using SWA CLI
npx @azure/static-web-apps-cli deploy ./out \
  --deployment-token <YOUR_DEPLOYMENT_TOKEN> \
  --env production
```

#### Get Deployment Token

```bash
az staticwebapp secrets list \
  --name swa-acidni-website \
  --resource-group rg-acidni-shared \
  --query "properties.apiKey" -o tsv
```

### Option 2: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Acidni Website

on:
  push:
    branches: [master]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: acidni-website/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Azure Static Web Apps
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          app_location: "/"
          api_location: "api"
          output_location: "out"
          skip_app_build: true

      - name: Include SWA routing config in artifact
        run: cp staticwebapp.config.json out/staticwebapp.config.json
```

---

## Custom Domain Setup

### 1. Add Custom Domain in Azure Portal

1. Go to Static Web App resource
2. Settings → Custom domains
3. Add `acidni.net` and `www.acidni.net`

### 2. DNS Configuration

Add these DNS records at your domain registrar:

| Type  | Name | Value |
|-------|------|-------|
| CNAME | www  | `<your-swa>.azurestaticapps.net` |
| A     | @    | Azure Static Web Apps IP |
| TXT   | @    | Verification token from Azure |

### 3. SSL Certificate

Azure Static Web Apps automatically provisions and manages SSL certificates.

---

## Environment Variables

Configure in Azure Portal → Static Web App → Configuration:

| Variable | Description | Example |
|----------|-------------|---------|
| `SITE_URL` | Production URL | `https://acidni.net` |
| `CONTACT_EMAIL` | Contact form destination | `contact@acidni.net` |

---

## Build Configuration

### staticwebapp.config.json

Already created in project root for routing rules:

```json
{
  "routes": [
    {
      "route": "/services/*",
      "rewrite": "/services/[slug].html"
    }
  ],
  "navigationFallback": {
    "rewrite": "/404.html",
    "exclude": ["*.{css,js,png,jpg,svg,ico,json}"]
  },
  "globalHeaders": {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
}
```

---

## Monitoring

### Application Insights (Optional)

1. Create Application Insights resource
2. Add instrumentation key to environment variables
3. Install `@microsoft/applicationinsights-web`

---

## Troubleshooting

### Build Fails

- Check Node.js version (18+ required)
- Verify all dependencies in package.json
- Run `npm run build` locally first

### 404 on Page Refresh

- Ensure `trailingSlash: true` in next.config.js
- Check staticwebapp.config.json routing

### Images Not Loading

- Use `unoptimized: true` in next.config.js for static export
- Place images in `public/images/`

---

## Useful Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Lint
npm run lint

# Preview production build locally
npx serve out
```

---

## Resources

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/)
- [SWA CLI](https://github.com/Azure/static-web-apps-cli)

---

## CI/CD Quick Setup (Windows)

Use these one-time steps to wire up GitHub Actions deployment to Azure Static Web Apps.

1) Fetch the SWA deployment token

```powershell
# Option A: Using Azure CLI (recommended)
az staticwebapp secrets list `
  --name swa-acidni-website `
  --resource-group rg-prod-acidni-mktg-web `
  --query "properties.apiKey" -o tsv > tmp_deployment_token.txt
```

2) Create the GitHub secret

```powershell
# Requires GitHub CLI: https://cli.github.com and gh auth login
./scripts/setup-gh-secret.ps1 -Repo "Acidni-LLC/acidni-website"
```

3) Add remote and push to trigger the workflow

```powershell
# If the GitHub repo already exists
./scripts/add-remote-push.ps1 -RepoUrl "https://github.com/Acidni-LLC/acidni-website.git" -Branch "master"

# If the repo is new, create it first from the GitHub UI or via gh:
# gh repo create Acidni-LLC/acidni-website --public --source . --remote origin --push
```

4) Verify deployment

```powershell
# Open Actions to watch the workflow
gh run list -R Acidni-LLC/acidni-website
```

Notes:
- Ensure the workflow at .github/workflows/deploy.yml is present.
- The workflow expects the build output in 'out/' (Next.js export).
- staticwebapp.config.json is copied into out/ during the workflow to ensure routing (e.g., /feedback) is honored.
- tmp_deployment_token.txt is gitignored to prevent committing secrets.
