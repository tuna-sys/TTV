'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  PhoneCall,
  FileCheck2,
  Bus,
  Home,
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface JourneyStep {
  stepNumber: string;
  title: string;
  badge: string;
  desc: string;
  highlight: string;
  image: string;
  imageAlt: string;
  icon: React.ElementType;
}

const journeySteps: JourneyStep[] = [
  {
    stepNumber: '01',
    title: 'Tư Vấn Đúng Việc – Đúng Nhu Cầu',
    badge: '100% Miễn Phí',
    desc: 'Người lao động được chuyên viên tư vấn chi tiết về công việc tại các nhà máy FDI lớn (Foxconn, Canon, Luxshare, Goertek...). Mọi thông tin về mức lương cơ bản, phụ cấp, tăng ca, tiền ăn và ca kíp đều được thông báo rõ ràng trước khi đăng ký.',
    highlight: 'Không thu bất kỳ khoản phí môi giới nào từ người lao động',
    image: '/images/all/images-activities-van-phong-tri-thuc-viet.webp',
    imageAlt: 'Văn phòng tư vấn và tiếp nhận người lao động Tri Thức Việt',
    icon: PhoneCall,
  },
  {
    stepNumber: '02',
    title: 'Hướng Dẫn Hồ Sơ Nhanh Chóng',
    badge: 'Minh Bạch & An Tâm',
    desc: 'Hỗ trợ người lao động chuẩn bị đầy đủ các giấy tờ cần thiết theo yêu cầu của nhà máy: CCCD/VNeID, sơ yếu lý lịch, giấy khám sức khỏe. Tri Thức Việt tuyệt đối không giữ giấy tờ tùy thân gốc của người lao động.',
    highlight: 'Chỉ thu hồ sơ photo công chứng, không giữ giấy tờ gốc',
    image: '/images/all/images-activities-su-kien-ket-noi.webp',
    imageAlt: 'Cán bộ hướng dẫn thủ tục hồ sơ cho ứng viên tại sự kiện kết nối',
    icon: FileCheck2,
  },
  {
    stepNumber: '03',
    title: 'Xe Đưa Đón Miễn Phí Tận Nơi',
    badge: 'Hệ Thống 30 Xe',
    desc: 'Được điều phối xe đón tập trung từ các tỉnh thành về thẳng nhà máy hoặc khu ký túc xá. Đặc biệt, Tri Thức Việt còn duy trì chương trình "Chuyến Xe 0 Đồng" đưa đón người lao động về quê đón Tết sum vầy mỗi năm.',
    highlight: 'Hỗ trợ di chuyển an toàn, không lo phát sinh chi phí đi lại',
    image: '/images/all/images-activities-xuat-phat-xe-0-dong.webp',
    imageAlt: 'Chuyến xe 0 đồng đưa đón người lao động về quê đón Tết',
    icon: Bus,
  },
  {
    stepNumber: '04',
    title: 'Nhận Phòng Ký Túc Xá & Đi Làm',
    badge: '11 KTX – 5.000 Chỗ Ở',
    desc: 'Được bố trí chỗ ở tiện nghi tại hệ thống ký túc xá gần nhà máy (đầy đủ điện nước, an ninh, wifi). Đội ngũ quản lý đời sống luôn đồng hành, lắng nghe và hỗ trợ người lao động trong suốt quá trình làm việc.',
    highlight: 'Đồng hành hỗ trợ khi phát sinh khó khăn trong đời sống và công việc',
    image: '/images/all/images-activities-doi-xe.webp',
    imageAlt: 'Hạ tầng xe đưa đón và khu vực sinh hoạt phục vụ công nhân',
    icon: Home,
  },
];

export function WorkerJourney() {
  const [activeIdx, setActiveIdx] = useState(0);

  const step = journeySteps[activeIdx];
  const StepIcon = step.icon;

  return (
    <div className="space-y-8">
      {/* 4 Steps Navigation Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {journeySteps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = idx === activeIdx;
          return (
            <button
              key={s.stepNumber}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                isActive
                  ? 'bg-orange-600 text-white border-orange-600 shadow-xl shadow-orange-600/25 scale-[1.02] ring-2 ring-orange-400/40'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-orange-300 hover:bg-orange-50/50'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span
                  className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                    isActive ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  Chặng {s.stepNumber}
                </span>
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              </div>
              <h4 className="text-base font-bold leading-snug mb-2">
                {s.title}
              </h4>
              <span
                className={`text-xs font-semibold ${
                  isActive ? 'text-orange-100' : 'text-slate-500'
                }`}
              >
                {s.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase with Real Photo */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-600/30">
                <StepIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
                  Chặng {step.stepNumber} • {step.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                  {step.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed">
              {step.desc}
            </p>

            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase text-orange-800 tracking-wider block">Cam kết Tri Thức Việt</span>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">{step.highlight}</p>
              </div>
            </div>

            {/* Step Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={activeIdx === 0}
                onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-orange-600 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Chặng trước</span>
              </button>
              <div className="flex gap-1.5">
                {journeySteps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIdx ? 'w-8 bg-orange-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Chuyển đến chặng ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                disabled={activeIdx === journeySteps.length - 1}
                onClick={() => setActiveIdx((prev) => Math.min(journeySteps.length - 1, prev + 1))}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <span>Chặng tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Real Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-medium text-white/90 drop-shadow">
                  {step.imageAlt}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
