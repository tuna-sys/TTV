import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ActivityCarousel } from '@/components/ActivityCarousel';
import { currentPartners, legalEntity, officialChannels, publicOperationalCapacity, publicRecruitmentEvidence, siteConfig } from '@/data/siteData';
import { absoluteUrl } from '@/lib/site-url';
import { ScrambleText } from '@/components/ScrambleText';

export const metadata: Metadata = {
  title: 'Giới thiệu & hồ sơ năng lực | Tri Thức Việt',
  description: 'Hồ sơ pháp nhân, năng lực vận hành, đối tác và tư liệu hoạt động của Tri Thức Việt.',
  alternates: { canonical: '/gioi-thieu' },
  openGraph: {
    title: 'Giới thiệu & hồ sơ năng lực | Tri Thức Việt',
    description: 'Thông tin pháp nhân, năng lực vận hành và đầu mối liên hệ có thể đối chiếu.',
    url: absoluteUrl('/gioi-thieu'),
  },
};

const legalFields = [
  ['Tên pháp nhân', legalEntity.legalName],
  ['Tên viết tắt', legalEntity.alternateName],
  ['Mã số thuế', legalEntity.taxId],
  ['Người đại diện theo pháp luật', legalEntity.legalRepresentative],
  ['Ngày đăng ký', legalEntity.registrationDate],
  ['Địa chỉ đăng ký', legalEntity.registeredAddress],
];

