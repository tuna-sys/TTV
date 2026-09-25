'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Users,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { legalEntity } from '@/data/siteData';

export function HomeNeedsRouting() {
  const [copied, setCopied] = useState(false);

  const handleCopyTaxId = () => {
    navigator.clipboard.writeText(legalEntity.taxId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* 1. Thông tin phù hợp với từng nhu cầu */}
      <section id="nhu-cau" className="scroll-mt-36 border-b border-slate-200 bg-slate-50 py-20" aria-labelledby="routes-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
              Lựa Chọn Định Hướng
            </span>
            <h2 id="routes-heading" className="text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl lg:text-4xl">
              Thông Tin Phù Hợp Với Từng Nhu Cầu
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Chọn luồng thông tin phù hợp để tìm hiểu giải pháp tuyển dụng cho nhà máy hoặc đăng ký tìm việc an tâm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Doanh Nghiệp */}
            <Link
              href="/giai-phap-doanh-nghiep"
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <Building2 className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                  Khối B2B & FDI
                </span>
                <h3 className="text-2xl font-black text-slate-950 group-hover:text-blue-700 transition-colors">
                  Dành Cho Doanh Nghiệp
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Tìm hiểu cách tiếp nhận nhu cầu, xây dựng phương án tuyển dụng, sàng lọc và phối hợp tiếp nhận lao động cho các nhà máy quy mô lớn.
                </p>

                {/* Service highlights tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-800 text-xs font-semibold">
                    Quy trình 6 bước chuẩn hóa
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-800 text-xs font-semibold">
                    10 yếu tố phối hợp chặt chẽ
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-800 text-xs font-semibold">
                    30 xe đưa đón & 11 khu KTX
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-bold text-blue-700 group-hover:text-blue-800">
                <span>Xem giải pháp doanh nghiệp</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Card Người Lao Động */}
            <Link
              href="/nguoi-lao-dong"
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-700 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <Users className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-700 block mb-1">
                  Khối Người Tìm Việc
                </span>
                <h3 className="text-2xl font-black text-slate-950 group-hover:text-orange-700 transition-colors">
                  Dành Cho Người Lao Động
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Xem điều kiện công việc, quy trình hồ sơ và thông tin hỗ trợ đi lại, chỗ ở trước khi liên hệ qua các kênh tuyển dụng chính thức.
                </p>

                {/* Worker highlights tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg bg-orange-50 text-orange-800 text-xs font-semibold">
                    100% Miễn phí người lao động
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-orange-50 text-orange-800 text-xs font-semibold">
                    Không giữ giấy tờ tùy thân gốc
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-orange-50 text-orange-800 text-xs font-semibold">
                    Hỗ trợ xe đưa đón & Ký túc xá
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-bold text-orange-700 group-hover:text-orange-800">
                <span>Xem thông tin dành cho người lao động</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Hồ sơ doanh nghiệp có thể kiểm tra */}
      <section id="ho-so" className="scroll-mt-36 bg-white py-20 border-b border-slate-200" aria-labelledby="profile-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Pháp Lý Minh Bạch & Đối Chiếu Thực Tế</span>
            </div>
            <h2 id="profile-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.03em] text-slate-950">
              Hồ Sơ Doanh Nghiệp Có Thể Kiểm Tra
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Pháp nhân, phạm vi hoạt động, hạ tầng và tư liệu thực tế được tập hợp tại một nơi để đối tác và người lao động thuận tiện đối chiếu trước khi hợp tác.
            </p>
            <div className="mt-6">
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors"
              >
                <span>Xem toàn bộ hồ sơ năng lực doanh nghiệp</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Legal Info Card with Interactive Copy */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
            <div className="p-6 sm:p-7 border-b border-slate-200 bg-white">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Tên Doanh Nghiệp Đăng Ký
              </span>
              <p className="text-base sm:text-lg font-black text-slate-950 leading-snug">
                {legalEntity.legalName}
              </p>
            </div>

            <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Mã Số Thuế (MST)
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black tracking-tight text-blue-700 font-mono">
                    {legalEntity.taxId}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyTaxId}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 transition-all active:scale-95"
                    title="Sao chép mã số thuế"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Đã chép!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <a
                href={legalEntity.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-800 underline underline-offset-4"
              >
                <span>Tra cứu trên Cổng thông tin</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
