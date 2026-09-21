import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Clock3, Eye, Mail, ShieldCheck, Users } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { legalEntity, siteConfig } from '@/data/siteData';
import { PRIVACY_POLICY_EFFECTIVE_DATE, PRIVACY_POLICY_VERSION } from '@/lib/privacy-policy';
import { absoluteUrl } from '@/lib/site-url';

const isApproved = process.env.PRIVACY_POLICY_STATUS === 'approved';

export const metadata: Metadata = {
  title: 'Chính sách bảo vệ dữ liệu cá nhân | Tri Thức Việt',
  description: 'Thông báo về dữ liệu khi truy cập website tĩnh Tri Thức Việt và cách liên hệ để được hướng dẫn.',
  alternates: { canonical: '/chinh-sach-bao-ve-du-lieu-ca-nhan' },
  openGraph: {
    title: 'Chính sách bảo vệ dữ liệu cá nhân | Tri Thức Việt',
    description: 'Cách Tri Thức Việt công bố thông tin và hướng dẫn liên hệ qua các kênh chính thức.',
    url: absoluteUrl('/chinh-sach-bao-ve-du-lieu-ca-nhan'),
  },
  robots: { index: isApproved, follow: isApproved },
};

const dataGroups = [
  {
    subject: 'Thông tin công khai',
    data: 'Nội dung giới thiệu doanh nghiệp, địa chỉ liên hệ, hình ảnh và liên kết đến các kênh chính thức.',
    purpose: 'Giúp doanh nghiệp và người lao động tìm hiểu Tri Thức Việt trước khi liên hệ.',
  },
  {
    subject: 'Thông tin bạn chủ động gửi',
    data: 'Nếu bạn tự gửi thông tin qua email, điện thoại hoặc Facebook, nội dung đó được gửi đến kênh bên ngoài website.',
    purpose: 'Tri Thức Việt và nhà cung cấp kênh liên hệ xử lý theo thông báo, thỏa thuận và quy định áp dụng.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
              <ArrowLeft className="h-4 w-4" /> Trở về website
            </Link>
            <div className="mt-8 max-w-4xl">
              <h1 className="text-3xl font-black tracking-[-0.03em] sm:text-5xl">Chính sách bảo vệ dữ liệu cá nhân</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                Website này là bản tĩnh, không có tài khoản, biểu mẫu đăng ký, API tiếp nhận hoặc kho hồ sơ trực tuyến. Tài liệu này hướng dẫn cách xử lý thông tin khi bạn chủ động liên hệ qua các kênh chính thức.
              </p>
            </div>
            <dl className="mt-9 grid max-w-3xl gap-4 text-sm sm:grid-cols-2">
              <div><dt className="text-slate-400">Phiên bản</dt><dd className="mt-1 font-bold text-white">{PRIVACY_POLICY_VERSION}</dd></div>
              <div><dt className="text-slate-400">Ngày hiệu lực</dt><dd className="mt-1 font-bold text-white">{PRIVACY_POLICY_EFFECTIVE_DATE}</dd></div>
            </dl>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {!isApproved && (
            <aside className="rounded-2xl bg-amber-50 p-5 text-sm leading-6 text-amber-950" role="status">
              <strong className="block text-base">Bản dự thảo kỹ thuật – chưa có hiệu lực production</strong>
              Nội dung cần được doanh nghiệp hoặc chuyên gia pháp lý có thẩm quyền xác nhận trước khi được dùng làm chính sách chính thức cho các hoạt động tiếp nhận thông tin.
            </aside>
          )}

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-8" aria-labelledby="controller-heading">
            <h2 id="controller-heading" className="text-xl font-black tracking-[-0.02em]">Đơn vị tiếp nhận và xử lý dữ liệu</h2>
            <dl className="mt-5 grid gap-5 text-sm sm:grid-cols-2">
              <div><dt className="font-bold text-slate-950">Pháp nhân</dt><dd className="mt-1 leading-6 text-slate-600">{legalEntity.legalName}</dd></div>
              <div><dt className="font-bold text-slate-950">Mã số thuế</dt><dd className="mt-1 leading-6 text-slate-600"><a href={legalEntity.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900">{legalEntity.taxId} · Tra cứu hồ sơ công khai</a></dd></div>
              <div><dt className="font-bold text-slate-950">Địa chỉ đăng ký</dt><dd className="mt-1 leading-6 text-slate-600">{legalEntity.registeredAddress}</dd></div>
              <div><dt className="font-bold text-slate-950">Kênh tiếp nhận yêu cầu</dt><dd className="mt-1 leading-6 text-slate-600">{siteConfig.email} · {legalEntity.phone}</dd></div>
            </dl>
          </section>

          <section className="mt-12" aria-labelledby="data-purpose-heading">
            <h2 id="data-purpose-heading" className="text-2xl font-black tracking-[-0.025em] sm:text-3xl">Dữ liệu và mục đích xử lý</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">Website không có chức năng nhập, lưu hoặc tra cứu hồ sơ cá nhân trực tuyến.</p>
            <div className="mt-7 overflow-hidden rounded-2xl bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
              <div className="hidden grid-cols-[0.7fr_1.1fr_1.4fr] gap-5 bg-slate-900 px-6 py-4 text-sm font-bold text-white md:grid">
                <span>Nhóm người gửi</span><span>Dữ liệu</span><span>Mục đích</span>
              </div>
              {dataGroups.map((group) => (
                <article key={group.subject} className="grid gap-4 border-b border-slate-100 px-6 py-6 last:border-b-0 md:grid-cols-[0.7fr_1.1fr_1.4fr] md:gap-5">
                  <h3 className="font-bold text-slate-950">{group.subject}</h3>
                  <p className="text-sm leading-6 text-slate-600">{group.data}</p>
                  <p className="text-sm leading-6 text-slate-600">{group.purpose}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">
            <article>
              <div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-blue-700" /><h2 className="text-xl font-black">Căn cứ và phạm vi sử dụng</h2></div>
              <p className="mt-4 text-sm leading-7 text-slate-600">Website chỉ cung cấp nội dung công khai và liên kết ra các kênh liên hệ. Khi bạn chủ động gửi thông tin qua một kênh bên ngoài, hãy kiểm tra thông báo quyền riêng tư và đầu mối tiếp nhận của kênh đó trước khi cung cấp dữ liệu.</p>
            </article>
            <article>
              <div className="flex items-center gap-3"><Eye className="h-6 w-6 text-blue-700" /><h2 className="text-xl font-black">Kênh tiếp nhận bên ngoài</h2></div>
              <p className="mt-4 text-sm leading-7 text-slate-600">Email, điện thoại, Facebook và Google Maps là các kênh liên hệ được website dẫn đến. Website không kiểm soát chính sách lưu trữ, quyền truy cập hoặc thời hạn lưu của các dịch vụ bên ngoài này.</p>
            </article>
            <article>
              <div className="flex items-center gap-3"><Users className="h-6 w-6 text-blue-700" /><h2 className="text-xl font-black">Không có kho hồ sơ trên website</h2></div>
              <p className="mt-4 text-sm leading-7 text-slate-600">Bản phát hành này không có trang quản trị, biểu mẫu gửi hồ sơ hoặc cơ sở dữ liệu công khai. Không gửi ảnh giấy tờ tùy thân và thông tin nhạy cảm qua liên kết chưa được xác minh.</p>
            </article>
            <article>
              <div className="flex items-center gap-3"><Clock3 className="h-6 w-6 text-blue-700" /><h2 className="text-xl font-black">Thời gian lưu trữ</h2></div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Website không lưu hồ sơ biểu mẫu. Thời hạn lưu thông tin mà bạn chủ động gửi qua email, điện thoại hoặc Facebook phụ thuộc kênh tiếp nhận và chính sách được doanh nghiệp thông báo khi trao đổi.
              </p>
            </article>
          </section>

          <section className="mt-14 rounded-2xl bg-blue-950 px-6 py-8 text-white sm:px-9 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <div className="flex items-center gap-3"><Mail className="h-6 w-6 text-blue-300" /><h2 className="text-2xl font-black">Yêu cầu hỗ trợ về thông tin đã liên hệ</h2></div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100">Nếu đã chủ động liên hệ và cần kiểm tra, cập nhật hoặc đề nghị xử lý thông tin, hãy gửi yêu cầu đến đầu mối của doanh nghiệp bằng kênh chính thức. Doanh nghiệp có thể cần xác minh người yêu cầu trước khi phản hồi.</p>
                <ul className="mt-5 grid gap-3 text-sm text-blue-50 sm:grid-cols-2">
                  {['Tiếp nhận và xác minh yêu cầu', 'Thông báo kết quả hoặc lý do cần thêm thời gian', 'Đối chiếu đúng kênh đã liên hệ', 'Hướng dẫn bước tiếp theo nếu cần'].map((item) => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />{item}</li>
                  ))}
                </ul>
              </div>
              <address className="not-italic rounded-2xl bg-white/10 p-5">
                <h3 className="font-bold">Đầu mối tiếp nhận yêu cầu</h3>
                <p className="mt-3 text-xs leading-6 text-blue-100">{legalEntity.legalName}<br />MST: {legalEntity.taxId}</p>
                <a href={`mailto:${siteConfig.email}`} className="mt-4 flex items-center gap-2 break-all text-sm text-white underline underline-offset-4"><Mail className="h-4 w-4 flex-none" />{siteConfig.email}</a>
                <p className="mt-4 text-xs leading-6 text-blue-100">Doanh nghiệp cần xác nhận người/bộ phận chịu trách nhiệm và thời hạn phản hồi trước khi chính sách được phê duyệt.</p>
              </address>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
