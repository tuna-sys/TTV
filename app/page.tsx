import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  BadgeCheck,
  ExternalLink,
  FileText,
  MapPin
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { OfficialChannels } from '../components/OfficialChannels';
import { ManagedJobs } from '../components/ManagedJobs';
import { RecruitmentCaseStudy } from '../components/RecruitmentCaseStudy';
import { currentPartners, legalEntity } from '../data/siteData';
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with 3D Canvas */}
      <Hero />

      <ManagedJobs />

      <section className="border-b border-slate-200 bg-white" aria-labelledby="proof-heading">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <h2 id="proof-heading" className="text-2xl font-black tracking-[-0.025em] text-slate-950 sm:text-3xl">Thông tin có thể kiểm tra</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">Thông tin pháp nhân và các kênh chính thức được công bố để doanh nghiệp và người lao động có cơ sở tìm hiểu trước khi liên hệ.</p>
              <Link href="/gioi-thieu" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 hover:underline">
                Xem hồ sơ doanh nghiệp
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <dl className="divide-y divide-slate-200">
                <div className="grid gap-2 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Pháp nhân</dt>
                  <dd className="text-sm font-bold leading-6 text-slate-950">{legalEntity.legalName}</dd>
                </div>
                <div className="grid gap-2 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Mã số thuế</dt>
                  <dd><a href={legalEntity.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 hover:underline">{legalEntity.taxId}<ExternalLink className="h-3.5 w-3.5" /></a></dd>
                </div>
                <div className="grid gap-2 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Số liệu tuyển dụng</dt>
                  <dd className="text-sm leading-6 text-slate-700">Đang hoàn thiện định nghĩa chỉ số, kỳ đo và hồ sơ đối chiếu trước khi công bố.</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            <a href="https://maps.app.goo.gl/ENoNuTkTt4iuoS9t9" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-slate-50 p-4 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700"><MapPin className="h-5 w-5 flex-none text-blue-700" /><span className="min-w-0"><strong className="block text-sm text-slate-950">Google Maps</strong><span className="text-xs text-slate-600">Vị trí doanh nghiệp</span></span><ExternalLink className="ml-auto h-4 w-4 flex-none text-slate-400 transition group-hover:text-blue-700" /></a>
            <a href="https://web.facebook.com/trithucviet.tuyendung" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-slate-50 p-4 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700"><BadgeCheck className="h-5 w-5 flex-none text-blue-700" /><span className="min-w-0"><strong className="block text-sm text-slate-950">Kênh hoạt động</strong><span className="text-xs text-slate-600">Facebook tuyển dụng</span></span><ExternalLink className="ml-auto h-4 w-4 flex-none text-slate-400 transition group-hover:text-blue-700" /></a>
            <Link href="/gioi-thieu" className="group flex items-center gap-3 bg-slate-50 p-4 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700"><FileText className="h-5 w-5 flex-none text-blue-700" /><span className="min-w-0"><strong className="block text-sm text-slate-950">Hồ sơ doanh nghiệp</strong><span className="text-xs text-slate-600">Lịch sử và năng lực</span></span><ArrowRight className="ml-auto h-4 w-4 flex-none text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-700" /></Link>
            <Link href="/chinh-sach-bao-ve-du-lieu-ca-nhan" className="group flex items-center gap-3 bg-slate-50 p-4 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700"><ShieldCheck className="h-5 w-5 flex-none text-blue-700" /><span className="min-w-0"><strong className="block text-sm text-slate-950">Bảo vệ dữ liệu</strong><span className="text-xs text-slate-600">Quyền và lưu trữ</span></span><ArrowRight className="ml-auto h-4 w-4 flex-none text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-700" /></Link>
          </div>
        </div>
      </section>

      <RecruitmentCaseStudy />

      <section className="border-b border-slate-200 bg-slate-100" aria-labelledby="anniversary-heading">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-slate-200 p-2" aria-label="Hình ảnh tập thể và hoạt động vận hành của Tri Thức Việt">
            <figure className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-300">
              <Image src="/images/activities/gala-dinner-15-nam.jpg" alt="Tập thể Tri Thức Việt tại sự kiện Gala Dinner kỷ niệm chặng đường phát triển" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </figure>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                <Image src="/images/evidence/hoat-dong-tet-2025-cong-dong-sharp.png" alt="Đội ngũ Tri Thức Việt trong hoạt động cộng đồng dịp Tết 2025" fill sizes="(min-width: 1024px) 18vw, 33vw" className="object-cover" />
              </figure>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                <Image src="/images/evidence/hoat-dong-tet-2025-dieu-phoi-sharp.png" alt="Hoạt động điều phối và đưa đón người lao động dịp Tết 2025" fill sizes="(min-width: 1024px) 18vw, 33vw" className="object-cover" />
              </figure>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                <Image src="/images/evidence/hoat-dong-tet-2025-doi-xe-sharp.png" alt="Đội xe đưa đón mang nhận diện Tri Thức Việt" fill sizes="(min-width: 1024px) 18vw, 33vw" className="object-cover" />
              </figure>
            </div>
          </div>
          <div className="max-w-xl">
            <h2 id="anniversary-heading" className="text-2xl font-black tracking-[-0.025em] text-slate-950 sm:text-3xl">Con người và hoạt động thực tế</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Hình ảnh tập thể tại chương trình Gala Dinner cùng tư liệu về hoạt động điều phối và hỗ trợ di chuyển cho người lao động.</p>
            <Link href="/gioi-thieu#activity-heading" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 hover:underline">
              Xem hoạt động thực tế
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-950 text-white" aria-labelledby="partners-heading">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <h2 id="partners-heading" className="text-xl font-black tracking-[-0.02em] sm:text-2xl">Doanh nghiệp đang phối hợp</h2>
              <p className="mt-2 max-w-xl text-xs leading-6 text-slate-400">Danh sách được Tri Thức Việt xác nhận ngày {currentPartners.confirmedAt}.</p>
            </div>
            <ul className="grid grid-cols-2 gap-px overflow-hidden bg-slate-800 sm:grid-cols-4" aria-label="Danh sách doanh nghiệp đang phối hợp">
              {currentPartners.logos.map((partner) => (
                <li key={partner.name} className="flex min-h-20 items-center justify-center bg-white p-3 sm:p-4">
                  <Image src={partner.src} alt={`Logo ${partner.name}`} width={350} height={160} sizes="(min-width: 640px) 25vw, 50vw" className="h-auto max-h-14 w-full object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DẪN LỐI 2 PHÂN KHÚC: DOANH NGHIỆP VS NGƯỜI LAO ĐỘNG */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-1">
              Phân Khúc Chuyên Sâu
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Lựa Chọn Giải Pháp Phù Hợp Với Bạn
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Chúng tôi cung cấp thông tin chuyên biệt và quy trình rõ ràng cho từng nhóm đối tượng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Khối Doanh Nghiệp FDI */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-xl flex flex-col justify-between group hover:border-blue-500 border border-slate-800 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-500 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  Dành Cho Khối FDI & Sản Xuất
                </span>
                <h3 className="text-xl font-extrabold text-white mb-3">
                  Giải Pháp Cung Ứng Nhân Lực Doanh Nghiệp
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Tư vấn phương án cung ứng nhân lực theo nhu cầu đã xác nhận, với quy trình phối hợp rõ trách nhiệm giữa các bên.
                </p>
              </div>

              <Link
                href="/giai-phap-doanh-nghiep"
                className="inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all group-hover:px-6"
              >
                <span>Xem Chi Tiết Giải Pháp Doanh Nghiệp</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Khối Người Lao Động */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-950/40 via-slate-900 to-slate-950 text-white shadow-xl flex flex-col justify-between group hover:border-orange-500 border border-slate-800 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-600/30 border border-orange-500 text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                  Dành Cho Người Lao Động
                </span>
                <h3 className="text-xl font-extrabold text-white mb-3">
                  Hành Trình Tìm Việc Rõ Ràng & An Tâm
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Tiếp cận thông tin công việc và hướng dẫn hồ sơ. Xe đưa đón, chỗ ở hoặc chương trình miễn phí được xác nhận theo từng vị trí cụ thể.
                </p>
              </div>

              <Link
                href="/nguoi-lao-dong"
                className="inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-all group-hover:px-6"
              >
                <span>Xem Hành Trình & Hỗ Trợ Lao Động</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* SOURCING & NGUYÊN TẮC HOẠT ĐỘNG OVERVIEW */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Box 1: Năng Lực Sourcing */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Năng Lực Tuyển Nhân Viên Đa Kênh
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Quy trình tuyển nhân viên đa kênh mô tả cách tiếp cận, sàng lọc và phối hợp. Tiến độ và quy mô được xác nhận riêng cho từng dự án.
              </p>
              <Link
                href="/nang-luc-tuyen-nguon"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline pt-2"
              >
                <span>Tìm hiểu năng lực Sourcing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Box 2: Tôn Chỉ & Giới Thiệu */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Tôn Chỉ & 3 Nguyên Tắc Cốt Lõi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chuyên nghiệp với đối tác, Minh bạch với người lao động và Trách nhiệm trong mỗi kết nối để tạo dựng sự phát triển bền vững cho thị trường lao động.
              </p>
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 hover:underline pt-2"
              >
                <span>Xem tôn chỉ & nguyên tắc</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      <OfficialChannels />

      {/* Footer */}
      <Footer />
    </div>
  );
}
