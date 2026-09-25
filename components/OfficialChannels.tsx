import {
  ExternalLink,
  Images,
  Mail,
  MapPin,
  Phone,
  Share2,
} from 'lucide-react';
import { officialChannels, siteConfig } from '../data/siteData';

const channels = {
  contact: {
    email: siteConfig.email,
    phones: officialChannels.phones.map((phone) => phone.display),
    facebookPage: officialChannels.facebookPage,
    map: officialChannels.map,
  },
  featuredPost: officialChannels.featuredPost,
};

const phoneLink = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`;

export const OfficialChannels = () => {
  return (
    <section id="kenh-chinh-thuc" aria-labelledby="official-channels-heading" className="scroll-mt-36 border-y border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="official-channels-heading" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Kênh chính thức để theo dõi và kết nối
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Xem hoạt động trên Facebook, kiểm tra vị trí trên bản đồ và liên hệ trực tiếp với Tri Thức Việt.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="rounded-2xl bg-slate-900 p-7 text-white shadow-lg lg:col-span-5">
            <Share2 className="h-6 w-6 text-blue-300" />
            <h3 className="mt-5 text-xl font-bold">Hoạt động trên Facebook</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
              Theo dõi các bài đăng và nội dung hoạt động được cập nhật trên kênh Facebook của Tri Thức Việt.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={channels.contact.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                Theo dõi Facebook
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href={channels.featuredPost} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-slate-400 hover:bg-slate-800">
                Xem bài đăng hoạt động
                <Images className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            <a
              href={channels.contact.map}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-emerald-50 p-6 transition-colors hover:bg-emerald-100"
            >
              <MapPin className="h-6 w-6 text-emerald-700" />
              <h3 className="mt-5 text-base font-bold text-slate-900">Vị trí trên Google Maps</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Mở bản đồ để xem vị trí và nhận chỉ đường.</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 group-hover:underline">
                Mở chỉ đường <ExternalLink className="h-4 w-4" />
              </span>
            </a>

            <div className="rounded-2xl bg-slate-50 p-6">
              <Mail className="h-6 w-6 text-blue-700" />
              <h3 className="mt-5 text-base font-bold text-slate-900">Liên hệ trực tiếp</h3>
              <a href={`mailto:${channels.contact.email}`} className="mt-2 block break-all text-sm font-semibold text-blue-800 underline underline-offset-4 hover:text-blue-950">
                {channels.contact.email}
              </a>
              <div className="mt-4 space-y-2">
                {channels.contact.phones.map((phone) => (
                  <a key={phone} href={phoneLink(phone)} className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-800">
                    <Phone className="h-4 w-4 text-slate-500" />
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
