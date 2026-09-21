# Checklist phát hành website tĩnh

## Trước khi phát hành

- Doanh nghiệp xác nhận tên pháp nhân, địa chỉ, số điện thoại, email, liên kết Facebook, Maps, hình ảnh và nội dung đối tác được phép công bố.
- Điền đúng `NEXT_PUBLIC_SITE_URL` bằng domain HTTPS thật của doanh nghiệp.
- Chỉ dùng `NEXT_PUBLIC_CONTACT_EMAIL` nếu đó là địa chỉ đã được doanh nghiệp xác nhận.
- Rà soát nội dung pháp lý, chính sách dữ liệu và các số liệu trước khi mở lập chỉ mục.

## Build và kiểm tra

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

Lệnh build phải tạo thư mục `out/` và toàn bộ route public phải được xuất tĩnh. Không tải `.env*`, `.git`, `.next`, `node_modules`, dữ liệu nội bộ hoặc log lên hosting.

## Sau khi gắn domain

- Kiểm tra HTTPS và các URL public trên domain thật ở desktop/mobile.
- Kiểm tra menu, hình ảnh, `sitemap.xml`, `robots.txt`, canonical và Open Graph.
- Kiểm tra các liên kết email, điện thoại, Facebook và Google Maps.
- Xác nhận rõ với khách hàng: bản này không có `/admin`, API, biểu mẫu gửi hồ sơ hoặc cập nhật tin tuyển dụng từ trình duyệt.
