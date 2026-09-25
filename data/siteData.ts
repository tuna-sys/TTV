// Dữ liệu nội dung do doanh nghiệp cung cấp. Các thông tin pháp nhân, số liệu và cam kết
// chỉ được công bố sau khi có bằng chứng hoặc người chịu trách nhiệm xác nhận.
import { getSiteUrl } from '@/lib/site-url';

export const siteConfig = {
  name: 'Tri Thức Việt',
  fullName: 'Tri Thức Việt – Cung Ứng Nhân Lực & Tuyển Nhân Viên',
  slogan: 'Kết nối đúng người – Đồng hành đúng nhu cầu – Phát triển bền vững',
  hotline: '+84 97 299 87 02',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'bntrithucviet@gmail.com',
  website: getSiteUrl(),
};

// Thông tin pháp nhân đã được doanh nghiệp xác nhận và đối chiếu với nguồn công khai.
// Hồ sơ đăng ký doanh nghiệp bản gốc vẫn là căn cứ ưu tiên nếu nguồn tra cứu có khác biệt.
export const legalEntity = {
  legalName: 'CÔNG TY TNHH ĐÀO TẠO NGOẠI NGỮ VÀ TIN HỌC TRI THỨC VIỆT',
  alternateName: 'TTV Co., Ltd',
  taxId: '2300507524',
  legalRepresentative: 'Nguyễn Quang Ninh',
  registrationDate: '30/10/2009',
  registrationDateIso: '2009-10-30',
  status: 'Đang hoạt động',
  registeredAddress: 'Phố Cầu Ngà, Phường Nam Sơn, tỉnh Bắc Ninh, Việt Nam',
  phone: '0972 998 702',
  phoneHref: 'tel:+84972998702',
  sourceUrl: 'https://masothue.com/2300507524-cong-ty-tnhh-dao-tao-ngoai-ngu-va-tin-hoc-tri-thuc-viet',
  crossCheckUrl: 'https://thuvienphapluat.vn/ma-so-thue/cong-ty-tnhh-dao-tao-ngoai-ngu-va-tin-hoc-tri-thuc-viet-mst-2300507524.html',
  verifiedAt: '25/08/2026',
};

// Danh sách và logo do doanh nghiệp trực tiếp cung cấp để công bố trên website.
// Không công bố phạm vi dự án hoặc kết quả hợp tác riêng của từng đối tác.
export const currentPartners = {
  logos: [
    { name: 'Foxconn', src: '/images/all/images-partners-foxconn.jpg' },
    { name: 'Fushan', src: '/images/all/images-partners-fushan.jpg' },
    { name: 'Vietnam Bujeon Electronics', src: '/images/all/images-partners-vietnam-bujeon-electronics.jpg' },
    { name: 'Canon', src: '/images/all/images-partners-canon.jpg' },
    { name: 'Goertek', src: '/images/all/images-partners-goertek.jpg' },
    { name: 'Luxshare ICT', src: '/images/all/images-partners-luxshare-ict.jpg' },
    { name: 'Fulian', src: '/images/all/images-partners-fulian.jpg' },
    { name: 'Fukang', src: '/images/all/images-partners-fukang.jpg' },
    { name: 'BIEL', src: '/images/all/images-partners-biel.jpg' },
    { name: 'Amphenol', src: '/images/all/images-partners-amphenol.jpg' },
    { name: 'ITM', src: '/images/all/images-partners-itm.jpg' },
    { name: 'KATOLEC', src: '/images/all/images-partners-katolec.jpg' },
  ],
  confirmedAt: '26/08/2026',
};

