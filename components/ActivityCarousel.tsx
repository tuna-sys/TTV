'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type ActivityItem = {
  src: string;
  alt: string;
  label: string;
};

const AUTOPLAY_DELAY = 5500;

export function ActivityCarousel({ items }: { items: ActivityItem[] }) {
  const carouselRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const scrollFrameRef = useRef<number>();
  const autoplayTimerRef = useRef<number>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayCycle, setAutoplayCycle] = useState(0);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => () => {
    if (scrollFrameRef.current !== undefined) cancelAnimationFrame(scrollFrameRef.current);
    if (autoplayTimerRef.current !== undefined) window.clearTimeout(autoplayTimerRef.current);
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReduceMotion(motionPreference.matches);
    const updateDocumentVisibility = () => setDocumentVisible(!document.hidden);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.35);
    }, { threshold: [0, 0.35, 0.7] });

    updateMotionPreference();
    updateDocumentVisibility();
    if (carouselRef.current) visibilityObserver.observe(carouselRef.current);
    motionPreference.addEventListener('change', updateMotionPreference);
    document.addEventListener('visibilitychange', updateDocumentVisibility);

    return () => {
      visibilityObserver.disconnect();
      motionPreference.removeEventListener('change', updateMotionPreference);
      document.removeEventListener('visibilitychange', updateDocumentVisibility);
    };
  }, []);

  const moveTo = useCallback((index: number, userInitiated = false) => {
    if (items.length === 0) return;
    const nextIndex = (index + items.length) % items.length;
    const track = trackRef.current;
    track?.scrollTo({ left: track.clientWidth * nextIndex, behavior: reduceMotion ? 'auto' : 'smooth' });
    setActiveIndex(nextIndex);
    if (userInitiated) setAutoplayCycle((cycle) => cycle + 1);
  }, [items.length, reduceMotion]);

  const autoplayRunning = items.length > 1
    && documentVisible
    && isInView
    && !isFocusWithin
    && !isHovered
    && !reduceMotion
    && !userPaused;

  useEffect(() => {
    if (!autoplayRunning) return;
    autoplayTimerRef.current = window.setTimeout(() => moveTo(activeIndex + 1), AUTOPLAY_DELAY);
    return () => {
      if (autoplayTimerRef.current !== undefined) window.clearTimeout(autoplayTimerRef.current);
    };
  }, [activeIndex, autoplayCycle, autoplayRunning, moveTo]);

  const handleScroll = () => {
    if (scrollFrameRef.current !== undefined) return;
    scrollFrameRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (track) {
        const index = Math.round(track.scrollLeft / track.clientWidth);
        const nextIndex = Math.max(0, Math.min(items.length - 1, index));
        setActiveIndex((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex);
      }
      scrollFrameRef.current = undefined;
    });
  };

  const isNearby = (index: number) => {
    const distance = Math.abs(index - activeIndex);
    return distance <= 1 || distance === items.length - 1;
  };

  return (
    <section
      ref={carouselRef}
      className="mt-4"
      aria-roledescription="carousel"
      aria-label="Tư liệu hoạt động Tri Thức Việt"
      data-autoplay={reduceMotion ? 'reduced-motion' : autoplayRunning ? 'running' : 'paused'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusWithin(false);
      }}
    >
      <ul ref={trackRef} onScroll={handleScroll} className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl border border-slate-200 bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item, index) => (
          <li key={item.src} className="w-full flex-none snap-start">
            <figure>
              <div className="relative aspect-[4/3] bg-slate-100">
                {isNearby(index) && (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading={index === activeIndex ? 'eager' : 'lazy'}
                    sizes="(min-width: 1280px) 1216px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                    className={index === activeIndex ? 'ttv-gallery-photo object-contain' : 'object-contain'}
                  />
                )}
              </div>
              <figcaption className="px-5 py-4 text-sm font-bold text-slate-700">{item.label}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-sm text-slate-600" aria-live={autoplayRunning ? 'off' : 'polite'} aria-atomic="true">Ảnh {activeIndex + 1} / {items.length}</p>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setUserPaused((paused) => !paused)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" aria-label={userPaused ? 'Tiếp tục trình chiếu' : 'Tạm dừng trình chiếu'} aria-pressed={userPaused}>
            {userPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
          <button type="button" onClick={() => moveTo(activeIndex - 1, true)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" aria-label="Ảnh trước"><ChevronLeft className="h-5 w-5" /></button>
          <div className="flex gap-1.5" aria-label="Chọn ảnh">
            {items.map((item, index) => <button key={item.src} type="button" onClick={() => moveTo(index, true)} className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-blue-700' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`} aria-label={`Xem ảnh ${index + 1}: ${item.label}`} aria-current={index === activeIndex ? 'true' : undefined} />)}
          </div>
          <button type="button" onClick={() => moveTo(activeIndex + 1, true)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" aria-label="Ảnh tiếp theo"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}
