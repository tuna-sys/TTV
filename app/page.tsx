import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, ExternalLink, Users } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { OfficialChannels } from '../components/OfficialChannels';
import { RecruitmentCaseStudy } from '../components/RecruitmentCaseStudy';
import { currentPartners, legalEntity } from '../data/siteData';

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

        <section id="nhu-cau" className="scroll-mt-36 border-b border-slate-200 bg-slate-50" aria-labelledby="routes-heading">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <h2 id="routes-heading" className="max-w-2xl text-3xl font-black tracking-[-0.03em] text-slate-950">Thông tin phù hợp với từng nhu cầu</h2>
            <div className="mt-8 grid overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-2">
              <article className="p-6 sm:p-8 md:border-r md:border-slate-200">
                <Building2 className="h-6 w-6 text-blue-700" />
                <h3 className="mt-5 text-xl font-black tracking-[-0.02em] text-slate-950">Dành cho doanh nghiệp</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">Tìm hiểu cách tiếp nhận nhu cầu, xây dựng phương án tuyển dụng, sàng lọc và phối hợp tiếp nhận lao động.</p>
                <Link href="/giai-phap-doanh-nghiep" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-800">Xem giải pháp doanh nghiệp <ArrowRight className="h-4 w-4" /></Link>
              </article>
              <article className="p-6 sm:p-8">
                <Users className="h-6 w-6 text-orange-700" />
                <h3 className="mt-5 text-xl font-black tracking-[-0.02em] text-slate-950">Dành cho người lao động</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">Xem điều kiện công việc, quy trình hồ sơ và thông tin hỗ trợ trước khi liên hệ qua các kênh tuyển dụng chính thức.</p>
                <Link href="/nguoi-lao-dong" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-700 underline decoration-orange-200 underline-offset-4 hover:text-orange-800">Xem thông tin dành cho người lao động <ArrowRight className="h-4 w-4" /></Link>
              </article>
            </div>
          </div>
        </section>

        <section id="ho-so" className="scroll-mt-36 bg-white" aria-labelledby="profile-heading">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
            <div>
              <h2 id="profile-heading" className="text-3xl font-black tracking-[-0.03em] text-slate-950">Hồ sơ doanh nghiệp có thể kiểm tra</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">Pháp nhân, phạm vi hoạt động, hạ tầng và tư liệu thực tế được tập hợp tại một nơi để đối tác thuận tiện đối chiếu trước khi làm việc.</p>
              <Link href="/gioi-thieu" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-800">Xem hồ sơ doanh nghiệp <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <dl className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid gap-2 border-b border-slate-200 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5">
                <dt className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">Pháp nhân</dt>
                <dd className="text-sm font-bold leading-6 text-slate-950">{legalEntity.legalName}</dd>
              </div>
              <div className="grid gap-2 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5">
                <dt className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">Mã số thuế</dt>
                <dd><a href={legalEntity.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-800">{legalEntity.taxId}<ExternalLink className="h-3.5 w-3.5" /></a></dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
      <OfficialChannels />
      <Footer />
    </div>
  );
}
