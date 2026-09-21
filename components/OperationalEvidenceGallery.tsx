import { BedDouble, BusFront, UsersRound } from 'lucide-react';
import Image from 'next/image';
import { publicOperationalCapacity } from '@/data/siteData';

const [transportCapacity, accommodationCapacity, accommodationPlaces] = publicOperationalCapacity.items;

export const OperationalEvidenceGallery = () => (
  <div id="operational-evidence-gallery" className="scroll-mt-24 border-t border-white/10 py-10">
    <div className="max-w-3xl">
      <h3 className="text-2xl font-black tracking-[-0.025em] text-white">Quy mô vận hành qua hình ảnh thực tế</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">
        Ảnh tư liệu do doanh nghiệp cung cấp, đặt cạnh đúng nhóm năng lực được công bố trong hồ sơ.
      </p>
    </div>

    <div className="mt-7 grid gap-4 md:grid-cols-[1.12fr_0.88fr]">
      <figure className="group relative min-h-[30rem] overflow-hidden rounded-2xl bg-slate-900 sm:min-h-[36rem] md:min-h-0">
        <Image
          alt="Hoạt động điều phối người lao động của Tri Thức Việt dịp Tết 2025"
          className="object-cover"
          fill
          sizes="(min-width: 768px) 56vw, 100vw"
          src="/images/evidence/hoat-dong-tet-2025-dieu-phoi-sharp.png"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-5 pb-6 pt-24 sm:px-7 sm:pb-8">
          <UsersRound className="h-6 w-6 text-blue-300" aria-hidden="true" />
          <figcaption className="mt-4 max-w-xl">
            <span className="block text-xl font-black text-white">Điều phối người lao động thực tế</span>
            <span className="mt-2 block text-sm leading-6 text-slate-300">
              Ảnh hoạt động đưa đón dịp Tết 2025, được trình bày như bằng chứng hình ảnh về hoạt động điều phối.
            </span>
          </figcaption>
        </div>
      </figure>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
        <figure className="relative min-h-80 overflow-hidden rounded-2xl bg-slate-900">
          <Image
            alt="Đội xe đưa đón mang nhận diện Tri Thức Việt"
            className="object-cover"
            fill
            sizes="(min-width: 768px) 44vw, (min-width: 640px) 50vw, 100vw"
            src="/images/evidence/hoat-dong-tet-2025-doi-xe-sharp.png"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-5 pb-5 pt-20">
            <BusFront className="h-5 w-5 text-blue-300" aria-hidden="true" />
            <figcaption className="mt-3 text-sm font-black text-white">Hệ thống xe đưa đón</figcaption>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              <strong className="text-2xl font-black tabular-nums text-white">{transportCapacity.value}</strong>{' '}
              {transportCapacity.label}
            </p>
          </div>
        </figure>

        <figure className="relative min-h-80 overflow-hidden rounded-2xl bg-slate-900">
          <Image
            alt="Khu nhà ở cao tầng và xe đưa đón trong tư liệu quy mô của Tri Thức Việt"
            className="object-cover"
            fill
            sizes="(min-width: 768px) 44vw, (min-width: 640px) 50vw, 100vw"
            src="/images/evidence/quy-mo-ky-tuc-xa-sharp.png"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-5 pb-5 pt-20">
            <BedDouble className="h-5 w-5 text-blue-300" aria-hidden="true" />
            <figcaption className="mt-3 text-sm font-black text-white">Hạ tầng hỗ trợ chỗ ở</figcaption>
            <div className="mt-3 grid grid-cols-2 gap-4 border-t border-white/15 pt-4">
              <p className="text-xs leading-5 text-slate-300">
                <strong className="block text-2xl font-black tabular-nums text-white">{accommodationCapacity.value}</strong>
                {accommodationCapacity.label}
              </p>
              <p className="text-xs leading-5 text-slate-300">
                <strong className="block text-2xl font-black tabular-nums text-white">{accommodationPlaces.value}</strong>
                {accommodationPlaces.label}
              </p>
            </div>
          </div>
        </figure>
      </div>
    </div>

    <p className="mt-4 text-xs leading-6 text-slate-400">
      Nguồn ảnh: hồ sơ quy mô doanh nghiệp và tư liệu hoạt động năm 2025–2026. Khả năng bố trí thực tế phụ thuộc từng chương trình, khu vực và thời điểm.
    </p>
  </div>
);
