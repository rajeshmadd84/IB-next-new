import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Specifically allow AI crawlers for AEO
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://intellibyld.com/sitemap.xml',
  };
}
