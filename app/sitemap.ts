import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site-url';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/gioi-thieu', '/giai-phap-doanh-nghiep', '/nguoi-lao-dong', '/nang-luc-tuyen-nguon', '/lien-he', '/chinh-sach-bao-ve-du-lieu-ca-nhan'];
  return routes.map((route) => ({
    url: absoluteUrl(route || '/'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
