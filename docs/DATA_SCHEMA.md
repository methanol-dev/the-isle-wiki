# 📊 Cấu Trúc Dữ Liệu (Data Schema Specification) - The Isle Wiki

Tài liệu này định nghĩa cấu trúc chuẩn (JSON Schema) cho các tệp dữ liệu trong thư mục `data/`. Bạn có thể dựa vào hướng dẫn này để bổ sung loài khủng long mới hoặc cập nhật thông số khi trò chơi ra mắt bản vá (Patch Update).

---

## 1. Schema Khủng Long (`data/creatures.json`)

Mỗi phần tử trong mảng `data/creatures.json` là một đối tượng (`Object`) đại diện cho một loài khủng long với các trường dữ liệu sau:

```typescript
interface Creature {
  id: string;                      // Mã định danh duy nhất (ví dụ: "deinosuchus", "stegosaurus")
  name: string;                    // Tên tiếng Anh chính thức trong game
  vietnameseName: string;          // Tên tiếng Việt hoặc biệt danh phổ biến trong cộng đồng
  scientificName: string;          // Tên khoa học
  diet: "carnivore" | "herbivore" | "omnivore" | "piscivore"; // Chế độ ăn
  dietLabelVi: string;             // Nhãn hiển thị tiếng Việt (ví dụ: "Ăn thịt", "Ăn cỏ")
  tier: "apex" | "large" | "medium" | "small"; // Phân hạng kích cỡ
  tierLabelVi: string;             // Nhãn phân hạng tiếng Việt (ví dụ: "Apex", "Thú Săn Lớn")
  locomotion: "terrestrial" | "semi-aquatic" | "aerial"; // Môi trường vận động
  locomotionLabelVi: string;       // Nhãn môi trường tiếng Việt (ví dụ: "Trên cạn", "Lưỡng cư")
  growthTimeHours: number;         // Tổng thời gian lớn hoàn chỉnh (tính bằng giờ, ví dụ: 5.5)
  growthTimeFormatted: string;     // Chuỗi định dạng hiển thị (ví dụ: "5 giờ 30 phút")
  badgeColor: string;              // Mã màu HEX cho huy hiệu (ví dụ: "#06b6d4")
  accentColor: string;             // Mã màu HEX điểm nhấn (ví dụ: "#0891b2")
  overview: string;                // Mô tả tổng quan tập tính sinh học và phong cách chơi (Tiếng Việt)

  statsMin: CreatureStats;         // Thông số tại mốc 0% (Hatchling - Con non)
  statsMax: CreatureStats;         // Thông số tại mốc 100% (Full Adult - Trưởng thành tối đa)

  dietInfo: {
    slots: NutrientSlot[];         // 3 nhóm chất dinh dưỡng S, //, ...
    preferredPrey: string[];       // Danh sách con mồi hoặc thực vật ưa thích
    favoriteOrgans: OrganBuff[];   // Danh sách nội tạng có hiệu ứng bùa lợi
    cannibalism: boolean;          // Có được phép ăn thịt đồng loại không
    cannibalismNote: string;       // Ghi chú chi tiết về tập tính ăn đồng loại
  };

  abilities: Ability[];            // Danh sách kỹ năng và phím bấm
  combatTips: {
    strengths: string[];           // Danh sách ưu điểm
    weaknesses: string[];          // Danh sách nhược điểm
    huntingGuide: string;          // Cẩm nang săn mồi / kiếm ăn
    defenseGuide: string;          // Cẩm nang phòng thủ & thoát thân
  };
}

interface CreatureStats {
  weight: number;                  // Trọng lượng (kg)
  health: number;                  // Lượng máu (HP)
  biteDamage: number;              // Sát thương cắn cơ bản (dmg)
  sprintSpeed: number;             // Tốc độ chạy nước rút (km/h)
  trotSpeed: number;               // Tốc độ đi bộ (km/h)
  swimSpeed: number;               // Tốc độ bơi lội (km/h)
  stamina: number;                 // Điểm thể lực (pts)
  staminaRegen: string;            // Tốc độ hồi thể lực ("Chậm" | "Khá" | "Nhanh" | "Cực Nhanh")
  fallDamageResistance: string;    // Kháng sát thương rơi ("Thấp" | "Trung bình" | "Cao" | "Tuyệt Đối")
  nightVision: string;             // Chất lượng tầm nhìn ban đêm
}

interface NutrientSlot {
  symbol: "S" | "//" | "...";      // Ký hiệu chất dinh dưỡng
  name: string;                    // Tên chất dinh dưỡng
  foods: string[];                 // Danh sách các loại thức ăn cung cấp chất này
  buffDescription: string;         // Hiệu ứng bùa lợi khi đủ chất
}

interface OrganBuff {
  organ: string;                   // Tên nội tạng (ví dụ: "Phổi (Lungs)", "Tim (Heart)")
  benefit: string;                 // Hiệu ứng buff mang lại
}

interface Ability {
  name: string;                    // Tên kỹ năng tiếng Anh
  nameVi: string;                  // Tên kỹ năng tiếng Việt
  keybind: string;                 // Phím bấm kích hoạt (ví dụ: "Chuột Phải (RMB)")
  staminaCost: string;             // Mức tiêu hao Stamina
  description: string;             // Mô tả chi tiết cách thức hoạt động
  effect: string;                  // Hiệu quả chiến đấu mang lại
}
```

---

## 2. Schema Dinh Dưỡng (`data/nutrients.json`)

```typescript
interface NutrientGuide {
  id: string;                      // Mã định danh nhóm dinh dưỡng
  symbol?: string;                 // Ký hiệu (S, //, ...)
  name: string;                    // Tên đầy đủ
  role?: string;                   // Vai trò sinh học
  carnivoreSources?: string;       // Nguồn thức ăn cho loài ăn thịt
  herbivoreSources?: string;       // Nguồn thức ăn cho loài ăn cỏ
  primaryBuff?: string;            // Bùa lợi chính
  description?: string;            // Mô tả chi tiết
  buffs?: string[];                // Danh sách bùa lợi Perfect Diet 3/3
  penalties?: string;              // Hình phạt khi bị suy dinh dưỡng
}
```

---

## 3. Schema Cơ Chế & Trạng Thái (`data/mechanics.json`)

```typescript
interface MechanicCategory {
  category: string;                // Tên phân loại (ví dụ: "Trạng Thái Bất Lợi", "Cơ Chế Điều Khiển")
  items: MechanicItem[];
}

interface MechanicItem {
  name: string;                    // Tên trạng thái / cơ chế
  nameEn?: string;                 // Tên tiếng Anh
  icon: string;                    // Emoji hoặc icon đại diện
  description: string;             // Mô tả chi tiết
  effects: string;                 // Tác động trong trò chơi
  cure: string;                    // Cách khắc phục hoặc mẹo xử lý
}
```
