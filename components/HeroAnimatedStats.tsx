'use client';

import { Award, BusFront, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({
  end,
  duration = 1800,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out exponential
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, end, duration]);

  // Format with dot separator (e.g. 94.514, 7.876)
  const formatted = count.toLocaleString('vi-VN').replace(/,/g, '.');

  return <span ref={elementRef}>{formatted}</span>;
}

export function HeroAnimatedStats() {
  return (
    <div className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Status indicator bar */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Chỉ số năng lực vận hành thực tế (Hồ sơ 2026)
            </span>
          </div>
          <span className="text-xs font-medium text-slate-500">
            Số liệu tổng hợp năm 2025 · Xác nhận bởi doanh nghiệp
          </span>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: 17+ Năm */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Bề dày phát triển</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-1 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              <AnimatedCounter end={17} />
              <span className="text-blue-600">+</span>
              <span className="text-base font-bold text-slate-500 ml-1">Năm</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Hành trình đồng hành và phát triển bền vững từ năm 2009.
            </p>
          </div>

          {/* Card 2: 94.514 Lượt */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Tuyển dụng năm 2025</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <Users className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-1 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              <AnimatedCounter end={94514} />
              <span className="text-base font-bold text-slate-500 ml-1">lượt</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Tổng lượt cung ứng nhân lực cho khối nhà máy sản xuất FDI.
            </p>
          </div>

          {/* Card 3: 7.876 Lượt / Tháng */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Tốc độ điều phối</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-1 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              <AnimatedCounter end={7876} />
              <span className="text-sm font-bold text-slate-500 ml-1">lượt/tháng</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Bình quân điều phối <strong className="text-slate-800 font-bold">300 lao động</strong> mỗi ngày làm việc.
            </p>
          </div>

          {/* Card 4: 30 Xe · 11 Ký Túc Xá */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Hạ tầng hỗ trợ</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <BusFront className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
              <span><AnimatedCounter end={30} /> <span className="text-sm font-bold text-slate-500">xe</span></span>
              <span className="text-slate-300">·</span>
              <span><AnimatedCounter end={11} /> <span className="text-sm font-bold text-slate-500">KTX</span></span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Quy mô 5.000 chỗ ở lưu trú và mạng lưới xe đưa đón trọn gói.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
