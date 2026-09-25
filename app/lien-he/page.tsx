import type { Metadata } from 'next';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { OfficialChannels } from '../../components/OfficialChannels';
import { officialChannels, siteConfig } from '@/data/siteData';
import { absoluteUrl } from '@/lib/site-url';
import { ScrambleText } from '@/components/ScrambleText';

export const metadata: Metadata = {
  title: 'Liên hệ Tri Thức Việt',
  description: 'Thông tin liên hệ trực tiếp của Tri Thức Việt dành cho doanh nghiệp và người lao động.',
  alternates: { canonical: '/lien-he' },
  openGraph: { url: absoluteUrl('/lien-he') },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Navbar />

      <main className="flex-1 py-12 md:py-16">
        <header className="mx-auto max-w-7xl px-4 pb-2 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl"><ScrambleText text="Liên hệ Tri Thức Việt" /></h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">Website không lưu hồ sơ trực tuyến. Vui lòng dùng các kênh chính thức dưới đây để được hướng dẫn.</p>
        </header>

        <section id="lien-he-truc-tiep" aria-labelledby="direct-contact-heading" className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-700 bg-slate-800/80 p-6 shadow-2xl sm:p-10">
            <div className="max-w-2xl">
              <h2 id="direct-contact-heading" className="text-2xl font-black text-white sm:text-3xl">Kết nối trực tiếp</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">Bạn có thể gọi điện, gửi email, nhắn tin qua Facebook hoặc mở Google Maps để xác minh đầu mối trước khi trao đổi thông tin.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 rounded-2xl bg-slate-900 p-5 transition hover:bg-slate-950">
                <Mail className="mt-0.5 h-6 w-6 flex-none text-blue-300" />
                <span><strong className="block text-sm text-white">Email</strong><span className="mt-1 block break-all text-sm font-semibold text-blue-200">{siteConfig.email}</span></span>
              </a>
              {officialChannels.phones.map((phone) => (
                <a key={phone.display} href={phone.href} className="flex items-start gap-4 rounded-2xl bg-slate-900 p-5 transition hover:bg-slate-950">
                  <Phone className="mt-0.5 h-6 w-6 flex-none text-emerald-300" />
                  <span><strong className="block text-sm text-white">Điện thoại</strong><span className="mt-1 block text-sm font-semibold text-emerald-200">{phone.display}</span></span>
                </a>
              ))}
              <a href={officialChannels.facebookPage} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl bg-slate-900 p-5 transition hover:bg-slate-950">
                <ExternalLink className="mt-0.5 h-6 w-6 flex-none text-orange-300" />
                <span><strong className="block text-sm text-white">Facebook tuyển dụng</strong><span className="mt-1 block text-sm font-semibold text-orange-200">Mở kênh chính thức <ExternalLink className="ml-1 inline h-3.5 w-3.5" /></span></span>
              </a>
              <a href={officialChannels.map} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl bg-slate-900 p-5 transition hover:bg-slate-950">
                <MapPin className="mt-0.5 h-6 w-6 flex-none text-pink-300" />
                <span><strong className="block text-sm text-white">Google Maps</strong><span className="mt-1 block text-sm font-semibold text-pink-200">Xem vị trí và chỉ đường <ExternalLink className="ml-1 inline h-3.5 w-3.5" /></span></span>
              </a>
            </div>
            <p className="mt-7 border-t border-slate-700 pt-6 text-xs leading-6 text-slate-400">Không gửi ảnh giấy tờ tùy thân hoặc thông tin nhạy cảm qua kênh chưa được xác minh.</p>
          </div>
        </section>
        <OfficialChannels />
      </main>

      <Footer />
    </div>
  );
}
