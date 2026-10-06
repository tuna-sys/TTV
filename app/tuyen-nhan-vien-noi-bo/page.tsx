import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BriefcaseBusiness,
  Cake,
  Calculator,
  CarFront,
  Clapperboard,
  ExternalLink,
  HeartHandshake,
  Megaphone,
  PhoneCall,
  Play,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ScrambleText } from '@/components/ScrambleText';
import { officialChannels } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Tuyển dụng nhân viên nội bộ | Tri Thức Việt',
  description:
    'Thông tin các nhóm vị trí nhân viên nội bộ Tri Thức Việt đang tiếp nhận liên hệ. Ứng viên gọi trực tiếp số điện thoại công ty để kiểm tra vị trí phù hợp.',
  alternates: { canonical: '/tuyen-nhan-vien-noi-bo' },
};

const internalRoles = [
  {
    name: 'Quản lý',
    desc: 'Điều hành, quản lý chi nhánh, điều phối các dự án cung ứng nhân sự và giám sát hoạt động vận hành.',
    icon: UsersRound,
    category: 'Quản trị điều hành',
    tone: 'gold',
  },
  {
    name: 'Tuyển dụng',
    desc: 'Tìm kiếm, kết nối nguồn ứng viên, tư vấn công việc phù hợp và hỗ trợ hoàn thiện hồ sơ nhận việc.',
    icon: UserRoundCheck,
    category: 'Nhân sự & Tư vấn',
    tone: 'red',
  },
  {
    name: 'Kế toán – dịch vụ',
    desc: 'Quản lý dữ liệu công - lương, hợp đồng dịch vụ, thủ tục hành chính và chế độ đãi ngộ người lao động.',
    icon: Calculator,
    category: 'Tài chính & Hành chính',
    tone: 'green',
  },
  {
    name: 'Truyền thông',
    desc: 'Quản trị kênh thông tin, truyền thông tuyển dụng đa nền tảng và phát triển hình ảnh thương hiệu.',
    icon: Megaphone,
    category: 'Marketing & PR',
    tone: 'gold',
  },
  {
    name: 'Edit (Editor)',
    desc: 'Biên tập, sản xuất video ngắn, hình ảnh tư liệu hoạt động thực tế và ấn phẩm truyền thông số.',
    icon: Clapperboard,
    category: 'Sáng tạo nội dung',
    tone: 'red',
  },
  {
    name: 'Lái xe',
    desc: 'Vận hành phương tiện đưa đón người lao động an toàn, chu đáo, quản lý bảo dưỡng đội xe công ty.',
    icon: CarFront,
    category: 'Vận tải & Điều phối',
    tone: 'green',
  },
  {
    name: 'Lễ tân',
    desc: 'Đón tiếp đối tác, người lao động đến liên hệ trực tiếp tại văn phòng trụ sở và tiếp nhận thư từ bưu phẩm.',
    icon: BriefcaseBusiness,
    category: 'Hành chính văn phòng',
    tone: 'gold',
  },
  {
    name: 'Bảo vệ',
    desc: 'Đảm bảo trật tự, an ninh khu vực văn phòng trụ sở và các điểm tập kết phương tiện đưa đón.',
    icon: ShieldCheck,
    category: 'An ninh trật tự',
    tone: 'red',
  },
  {
    name: 'Tạp vụ',
    desc: 'Chăm sóc, duy trì vệ sinh môi trường làm việc sạch sẽ, gọn gàng, chu đáo cho toàn bộ văn phòng.',
    icon: Sparkles,
    category: 'Hậu cần nội bộ',
    tone: 'green',
  },
] as const;

