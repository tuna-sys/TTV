'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Sparkles,
  X,
} from 'lucide-react';

export interface ActivityPhoto {
  id: string;
  src: string;
  title: string;
  category: 'kỷ niệm' | 'teambuilding' | 'vinh danh' | 'đội ngũ';
  categoryLabel: string;
  description: string;
  isCenter?: boolean;
}

const ALL_PHOTOS: ActivityPhoto[] = [
  {
    id: 'center-family',
    src: '/images/TTV/optimized/MAP04198.webp',
    title: 'Đại gia đình Tri Thức Việt',
    category: 'kỷ niệm',
    categoryLabel: 'Tập thể & Kỷ niệm',
    description: 'Khoảnh khắc sum vầy đầy tự hào của toàn thể cán bộ nhân viên Tri Thức Việt trên hành trình phát triển.',
    isCenter: true,
  },
  {
    id: 'gala-panoramic',
    src: '/images/TTV/optimized/DSC08829.webp',
    title: 'Đêm hội Gala Tri Thức Việt',
    category: 'kỷ niệm',
    categoryLabel: 'Tập thể & Kỷ niệm',
    description: 'Sân khấu trang trọng vinh danh và sẻ chia những thành quả xuất sắc của năm.',
  },
  {
    id: 'beach-energy',
    src: '/images/TTV/optimized/MAP03210.webp',
    title: 'Teambuilding bãi biển - Lan tỏa năng lượng',
    category: 'teambuilding',
    categoryLabel: 'Teambuilding',
    description: 'Hoạt động dã ngoại tiếp lửa nhiệt huyết, rèn luyện thể chất và tăng cường tình đồng đội.',
  },
  {
    id: 'award-excellence',
    src: '/images/TTV/optimized/DSC08198.webp',
    title: 'Vinh danh cá nhân tiêu biểu',
    category: 'vinh danh',
    categoryLabel: 'Vinh danh',
    description: 'Trao thưởng cho những cá nhân có đóng góp xuất sắc và gắn bó lâu năm cùng tập thể.',
  },
  {
    id: 'teamwork-challenge',
    src: '/images/TTV/optimized/MAP03067.webp',
    title: 'Tinh thần đồng đội - Vượt mọi thử thách',
    category: 'teambuilding',
    categoryLabel: 'Teambuilding',
    description: 'Các thử thách thực tế giúp gắn kết các phòng ban và thắt chặt tinh thần hợp tác.',
  },
  {
    id: 'gala-dinner-cozy',
    src: '/images/TTV/optimized/DSC08309.webp',
    title: 'Gala Dinner - Khoảnh khắc sum vầy',
    category: 'kỷ niệm',
    categoryLabel: 'Tập thể & Kỷ niệm',
    description: 'Những nụ cười, cái bắt tay và lời tri ân chân thành trong buổi dạ tiệc thân mật.',
  },
  {
    id: 'team-discipline',
    src: '/images/TTV/optimized/MAP03130.webp',
    title: 'Khối vận hành đồng lòng trên thao trường',
    category: 'đội ngũ',
    categoryLabel: 'Đội ngũ vận hành',
    description: 'Văn hóa kỷ luật, tính chuyên nghiệp và sự phối hợp nhịp nhàng trong mọi hoạt động.',
  },
  {
    id: 'award-loyalty',
    src: '/images/TTV/optimized/DSC08074.webp',
    title: 'Tôn vinh hành trình cống hiến bền bỉ',
    category: 'vinh danh',
    categoryLabel: 'Vinh danh',
    description: 'Ghi nhận và tri ân sâu sắc những người đồng hành xây đắp nền móng Tri Thức Việt.',
  },
  {
    id: 'team-kickoff',
    src: '/images/TTV/optimized/MAP03027.webp',
    title: 'Khởi động chương trình rèn luyện',
    category: 'teambuilding',
    categoryLabel: 'Teambuilding',
    description: 'Khí thế hào hứng trước khi bước vào các chặng thử thách tập thể đầy bùng nổ.',
  },
  {
    id: 'happy-reunion',
    src: '/images/TTV/optimized/DSC08744.webp',
    title: 'Niềm vui rạng rỡ của các thành viên',
    category: 'kỷ niệm',
    categoryLabel: 'Tập thể & Kỷ niệm',
    description: 'Nụ cười tươi tắn lưu giữ kỷ niệm đẹp trong ngày hội truyền thống công ty.',
  },
  {
    id: 'youth-drive',
    src: '/images/TTV/optimized/MAP03042.webp',
    title: 'Nhiệt huyết tuổi trẻ Tri Thức Việt',
    category: 'teambuilding',
    categoryLabel: 'Teambuilding',
    description: 'Sức trẻ năng động là động lực cốt lõi đưa các giải pháp nhân lực vươn xa.',
  },
  {
    id: 'leadership-core',
    src: '/images/TTV/optimized/DSC08751.webp',
    title: 'Đội ngũ lãnh đạo và cán bộ nòng cốt',
    category: 'đội ngũ',
    categoryLabel: 'Đội ngũ vận hành',
    description: 'Ban điều hành cùng đội ngũ phụ trách các trung tâm vận hành và cung ứng nhân sự.',
  },
  {
    id: 'memorable-journey',
    src: '/images/TTV/optimized/MAP03233.webp',
    title: 'Kỷ niệm chuyến đi gắn kết toàn công ty',
    category: 'teambuilding',
    categoryLabel: 'Teambuilding',
    description: 'Mỗi chuyến đi là một dấu mốc làm sâu sắc thêm văn hóa tương trợ và gắn bó.',
  },
  {
    id: 'welcome-event',
    src: '/images/TTV/optimized/DSC07717.webp',
    title: 'Đón tiếp đại biểu và cán bộ nhân viên',
    category: 'kỷ niệm',
    categoryLabel: 'Tập thể & Kỷ niệm',
    description: 'Không khí trang trọng tại khu vực sảnh chào đón trước giờ khai mạc ngày hội.',
  },
  {
    id: 'trust-forward',
    src: '/images/TTV/optimized/DSC08719.webp',
    title: 'Trao gửi niềm tin - Bứt phá mục tiêu mới',
    category: 'vinh danh',
    categoryLabel: 'Vinh danh',
    description: 'Khoảnh khắc trao chứng nhận và ghi nhận thành tựu xuất sắc của từng đơn vị.',
  },
  {
    id: 'warm-smiles',
    src: '/images/TTV/optimized/DSC08745.webp',
    title: 'Giao lưu thân mật giữa các thế hệ nhân sự',
    category: 'kỷ niệm',
    categoryLabel: 'Tập thể & Kỷ niệm',
    description: 'Sự tiếp nối và sẻ chia kinh nghiệm giữa các thế hệ cán bộ Tri Thức Việt.',
  },
  {
    id: 'training-session',
    src: '/images/TTV/optimized/7bf6340393bb57e50eaa5.webp',
    title: 'Hoạt động đào tạo nội bộ và định hướng',
    category: 'đội ngũ',
    categoryLabel: 'Đội ngũ vận hành',
    description: 'Các buổi bồi dưỡng kỹ năng tuyển dụng và quản lý ký túc xá, đội xe thực tế.',
  },
  {
    id: 'cozy-gathering',
    src: '/images/TTV/optimized/fc2972240b57fe09a74668.webp',
    title: 'Khoảnh khắc hội ngộ ấm cúng đại gia đình',
    category: 'kỷ niệm',
    categoryLabel: 'Tập thể & Kỷ niệm',
    description: 'Không gian sum vầy ấm áp đọng lại nhiều cảm xúc trong lòng mỗi thành viên.',
  },
  {
    id: 'partner-future',
    src: '/images/TTV/optimized/z6187095410817_a20a5ff9f7f4b465395edd66be99c6c6.webp',
    title: 'Đồng hành bền vững cùng đối tác và người lao động',
    category: 'đội ngũ',
    categoryLabel: 'Đội ngũ vận hành',
    description: 'Cam kết minh bạch và uy tín trong mọi hoạt động cung ứng nhân lực cho nhà máy FDI.',
  },
];

