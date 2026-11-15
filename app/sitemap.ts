import type { MetadataRoute } from 'next';

const BASE = 'https://futanatshombo.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/comment-ca-marche', '/a-propos', '/faq', '/securite', '/contact'].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.6,
  }));
}
