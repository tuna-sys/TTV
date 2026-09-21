# Vận hành website tĩnh

## Phạm vi hiện tại

- Website được xuất thành các tệp trong `out/` và không cần VPS, PostgreSQL, Node.js chạy nền hoặc worker.
- Website không có tài khoản quản trị, API tiếp nhận, biểu mẫu gửi hồ sơ hoặc kho dữ liệu cá nhân.
- Nội dung công khai nằm trong mã nguồn; sau khi chỉnh sửa cần build lại và tải bản `out/` mới lên hosting.
- Người dùng được dẫn đến email, điện thoại, Facebook và Google Maps. Việc xử lý thông tin trên các kênh bên ngoài phải theo thông báo của doanh nghiệp và nhà cung cấp tương ứng.

## Quy trình cập nhật

1. Xác nhận nội dung và các liên kết mới với doanh nghiệp.
2. Điền domain thật trong `NEXT_PUBLIC_SITE_URL`.
3. Chạy lint, typecheck, test và build.
4. Tải toàn bộ `out/` lên hosting tĩnh.
5. Kiểm tra lại các URL public và các liên kết liên hệ trên domain thật.

## Dữ liệu không được bàn giao

Không tải `.env*`, `.git`, `.next`, `node_modules`, log, dữ liệu tài khoản hoặc hồ sơ cá nhân lên hosting. Nếu sau này cần biểu mẫu, quản trị hoặc lưu hồ sơ, đó sẽ là một hạng mục backend riêng và phải dùng dịch vụ dữ liệu/hosting phù hợp; domain một mình không cung cấp các chức năng này.
