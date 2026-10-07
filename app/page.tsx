import Image from 'next/image';
import Link from 'next/link';
import { HeroAnimatedStats } from '../components/HeroAnimatedStats';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ActivityZoomWall } from '../components/ActivityZoomWall';
import { HomeSummaryVideo } from '../components/HomeSummaryVideo';
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
        <HomeNeedsRouting section="needs" />
        <section className="border-b border-slate-200 bg-white" aria-labelledby="start-heading">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <h2 id="start-heading" className="text-3xl font-black tracking-tight text-slate-950">Bắt đầu từ nhu cầu của bạn</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-orange-800">Người lao động tìm việc</h3>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
                  <li>Trao đổi khu vực muốn làm, ca làm và nhu cầu đi lại, chỗ ở.</li>
                  <li>Đối chiếu công việc, thu nhập, điều kiện tuyển dụng và chính sách hỗ trợ.</li>
                  <li>Chuẩn bị hồ sơ theo hướng dẫn, xác nhận lịch phỏng vấn hoặc nhận việc.</li>
                </ol>
                <Link href="/nguoi-lao-dong" className="mt-6 inline-flex min-h-11 items-center font-bold text-orange-800 underline underline-offset-4">Xem hướng dẫn tìm việc</Link>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-800">Nhà máy cần tuyển lao động</h3>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
                  <li>Cung cấp số lượng, vị trí, địa điểm và thời gian cần người.</li>
                  <li>Thống nhất tiêu chuẩn, ca làm, chính sách và phương án tuyển dụng.</li>
                  <li>Phối hợp sàng lọc, tiếp nhận và theo dõi sau tuyển dụng.</li>
                </ol>
                <Link href="/lien-he#lien-he-truc-tiep" className="mt-6 inline-flex min-h-11 items-center font-bold text-blue-800 underline underline-offset-4">Trao đổi nhu cầu tuyển dụng</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="ve-tri-thuc-viet" className="scroll-mt-36 bg-slate-950 text-white" aria-labelledby="company-heading">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <h2 id="company-heading" className="text-3xl font-black tracking-tight sm:text-4xl">Hiểu thêm về Tri Thức Việt</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">Tìm hiểu năng lực tuyển dụng, doanh nghiệp đang phối hợp, hồ sơ pháp nhân và những hình ảnh thực tế của đội ngũ Tri Thức Việt.</p>
            <Link href="/gioi-thieu" className="mt-6 inline-flex min-h-11 items-center font-bold text-blue-200 underline underline-offset-4">Xem giới thiệu và hồ sơ năng lực</Link>
          </div>
        </section>
        <HomeSummaryVideo summaryOnly />
        <HeroAnimatedStats />
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

        <ActivityZoomWall />
        <HomeSummaryVideo teamOnly />
        <HomeNeedsRouting section="profile" />
      </main>
      <OfficialChannels />
      <Footer />
    </div>
  );
}
