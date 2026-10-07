'use client';

import { useEffect, useRef, useState } from 'react';

type VideoPlayer = { playVideo(): void; pauseVideo(): void; mute(): void; destroy(): void };
type YouTubeAPI = { Player: new (frame: HTMLIFrameElement, options: { events: { onReady: () => void } }) => VideoPlayer };
const youtubeWindow = () => window as typeof window & { YT?: YouTubeAPI; onYouTubeIframeAPIReady?: () => void };
let apiPromise: Promise<YouTubeAPI> | undefined;
function loadYouTubeAPI() {
  if (youtubeWindow().YT?.Player) return Promise.resolve(youtubeWindow().YT!);
  if (!apiPromise) apiPromise = new Promise<YouTubeAPI>((resolve, reject) => {
    const previous = youtubeWindow().onYouTubeIframeAPIReady;
    youtubeWindow().onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(youtubeWindow().YT!);
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.onerror = () => { apiPromise = undefined; reject(new Error('YouTube API unavailable')); };
    document.head.appendChild(script);
  });
  return apiPromise;
}

function ViewportVideo({ videoId, title, active }: { videoId: string; title: string; active: boolean }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<VideoPlayer | null>(null);
  const activeRef = useRef(active);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  activeRef.current = active;

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setLoaded(true); observer.disconnect(); }
    }, { rootMargin: '150px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    let cancelled = false;
    let player: VideoPlayer | undefined;
    loadYouTubeAPI().then(api => {
      if (cancelled || !frameRef.current) return;
      player = new api.Player(frameRef.current, { events: { onReady: () => {
        if (cancelled || !player) return;
        playerRef.current = player;
        player.mute();
        setReady(true);
        if (activeRef.current && !document.hidden) player.playVideo();
        else player.pauseVideo();
      } } });
    }).catch(() => { /* The native player remains available if the API fails. */ });
    return () => { cancelled = true; playerRef.current = null; player?.destroy(); };
  }, [loaded]);

  useEffect(() => {
    const sync = () => {
      const player = playerRef.current;
      if (!player) return;
      if (active && !document.hidden) player.playVideo(); else player.pauseVideo();
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, [active, ready]);

  return <div ref={containerRef} data-viewport-video={videoId} className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
    {loaded ? <iframe ref={frameRef}
      src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&mute=1&playsinline=1&rel=0&origin=${encodeURIComponent(window.location.origin)}`}
      title={title} className="h-full w-full border-0"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin" />
      : <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-950 text-sm text-slate-300">Video sẽ tải khi bạn cuộn tới đây</div>}
  </div>;
}

export function HomeSummaryVideo({ summaryOnly = false, teamOnly = false }: { summaryOnly?: boolean; teamOnly?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => ratios.set(entry.target, entry.intersectionRatio));
      let best: Element | null = null;
      let bestRatio = 0.25;
      ratios.forEach((ratio, element) => { if (ratio > bestRatio) { best = element; bestRatio = ratio; } });
      setActiveId(best ? (best as Element).getAttribute('data-viewport-video') : null);
    }, { rootMargin: '-100px 0px -80px 0px', threshold: [0, 0.25, 0.4, 0.5, 0.6, 0.75, 1] });
    section.querySelectorAll('[data-viewport-video]').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [summaryOnly, teamOnly]);
  const headingId = teamOnly ? 'team-video-heading' : 'summary-video-heading';
  return <section ref={sectionRef} id={teamOnly ? 'video-teambuilding' : 'video-tong-ket'} className="scroll-mt-36 border-b border-slate-200 bg-white" aria-labelledby={headingId}>
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h2 id={headingId} className="mb-4 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">{teamOnly ? 'Gắn kết đội ngũ Tri Thức Việt' : summaryOnly ? 'Hành trình phát triển Tri Thức Việt' : 'Tri Thức Việt qua những thước phim'}</h2>
      <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{teamOnly ? 'Những hoạt động teambuilding lưu lại tinh thần đồng đội và niềm vui của tập thể Tri Thức Việt.' : 'Nhìn lại những dấu mốc và con người làm nên Tri Thức Việt qua video tư liệu.'}</p>
      <div className="grid gap-12">
        {!teamOnly && <article>
          {!summaryOnly && <h3 className="mb-4 text-xl font-bold text-slate-950 sm:text-2xl">Nhìn lại chặng đường phát triển</h3>}
          <ViewportVideo videoId="dyV6dp3xQws" title="Nhìn lại chặng đường phát triển của Tri Thức Việt" active={activeId === 'dyV6dp3xQws'} />
        </article>}
        {!summaryOnly && <article>
          {!teamOnly && <h3 className="mb-4 text-xl font-bold text-slate-950 sm:text-2xl">Tinh thần đồng đội – Teambuilding Tri Thức Việt</h3>}
          <ViewportVideo videoId="GxfBsEaHeH0" title="Gắn kết đội ngũ Tri Thức Việt qua hoạt động teambuilding" active={activeId === 'GxfBsEaHeH0'} />
        </article>}
      </div>
    </div>
  </section>;
}
