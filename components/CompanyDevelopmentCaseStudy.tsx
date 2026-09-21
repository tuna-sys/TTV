import { Building2, BusFront, Handshake, Smartphone } from 'lucide-react';

const developmentPhases = [
  {
    period: '2009',
    title: 'Khởi đầu doanh nghiệp',
    description: 'Mốc hình thành được ghi nhận trong tư liệu doanh nghiệp cung cấp.',
    icon: Building2,
    milestones: ['2009 · Thành lập'],
  },
  {
    period: '2014–2017',
    title: 'Mở rộng hợp tác',
    description: 'Các mốc hợp tác và hoàn thiện điều kiện hoạt động được liệt kê theo tư liệu doanh nghiệp.',
    icon: Handshake,
    milestones: [
      '2014 · Hợp tác Tập đoàn KHKT Hồng Hải',
      '2015 · Hợp tác Tập đoàn Canon',
      '2016 · Hợp tác Luxshare, Goertek',
      '2017 · Bộ cấp phép',
    ],
  },
  {
    period: '2018–2023',
    title: 'Hỗ trợ và số hoá vận hành',
    description: 'Đầu tư xe, ký túc xá và các ứng dụng được ghi theo các mốc thời gian trong tư liệu.',
    icon: Smartphone,
    milestones: [
      '2018 · Đầu tư xe và ký túc xá',
      '2019 · Ứng dụng check công, lương trên điện thoại',
      '2019 · Ứng dụng việc làm trên mobile',
      '2020, 2023 · Đầu tư thêm xe và ký túc xá',
    ],
  },
  {
    period: '2024–2025',
    title: 'Củng cố hạ tầng hỗ trợ',
    description: 'Mốc đầu tư văn phòng, xe và ký túc xá; số liệu năm 2025 khớp với năng lực đang công bố.',
    icon: BusFront,
    milestones: [
      '2024 · Xây văn phòng; đầu tư xe và ký túc xá',
      '2025 · 11 khu ký túc xá, 30 xe đưa đón',
    ],
  },
];

export const CompanyDevelopmentCaseStudy = () => (
  <section className="border-y border-slate-200 bg-white" aria-labelledby="development-case-study-heading">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <h2 id="development-case-study-heading" className="text-3xl font-black tracking-[-0.03em] text-slate-950">Case study: từ hợp tác đến hạ tầng hỗ trợ</h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-600">
          Dòng thời gian nhóm các mốc phát triển để làm rõ hướng đầu tư vận hành. Đây không phải là đánh giá hiệu quả; các mốc được trình bày theo tư liệu doanh nghiệp cung cấp.
        </p>
      </div>

      <ol className="mt-10 grid gap-x-8 gap-y-12 lg:grid-cols-4">
        {developmentPhases.map((phase) => {
          const Icon = phase.icon;
          return (
            <li key={phase.period} className="relative border-t border-slate-200 pt-6">
              <span className="absolute -top-1.5 left-0 h-3 w-3 rounded-full bg-blue-700 ring-4 ring-white" aria-hidden="true" />
              <div className="flex items-center gap-3 text-blue-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
                <time className="text-sm font-black tabular-nums">{phase.period}</time>
              </div>
              <h3 className="mt-4 text-xl font-black tracking-[-0.02em] text-slate-950">{phase.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{phase.description}</p>
              <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-700">
                {phase.milestones.map((milestone) => <li key={milestone}>{milestone}</li>)}
              </ul>
            </li>
          );
        })}
      </ol>

      <p className="mt-10 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
        Nguồn: timeline do doanh nghiệp cung cấp. Mốc 2025 về 11 khu ký túc xá và 30 xe đưa đón được đối chiếu với hồ sơ năng lực doanh nghiệp công bố năm 2026; các mốc còn lại cần hồ sơ nguồn tương ứng khi dùng làm căn cứ chính thức.
      </p>
    </div>
  </section>
);