// Split 19 photos into 3 balanced thematic rows
const ROW_1_PHOTOS = [
  ALL_PHOTOS[2], // beach-energy
  ALL_PHOTOS[3], // award-excellence
  ALL_PHOTOS[13], // welcome-event
  ALL_PHOTOS[4], // teamwork-challenge
  ALL_PHOTOS[9], // happy-reunion
  ALL_PHOTOS[16], // training-session
];

const ROW_2_PHOTOS = [
  ALL_PHOTOS[0], // center-family (Large Hero)
  ALL_PHOTOS[1], // gala-panoramic
  ALL_PHOTOS[6], // team-discipline
  ALL_PHOTOS[7], // award-loyalty
  ALL_PHOTOS[11], // leadership-core
  ALL_PHOTOS[10], // youth-drive
  ALL_PHOTOS[18], // partner-future
];

const ROW_3_PHOTOS = [
  ALL_PHOTOS[8], // team-kickoff
  ALL_PHOTOS[5], // gala-dinner-cozy
  ALL_PHOTOS[12], // memorable-journey
  ALL_PHOTOS[14], // trust-forward
  ALL_PHOTOS[15], // warm-smiles
  ALL_PHOTOS[17], // cozy-gathering
];

export function ActivityZoomWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollShift, setScrollShift] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Parallax scroll-linked velocity
  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Check if section is visible or nearby
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progressFromCenter = (windowHeight / 2 - (rect.top + rect.height / 2)) * 0.45;
          setScrollShift(progressFromCenter);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Modal navigation
  const activePhoto = activePhotoIndex !== null ? ALL_PHOTOS[activePhotoIndex] : null;

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) => (prev === null ? null : (prev - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length));
  }, []);

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) => (prev === null ? null : (prev + 1) % ALL_PHOTOS.length));
  }, []);

  useEffect(() => {
    if (activePhotoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handlePrev, handleNext]);

  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePhotoIndex]);

  // Duplicated arrays for seamless continuous looping
  const row1Items = useMemo(() => [...ROW_1_PHOTOS, ...ROW_1_PHOTOS], []);
  const row2Items = useMemo(() => [...ROW_2_PHOTOS, ...ROW_2_PHOTOS], []);
  const row3Items = useMemo(() => [...ROW_3_PHOTOS, ...ROW_3_PHOTOS], []);

  const renderCard = (photo: ActivityPhoto, uniqueKey: string, isFeatured = false) => {
    const originalIndex = ALL_PHOTOS.findIndex((p) => p.id === photo.id);

    return (
      <div
        key={uniqueKey}
        onClick={() => setActivePhotoIndex(originalIndex)}
        className={`group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-lg transition-all duration-300 ease-out hover:z-20 hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/20 ${
          isFeatured
            ? 'h-[230px] w-[330px] sm:h-[270px] sm:w-[400px] md:h-[300px] md:w-[450px]'
            : 'h-[175px] w-[260px] sm:h-[200px] sm:w-[310px] md:h-[225px] md:w-[350px]'
        }`}
      >
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          sizes={isFeatured ? '(min-width: 768px) 450px, 330px' : '(min-width: 768px) 350px, 260px'}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent transition-opacity duration-300 group-hover:from-slate-950/95" />

        {/* Top category badge */}
        <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5">
          <span className="rounded-full bg-slate-950/80 px-2.5 py-1 text-[11px] font-bold text-blue-300 backdrop-blur-md ring-1 ring-white/10">
            {photo.categoryLabel}
          </span>
          {photo.isCenter && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
              <Sparkles className="h-3 w-3 text-amber-300" />
              Tâm điểm
            </span>
          )}
        </div>

        {/* Bottom caption & hover CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4">
          <h3 className="line-clamp-1 text-xs font-black text-white transition-colors duration-200 group-hover:text-blue-300 sm:text-sm">
            {photo.title}
          </h3>
          <p className="mt-1 line-clamp-1 text-[11px] text-slate-300 opacity-80 sm:text-xs">
            {photo.description}
          </p>
          <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-blue-400 transition-opacity duration-200 group-hover:text-white">
            <Expand className="h-3 w-3" />
            <span>Phóng to xem HD</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="hoat-dong-thuc-te"
      aria-labelledby="activity-stream-heading"
      className="relative overflow-hidden border-b border-slate-200 bg-slate-950 py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl" />

      {/* Header Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-300">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>HỒ SƠ HÌNH ẢNH HOẠT ĐỘNG THỰC TẾ</span>
          </div>
          <h2
            id="activity-stream-heading"
            className="mt-4 text-balance text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
          >
            Hành trình gắn kết & Bản sắc con người Tri Thức Việt
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            Mỗi hình ảnh là một minh chứng sống động cho tinh thần kỷ luật, nhiệt huyết tuổi trẻ và sự gắn bó bền chặt giữa tập thể Tri Thức Việt, người lao động cùng các đối tác doanh nghiệp.
          </p>
        </div>
      </div>

      {/* 3-Tier Multi-Directional Infinite Photo Stream */}
      <div className="relative mt-12 flex flex-col gap-4 overflow-hidden sm:mt-16 sm:gap-6">
        {/* Subtle Edge Vignette Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent sm:w-28" />

        {/* ROW 1: Flows Left */}
        <div
          className="relative w-full overflow-hidden transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${-scrollShift * 0.4}px)` }}
        >
          <div
            className="flex w-max items-center gap-4 sm:gap-6 animate-marquee-left"
            style={{
              animationDuration: '46s',
              animationPlayState: activePhotoIndex !== null ? 'paused' : 'running',
            }}
          >
            {row1Items.map((photo, idx) => renderCard(photo, `r1-${photo.id}-${idx}`, false))}
          </div>
        </div>

        {/* ROW 2: Flows Right (Hero / Featured Center Row) */}
        <div
          className="relative w-full overflow-hidden transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${scrollShift * 0.55}px)` }}
        >
          <div
            className="flex w-max items-center gap-4 sm:gap-6 animate-marquee-right"
            style={{
              animationDuration: '52s',
              animationPlayState: activePhotoIndex !== null ? 'paused' : 'running',
            }}
          >
            {row2Items.map((photo, idx) => renderCard(photo, `r2-${photo.id}-${idx}`, true))}
          </div>
        </div>

        {/* ROW 3: Flows Left */}
        <div
          className="relative w-full overflow-hidden transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${-scrollShift * 0.35}px)` }}
        >
          <div
            className="flex w-max items-center gap-4 sm:gap-6 animate-marquee-left"
            style={{
              animationDuration: '42s',
              animationPlayState: activePhotoIndex !== null ? 'paused' : 'running',
            }}
          >
            {row3Items.map((photo, idx) => renderCard(photo, `r3-${photo.id}-${idx}`, false))}
          </div>
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center px-4 text-center text-xs text-slate-400 sm:mt-10">
        <span>
          💡 Nhấp vào hình ảnh bất kỳ để xem chi tiết · Cuộn chuột lên/xuống để tăng tốc độ lướt
        </span>
      </div>

      {/* LIGHTBOX MODAL */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md transition-all duration-300"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:right-6 sm:top-6"
            aria-label="Đóng xem ảnh"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:left-6"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:right-6"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Content Frame */}
          <div className="relative mx-auto flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">
            {/* Modal Image */}
            <div className="relative flex aspect-[16/10] max-h-[68vh] w-full items-center justify-center bg-black sm:aspect-[16/9]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                priority
                sizes="(min-width: 1280px) 1152px, 100vw"
                className="object-contain"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="flex flex-col gap-2 border-t border-white/10 bg-slate-900/90 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-600/30 px-2.5 py-0.5 text-xs font-bold text-blue-300 ring-1 ring-inset ring-blue-500/40">
                    {activePhoto.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">
                    Ảnh {(activePhotoIndex ?? 0) + 1} / {ALL_PHOTOS.length}
                  </span>
                </div>
                <h4 className="mt-1 text-base font-black text-white sm:text-lg">
                  {activePhoto.title}
                </h4>
                <p className="mt-0.5 text-xs text-slate-300 sm:text-sm">
                  {activePhoto.description}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 sm:pt-0">
                <span className="text-xs text-slate-400">
                  Dùng phím mũi tên ← → để chuyển ảnh
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Scoped Marquee Keyframes */}
      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-left {
          animation: marqueeLeft 45s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right {
          animation: marqueeRight 50s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
