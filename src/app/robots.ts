import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.acidni.net';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
