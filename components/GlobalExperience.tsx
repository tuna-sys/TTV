'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Home, Phone, UsersRound } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type PageSection = {
  id: string;
  label: string;
};

const pageSections: Record<string, PageSection[]> = {
  '/': [
    { id: 'doi-tac', label: 'Đối tác tiêu biểu' },
    { id: 'nhu-cau', label: 'Chọn đúng nhu cầu' },
    { id: 'ho-so', label: 'Hồ sơ năng lực' },
    { id: 'kenh-chinh-thuc', label: 'Kênh chính thức' },
  ],
  '/gioi-thieu': [
    { id: 'tong-quan', label: 'Tổng quan' },
    { id: 'phap-nhan', label: 'Thông tin pháp nhân' },
    { id: 'nang-luc', label: 'Năng lực hoạt động' },
    { id: 'doi-tac', label: 'Đối tác' },
    { id: 'hoat-dong', label: 'Hoạt động nổi bật' },
  ],
  '/giai-phap-doanh-nghiep': [
    { id: 'giai-phap', label: 'Giải pháp doanh nghiệp' },
    { id: 'quy-trinh-6-buoc', label: 'Quy trình 6 bước' },
    { id: 'yeu-to-phoi-hop', label: 'Yếu tố phối hợp' },
    { id: 'gia-tri-doanh-nghiep', label: 'Giá trị cho doanh nghiệp' },
  ],
  '/nguoi-lao-dong': [
    { id: 'hanh-trinh', label: 'Hành trình người lao động' },
    { id: 'tru-cot-ho-tro', label: 'Trụ cột hỗ trợ' },
    { id: 'dieu-kien-ho-tro', label: 'Điều kiện hỗ trợ' },
  ],
  '/nang-luc-tuyen-nguon': [
    { id: 'nang-luc-sourcing', label: 'Năng lực tuyển nguồn' },
    { id: 'nang-luc-ho-tro', label: 'Năng lực hỗ trợ' },
    { id: 'diem-cham', label: 'Điểm chạm tuyển dụng' },
    { id: 'quy-trinh-sourcing', label: 'Quy trình tuyển nguồn' },
    { id: 'sang-loc', label: 'Sàng lọc ứng viên' },
    { id: 'lien-he-sourcing', label: 'Liên hệ tuyển nguồn' },
  ],
  '/chinh-sach-bao-ve-du-lieu-ca-nhan': [
    { id: 'chinh-sach', label: 'Chính sách dữ liệu' },
    { id: 'don-vi-xu-ly', label: 'Đơn vị xử lý' },
    { id: 'muc-dich-xu-ly', label: 'Mục đích xử lý' },
  ],
};
const emptySections: PageSection[] = [];

const bottomLinks = [
  { href: '/', label: 'Trang chủ', icon: Home },
  { href: '/giai-phap-doanh-nghiep', label: 'Doanh nghiệp', icon: Building2 },
  { href: '/nguoi-lao-dong', label: 'Người lao động', icon: UsersRound },
  { href: '/lien-he', label: 'Liên hệ', icon: Phone },
];

function isCurrentRoute(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function GlobalExperience() {
  const pathname = usePathname();
  const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/+$/, '');
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('');
  const sections = pageSections[normalizedPath] ?? emptySections;

  const activeBottomIndex = bottomLinks.findIndex((item) => isCurrentRoute(pathname, item.href));

  useEffect(() => {
    const root = document.documentElement;
    const updateVisibility = () => {
      root.dataset.documentHidden = String(document.hidden);
    };

    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    let scrollFrameId = 0;
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      scrollFrameId = 0;
    };
    const requestProgressUpdate = () => {
      if (!scrollFrameId) scrollFrameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', requestProgressUpdate, { passive: true });
    window.addEventListener('resize', requestProgressUpdate);
    return () => {
      window.removeEventListener('scroll', requestProgressUpdate);
      window.removeEventListener('resize', requestProgressUpdate);
      if (scrollFrameId) cancelAnimationFrame(scrollFrameId);
    };
  }, [pathname]);

  useEffect(() => {
    setActiveSection(sections[0]?.id ?? '');
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, {
      rootMargin: '-24% 0px -58% 0px',
      threshold: [0, 0.05, 0.2, 0.5],
    });

    sectionElements.forEach((section) => sectionObserver.observe(section));

    return () => {
      sectionObserver.disconnect();
    };
  }, [pathname, sections]);



  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-0.5 bg-slate-200/30" aria-hidden="true">
        <div ref={progressRef} className="h-full origin-left scale-x-0 bg-blue-600 will-change-transform" />
      </div>

      {sections.length > 1 && (
        <nav className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block" aria-label="Mục đang đọc">
          <div className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-2 py-3 shadow-lg shadow-slate-950/10">
            <span className="pointer-events-none absolute right-full mr-3 max-w-56 rounded-xl bg-slate-950 px-3 py-2 text-right text-xs font-bold leading-5 text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {sections.find((section) => section.id === activeSection)?.label}
            </span>
            <div className="flex flex-col gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block h-2.5 w-2.5 rounded-full transition-transform ${activeSection === section.id ? 'scale-125 bg-blue-700' : 'bg-slate-300 hover:bg-slate-500'}`}
                  aria-label={`Đi đến ${section.label}`}
                  aria-current={activeSection === section.id ? 'location' : undefined}
                />
              ))}
            </div>
          </div>
        </nav>
      )}

      <nav className="ttv-bottom-nav fixed inset-x-0 bottom-0 z-[70] border-t border-slate-200 bg-white shadow-[0_-12px_32px_-24px_rgba(15,23,42,0.65)] lg:hidden" aria-label="Điều hướng nhanh">
        <div className="relative mx-auto grid max-w-lg grid-cols-4 px-2 pb-[max(0.45rem,env(safe-area-inset-bottom))] pt-2">
          {activeBottomIndex >= 0 && (
            <span
              className="pointer-events-none absolute left-2 top-1 h-1 rounded-full bg-blue-700 transition-transform duration-300 ease-out"
              style={{ width: 'calc((100% - 1rem) / 4)', transform: `translateX(${activeBottomIndex * 100}%)` }}
              aria-hidden="true"
            />
          )}
          {bottomLinks.map((item) => {
            const active = isCurrentRoute(pathname, item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 text-xs font-bold transition-colors ${active ? 'text-blue-800' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}`}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className={`h-5 w-5 transition-transform ${active ? '-translate-y-0.5' : ''}`} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
