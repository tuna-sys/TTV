'use client';

import React, { useState } from 'react';
import {
  ClipboardList,
  FileSpreadsheet,
  UsersRound,
  Bus,
  Factory,
  HeartHandshake,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface StepDetail {
  step: string;
  title: string;
  desc: string;
  deliverable: string;
  focus: string;
  icon: React.ElementType;
}

const stepsData: StepDetail[] = [
  {
    step: 'Bước 1',
    title: 'Tiếp Nhận Nhu Cầu',
    desc: 'Làm việc trực tiếp với HR và bộ phận sản xuất của doanh nghiệp để nắm rõ sản lượng, tiêu chuẩn tay nghề, số lượng và thời hạn cần nhân sự.',
    deliverable: 'Bản phân tích đặc thù vị trí & tiêu chí tuyển dụng',
    focus: 'Đúng nhu cầu & Tiến độ',
    icon: ClipboardList,
  },
  {
    step: 'Bước 2',
    title: 'Xây Dựng Kế Hoạch',
    desc: 'Lựa chọn tổ hợp kênh tuyển phù hợp (kỹ thuật số, mạng lưới địa phương, nguồn sẵn có) nhằm tiếp cận đúng tệp lao động mục tiêu.',
    deliverable: 'Kế hoạch phân bổ nguồn lực & Timeline tiếp nhận',
    focus: 'Đúng nguồn ứng viên',
    icon: FileSpreadsheet,
  },
  {
    step: 'Bước 3',
    title: 'Tiếp Nhận & Sàng Lọc',
    desc: 'Tư vấn chi tiết về công việc, ca kíp, mức thu nhập và kiểm tra hồ sơ, điều kiện sức khỏe trước khi đưa vào danh sách tiếp nhận.',
    deliverable: 'Danh sách ứng viên đủ điều kiện phỏng vấn',
    focus: 'Minh bạch thông tin',
    icon: UsersRound,
  },
  {
    step: 'Bước 4',
    title: 'Điều Phối Ứng Viên',
    desc: 'Lập danh sách, hướng dẫn lịch trình tập trung, điều phối xe đưa đón từ các tỉnh và chuẩn bị thủ tục nhận việc chu đáo.',
    deliverable: 'Lịch trình di chuyển & Danh sách tập trung',
    focus: 'Đảm bảo tỷ lệ đến nhận việc',
    icon: Bus,
  },
  {
    step: 'Bước 5',
    title: 'Phối Hợp Tiếp Nhận',
    desc: 'Cán bộ Tri Thức Việt có mặt trực tiếp tại cổng nhà máy để hỗ trợ làm thủ tục, kiểm tra hồ sơ và bàn giao cho bộ phận tiếp nhận.',
    deliverable: 'Biên bản bàn giao lao động vào nhà máy',
    focus: 'Hạn chế sai sót thủ tục',
    icon: Factory,
  },
  {
    step: 'Bước 6',
    title: 'Theo Dõi Sau Tuyển Dụng',
    desc: 'Duy trì kết nối với người lao động và HR nhà máy, kịp thời nắm bắt tâm tư, hỗ trợ ổn định chỗ ở và xử lý phát sinh để giữ vững tỷ lệ duy trì.',
    deliverable: 'Báo cáo tỷ lệ duy trì & Phản hồi định kỳ',
    focus: 'Ổn định sản xuất lâu dài',
    icon: HeartHandshake,
  },
];

export function B2BProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const current = stepsData[activeStep];
  const CurrentIcon = current.icon;

  return (
    <div className="space-y-8">
      {/* Step Buttons Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stepsData.map((s, idx) => {
          const Icon = s.icon;
          const isActive = idx === activeStep;
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`relative p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25 scale-[1.02] ring-2 ring-blue-400/40'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span
                  className={`text-xs font-black px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {s.step}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              </div>
              <h4 className="text-sm font-bold leading-snug line-clamp-2">
                {s.title}
              </h4>
              {/* Active glow indicator line */}
              {isActive && (
                <div className="absolute -bottom-1 left-4 right-4 h-1 bg-blue-300 rounded-full animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Step Details Panel */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md transition-all duration-300">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between border-b border-slate-100 pb-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-600/30">
              <CurrentIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                <span>{current.step} trên 6</span>
                <span>•</span>
                <span>Trọng tâm: {current.focus}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {current.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
            <span>Kết quả bàn giao:</span>
            <span className="font-bold text-blue-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {current.deliverable}
            </span>
          </div>
        </div>

        <p className="text-slate-700 text-base leading-relaxed mb-6">
          {current.desc}
        </p>

        {/* Step navigation buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-600 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            ← Bước trước
          </button>
          <div className="flex gap-1.5">
            {stepsData.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeStep ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            disabled={activeStep === stepsData.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(stepsData.length - 1, prev + 1))}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <span>Bước tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
