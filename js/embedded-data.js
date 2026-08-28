/**
 * THE ISLE WIKI - EMBEDDED DATA FALLBACK
 * Fully functional offline dataset for file:/// browsing
 */

window.EMBEDDED_CREATURES = [
  {
    "id": "deinosuchus",
    "name": "Deinosuchus",
    "vietnameseName": "Cá Sấu Khổng Lồ (Deino)",
    "scientificName": "Deinosuchus rugosus",
    "diet": "carnivore",
    "dietLabelVi": "Ăn thịt / Ăn cá",
    "tier": "apex",
    "tierLabelVi": "Apex (Thống Trị Thủy Vực)",
    "locomotion": "semi-aquatic",
    "locomotionLabelVi": "Lưỡng cư (Dưới nước / Bờ sông)",
    "growthTimeHours": 5.5,
    "growthTimeFormatted": "5 giờ 30 phút",
    "badgeColor": "#06b6d4",
    "accentColor": "#0891b2",
    "overview": "Chúa tể đầm lầy và các dòng sông của Evrima. Deinosuchus sở hữu lực cắn và trọng lượng lớn nhất game khi trưởng thành. Chúng săn mồi theo phong cách phục kích dưới nước, kéo chìm bất kỳ con mồi nào dám lại gần bờ sông để uống nước.",
    "statsMin": {
      "weight": 120,
      "health": 250,
      "biteDamage": 35,
      "sprintSpeed": 28.5,
      "trotSpeed": 14,
      "swimSpeed": 38,
      "stamina": 100,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Rất Thấp",
      "nightVision": "Khá Tốt"
    },
    "statsMax": {
      "weight": 8000,
      "health": 8000,
      "biteDamage": 1150,
      "sprintSpeed": 34.2,
      "trotSpeed": 16.5,
      "swimSpeed": 45,
      "stamina": 140,
      "staminaRegen": "Chậm",
      "fallDamageResistance": "Cực Kém",
      "nightVision": "Rất Tốt (Dưới Nước)"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Đạm Động Vật Lớn",
          "foods": [
            "Thịt Stegosaurus",
            "Thịt Tenontosaurus",
            "Thịt Carnotaurus",
            "Thịt Ceratosaurus"
          ],
          "buffDescription": "+50% Tốc độ lớn, +20% Hồi máu"
        },
        {
          "symbol": "//",
          "name": "Cá & Động Vật Nhỏ",
          "foods": [
            "Cá Lớn (Elite Fish)",
            "Thịt Beipiaosaurus",
            "Thịt Pteranodon",
            "Thịt Hypsilophodon"
          ],
          "buffDescription": "+30% Hồi thể lực, Tăng tầm nhìn ban đêm dưới nước"
        },
        {
          "symbol": "...",
          "name": "Nội Tạng & Con Mồi Bờ Sông",
          "foods": [
            "Phổi & Tim con mồi",
            "Thịt Pachycephalosaurus",
            "Thịt Dryosaurus"
          ],
          "buffDescription": "+25% Kháng vết thương, Tăng tốc độ bơi"
        }
      ],
      "preferredPrey": [
        "Stegosaurus",
        "Tenontosaurus",
        "Carnotaurus",
        "Mọi sinh vật uống nước bờ sông",
        "Cá lớn"
      ],
      "favoriteOrgans": [
        {
          "organ": "Phổi (Lungs)",
          "benefit": "Tăng thêm 40% thời gian nhịn thở dưới nước"
        },
        {
          "organ": "Tim (Heart)",
          "benefit": "Tăng 15% hồi phục thể lực trong 15 phút"
        },
        {
          "organ": "Dạ dày (Stomach)",
          "benefit": "Tăng thời gian duy trì thanh dinh dưỡng"
        }
      ],
      "cannibalism": true,
      "cannibalismNote": "Deinosuchus CÓ THỂ ăn thịt đồng loại mà KHÔNG bị trừng phạt dinh dưỡng. Cá sấu lớn thường xuyên săn cá sấu nhỏ!"
    },
    "abilities": [
      {
        "name": "Water Ambush & Water Lunge",
        "nameVi": "Phục Kích & Lao Đớp Dưới Nước",
        "keybind": "Giữ Chuột Phải (RMB) dưới nước khi nổi gần mặt",
        "staminaCost": "Trung bình",
        "description": "Lao vọt lên khỏi mặt nước với tốc độ cực đại để táp con mồi đứng trên bờ sông hoặc đang bơi.",
        "effect": "Gây sát thương đòn đánh chí mạng và bắt đầu kỹ năng Kéo Chìm nếu trọng lượng đủ lớn."
      },
      {
        "name": "Drown & Thrash (Lockjaw)",
        "nameVi": "Khóa Hàm & Kéo Chìm (Dìm Chết)",
        "keybind": "Chuột Phải (RMB) trúng mục tiêu nhỏ/bằng cân",
        "staminaCost": "Rút Stamina liên tục",
        "description": "Ngậm chặt con mồi trong miệng và kéo xuống vực nước sâu. Con mồi sẽ bị rút cạn oxy và chết ngạt nhanh chóng.",
        "effect": "Không thể thoát nếu con mồi nhẹ hơn Deinosuchus. Con mồi mất oxy liên tục cho đến chết."
      },
      {
        "name": "Bone-Crushing Bite",
        "nameVi": "Cú Cắn Nghiền Xương",
        "keybind": "Chuột Trái (LMB)",
        "staminaCost": "Thấp",
        "description": "Đòn cắn với lực hàm hàng đầu thế giới tiền sử, có khả năng bẻ gãy xương con mồi ngay lập tức.",
        "effect": "Gây sát thương khủng và áp hiệu ứng Gãy Xương (Fracture), làm giảm 60% tốc độ di chuyển của địch."
      }
    ],
    "combatTips": {
      "strengths": [
        "Trọng lượng và lượng máu khổng lồ nhất trò chơi (8 tấn)",
        "Làm chủ tuyệt đối 100% các dòng sông và đầm lầy",
        "Có thể ăn đồng loại tự do mà không bị sốt dinh dưỡng",
        "Khả năng kết liễu một đòn (One-shot) hầu hết các loài nhỏ và vừa khi kéo xuống nước"
      ],
      "weaknesses": [
        "Cực kỳ chậm chạp và vụng về khi lên cạn",
        "Thời gian lớn lâu nhất game (khoảng 5.5 tiếng)",
        "Giai đoạn con non rất dễ bị chính đồng loại lớn hơn ăn thịt",
        "Cần tiêu tốn nhiều nước và thức ăn để duy trì trọng lượng 8 tấn"
      ],
      "huntingGuide": "Ẩn mình dưới mặt nước sẫm màu, dùng ngửi (phím Q) để dò tiếng bước chân con mồi đến uống nước. Canh đúng thời điểm con mồi cúi đầu, dùng RMB lunge phóng lên kéo chìm.",
      "defenseGuide": "Khi ở trên cạn bị Stego hay Cera quấy rối, hãy lùi dần về phía mép nước. Tuyệt đối không giao chiến kéo dài trên cạn nếu không có lợi thế địa hình."
    },
    "image": "./assets/creatures/deinosuchus.png"
  },
  {
    "id": "stegosaurus",
    "name": "Stegosaurus",
    "vietnameseName": "Thằn Lằn Gai Đuôi (Stego)",
    "scientificName": "Stegosaurus armatus",
    "diet": "herbivore",
    "dietLabelVi": "Ăn cỏ (Thuần)",
    "tier": "apex",
    "tierLabelVi": "Apex Ăn Cỏ (Pháo Đài Cạn)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 5,
    "growthTimeFormatted": "5 giờ 00 phút",
    "badgeColor": "#10b981",
    "accentColor": "#059669",
    "overview": "Pháo đài bọc thép không thể cản phá trên cạn. Với cặp gai đuôi thagomizer khổng lồ, Stegosaurus có thể quất gãy xương và làm chảy máu tử vong bất kỳ loài ăn thịt nào dám bén mảng.",
    "statsMin": {
      "weight": 100,
      "health": 300,
      "biteDamage": 30,
      "sprintSpeed": 26,
      "trotSpeed": 15,
      "swimSpeed": 18,
      "stamina": 100,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Thấp",
      "nightVision": "Kém"
    },
    "statsMax": {
      "weight": 6000,
      "health": 6000,
      "biteDamage": 450,
      "sprintSpeed": 31.5,
      "trotSpeed": 18.2,
      "swimSpeed": 20,
      "stamina": 120,
      "staminaRegen": "Trung bình",
      "fallDamageResistance": "Kém",
      "nightVision": "Kém (Dễ bị mù đêm)"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Thực Vật Thân Mộc & Quả",
          "foods": [
            "Cây Dừa Cạn (Sumac)",
            "Bụi Quả Mọng Đỏ",
            "Lá Thông Cổ"
          ],
          "buffDescription": "+50% Tốc độ tăng trưởng, Tăng độ dày lớp giáp"
        },
        {
          "symbol": "//",
          "name": "Rễ Cây & Nấm Rừng",
          "foods": [
            "Củ Dương Xỉ (Fern Root)",
            "Nấm Phát Quang"
          ],
          "buffDescription": "+30% Hồi phục thể lực, Giảm tiêu hao năng lượng"
        },
        {
          "symbol": "...",
          "name": "Dương Xỉ Lớn & Thảo Mộc",
          "foods": [
            "Dương Xỉ Khổng Lồ (Marattia)",
            "Cỏ Nước"
          ],
          "buffDescription": "+25% Hồi máu, Tăng khả năng kháng chảy máu"
        }
      ],
      "preferredPrey": [
        "Dương xỉ Marattia",
        "Cây bụi Sumac",
        "Củ rễ rừng sâu"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Loài ăn cỏ thuần túy, kiếm ăn theo bầy đàn để bảo vệ lẫn nhau."
    },
    "abilities": [
      {
        "name": "Tail Swing (Thagomizer Strike)",
        "nameVi": "Quất Đuôi Gai Trái / Phải",
        "keybind": "Chuột Trái (LMB) hoặc Chuột Phải (RMB)",
        "staminaCost": "Thấp - Trung bình",
        "description": "Vung đuôi gai 4 chấu quét vòng cung cực rộng. Đòn đánh có hitbox chuẩn xác và lực sát thương hủy diệt.",
        "effect": "Gây sát thương vật lý cực cao và áp tối đa Chảy Máu (Bleed) cùng Gãy Xương (Fracture)."
      },
      {
        "name": "Impale / Pin",
        "nameVi": "Đâm Xuyên Đuôi (Ghim Con Mồi)",
        "keybind": "Giữ Chuột Phải khi quay đuôi trúng đích",
        "staminaCost": "Cao",
        "description": "Ghim thẳng gai đuôi vào cơ thể kẻ săn mồi (Carno, Cera, Omni), giữ chặt chúng tại chỗ.",
        "effect": "Con mồi bị choáng và nhận sát thương chảy máu liên tục đến khi thoát ra."
      },
      {
        "name": "Plate Defense",
        "nameVi": "Giáp Phiến Lưng",
        "keybind": "Bị động (Passive)",
        "staminaCost": "0",
        "description": "Hàng phiến sừng trên sống lưng giúp giảm 40% sát thương từ các đòn tấn công từ phía trên hoặc phía sau lưng.",
        "effect": "Giảm sát thương và làm bật kẻ vồ (Omni pounce)."
      }
    ],
    "combatTips": {
      "strengths": [
        "Sát thương quất đuôi cực lớn, có thể one-shot hoặc 2-hit hầu hết thú săn mồi",
        "Lượng máu và lớp giáp 6 tấn thuộc hàng top đầu game",
        "Hitbox đuôi phòng thủ 180 độ phía sau rất an toàn"
      ],
      "weaknesses": [
        "Tầm nhìn ban đêm rất kém, dễ bị bầy Troodon hoặc Dilo bao vây trong bóng tối",
        "Tốc độ di chuyển chậm, không thể đuổi bắt ai",
        "Phần đầu và cổ là điểm yếu chí mạng nếu bị kẻ thù tấn công trực diện"
      ],
      "huntingGuide": "Là loài ăn cỏ, mục tiêu của bạn là kiếm đủ 3 loại thức ăn dinh dưỡng (S, //, ...) để tăng trưởng đạt 100%. Luôn di chuyển ở khu vực thoáng đãng.",
      "defenseGuide": "Khi bị thú săn mồi bao vây, hãy tìm vách đá hoặc cây to để che phần đầu, quay đuôi ra ngoài và chờ đợi đối phương mắc sai lầm lao vào phạm vi đuôi."
    },
    "image": "./assets/creatures/stegosaurus.png"
  },
  {
    "id": "carnotaurus",
    "name": "Carnotaurus",
    "vietnameseName": "Bò Tót Săn Mồi (Carno)",
    "scientificName": "Carnotaurus sastrei",
    "diet": "carnivore",
    "dietLabelVi": "Ăn thịt (Thuần)",
    "tier": "large",
    "tierLabelVi": "Thú Săn Lớn (Tốc Độ)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 3,
    "growthTimeFormatted": "3 giờ 00 phút",
    "badgeColor": "#ef4444",
    "accentColor": "#dc2626",
    "overview": "Tên lửa mặt đất của Evrima. Carnotaurus sở hữu tốc độ chạy nước rút nhanh nhất trong số các loài thú săn mồi cỡ lớn, kết hợp đòn húc đầu cực mạnh có thể hất văng và làm ngã gục con mồi đang bỏ chạy.",
    "statsMin": {
      "weight": 80,
      "health": 200,
      "biteDamage": 25,
      "sprintSpeed": 38,
      "trotSpeed": 18,
      "swimSpeed": 14,
      "stamina": 120,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Khá"
    },
    "statsMax": {
      "weight": 2200,
      "health": 2200,
      "biteDamage": 240,
      "sprintSpeed": 54,
      "trotSpeed": 23.5,
      "swimSpeed": 16,
      "stamina": 160,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Khá"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Thịt Thú Ăn Cỏ Nhanh",
          "foods": [
            "Thịt Gallimimus",
            "Thịt Dryosaurus",
            "Thịt Hypsilophodon"
          ],
          "buffDescription": "+50% Tốc độ tăng trưởng, Tăng tốc độ tối đa"
        },
        {
          "symbol": "//",
          "name": "Thịt Thú Cỡ Vừa",
          "foods": [
            "Thịt Tenontosaurus",
            "Thịt Pachycephalosaurus",
            "Thịt Diabloceratops non"
          ],
          "buffDescription": "+30% Thể lực tối đa, Giảm tiêu hao thể lực khi húc"
        },
        {
          "symbol": "...",
          "name": "Động Vật Cạnh Tranh",
          "foods": [
            "Thịt Ceratosaurus non",
            "Thịt Omniraptor",
            "Thịt Herrerasaurus"
          ],
          "buffDescription": "+25% Hồi máu, Kháng gãy xương"
        }
      ],
      "preferredPrey": [
        "Tenontosaurus",
        "Gallimimus",
        "Pachycephalosaurus",
        "Dryosaurus"
      ],
      "favoriteOrgans": [
        {
          "organ": "Tim (Heart)",
          "benefit": "Tăng 20% khả năng hồi phục Stamina"
        },
        {
          "organ": "Phổi (Lungs)",
          "benefit": "Tăng thời gian duy trì trạng thái Húc (Charge)"
        }
      ],
      "cannibalism": false,
      "cannibalismNote": "Ăn thịt đồng loại sẽ bị co thắt dạ dày và giảm tốc độ tăng trưởng."
    },
    "abilities": [
      {
        "name": "Horn Charge (Bull Rush)",
        "nameVi": "Cú Húc Sừng Tốc Độ Cao",
        "keybind": "Giữ Chuột Phải (RMB) khi đang Sprint",
        "staminaCost": "Tiêu hao Stamina liên tục",
        "description": "Cúi đầu tăng tốc vượt ngưỡng tối đa và húc thẳng vào mục tiêu với động lượng khổng lồ.",
        "effect": "Hất ngã (Knockdown) và gây choáng con mồi nhẹ hơn, gây chấn thương nội tạng và sát thương va đập cực nặng."
      },
      {
        "name": "Precision Bite",
        "nameVi": "Cú Cắn Chính Xác",
        "keybind": "Chuột Trái (LMB)",
        "staminaCost": "Thấp",
        "description": "Đòn cắn nhanh dùng để cắn tỉa con mồi khi đang rượt đuổi ở tốc độ cao.",
        "effect": "Gây sát thương cơ bản và tích lũy nhẹ Chảy Máu."
      }
    ],
    "combatTips": {
      "strengths": [
        "Tốc độ chạy nước rút kinh hoàng (54 km/h), có thể bắt kịp hầu hết mọi con mồi",
        "Đòn húc Charge có thể làm ngã gục đối phương để bồi thêm sát thương",
        "Thời gian trưởng thành tương đối nhanh (3 tiếng)"
      ],
      "weaknesses": [
        "Bán kính quay xe (Turn radius) rất rộng khi đang chạy nhanh",
        "Lực cắn không quá cao so với Ceratosaurus cùng hạng cân",
        "Rất dễ bị chấn thương sọ nếu húc trượt vào cây hoặc tảng đá"
      ],
      "huntingGuide": "Lấy khoảng cách lấy đà từ xa, bật Charge căn hướng chạy của con mồi để húc ngã. Khi con mồi nằm sàn, lao vào cắn liên tục trước khi chúng kịp đứng dậy.",
      "defenseGuide": "Nếu gặp Stego hay Deino, đừng dại dột đối đầu trực diện. Sử dụng tốc độ vượt trội để rút lui an toàn."
    },
    "image": "./assets/creatures/carnotaurus.png"
  },
  {
    "id": "ceratosaurus",
    "name": "Ceratosaurus",
    "vietnameseName": "Khủng Long Mũi Sừng (Cera)",
    "scientificName": "Ceratosaurus nasicornis",
    "diet": "carnivore",
    "dietLabelVi": "Ăn thịt / Xác thối",
    "tier": "large",
    "tierLabelVi": "Thú Săn Lực Chiến (Bully)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 3,
    "growthTimeFormatted": "3 giờ 00 phút",
    "badgeColor": "#f59e0b",
    "accentColor": "#d97706",
    "overview": "Kẻ thống trị bãi xác thối. Ceratosaurus có thân hình cơ bắp, lực cắn mạnh mẽ và sở hữu cơ chế độc nhất: nhận buff sức mạnh và giáp cực lớn khi đứng gần xác chết (Corpse Buff), đồng thời có thể khiến đối thủ nôn mửa bằng vết cắn vi khuẩn.",
    "statsMin": {
      "weight": 85,
      "health": 220,
      "biteDamage": 30,
      "sprintSpeed": 34,
      "trotSpeed": 17,
      "swimSpeed": 15,
      "stamina": 110,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Tốt"
    },
    "statsMax": {
      "weight": 2400,
      "health": 2400,
      "biteDamage": 320,
      "sprintSpeed": 42.5,
      "trotSpeed": 20,
      "swimSpeed": 18,
      "stamina": 140,
      "staminaRegen": "Khá",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Rất Tốt"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Xác Thối & Thịt Phân Hủy",
          "foods": [
            "Mọi loại xác thối rữa",
            "Thịt Stegosaurus thối",
            "Thịt Tenontosaurus thối"
          ],
          "buffDescription": "+50% Tốc độ tăng trưởng, Tăng 30% hiệu lực Corpse Buff"
        },
        {
          "symbol": "//",
          "name": "Động Vật Có Giáp / Độc",
          "foods": [
            "Thịt Pachycephalosaurus",
            "Thịt Diabloceratops",
            "Thịt Troodon"
          ],
          "buffDescription": "+30% Hồi máu, Kháng nọc độc & buồn nôn"
        },
        {
          "symbol": "...",
          "name": "Thú Săn Thịt Cạnh Tranh",
          "foods": [
            "Thịt Carnotaurus",
            "Thịt Omniraptor",
            "Thịt Dilophosaurus"
          ],
          "buffDescription": "+25% Thể lực tối đa, Tăng lực cắn vi khuẩn"
        }
      ],
      "preferredPrey": [
        "Xác chết tự do trên bản đồ",
        "Tenontosaurus",
        "Carnotaurus",
        "Pachycephalosaurus"
      ],
      "favoriteOrgans": [
        {
          "organ": "Dạ dày (Stomach)",
          "benefit": "Miễn nhiễm 100% ngộ độc thực phẩm"
        },
        {
          "organ": "Gan (Liver)",
          "benefit": "Tăng 25% khả năng hồi máu vết thương"
        }
      ],
      "cannibalism": true,
      "cannibalismNote": "Có thể ăn xác đồng loại thoải mái mà không bị bất kỳ hình phạt nào."
    },
    "abilities": [
      {
        "name": "Corpse Bully Buff",
        "nameVi": "Sức Mạnh Bãi Xác (Bị Động)",
        "keybind": "Bị động khi đứng gần xác chết",
        "staminaCost": "0",
        "description": "Khi đứng gần bất kỳ xác chết nào, Ceratosaurus nhận được lớp phòng thủ và sát thương tăng thêm.",
        "effect": "Tăng tới 35% kháng sát thương và tăng lực cắn, gầm cảnh báo đuổi đối thủ đi."
      },
      {
        "name": "Septic Bacterial Bite",
        "nameVi": "Cú Cắn Nhiễm Khuẩn (Buồn Nôn)",
        "keybind": "Chuột Phải (RMB) hoặc Alt+LMB",
        "staminaCost": "Trung bình",
        "description": "Ngoạm sâu răng chứa đầy vi khuẩn xác thối vào người đối thủ.",
        "effect": "Tích tụ thanh nôn mửa (Bacterio-toxin). Khi đầy, đối thủ sẽ nôn mửa, tụt sạch thức ăn và không thể chạy sprint."
      }
    ],
    "combatTips": {
      "strengths": [
        "Lực cắn và lượng máu vượt trội hơn Carnotaurus ở cùng hạng cân",
        "Gần như bất khả chiến bại khi đứng bảo vệ xác chết (Corpse Buff)",
        "Có thể ăn xác thối không bị bệnh và ăn được thịt đồng loại",
        "Tầm nhìn ban đêm rất tốt"
      ],
      "weaknesses": [
        "Tốc độ chạy nước rút (42.5 km/h) chậm hơn Carnotaurus và Galli",
        "Dễ bị Stego hạ gục nếu không cẩn thận khi tiếp cận"
      ],
      "huntingGuide": "Dùng mùi (Q) để tìm các bãi xác thối bỏ lại sau các trận chiến. Chiếm lĩnh bãi xác để nhận buff và phục kích kẻ đói mò tới.",
      "defenseGuide": "Nếu bị Carno hay bầy Omni tấn công, hãy kéo trận đấu về gần một cái xác chết để kích hoạt Corpse Buff, lúc này chỉ số giáp và lực cắn của bạn sẽ tăng vọt."
    },
    "image": "./assets/creatures/ceratosaurus.png"
  },
  {
    "id": "omniraptor",
    "name": "Omniraptor",
    "vietnameseName": "Raptor Săn Bầy (Omni / Utah)",
    "scientificName": "Omniraptor utahensis",
    "diet": "carnivore",
    "dietLabelVi": "Ăn thịt (Săn Bầy)",
    "tier": "medium",
    "tierLabelVi": "Thú Săn Cỡ Vừa (Phối Hợp)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 1.8,
    "growthTimeFormatted": "1 giờ 48 phút",
    "badgeColor": "#ec4899",
    "accentColor": "#db2777",
    "overview": "Sát thủ bầy đàn khét tiếng. Omniraptor có độ linh hoạt phi thường, khả năng nhảy cao leo trèo và kỹ năng Vồ (Pounce) bám chặt lên thân các con mồi khổng lồ để xé toạc lớp da bằng cặp móng vuốt hình lưỡi liềm.",
    "statsMin": {
      "weight": 35,
      "health": 120,
      "biteDamage": 18,
      "sprintSpeed": 36,
      "trotSpeed": 18,
      "swimSpeed": 14,
      "stamina": 140,
      "staminaRegen": "Rất Nhanh",
      "fallDamageResistance": "Cao",
      "nightVision": "Rất Tốt"
    },
    "statsMax": {
      "weight": 700,
      "health": 700,
      "biteDamage": 120,
      "sprintSpeed": 48.2,
      "trotSpeed": 22,
      "swimSpeed": 16,
      "stamina": 180,
      "staminaRegen": "Rất Nhanh",
      "fallDamageResistance": "Cao",
      "nightVision": "Tuyệt Vời"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Con Mồi Cỡ Lớn (Săn Bầy)",
          "foods": [
            "Thịt Tenontosaurus",
            "Thịt Stegosaurus",
            "Thịt Maiasaura"
          ],
          "buffDescription": "+50% Tốc độ tăng trưởng, Tăng thời gian bám Pounce"
        },
        {
          "symbol": "//",
          "name": "Thú Nhỏ Nhanh Nhẹn",
          "foods": [
            "Thịt Dryosaurus",
            "Thịt Hypsilophodon",
            "Thịt Gallimimus"
          ],
          "buffDescription": "+30% Hồi phục Stamina, Tăng độ cao bật nhảy"
        },
        {
          "symbol": "...",
          "name": "Thú Bay & Lưỡng Cư",
          "foods": [
            "Thịt Pteranodon",
            "Thịt Beipiaosaurus",
            "Thịt Herrerasaurus"
          ],
          "buffDescription": "+25% Hồi máu, Tăng sát thương xé rách"
        }
      ],
      "preferredPrey": [
        "Tenontosaurus",
        "Diabloceratops",
        "Pachycephalosaurus",
        "Gallimimus"
      ],
      "favoriteOrgans": [
        {
          "organ": "Tim (Heart)",
          "benefit": "Tăng tốc độ hồi Stamina khi bám vồ"
        },
        {
          "organ": "Phổi (Lungs)",
          "benefit": "Giảm tiêu hao Stamina khi chạy nhảy"
        }
      ],
      "cannibalism": false,
      "cannibalismNote": "Không nên ăn đồng loại để bảo tồn bầy đàn."
    },
    "abilities": [
      {
        "name": "Pounce & Pin",
        "nameVi": "Cú Nhảy Vồ & Bám Thân Xé Xác",
        "keybind": "Giữ Chuột Phải (RMB) để nhắm -> Thả ra để vồ",
        "staminaCost": "Tiêu hao Stamina liên tục khi bám",
        "description": "Phóng mình lên không trung bám chặt vào sườn hoặc mông con mồi lớn, liên tục cào xé.",
        "effect": "Gây sát thương Chảy Máu (Bleed) cực nặng theo thời gian. Với con mồi nhỏ hơn, sẽ đè bẹp xuống đất (Pin)."
      },
      {
        "name": "High Jump & Ledge Perch",
        "nameVi": "Bật Nhảy Cao & Leo Vách Đá",
        "keybind": "Phím Space",
        "staminaCost": "Thấp",
        "description": "Bật nhảy lên những tảng đá cao hoặc gờ tường mà các loài khủng long to lớn không thể với tới.",
        "effect": "Vị trí quan sát chiến thuật và nghỉ ngơi an toàn."
      }
    ],
    "combatTips": {
      "strengths": [
        "Kỹ năng Pounce bám dính cực kỳ khó chịu",
        "Độ cơ động và tốc độ hồi phục thể lực hàng đầu game",
        "Cực mạnh khi đi theo bầy từ 3-6 con, có thể hạ gục cả Stego hay Deino lạc cạn",
        "Thời gian nuôi lớn cực nhanh (chưa tới 2 tiếng)"
      ],
      "weaknesses": [
        "Máu giấy (700 HP), có thể chết ngay nếu trúng 1 đòn quất đuôi của Stego",
        "Nếu hết Stamina khi đang bám Pounce sẽ rơi xuống đất và bị choáng ngã"
      ],
      "huntingGuide": "Đi theo bầy, phân công 1 con nhử đòn, các con còn lại lần lượt Pounce từ phía sau. Nhảy ra trước khi hết Stamina để hồi phục và cho đồng đội khác vào thay phiên.",
      "defenseGuide": "Tận dụng tảng đá cao nhảy lên trốn thoát khi bị Carno hay Cera truy đuổi."
    },
    "image": "./assets/creatures/omniraptor.png"
  },
  {
    "id": "tenontosaurus",
    "name": "Tenontosaurus",
    "vietnameseName": "Khủng Long Đuôi Roi (Teno)",
    "scientificName": "Tenontosaurus tilletti",
    "diet": "herbivore",
    "dietLabelVi": "Ăn cỏ (Võ Sĩ Cận Chiến)",
    "tier": "medium",
    "tierLabelVi": "Ăn Cỏ Cỡ Vừa (Phản Công)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 2.5,
    "growthTimeFormatted": "2 giờ 30 phút",
    "badgeColor": "#10b981",
    "accentColor": "#047857",
    "overview": "Võ sĩ cận chiến thực thụ của giới ăn cỏ. Tenontosaurus sở hữu bộ chiêu thức phòng thủ toàn diện từ cước đạp trước, quất đuôi diện rộng cho đến cú vung đuôi xoay người đánh choáng khiến bất kỳ kẻ săn mồi nào cũng phải dè chừng.",
    "statsMin": {
      "weight": 60,
      "health": 180,
      "biteDamage": 20,
      "sprintSpeed": 33,
      "trotSpeed": 16,
      "swimSpeed": 16,
      "stamina": 120,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Trung bình"
    },
    "statsMax": {
      "weight": 1800,
      "health": 1800,
      "biteDamage": 180,
      "sprintSpeed": 41.5,
      "trotSpeed": 19.5,
      "swimSpeed": 18,
      "stamina": 150,
      "staminaRegen": "Rất Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Trung bình"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Cây Bụi Dinh Dưỡng Cao",
          "foods": [
            "Cây Rừng Ngọt",
            "Quả Dại Sơn Cước"
          ],
          "buffDescription": "+50% Tốc độ tăng trưởng, Tăng lực đòn đuôi"
        },
        {
          "symbol": "//",
          "name": "Củ Dương Xỉ & Rễ Ngầm",
          "foods": [
            "Củ Dương Xỉ Đầm Lầy",
            "Nấm Thảo Mộc"
          ],
          "buffDescription": "+30% Hồi phục thể lực, Giảm tiêu hao đòn đánh"
        },
        {
          "symbol": "...",
          "name": "Thảo Mộc Rừng Rậm",
          "foods": [
            "Dương Xỉ Nhỏ",
            "Lá Mềm Thung Lũng"
          ],
          "buffDescription": "+25% Hồi máu, Giảm thời gian choáng"
        }
      ],
      "preferredPrey": [
        "Dương xỉ",
        "Bụi rậm thung lũng"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Ăn cỏ ôn hòa, kết hợp sống chung với Stego, Dryo và Pachy."
    },
    "abilities": [
      {
        "name": "Tail Whip & Tail Slam",
        "nameVi": "Quất Roi Đuôi & Quật Đuôi Đất",
        "keybind": "Chuột Phải (RMB) / Alt + Chuột Phải",
        "staminaCost": "Trung bình",
        "description": "Vung chiếc đuôi dài như ngọn roi quất mạnh vào kẻ thù phía sau hoặc quật mạnh xuống đất.",
        "effect": "Gây sát thương nặng, làm gãy xương (Fracture) và đẩy văng hoặc đánh rớt Raptor đang bám Pounce."
      },
      {
        "name": "Rear Claw Kick",
        "nameVi": "Cú Đạp Móng Trước / Sau",
        "keybind": "Alt + Chuột Trái (Alt + LMB)",
        "staminaCost": "Thấp",
        "description": "Nhổm dậy dậm mạnh hai chân trước hoặc tung cước đạp chân sau đầy uy lực.",
        "effect": "Gây sát thương trực diện và làm choáng kẻ địch tấn công từ phía trước."
      }
    ],
    "combatTips": {
      "strengths": [
        "Bộ chiêu thức cận chiến cực kỳ đa dạng công thủ toàn diện",
        "Khả năng hất văng bầy Raptor đang bám rất hiệu quả",
        "Tốc độ hồi Stamina thuộc dạng nhanh nhất nhóm ăn cỏ cỡ vừa"
      ],
      "weaknesses": [
        "Không thể đua tốc độ đường dài với Carnotaurus",
        "Trọng lượng nhẹ hơn Ceratosaurus và Stegosaurus"
      ],
      "huntingGuide": "Di chuyển theo nhóm ăn cỏ, tích đủ dinh dưỡng để đạt kích thước 1800kg.",
      "defenseGuide": "Khi bị Raptor pounce bám vào sườn, lập tức bấm quất đuôi (RMB) hoặc dậm chân để quật ngã chúng xuống đất, sau đó bồi thêm cú đập đuôi kết liễu."
    },
    "image": "./assets/creatures/tenontosaurus.png"
  },
  {
    "id": "dilophosaurus",
    "name": "Dilophosaurus",
    "vietnameseName": "Thằn Lằn Mào Kép (Dilo)",
    "scientificName": "Dilophosaurus wetherilli",
    "diet": "carnivore",
    "dietLabelVi": "Ăn thịt (Ảo Giác Đêm)",
    "tier": "medium",
    "tierLabelVi": "Thú Săn Đêm (Độc Ảo Giác)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 2.2,
    "growthTimeFormatted": "2 giờ 12 phút",
    "badgeColor": "#8b5cf6",
    "accentColor": "#7c3aed",
    "overview": "Cơn ác mộng trong màn đêm. Dilophosaurus sở hữu tầm nhìn đêm vô địch cùng độc tố gây ảo giác (Hallucination Venom). Khi bị cắn trúng, nạn nhân sẽ nghe thấy tiếng gầm giả và nhìn thấy bóng ma Dilo tấn công từ mọi hướng.",
    "statsMin": {
      "weight": 40,
      "health": 130,
      "biteDamage": 20,
      "sprintSpeed": 35,
      "trotSpeed": 17,
      "swimSpeed": 14,
      "stamina": 130,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Tuyệt Đỉnh (Sáng như ban ngày)"
    },
    "statsMax": {
      "weight": 1100,
      "health": 1100,
      "biteDamage": 150,
      "sprintSpeed": 44,
      "trotSpeed": 20,
      "swimSpeed": 16,
      "stamina": 160,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Tuyệt Đỉnh (Vô địch ban đêm)"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Thú Ăn Cỏ Ban Đêm",
          "foods": [
            "Thịt Tenontosaurus",
            "Thịt Pachycephalosaurus",
            "Thịt Dryosaurus"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng hiệu lực nọc độc ảo giác"
        },
        {
          "symbol": "//",
          "name": "Thú Nhỏ & Thú Ăn Thịt Non",
          "foods": [
            "Thịt Hypsilophodon",
            "Thịt Ceratosaurus non",
            "Thịt Troodon"
          ],
          "buffDescription": "+30% Hồi phục Stamina, Tăng độ nét tầm nhìn đêm"
        },
        {
          "symbol": "...",
          "name": "Thú Bờ Nước & Bò Sát",
          "foods": [
            "Thịt Beipiaosaurus",
            "Thịt Pteranodon"
          ],
          "buffDescription": "+25% Hồi máu, Tăng thời gian duy trì bóng ma"
        }
      ],
      "preferredPrey": [
        "Tenontosaurus",
        "Pachycephalosaurus",
        "Mọi con mồi mù đêm"
      ],
      "favoriteOrgans": [
        {
          "organ": "Mắt (Eyes)",
          "benefit": "Tăng cường độ sáng ban đêm lên mức tối đa"
        },
        {
          "organ": "Tuyến Độc (Venom Gland)",
          "benefit": "Tăng 50% tốc độ tích tụ độc tố khi cắn"
        }
      ],
      "cannibalism": false,
      "cannibalismNote": "Không nên ăn thịt đồng loại."
    },
    "abilities": [
      {
        "name": "Hallucination Venom Bite",
        "nameVi": "Cú Cắn Độc Ảo Giác",
        "keybind": "Chuột Phải (RMB)",
        "staminaCost": "Trung bình",
        "description": "Ngoạm sâu răng tiêm nọc độc thần kinh gây ảo giác vào cơ thể con mồi.",
        "effect": "Tích tụ nồng độ độc tố. Khi đạt ngưỡng, con mồi nhìn thấy hàng loạt bóng ma Dilo giả tấn công và làm nhiễu loạn âm thanh định vị."
      },
      {
        "name": "Whisper Call / Ghost Stalk",
        "nameVi": "Tiếng Rít Ma Quái & Rình Mồi Đêm",
        "keybind": "Phím số 2 (Friendly / Threat call đêm)",
        "staminaCost": "0",
        "description": "Phát ra âm thanh thì thầm ma mị khiến con mồi đang bị nhiễm độc hoảng loạn tột độ.",
        "effect": "Đánh lừa hướng phán đoán của nạn nhân."
      }
    ],
    "combatTips": {
      "strengths": [
        "Lợi thế tuyệt đối trong ban đêm khi con mồi không nhìn thấy gì",
        "Cơ chế độc ảo giác cực kỳ ức chế tâm lý kẻ địch",
        "Tốc độ chạy tốt và sát thương cắn khá"
      ],
      "weaknesses": [
        "Vào ban ngày bị giảm bớt lợi thế bất ngờ",
        "Máu ở mức trung bình, không chịu được đòn nặng của Cera hay Carno"
      ],
      "huntingGuide": "Chờ trời tối, áp sát con mồi từ phía sau, cắn 1-2 phát RMB tiêm độc rồi lùi lại giữ khoảng cách. Khi con mồi bị ảo giác hoảng loạn quay cuồng, lao vào kết liễu.",
      "defenseGuide": "Ban ngày tránh giao chiến trực diện, ẩn nấp trong bụi rậm dày và chờ màn đêm buông xuống."
    },
    "image": "./assets/creatures/dilophosaurus.png"
  },
  {
    "id": "herrerasaurus",
    "name": "Herrerasaurus",
    "vietnameseName": "Sát Thủ Ngọn Cây (Herrera)",
    "scientificName": "Herrerasaurus ischigualastensis",
    "diet": "carnivore",
    "dietLabelVi": "Ăn thịt (Sát Thủ Trên Cây)",
    "tier": "small",
    "tierLabelVi": "Thú Săn Nhỏ (Leo Cây & Thả Mình)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Leo trèo (Ngọn Cây / Vách Đá)",
    "growthTimeHours": 1.5,
    "growthTimeFormatted": "1 giờ 30 phút",
    "badgeColor": "#f97316",
    "accentColor": "#ea580c",
    "overview": "Bậc thầy ngụy trang và phục kích từ trên cao. Herrerasaurus có khả năng trèo lên thân cây cổ thụ cao vút, di chuyển nhẹ nhàng giữa các cành cây và thả mình lao thẳng xuống đầu con mồi bên dưới với sát thương tỷ lệ theo độ cao.",
    "statsMin": {
      "weight": 25,
      "health": 90,
      "biteDamage": 15,
      "sprintSpeed": 35,
      "trotSpeed": 17,
      "swimSpeed": 13,
      "stamina": 130,
      "staminaRegen": "Rất Nhanh",
      "fallDamageResistance": "Cực Cao",
      "nightVision": "Rất Tốt"
    },
    "statsMax": {
      "weight": 450,
      "health": 450,
      "biteDamage": 85,
      "sprintSpeed": 45,
      "trotSpeed": 21,
      "swimSpeed": 15,
      "stamina": 170,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Tuyệt Đối (Giảm sát thương rơi)",
      "nightVision": "Rất Tốt"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Thú Nhỏ Đi Ngang Gốc Cây",
          "foods": [
            "Thịt Dryosaurus",
            "Thịt Hypsilophodon",
            "Thịt Beipiaosaurus"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng tốc độ leo trèo"
        },
        {
          "symbol": "//",
          "name": "Thú Bay & Bò Sát",
          "foods": [
            "Thịt Pteranodon",
            "Thịt Troodon",
            "Cá Nhỏ"
          ],
          "buffDescription": "+30% Hồi phục Stamina, Tăng sát thương thả rơi"
        },
        {
          "symbol": "...",
          "name": "Con Non Của Các Loài Lớn",
          "foods": [
            "Thịt Tenonto non",
            "Thịt Carno non",
            "Thịt Cera non"
          ],
          "buffDescription": "+25% Hồi máu, Giảm tiêu hao Stamina khi leo"
        }
      ],
      "preferredPrey": [
        "Pteranodon",
        "Dryosaurus",
        "Hypsilophodon",
        "Mọi con non đi lạc dưới tán cây"
      ],
      "favoriteOrgans": [
        {
          "organ": "Não (Brain)",
          "benefit": "Tăng độ chính xác khi ngắm đòn thả mình Drop Attack"
        }
      ],
      "cannibalism": false,
      "cannibalismNote": "Không nên ăn đồng loại."
    },
    "abilities": [
      {
        "name": "Tree Climbing & Branch Walk",
        "nameVi": "Leo Trèo Thân Cây & Đi Trên Cành",
        "keybind": "Nhảy vào thân cây (Space) -> Giữ Shift để trèo",
        "staminaCost": "Thấp",
        "description": "Bám móng vuốt vào thân cây đứng và trèo thoăn thoắt lên đỉnh ngọn cây ẩn nấp.",
        "effect": "Không thể bị tấn công bởi các loài thú mặt đất không biết leo trèo."
      },
      {
        "name": "Drop Attack (Death From Above)",
        "nameVi": "Đòn Rơi Tử Thần Từ Ngọn Cây",
        "keybind": "Giữ Chuột Phải (RMB) ngắm hồng tâm -> Thả ra khi ở trên cành cây cao",
        "staminaCost": "Trung bình",
        "description": "Lao mình từ trên cành cây cao cắm thẳng móng vuốt và trọng lực xuống con mồi bên dưới.",
        "effect": "Sát thương nhân theo độ cao rơi! Có thể one-shot hạ gục ngay lập tức Carno, Cera non hoặc Raptor."
      }
    ],
    "combatTips": {
      "strengths": [
        "Vị trí an toàn tuyệt đối trên ngọn cây",
        "Sát thương Drop Attack cực kỳ khủng khiếp nếu nhảy từ độ cao lý tưởng",
        "Lớn rất nhanh (chỉ 1.5 tiếng)"
      ],
      "weaknesses": [
        "Máu rất thấp khi ở dưới đất (450 HP)",
        "Nếu thả mình trượt con mồi sẽ bị tiếp đất vụng về và dễ bị phản công"
      ],
      "huntingGuide": "Chọn những cây to nằm cạnh lối mòn hoặc nguồn nước. Leo lên cành cây kiên nhẫn rình mồi. Khi con mồi dừng lại ăn hoặc nghỉ, ngắm kỹ hồng tâm và bấm thả đòn Drop Attack.",
      "defenseGuide": "Khi bị truy đuổi dưới đất, nhanh chóng tìm cây gần nhất và nhảy bám lên thân cây thoát thân."
    },
    "image": "./assets/creatures/herrerasaurus.png"
  },
  {
    "id": "pteranodon",
    "name": "Pteranodon",
    "vietnameseName": "Dực Long Bầu Trời (Ptera)",
    "scientificName": "Pteranodon longiceps",
    "diet": "piscivore",
    "dietLabelVi": "Ăn cá (Bầu Trời)",
    "tier": "small",
    "tierLabelVi": "Chúa Tể Không Gian (Bay Lượn)",
    "locomotion": "aerial",
    "locomotionLabelVi": "Không trung (Bay lượn)",
    "growthTimeHours": 1.2,
    "growthTimeFormatted": "1 giờ 12 phút",
    "badgeColor": "#38bdf8",
    "accentColor": "#0284c7",
    "overview": "Loài duy nhất làm chủ bầu trời Evrima. Pteranodon có thể cất cánh bay lượn trên mây, lướt theo luồng gió để tiết kiệm thể lực và sà xuống mặt nước bắt cá hoặc cướp thức ăn của các loài khác.",
    "statsMin": {
      "weight": 15,
      "health": 60,
      "biteDamage": 10,
      "sprintSpeed": 30,
      "trotSpeed": 14,
      "swimSpeed": 12,
      "stamina": 150,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Tuyệt Đối (Mở cánh)",
      "nightVision": "Khá"
    },
    "statsMax": {
      "weight": 250,
      "health": 250,
      "biteDamage": 50,
      "sprintSpeed": 40,
      "trotSpeed": 18,
      "swimSpeed": 14,
      "stamina": 200,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Tuyệt Đối",
      "nightVision": "Khá"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Cá Tươi & Cá Lớn",
          "foods": [
            "Cá Tươi Bắt Dưới Sông (Fish)",
            "Cá Tầm Lớn"
          ],
          "buffDescription": "+50% Tốc độ tăng trưởng, Tăng tốc độ bay lượn"
        },
        {
          "symbol": "//",
          "name": "Động Vật Nhỏ & Thằn Lằn",
          "foods": [
            "Thịt Hypsilophodon",
            "Thịt Rùa/Cua",
            "Cóc Nhỏ"
          ],
          "buffDescription": "+30% Thể lực tối đa, Giảm tiêu hao Stamina khi bay"
        },
        {
          "symbol": "...",
          "name": "Xác Thức Ăn Thừa",
          "foods": [
            "Mẩu thịt thừa rơi vãi",
            "Thịt Beipiaosaurus"
          ],
          "buffDescription": "+25% Hồi máu, Tăng khả năng nhịn đói"
        }
      ],
      "preferredPrey": [
        "Cá sông biển",
        "Hypsilophodon",
        "Mẩu thịt vụn trên vách núi"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Không nên ăn thịt đồng loại."
    },
    "abilities": [
      {
        "name": "Flight & Gliding",
        "nameVi": "Cất Cánh & Bay Lượn Lướt Gió",
        "keybind": "Giữ Space khi đang chạy hoặc thả mình từ vách núi",
        "staminaCost": "Tiêu hao khi đập cánh, 0 tốn khi lướt gió (Glide)",
        "description": "Vỗ cánh bay lên không trung. Khi đạt độ cao, thả phím để lướt gió hoàn toàn không tốn thể lực.",
        "effect": "Di chuyển tự do khắp bản đồ mà không sợ chướng ngại vật mặt đất."
      },
      {
        "name": "Skim Fishing",
        "nameVi": "Lướt Mặt Nước Săn Cá",
        "keybind": "Bay sát mặt nước -> Giữ Chuột Phải (RMB)",
        "staminaCost": "Thấp",
        "description": "Hạ mỏ dài lướt trên mặt nước sông để xúc cá tươi đang bơi.",
        "effect": "Bắt cá an toàn mà không cần phải lặn xuống nước."
      }
    ],
    "combatTips": {
      "strengths": [
        "Tự do bay lượn, bỏ qua mọi địa hình đồi núi sông suối",
        "Thời gian lớn nhanh nhất game (khoảng 1 tiếng 10 phút)",
        "Dễ dàng tìm thức ăn cá ở mọi con sông"
      ],
      "weaknesses": [
        "Lượng máu cực kỳ ít ỏi (250 HP), rất mỏng manh",
        "Dễ bị Deinosuchus phóng lên đớp khi sà xuống bắt cá",
        "Dễ bị Herrerasaurus vồ nếu đậu trên cành cây thấp"
      ],
      "huntingGuide": "Bay cao quan sát đàn cá dưới sông, lướt mỏ RMB để gắp cá rồi bay lên mỏm đá cao thưởng thức.",
      "defenseGuide": "Luôn quan sát mặt nước trước khi bắt cá để tránh Deino mai phục. Nếu bị thương, bay thẳng lên đỉnh núi cao nhất để hồi phục."
    },
    "image": "./assets/creatures/pteranodon.png"
  },
  {
    "id": "troodon",
    "name": "Troodon",
    "vietnameseName": "Thằn Lằn Độc Răng Nhọn (Troodon)",
    "scientificName": "Troodon formosus",
    "diet": "carnivore",
    "dietLabelVi": "Ăn thịt (Kịch Độc Săn Bầy)",
    "tier": "small",
    "tierLabelVi": "Sát Thủ Siêu Nhỏ (Độc Tố)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 0.8,
    "growthTimeFormatted": "50 phút",
    "badgeColor": "#a855f7",
    "accentColor": "#9333ea",
    "overview": "Loài khủng long nhỏ nhất nhưng độc ác nhất. Troodon đi săn theo đàn từ 3-8 con, liên tục nhảy vào cắn tỉa tiêm độc (Pounce Venom) rồi rút lui. Khi đủ 3 tầng độc, nạn nhân sẽ phát ra tiếng gầm đau đớn và nhận sát thương độc tố khủng khiếp.",
    "statsMin": {
      "weight": 10,
      "health": 50,
      "biteDamage": 8,
      "sprintSpeed": 37,
      "trotSpeed": 19,
      "swimSpeed": 12,
      "stamina": 140,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Rất Cao",
      "nightVision": "Sáng Vô Địch (Dạ quang)"
    },
    "statsMax": {
      "weight": 50,
      "health": 150,
      "biteDamage": 25,
      "sprintSpeed": 46.5,
      "trotSpeed": 22,
      "swimSpeed": 14,
      "stamina": 180,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Rất Cao",
      "nightVision": "Sáng Vô Địch (Nhìn rõ trong bóng tối đặc)"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Con Mồi Bị Đầu Độc",
          "foods": [
            "Thịt Tenontosaurus",
            "Thịt Ceratosaurus",
            "Thịt Carnotaurus"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng tốc độ kích hoạt độc Tầng 3"
        },
        {
          "symbol": "//",
          "name": "Thú Ăn Cỏ Nhỏ",
          "foods": [
            "Thịt Dryosaurus",
            "Thịt Hypsilophodon"
          ],
          "buffDescription": "+30% Hồi phục thể lực, Tăng tốc độ di chuyển"
        },
        {
          "symbol": "...",
          "name": "Thú Bay & Lưỡng Cư",
          "foods": [
            "Thịt Pteranodon",
            "Thịt Beipiaosaurus"
          ],
          "buffDescription": "+25% Hồi máu, Tăng khả năng ngụy trang bụi rậm"
        }
      ],
      "preferredPrey": [
        "Tenontosaurus",
        "Carnotaurus",
        "Ceratosaurus",
        "Mọi loài thú lớn đi lẻ"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Không nên ăn thịt đồng loại."
    },
    "abilities": [
      {
        "name": "Venom Pounce & Dash",
        "nameVi": "Nhảy Cắn Tiêm Độc & Lướt Rút Lui",
        "keybind": "Giữ Chuột Phải (RMB) để ngắm -> Thả ra để phóng",
        "staminaCost": "Thấp",
        "description": "Lao như một mũi tên cắn phập vào mục tiêu tiêm độc tố rồi lập tức nhảy bật lùi lại phía sau.",
        "effect": "Tích lũy các giai đoạn nọc độc: Giai đoạn 1 -> Giai đoạn 2 -> Giai đoạn 3 (Kịch Độc rút máu ồ ạt)."
      },
      {
        "name": "Venom Trance Call",
        "nameVi": "Tiếng Hú Kích Hoạt Nọc Độc",
        "keybind": "Tự động kích hoạt khi cắn đủ mốc",
        "staminaCost": "0",
        "description": "Khi nạn nhân trúng độc giai đoạn 3, mắt họ sẽ mờ đi và Troodon phát ra tiếng cười khẩy rùng rợn.",
        "effect": "Nạn nhân nhận sát thương liên tục và bị khóa khả năng hồi máu."
      }
    ],
    "combatTips": {
      "strengths": [
        "Thời gian lớn siêu tốc (chỉ 50 phút)",
        "Đòn tấn công Hit-and-Run cực kỳ khó bắt",
        "Sức mạnh hủy diệt khi đi bầy từ 4 con trở lên"
      ],
      "weaknesses": [
        "Máu siêu mỏng (150 HP), có thể chết chỉ bởi 1 cú giẫm chân hoặc cắn nhẹ",
        "Nếu đi lẻ 1 mình gần như không thể hạ được thú lớn"
      ],
      "huntingGuide": "Đi bầy trong đêm, phân công từng thành viên thay phiên nhau nhảy vào RMB tiêm độc. Khi nghe thấy tiếng hú độc bộc phát, tiếp tục duy trì nhịp cắn tỉa đến khi con mồi gục ngã.",
      "defenseGuide": "Lẩn trốn trong các bụi cỏ rậm rạp, thân hình nhỏ bé giúp Troodon gần như tàng hình trước mắt kẻ thù."
    },
    "image": "./assets/creatures/troodon.png"
  },
  {
    "id": "gallimimus",
    "name": "Gallimimus",
    "vietnameseName": "Khủng Long Đà Điểu (Galli)",
    "scientificName": "Gallimimus bullatus",
    "diet": "omnivore",
    "dietLabelVi": "Ăn tạp (Vua Tốc Độ)",
    "tier": "medium",
    "tierLabelVi": "Ăn Tạp Chạy Nhanh",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 1.8,
    "growthTimeFormatted": "1 giờ 48 phút",
    "badgeColor": "#eab308",
    "accentColor": "#ca8a04",
    "overview": "Ông vua tốc độ cõi Evrima. Gallimimus có khả năng bứt tốc lên tới 57 km/h, có thể ăn cả thực vật lẫn côn trùng, cua cá nhỏ và phát ra tiếng kêu cảnh báo bầy đàn từ khoảng cách hàng cây số.",
    "statsMin": {
      "weight": 30,
      "health": 100,
      "biteDamage": 12,
      "sprintSpeed": 42,
      "trotSpeed": 20,
      "swimSpeed": 14,
      "stamina": 160,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Cao",
      "nightVision": "Khá"
    },
    "statsMax": {
      "weight": 550,
      "health": 550,
      "biteDamage": 75,
      "sprintSpeed": 57.5,
      "trotSpeed": 26,
      "swimSpeed": 16,
      "stamina": 220,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Cao",
      "nightVision": "Khá"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Côn Trùng & Động Vật Nhỏ",
          "foods": [
            "Cua Bờ Suối",
            "Trứng Khủng Long",
            "Cóc Nhỏ"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng thời lượng Stamina"
        },
        {
          "symbol": "//",
          "name": "Quả Mọng & Hạt Cây",
          "foods": [
            "Quả Đỏ Thung Lũng",
            "Hạt Thông"
          ],
          "buffDescription": "+30% Tốc độ tối đa, Hồi phục thể lực nhanh"
        },
        {
          "symbol": "...",
          "name": "Rễ Cây & Nấm",
          "foods": [
            "Củ Nông",
            "Nấm Thảo Dược"
          ],
          "buffDescription": "+25% Hồi máu, Tăng tầm xa tiếng gầm cảnh báo"
        }
      ],
      "preferredPrey": [
        "Quả mọng",
        "Cua nhỏ bờ suối",
        "Trứng tổ"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Ăn tạp hòa bình, là tai mắt cảnh giới của mọi bầy ăn cỏ."
    },
    "abilities": [
      {
        "name": "Hyper Sprint & Kick",
        "nameVi": "Chạy Bứt Tốc Siêu Cấp & Cú Đá Đà Điểu",
        "keybind": "Giữ Shift để chạy -> Alt + LMB để tung cước",
        "staminaCost": "Thấp",
        "description": "Lướt gió với tốc độ 57.5 km/h và tung cú đá chân sau vào kẻ truy đuổi.",
        "effect": "Không một loài thú săn mồi nào có thể đuổi kịp nếu Gallimimus chạy trước."
      },
      {
        "name": "Flock Sentry Call",
        "nameVi": "Tiếng Gầm Báo Động Bầy Đàn",
        "keybind": "Phím số 1 (Broadcast Call)",
        "staminaCost": "0",
        "description": "Hú vang tiếng báo động phát hiện thú săn mồi cho toàn bộ thành viên trong khu vực.",
        "effect": "Tăng tốc độ chạy cho đồng đội trong bầy."
      }
    ],
    "combatTips": {
      "strengths": [
        "Tốc độ chạy nhanh nhất toàn bộ trò chơi (57.5 km/h)",
        "Thanh thể lực Stamina khổng lồ và hồi cực nhanh",
        "Chế độ ăn tạp rất dễ tìm thức ăn"
      ],
      "weaknesses": [
        "Máu mỏng (550 HP), không thể đánh tay đôi với thú lớn",
        "Dễ bị hạ nếu bị Carno húc ngã từ phía sau"
      ],
      "huntingGuide": "Kiếm ăn quanh bờ suối và các lùm cây quả mọng, luôn vừa ăn vừa quan sát xung quanh.",
      "defenseGuide": "Khi phát hiện nguy hiểm, lập tức bật sprint chạy thoát. Tận dụng tốc độ để lừa Carno đâm đầu vào gốc cây."
    },
    "image": "./assets/creatures/gallimimus.png"
  },
  {
    "id": "beipiaosaurus",
    "name": "Beipiaosaurus",
    "vietnameseName": "Vịt Lặn Móng Dài (Beipi)",
    "scientificName": "Beipiaosaurus inexpectus",
    "diet": "omnivore",
    "dietLabelVi": "Ăn tạp (Thợ Lặn Tài Ba)",
    "tier": "small",
    "tierLabelVi": "Lưỡng Cư Cỡ Nhỏ (Lặn Sông)",
    "locomotion": "semi-aquatic",
    "locomotionLabelVi": "Lưỡng cư (Lặn nước & Trên cạn)",
    "growthTimeHours": 1,
    "growthTimeFormatted": "1 giờ 00 phút",
    "badgeColor": "#14b8a6",
    "accentColor": "#0d9488",
    "overview": "Thợ lặn vui nhộn nhưng vô cùng nhanh nhẹn. Beipiaosaurus có lớp lông vũ chống nước, khả năng bơi lặn vượt trội né tránh cá sấu Deinosuchus và cặp móng vuốt sắc nhọn đào bới thức ăn.",
    "statsMin": {
      "weight": 20,
      "health": 70,
      "biteDamage": 10,
      "sprintSpeed": 31,
      "trotSpeed": 15,
      "swimSpeed": 32,
      "stamina": 150,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Khá"
    },
    "statsMax": {
      "weight": 300,
      "health": 300,
      "biteDamage": 45,
      "sprintSpeed": 38,
      "trotSpeed": 18,
      "swimSpeed": 42,
      "stamina": 190,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Tốt (Dưới Nước)"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Cua, Cá & Động Vật Đáy Sông",
          "foods": [
            "Cua Nước Ngọt",
            "Cá Nhỏ",
            "Ốc Đầm Lầy"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng tốc độ bơi lội"
        },
        {
          "symbol": "//",
          "name": "Rong Tảo & Cây Thủy Sinh",
          "foods": [
            "Rong Biển Nước Ngọt",
            "Củ Ấu Thủy Sinh"
          ],
          "buffDescription": "+30% Thể lực dưới nước, Tăng thời gian nhịn thở"
        },
        {
          "symbol": "...",
          "name": "Quả Rơi Bờ Sông",
          "foods": [
            "Quả Mọng Ven Suối",
            "Nấm Ẩm"
          ],
          "buffDescription": "+25% Hồi máu, Tăng khả năng né đòn"
        }
      ],
      "preferredPrey": [
        "Cua đáy sông",
        "Rong tảo",
        "Cá nhỏ"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Loài ăn tạp thân thiện, dễ nuôi lớn."
    },
    "abilities": [
      {
        "name": "Torpedo Dolphin Dive",
        "nameVi": "Lặn Ngư Lôi & Nhảy Nhót Mặt Nước",
        "keybind": "Bơi dưới nước -> Giữ Shift để tăng tốc -> Space để phi lên",
        "staminaCost": "Thấp",
        "description": "Lao vun vút dưới nước như một chú cá heo và phóng mình vọt lên khỏi mặt nước.",
        "effect": "Tốc độ bơi cực nhanh giúp dễ dàng né cú đớp phục kích của cá sấu Deinosuchus."
      },
      {
        "name": "Claw Slash",
        "nameVi": "Cào Móng Vuốt Liên Hoàn",
        "keybind": "Chuột Trái (LMB)",
        "staminaCost": "Thấp",
        "description": "Vung đôi tay móng vuốt dài cào vào mặt đối thủ.",
        "effect": "Gây sát thương nhẹ và chảy máu đối với các loài thú nhỏ."
      }
    ],
    "combatTips": {
      "strengths": [
        "Tốc độ bơi lặn cực kỳ linh hoạt (42 km/h dưới nước)",
        "Thời gian trưởng thành chỉ đúng 1 tiếng",
        "Thức ăn thủy sinh rất phong phú và an toàn"
      ],
      "weaknesses": [
        "Máu ít (300 HP), không thể đối đầu trực diện thú cạn lớn",
        "Vẫn có thể bị Deino bắt nếu bơi mất cảnh giác ở vùng nước hẹp"
      ],
      "huntingGuide": "Lặn dưới đáy sông đào bắt cua và ăn rong biển, luôn nhìn lên mặt nước để cảnh giác.",
      "defenseGuide": "Khi bị Deino đuổi dưới nước, dùng kỹ năng lặn uốn lượn zíc-zắc đổi hướng liên tục để thoát thân lên bờ."
    },
    "image": "./assets/creatures/beipiaosaurus.png"
  },
  {
    "id": "pachycephalosaurus",
    "name": "Pachycephalosaurus",
    "vietnameseName": "Khủng Long Đầu Thiết Giáp (Pachy)",
    "scientificName": "Pachycephalosaurus wyomingensis",
    "diet": "herbivore",
    "dietLabelVi": "Ăn cỏ (Húc Đầu Gãy Xương)",
    "tier": "medium",
    "tierLabelVi": "Ăn Cỏ Cận Chiến (Thiết Đầu Công)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 2,
    "growthTimeFormatted": "2 giờ 00 phút",
    "badgeColor": "#10b981",
    "accentColor": "#059669",
    "overview": "Chuyên gia bẻ gãy xương đối thủ. Pachycephalosaurus sở hữu vòm sọ dày bằng xương cứng đặc như đá, có thể húc gãy chân thú săn mồi và hất văng kẻ địch rơi khỏi vách núi.",
    "statsMin": {
      "weight": 45,
      "health": 150,
      "biteDamage": 20,
      "sprintSpeed": 35,
      "trotSpeed": 17,
      "swimSpeed": 14,
      "stamina": 130,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Rất Cao",
      "nightVision": "Khá"
    },
    "statsMax": {
      "weight": 1300,
      "health": 1300,
      "biteDamage": 140,
      "sprintSpeed": 45,
      "trotSpeed": 21,
      "swimSpeed": 16,
      "stamina": 160,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Rất Cao",
      "nightVision": "Khá"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Quả Cây & Hạt Cứng",
          "foods": [
            "Quả Hạch Rừng",
            "Quả Đỏ Đồi Núi"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng sát thương cú húc sọ"
        },
        {
          "symbol": "//",
          "name": "Củ Rễ Cứng & Nấm Núi",
          "foods": [
            "Củ Dương Xỉ Đá",
            "Nấm Đồi"
          ],
          "buffDescription": "+30% Thể lực tối đa, Giảm sát thương va đập đầu"
        },
        {
          "symbol": "...",
          "name": "Lá Cây Bụi",
          "foods": [
            "Lá Dương Xỉ Núi",
            "Cỏ Đồi"
          ],
          "buffDescription": "+25% Hồi máu, Kháng gãy xương"
        }
      ],
      "preferredPrey": [
        "Quả hạch đồi núi",
        "Củ rễ vách đá"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Ăn cỏ ôn hòa, thích sống ở các vùng cao nguyên và đồi núi hiểm trở."
    },
    "abilities": [
      {
        "name": "Skull Bash Charge",
        "nameVi": "Cú Húc Đầu Thiết Giáp",
        "keybind": "Giữ Chuột Phải (RMB) khi đang chạy Sprint",
        "staminaCost": "Trung bình",
        "description": "Cúi đầu xương cứng lao hết tốc lực tông thẳng vào chân hoặc sườn đối thủ.",
        "effect": "Gây sát thương chấn động cực lớn và lập tức làm GÃY XƯƠNG (Fracture) chân/thân kẻ địch."
      },
      {
        "name": "Mountain Climber",
        "nameVi": "Leo Dốc Vách Đá",
        "keybind": "Phím Space nhảy dốc",
        "staminaCost": "Thấp",
        "description": "Bộ chân chắc khỏe giúp Pachy leo thoăn thoắt trên các triền dốc đứng hiểm trở.",
        "effect": "Dễ dàng dụ thú săn mồi rơi xuống vực."
      }
    ],
    "combatTips": {
      "strengths": [
        "Cú húc đầu bẻ gãy chân kẻ thù khiến chúng không thể chạy trốn",
        "Khả năng leo địa hình đồi núi cực kỳ xuất sắc",
        "Kháng sát thương rơi từ trên cao tốt"
      ],
      "weaknesses": [
        "Máu ở mức trung bình (1300 HP)",
        "Nếu húc trượt có thể bị khựng lại tạo cơ hội cho kẻ địch phản công"
      ],
      "huntingGuide": "Kiếm ăn trên các vùng cao nguyên đồi dốc, vừa an toàn vừa nhiều hạt dinh dưỡng S.",
      "defenseGuide": "Khi bị Carno hay Cera truy đuổi, hãy dẫn dụ chúng lên sườn núi hiểm trở. Canh lúc đối phương leo dốc chậm lại, quay người tung cú húc RMB bẻ gãy chân chúng."
    },
    "image": "./assets/creatures/pachycephalosaurus.png"
  },
  {
    "id": "diabloceratops",
    "name": "Diabloceratops",
    "vietnameseName": "Khủng Long Sừng Quỷ (Diablo)",
    "scientificName": "Diabloceratops eatoni",
    "diet": "herbivore",
    "dietLabelVi": "Ăn cỏ (Đỡ Đòn & Phản Công)",
    "tier": "large",
    "tierLabelVi": "Ăn Cỏ Hạng Nặng (Đỡ Đòn)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 3.8,
    "growthTimeFormatted": "3 giờ 48 phút",
    "badgeColor": "#10b981",
    "accentColor": "#047857",
    "overview": "Cỗ xe tăng bọc thép có sừng. Diabloceratops sở hữu chiếc diềm cổ gai nhọn cùng cặp sừng cong đầy uy lực, có khả năng dựng tư thế phòng ngự (Spar / Parry) phản lại toàn bộ sát thương của kẻ săn mồi.",
    "statsMin": {
      "weight": 80,
      "health": 240,
      "biteDamage": 25,
      "sprintSpeed": 31,
      "trotSpeed": 16,
      "swimSpeed": 14,
      "stamina": 120,
      "staminaRegen": "Khá",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Khá"
    },
    "statsMax": {
      "weight": 3200,
      "health": 3200,
      "biteDamage": 280,
      "sprintSpeed": 38.5,
      "trotSpeed": 18,
      "swimSpeed": 16,
      "stamina": 140,
      "staminaRegen": "Khá",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Khá"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Cây Bụi Gai & Quả Dày",
          "foods": [
            "Cây Bụi Gai Dày",
            "Quả Rừng Lớn"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng độ cứng sừng đỡ đòn"
        },
        {
          "symbol": "//",
          "name": "Rễ Cây Cổ Thụ & Nấm",
          "foods": [
            "Rễ Thông Cổ",
            "Nấm Thân Gỗ"
          ],
          "buffDescription": "+30% Hồi phục thể lực, Giảm tiêu hao khi vào thế thủ"
        },
        {
          "symbol": "...",
          "name": "Dương Xỉ Đầm Lầy",
          "foods": [
            "Dương Xỉ Khổng Lồ",
            "Thảo Mộc Bờ Suối"
          ],
          "buffDescription": "+25% Hồi máu, Tăng khả năng chống đẩy lùi"
        }
      ],
      "preferredPrey": [
        "Cây bụi gai",
        "Rễ cây rừng"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Ăn cỏ bầy đàn kỷ luật."
    },
    "abilities": [
      {
        "name": "Horn Spar & Stance",
        "nameVi": "Thế Thủ Sừng Quỷ (Chặn & Phản Đòn)",
        "keybind": "Giữ Chuột Phải (RMB) để vào thế thủ",
        "staminaCost": "Tiêu hao nhẹ",
        "description": "Hạ thấp đầu chĩa cặp sừng nhọn về phía trước, sẵn sàng hất tung bất kỳ kẻ nào lao tới.",
        "effect": "Giảm 70% sát thương trực diện từ phía trước và hất văng Carno đang charge hoặc Raptor đang pounce."
      },
      {
        "name": "Horn Gore Thrust",
        "nameVi": "Cú Húc Sừng Xuyên Thấu",
        "keybind": "Chuột Trái (LMB) / Alt + LMB",
        "staminaCost": "Thấp",
        "description": "Vung mạnh cặp sừng đâm thấu vào sườn kẻ địch.",
        "effect": "Gây sát thương vật lý lớn và áp hiệu ứng Chảy Máu (Bleed) nặng nề."
      }
    ],
    "combatTips": {
      "strengths": [
        "Khả năng phòng ngự trực diện cực kỳ mạnh mẽ trước Carno và Cera",
        "Máu và cân nặng 3.2 tấn rất cứng cáp",
        "Có thể phản đòn bẻ gãy đợt tấn công của kẻ địch"
      ],
      "weaknesses": [
        "Phía sau lưng và đuôi không có vũ khí bảo vệ mạnh như Stego",
        "Tốc độ chạy trung bình"
      ],
      "huntingGuide": "Đi cùng bầy Diablo hoặc kết hợp với Teno và Stego để tạo thành hàng rào phòng thủ không thể xuyên phá.",
      "defenseGuide": "Luôn quay mặt về phía kẻ săn mồi và giữ thế thủ RMB. Chờ Carno lao vào húc thì thả đòn phản công đâm sừng."
    },
    "image": "./assets/creatures/diabloceratops.png"
  },
  {
    "id": "maiasaura",
    "name": "Maiasaura",
    "vietnameseName": "Khủng Long Mẹ Hiền (Maia)",
    "scientificName": "Maiasaura peeblesorum",
    "diet": "herbivore",
    "dietLabelVi": "Ăn cỏ (Bầy Đàn Tốc Độ)",
    "tier": "large",
    "tierLabelVi": "Ăn Cỏ Cỡ Lớn (Tốc Độ Bầy)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 3.2,
    "growthTimeFormatted": "3 giờ 12 phút",
    "badgeColor": "#10b981",
    "accentColor": "#059669",
    "overview": "Người mẹ mẫu mực của thảo nguyên. Maiasaura có thể hình to lớn nhưng lại sở hữu tốc độ chạy nước rút đáng kinh ngạc, khả năng chăm sóc và nuôi nấng con non tăng trưởng siêu tốc.",
    "statsMin": {
      "weight": 70,
      "health": 210,
      "biteDamage": 22,
      "sprintSpeed": 36,
      "trotSpeed": 18,
      "swimSpeed": 15,
      "stamina": 140,
      "staminaRegen": "Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Khá"
    },
    "statsMax": {
      "weight": 2800,
      "health": 2800,
      "biteDamage": 210,
      "sprintSpeed": 47,
      "trotSpeed": 22,
      "swimSpeed": 17,
      "stamina": 170,
      "staminaRegen": "Rất Nhanh",
      "fallDamageResistance": "Trung bình",
      "nightVision": "Khá"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Lá Cây Cao & Hoa Thảo Nguyên",
          "foods": [
            "Hoa Thảo Nguyên Vàng",
            "Lá Cây Mềm"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng tốc độ nuôi con"
        },
        {
          "symbol": "//",
          "name": "Cỏ Đồng Bằng & Củ Ngọt",
          "foods": [
            "Cỏ Đồng Bằng",
            "Củ Ngọt Thảo Nguyên"
          ],
          "buffDescription": "+30% Thể lực bầy đàn, Tăng tốc độ chạy"
        },
        {
          "symbol": "...",
          "name": "Dương Xỉ Đồng Cỏ",
          "foods": [
            "Dương Xỉ Đồng Bằng",
            "Cây Bụi Ngọt"
          ],
          "buffDescription": "+25% Hồi máu, Giảm tiêu hao thức ăn"
        }
      ],
      "preferredPrey": [
        "Hoa thảo nguyên",
        "Cỏ đồng bằng"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Sống theo đàn đông đúc, tính bầy đàn rất cao."
    },
    "abilities": [
      {
        "name": "Trample & Stomp",
        "nameVi": "Dậm Chân Giẫm Đạp & Cú Húc Thân",
        "keybind": "Chuột Phải (RMB) / Alt + Chuột Trái",
        "staminaCost": "Trung bình",
        "description": "Lấy đà giẫm mạnh hai chân trước hoặc dùng toàn bộ khối lượng 2.8 tấn đè bẹp kẻ thù.",
        "effect": "Gây sát thương chấn động và đánh gãy xương các loài săn mồi nhỏ như Raptor hay Dilo."
      },
      {
        "name": "Maternal Herd Call",
        "nameVi": "Tiếng Gọi Mẫu Tử Bảo Vệ Con",
        "keybind": "Phím số 2 (Friendly Call)",
        "staminaCost": "0",
        "description": "Phát ra tiếng gọi ấm áp tăng tốc độ tăng trưởng và phòng thủ cho con non đứng gần.",
        "effect": "Tăng 25% tốc độ hồi máu cho con non trong tổ."
      }
    ],
    "combatTips": {
      "strengths": [
        "Tốc độ chạy nước rút 47 km/h cực kỳ ấn tượng so với trọng lượng gần 3 tấn",
        "Lượng máu dồi dào và khả năng hồi phục tốt",
        "Đòn dậm chân giẫm đạp rất mạnh khi chống lại bầy thú săn nhỏ"
      ],
      "weaknesses": [
        "Lực tấn công đơn lẻ không dứt điểm nhanh bằng Stego hay Diablo"
      ],
      "huntingGuide": "Kiếm ăn cùng bầy trên các đồng cỏ rộng lớn, chia sẻ vị trí thức ăn dinh dưỡng S.",
      "defenseGuide": "Dùng tốc độ để giữ khoảng cách với Cera. Nếu bị Raptor quấy rối, dồn chúng vào chân núi và dùng đòn giẫm chân Trample kết liễu."
    },
    "image": "./assets/creatures/maiasaura.png"
  },
  {
    "id": "dryosaurus",
    "name": "Dryosaurus",
    "vietnameseName": "Khủng Long Đào Hang (Dryo)",
    "scientificName": "Dryosaurus altus",
    "diet": "herbivore",
    "dietLabelVi": "Ăn cỏ (Đào Hang Ẩn Nấp)",
    "tier": "small",
    "tierLabelVi": "Ăn Cỏ Nhỏ Nhẹ (Đào Hang)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn (Dưới lòng đất)",
    "growthTimeHours": 0.8,
    "growthTimeFormatted": "50 phút",
    "badgeColor": "#10b981",
    "accentColor": "#059669",
    "overview": "Chuyên gia sinh tồn dưới lòng đất. Dryosaurus có khả năng đào những hang ngầm an toàn tuyệt đối mà các loài thú săn mồi lớn không thể chui vào, giúp tránh bão và nuôi con an toàn.",
    "statsMin": {
      "weight": 15,
      "health": 55,
      "biteDamage": 8,
      "sprintSpeed": 38,
      "trotSpeed": 19,
      "swimSpeed": 14,
      "stamina": 160,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Cao",
      "nightVision": "Tốt"
    },
    "statsMax": {
      "weight": 200,
      "health": 200,
      "biteDamage": 35,
      "sprintSpeed": 50,
      "trotSpeed": 23,
      "swimSpeed": 16,
      "stamina": 200,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Cao",
      "nightVision": "Rất Tốt"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Củ Rễ Ngầm & Quả Ngọt",
          "foods": [
            "Củ Dương Xỉ Ngọt",
            "Quả Mọng Thung Lũng"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng tốc độ đào hang"
        },
        {
          "symbol": "//",
          "name": "Nấm Hang Động & Rễ Cây",
          "foods": [
            "Nấm Phát Sáng Hang",
            "Rễ Cỏ Mềm"
          ],
          "buffDescription": "+30% Hồi phục thể lực, Giảm tiêu hao năng lượng"
        },
        {
          "symbol": "...",
          "name": "Lá Non Thảo Mộc",
          "foods": [
            "Lá Non Ven Rừng",
            "Mầm Dương Xỉ"
          ],
          "buffDescription": "+25% Hồi máu, Tăng độ nhanh nhạy khi lách né"
        }
      ],
      "preferredPrey": [
        "Củ rễ ngầm",
        "Quả ngọt"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Ăn cỏ hiền lành, đào hang chia sẻ cho đồng loại."
    },
    "abilities": [
      {
        "name": "Burrowing (Dig Underground Nest)",
        "nameVi": "Đào Hang Ngầm Trú Ẩn",
        "keybind": "Giữ Chuột Phải (RMB) trên nền đất mềm",
        "staminaCost": "Tiêu hao Stamina",
        "description": "Dùng móng vuốt đào sâu vào lòng đất tạo thành mạng lưới hang ngầm an toàn.",
        "effect": "Hang ngầm bảo vệ 100% trước mọi loài thú săn mồi to lớn (Carno, Cera, Deino không chui vừa)."
      },
      {
        "name": "Dodge Roll / Evasive Jink",
        "nameVi": "Lộn Nhào & Lách Né Tốc Độ Cao",
        "keybind": "Nhấn phím Alt khi đang chạy Sprint",
        "staminaCost": "Thấp",
        "description": "Lộn nhào đổi hướng đột ngột khiến kẻ địch đang lao tới bị hố đà.",
        "effect": "Né tránh đòn húc của Carno hoặc đòn vồ của Raptor."
      }
    ],
    "combatTips": {
      "strengths": [
        "Thời gian lớn siêu nhanh (chưa tới 1 tiếng)",
        "Khả năng đào hang ngầm là nơi trú ẩn an toàn nhất bản đồ",
        "Tốc độ chạy 50 km/h và khả năng lách né cực kỳ ảo diệu"
      ],
      "weaknesses": [
        "Máu rất ít (200 HP), không thể đánh trả thú săn mồi lớn"
      ],
      "huntingGuide": "Đào một cái hang gần bãi thức ăn dinh dưỡng S để vừa ăn vừa có chỗ trốn lập tức.",
      "defenseGuide": "Khi bị Carno húc đuổi, bấm Alt né sang một bên rồi lập tức phóng vào miệng hang ngầm gần nhất."
    },
    "image": "./assets/creatures/dryosaurus.png"
  },
  {
    "id": "hypsilophodon",
    "name": "Hypsilophodon",
    "vietnameseName": "Khủng Long Nhảy Cóc (Hypsi)",
    "scientificName": "Hypsilophodon foxii",
    "diet": "herbivore",
    "dietLabelVi": "Ăn cỏ (Phun Mù & Nhảy Cao)",
    "tier": "small",
    "tierLabelVi": "Siêu Nhỏ (Nhảy Bật & Axit)",
    "locomotion": "terrestrial",
    "locomotionLabelVi": "Trên cạn",
    "growthTimeHours": 0.5,
    "growthTimeFormatted": "30 phút",
    "badgeColor": "#10b981",
    "accentColor": "#059669",
    "overview": "Chúa hề nhảy nhót của Evrima. Hypsilophodon có kích thước siêu nhỏ bé, có thể bật nhảy cao gấp nhiều lần thân mình và sở hữu vũ khí tự vệ kỳ quái: phun chất dịch mù mắt vào mặt kẻ săn mồi.",
    "statsMin": {
      "weight": 5,
      "health": 25,
      "biteDamage": 5,
      "sprintSpeed": 36,
      "trotSpeed": 18,
      "swimSpeed": 12,
      "stamina": 150,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Tuyệt Đối (Không tốn máu)",
      "nightVision": "Tốt"
    },
    "statsMax": {
      "weight": 35,
      "health": 70,
      "biteDamage": 15,
      "sprintSpeed": 46,
      "trotSpeed": 22,
      "swimSpeed": 14,
      "stamina": 200,
      "staminaRegen": "Cực Nhanh",
      "fallDamageResistance": "Tuyệt Đối (Nhảy từ đỉnh cây không chết)",
      "nightVision": "Rất Tốt"
    },
    "dietInfo": {
      "slots": [
        {
          "symbol": "S",
          "name": "Hạt & Quả Nhỏ",
          "foods": [
            "Hạt Thông Rừng",
            "Quả Mọng Đỏ"
          ],
          "buffDescription": "+50% Tốc độ lớn, Tăng độ xa cú nhảy"
        },
        {
          "symbol": "//",
          "name": "Nấm & Mầm Cây",
          "foods": [
            "Nấm Nhỏ Rừng",
            "Mầm Cây Dương Xỉ"
          ],
          "buffDescription": "+30% Thể lực tối đa, Tăng lượng axit tích trữ"
        },
        {
          "symbol": "...",
          "name": "Lá Mềm Thung Lũng",
          "foods": [
            "Lá Non Rừng Rậm",
            "Cỏ Mềm"
          ],
          "buffDescription": "+25% Hồi máu, Giảm tiếng ồn bước chân"
        }
      ],
      "preferredPrey": [
        "Hạt thông",
        "Quả mọng nhỏ"
      ],
      "favoriteOrgans": [],
      "cannibalism": false,
      "cannibalismNote": "Ăn cỏ siêu nhỏ, chỉ mất 30 phút để max 100%."
    },
    "abilities": [
      {
        "name": "Blinding Acid Spit",
        "nameVi": "Phun Dịch Axit Mù Mắt",
        "keybind": "Chuột Phải (RMB)",
        "staminaCost": "Tiêu hao dịch tiêu hóa",
        "description": "Phun thẳng một bãi chất dịch chua gắt vào mắt của thú săn mồi đang áp sát.",
        "effect": "Làm mù hoàn toàn màn hình đối thủ trong 5 giây, cho bạn đủ thời gian nhảy trốn."
      },
      {
        "name": "Super Leap Jump",
        "nameVi": "Bật Nhảy Siêu Cao",
        "keybind": "Phím Space",
        "staminaCost": "Thấp",
        "description": "Bật nhảy vọt lên cao qua đầu kẻ địch hoặc nhảy thẳng lên mỏm đá an toàn.",
        "effect": "Hoàn toàn miễn nhiễm sát thương rơi từ trên cao."
      }
    ],
    "combatTips": {
      "strengths": [
        "Lớn nhanh nhất game (chỉ 30 phút là max)",
        "Chiêu phun axit làm mù mắt đối thủ vô cùng khó chịu",
        "Khả năng nhảy cao và không bao giờ chết vì ngã"
      ],
      "weaknesses": [
        "Máu chỉ có 70 HP, chết bởi bất kỳ đòn đánh nào chạm trúng"
      ],
      "huntingGuide": "Ăn vài hạt thông là đầy thanh thức ăn và lớn vèo vèo.",
      "defenseGuide": "Khi bị thú săn đuổi theo, đợi chúng há mồm chuẩn bị cắn thì bấm RMB phun thẳng axit vào mặt, sau đó bấm Space nhảy vọt lên tảng đá tẩu thoát."
    },
    "image": "./assets/creatures/hypsilophodon.png"
  }
];
