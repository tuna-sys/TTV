import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  ShieldCheck
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { 
  sourcingTouchpoints, 
  activeSourcingPipeline,
  screeningCriteria,
  publicOperationalCapacity
} from '../../data/siteData';
import { absoluteUrl } from '@/lib/site-url';
import { ScrambleText } from '@/components/ScrambleText';

export const metadata: Metadata = {
  title: 'Năng Lực Tuyển Nhân Viên Đa Kênh | Tri Thức Việt',
  description: 'Hệ thống 8 điểm chạm tiếp cận ứng viên, quy trình Sourcing chủ động 7 bước và 7 tiêu chí sàng lọc chất lượng đầu vào.',
  alternates: { canonical: '/nang-luc-tuyen-nguon' },
  openGraph: { url: absoluteUrl('/nang-luc-tuyen-nguon') },
};

export default function SourcingCapacityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Page Header Banner */}
      <main>
      <section id="nang-luc-sourcing" className="scroll-mt-36 relative pt-12 pb-16 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <Sparkles className="w-4 h-4" />
              <span>Năng Lực Sourcing Đa Điểm Chạm</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <ScrambleText text="Chủ Động Nguồn Ứng Viên – Linh Hoạt Trước Mọi Nhu Cầu Tuyển Dụng" />
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Trong tuyển dụng số lượng lớn, thách thức không nằm ở việc đăng một tin tuyển dụng, mà nằm ở khả năng duy trì nguồn ứng viên liên tục, tiếp cận đúng nhóm lao động và chuyển đổi người quan tâm thành người sẵn sàng đi làm.
            </p>
            <div className="pt-2">
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all"
              >
                <span>Hợp Tác Tuyển Nhân Viên</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="nang-luc-ho-tro" className="scroll-mt-36 border-b border-slate-200 bg-white" aria-labelledby="support-capacity-heading">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-emerald-700"><ShieldCheck className="h-6 w-6" /><h2 id="support-capacity-heading" className="text-2xl font-black tracking-[-0.025em] text-slate-950">Năng lực hỗ trợ đã có nguồn</h2></div>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">Theo {publicOperationalCapacity.sourceLabel}, doanh nghiệp xác nhận ngày {publicOperationalCapacity.confirmedAt}. {publicOperationalCapacity.note}</p>
            </div>
            <dl className="grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-3">
              {publicOperationalCapacity.items.map((item) => (
                <div key={item.label} className="flex flex-col bg-slate-50 px-5 py-6">
                  <dt className="order-2 mt-2 text-sm leading-6 text-slate-600">{item.label}</dt>
                  <dd className="order-1 text-3xl font-black tabular-nums tracking-[-0.03em] text-emerald-800">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 8 Điểm Chạm Tiếp Cận Ứng Viên */}
      <section id="diem-cham" className="scroll-mt-36 py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Hệ Thống Đa Kênh
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Không Phụ Thuộc Vào Một Kênh Duy Nhất (8 Điểm Chạm)
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Nguồn ứng viên được tiếp cận liên tục thông qua tổ hợp các điểm chạm trực tuyến và thực địa:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sourcingTouchpoints.map((tp, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-emerald-300 transition-colors">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <p className="text-sm font-medium leading-6 text-slate-700">{tp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quy Trình Tuyển Nhân Viên Chủ Động 7 Bước */}
      <section id="quy-trinh-sourcing" className="scroll-mt-36 py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Quy Trình Sourcing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Quy Trình Tuyển Nhân Viên Chủ Động (7 Bước)
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Từ lúc tiếp cận đến khi ứng viên đi làm ổn định
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {activeSourcingPipeline.map((step) => (
              <div key={step.step} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between">
                <div>
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center mx-auto mb-2">
                    {step.step}
                  </span>
                  <h3 className="mb-1 text-sm font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs leading-5 text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Tiêu Chí Sàng Lọc Chất Lượng Đầu Vào */}
      <section id="sang-loc" className="scroll-mt-36 py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Kiểm Soát Chất Lượng
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              7 Tiêu Chí Làm Rõ Trước Khi Ứng Viên Nhận Việc
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Sàng lọc kỹ lưỡng để người lao động đi làm ổn định, tránh phát sinh nghỉ việc sớm:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {screeningCriteria.map((criterion, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-6 text-slate-700">{criterion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section id="lien-he-sourcing" className="scroll-mt-36 py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-800 border border-slate-700 max-w-2xl mx-auto space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Cần Nguồn Lao Động Số Lượng Lớn Cho Dự Án Mới?
            </h2>
            <p className="text-sm leading-6 text-slate-300 sm:text-base">
              Hãy trao đổi bài toán nhân sự cùng Tri Thức Việt để xây dựng kế hoạch tuyển nhân viên bám sát tiến độ nhà máy.
            </p>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500"
            >
              <Send className="w-4 h-4" />
              <span>Gửi Yêu Cầu Tuyển Nhân Viên</span>
            </Link>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
