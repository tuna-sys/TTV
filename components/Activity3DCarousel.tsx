'use client';

import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { useState } from 'react';

type ActivityItem = {
  src: string;
  alt: string;
  label: string;
};

export function Activity3DCarousel({ items }: { items: ActivityItem[] }) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ActivityItem | null>(null);

  const count = items.length;
  const angleStep = 360 / count;

  return (
    <section
      role="region"
      aria-label="Tư liệu hoạt động Tri Thức Việt"
      className="relative my-8 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 py-10 px-2 sm:px-6 text-white shadow-2xl"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <div className="h-80 w-80 rounded-full bg-blue-600/30 blur-3xl sm:h-[420px] sm:w-[420px]" />
        <div className="h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      {/* Floating play/pause control */}
      <div className="absolute top-4 right-4 z-20">
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md transition hover:bg-slate-800 hover:text-white active:scale-95"
          aria-label={isPaused ? 'Tiếp tục xoay' : 'Tạm dừng xoay'}
        >
          {isPaused ? <Play className="h-3 w-3 text-emerald-400" /> : <Pause className="h-3 w-3 text-amber-400" />}
          <span className="text-[11px]">{isPaused ? 'Tiếp tục' : 'Tạm dừng'}</span>
        </button>
      </div>

      {/* 3D Stage Container */}
      <div className="ttv-3d-stage relative flex h-[340px] sm:h-[400px] md:h-[440px] items-center justify-center overflow-hidden">
        <div
          className={`ttv-3d-cylinder relative flex h-[160px] w-[230px] sm:h-[190px] sm:w-[280px] md:h-[210px] md:w-[310px] items-center justify-center ${
            isPaused ? 'paused' : ''
          }`}
        >
          {items.map((item, index) => {
            const angle = index * angleStep;
            return (
              <div
                key={item.src}
                className="ttv-3d-card absolute inset-0 cursor-pointer"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(var(--cylinder-radius, 460px))`,
                }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="ttv-3d-card-inner group relative h-full w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 320px, (min-width: 640px) 280px, 230px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent px-3.5 pb-3 pt-8 text-left">
                    <span className="block truncate text-xs font-bold text-white sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive cylinder radius adjustment */}
      <style jsx>{`
        .ttv-3d-cylinder {
          --cylinder-radius: 290px;
        }
        @media (min-width: 640px) {
          .ttv-3d-cylinder {
            --cylinder-radius: 390px;
          }
        }
        @media (min-width: 1024px) {
          .ttv-3d-cylinder {
            --cylinder-radius: 470px;
          }
        }
      `}</style>

      {/* Modal preview when clicking a card */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-slate-900 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full min-w-[280px] sm:min-w-[500px] md:min-w-[680px]">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                sizes="(min-width: 768px) 720px, 90vw"
                className="rounded-xl object-contain"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <h4 className="text-base font-bold text-white">{selectedItem.label}</h4>
                <p className="mt-1 text-xs text-slate-400">{selectedItem.alt}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-bold text-white hover:bg-slate-700"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
