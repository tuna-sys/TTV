import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Send
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { 
  b2bSixSteps,
  fdiCoordinationFactors, 
  enterpriseValues
} from '../../data/siteData';
import { absoluteUrl } from '@/lib/site-url';
import { ScrambleText } from '@/components/ScrambleText';

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

      {/* Page Header Banner */}
      <main>
      <section id="giai-phap" className="scroll-mt-36 relative pt-12 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <Building2 className="w-4 h-4" />
              <span>Dành Cho Khối Doanh Nghiệp & Nhà Máy FDI</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <ScrambleText text="Nguồn Nhân Lực Phù Hợp Cho Môi Trường Sản Xuất Quy Mô Lớn" />
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tri Thức Việt phát triển dịch vụ cung ứng nhân sự với định hướng trở thành bộ phận hỗ trợ mở rộng cho hệ thống tuyển dụng của doanh nghiệp, đặc biệt trong những giai đoạn cần bổ sung nhân lực nhanh hoặc tuyển dụng liên tục.
            </p>
            <div className="pt-2">
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>Trao Đổi Nhu Cầu Tuyển Dụng</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quy Trình Cung Ứng 6 Bước */}
      <section id="quy-trinh-6-buoc" className="scroll-mt-36 py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-1">
              Quy Trình Chuẩn Hóa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Quy Trình Cung Ứng Được Tổ Chức Rõ Ràng (6 Bước)
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Mỗi giai đoạn đều có tiêu chuẩn kiểm soát để đảm bảo tiến độ và chất lượng nhân sự
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {b2bSixSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-black">
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold uppercase text-slate-400">
                      Quy Trình
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Yếu Tố Phối Hợp Xác Định Từ Đầu */}
      <section id="yeu-to-phoi-hop" className="scroll-mt-36 py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-1">
              Hiểu Rõ Yêu Cầu
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              10 Yếu Tố Phối Hợp Cần Xác Định Từ Đầu
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Để đảm bảo nhân sự đáp ứng đúng nhu cầu vận hành, Tri Thức Việt làm rõ đầy đủ các tiêu chuẩn:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {fdiCoordinationFactors.map((factor, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-6 text-slate-700">{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Giá Trị Mang Lại Cho Doanh Nghiệp */}
      <section id="gia-tri-doanh-nghiep" className="scroll-mt-36 py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Giá Trị Tri Thức Việt Hướng Tới Cho Khách Hàng Doanh Nghiệp
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {enterpriseValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="p-8 rounded-3xl bg-blue-950/80 border border-blue-800 text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2">
              Đối tác nhân sự không chỉ cung cấp “số lượng”
            </h3>
            <p className="mb-6 text-sm italic leading-6 text-slate-300 sm:text-base">
              &ldquo;Không chỉ đưa người lao động đến doanh nghiệp, mà tạo ra sự phù hợp giữa nhu cầu sản xuất, yêu cầu công việc và kỳ vọng của người lao động.&rdquo;
            </p>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-500"
            >
              <Send className="w-4 h-4" />
              <span>Gửi Yêu Cầu Trao Đổi Nhu Cầu</span>
            </Link>
          </div>

        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
