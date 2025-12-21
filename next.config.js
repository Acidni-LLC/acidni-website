/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export for Azure Static Web Apps
  trailingSlash: true,
  images: {
    unoptimized: true,  // Required for static export
  },
  // Environment variables for build
  env: {
    SITE_URL: process.env.SITE_URL || 'https://acidni.net',
    CONTACT_EMAIL: 'contact@acidni.net',
  },
  // Exclude API folder from Next.js compilation (handled by Azure Functions)
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, { isServer }) => {
    // Exclude api folder from being processed
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/api/**'],
    };
    return config;
  },
}

module.exports = nextConfig
