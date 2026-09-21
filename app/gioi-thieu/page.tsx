import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CompanyDevelopmentCaseStudy } from '@/components/CompanyDevelopmentCaseStudy';
import { currentPartners, legalEntity, officialChannels, publicOperationalCapacity, publicRecruitmentEvidence, siteConfig } from '@/data/siteData';
import { absoluteUrl } from '@/lib/site-url';

export const metadata: Metadata = {
  title: 'Giới thiệu & hồ sơ năng lực | Tri Thức Việt',
  description: 'Thông tin doanh nghiệp, phạm vi hoạt động, năng lực, hồ sơ pháp lý và các kênh có thể kiểm chứng của Tri Thức Việt.',
  alternates: { canonical: '/gioi-thieu' },
  openGraph: {
    title: 'Giới thiệu & hồ sơ năng lực | Tri Thức Việt',
    description: 'Tách rõ thông tin đã xác minh, bằng chứng đang bổ sung và đầu mối liên hệ chính thức.',
    url: absoluteUrl('/gioi-thieu'),
  },
};

const legalFields = [
  ['Tên pháp nhân đầy đủ', legalEntity.legalName],
  ['Tên viết tắt', legalEntity.alternateName],
  ['Mã số doanh nghiệp / mã số thuế', legalEntity.taxId],
  ['Người đại diện theo pháp luật', legalEntity.legalRepresentative],
  ['Ngày đăng ký / hoạt động công khai', legalEntity.registrationDate],
  ['Tình trạng hoạt động', legalEntity.status],
  ['Địa chỉ đăng ký', legalEntity.registeredAddress],
];

const evidenceRequirements = [
  { title: 'Năng lực tuyển dụng', detail: 'Tổng năm 2025 và bình quân tháng.' },
  { title: 'Phạm vi phục vụ', detail: 'Nguồn ứng viên liên vùng tại Bắc Bộ và Bắc Trung Bộ.' },
];

const activityGallery = [
  { src: '/images/activities/ha-giang-sharp.png', alt: 'Hoạt động của Tri Thức Việt tại Hà Giang', label: 'Hà Giang' },
  { src: '/images/activities/gia-binh-sharp.png', alt: 'Hoạt động của Tri Thức Việt tại BCH Quân sự Gia Bình', label: 'BCH Quân sự Gia Bình' },
  { src: '/images/activities/hoa-binh-sharp.png', alt: 'Hoạt động của Tri Thức Việt tại Hòa Bình', label: 'Hòa Bình' },
  { src: '/images/activities/canon-viet-nam-sharp.png', alt: 'Hoạt động của Tri Thức Việt tại Canon Việt Nam', label: 'Canon Việt Nam' },
];

const activityEvidence = [
  { src: '/images/evidence/hoat-dong-tet-2025-cong-dong-sharp.png', alt: 'Đội ngũ Tri Thức Việt trong hoạt động cộng đồng dịp Tết 2025', label: 'Hoạt động cộng đồng · Tết 2025', width: 938, height: 874 },
  { src: '/images/evidence/hoat-dong-tet-2025-dieu-phoi-sharp.png', alt: 'Hoạt động điều phối và đưa đón người lao động dịp Tết 2025', label: 'Điều phối, đưa đón · Tết 2025', width: 932, height: 874 },
  { src: '/images/evidence/hoat-dong-tet-2025-doi-xe-sharp.png', alt: 'Đội xe đưa đón mang nhận diện Tri Thức Việt', label: 'Đội xe đưa đón', width: 654, height: 874 },
];

function VerifiedBadge() {
  return <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900"><CheckCircle2 className="h-3.5 w-3.5" /> Đã đối chiếu</span>;
}

