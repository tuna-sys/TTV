import {
  ArrowRight,
  CalendarDays,
  FileCheck2,
} from 'lucide-react';
import Link from 'next/link';
import { publicRecruitmentCaseStudy } from '@/data/siteData';
import { OperationalEvidenceGallery } from '@/components/OperationalEvidenceGallery';
import { InteractiveOperatingAreas } from '@/components/InteractiveOperatingAreas';

export const RecruitmentCaseStudy = () => (
  <section id="case-study-2025" aria-labelledby="case-study-heading" className="scroll-mt-24 overflow-hidden bg-slate-950 text-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h2 id="case-study-heading" className="text-balance text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            {publicRecruitmentCaseStudy.title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {publicRecruitmentCaseStudy.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-bold text-blue-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-3 py-2 ring-1 ring-inset ring-blue-400/30">
            <FileCheck2 className="h-4 w-4" aria-hidden="true" />
            {publicRecruitmentCaseStudy.sourceLabel}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-inset ring-white/15">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            {publicRecruitmentCaseStudy.period}
          </span>
        </div>
      </div>

      <div className="py-10">
        <div className="max-w-5xl">
          <InteractiveOperatingAreas />
        </div>
      </div>

      <OperationalEvidenceGallery />

      <div className="grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-bold text-white">Nguồn và phạm vi công bố</p>
          <p className="mt-2 max-w-3xl text-xs leading-6 text-slate-400">
            Cập nhật {publicRecruitmentCaseStudy.updatedAt}. {publicRecruitmentCaseStudy.publicationScope}
            {' '}Kết quả thực tế trong tương lai phụ thuộc yêu cầu và điều kiện của từng chương trình.
          </p>
        </div>
        <Link
          href="/lien-he#lien-he-truc-tiep"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(37,99,235,0.3)] transition hover:bg-blue-400 focus-visible:ring-offset-slate-950"
        >
          Trao đổi nhu cầu doanh nghiệp
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

    </div>
  </section>
);
