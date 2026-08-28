# 🦖 The Isle Wiki (Evrima) - Cẩm Nang & Cơ Sở Dữ Liệu Khủng Long Tiếng Việt

Trang tra cứu thông số khủng long, tính toán chỉ số tăng trưởng thời gian thực (Growth Slider 0% – 100%), hệ thống 3 nhóm dinh dưỡng, bộ kỹ năng chiến đấu và mẹo sinh tồn chuyên sâu cho tựa game **The Isle (Evrima)** dành cho cộng đồng game thủ Việt Nam.

![License](https://img.shields.io/badge/License-MIT-emerald.svg)
![Stack](https://img.shields.io/badge/Stack-Vanilla_HTML5_/_CSS3_/_JS-blue.svg)
![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-success.svg)

---

## 🌟 Tính Năng Nổi Bật (Features)

1. **📊 Thanh Trượt Tăng Trưởng Tương Tác (Interactive Growth Slider 0% - 100%)**:
   - Tự động tính toán lại tức thì: **Trọng lượng (kg)**, **Lượng máu (HP)**, **Sát thương cắn (Damage)**, **Tốc độ chạy nước rút (Sprint km/h)**, **Thể lực (Stamina)** và **Thời gian lớn còn lại**.
   - Các mốc chọn nhanh: *Con non (0%)*, *Thiếu niên (25%)*, *Trưởng thành non (50%)*, *Trưởng thành (80%)*, *Hoàn hảo (100%)*.

2. **🥩 Hệ Thống Dinh Dưỡng Chuẩn Evrima (Perfect Diet 3/3)**:
   - Chi tiết 3 nhóm chất dinh dưỡng: **[ S ]**, **[ // ]**, **[ ... ]**.
   - Danh sách thức ăn, cây cối, con mồi ưa thích và nội tạng buff đặc biệt (Tim, Phổi, Dạ dày, Mắt, Tuyến độc).
   - Cảnh báo tập tính ăn đồng loại (*Cannibalism*).

3. **⚔️ Công Cụ So Sánh Kèo Đấu Đối Đầu (Matchup Compare Tool)**:
   - Chọn 2 loài khủng long bất kỳ (ở các mốc tăng trưởng khác nhau) để so sánh chỉ số tương quan.
   - Tính toán tỉ lệ chênh lệch trọng lượng (*Weight Ratio Multiplier*) và phân tích lợi thế chiến đấu / khả năng hất ngã (*Knockdown*) / đè bẹp (*Pin*).

4. **🔍 Tìm Kiếm Tức Thì & Phím Tắt Toàn Cục (`Ctrl + K` / `Cmd + K`)**:
   - Tra cứu nhanh bằng tiếng Việt hoặc tiếng Anh ("cá sấu", "bò tót", "vồ", "carnivore", "stego"...).
   - Bộ lọc theo chế độ ăn (Ăn thịt, Ăn cỏ, Ăn tạp, Ăn cá) và môi trường sống (Trên cạn, Lưỡng cư, Bầu trời).

5. **⚡ Thuần Frontend - Không Phụ Thuộc Framework (Zero Dependency)**:
   - Viết bằng HTML5, CSS3 hiện đại (CSS Variables, Glassmorphism, Dark Prehistoric HUD) và Vanilla JavaScript.
   - Dữ liệu lưu trong tệp JSON (`data/creatures.json`, `data/nutrients.json`, `data/mechanics.json`), dễ dàng cập nhật khi game ra mắt bản vá mới.
   - Hỗ trợ fallback nạp dữ liệu chạy tốt cả trên `http/https` lẫn mở trực tiếp `file:///index.html`.

---

## 📂 Cấu Trúc Thư Mục (Project Structure)

```
the-isle-wiki/
├── index.html                  # Trang chủ tra cứu và danh sách khủng long
├── compare.html                # Trang so sánh 2 loài khủng long đối đầu
├── guides.html                 # Cẩm nang dinh dưỡng, vết thương và sinh tồn
├── css/
│   ├── main.css                # Biến toàn cục, theme Dark Prehistoric HUD, reset
│   ├── components.css          # Card khủng long, Growth slider, Modal, Compare tool
│   └── responsive.css          # Tối ưu giao diện Mobile / Tablet / Desktop
├── js/
│   ├── embedded-data.js        # Dữ liệu tích hợp sẵn hỗ trợ offline
│   ├── data-service.js         # Service nạp dữ liệu JSON
│   ├── growth-calc.js          # Logic tính toán chỉ số theo thanh trượt tăng trưởng
│   ├── filter-search.js        # Bộ lọc danh mục & tìm kiếm tức thì
│   ├── modal-details.js        # Quản lý modal chi tiết hồ sơ khủng long
│   ├── compare-tool.js         # Logic so sánh kèo đấu đối đầu
│   └── app.js                  # Khởi tạo ứng dụng & phím tắt Ctrl+K
└── data/
    ├── creatures.json          # Bộ dữ liệu 17 loài khủng long Evrima (Tiếng Việt)
    ├── nutrients.json          # Dữ liệu giải thích 3 nhóm dinh dưỡng
    └── mechanics.json          # Hướng dẫn cơ chế & trạng thái game
```

---

## 🚀 Hướng Dẫn Chạy & Triển Khai (Deployment Guide)

### 1. Chạy Trực Tiếp Trên Máy Tính Của Bạn
Chỉ cần nhấp đúp chuột vào tệp `index.html` hoặc dùng tiện ích mở rộng Live Server trong VS Code:
```bash
# Hoặc sử dụng bất kỳ static server nào (nếu muốn):
npx serve .
```

### 2. Triển Khai Lên GitHub Pages (Miễn Phí 100%)
1. Đẩy mã nguồn lên kho lưu trữ GitHub của bạn:
   ```bash
   git add .
   git commit -m "feat: release The Isle Wiki Evrima Vietnam"
   git push -u origin main
   ```
2. Trên trang GitHub của kho lưu trữ:
   - Vào **Settings** ➔ **Pages**.
   - Tại mục **Build and deployment** / **Source**: Chọn **Deploy from a branch**.
   - Tại mục **Branch**: Chọn `main` và thư mục `/ (root)`.
   - Nhấn **Save**.
3. Trang web sẽ trực tiếp hoạt động tại: `https://<username>.github.io/the-isle-wiki/`.

---

---

## 📚 Tài Liệu Kỹ Thuật & Đóng Góp (Documentation)
- 🏛️ [**Kiến Trúc Kỹ Thuật (Architecture & Math Formulas)**](docs/ARCHITECTURE.md): Chi tiết kiến trúc hệ thống, luồng dữ liệu và công thức toán học tính toán chỉ số tăng trưởng.
- 📊 [**Quy Chuẩn Cấu Trúc Dữ Liệu (Data Schema Specification)**](docs/DATA_SCHEMA.md): Hướng dẫn định dạng JSON cho khủng long, chất dinh dưỡng và cơ chế game.
- 🤝 [**Hướng Dẫn Đóng Góp (Contribution Guidelines)**](CONTRIBUTING.md): Cách thức gửi Pull Request, thêm khủng long mới hoặc cập nhật chỉ số khi có bản vá.
- 🛡️ [**Chính Sách Bảo Mật (Security Policy)**](SECURITY.md): Các cơ chế phòng thủ XSS, Input Sanitization và quy trình báo cáo lỗ hổng.

---

## 🦖 Danh Sách 17 Loài Khủng Long Evrima Trong Dữ Liệu
- **Carnivores / Ăn Thịt**: Carnotaurus, Ceratosaurus, Deinosuchus, Dilophosaurus, Herrerasaurus, Omniraptor, Troodon.
- **Herbivores / Ăn Cỏ**: Diabloceratops, Dryosaurus, Hypsilophodon, Maiasaura, Pachycephalosaurus, Stegosaurus, Tenontosaurus.
- **Omnivores / Ăn Tạp**: Gallimimus, Beipiaosaurus.
- **Piscivores / Ăn Cá**: Pteranodon.

---

## 👨‍💻 Tác Giả & Liên Hệ (Author & Contact)
- **Tác giả**: **[methanol-dev](https://github.com/methanol-dev)**
- **Kho lưu trữ**: [github.com/methanol-dev/the-isle-wiki](https://github.com/methanol-dev/the-isle-wiki)

---

## 📜 Bản Quyền & Giấy Phép (License)
- Mã nguồn được phát hành theo giấy phép **MIT**.
- Phát triển & duy trì bởi **[methanol-dev](https://github.com/methanol-dev)**.
- Nội dung hình ảnh và tài sản trò chơi thuộc sở hữu của **Afterthought LLC**.
