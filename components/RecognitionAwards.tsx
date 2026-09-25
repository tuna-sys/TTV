'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, Maximize2, X, CheckCircle2 } from 'lucide-react';

interface AwardItem {
  id: string;
  partner: string;
  title: string;
  badge: string;
  desc: string;
  inscription: string;
  image: string;
  imageAlt: string;
}

const awardsList: AwardItem[] = [
  {
    id: 'luxshare',
    partner: 'Luxshare ICT',
    title: 'Nhà Cung Ứng Hợp Tác Xuất Sắc Năm 2025',
    badge: 'Cúp Vinh Danh 2025',
    desc: 'Ghi nhận thành tích cung ứng nhân lực chất lượng cao, đúng tiến độ và duy trì tỷ lệ lao động ổn định cho các nhà máy thuộc tập đoàn Luxshare ICT.',
    inscription: 'VINH DANH (荣誉奖) - TRI THỨC VIỆT - NHÀ CUNG ỨNG HỢP TÁC XUẤT SẮC 2025 (2025年度优秀合作供应商)',
    image: '/images/all/images-awards-cup-vinh-danh-luxshare.webp',
    imageAlt: 'Cúp pha lê ngôi sao vàng vinh danh Tri Thức Việt từ Luxshare ICT năm 2025',
  },
  {
    id: 'goertek',
    partner: 'Tập Đoàn Goertek',
    title: 'Đối Tác Cung Ứng Nhân Lực Trực Tiếp Xuất Sắc 2025',
    badge: 'Biểu Trưng Vinh Danh 2025',
    desc: 'Vinh danh đối tác cung ứng nhân lực trực tiếp xuất sắc, đồng hành hiệu quả trong các kế hoạch tuyển dụng số lượng lớn của Goertek Vina.',
    inscription: 'VINH DANH (荣誉奖) - ĐỐI TÁC CUNG ỨNG NHÂN LỰC TRỰC TIẾP XUẤT SẮC NĂM 2025 (2025年度直聘人力优秀合作供应商)',
    image: '/images/all/images-awards-cup-vinh-danh-goertek.webp',
    imageAlt: 'Biểu trưng vinh danh đối tác cung ứng nhân lực trực tiếp xuất sắc 2025 từ Goertek',
  },
  {
    id: 'ldld-bacninh',
    partner: 'LĐLĐ Thành Phố Bắc Ninh',
    title: 'Giấy Khen Phong Trào Thi Đua Lao Động Giỏi',
    badge: 'Khen Thưởng Công Đoàn',
    desc: 'Khen thưởng thành tích xuất sắc trong phong trào thi đua "Lao động giỏi và xây dựng tổ chức Công đoàn vững mạnh" theo Quyết định số 03/QĐ-LĐLĐ ngày 15/01/2025.',
    inscription: 'BAN CHẤP HÀNH LIÊN ĐOÀN LAO ĐỘNG THÀNH PHỐ BẮC NINH TẶNG GIẤY KHEN CÔNG TY TNHH TRI THỨC VIỆT',
    image: '/images/all/images-awards-giay-khen-ldld-bac-ninh.webp',
    imageAlt: 'Giấy khen của Ban Chấp hành Liên đoàn Lao động Thành phố Bắc Ninh trao tặng Tri Thức Việt',
  },
];

export function RecognitionAwards() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {awardsList.map((award) => (
          <div
            key={award.id}
            className="rounded-3xl bg-slate-800/90 border border-slate-700 hover:border-blue-400 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Real Award Photo Container */}
            <div
              onClick={() => setSelectedAward(award)}
              className="relative aspect-[4/3] w-full bg-slate-900 cursor-pointer overflow-hidden"
              title="Nhấp để xem ảnh phóng to chi tiết"
            >
              <Image
                src={award.image}
                alt={award.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-blue-300 text-xs font-bold border border-blue-500/30 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{award.badge}</span>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-blue-300" />
              </div>
            </div>

            {/* Award Content Details */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between border-t border-slate-700/80 bg-slate-900/60">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                  {award.partner}
                </span>
                <h4 className="text-lg font-black text-white leading-snug group-hover:text-blue-300 transition-colors">
                  {award.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {award.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="line-clamp-1 italic">{award.inscription}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedAward && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="relative max-w-2xl w-full overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full bg-slate-950 p-4">
              <Image
                src={selectedAward.image}
                alt={selectedAward.imageAlt}
                fill
                sizes="(min-width: 1024px) 700px, 95vw"
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                  Minh chứng thực tế • {selectedAward.partner}
                </span>
                <h4 className="text-lg font-bold text-white">
                  {selectedAward.title}
                </h4>
                <p className="mt-1 text-xs text-slate-300 italic">
                  Chữ khắc: {selectedAward.inscription}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Đóng</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
