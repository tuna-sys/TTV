# Xuất bản website tĩnh và trỏ domain

## Mô hình hiện tại

Website được xuất thành các tệp HTML, CSS, JavaScript và hình ảnh trong thư mục `out/`. Khi đã tải thư mục này lên một dịch vụ hosting tĩnh, website không cần VPS, PostgreSQL, Node.js chạy nền hoặc tiến trình worker.

Domain vẫn chỉ là địa chỉ. Để người dùng mở được website, domain phải được trỏ đến dịch vụ đang phân phối thư mục `out/`.

## Build

1. Sao chép `.env.example` thành `.env.local`.
2. Điền `NEXT_PUBLIC_SITE_URL` bằng đúng domain HTTPS của doanh nghiệp, không dùng domain ví dụ.
3. Kiểm tra `NEXT_PUBLIC_CONTACT_EMAIL` và chỉ điền địa chỉ đã được doanh nghiệp xác nhận.
4. Chạy `pnpm install --frozen-lockfile` rồi `pnpm build`.
5. Tải toàn bộ thư mục `out/` lên dịch vụ hosting tĩnh.

## Sau khi trỏ domain

- Mở từng URL công khai trên domain thật, gồm trang chủ, Giới thiệu, Doanh nghiệp, Người lao động, Tuyển nguồn, Liên hệ và Chính sách.
- Kiểm tra HTTPS, logo, hình ảnh, menu mobile, liên kết gọi điện, email, Facebook và Google Maps.
- Kiểm tra `https://domain-cua-doanh-nghiep/sitemap.xml` và `robots.txt`.
- Khi sửa nội dung, build lại và tải bản `out/` mới lên hosting.

## Giới hạn cần bàn giao rõ

Bản tĩnh không có `/admin`, API, biểu mẫu gửi hồ sơ hoặc cập nhật tin tuyển dụng từ trình duyệt. Nội dung tuyển dụng được dẫn về Facebook chính thức và nội dung website chỉ thay đổi sau khi build lại.
