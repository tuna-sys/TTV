'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'Người lao động đăng ký tìm việc qua Tri Thức Việt có phải mất phí môi giới không?',
    a: 'HOÀN TOÀN KHÔNG MẤT PHÍ. Toàn bộ quá trình tư vấn, tiếp nhận hồ sơ, bố trí xe đưa đón và bàn giao vào nhà máy đều miễn phí 100% đối với người lao động. Chi phí tuyển dụng do các doanh nghiệp đối tác chi trả theo hợp đồng cung ứng hợp pháp.',
  },
  {
    q: 'Khi nộp hồ sơ xin việc, tôi có phải nộp bằng cấp hoặc căn cước công dân gốc không?',
    a: 'TUYỆT ĐỐI KHÔNG. Tri Thức Việt cam kết không giữ bất kỳ giấy tờ tùy thân gốc nào của người lao động. Ứng viên chỉ cần nộp bản photo có công chứng (hoặc xác thực qua ứng dụng VNeID). Giấy tờ gốc người lao động tự bảo quản.',
  },
  {
    q: 'Người lao động từ các tỉnh xa đến làm việc có được hỗ trợ chỗ ở và xe đưa đón không?',
    a: 'CÓ. Tùy thuộc vào từng nhà máy và chương trình tuyển dụng, Tri Thức Việt bố trí hệ thống 30 xe đưa đón công nhân từ các địa phương và sắp xếp chỗ ở tại 11 khu ký túc xá văn minh, đầy đủ tiện nghi sinh hoạt gần khu công nghiệp.',
  },
  {
    q: 'Chưa có kinh nghiệm sản xuất linh kiện điện tử thì có được ứng tuyển không?',
    a: 'ĐƯỢC ỨNG TUYỂN. Các đối tác lớn (Foxconn, Canon, Luxshare, Goertek...) đều có chương trình đào tạo hội nhập bài bản và hưởng 100% lương trong thời gian học việc. Ứng viên chỉ cần có sức khỏe tốt, chăm chỉ và sẵn sàng làm việc theo ca kíp.',
  },
  {
    q: 'Tiền lương và các chế độ bảo hiểm được chi trả như thế nào?',
    a: 'Người lao động được ký hợp đồng lao động rõ ràng, nhận lương đúng ngày qua tài khoản ngân hàng cá nhân và được đóng bảo hiểm xã hội, bảo hiểm y tế đầy đủ theo quy định của pháp luật lao động Việt Nam.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-orange-300 shadow-md ring-1 ring-orange-200'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-3">
                <HelpCircle
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    isOpen ? 'text-orange-600' : 'text-slate-400'
                  }`}
                />
                <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {faq.q}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 mt-1 ${
                  isOpen ? 'rotate-180 text-orange-600' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                <p className="pt-4">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
