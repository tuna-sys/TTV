import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { OfficialChannels } from '../components/OfficialChannels';
import { RecruitmentCaseStudy } from '../components/RecruitmentCaseStudy';
import { HomeNeedsRouting } from '../components/HomeNeedsRouting';
import { currentPartners } from '../data/siteData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <RecruitmentCaseStudy />

        <section id="doi-tac" className="scroll-mt-36 border-b border-slate-200 bg-white" aria-labelledby="partners-heading">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:px-8">
            <div className="max-w-md">
              <h2 id="partners-heading" className="text-3xl font-black tracking-[-0.03em] text-slate-950">Doanh nghiệp đang phối hợp</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Danh sách doanh nghiệp được Tri Thức Việt xác nhận ngày {currentPartners.confirmedAt}. Website không công bố phạm vi hợp tác riêng của từng đơn vị.</p>
            </div>
            <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-4" aria-label="Danh sách doanh nghiệp đang phối hợp">
              {currentPartners.logos.map((partner) => (
                <li key={partner.name} className="flex min-h-24 items-center justify-center border-b border-r border-slate-200 bg-white p-4 sm:min-h-28">
                  <Image src={partner.src} alt={`Logo ${partner.name}`} width={350} height={160} sizes="(min-width: 1024px) 18vw, 50vw" className="h-auto max-h-16 w-full object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="ky-ket-chuyen-doi-so" className="scroll-mt-36 border-b border-slate-200 bg-slate-950 text-white" aria-labelledby="digital-signing-heading">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
            <div className="max-w-xl">
              <h2 id="digital-signing-heading" className="text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                Ký kết hợp tác chuyển đổi số
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Hình ảnh lễ ký kết giữa Tri Thức Việt và Công ty Cổ phần HBLAB trong chương trình chuyển đổi số doanh nghiệp.
              </p>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <Image
                src="/images/all/le-ky-ket-hblab.jpg"
                alt="Đại diện Tri Thức Việt và HBLAB tại lễ ký kết hợp tác chuyển đổi số"
                width={2048}
                height={1536}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-300">
                Tư liệu lễ ký kết hợp tác chuyển đổi số giữa Tri Thức Việt và HBLAB.
              </figcaption>
            </figure>
          </div>
        </section>

        <HomeNeedsRouting />
      </main>
      <OfficialChannels />
      <Footer />
    </div>
  );
}
