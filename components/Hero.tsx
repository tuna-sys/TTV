'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';
import { ScrambleText } from '@/components/ScrambleText';
import { HeroAnimatedStats } from './HeroAnimatedStats';

export function Hero() {
  return (
    <section id="hero" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-black leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            <ScrambleText text="Kết nối đúng người" className="text-[#005b4a]" />
            <ScrambleText text="Đồng hành đúng nhu cầu" className="text-[#991b1b]" />
            <ScrambleText text="Phát triển bền vững" className="text-[#005b4a]" />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Tri Thức Việt định hướng trở thành cầu nối giữa doanh nghiệp và người lao động, tập trung vào tuyển nhân viên, cung ứng nhân sự và thông tin rõ ràng trước mỗi quyết định.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/lien-he#lien-he-truc-tiep" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
              Trao đổi nhu cầu tuyển dụng <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/giai-phap-doanh-nghiep" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
              Xem phương án phối hợp
            </Link>
          </div>
          <Link href="/nguoi-lao-dong" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-800">
            Tôi là người lao động, cần xem thông tin trước <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <figure className="ttv-photo-reveal overflow-hidden rounded-2xl bg-slate-950 text-white shadow-[0_18px_45px_-28px_rgba(15,23,42,0.7)]">
          <div className="relative aspect-[16/10]">
            <Image src="/images/all/images-activities-tri-thuc-viet-17-nam.jpg" alt="Ấn phẩm 17 năm Tri Thức Việt với hình ảnh đội ngũ, đội xe và trụ sở" fill priority sizes="(min-width: 1024px) 43vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="grid gap-5 px-5 py-5 sm:grid-cols-[auto_1fr] sm:items-center sm:px-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200"><Building2 className="h-5 w-5" /></span>
            <p className="text-sm leading-6 text-slate-200">Hồ sơ năng lực, hình ảnh hoạt động và đầu mối liên hệ được công bố theo thông tin doanh nghiệp xác nhận.</p>
          </figcaption>
        </figure>
      </div>

      <HeroAnimatedStats />
    </section>
  );
}
