# 🤝 Hướng Dẫn Đóng Góp (Contribution Guidelines) - The Isle Wiki Vietnam

Cảm ơn bạn đã quan tâm đến việc phát triển và hoàn thiện **The Isle Wiki (Evrima)** cho cộng đồng game thủ Việt Nam! Chúng tôi luôn hoan nghênh mọi đóng góp về dữ liệu, giao diện và tính năng mới.

---

## 🌟 Bạn Có Thể Đóng Góp Những Gì?

1. **Cập nhật chỉ số khủng long**: Điều chỉnh lại cân nặng, lực cắn, tốc độ hoặc thời gian lớn khi game có bản vá cân bằng mới.
2. **Thêm loài khủng long mới**: Bổ sung thông tin cho các loài khủng long sắp ra mắt (ví dụ: *Tyrannosaurus Rex*, *Spinosaurus*, *Ankylosaurus*).
3. **Cải tiến mẹo sinh tồn & kèo đấu**: Bổ sung các kinh nghiệm săn mồi, kỹ năng né đòn thực chiến.
4. **Tối ưu hóa giao diện (UI/UX)**: Bổ sung biểu đồ, cải thiện hiển thị trên thiết bị di động.

---

## 🛠️ Quy Trình Gửi Đóng Góp (Step-by-Step Workflow)

### Bước 1: Fork Kho Lưu Trữ
- Nhấn nút **Fork** ở góc trên bên phải của repository: [github.com/methanol-dev/the-isle-wiki](https://github.com/methanol-dev/the-isle-wiki).

### Bước 2: Clone Về Máy Cá Nhân & Tạo Nhánh (Branch)
```bash
git clone https://github.com/<your-username>/the-isle-wiki.git
cd the-isle-wiki
git checkout -b feat/them-khung-long-moi
```

### Bước 3: Chỉnh Sửa Dữ Liệu Hoặc Mã Nguồn
- Nếu cập nhật hoặc thêm loài khủng long mới, hãy chỉnh sửa tệp [`data/creatures.json`](./data/creatures.json) và tệp fallback [`js/embedded-data.js`](./js/embedded-data.js) theo đúng chuẩn [Data Schema](./docs/DATA_SCHEMA.md).
- Kiểm tra tính hợp lệ của JSON trước khi commit (không có dấu phẩy thừa ở cuối mảng).

### Bước 4: Kiểm Tra Trực Tiếp Trên Trình Duyệt
- Mở tệp `index.html`, `compare.html` và `guides.html` trên trình duyệt để kiểm tra:
  - Khủng long hiển thị chính xác tên, phân loại và màu sắc.
  - Thanh trượt tăng trưởng 0% - 100% tính toán mượt mà.
  - Không xuất hiện bất kỳ lỗi nào trong Developer Console (`F12`).

### Bước 5: Commit & Tạo Pull Request (PR)
```bash
git add .
git commit -m "feat(data): them du lieu Tyrannosaurus Rex"
git push origin feat/them-khung-long-moi
```
- Vào GitHub và mở một **Pull Request (PR)** mới với mô tả chi tiết những thay đổi bạn đã thực hiện. Đội ngũ quản trị viên sẽ xem xét và gộp (merge) đóng góp của bạn!