const publishedEvidence = [{
  id: 'facebook-featured-post',
  title: 'Bài đăng hoạt động trên Facebook',
  url: officialChannels.featuredPost,
  description: 'Kênh tham khảo hoạt động tuyển nhân viên chính thức.',
}];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(37,99,235,0.28),transparent_55%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl lg:text-6xl">Uy tín cần được kiểm chứng bằng hồ sơ, con người và kết quả.</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Thông tin pháp nhân, năng lực vận hành, phạm vi phục vụ và các đối tác được trình bày rõ ràng để khách hàng và người lao động dễ dàng tìm hiểu.</p>
            </div>
            <aside className="rounded-2xl bg-white p-6 text-slate-900 shadow-[0_24px_65px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-3"><ShieldCheck className="h-7 w-7 text-blue-700" /><h2 className="text-lg font-black">Nguyên tắc công bố</h2></div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {['Có nguồn hoặc người chịu trách nhiệm xác nhận', 'Ghi rõ phạm vi và thời điểm của số liệu', 'Chỉ sử dụng hình ảnh, tên đối tác khi được phép'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-600" />{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white" aria-labelledby="legal-heading">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <Building2 className="h-8 w-8 text-blue-700" />
                <h2 id="legal-heading" className="mt-5 text-3xl font-black tracking-[-0.03em]">Thông tin pháp nhân</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">Doanh nghiệp đã xác nhận đây là pháp nhân vận hành website. Thông tin được đối chiếu với nguồn tra cứu công khai ngày {legalEntity.verifiedAt}; hồ sơ đăng ký doanh nghiệp bản gốc vẫn là căn cứ ưu tiên nếu có khác biệt.</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-blue-700">
                  <a href={legalEntity.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-blue-900">Nguồn mã số thuế <ExternalLink className="h-3.5 w-3.5" /></a>
                  <a href={legalEntity.crossCheckUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-blue-900">Nguồn đối chiếu <ExternalLink className="h-3.5 w-3.5" /></a>
                </div>
              </div>
              <dl className="overflow-hidden rounded-2xl bg-slate-50">
                {legalFields.map(([label, value]) => (
                  <div key={label} className="grid gap-3 border-b border-slate-200 px-5 py-5 last:border-b-0 sm:grid-cols-[0.8fr_1.2fr] sm:px-6">
                    <dt className="font-bold text-slate-950">{label}</dt>
                    <dd className="flex flex-wrap items-center gap-3 text-sm leading-6 text-slate-600"><span>{value}</span><VerifiedBadge /></dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-blue-950 text-white" aria-labelledby="operational-capacity-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-8">
            <div>
              <h2 id="operational-capacity-heading" className="text-3xl font-black tracking-[-0.03em]">Hạ tầng hỗ trợ người lao động</h2>
              <p className="mt-4 text-sm leading-7 text-blue-100">Hệ thống hỗ trợ đi lại và chỗ ở dành cho người lao động trong các chương trình phù hợp.</p>
            </div>
            <dl className="grid gap-px overflow-hidden rounded-2xl bg-blue-800 sm:grid-cols-3">
              {publicOperationalCapacity.items.map((item) => (
                <div key={item.label} className="bg-blue-900 px-6 py-7">
                  <dt className="text-sm leading-6 text-blue-100">{item.label}</dt>
                  <dd className="mt-2 text-4xl font-black tabular-nums tracking-[-0.03em] text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white" aria-labelledby="service-coverage-heading">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-3xl">
              <BadgeCheck className="h-8 w-8 text-blue-700" />
              <h2 id="service-coverage-heading" className="mt-5 text-3xl font-black tracking-[-0.03em]">Phạm vi phục vụ</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{publicRecruitmentEvidence.serviceCoverage}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="history-heading">
          <div className="grid gap-12 lg:grid-cols-2">
            <article>
              <CalendarDays className="h-8 w-8 text-blue-700" />
              <h2 id="history-heading" className="mt-5 text-3xl font-black tracking-[-0.03em]">Lịch sử và phạm vi hoạt động</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">Nguồn tra cứu ghi nhận pháp nhân hoạt động từ ngày {legalEntity.registrationDate}. Danh mục ngành nghề công khai có hoạt động của trung tâm, đại lý tư vấn, giới thiệu và môi giới lao động, việc làm (7810) cùng cung ứng và quản lý nguồn lao động (7830).</p>
              <div className="mt-7 flex"><VerifiedBadge /></div>
            </article>
            <article className="rounded-2xl bg-blue-950 p-7 text-white sm:p-9">
              <Scale className="h-8 w-8 text-blue-300" />
              <h2 className="mt-5 text-2xl font-black">Phạm vi dịch vụ phải có điều kiện áp dụng</h2>
              <p className="mt-4 text-sm leading-7 text-blue-100">Xe đưa đón, chỗ ở, hỗ trợ hồ sơ và các chương trình miễn phí phụ thuộc từng vị trí, khu vực, thời điểm và chính sách của đơn vị tuyển dụng. Nhân viên tư vấn có trách nhiệm xác nhận lại trước khi người lao động quyết định.</p>
            </article>
          </div>
        </section>

        <CompanyDevelopmentCaseStudy />

        <section className="bg-slate-900 py-16 text-white sm:py-20" aria-labelledby="capacity-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 id="capacity-heading" className="text-3xl font-black tracking-[-0.03em] sm:text-4xl">Năng lực thực tế phải đi cùng kỳ đo và nguồn dữ liệu.</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">Các hạng mục dưới đây thể hiện năng lực tuyển dụng và phạm vi phục vụ của Tri Thức Việt.</p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-slate-700 sm:grid-cols-2">
              {evidenceRequirements.map((item) => (
                <article key={item.title} className="bg-slate-950 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4"><h3 className="text-lg font-black">{item.title}</h3><VerifiedBadge /></div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white" aria-labelledby="partners-detail-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-8">
            <div>
              <BadgeCheck className="h-8 w-8 text-blue-700" />
              <h2 id="partners-detail-heading" className="mt-5 text-3xl font-black tracking-[-0.03em]">Đối tác hiện tại</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Tri Thức Việt xác nhận đang phối hợp với các doanh nghiệp dưới đây vào ngày {currentPartners.confirmedAt}. Website công bố logo theo thông tin doanh nghiệp cung cấp.</p>
            </div>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-4" aria-label="Đối tác hiện tại của Tri Thức Việt">
              {currentPartners.logos.map((partner) => (
                <li key={partner.name} className="flex min-h-28 items-center justify-center bg-slate-50 p-4 sm:p-5">
                  <Image src={partner.src} alt={`Logo ${partner.name}`} width={350} height={160} sizes="(min-width: 640px) 25vw, 50vw" className="h-auto max-h-20 w-full object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white" aria-labelledby="activity-heading">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-3xl">
              <BadgeCheck className="h-8 w-8 text-blue-700" />
              <h2 id="activity-heading" className="mt-5 text-3xl font-black tracking-[-0.03em]">Hoạt động thực tế</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Những hình ảnh được doanh nghiệp cho phép sử dụng, ghi lại đội ngũ Tri Thức Việt trong các hoạt động cộng đồng, tuyển dụng và sự kiện nội bộ.</p>
            </div>

            <figure className="mt-10 overflow-hidden rounded-2xl bg-slate-950 text-white shadow-xl shadow-slate-950/10">
              <Image
                src="/images/activities/gala-dinner-15-nam.jpg"
                alt="Tập thể Tri Thức Việt tại sự kiện Gala Dinner kỷ niệm chặng đường phát triển"
                width={1437}
                height={792}
                sizes="(min-width: 1280px) 1216px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                className="h-auto w-full"
              />
              <figcaption className="px-5 py-5 sm:px-7 sm:py-6">
                <h3 className="text-lg font-extrabold tracking-[-0.02em] sm:text-xl">Dấu mốc đồng hành của tập thể Tri Thức Việt</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">Hình ảnh tập thể tại chương trình Gala Dinner, ghi lại một dấu mốc trong hành trình xây dựng và phát triển doanh nghiệp.</p>
              </figcaption>
            </figure>

            <div className="mt-10 grid gap-4 min-[520px]:grid-cols-2 lg:grid-cols-[1.07fr_1.07fr_0.75fr]" aria-label="Tư liệu hoạt động điều phối và hỗ trợ người lao động năm 2025">
              {activityEvidence.map((item) => (
                <figure key={item.src} className="w-full max-w-lg justify-self-center overflow-hidden rounded-2xl bg-slate-100">
                  <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(min-width: 1024px) 32vw, (min-width: 520px) 50vw, min(100vw, 512px)" className="h-auto w-full" />
                  <figcaption className="px-4 py-3 text-sm font-bold text-slate-700 sm:px-5">{item.label}</figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {activityGallery.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-2xl bg-slate-100">
                  <div className="relative aspect-[4/3]">
                    <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-bold text-slate-700">{item.label}</figcaption>
                </figure>
              ))}
            </div>

            {publishedEvidence.length ? (
              <div className="mt-8 space-y-3 border-t border-slate-200 pt-8">
                {publishedEvidence.map((item) => (
                  <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-5 rounded-2xl bg-slate-50 px-5 py-5 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                    <span className="min-w-0"><strong className="block break-words text-base text-slate-950">{item.title}</strong><span className="mt-1 block text-sm leading-6 text-slate-600">{item.description}</span></span>
                    <ExternalLink className="h-5 w-5 flex-none text-blue-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="contact-heading">
          <div className="rounded-2xl bg-slate-950 p-7 text-white sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
              <div>
                <h2 id="contact-heading" className="text-3xl font-black tracking-[-0.03em]">Thông tin liên hệ có thể xác minh</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">Email, số điện thoại, Facebook và Google Maps là các kênh hiện có. Vui lòng đối chiếu đầu mối chịu trách nhiệm trước khi ký kết hoặc chuyển hồ sơ.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href={`mailto:${siteConfig.email}`} className="flex min-w-0 items-center gap-3 rounded-xl bg-white/10 p-4 hover:bg-white/15"><Mail className="h-5 w-5 flex-none text-blue-300" /><span className="min-w-0 break-all text-sm font-bold">{siteConfig.email}</span></a>
                <a href={officialChannels.phones[0].href} className="flex items-center gap-3 rounded-xl bg-white/10 p-4 hover:bg-white/15"><Phone className="h-5 w-5 flex-none text-blue-300" /><span className="text-sm font-bold">{officialChannels.phones[0].display}</span></a>
                <a href={officialChannels.map} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-white/10 p-4 hover:bg-white/15"><MapPin className="h-5 w-5 flex-none text-blue-300" /><span className="text-sm font-bold">Vị trí trên Google Maps</span></a>
                <a href={officialChannels.facebookPage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-white/10 p-4 hover:bg-white/15"><ExternalLink className="h-5 w-5 flex-none text-blue-300" /><span className="text-sm font-bold">Trang Facebook</span></a>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-7">
              <Link href="/lien-he" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">Liên hệ và xác minh thông tin <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
