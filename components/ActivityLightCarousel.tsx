'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Maximize2,
  X,
  Camera
} from 'lucide-react';

export type ActivityItem = {
  src: string;
  alt: string;
  label: string;
};

interface Props {
  items: ActivityItem[];
}

export function ActivityLightCarousel({ items }: Props) {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ActivityItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - visibleCount);

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isPaused || selectedItem !== null) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, selectedItem, nextSlide]);

  return (
    <div className="relative my-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Carousel Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
              Thư Viện Ảnh Thực Tế
            </span>
            <span className="text-sm font-semibold text-slate-700">
              Ghi lại đội ngũ, hạ tầng vận tải và các chương trình đồng hành
            </span>
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-3 self-end sm:self-center">
          <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            {startIndex + 1} - {Math.min(startIndex + visibleCount, items.length)} / {items.length}
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors"
              aria-label={isPaused ? 'Tiếp tục tự động chuyển' : 'Tạm dừng'}
              title={isPaused ? 'Tiếp tục' : 'Tạm dừng'}
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-600" /> : <Pause className="w-4 h-4 text-amber-600" />}
            </button>
            <button
              type="button"
              onClick={prevSlide}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors active:scale-95"
              aria-label="Ảnh trước"
              title="Ảnh trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors active:scale-95"
              aria-label="Ảnh tiếp theo"
              title="Ảnh tiếp theo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards Slider Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.src}
              className="flex-shrink-0 px-2.5"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Photo container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle hover icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-slate-900/70 backdrop-blur-sm text-white text-[11px] font-bold">
                    #{index + 1}
                  </div>
                </div>

                {/* Caption below image */}
                <div className="p-4 bg-white flex-1 flex flex-col justify-between border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-blue-700 transition-colors">
                    {item.label}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-1">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-1.5 mt-6 pt-4 border-t border-slate-100">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setStartIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === startIndex
                ? 'w-6 bg-blue-600'
                : 'w-2 bg-slate-200 hover:bg-slate-300'
            }`}
            aria-label={`Chuyển đến trang ${idx + 1}`}
          />
        ))}
      </div>

      {/* High-Resolution Modal Preview */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                sizes="(min-width: 1024px) 900px, 95vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between p-5 bg-white border-t border-slate-100">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {selectedItem.label}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {selectedItem.alt}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
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
