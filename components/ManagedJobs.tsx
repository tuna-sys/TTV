import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { officialChannels } from '@/data/siteData';

export const ManagedJobs = () => {
  return (
    <section aria-labelledby="jobs-empty-heading" className="border-y border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div className="max-w-2xl">
          <h2 id="jobs-empty-heading" className="text-2xl font-extrabold tracking-[-0.025em] text-slate-950">Tin tuyển dụng được cập nhật trên kênh chính thức</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Website giới thiệu không lưu hồ sơ trực tuyến. Người lao động có thể xem bài đăng mới trên Facebook hoặc liên hệ trực tiếp với đội ngũ phụ trách.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={officialChannels.facebookPage} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white hover:bg-orange-500">Xem tin tuyển dụng <ExternalLink className="h-4 w-4" /></a>
          <Link href="/lien-he#lien-he-truc-tiep" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-100">Kênh liên hệ <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
};
