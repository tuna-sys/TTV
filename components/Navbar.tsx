'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Building2, 
  Users,
  ChevronRight
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { BrandMarquee } from './BrandMarquee';
import { ScrambleBrand } from './ScrambleBrand';

const navLinks = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Giải pháp doanh nghiệp', href: '/giai-phap-doanh-nghiep' },
  { label: 'Việc làm & hỗ trợ NLĐ', href: '/nguoi-lao-dong' },
  { label: 'Năng lực tuyển dụng', href: '/nang-luc-tuyen-nguon' },
  { label: 'Về Tri Thức Việt', href: '/gioi-thieu' },
  { label: 'Liên hệ', href: '/lien-he' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Notification Bar */}
      <div className="border-b border-slate-800 bg-slate-950 px-4 text-xs text-slate-300">
        <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-3">
          <div className="hidden min-w-0 items-center gap-2 sm:flex">
            <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
            <span className="font-medium text-slate-300 truncate text-[11px] sm:text-xs">
              {siteConfig.slogan}
            </span>
          </div>
          <div className="flex w-full flex-shrink-0 items-center justify-between gap-3 whitespace-nowrap text-[11px] font-semibold sm:w-auto sm:justify-end sm:gap-4 sm:text-xs">
            <Link href="/giai-phap-doanh-nghiep" className="inline-flex min-h-10 items-center text-blue-400 hover:underline">
              Dành cho Doanh Nghiệp
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/nguoi-lao-dong" className="inline-flex min-h-10 items-center text-orange-400 hover:underline">
              Dành cho Người Lao Động
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`relative z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
            : 'bg-white/90 backdrop-blur-sm py-3 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl overflow-hidden bg-white border border-slate-200/80 p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/all/logo.jpg"
                alt="Logo Tri Thức Việt"
                width={40}
                height={40}
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base xl:text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors whitespace-nowrap leading-none mb-1">
                <ScrambleBrand />
              </span>
              <span className="text-[8.5px] font-bold tracking-wider text-slate-500 uppercase whitespace-nowrap leading-none xl:hidden 2xl:block 2xl:text-[9.5px]">
                Cung Ứng Nhân Lực & Tuyển Nhân Viên
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5 text-xs font-semibold text-slate-700 2xl:gap-1 2xl:text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap px-2 xl:px-2.5 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-bold'
                      : 'hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Dual Action Buttons */}
          <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
            <Link
              href="/nguoi-lao-dong"
              className="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs 2xl:text-sm font-bold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-all active:scale-95 shadow-sm"
            >
              <Users className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
              <span>Tìm Việc</span>
            </Link>

            <Link
              href="/giai-phap-doanh-nghiep"
              className="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs 2xl:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 transition-all active:scale-95 shadow-md shadow-blue-700/20"
            >
              <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Doanh Nghiệp</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden flex min-h-11 min-w-11 flex-shrink-0 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="max-h-[calc(100dvh-6.5rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-6 pt-3 shadow-xl animate-fade-in xl:hidden">
            <nav aria-label="Điều hướng di động" className="flex flex-col space-y-1 pb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg font-semibold transition-colors flex items-center justify-between text-sm ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-bold'
                        : 'text-blue-950 hover:bg-blue-50 hover:text-blue-800'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </nav>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <Link
                href="/nguoi-lao-dong"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 text-center flex items-center justify-center gap-1.5"
              >
                <Users className="w-4 h-4 text-orange-600" />
                <span>Tìm Việc</span>
              </Link>
              <Link
                href="/giai-phap-doanh-nghiep"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 text-center flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Building2 className="w-4 h-4" />
                <span>Doanh Nghiệp</span>
              </Link>
            </div>
          </div>
        )}
      </header>
      <BrandMarquee />
    </div>
  );
};
