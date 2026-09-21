# Tri Thức Việt

Website doanh nghiệp đa trang cho Tri Thức Việt, xây dựng bằng Next.js, TypeScript và Tailwind CSS. Bản phát hành hiện tại là website tĩnh, không cần VPS, Node.js chạy nền hoặc cơ sở dữ liệu.

## Các khu vực chính

- `/`: tổng quan, kênh chính thức và các tin tuyển nhân viên được xuất bản.
- `/giai-phap-doanh-nghiep`: quy trình phối hợp với doanh nghiệp.
- `/nguoi-lao-dong`: thông tin hỗ trợ người lao động.
- `/nang-luc-tuyen-nguon`: năng lực tuyển nhân viên đa kênh (giữ URL cũ để không làm hỏng liên kết).
- `/gioi-thieu` và `/lien-he`: thông tin doanh nghiệp và các kênh liên hệ trực tiếp.

## Chạy cục bộ

```bash
pnpm install
pnpm dev
```

Mở `http://127.0.0.1:3100`.

## Kiểm tra và xuất bản

```bash
pnpm build
```

Lệnh build tạo thư mục `out/`. Chỉ cần tải toàn bộ nội dung trong thư mục này lên dịch vụ hosting tĩnh, sau đó trỏ domain theo hướng dẫn của nhà cung cấp hosting. Domain một mình không lưu được website; vẫn cần một nơi phân phối các tệp tĩnh, nhưng không cần thuê VPS.

## Dữ liệu và vận hành

- Nội dung công khai nằm trong mã nguồn và được cập nhật bằng một lần build mới.
- Website không có tài khoản quản trị, biểu mẫu trực tuyến, API tiếp nhận hoặc kho hồ sơ.
- Người dùng liên hệ qua email, điện thoại, Facebook hoặc Google Maps; các kênh này không phải kho dữ liệu của website.
- Cấu hình build nằm ở `.env.example`; không đưa `.env.local` hoặc khóa dịch vụ vào Git.
- Hướng dẫn hosting và trỏ domain: [docs/STATIC_HOSTING.md](docs/STATIC_HOSTING.md).