const toneStyles = {
  green: {
    bg: 'bg-emerald-50 text-[#065f46] group-hover:bg-[#065f46] group-hover:text-white',
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  red: {
    bg: 'bg-red-50 text-[#991b1b] group-hover:bg-[#991b1b] group-hover:text-white',
    badge: 'bg-red-50 text-red-800 border-red-200',
  },
  gold: {
    bg: 'bg-amber-50 text-amber-900 group-hover:bg-amber-600 group-hover:text-white',
    badge: 'bg-amber-50 text-amber-900 border-amber-200',
  },
} as const;

const steps = [
  {
    step: '01',
    title: 'Liên hệ & Trao đổi nguyện vọng',
    desc: 'Ứng viên gọi trực tiếp hotline công ty hoặc đến trụ sở để trao đổi về vị trí quan tâm và kinh nghiệm liên quan.',
  },
  {
    step: '02',
    title: 'Sơ vấn & Xếp lịch hẹn',
    desc: 'Bộ phận nhân sự tiếp nhận, đối chiếu tiêu chuẩn công việc và hẹn lịch phỏng vấn trực tiếp tại văn phòng.',
  },
  {
    step: '03',
    title: 'Phỏng vấn trực tiếp tại trụ sở',
    desc: 'Gặp gỡ trực tiếp người phụ trách bộ phận, thảo luận cụ thể về công việc, mức đãi ngộ, cơ chế thưởng và lộ trình gắn bó.',
  },
  {
    step: '04',
    title: 'Nhận việc & Hòa nhập đội ngũ',
    desc: 'Hoàn tất thỏa thuận làm việc, tiếp nhận trang thiết bị làm việc và tham gia đào tạo hội nhập nội bộ Tri Thức Việt.',
  },
];

export default function InternalRecruitmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main>
        {/* Banner đầu trang chuẩn hóa theo cấu trúc các trang nghiệp vụ */}
        <section id="tuyen-noi-bo" className="scroll-mt-36 relative pt-12 pb-20 bg-gradient-to-b from-amber-950 via-slate-900 to-slate-950 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                  <BriefcaseBusiness className="w-4 h-4" />
                  <span>Gia Nhập Đội Ngũ • Tuyển Dụng Nội Bộ</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  <ScrambleText text="Đồng Hành & Phát Triển Cùng Tri Thức Việt" />
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Chúng tôi chào đón những nhân sự trách nhiệm, nhiệt huyết cùng xây dựng hệ sinh thái cung ứng nhân lực và hỗ trợ người lao động uy tín. Gọi điện trực tiếp để nhận thông tin chi tiết từng vị trí.
                </p>

                {/* Thẻ chỉ số nhanh đồng bộ hero-metric-card */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="hero-metric-card p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                    <span className="text-base sm:text-xl font-black text-amber-400 block">9 Vị Trí</span>
                    <span className="text-xs text-slate-300">Đa dạng chuyên môn</span>
                  </div>
                  <div className="hero-metric-card p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                    <span className="text-base sm:text-xl font-black text-emerald-400 block">Minh Bạch</span>
                    <span className="text-xs text-slate-300">Đãi ngộ & Cơ chế</span>
                  </div>
                  <div className="hero-metric-card p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                    <span className="text-base sm:text-xl font-black text-orange-400 block">Trực Tiếp</span>
                    <span className="text-xs text-slate-300">Phỏng vấn nhanh</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={officialChannels.phones[0].href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Gọi Ứng Tuyển: {officialChannels.phones[0].display}</span>
                  </a>
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 transition-all"
                  >
                    <span>Xem Địa Chỉ Trụ Sở</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Thẻ hình ảnh phòng họp đào tạo nội bộ quy mô */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/all/tap-the-phong-hop-noi-bo.jpg"
                      alt="Buổi đào tạo và họp điều hành tập thể cán bộ nhân viên Tri Thức Việt tại phòng họp trụ sở"
                      fill
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                      <UsersRound className="w-4 h-4" />
                      <span>Không Gian Hội Nghị & Đào Tạo</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Buổi họp điều hành và đào tạo chuyên môn định kỳ của tập thể cán bộ nhân viên tại phòng hội nghị trụ sở Tri Thức Việt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Danh sách 9 vị trí nội bộ */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200" aria-labelledby="positions-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
                Nhu Cầu Nhân Sự
              </span>
              <h2 id="positions-heading" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                9 Nhóm vị trí nhân viên nội bộ
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Mỗi vị trí đóng vai trò quan trọng trong việc vận hành bộ máy cung ứng nhân lực và đồng hành cùng người lao động.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {internalRoles.map((role) => {
                const Icon = role.icon;
                const style = toneStyles[role.tone];
                return (
                  <div
                    key={role.name}
                    className="group relative rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-lg hover:border-amber-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl transition-colors ${style.bg}`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${style.badge}`}>
                        {role.category}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-amber-950">
                      {role.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {role.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">Tiếp nhận hồ sơ</span>
                      <a
                        href={officialChannels.phones[0].href}
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 group-hover:text-amber-600"
                      >
                        <span>Ứng tuyển</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Khối hình ảnh hoạt động tập thể thực tế */}
        <section className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800" aria-labelledby="team-culture-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3.5 py-1 rounded-full border border-amber-500/30">
                Đời Sống & Văn Hóa Doanh Nghiệp
              </span>
              <h2 id="team-culture-heading" className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Hình ảnh hoạt động tập thể Tri Thức Việt
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                Môi trường làm việc gắn kết, đào tạo bài bản và những khoảnh khắc đáng nhớ của toàn thể cán bộ nhân viên công ty.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {/* Hình 1: Lễ ký kết hợp tác chuyển đổi số */}
              <figure className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl transition-all hover:border-amber-500/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/all/le-ky-ket-chuyen-doi-so-hblab.jpg"
                    alt="Lễ ký kết hợp tác chuyển đổi số và công nghệ giữa Tri Thức Việt và HBLAB"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-6 bg-slate-950/90 border-t border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Hợp Tác Phát Triển & Công Nghệ</span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    Lễ ký kết hợp tác chuyển đổi số toàn diện
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Hiện đại hóa công tác điều phối nhân lực và quy trình quản trị, tạo môi trường làm việc tiên tiến, chuyên nghiệp cho đội ngũ nhân sự.
                  </p>
                </figcaption>
              </figure>

              {/* Hình 2: Đêm hội Gala Dinner */}
              <figure className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl transition-all hover:border-amber-500/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/all/images-activities-gala-dinner-15-nam.jpg"
                    alt="Tập thể cán bộ nhân viên Tri Thức Việt chụp ảnh kỷ niệm tại sự kiện Gala Dinner"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-6 bg-slate-950/90 border-t border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Đêm Hội Gala Dinner Thường Niên</span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    Tri Thức Việt – Một chặng đường gắn kết bền vững
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sự kiện vinh danh những nỗ lực, cống hiến của tập thể cán bộ nhân viên và thắt chặt tinh thần đoàn kết toàn hệ sinh thái Tri Thức Việt.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Khối video tiêu điểm hoạt động kiểu Tablet - Kỷ niệm Sinh nhật Người Sáng Lập */}
        <section className="py-14 sm:py-20 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden" aria-labelledby="video-spotlight-heading">
          {/* Luồng ánh sáng nền ambient lighting */}
          <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-orange-500/10 to-rose-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dấu Ấn Văn Hóa • Tri Ân Người Sáng Lập</span>
                </div>
                <h2 id="video-spotlight-heading" className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                  Khoảnh khắc tri ân Người Sáng Lập – Bản sắc &ldquo;Công ty là gia đình&rdquo;
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  Thước phim ghi lại trọn vẹn tình cảm, sự kính trọng và tinh thần gắn kết của toàn thể cán bộ nhân viên trong ngày kỷ niệm sinh nhật Người Sáng Lập Tri Thức Việt. Nơi đây, mỗi thành viên không chỉ làm việc mà còn cùng sẻ chia một mái nhà chung ấm áp và bền vững.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/25 shadow-sm hover:border-amber-500/40 transition-colors">
                    <span className="text-xs text-amber-400 font-bold block mb-1">Văn hóa Dẫn dắt</span>
                    <span className="text-xs text-slate-300">Tâm huyết &amp; tầm nhìn người thuyền trưởng</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm hover:border-rose-500/30 transition-colors">
                    <span className="text-xs text-rose-400 font-bold block mb-1">Tập thể Gắn kết</span>
                    <span className="text-xs text-slate-300">Đoàn kết, tôn trọng &amp; coi nhau như gia đình</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href="https://www.facebook.com/reel/3375997649238880/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>Xem video trên Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-800" />
                  </a>
                </div>
              </div>

              {/* Khung mô phỏng Tablet hiển thị video với hiệu ứng hào quang vàng kim */}
              <div className="lg:col-span-7 flex flex-col items-center">
                {/* Floating pill badge trên đầu Tablet */}
                <div className="mb-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/30 text-amber-300 text-xs font-semibold shadow-lg shadow-black/40 backdrop-blur-md">
                  <Cake className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span>Kỷ niệm Sinh nhật Người Sáng Lập Tri Thức Việt</span>
                </div>

                <div className="relative w-full max-w-xl group">
                  {/* Lớp hào quang Ambient Gold/Rose Glow mềm mại */}
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-500/25 via-orange-500/20 to-rose-500/20 rounded-[3rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                  <div className="relative w-full rounded-[2.5rem] border-[10px] sm:border-[12px] border-slate-800 bg-slate-900 p-2 sm:p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-amber-500/30">
                    {/* Cảm biến camera tablet */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">
                      <div className="w-2 h-2 rounded-full bg-slate-700 ring-1 ring-slate-600/50"></div>
                    </div>

                    {/* Màn hình Tablet tỷ lệ 4:3 chuẩn iPad */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] bg-black flex items-center justify-center">
                      <iframe
                        src="https://www.facebook.com/plugins/video.php?height=500&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3375997649238880%2F&show_text=false&width=600&t=0"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        title="Video kỷ niệm sinh nhật Người Sáng Lập Tri Thức Việt trên Facebook"
                        className="w-full h-full"
                      />
                    </div>

                    {/* Thanh điều hướng Home bar đáy tablet */}
                    <div className="mt-1.5 flex justify-center">
                      <div className="w-28 h-1 rounded-full bg-slate-700/80"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quy trình ứng tuyển 4 bước */}
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200" aria-labelledby="steps-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
                Minh Bạch & Rõ Ràng
              </span>
              <h2 id="steps-heading" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Quy trình ứng tuyển 4 bước
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Quy trình phỏng vấn và trao đổi trực tiếp, tạo điều kiện thuận lợi nhất cho ứng viên.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step} className="relative rounded-2xl bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-black text-amber-500 font-mono block mb-3">
                      {item.step}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Khối liên hệ cuối trang */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-amber-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 shadow-xl grid lg:grid-cols-12 gap-8 items-center border border-slate-800">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Bạn Quan Tâm Vị Trí Nào?
                </span>
                <h2 className="text-2xl sm:text-3xl font-black">
                  Hãy liên hệ trực tiếp với bộ phận phụ trách
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  Để kiểm tra tình trạng tiếp nhận thực tế và yêu cầu cụ thể tại thời điểm ứng tuyển, vui lòng gọi điện hoặc ghé văn phòng trụ sở Tri Thức Việt.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                {officialChannels.phones.map((phone, idx) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      idx === 0
                        ? 'bg-amber-400 hover:bg-amber-300 text-amber-950 shadow-md'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                    }`}
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Gọi {phone.display}</span>
                  </a>
                ))}
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-white/10 text-white font-semibold text-xs border border-white/20 transition-all text-center"
                >
                  <span>Xem hướng dẫn chỉ đường</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
