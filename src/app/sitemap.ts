import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://www.acidni.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: string[] = [
    '/',
    '/about',
    '/services',
    '/services/ai-consulting',
    '/services/app-modernization',
    '/services/cannatech',
    '/services/custom-development',
    '/services/speaking',
    '/services/training',
    '/products',
    '/products/accm',
    '/products/acca',
    '/products/ai-chat-expert',
    '/products/ai-sdo',
    '/products/terprint',
    '/products/text-a-truck',
    '/insights/what-is-an-ai-software-development-organization',
    '/case-studies',
    '/insights',
    '/contact',
    '/support',
    '/feedback',
    '/privacy',
    '/terms',
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
