import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/content/services';
import { INDUSTRIES_DATA } from '@/content/industries';
import { WORK_DATA } from '@/content/work';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sygmiainnovative.co.in';

  const staticRoutes = [
    '',
    '/services',
    '/industries',
    '/work',
    '/about',
    '/contact'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const industryRoutes = Object.keys(INDUSTRIES_DATA).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const workRoutes = Object.keys(WORK_DATA).map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...workRoutes,
  ];
}
