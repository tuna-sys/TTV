import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Send,
  Ban,
  FileCheck2,
  BadgeAlert,
  HeartHandshake,
  Home,
  PhoneCall
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { 
  workerSupportPillars,
  publicOperationalCapacity
} from '../../data/siteData';
import { ScrambleText } from '@/components/ScrambleText';
import { WorkerJourney } from '@/components/WorkerJourney';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Dành Cho Người Lao Động | Việc Làm Rõ Ràng & An Tâm | Tri Thức Việt',
  description: 'Hành trình tìm việc rõ ràng, hỗ trợ hồ sơ và thông tin về đi lại, chỗ ở theo điều kiện của từng chương trình tuyển dụng. 100% miễn phí đối với người lao động.',
  alternates: { canonical: '/nguoi-lao-dong' },
};

export default function WorkerSupportPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main>
        {/* Page Header Banner */}
        <section id="hanh-trinh" className="scroll-mt-36 relative pt-12 pb-20 bg-gradient-to-b from-orange-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
                  <Users className="w-4 h-4" />
                  <span>Dành Cho Người Lao Động • Miễn Phí 100%</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  <ScrambleText text="Một Công Việc Phù Hợp Đi Cùng Một Hành Trình Làm Việc An Tâm" />
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Tìm việc → Chuẩn bị hồ sơ → Bố trí xe đón → Nhận việc & Chỗ ở KTX → Ổn định cuộc sống. Tri Thức Việt không chỉ hỗ trợ bạn tìm kiếm một công việc tốt, mà đồng hành để hành trình bắt đầu của bạn an tâm và thuận tiện nhất.
                </p>

                {/* Quick Trust Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                    <span className="text-base sm:text-xl font-black text-orange-400 block">30</span>
                    <span className="text-xs text-slate-300">Xe đưa đón</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                    <span className="text-base sm:text-xl font-black text-amber-400 block">11</span>
                    <span className="text-xs text-slate-300">Khu ký túc xá</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                    <span className="text-base sm:text-xl font-black text-emerald-400 block">0 VNĐ</span>
                    <span className="text-xs text-slate-300">Phí người lao động</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <span>Đăng Ký Tư Vấn Việc Làm Ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+84972998702"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-orange-400" />
                    <span>Hotline: 0972 998 702</span>
                  </a>
                </div>
              </div>

              {/* Photo Card Hero */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/all/images-activities-xe-dua-don-tet.webp"
                      alt="Chuyến xe đưa đón người lao động về quê đón Tết sum vầy"
                      fill
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                      <HeartHandshake className="w-4 h-4" />
                      <span>Đồng Hành Cùng Người Lao Động</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Chương trình chuyến xe đưa đón người lao động hàng năm – san sẻ gánh nặng đi lại để công nhân an tâm gắn bó sản xuất.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Khối Cam Kết Vàng "3 KHÔNG" */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">
                Bảo Vệ Quyền Lợi Tuyệt Đối
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Cam Kết &ldquo;3 KHÔNG&rdquo; Của Tri Thức Việt
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-6 rounded-3xl bg-orange-50/60 border border-orange-200/80 shadow-sm hover:border-orange-400 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-600/20">
                  <Ban className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 mb-1">1. KHÔNG Thu Phí Môi Giới</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    100% miễn phí với người lao động từ khâu tư vấn, nộp hồ sơ đến ngày vào xưởng làm việc.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-3xl bg-orange-50/60 border border-orange-200/80 shadow-sm hover:border-orange-400 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-600/20">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 mb-1">2. KHÔNG Giữ Giấy Tờ Gốc</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Chỉ tiếp nhận hồ sơ photo có công chứng. Người lao động tự bảo quản giấy tờ tùy thân gốc (CCCD, bằng cấp).
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-3xl bg-orange-50/60 border border-orange-200/80 shadow-sm hover:border-orange-400 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-600/20">
                  <BadgeAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 mb-1">3. KHÔNG Báo Ảo Lương Thưởng</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Minh bạch tuyệt đối mức lương cơ bản, phụ cấp, đơn giá tăng ca và các khoản trừ bảo hiểm trước khi ứng viên ký nhận việc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hành Trình Đi Làm 4 Bước Tương Tác */}
        <section id="lo-trinh" className="scroll-mt-36 py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">
                Quy Trình Thuận Tiện
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Hành Trình 4 Chặng Đi Làm An Tâm
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Từ khi nộp thông tin đến khi ổn định công việc trong nhà máy, bạn luôn có người đồng hành hỗ trợ
              </p>
            </div>

            {/* Interactive Worker Journey Component */}
            <WorkerJourney />
          </div>
        </section>

        {/* 5 Trụ Cột Hỗ Trợ Đời Sống */}
        <section id="tru-cot-ho-tro" className="scroll-mt-36 py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">
                Hệ Sinh Thái Phúc Lợi
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                5 Trụ Cột Hỗ Trợ Người Lao Động Tại Tri Thức Việt
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Không chỉ hỗ trợ tìm một công việc, mà xây dựng môi trường sống ổn định để bạn yên tâm làm việc
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workerSupportPillars.map((pillar, idx) => (
                <div key={idx} className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 mb-4">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/80">
                    <p className="rounded-xl bg-orange-100/60 p-3.5 text-xs italic leading-5 text-orange-900">
                      &ldquo;{pillar.quote}&rdquo;
                    </p>
                  </div>
                </div>
              ))}

              {/* Hạ Tầng Chỗ Ở & Đưa Đón Highlight Card */}
              <div className="p-7 rounded-3xl bg-gradient-to-br from-orange-600 to-amber-600 text-white shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/20 text-white flex items-center justify-center font-bold text-sm mb-4">
                    <Home className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Hạ Tầng KTX & Xe Đưa Đón Thực Tế
                  </h3>
                  <p className="text-sm leading-6 text-white/90 mb-4">
                    Theo hồ sơ năng lực 2026, Tri Thức Việt duy trì hạ tầng hỗ trợ công nhân quy mô lớn:
                  </p>
                </div>
                <div className="space-y-2 pt-2 border-t border-white/20 text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span>Đội xe đưa đón:</span>
                    <strong className="text-sm">{publicOperationalCapacity.items[0].value} xe</strong>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Khu ký túc xá:</span>
                    <strong className="text-sm">{publicOperationalCapacity.items[1].value} khu</strong>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Sức chứa chỗ ở:</span>
                    <strong className="text-sm">{publicOperationalCapacity.items[2].value} chỗ</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Khối Hỏi Đáp Thường Gặp (FAQ Accordion) */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">
                Giải Đáp Thắc Mắc
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Câu Hỏi Thường Gặp Của Người Lao Động
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Những thắc mắc phổ biến nhất khi chuẩn bị đi làm tại các khu công nghiệp
              </p>
            </div>

            <FaqAccordion />
          </div>
        </section>

        {/* Điều kiện hỗ trợ & CTA */}
        <section id="dieu-kien-ho-tro" className="scroll-mt-36 py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-orange-950 via-slate-900 to-slate-900 border border-orange-500/40 text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 mx-auto flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <div>
                <h2 className="text-xl sm:text-3xl font-black text-white">
                  Chi Phí & Điều Kiện Được Xác Nhận Trước Khi Ứng Tuyển
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                  Nội dung nào miễn phí, khoản nào do nhà máy chi trả và điều kiện hỗ trợ xe/chỗ ở sẽ được thông tin minh bạch theo từng vị trí. Bạn hãy trao đổi kỹ với chuyên viên tư vấn trước khi đưa ra quyết định.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-600 text-sm font-bold text-white shadow-xl shadow-orange-600/30 transition-all hover:bg-orange-500 hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Liên Hệ Nhận Tư Vấn Việc Làm Miễn Phí</span>
                </Link>
                <a
                  href="tel:+84972998702"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-800 text-sm font-bold text-slate-200 border border-slate-700 hover:bg-slate-700 transition-all"
                >
                  <span>Gọi Ngay: 0972 998 702</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