// Số liệu tổng hợp được trích từ hồ sơ năng lực doanh nghiệp năm 2026.
// Không đưa lên website: sản lượng theo từng khách hàng, dữ liệu nguồn lao động,
// mục tiêu nội bộ, bản chụp giấy phép, thông tin định danh, chữ ký hoặc tài khoản.
export const publicOperationalCapacity = {
  sourceLabel: 'Hồ sơ năng lực doanh nghiệp 2026',
  confirmedAt: '26/08/2026',
  note: 'Khả năng bố trí thực tế phụ thuộc từng chương trình, khu vực và thời điểm.',
  items: [
    { value: '30', label: 'xe đưa đón được doanh nghiệp công bố' },
    { value: '11', label: 'khu ký túc xá trong hệ thống hỗ trợ' },
    { value: '5.000', label: 'chỗ ở theo quy mô doanh nghiệp công bố' },
  ],
};

// Bằng chứng vận hành được phép công bố theo xác nhận của doanh nghiệp.
// Chỉ dùng dữ liệu tổng hợp; không công bố biểu đồ theo tháng, theo khách hàng,
// theo tỉnh hoặc tỷ lệ duy trì khi chưa có phương pháp đo và hồ sơ đối chiếu.
export const publicRecruitmentEvidence = {
  sourceLabel: 'Hồ sơ năng lực doanh nghiệp 2026',
  confirmedAt: '26/08/2026',
  period: 'Năm 2025',
  annualRecruitment: '94.514',
  monthlyAverage: '7.876',
  serviceCoverage: 'Nguồn ứng viên liên vùng, tập trung tại các tỉnh Bắc Bộ và Bắc Trung Bộ.',
  recognitions: [
    { partner: 'Luxshare ICT', title: 'Nhà cung ứng hợp tác xuất sắc năm 2025' },
    { partner: 'Goertek', title: 'Đối tác cung ứng nhân lực trực tiếp xuất sắc năm 2025' },
  ],
};

// Case study công khai chỉ sử dụng số liệu tổng hợp và phạm vi địa bàn từ hồ sơ
// khách hàng năm 2025. Sản lượng chi tiết theo từng đối tác không được đưa lên web.
export const publicRecruitmentCaseStudy = {
  title: 'Một năm vận hành tuyển dụng đa điểm cho khối sản xuất',
  summary: 'Dữ liệu năm 2025 cho thấy năng lực phối hợp tuyển dụng trên nhiều khu công nghiệp tại Bắc Ninh, Bắc Giang và Hà Nội, phục vụ các chương trình có quy mô và địa bàn khác nhau.',
  sourceLabel: 'Hồ sơ năng lực doanh nghiệp 2026',
  period: 'Dữ liệu năm 2025',
  updatedAt: '26/08/2026',
  annualRecruitment: publicRecruitmentEvidence.annualRecruitment,
  monthlyAverage: publicRecruitmentEvidence.monthlyAverage,
  featuredPartners: [
    'Canon Việt Nam',
    'Foxconn',
    'Goertek Vina',
    'Fushan Technology Việt Nam',
    'Luxshare ICT Việt Nam',
    'Vendor Samsung',
  ],
  operatingAreas: [
    {
      province: 'Bắc Ninh',
      sites: ['KCN Quế Võ', 'KCN Tiên Sơn', 'KCN VSIP – Từ Sơn'],
    },
    {
      province: 'Bắc Giang',
      sites: ['KCN Quang Châu', 'KCN Vân Trung'],
    },
    {
      province: 'Hà Nội',
      sites: ['KCN Bắc Thăng Long'],
    },
  ],
  publicationScope: 'Website công bố số liệu tổng hợp và địa bàn vận hành; không công bố sản lượng riêng của từng đối tác.',
};

export const officialChannels = {
  facebookPage: 'https://web.facebook.com/trithucviet.tuyendung',
  featuredPost: 'https://web.facebook.com/photo/?fbid=734962355296511&set=a.734962361963177',
  map: 'https://maps.app.goo.gl/ENoNuTkTt4iuoS9t9',
  phones: [
    { display: '+84 97 299 87 02', href: 'tel:+84972998702' },
    { display: '096 133 73 30', href: 'tel:0961337330' },
  ],
};

