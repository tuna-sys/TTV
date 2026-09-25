'use client';

import React, { useState } from 'react';
import {
  Globe,
  MapPin,
  Share2,
  Video,
  Database,
  Store,
  Users2,
  Building,
  Compass,
  Filter
} from 'lucide-react';

interface Touchpoint {
  id: string;
  title: string;
  desc: string;
  scope: string;
  icon: React.ElementType;
}

const digitalTouchpoints: Touchpoint[] = [
  {
    id: 'D1',
    title: 'Hệ thống Website & Nền tảng tuyển dụng',
    desc: 'Cổng thông tin việc làm trực tuyến cập nhật thông số tuyển dụng từng ca kíp, giúp ứng viên dễ dàng tra cứu và nộp thông tin 24/7.',
    scope: 'Toàn quốc & Liên vùng',
    icon: Globe,
  },
  {
    id: 'D2',
    title: 'Facebook & Các kênh mạng xã hội chuyên biệt',
    desc: 'Hệ thống Fanpage, hội nhóm việc làm khu công nghiệp với hàng trăm nghìn thành viên tích cực trao đổi thông tin mỗi ngày.',
    scope: 'Ứng viên trẻ & Khối lao động phổ thông',
    icon: Share2,
  },
  {
    id: 'D3',
    title: 'Nội dung ngắn, Video & Livestream tư vấn',
    desc: 'Sản xuất video quay cận cảnh môi trường làm việc, khu ký túc xá, suất ăn và phỏng vấn công nhân thực tế để tạo sự tin tưởng tuyệt đối.',
    scope: 'Trực quan & Minh bạch thực tế',
    icon: Video,
  },
  {
    id: 'D4',
    title: 'Ngân hàng dữ liệu ứng viên sẵn có (Data Pool)',
    desc: 'Lưu trữ thông tin hàng chục nghìn lao động từng làm việc hoặc đăng ký, sẵn sàng tái liên hệ khi doanh nghiệp cần bổ sung gấp.',
    scope: 'Đáp ứng nhu cầu tuyển dụng khẩn cấp',
    icon: Database,
  },
];

const fieldworkTouchpoints: Touchpoint[] = [
  {
    id: 'F1',
    title: 'Điểm tiếp nhận trực tiếp tại cửa ngõ KCN',
    desc: 'Văn phòng tuyển dụng cố định tại các khu công nghiệp trọng điểm (Quế Võ, VSIP, Quang Châu, Vân Trung...) tiếp đón lao động mỗi ngày.',
    scope: 'Bắc Ninh, Bắc Giang, Hà Nội',
    icon: Store,
  },
  {
    id: 'F2',
    title: 'Mạng lưới cộng tác viên (CTV) địa phương',
    desc: 'Mạng lưới đầu mối uy tín tại các xã, huyện thuộc các tỉnh trung du và miền núi, giúp truyền đạt thông tin chính xác tới từng hộ gia đình.',
    scope: 'Hà Giang, Hòa Bình, Phú Thọ, Lạng Sơn...',
    icon: Users2,
  },
  {
    id: 'F3',
    title: 'Kết nối các cộng đồng lao động & Trường nghề',
    desc: 'Hợp tác định hướng nghề nghiệp, tiếp nhận lao động thời vụ và học viên mong muốn có việc làm ngay sau khi hoàn thành khóa học.',
    scope: 'Khối trường nghề & Hội nghề nghiệp',
    icon: Building,
  },
  {
    id: 'F4',
    title: 'Chương trình tuyển dụng thực địa lưu động',
    desc: 'Đội ngũ tuyển dụng cơ động đến tận các thôn bản vùng sâu, vùng xa để tổ chức ngày hội việc làm và xe đón tập trung về nhà máy.',
    scope: 'Khu vực có tỷ lệ thiếu việc làm cao',
    icon: Compass,
  },
];

