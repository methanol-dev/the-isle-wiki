# 🛡️ Chính Sách Bảo Mật (Security Policy) - The Isle Wiki Vietnam

Tài liệu này mô tả các biện pháp bảo vệ và phòng thủ an ninh thông tin được áp dụng cho dự án **The Isle Wiki (Evrima)**.

---

## 1. Phạm Vi & Bề Mặt Tấn Công (Attack Surface Mapping)

Dự án là một **trang web tĩnh (Static Web Application)** triển khai trên **GitHub Pages**:
- Không sử dụng cơ sở dữ liệu bên ngoài hoặc API Backend lưu trữ thông tin nhạy cảm.
- Không lưu trữ cookie phiên làm việc, token xác thực hoặc mật khẩu của người dùng.
- Toàn bộ dữ liệu được quản lý tĩnh qua các tệp JSON nội bộ (`data/creatures.json`, `data/nutrients.json`, `data/mechanics.json`).

---

## 2. Các Cơ Chế Phòng Thủ Đã Triển Khai (Defensive Hardening)

### A. Chống Tấn Công XSS (Cross-Site Scripting)
- **Input Sanitization**: Mọi chuỗi tìm kiếm từ người dùng qua ô tìm kiếm chính và hộp thoại `Ctrl + K` đều được làm sạch qua mô-đun `SecurityUtils.sanitizeQuery()` với giới hạn độ dài ký tự để ngăn ngừa lỗi bộ nhớ.
- **ID Validation**: Tham số URL đầu vào (ví dụ: `?open=deinosuchus`) được kiểm tra nghiêm ngặt qua biểu thức chính quy `SecurityUtils.isValidId()` (`/^[a-z0-9_-]+$/`).
- **HTML Escaping**: Sử dụng `SecurityUtils.escapeHTML()` để trung hòa các ký tự nguy hiểm (`<`, `>`, `&`, `"`, `'`).

### B. Bảo Vệ Liên Kết Ngoài (External Link Safety)
- Toàn bộ các đường liên kết ra ngoài trang web đều được gắn thuộc tính bắt buộc:
  ```html
  target="_blank" rel="noopener noreferrer"
  ```
  giúp bảo vệ trang web khỏi lỗ hổng Tabnabbing và rò rỉ ngữ cảnh `window.opener`.

### C. Cam Kết Không Lộ Dữ Liệu Nhạy Cảm (No Hardcoded Secrets)
- Không có bất kỳ API Key, Secret Token hoặc thông tin chứng thực nào được lưu trong kho mã nguồn.
- Tệp `.gitignore` được cấu hình để chặn hoàn toàn các tệp tạm, nhật ký log hệ thống (`*.log`) và cấu hình IDE (`.vscode/`, `.idea/`).

---

## 3. Báo Cáo Lỗ Hổng (Vulnerability Reporting)

Nếu bạn phát hiện bất kỳ vấn đề bảo mật hoặc rủi ro tiềm ẩn nào trong mã nguồn:
1. Vui lòng **không mở Issue công khai**.
2. Hãy liên hệ trực tiếp với đội ngũ phát triển qua GitHub hoặc tạo Security Advisory bảo mật riêng tư tại repository: [github.com/methanol-dev/the-isle-wiki/security](https://github.com/methanol-dev/the-isle-wiki/security).

Chúng tôi cam kết phản hồi và xử lý các báo cáo trong vòng 24–48 giờ.
