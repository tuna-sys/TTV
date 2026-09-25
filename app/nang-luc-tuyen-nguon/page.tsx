import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  ShieldCheck,
  MapPin,
  Target,
  XCircle
} from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { 
  screeningCriteria,
  publicOperationalCapacity,
  publicRecruitmentEvidence
} from '../../data/siteData';
import { absoluteUrl } from '@/lib/site-url';
import { ScrambleText } from '@/components/ScrambleText';
import { SourcingInteractive } from '@/components/SourcingInteractive';

export const metadata: Metadata = {
  title: 'Năng Lực Tuyển Nhân Viên Đa Kênh | Tri Thức Việt',
  description: 'Hệ thống 8 điểm chạm tiếp cận ứng viên, quy trình Sourcing chủ động 7 bước, độ phủ liên vùng và 7 tiêu chí sàng lọc chất lượng đầu vào.',
  alternates: { canonical: '/nang-luc-tuyen-nguon' },
  openGraph: { url: absoluteUrl('/nang-luc-tuyen-nguon') },
};

export default function SourcingCapacityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main>
        {/* Page Header Banner */}
        <section id="nang-luc-sourcing" className="scroll-mt-36 relative pt-12 pb-20 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Hệ Thống Sourcing Đa Kênh Chủ Động</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  <ScrambleText text="Chủ Động Nguồn Ứng Viên – Linh Hoạt Trước Mọi Nhu Cầu Tuyển Dụng" />
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Trong tuyển dụng sản xuất số lượng lớn, thách thức không nằm ở việc đăng một bản tin tuyển dụng, mà nằm ở năng lực duy trì dòng chảy ứng viên liên tục, tiếp cận đúng nhóm lao động và chuyển hóa người quan tâm thành người sẵn sàng đi làm ổn định.
                </p>

                {/* Quick Sourcing Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                    <span className="text-base sm:text-xl font-black text-emerald-400 block">8 Điểm Chạm</span>
                    <span className="text-xs text-slate-300">Đa kênh tiếp cận</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                    <span className="text-base sm:text-xl font-black text-teal-400 block">{publicRecruitmentEvidence.annualRecruitment}</span>
                    <span className="text-xs text-slate-300">Lượt tuyển 2025</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                    <span className="text-base sm:text-xl font-black text-amber-400 block">Liên Vùng</span>
                    <span className="text-xs text-slate-300">Bắc Bộ & Trung Bộ</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <span>Hợp Tác Tuyển Nguồn Nhân Lực</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+84972998702"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 transition-all"
                  >
                    <span>Hotline Tuyển Nguồn: 0972 998 702</span>
                  </a>
                </div>
              </div>

              {/* Real Photo Fieldwork Hero */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/all/images-activities-van-phong-tri-thuc-viet.webp"
                      alt="Văn phòng tiếp đón và điều phối ứng viên Tri Thức Việt"
                      fill
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      <Target className="w-4 h-4" />
                      <span>Trung Tâm Tiếp Nhận & Điều Phối Ứng Viên</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Đội ngũ chuyên viên tư vấn tiếp nhận ứng viên liên tục, đối chiếu tiêu chuẩn tuyển dụng của nhà máy với nguyện vọng của người tìm việc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Năng Lực Vận Hành Đã Có Nguồn Xác Nhận */}
        <section id="nang-luc-ho-tro" className="scroll-mt-36 border-b border-slate-200 bg-white py-12" aria-labelledby="support-capacity-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3 text-emerald-700">
                  <ShieldCheck className="h-6 w-6" />
                  <h2 id="support-capacity-heading" className="text-2xl font-black tracking-[-0.025em] text-slate-950">
                    Năng Lực Vận Hành Đã Được Xác Nhận
                  </h2>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                  Trích xuất từ {publicOperationalCapacity.sourceLabel}, được doanh nghiệp đối tác xác nhận ngày {publicOperationalCapacity.confirmedAt}.
                </p>
              </div>
              <dl className="grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-3">
                {publicOperationalCapacity.items.map((item) => (
                  <div key={item.label} className="flex flex-col bg-slate-50 px-5 py-6">
                    <dt className="order-2 mt-2 text-sm leading-6 text-slate-600">{item.label}</dt>
                    <dd className="order-1 text-3xl font-black tabular-nums tracking-[-0.03em] text-emerald-800">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 8 Điểm Chạm & Phễu Tuyển Nguồn 7 Bước (Interactive Component) */}
        <section id="diem-cham" className="scroll-mt-36 py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SourcingInteractive />
          </div>
        </section>

        {/* Mạng Lưới Tuyển Nguồn Thực Địa Liên Vùng */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
                Hiện Diện Thực Địa
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Mạng Lưới Tuyển Nguồn Liên Vùng Miền Bắc
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Không giới hạn tại một khu vực duy nhất, Tri Thức Việt phủ rộng các điểm tiếp cận từ các tỉnh vùng cao Tây Bắc, Đông Bắc đến đồng bằng Bắc Bộ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Hà Giang */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md transition-all group">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src="/images/all/images-activities-hoat-dong-ha-giang.webp"
                    alt="Hoạt động tuyển dụng và tư vấn việc làm tại Hà Giang"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur text-white text-xs font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hà Giang & Vùng Cao</span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Nguồn Lao Động Đông Bắc & Tây Bắc
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Kết nối với thanh niên vùng cao mong muốn làm việc tại các nhà máy điện tử, hỗ trợ trọn gói từ xe đưa đón đến nơi ở ký túc xá an toàn.
                  </p>
                </div>
              </div>

              {/* Card 2: Sự kiện kết nối việc làm */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md transition-all group">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src="/images/all/images-activities-su-kien-ket-noi.webp"
                    alt="Sự kiện tư vấn và tiếp nhận hồ sơ người lao động trực tiếp"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur text-white text-xs font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tư Vấn & Tiếp Nhận Tại Chỗ</span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Ngày Hội Kết Nối Việc Làm Thực Tế
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Tổ chức các buổi gặp gỡ, tư vấn định hướng công việc và tiếp nhận hồ sơ trực tiếp tại các địa phương, hỗ trợ người lao động hiểu rõ công việc trước khi đăng ký.
                  </p>
                </div>
              </div>

              {/* Card 3: Đội Xe Điều Phối */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md transition-all group">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src="/images/all/images-activities-doi-xe.webp"
                    alt="Hệ thống 30 xe đưa đón người lao động liên tỉnh"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur text-white text-xs font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hạ Tầng 30 Xe Đưa Đón</span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Vận Chuyển Liên Vùng An Toàn
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Cầu nối vững chắc xóa bỏ rào cản khoảng cách địa lý, đưa ứng viên từ các tỉnh về thẳng trung tâm sản xuất một cách nhanh chóng và an tâm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Tiêu Chí Sàng Lọc Chất Lượng Đầu Vào */}
        <section id="sang-loc" className="scroll-mt-36 py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
                Kiểm Soát Chất Lượng
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                7 Tiêu Chí Sàng Lọc Kỹ Lưỡng Trước Khi Bàn Giao
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Giảm thiểu tối đa tình trạng bỏ việc sớm hoặc không đáp ứng được yêu cầu thao tác trong phòng sạch và dây chuyền:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {screeningCriteria.map((criterion, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 hover:border-emerald-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <span className="text-sm font-semibold leading-relaxed text-slate-800">
                    {criterion}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bảng So Sánh Giá Trị: Tự Tuyển vs Tri Thức Việt */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-2">
                Hiệu Quả Kinh Tế & Vận Hành
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                So Sánh Phương Án Tuyển Dụng
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
              <div className="grid grid-cols-12 bg-slate-900 text-white text-xs sm:text-sm font-bold py-4 px-6">
                <div className="col-span-4">Tiêu chí vận hành</div>
                <div className="col-span-4 text-slate-400">Doanh nghiệp tự tuyển lẻ</div>
                <div className="col-span-4 text-emerald-400">Giải pháp của Tri Thức Việt</div>
              </div>
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="grid grid-cols-12 py-4 px-6 items-center">
                  <div className="col-span-4 font-bold text-slate-900">Tiếp cận nguồn lao động</div>
                  <div className="col-span-4 text-slate-600 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" /> Giới hạn 1 vài kênh đăng tuyển</div>
                  <div className="col-span-4 font-bold text-emerald-700 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Ma trận 8 điểm chạm liên vùng</div>
                </div>
                <div className="grid grid-cols-12 py-4 px-6 items-center bg-slate-50/50">
                  <div className="col-span-4 font-bold text-slate-900">Thời gian bổ sung nhân sự</div>
                  <div className="col-span-4 text-slate-600 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" /> Mất 2-4 tuần tìm nguồn mới</div>
                  <div className="col-span-4 font-bold text-emerald-700 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Đáp ứng 300+ LĐ/ngày từ Data Pool</div>
                </div>
                <div className="grid grid-cols-12 py-4 px-6 items-center">
                  <div className="col-span-4 font-bold text-slate-900">Áp lực cho bộ phận HR</div>
                  <div className="col-span-4 text-slate-600 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" /> Quá tải khâu gọi điện & lọc hồ sơ</div>
                  <div className="col-span-4 font-bold text-emerald-700 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Đã qua sàng lọc 7 tiêu chí sẵn sàng</div>
                </div>
                <div className="grid grid-cols-12 py-4 px-6 items-center bg-slate-50/50">
                  <div className="col-span-4 font-bold text-slate-900">Hỗ trợ xe & Chỗ ở KTX</div>
                  <div className="col-span-4 text-slate-600 flex items-center gap-1.5"><XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" /> Doanh nghiệp tự bố trí tốn kém</div>
                  <div className="col-span-4 font-bold text-emerald-700 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Sẵn có 30 xe & 11 khu KTX vận hành</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Box */}
        <section id="lien-he-sourcing" className="scroll-mt-36 py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-emerald-500/40 max-w-3xl mx-auto space-y-6 shadow-2xl">
              <h2 className="text-xl sm:text-3xl font-black text-white">
                Cần Nguồn Lao Động Số Lượng Lớn Cho Kế Hoạch Mới?
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Hãy trao đổi bài toán nhân lực cùng Tri Thức Việt để xây dựng kế hoạch tuyển nguồn bám sát tiến độ ca kíp và sản lượng của nhà máy.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-600/30 transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Cung Ứng Nhân Lực</span>
                </Link>
                <a
                  href="tel:+84972998702"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-800 text-sm font-bold text-slate-200 border border-slate-700 hover:bg-slate-700 transition-all"
                >
                  <span>Hotline: 0972 998 702</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