// 3 Giá trị cốt lõi theo tôn chỉ hoạt động
export const coreValues = [
  {
    target: 'Đối với doanh nghiệp',
    description: 'Chủ động nguồn nhân lực, giảm áp lực tuyển dụng và hỗ trợ ổn định sản xuất.',
  },
  {
    target: 'Đối với người lao động',
    description: 'Tiếp cận cơ hội việc làm rõ ràng, phù hợp và thuận tiện hơn.',
  },
  {
    target: 'Đối với thị trường lao động',
    description: 'Tạo ra sự kết nối minh bạch, có trách nhiệm và lâu dài.',
  },
];

// 4 Yếu tố tập trung cốt lõi (ĐÚNG NHU CẦU, ĐÚNG NGUỒN, ĐÚNG TIẾN ĐỘ, ĐÚNG THÔNG TIN)
export const fourFocusPillars = [
  {
    title: 'ĐÚNG NHU CẦU',
    desc: 'Hiểu rõ tiêu chuẩn tuyển dụng và đặc thù từng vị trí.',
  },
  {
    title: 'ĐÚNG NGUỒN',
    desc: 'Lựa chọn kênh tuyển phù hợp với nhóm lao động mục tiêu.',
  },
  {
    title: 'ĐÚNG TIẾN ĐỘ',
    desc: 'Bám sát kế hoạch nhân sự và thời điểm doanh nghiệp cần bổ sung lao động.',
  },
  {
    title: 'ĐÚNG THÔNG TIN',
    desc: 'Đảm bảo người lao động được tư vấn rõ ràng trước khi đăng ký và nhận việc.',
  },
];

// 01. Năng lực tuyển nhân viên đa kênh (Hệ thống không phụ thuộc một kênh duy nhất)
export const sourcingTouchpoints = [
  'Hệ thống website và các nền tảng tuyển dụng trực tuyến.',
  'Facebook và các kênh mạng xã hội phục vụ tuyển dụng.',
  'Nội dung tuyển dụng dạng hình ảnh, video và nội dung ngắn.',
  'Mạng lưới cộng tác viên và giới thiệu ứng viên.',
  'Các điểm tuyển dụng trực tiếp tại khu vực tập trung đông lao động.',
  'Nguồn ứng viên đã từng đăng ký hoặc làm việc.',
  'Kết nối với các cộng đồng lao động tại từng địa phương.',
  'Hoạt động tuyển dụng tại các khu vực có nhu cầu tìm việc cao.',
];

// Quy trình chủ động 7 bước
export const activeSourcingPipeline = [
  { step: '01', title: 'Tiếp Cận', desc: 'Đa kênh chạm đến nhóm lao động mục tiêu' },
  { step: '02', title: 'Tư Vấn', desc: 'Rõ ràng thông tin công việc, điều kiện, ca kíp' },
  { step: '03', title: 'Sàng Lọc', desc: 'Phân loại theo tiêu chuẩn và kỹ năng' },
  { step: '04', title: 'Xác Nhận Nhu Cầu', desc: 'Làm rõ khả năng nhận việc thực tế' },
  { step: '05', title: 'Hướng Dẫn Hồ Sơ', desc: 'Hỗ trợ chuẩn bị thủ tục đầy đủ' },
  { step: '06', title: 'Bố Trí Công Việc', desc: 'Phối hợp tiếp nhận vào nhà máy' },
  { step: '07', title: 'Theo Dõi Sau Nhận Việc', desc: 'Đồng hành, lắng nghe và hỗ trợ thích nghi' },
];

// Các yếu tố sàng lọc đầu vào làm rõ trước khi giới thiệu
export const screeningCriteria = [
  'Nhu cầu và mong muốn công việc của người lao động.',
  'Khu vực người lao động có thể làm việc.',
  'Khả năng đáp ứng thời gian và ca làm.',
  'Kinh nghiệm hoặc kỹ năng liên quan nếu vị trí yêu cầu.',
  'Hồ sơ cần thiết.',
  'Khả năng nhận việc thực tế.',
  'Các điều kiện đặc thù của từng nhà máy hoặc vị trí.',
];

