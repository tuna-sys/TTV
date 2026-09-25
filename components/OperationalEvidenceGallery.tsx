'use client';

import React, { useState } from 'react';
import { Building2, BusFront, UsersRound, Maximize2, X } from 'lucide-react';
import Image from 'next/image';
import { publicOperationalCapacity } from '@/data/siteData';

const [transportCapacity] = publicOperationalCapacity.items;

interface PhotoItem {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

export function OperationalEvidenceGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      src: '/images/all/images-activities-xuat-phat-xe-0-dong.webp',
      alt: 'Hoạt động điều phối người lao động của Tri Thức Việt dịp Tết 2025',
      title: 'Điều phối người lao động thực tế',
      desc: 'Hình ảnh gốc về một chương trình đưa đón người lao động của Tri Thức Việt.',
    },
    {
      src: '/images/all/bai-xe-tri-thuc-viet.jpg',
      alt: 'Toàn cảnh bãi xe phục vụ công tác điều phối của Tri Thức Việt',
      title: 'Bãi xe điều phối',
      desc: `${transportCapacity.value} ${transportCapacity.label}`,
    },
    {
      src: '/images/all/le-ky-ket-chuyen-doi-so-hblab.jpg',
      alt: 'Đại diện Tri Thức Việt và Công ty Cổ phần HBLAB ký hợp đồng chuyển đổi số',
      title: 'Nâng cao năng lực quản trị',
      desc: 'Tư liệu ký kết hợp đồng chuyển đổi số giữa Tri Thức Việt và Công ty Cổ phần HBLAB.',
    },
  ];

  return (
    <div id="operational-evidence-gallery" className="scroll-mt-24 border-t border-white/10 py-10">
      <div className="max-w-3xl">
        <h3 className="text-2xl font-black tracking-[-0.025em] text-white">
          Quy mô vận hành qua hình ảnh thực tế
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Ảnh tư liệu do doanh nghiệp cung cấp, đặt cạnh đúng nhóm năng lực được công bố trong hồ sơ.
        </p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-[1.12fr_0.88fr]">
        {/* Big Card Left */}
        <figure
          onClick={() => setSelectedPhoto(photos[0])}
          className="group relative min-h-[30rem] sm:min-h-[36rem] md:min-h-0 overflow-hidden rounded-3xl bg-slate-900 border border-white/10 cursor-pointer shadow-lg hover:border-blue-400/50 transition-all duration-300"
        >
          <Image
            alt={photos[0].alt}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            fill
            sizes="(min-width: 768px) 56vw, 100vw"
            src={photos[0].src}
          />
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4 text-blue-300" />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-5 pb-6 pt-24 sm:px-7 sm:pb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center mb-3">
              <UsersRound className="h-5 w-5" aria-hidden="true" />
            </div>
            <figcaption className="max-w-xl">
              <span className="block text-xl font-black text-white group-hover:text-blue-200 transition-colors">
                {photos[0].title}
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-300">
                {photos[0].desc}
              </span>
            </figcaption>
          </div>
        </figure>

        {/* 2 Smaller Cards Right */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {/* Card 1: 30 buses */}
          <figure
            onClick={() => setSelectedPhoto(photos[1])}
            className="group relative min-h-80 overflow-hidden rounded-3xl bg-slate-900 border border-white/10 cursor-pointer shadow-lg hover:border-blue-400/50 transition-all duration-300"
          >
            <Image
              alt={photos[1].alt}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              fill
              sizes="(min-width: 768px) 44vw, (min-width: 640px) 50vw, 100vw"
              src={photos[1].src}
            />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-blue-300" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-5 pb-5 pt-20">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center mb-2">
                <BusFront className="h-4 w-4" aria-hidden="true" />
              </div>
              <figcaption className="text-base font-black text-white group-hover:text-blue-200 transition-colors">
                {photos[1].title}
              </figcaption>
              <p className="mt-1 text-sm leading-6 text-slate-300 flex items-baseline gap-1.5">
                <strong className="text-2xl font-black tabular-nums text-white text-blue-300">
                  {transportCapacity.value}
                </strong>
                <span>{transportCapacity.label}</span>
              </p>
            </div>
          </figure>

          {/* Card 2: Office team */}
          <figure
            onClick={() => setSelectedPhoto(photos[2])}
            className="group relative min-h-80 overflow-hidden rounded-3xl bg-slate-900 border border-white/10 cursor-pointer shadow-lg hover:border-blue-400/50 transition-all duration-300"
          >
            <Image
              alt={photos[2].alt}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              fill
              sizes="(min-width: 768px) 44vw, (min-width: 640px) 50vw, 100vw"
              src={photos[2].src}
            />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-blue-300" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-5 pb-5 pt-20">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center mb-2">
                <Building2 className="h-4 w-4" aria-hidden="true" />
              </div>
              <figcaption className="text-base font-black text-white group-hover:text-blue-200 transition-colors">
                {photos[2].title}
              </figcaption>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                {photos[2].desc}
              </p>
            </div>
          </figure>
        </div>
      </div>

      <p className="mt-4 text-xs leading-6 text-slate-400">
        Nguồn ảnh: hồ sơ quy mô doanh nghiệp và tư liệu hoạt động năm 2025–2026. Khả năng bố trí thực tế phụ thuộc từng chương trình, khu vực và thời điểm.
      </p>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full overflow-hidden rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-slate-950">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="(min-width: 1024px) 900px, 95vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between p-5 bg-slate-900 border-t border-slate-800">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  {selectedPhoto.desc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
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
