'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

export function HomeSummaryVideo() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [teamIsOpen, setTeamIsOpen] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '150px 0px' });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="video-tong-ket" className="scroll-mt-36 border-b border-slate-200 bg-white" aria-labelledby="summary-video-heading">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 id="summary-video-heading" className="mb-8 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">Hành trình & gắn kết Tri Thức Việt</h2>
        <div className="grid gap-8 lg:grid-cols-2">
        <article>
        <h3 className="mb-4 text-xl font-bold text-slate-950 sm:text-2xl">Nhìn lại hành trình Tri Thức Việt</h3>
        <div ref={frameRef} className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
          {shouldLoad ? <iframe
            src={`https://www.youtube.com/embed/dyV6dp3xQws?autoplay=${teamIsOpen ? 0 : 1}&mute=1&playsinline=1&rel=0`}
            title="Video tổng kết Tri Thức Việt"
            className="h-full w-full border-0"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          /> : <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-950 text-sm text-slate-300">Video sẽ tải khi bạn cuộn tới đây</div>}
        </div>
        </article>
        <article>
          <h3 className="mb-4 text-xl font-bold text-slate-950 sm:text-2xl">Gắn kết đội ngũ – Teambuilding Tri Thức Việt</h3>
          <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
            {teamIsOpen ? <iframe
              src="https://www.youtube.com/embed/GxfBsEaHeH0?autoplay=1&playsinline=1&rel=0"
              title="Video teambuilding Tri Thức Việt"
              className="h-full w-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            /> : <button type="button" onClick={() => setTeamIsOpen(true)} aria-label="Phát video teambuilding Tri Thức Việt" className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-emerald-950 to-slate-950 px-4 text-white hover:from-emerald-900 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-emerald-400">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-emerald-900"><Play size={28} fill="currentColor" aria-hidden="true" className="ml-1" /></span>
              <span className="text-lg font-semibold">Xem video teambuilding</span>
            </button>}
          </div>
        </article>
        </div>
      </div>
    </section>
  );
}



