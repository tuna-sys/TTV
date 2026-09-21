'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { legalEntity, siteConfig, threePrinciples } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="min-w-0 space-y-4 lg:col-span-1">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-800 p-0.5 shadow-md flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Logo Tri Thức Việt"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 pt-0.5">
                <h4 className="text-base font-black text-white whitespace-nowrap">
                  TRI THỨC VIỆT
                </h4>
                <p className="mt-0.5 text-xs font-medium uppercase leading-5 tracking-wider text-slate-400">
                  Cung Ứng Nhân Lực & Tuyển Nhân Viên
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              {siteConfig.slogan}
            </p>
          </div>

          {/* Nav Col: Khối Doanh Nghiệp */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Dành Cho Doanh Nghiệp
            </h5>
            <ul className="space-y-2 text-sm leading-6">
              <li>
                <Link href="/giai-phap-doanh-nghiep" className="hover:text-blue-400 transition-colors">
                  Giải Pháp Cung Ứng FDI
                </Link>
              </li>
              <li>
                <Link href="/giai-phap-doanh-nghiep" className="hover:text-blue-400 transition-colors">
                  Quy Trình Cung Ứng 6 Bước
                </Link>
              </li>
              <li>
                <Link href="/nang-luc-tuyen-nguon" className="hover:text-blue-400 transition-colors">
                  Hệ Thống Sourcing Đa Kênh
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-blue-400 transition-colors">
                  Trao Đổi Nhu Cầu Tuyển Dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Col: Khối Người Lao Động */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Dành Cho Người Lao Động
            </h5>
            <ul className="space-y-2 text-sm leading-6">
              <li>
                <Link href="/nguoi-lao-dong" className="hover:text-orange-400 transition-colors">
                  Hành Trình Tìm Việc An Tâm
                </Link>
              </li>
              <li>
                <Link href="/nguoi-lao-dong" className="hover:text-orange-400 transition-colors">
                  Hỗ Trợ Đi Lại & Chỗ Ở
                </Link>
              </li>
              <li>
                <Link href="/nguoi-lao-dong" className="hover:text-orange-400 transition-colors">
                  Điều Kiện Hỗ Trợ Người Lao Động
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-orange-400 transition-colors">
                  Đăng Ký Tìm Việc Phù Hợp
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Col: Về Chúng Tôi */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Về Tri Thức Việt
            </h5>
            <ul className="space-y-2 text-sm leading-6">
              <li>
                <Link href="/gioi-thieu" className="hover:text-emerald-400 transition-colors">
                  Tầm Nhìn & Tôn Chỉ Hoạt Động
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="hover:text-emerald-400 transition-colors">
                  3 Nguyên Tắc Cốt Lõi
                </Link>
              </li>
              <li>
                <Link href="/nang-luc-tuyen-nguon" className="hover:text-emerald-400 transition-colors">
                  Quy Trình Tuyển Nhân Viên
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-emerald-400 transition-colors">
                  Thông Tin Liên Hệ Chính Thức
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Principles Badge Row */}
        <div className="py-6 border-y border-slate-800/80 my-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          {threePrinciples.map((p, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="mb-0.5 block text-xs font-bold uppercase text-white">
                {p.title}
              </span>
              <p className="text-xs leading-normal text-slate-400">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-6 border-b border-slate-800/80 pb-6 text-xs leading-6 text-slate-400">
          <strong className="block text-slate-200">{legalEntity.legalName}</strong>
          <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
            <a href={legalEntity.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-slate-600 underline-offset-4 hover:text-white">Mã số thuế: {legalEntity.taxId} (tra cứu)</a>
            <span>Đại diện pháp luật: {legalEntity.legalRepresentative}</span>
            <span>Địa chỉ đăng ký: {legalEntity.registeredAddress}</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <div>
            © 2026 <strong>Tri Thức Việt</strong>. Bảo lưu mọi quyền.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
            <Link href="/gioi-thieu" className="underline-offset-4 hover:text-white hover:underline">Hồ sơ doanh nghiệp</Link>
            <Link href="/chinh-sach-bao-ve-du-lieu-ca-nhan" className="underline-offset-4 hover:text-white hover:underline">Chính sách dữ liệu</Link>
            <span>{siteConfig.slogan}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
