import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/utils/site';

const ROUTES = ['', '/about', '/mission', '/whitepaper', '/news'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === '/news' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
