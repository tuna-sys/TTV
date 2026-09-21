import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Send
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { 
  workerSupportPillars
} from '../../data/siteData';

export const metadata: Metadata = {
  title: 'Dành Cho Người Lao Động | Việc Làm Rõ Ràng & An Tâm | Tri Thức Việt',
  description: 'Hành trình tìm việc rõ ràng, hỗ trợ hồ sơ và thông tin về đi lại, chỗ ở theo điều kiện của từng chương trình tuyển dụng.',
  alternates: { canonical: '/nguoi-lao-dong' },
};

export default function WorkerSupportPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Page Header Banner */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-orange-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
              <Users className="w-4 h-4" />
              <span>Dành Cho Người Lao Động</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Một Công Việc Phù Hợp Cần Đi Cùng Một Hành Trình Làm Việc An Tâm
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tìm việc → Chuẩn bị → Nhận việc → Đi làm → Ổn định cuộc sống. Tri Thức Việt không chỉ hỗ trợ bạn tìm việc, mà đồng hành để hành trình bắt đầu của bạn trở nên thuận tiện và rõ ràng nhất.
            </p>
            <div className="pt-2">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 transition-all"
                >
                  <span>Liên hệ để tìm việc làm phù hợp</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Trụ Cột Hỗ Trợ Đời Sống */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-orange-700 uppercase tracking-widest block mb-1">
              Hệ Sinh Thái Phúc Lợi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              5 Trụ Cột Hỗ Trợ Người Lao Động Tại Tri Thức Việt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workerSupportPillars.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[11px] text-orange-800 italic bg-orange-50 p-2.5 rounded-xl leading-relaxed">
                    &ldquo;{pillar.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Điều kiện hỗ trợ & CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-orange-900/40 via-slate-800 to-slate-900 border border-orange-500/30 text-center max-w-3xl mx-auto space-y-6">
            <div className="w-14 h-14 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 mx-auto flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Chi Phí Và Điều Kiện Được Xác Nhận Trước Khi Ứng Tuyển
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-xl mx-auto">
                Nội dung nào miễn phí, khoản nào do đơn vị tuyển dụng chi trả và điều kiện hỗ trợ xe/chỗ ở sẽ được xác nhận theo từng vị trí. Người lao động nên yêu cầu tư vấn viên cung cấp thông tin cụ thể trước khi quyết định.
              </p>
            </div>

            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 active:scale-95 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Liên hệ để nhận tư vấn việc làm</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
