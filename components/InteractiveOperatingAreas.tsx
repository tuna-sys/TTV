'use client';

import React, { useState } from 'react';
import { MapPin, MapPinned, Radio } from 'lucide-react';
import { publicRecruitmentCaseStudy } from '@/data/siteData';

export function InteractiveOperatingAreas() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const areas = publicRecruitmentCaseStudy.operatingAreas;
  const currentArea = areas[selectedIdx];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <MapPinned className="h-6 w-6 text-blue-300" aria-hidden="true" />
        <h3 className="text-xl font-black tracking-[-0.02em] text-white">
          Dấu vết vận hành theo địa bàn
        </h3>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
          3 Tỉnh / Thành phố
        </span>
      </div>

      {/* Interactive Province Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {areas.map((area, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <button
              key={area.province}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden flex items-center justify-between ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30 scale-[1.02]'
                  : 'bg-slate-900/90 text-slate-300 border-white/10 hover:border-blue-400/50 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`font-black text-xs px-2 py-1 rounded-md ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-blue-300'
                  }`}
                >
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-sm text-white">{area.province}</h4>
                  <span className="text-[11px] opacity-80 block">
                    {area.sites.length} Khu công nghiệp
                  </span>
                </div>
              </div>

              {isSelected && (
                <div className="flex items-center gap-1 text-blue-200">
                  <Radio className="w-4 h-4 animate-pulse" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Province KCN Tags Display */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Các Khu Công Nghiệp Tiếp Nhận Nhân Lực Tại {currentArea.province}:
            </span>
          </div>
          <span className="text-xs text-slate-400">
            Dữ liệu tổng hợp theo hồ sơ năm 2025
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {currentArea.sites.map((site) => (
            <div
              key={site}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/15 border border-blue-400/30 text-white text-xs sm:text-sm font-semibold hover:bg-blue-500/25 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{site}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