// 02. Dịch vụ cung ứng nhân sự cho khối FDI & Sản xuất điện tử
// 10 Yếu tố phối hợp xác định ngay từ đầu
export const fdiCoordinationFactors = [
  'Số lượng nhân sự cần bổ sung',
  'Yêu cầu đối với từng nhóm lao động',
  'Thời gian cần nhân sự',
  'Địa điểm làm việc',
  'Ca làm việc',
  'Tiêu chuẩn đầu vào',
  'Hồ sơ cần chuẩn bị',
  'Lịch phỏng vấn hoặc nhận việc',
  'Chính sách dành cho người lao động',
  'Yếu tố ảnh hưởng tới tỷ lệ nhận việc & duy trì lao động',
];

// Quy trình cung ứng 6 bước chuẩn hóa
export const b2bSixSteps = [
  {
    step: 'Bước 1',
    title: 'Tiếp Nhận Nhu Cầu',
    desc: 'Đội ngũ phụ trách làm việc với doanh nghiệp để hiểu kế hoạch nhân sự, tiêu chuẩn tuyển dụng và thời gian cần người.',
  },
  {
    step: 'Bước 2',
    title: 'Xây Dựng Kế Hoạch Tuyển Nhân Viên',
    desc: 'Tùy từng vị trí và khu vực, Tri Thức Việt lựa chọn tổ hợp kênh tuyển phù hợp để tiếp cận đúng nhóm lao động.',
  },
  {
    step: 'Bước 3',
    title: 'Tiếp Nhận & Sàng Lọc',
    desc: 'Ứng viên được tư vấn về công việc, điều kiện làm việc, yêu cầu hồ sơ và các thông tin cần thiết trước khi chuyển sang bước tiếp theo.',
  },
  {
    step: 'Bước 4',
    title: 'Điều Phối Ứng Viên',
    desc: 'Người lao động đủ điều kiện được hướng dẫn lịch trình, hồ sơ và các bước cần thực hiện để tham gia phỏng vấn hoặc nhận việc.',
  },
  {
    step: 'Bước 5',
    title: 'Phối Hợp Tiếp Nhận',
    desc: 'Tri Thức Việt phối hợp với đầu mối doanh nghiệp trong quá trình ứng viên đến phỏng vấn, làm thủ tục và nhận việc.',
  },
  {
    step: 'Bước 6',
    title: 'Theo Dõi Sau Tuyển Dụng',
    desc: 'Quá trình không kết thúc khi người lao động vào nhà máy. Theo dõi phản hồi giúp phát hiện sớm các vấn đề để hỗ trợ kịp thời.',
  },
];

// Giá trị dành cho doanh nghiệp
export const enterpriseValues = [
  {
    title: 'Giảm tải áp lực tuyển dụng',
    desc: 'Doanh nghiệp có thể tập trung nguồn lực HR vào những hoạt động quan trọng hơn thay vì phải tự xử lý toàn bộ quá trình tìm nguồn số lượng lớn.',
  },
  {
    title: 'Mở rộng khả năng tiếp cận ứng viên',
    desc: 'Hệ thống đa kênh giúp doanh nghiệp tiếp cận những nhóm lao động mà một kênh tuyển dụng đơn lẻ khó bao phủ.',
  },
  {
    title: 'Chủ động hơn trước biến động nhân sự',
    desc: 'Nguồn tuyển được duy trì thường xuyên giúp doanh nghiệp có phương án bổ sung khi xảy ra thiếu hụt nhân lực.',
  },
  {
    title: 'Phối hợp theo nhu cầu thực tế',
    desc: 'Mỗi nhà máy có yêu cầu khác nhau. Phương án tuyển dụng vì thế cần được thiết kế theo từng nhu cầu cụ thể.',
  },
  {
    title: 'Minh bạch trong phối hợp',
    desc: 'Thông tin tuyển dụng, tiêu chuẩn và chính sách cần được thống nhất giữa các bên trước khi truyền đạt tới người lao động.',
  },
];

