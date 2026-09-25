import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  TrendingUp,
  MapPin,
  Clock,
  FileCheck,
  HeartHandshake,
  Truck
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { 
  enterpriseValues,
  currentPartners
} from '../../data/siteData';
import { absoluteUrl } from '@/lib/site-url';
import { ScrambleText } from '@/components/ScrambleText';
import { B2BProcessFlow } from '@/components/B2BProcessFlow';
import { RecognitionAwards } from '@/components/RecognitionAwards';

export const metadata: Metadata = {
  title: 'Giải Pháp Cung Ứng Nhân Lực Doanh Nghiệp FDI | Tri Thức Việt',
  description: 'Dịch vụ cung ứng nhân sự khối FDI và sản xuất điện tử, quy trình 6 bước chuẩn hóa, 10 yếu tố phối hợp và giải pháp giải quyết biến động nhân sự.',
  alternates: { canonical: '/giai-phap-doanh-nghiep' },
  openGraph: { url: absoluteUrl('/giai-phap-doanh-nghiep') },
};

export default function EnterpriseSolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main>
        {/* Page Header Banner */}
        <section id="giai-phap" className="scroll-mt-36 relative pt-12 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                  <Building2 className="w-4 h-4" />
                  <span>Dành Cho Khối Doanh Nghiệp & Nhà Máy FDI</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  <ScrambleText text="Nguồn Nhân Lực Phù Hợp Cho Môi Trường Sản Xuất Quy Mô Lớn" />
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Tri Thức Việt phát triển dịch vụ cung ứng nhân sự với định hướng trở thành bộ phận hỗ trợ mở rộng cho hệ thống tuyển dụng của doanh nghiệp, đặc biệt trong những giai đoạn cao điểm cần bổ sung nhân lực nhanh hoặc tuyển dụng liên tục.
                </p>

                {/* Quick KPI Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-xs text-slate-400 block">Năng lực tiếp nhận</span>
                    <span className="text-base sm:text-lg font-black text-blue-400">300+ LĐ/ngày</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <span className="text-xs text-slate-400 block">Sản lượng năm 2025</span>
                    <span className="text-base sm:text-lg font-black text-emerald-400">94.514 Lượt</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 col-span-2 sm:col-span-1">
                    <span className="text-xs text-slate-400 block">Địa bàn trọng điểm</span>
                    <span className="text-base sm:text-lg font-black text-amber-400">Bắc Ninh - Bắc Giang</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <span>Trao Đổi Nhu Cầu Tuyển Dụng</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+84972998702"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 transition-all"
                  >
                    <span>Hotline B2B: 0972 998 702</span>
                  </a>
                </div>
              </div>

              {/* Real Photo Hero Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/all/images-activities-doi-xe.webp"
                      alt="Hạ tầng đội xe đưa đón người lao động của Công ty TNHH Tri Thức Việt"
                      fill
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                      <Truck className="w-4 h-4" />
                      <span>Hạ Tầng Vận Hành & Hậu Cần Thực Tế</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Hệ thống 30 xe đưa đón người lao động phục vụ liên tục các tuyến ca và 11 ký túc xá tập trung tại các KCN trọng điểm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Partner Logos Ticker */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center mb-6">
              Đồng Hành Cung Ứng Nhân Lực Cho Các Tập Đoàn Sản Xuất Điện Tử Hàng Đầu
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
              {currentPartners.logos.slice(0, 6).map((p) => (
                <div key={p.name} className="h-16 p-2 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <Image src={p.src} alt={p.name} width={120} height={50} className="max-h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quy Trình Cung Ứng 6 Bước (Interactive Stepper) */}
        <section id="quy-trinh-6-buoc" className="scroll-mt-36 py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">
                Quy Trình Chuẩn Hóa
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Quy Trình Cung Ứng Chuẩn Hóa 6 Bước
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Mỗi giai đoạn đều có tiêu chuẩn kiểm soát nghiêm ngặt nhằm đảm bảo tiến độ và chất lượng nhân sự tiếp nhận
              </p>
            </div>

            {/* Interactive Process Stepper */}
            <B2BProcessFlow />
          </div>
        </section>

        {/* 10 Yếu Tố Phối Hợp Xác Định Từ Đầu */}
        <section id="yeu-to-phoi-hop" className="scroll-mt-36 py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">
                Hiểu Rõ Yêu Cầu
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                10 Yếu Tố Phối Hợp Cần Xác Định Từ Đầu
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Để hạn chế tối đa rủi ro phát sinh và đảm bảo nhân sự đáp ứng đúng ca kíp vận hành, Tri Thức Việt làm rõ 10 yếu tố then chốt thành 3 nhóm trọng tâm:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Nhóm 1 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">1. Quy Mô & Tiến Độ</h3>
                <p className="text-xs text-slate-500 mb-4">Xác định khối lượng và thời hạn bàn giao nhân lực</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Số lượng nhân sự cần bổ sung theo từng đợt</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Thời gian và hạn chót cần đủ người</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Địa điểm làm việc & các xưởng tiếp nhận</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Phân ca làm việc (ca ngày, ca đêm, xoay ca)</span>
                  </li>
                </ul>
              </div>

              {/* Nhóm 2 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">2. Tiêu Chuẩn Ứng Viên</h3>
                <p className="text-xs text-slate-500 mb-4">Kiểm soát chất lượng đầu vào trước khi nhận việc</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Yêu cầu đối với từng nhóm lao động</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Tiêu chuẩn đầu vào (độ tuổi, thể lực, thị lực)</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Danh mục hồ sơ cần chuẩn bị đầy đủ</span>
                  </li>
                </ul>
              </div>

              {/* Nhóm 3 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">3. Chính Sách & Tỷ Lệ Gắn Bó</h3>
                <p className="text-xs text-slate-500 mb-4">Đảm bảo ứng viên an tâm làm việc lâu dài</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Lịch trình phỏng vấn hoặc thời điểm nhận việc</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Chính sách lương, thưởng, phụ cấp dành cho NLĐ</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Yếu tố ảnh hưởng tới tỷ lệ nhận việc & duy trì lao động</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Đối Tác Vinh Danh & Bằng Chứng Năng Lực */}
        <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                Uy Tín Đã Được Khẳng Định
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Vinh Danh & Bằng Chứng Hợp Tác Năm 2025
              </h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Kết quả cung ứng và chất lượng phối hợp được các đối tác sản xuất hàng đầu ghi nhận bằng các giải thưởng chính thức
              </p>
            </div>

            {/* Recognition Awards Real Photos Component */}
            <RecognitionAwards />

            {/* Office & Operations Photo Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-slate-800/80 p-6 sm:p-8 border border-slate-700">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
                  Đội Ngũ Điều Phối Chuyên Nghiệp
                </span>
                <h3 className="text-2xl font-black text-white">
                  Văn Phòng Điều Phối Nhân Lực Tri Thức Việt
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Hệ thống văn phòng đặt tại trung tâm tỉnh Bắc Ninh, phối hợp liên tục giữa đội ngũ tuyển dụng thực địa và đầu mối nhân sự tại các nhà máy, hỗ trợ giải quyết phát sinh 24/7.
                </p>
                <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-400" /> Nam Sơn, Bắc Ninh</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-400" /> Hỗ trợ ca kíp 24/7</span>
                </div>
              </div>
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-700">
                <Image
                  src="/images/all/images-activities-van-phong-tri-thuc-viet.webp"
                  alt="Văn phòng điều phối nhân sự Tri Thức Việt"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5 Giá Trị Mang Lại Cho Doanh Nghiệp */}
        <section id="gia-tri-doanh-nghiep" className="scroll-mt-36 py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">
                Giá Trị Bền Vững
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Giá Trị Mang Lại Cho Khách Hàng Doanh Nghiệp
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {enterpriseValues.map((val, idx) => (
                <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 text-white text-center max-w-3xl mx-auto shadow-2xl border border-blue-700/50 space-y-6">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Đối tác nhân sự không chỉ cung cấp “số lượng”
              </h3>
              <p className="text-sm sm:text-base italic leading-relaxed text-blue-200">
                &ldquo;Không chỉ đưa người lao động đến nhà máy, mà tạo ra sự phù hợp giữa nhu cầu sản xuất, tiêu chuẩn công việc và sự gắn bó lâu dài của người lao động.&rdquo;
              </p>
              <div className="pt-2">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-500 hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Trao Đổi Nhu Cầu Tuyển Dụng</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
