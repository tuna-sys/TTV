import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <span className="rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 border border-blue-500/20">
          Lỗi 404
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-[-0.03em] text-white">
          Không tìm thấy trang
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
          Địa chỉ trang bạn đang tìm kiếm không tồn tại hoặc đã được thay đổi.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          <ArrowLeft className="h-4 w-4" /> Về trang chủ
        </Link>
      </main>
      <Footer />
    </div>
  );
}