const funnelStages = [
  {
    stage: 'Giai Đoạn 1',
    name: 'Tiếp Cận & Tư Vấn Nguồn',
    badge: 'Độ Phủ Rộng',
    steps: [
      { num: '01', title: 'Tiếp Cận Đa Kênh', desc: 'Chạm đến nhóm lao động mục tiêu qua cả kênh số và thực địa.' },
      { num: '02', title: 'Tư Vấn Rõ Ràng', desc: 'Làm rõ yêu cầu công việc, chế độ ca kíp, thu nhập và điều kiện ăn ở.' },
    ],
  },
  {
    stage: 'Giai Đoạn 2',
    name: 'Sàng Lọc & Chuẩn Bị Hồ Sơ',
    badge: 'Kiểm Soát Chất Lượng',
    steps: [
      { num: '03', title: 'Sàng Lọc Đầu Vào', desc: 'Đánh giá độ tuổi, sức khỏe, thị lực và thái độ làm việc theo tiêu chuẩn nhà máy.' },
      { num: '04', title: 'Xác Nhận Nhu Cầu Thật', desc: 'Đảm bảo ứng viên có khả năng đi làm ngay và sẵn sàng làm việc theo ca kíp.' },
      { num: '05', title: 'Hướng Dẫn Hồ Sơ', desc: 'Hỗ trợ hoàn thiện hồ sơ photo công chứng nhanh gọn, đúng quy định.' },
    ],
  },
  {
    stage: 'Giai Đoạn 3',
    name: 'Bố Trí & Đồng Hành Duy Trì',
    badge: 'Ổn Định Sản Xuất',
    steps: [
      { num: '06', title: 'Bố Trí Công Việc', desc: 'Điều phối xe đưa đón đến cổng nhà máy, bàn giao nhân sự tận tay cho HR.' },
      { num: '07', title: 'Theo Dõi Sau Nhận Việc', desc: 'Hỗ trợ thích nghi chỗ ở, lắng nghe phản hồi giúp người lao động gắn bó dài lâu.' },
    ],
  },
];

export function SourcingInteractive() {
  const [activeTab, setActiveTab] = useState<'digital' | 'fieldwork'>('digital');
  const [activeStage, setActiveStage] = useState(0);

  const currentTouchpoints = activeTab === 'digital' ? digitalTouchpoints : fieldworkTouchpoints;

  return (
    <div className="space-y-16">
      {/* 8 Touchpoints Tab Switcher */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
              Hệ Thống 8 Điểm Chạm
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Ma Trận Tiếp Cận Ứng Viên Đa Kênh
            </h3>
          </div>

          {/* Switcher Buttons */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300">
            <button
              type="button"
              onClick={() => setActiveTab('digital')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'digital'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-emerald-700'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Kênh Số (Digital - 4 Điểm)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('fieldwork')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'fieldwork'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-emerald-700'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Thực Địa (Fieldwork - 4 Điểm)</span>
            </button>
          </div>
        </div>

        {/* Touchpoints Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentTouchpoints.map((tp) => {
            const Icon = tp.icon;
            return (
              <div
                key={tp.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {tp.scope}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{tp.title}</h4>
                  <p className="text-sm leading-6 text-slate-600">{tp.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sourcing Funnel Timeline */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
            Quy Trình Tuyển Nguồn Chủ Động
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Phễu Tuyển Dụng & Sàng Lọc 3 Giai Đoạn (7 Bước)
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Kiểm soát chặt chẽ từng chặng giúp chuyển hóa ứng viên tiếp cận thành lực lượng lao động ổn định
          </p>
        </div>

        {/* Stages Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {funnelStages.map((stage, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={stage.stage}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/25 scale-[1.02]'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-emerald-300'
                }`}
              >
                <span
                  className={`text-xs font-black px-2 py-0.5 rounded-md inline-block mb-2 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {stage.stage}
                </span>
                <h4 className="text-base font-bold mb-1">{stage.name}</h4>
                <span
                  className={`text-xs font-semibold ${
                    isActive ? 'text-emerald-100' : 'text-slate-500'
                  }`}
                >
                  Mục tiêu: {stage.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Steps */}
        <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/60">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-emerald-700" />
            <span className="text-sm font-bold text-emerald-900">
              Chi tiết các bước trong {funnelStages[activeStage].stage}:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {funnelStages[activeStage].steps.map((st) => (
              <div
                key={st.num}
                className="p-4 rounded-xl bg-white border border-emerald-100 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center">
                    {st.num}
                  </span>
                  <h5 className="text-sm font-bold text-slate-900">{st.title}</h5>
                </div>
                <p className="text-xs leading-5 text-slate-600">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
