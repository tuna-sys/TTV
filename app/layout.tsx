import type { Metadata } from 'next';
import './globals.css';
import { getSiteUrl } from '@/lib/site-url';
import { OrganizationJsonLd } from '@/components/OrganizationJsonLd';

export const metadata: Metadata = {
  title: 'Tri Thức Việt | Cung Ứng Nhân Lực & Giải Pháp Tuyển Nhân Viên Toàn Diện',
  description: 'Tri Thức Việt - Cầu nối tin cậy giữa Doanh nghiệp FDI và Người lao động. Chuyên cung ứng lao động phổ thông, outsourcing sản xuất nhà máy điện tử, tuyển nhân viên đa kênh và chăm sóc phúc lợi người lao động trọn gói.',
  keywords: [
    'cung ứng nhân lực',
    'lao động phổ thông',
    'tuyển dụng nhà máy',
    'outsourcing nhân sự FDI',
    'tuyển công nhân bắc ninh',
    'tuyển công nhân bắc giang',
    'tuyển công nhân thái nguyên',
    'ký túc xá công nhân',
    'Tri Thức Việt',
  ],
  authors: [{ name: 'Tri Thức Việt' }],
  creator: 'Tri Thức Việt',
  publisher: 'Tri Thức Việt',
  metadataBase: new URL(getSiteUrl()),
  alternates: { canonical: '/' },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'Tri Thức Việt | Kết nối đúng người – Đồng hành đúng nhu cầu',
    description: 'Kênh thông tin tuyển dụng và hợp tác doanh nghiệp của Tri Thức Việt. Điều kiện hỗ trợ được xác nhận theo từng chương trình cụ thể.',
    url: getSiteUrl(),
    siteName: 'Tri Thức Việt',
    locale: 'vi_VN',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Tri Thức Việt' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col selection:bg-blue-600 selection:text-white">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
