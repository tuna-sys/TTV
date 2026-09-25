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
    <section id="kenh-chinh-thuc" aria-labelledby="official-channels-heading" className="scroll-mt-36 border-y border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
            Kết Nối Chính Thức
          </span>
          <h2 id="official-channels-heading" className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Kênh Chính Thức Để Theo Dõi & Liên Hệ
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Xem hoạt động trên Facebook, kiểm tra vị trí trên bản đồ và liên hệ trực tiếp với Tri Thức Việt qua các kênh đã xác thực.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Card 1: Facebook */}
          <div className="group rounded-3xl bg-slate-900 p-8 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 lg:col-span-5 flex flex-col justify-between border border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Share2 className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                Kênh Mạng Xã Hội
              </span>
              <h3 className="text-xl sm:text-2xl font-black">Hoạt Động Trên Facebook</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Theo dõi các bản tin tuyển dụng, video thực tế và hoạt động đồng hành cùng người lao động được cập nhật liên tục.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={channels.contact.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-500 shadow-md shadow-blue-600/30 active:scale-95"
              >
                <span>Theo dõi Facebook</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={channels.featuredPost}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-bold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800 active:scale-95"
              >
                <span>Xem bài đăng nổi bật</span>
                <Images className="h-4 w-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Cards Right: Google Maps + Direct Contacts */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {/* Card 2: Google Maps */}
            <a
              href={channels.contact.map}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-emerald-50/60 p-8 border border-emerald-200/80 shadow-sm hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Định Vị Trụ Sở
                </span>
                <h3 className="text-xl font-black text-slate-900">Vị Trí Trên Google Maps</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Phố Cầu Ngà, Phường Nam Sơn, Tỉnh Bắc Ninh. Mở bản đồ để nhận chỉ đường đến văn phòng.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-emerald-200/60">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-800 group-hover:underline">
                  <span>Mở ứng dụng bản đồ</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>

            {/* Card 3: Direct Contact */}
            <div className="group rounded-3xl bg-slate-50 p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                  Đầu Mối Liên Hệ
                </span>
                <h3 className="text-xl font-black text-slate-900">Liên Hệ Trực Tiếp</h3>
                <a
                  href={`mailto:${channels.contact.email}`}
                  className="mt-3 block break-all text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  {channels.contact.email}
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 space-y-2.5">
                {channels.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={phoneLink(phone)}
                    className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-700 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3 w-3" />
                    </div>
                    <span>{phone}</span>
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
