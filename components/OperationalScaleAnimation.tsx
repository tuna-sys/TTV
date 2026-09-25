import Image from 'next/image';
import { BedDouble, Building2, BusFront } from 'lucide-react';
import { publicOperationalCapacity } from '@/data/siteData';

const [transport, dormitories, accommodation] = publicOperationalCapacity.items;

const stations = [
  {
    value: dormitories.value,
    label: 'khu ký túc xá',
    detail: 'Điểm ở tập trung trong hệ thống hỗ trợ',
    image: '/images/all/quy-mo-ky-tuc-xa.png',
    imageAlt: 'Tòa nhà trong tư liệu quy mô doanh nghiệp Tri Thức Việt',
    icon: Building2,
  },
  {
    value: transport.value,
    label: 'xe đưa đón',
    detail: 'Kết nối nơi ở với khu vực làm việc',
    image: '/images/all/quy-mo-xe-dua-don.png',
    imageAlt: 'Xe đưa đón trước khu ký túc xá trong tư liệu quy mô doanh nghiệp',
    icon: BusFront,
  },
  {
    value: accommodation.value,
    label: 'chỗ ở',
    detail: 'Sức chứa theo quy mô doanh nghiệp công bố',
    supportingFacts: ['90.000 Lao động/năm', '140 Nhân viên'],
    image: '/images/all/quy-mo-doi-ngu.png',
    imageAlt: 'Ảnh tập thể trong tư liệu quy mô doanh nghiệp Tri Thức Việt',
    icon: BedDouble,
  },
];

export function OperationalScaleAnimation() {
  return (
    <div
      className="operational-scale relative overflow-hidden rounded-2xl bg-slate-900 px-5 py-7 text-white sm:px-8 sm:py-9"
      aria-label="Mô hình liên kết hạ tầng hỗ trợ người lao động"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="operational-scale-glow absolute left-[8%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="operational-scale-glow operational-scale-glow-delayed absolute right-[8%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative">
        <h3 className="text-balance text-xl font-black tracking-[-0.025em] sm:text-2xl">
          Một hệ thống hỗ trợ, ba năng lực kết nối
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100">
          Hạ tầng lưu trú và phương tiện được đặt trong cùng một luồng hỗ trợ người lao động.
        </p>

        <div className="relative mt-7 grid gap-4 sm:grid-cols-3 sm:gap-6">
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[17rem] w-full overflow-visible sm:block"
            viewBox="0 0 1000 272"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M 166 204 L 500 268 L 834 204" fill="none" stroke="rgb(191 219 254 / 0.24)" strokeWidth="2" />
            <path className="operational-flow-path" d="M 166 204 L 500 268 L 834 204" fill="none" stroke="#bfdbfe" strokeLinecap="round" strokeWidth="3" />
          </svg>

          {stations.map((station, index) => {
            const Icon = station.icon;
            return (
              <div
                key={station.label}
                className={`relative min-w-0 text-center ${
                  index === 1
                    ? 'ml-5 sm:ml-0 sm:pt-16'
                    : index === 2
                      ? 'mr-5 sm:mr-0'
                      : 'mr-5 sm:mr-0'
                }`}
              >
                <figure className="group relative h-40 overflow-hidden rounded-2xl bg-slate-800">
                  <Image
                    src={station.image}
                    alt={station.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 30vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </figure>
                <div className="relative z-10 mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-950/30 ring-1 ring-blue-300/30">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="mt-4 text-3xl font-black tabular-nums tracking-[-0.035em] text-white">
                  {station.value}
                </p>
                <p className="mt-1 text-sm font-bold text-blue-200">{station.label}</p>
                <p className="mx-auto mt-2 max-w-[14rem] text-xs leading-5 text-slate-300">{station.detail}</p>
                {'supportingFacts' in station && station.supportingFacts ? (
                  <p className="mx-auto mt-2 max-w-[14rem] text-xs font-bold leading-5 text-blue-100">
                    {station.supportingFacts.map((fact) => (
                      <span key={fact} className="block">{fact}</span>
                    ))}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
