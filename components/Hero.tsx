'use client';

import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, MessageSquareText, ShieldCheck, Users } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { officialChannels } from '@/data/siteData';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-black leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
            <span className="block">Kết nối <span className="text-blue-700">đúng người</span></span>
            <span className="mt-1 block">Đồng hành <span className="text-emerald-700">đúng nhu cầu</span></span>
            <span className="mt-1 block">Phát triển <span className="text-blue-900">bền vững</span></span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Tri Thức Việt định hướng trở thành cầu nối giữa doanh nghiệp và người lao động, tập trung vào tuyển nhân viên, cung ứng nhân sự và thông tin rõ ràng trước mỗi quyết định.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> Không cần tạo tài khoản</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-700" /> Liên hệ qua kênh chính thức</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.65)]">
          <div className="border-b border-slate-800 px-6 py-5">
            <h2 className="text-lg font-extrabold text-white">Bạn cần tuyển người hay đang tìm việc?</h2>
            <p className="mt-1 text-sm leading-6 text-slate-300">Xem thông tin trước, sau đó chọn kênh liên hệ phù hợp.</p>
          </div>
          <div className="divide-y divide-slate-800">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <Building2 className="mt-1 h-6 w-6 flex-none text-blue-400" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-white">Tuyển nhân sự cho doanh nghiệp</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">Trao đổi nhu cầu, tiêu chuẩn và kế hoạch tuyển dụng.</p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <Link href="/lien-he#lien-he-truc-tiep" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">Liên hệ doanh nghiệp <ArrowRight className="h-4 w-4" /></Link>
                    <Link href="/giai-phap-doanh-nghiep" className="inline-flex min-h-11 items-center justify-center px-4 py-3 text-sm font-bold text-blue-200 underline decoration-blue-500/60 underline-offset-4 hover:text-white">Xem quy trình trước</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <Users className="mt-1 h-6 w-6 flex-none text-orange-400" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-white">Tìm công việc phù hợp</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">Xem thông tin việc làm trên kênh tuyển dụng chính thức.</p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <a href={officialChannels.facebookPage} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300">Xem tin tuyển dụng <ArrowRight className="h-4 w-4" /></a>
                    <Link href="/nguoi-lao-dong" className="inline-flex min-h-11 items-center justify-center px-4 py-3 text-sm font-bold text-orange-200 underline decoration-orange-500/60 underline-offset-4 hover:text-white">Xem thông tin trước</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900 px-6 py-4 text-xs leading-5 text-slate-300">
            <MessageSquareText className="h-4 w-4 flex-none text-emerald-400" />
            Website không thu thập hồ sơ trực tuyến; vui lòng trao đổi qua các kênh chính thức.
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:mt-16 lg:px-8">
        <div className="mb-5 max-w-2xl">
          <h2 className="text-2xl font-black tracking-[-0.025em] text-slate-950">Mạng lưới <span className="text-emerald-700">kết nối</span> trong chuyển động</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">Mô hình tương tác minh họa cách các điểm tuyển dụng, doanh nghiệp và người lao động được kết nối trong cùng một mạng lưới.</p>
        </div>
        <Hero3DCanvas />
      </div>
    </section>
  );
}