// 03. Hệ sinh thái chăm sóc đời sống người lao động (B2C)
export const workerSupportPillars = [
  {
    title: 'An Tâm Ngay Từ Khi Tìm Việc',
    desc: 'Người lao động được tư vấn rõ ràng về địa điểm, nội dung công việc, điều kiện tuyển dụng, ca làm, hồ sơ và chính sách liên quan trước khi quyết định.',
    quote: 'Thông tin rõ ràng trước khi nhận việc – hạn chế tối đa việc người lao động đưa ra quyết định khi chưa hiểu đầy đủ công việc.',
  },
  {
    title: 'Hỗ Trợ Trong Quá Trình Nhận Việc',
    desc: 'Hướng dẫn cụ thể về hồ sơ, lịch trình, địa điểm tập trung, quy trình phỏng vấn và các bước nhận việc, giúp giảm bỡ ngỡ cho người mới.',
    quote: 'Giúp mỗi người lao động hiểu rõ mình cần làm gì và giảm những khó khăn không cần thiết trong những ngày đầu.',
  },
  {
    title: 'Hỗ Trợ Đi Lại',
    desc: 'Tùy từng chương trình và điều kiện thực tế, hệ thống hỗ trợ vận chuyển và điều phối giúp người lao động thuận tiện hơn khi di chuyển tới nơi làm việc.',
    quote: 'Khoảng cách không nên trở thành rào cản khiến người lao động bỏ lỡ cơ hội việc làm phù hợp.',
  },
  {
    title: 'Hỗ Trợ Chỗ Ở & Ổn Định Cuộc Sống',
    desc: 'Hỗ trợ thông tin về chỗ ở, khu vực sinh hoạt và các điều kiện thiết yếu giúp người lao động ngoại tỉnh chủ động thích nghi với môi trường mới.',
    quote: 'Khi người lao động ổn định được đời sống, họ cũng có điều kiện tập trung tốt hơn cho công việc.',
  },
  {
    title: 'Có Người Đồng Hành Khi Cần',
    desc: 'Duy trì kết nối sau nhận việc. Khi phát sinh vấn đề liên quan tới công việc hay điều kiện sinh hoạt, người lao động luôn có đầu mối trao đổi.',
    quote: 'Không chỉ hỗ trợ tìm được một công việc, mà cố gắng để hành trình bắt đầu công việc mới trở nên rõ ràng và thuận tiện hơn.',
  },
];

// Hai phía của một mối quan hệ bền vững
export const sustainableRelationship = {
  enterprise: {
    title: 'Với Doanh Nghiệp',
    points: [
      'Ổn định nguồn lao động.',
      'Hạn chế biến động không cần thiết.',
      'Nâng cao trải nghiệm ứng viên.',
      'Xây dựng hình ảnh tuyển dụng tích cực.',
      'Phát triển nguồn nhân lực bền vững.',
    ],
  },
  worker: {
    title: 'Với Người Lao Động',
    points: [
      'Hiểu rõ công việc trước khi lựa chọn.',
      'Quy trình minh bạch để an tâm gắn bó.',
      'Nơi có thể liên hệ khi cần hỗ trợ.',
    ],
  },
};

// 3 Nguyên tắc hoạt động
export const threePrinciples = [
  {
    title: 'CHUYÊN NGHIỆP VỚI ĐỐI TÁC',
    desc: 'Hiểu nhu cầu, phối hợp rõ ràng và đặt hiệu quả tuyển dụng vào trọng tâm của mỗi phương án triển khai.',
  },
  {
    title: 'MINH BẠCH VỚI NGƯỜI LAO ĐỘNG',
    desc: 'Thông tin tuyển dụng cần rõ ràng, dễ hiểu và nhất quán với yêu cầu thực tế của công việc.',
  },
  {
    title: 'TRÁCH NHIỆM TRONG MỖI KẾT NỐI',
    desc: 'Mỗi ứng viên không chỉ là một hồ sơ. Mỗi doanh nghiệp không chỉ là một đơn hàng tuyển dụng. Đó là những mối quan hệ cần được xây dựng bằng sự tin cậy và trách nhiệm lâu dài.',
  },
];