const activityEvidence = [
  { src: '/images/activities/originals/gala-dinner.png', alt: 'Tập thể Tri Thức Việt tại sự kiện Gala Dinner', label: 'Gala Dinner Tri Thức Việt' },
  { src: '/images/activities/originals/tet-van-duong.png', alt: 'Hoạt động trao quà tại Trường Mầm non Vân Dương', label: 'Hoạt động cộng đồng' },
  { src: '/images/activities/originals/xuat-phat-xe-0-dong.png', alt: 'Chương trình Chuyến xe 0 đồng của Tri Thức Việt', label: 'Chuyến xe 0 đồng' },
  { src: '/images/activities/originals/doi-xe.png', alt: 'Đội xe mang nhận diện Tri Thức Việt', label: 'Đội xe đưa đón' },
  { src: '/images/activities/originals/hoat-dong-ha-giang.png', alt: 'Người lao động tập trung tại Trung tâm dịch vụ việc làm', label: 'Kết nối người lao động' },
  { src: '/images/activities/originals/hoat-dong-gia-binh.png', alt: 'Hoạt động trao quà Tết tại đơn vị quân đội', label: 'Hoạt động cộng đồng dịp Tết' },
  { src: '/images/activities/originals/xe-dua-don-tet.png', alt: 'Xe đưa người lao động về quê đón Tết', label: 'Đưa người lao động về quê đón Tết' },
  { src: '/images/activities/originals/su-kien-ket-noi.png', alt: 'Đại diện Tri Thức Việt tại sự kiện kết nối nhà trường và doanh nghiệp', label: 'Sự kiện kết nối' },
  { src: '/images/activities/originals/van-phong-tri-thuc-viet.png', alt: 'Đội ngũ Tri Thức Việt tại trụ sở', label: 'Đội ngũ tại trụ sở' },
  { src: '/images/activities/originals/le-ky-ket.png', alt: 'Lễ ký kết thỏa thuận hợp tác giữa nhà trường và doanh nghiệp', label: 'Lễ ký kết hợp tác' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <section id="tong-quan" className="scroll-mt-36 border-b border-slate-800 bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-balance text-4xl font-black leading-[1.08] tracking-[-0.035em] sm:text-5xl"><ScrambleText text="Hồ sơ năng lực Tri Thức Việt" /></h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">Tập hợp các thông tin pháp nhân, năng lực vận hành, đối tác và tư liệu thực tế để doanh nghiệp và người lao động thuận tiện đối chiếu.</p>
            </div>
            <nav aria-label="Mục lục hồ sơ" className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-blue-200">
              <a href="#phap-nhan" className="hover:text-white">Pháp nhân</a>
              <a href="#nang-luc" className="hover:text-white">Năng lực</a>
              <a href="#doi-tac" className="hover:text-white">Đối tác</a>
              <a href="#hoat-dong" className="hover:text-white">Hoạt động</a>
            </nav>
          </div>
        </section>

        <section id="phap-nhan" className="scroll-mt-24 border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950">Thông tin pháp nhân</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Doanh nghiệp xác nhận đây là pháp nhân vận hành website. Thông tin được đối chiếu với nguồn công khai ngày {legalEntity.verifiedAt}; hồ sơ đăng ký doanh nghiệp bản gốc là căn cứ ưu tiên nếu có khác biệt.</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-blue-700">
                <a href={legalEntity.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline decoration-blue-200 underline-offset-4 hover:text-blue-800">Nguồn mã số thuế <ExternalLink className="h-3.5 w-3.5" /></a>
                <a href={legalEntity.crossCheckUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline decoration-blue-200 underline-offset-4 hover:text-blue-800">Nguồn đối chiếu <ExternalLink className="h-3.5 w-3.5" /></a>
              </div>
            </div>
            <dl className="overflow-hidden rounded-2xl border border-slate-200">
              {legalFields.map(([label, value]) => (
                <div key={label} className="grid gap-2 border-b border-slate-200 px-5 py-4 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-5 sm:px-6">
                  <dt className="text-sm font-bold text-slate-950">{label}</dt>
                  <dd className="text-sm leading-6 text-slate-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="nang-luc" className="scroll-mt-24 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black tracking-[-0.03em]">Năng lực vận hành được công bố</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">Số liệu tổng hợp theo {publicRecruitmentEvidence.sourceLabel}, cập nhật {publicRecruitmentEvidence.confirmedAt}. Khả năng bố trí thực tế phụ thuộc từng chương trình, khu vực và thời điểm.</p>
            </div>
            <dl className="mt-8 grid divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="py-6 sm:pr-6">
                <dt className="text-sm leading-6 text-slate-300">Lượt tuyển dụng năm 2025</dt>
                <dd className="mt-2 text-4xl font-black tabular-nums tracking-[-0.03em]">{publicRecruitmentEvidence.annualRecruitment}</dd>
              </div>
              <div className="py-6 sm:px-6">
                <dt className="text-sm leading-6 text-slate-300">Bình quân mỗi tháng</dt>
                <dd className="mt-2 text-4xl font-black tabular-nums tracking-[-0.03em]">{publicRecruitmentEvidence.monthlyAverage}</dd>
              </div>
              <div className="py-6 sm:pl-6">
                <dt className="text-sm leading-6 text-slate-300">Phạm vi phục vụ</dt>
                <dd className="mt-2 text-base font-bold leading-7 text-white">{publicRecruitmentEvidence.serviceCoverage}</dd>
              </div>
            </dl>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <figure className="overflow-hidden rounded-2xl bg-slate-900">
                <div className="relative aspect-[4/3] bg-slate-900"><Image src="/images/activities/originals/doi-xe.png" alt="Đội xe trong hệ thống hỗ trợ đưa đón người lao động của Tri Thức Việt" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /></div>
                <figcaption className="px-5 py-4 text-sm leading-6 text-slate-300">Hình ảnh đội xe trong hệ thống hỗ trợ đưa đón người lao động.</figcaption>
              </figure>
              <dl className="divide-y divide-white/10 border-y border-white/10">
                {publicOperationalCapacity.items.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="text-sm leading-6 text-slate-300">{item.label}</dt>
                    <dd className="text-2xl font-black tabular-nums text-white">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="doi-tac" className="scroll-mt-24 border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:px-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950">Đối tác hiện tại</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Tri Thức Việt xác nhận đang phối hợp với các doanh nghiệp dưới đây vào ngày {currentPartners.confirmedAt}. Logo được công bố theo thông tin doanh nghiệp cung cấp.</p>
            </div>
            <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-4" aria-label="Đối tác hiện tại của Tri Thức Việt">
              {currentPartners.logos.map((partner) => (
                <li key={partner.name} className="flex min-h-24 items-center justify-center border-b border-r border-slate-200 bg-slate-50 p-4 sm:min-h-28"><Image src={partner.src} alt={`Logo ${partner.name}`} width={350} height={160} sizes="(min-width: 1024px) 18vw, 50vw" className="h-auto max-h-16 w-full object-contain" /></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="hoat-dong" className="scroll-mt-24 border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950">Tư liệu hoạt động</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Các hình ảnh được doanh nghiệp cho phép sử dụng, ghi lại đội ngũ và hoạt động hỗ trợ người lao động.</p>
            </div>
            <figure className="mt-8 overflow-hidden rounded-2xl bg-slate-950 text-white">
              <Image src="/images/activities/tri-thuc-viet-17-nam.jpg" alt="Ấn phẩm kỷ niệm 17 năm phát triển của Tri Thức Việt với hình ảnh đội ngũ, đội xe và trụ sở" width={2000} height={740} sizes="(min-width: 1280px) 1216px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)" className="h-auto w-full" />
              <figcaption className="px-5 py-4 text-sm leading-6 text-slate-300 sm:px-6">17 năm xây dựng và phát triển cùng hình ảnh đội ngũ, hạ tầng đưa đón và trụ sở Tri Thức Việt.</figcaption>
            </figure>
            <ActivityCarousel items={activityEvidence} />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid gap-8 rounded-2xl bg-slate-950 p-6 text-white sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
              <div><ShieldCheck className="h-7 w-7 text-blue-300" /><h2 className="mt-4 text-3xl font-black tracking-[-0.03em]">Liên hệ qua kênh chính thức</h2><p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">Vui lòng đối chiếu đầu mối phụ trách trước khi ký kết hoặc chuyển hồ sơ.</p></div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href={`mailto:${siteConfig.email}`} className="flex min-w-0 items-center gap-3 rounded-xl bg-white/10 p-4 hover:bg-white/15"><Mail className="h-5 w-5 flex-none text-blue-300" /><span className="min-w-0 break-all text-sm font-bold">{siteConfig.email}</span></a>
                <a href={officialChannels.phones[0].href} className="flex items-center gap-3 rounded-xl bg-white/10 p-4 hover:bg-white/15"><Phone className="h-5 w-5 flex-none text-blue-300" /><span className="text-sm font-bold">{officialChannels.phones[0].display}</span></a>
                <a href={officialChannels.map} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-white/10 p-4 hover:bg-white/15"><MapPin className="h-5 w-5 flex-none text-blue-300" /><span className="text-sm font-bold">Vị trí trên Google Maps</span></a>
                <a href={officialChannels.facebookPage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-white/10 p-4 hover:bg-white/15"><ExternalLink className="h-5 w-5 flex-none text-blue-300" /><span className="text-sm font-bold">Trang Facebook</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
