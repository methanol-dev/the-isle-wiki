/**
 * THE ISLE WIKI - MODAL DETAILS CONTROLLER
 * Handles detailed creature view, interactive growth slider, tabs, and nutrients
 */

const ModalDetails = {
  currentCreature: null,
  currentGrowth: 100,

  init() {
    // Close button & overlay click
    const overlay = document.getElementById('detailsModal');
    const closeBtn = document.getElementById('modalCloseBtn');

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.close();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
        this.close();
      }
    });
  },

  open(creatureId) {
    const creature = DataService.getCreatureById(creatureId);
    if (!creature) return;

    this.currentCreature = creature;
    this.currentGrowth = 100; // default to full adult

    if (typeof AudioFX !== 'undefined') {
      AudioFX.playOpen();
    }

    this.renderHeader();
    this.renderTabs();
    this.renderGrowthCalculator();
    this.renderDietTab();
    this.renderAbilitiesTab();
    this.renderTipsTab();

    const overlay = document.getElementById('detailsModal');
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  close() {
    const overlay = document.getElementById('detailsModal');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  renderHeader() {
    const c = this.currentCreature;
    const headerEl = document.getElementById('modalHeaderTitle');
    if (!headerEl) return;

    headerEl.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 900; line-height: 1.1; font-family: var(--font-display);">${c.name}</h2>
          <div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 700; margin-top: 0.2rem;">${c.vietnameseName}</div>
          <div style="font-size: 0.75rem; color: var(--text-dim); font-family: var(--font-mono);">${c.scientificName}</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <button class="filter-btn" onclick="ModalDetails.copyShareLink()" title="Sao chép liên kết chia sẻ" style="font-size: 0.78rem;">
            Sao chép Link
          </button>
          <a href="./compare.html?a=${c.id}" class="filter-btn" style="font-size: 0.78rem; text-decoration: none; background: #200f13; border-color: #7f1d1d; color: #fca5a5;">
            So sánh đối đầu
          </a>
          <span class="badge badge-${c.diet}">${c.dietLabelVi}</span>
          <span class="badge ${c.tier === 'apex' ? 'badge-apex' : (c.tier === 'heavy' ? 'badge-tier-heavy' : (c.tier === 'medium' ? 'badge-tier-medium' : 'badge-tier-small'))}">${c.tierLabelVi}</span>
        </div>
      </div>
    `;
  },

  copyShareLink() {
    const c = this.currentCreature;
    if (!c) return;

    const shareUrl = `${window.location.origin}${window.location.pathname.replace(/compare\.html|guides\.html/, 'index.html')}?open=${c.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        if (typeof ToastService !== 'undefined') {
          ToastService.show(`Đã sao chép liên kết của ${c.name} vào bộ nhớ tạm!`, 'success');
        }
      });
    }
  },

  renderTabs() {
    const tabButtons = document.querySelectorAll('.modal-tabs .tab-btn');
    tabButtons.forEach(btn => {
      btn.onclick = () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetTab = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-panel').forEach(panel => {
          panel.classList.remove('active');
        });
        const activePanel = document.getElementById(`tab-${targetTab}`);
        if (activePanel) activePanel.classList.add('active');
      };
    });
  },

  renderGrowthCalculator() {
    const c = this.currentCreature;
    const panel = document.getElementById('tab-growth');
    if (!panel) return;

    panel.innerHTML = `
      <div style="width: 100%; height: 250px; border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 1.5rem; background: #080c14; border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; position: relative;">
        <img src="${c.image}" alt="${c.name} render" style="max-height: 90%; max-width: 95%; object-fit: contain; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.9));">
        <div style="position: absolute; bottom: 0.65rem; left: 0.85rem; background: #090c13; padding: 0.25rem 0.65rem; border-radius: 3px; font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-dim); border: 1px solid var(--border-color);">
          Official Render: <strong>${c.name}</strong>
        </div>
      </div>

      <div class="growth-calculator-card">
        <div class="growth-calc-header">
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.25rem;">Thanh Trượt Tăng Trưởng Thực Tế</h4>
            <p style="font-size: 0.82rem; color: var(--text-muted);">Kéo thanh trượt để tính toán chỉ số tương ứng theo từng giai đoạn phát triển.</p>
          </div>
          <div class="growth-stage-badge" id="modalStageBadge">
            Trưởng Thành (100%)
          </div>
        </div>

        <div class="slider-container">
          <div class="slider-labels">
            <span>Con Non (0%)</span>
            <span>Thiếu Niên (25%)</span>
            <span>Trưởng Thành Non (50%)</span>
            <span>Trưởng Thành (80%)</span>
            <span>Hoàn Hảo (100%)</span>
          </div>

          <input type="range" min="0" max="100" value="${this.currentGrowth}" class="growth-range-slider" id="modalGrowthSlider">

          <div class="stage-presets-group">
            <button class="stage-preset-btn" onclick="ModalDetails.setGrowth(0)">Con Non (0%)</button>
            <button class="stage-preset-btn" onclick="ModalDetails.setGrowth(25)">Thiếu Niên (25%)</button>
            <button class="stage-preset-btn" onclick="ModalDetails.setGrowth(50)">Trưởng Thành Non (50%)</button>
            <button class="stage-preset-btn" onclick="ModalDetails.setGrowth(80)">Trưởng Thành (80%)</button>
            <button class="stage-preset-btn active" onclick="ModalDetails.setGrowth(100)">Max 100%</button>
          </div>
        </div>

        <div class="calc-stats-grid" id="modalCalculatedStats">
          <!-- Dynamic values loaded by updateCalculatedValues() -->
        </div>
      </div>

      <div style="background: #090c13; border: 1px solid var(--border-color); padding: 1.15rem; border-radius: var(--radius-sm);">
        <h4 style="color: var(--color-emerald); margin-bottom: 0.35rem; font-size: 0.88rem; font-family: var(--font-mono); text-transform: uppercase;">Tổng Quan Sinh Học</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">${c.overview}</p>
      </div>
    `;

    const slider = document.getElementById('modalGrowthSlider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        this.currentGrowth = parseInt(e.target.value, 10);
        if (typeof AudioFX !== 'undefined') AudioFX.playTick();
        this.updateCalculatedValues();
      });
    }

    this.updateCalculatedValues();
  },

  setGrowth(percent) {
    this.currentGrowth = percent;
    const slider = document.getElementById('modalGrowthSlider');
    if (slider) slider.value = percent;

    if (typeof AudioFX !== 'undefined') AudioFX.playSelect();

    // Update preset buttons styling
    document.querySelectorAll('.stage-presets-group .stage-preset-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent.includes(`${percent}%`)) {
        btn.classList.add('active');
      }
    });

    this.updateCalculatedValues();
  },

  updateCalculatedValues() {
    const c = this.currentCreature;
    if (!c) return;

    const stats = GrowthCalc.calculateStats(c, this.currentGrowth);

    // Update stage badge
    const badge = document.getElementById('modalStageBadge');
    if (badge) {
      badge.textContent = `${stats.stageInfo.labelVi} - ${stats.growthPercent}%`;
      badge.style.color = stats.stageInfo.color;
    }

    // Update stats grid
    const statsContainer = document.getElementById('modalCalculatedStats');
    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="calc-stat-box">
          <div class="calc-stat-label">Trọng Lượng</div>
          <div class="calc-stat-number" style="color: var(--color-cyan);">${stats.weight.toLocaleString('vi-VN')}<span class="calc-stat-unit">kg</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">Lượng Máu (HP)</div>
          <div class="calc-stat-number" style="color: var(--color-emerald);">${stats.health.toLocaleString('vi-VN')}<span class="calc-stat-unit">HP</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">Lực Cắn (Damage)</div>
          <div class="calc-stat-number" style="color: var(--color-crimson);">${stats.biteDamage}<span class="calc-stat-unit">dmg</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">Tốc Độ Sprint</div>
          <div class="calc-stat-number" style="color: var(--color-amber);">${stats.sprintSpeed}<span class="calc-stat-unit">km/h</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">Tốc Độ Đi Bộ</div>
          <div class="calc-stat-number">${stats.trotSpeed}<span class="calc-stat-unit">km/h</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">Tốc Độ Bơi</div>
          <div class="calc-stat-number">${stats.swimSpeed}<span class="calc-stat-unit">km/h</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">Thể Lực (Stam)</div>
          <div class="calc-stat-number" style="color: var(--color-purple-light);">${stats.stamina}<span class="calc-stat-unit">pts</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">Thời Gian Còn Lại</div>
          <div class="calc-stat-number" style="font-size: 1rem; color: #fbbf24;">${stats.timeRemainingFormatted}</div>
        </div>
      `;
    }
  },

  renderDietTab() {
    const c = this.currentCreature;
    const panel = document.getElementById('tab-diet');
    if (!panel) return;

    const slotsHtml = c.dietInfo.slots.map(s => {
      const iconFile = s.symbol === 'S' ? 'nutrient-s.svg' : (s.symbol === '//' ? 'nutrient-lines.svg' : 'nutrient-dots.svg');
      return `
        <div class="nutrient-card">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem;">
            <img src="./assets/nutrients/${iconFile}" alt="${s.symbol}" style="width: 28px; height: 28px;">
            <div class="nutrient-badge-symbol" style="margin: 0; font-size: 0.95rem;">Chất [ ${s.symbol} ] : ${s.name}</div>
          </div>
          <div style="font-size: 0.82rem; color: var(--color-emerald); margin-bottom: 0.5rem;">${s.buffDescription}</div>
          <div style="font-size: 0.78rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700; margin-bottom: 0.25rem;">Nguồn thức ăn:</div>
          <ul style="padding-left: 1.25rem; font-size: 0.82rem; color: var(--text-muted);">
            ${s.foods.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      `;
    }).join('');

    const organsHtml = c.dietInfo.favoriteOrgans.length > 0 ? `
      <div style="margin-top: 1.5rem; background: #090c13; border: 1px solid var(--border-color); padding: 1.15rem; border-radius: var(--radius-sm);">
        <h4 style="color: var(--color-amber); margin-bottom: 0.75rem; font-size: 0.92rem; font-family: var(--font-mono); text-transform: uppercase;">Nội Tạng Động Vật & Hiệu Ứng</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
          ${c.dietInfo.favoriteOrgans.map(o => `
            <div style="background: #111622; border: 1px solid var(--border-color); padding: 0.75rem; border-radius: 4px; font-size: 0.82rem;">
              <strong style="color: var(--text-main);">${o.organ}:</strong>
              <div style="color: var(--color-emerald); margin-top: 0.2rem;">${o.benefit}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    panel.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.35rem;">Hệ Thống 3 Nhóm Dinh Dưỡng Của ${c.name}</h4>
        <p style="font-size: 0.82rem; color: var(--text-muted);">Duy trì đầy đủ cả 3 chất để nhận buff +50% tốc độ lớn và hồi phục thể lực nhanh nhất.</p>
      </div>

      <div class="nutrient-cards-grid">
        ${slotsHtml}
      </div>

      ${organsHtml}

      <div style="margin-top: 1.5rem; background: #090c13; border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.82rem;">
        <strong style="color: var(--color-amber);">Tập tính ăn đồng loại (Cannibalism):</strong>
        <p style="margin-top: 0.25rem; color: var(--text-muted);">${c.dietInfo.cannibalismNote}</p>
      </div>
    `;
  },

  renderAbilitiesTab() {
    const c = this.currentCreature;
    const panel = document.getElementById('tab-abilities');
    if (!panel) return;

    function getAbilityIcon(abilityName) {
      const name = abilityName.toLowerCase();
      if (name.includes('bite') || name.includes('cắn') || name.includes('xé')) return './assets/skills/bite.svg';
      if (name.includes('pounce') || name.includes('vồ') || name.includes('bám')) return './assets/skills/pounce.svg';
      if (name.includes('lockjaw') || name.includes('khóa hàm') || name.includes('lôi')) return './assets/skills/lockjaw.svg';
      if (name.includes('headbutt') || name.includes('húc đầu') || name.includes('spar')) return './assets/skills/headbutt.svg';
      if (name.includes('tail') || name.includes('đuôi') || name.includes('swipe')) return './assets/skills/tail-swipe.svg';
      if (name.includes('charge') || name.includes('húc') || name.includes('lao')) return './assets/skills/charge.svg';
      if (name.includes('venom') || name.includes('độc') || name.includes('spit') || name.includes('hallucination')) return './assets/skills/venom.svg';
      if (name.includes('fly') || name.includes('bay') || name.includes('dive') || name.includes('glide')) return './assets/skills/fly.svg';
      return './assets/skills/bite.svg';
    }

    const abilitiesHtml = c.abilities.map(a => `
      <div class="ability-card">
        <div class="ability-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${getAbilityIcon(a.name)}" alt="${a.name}" style="width: 28px; height: 28px; padding: 3px; background: #111622; border-radius: 4px; border: 1px solid var(--border-color);">
            <div>
              <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main);">${a.nameVi}</h4>
              <div style="font-size: 0.75rem; color: var(--text-dim); font-family: var(--font-mono);">${a.name}</div>
            </div>
          </div>
          <span class="ability-keybind">[ ${a.keybind} ]</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; line-height: 1.5;">${a.description}</p>
        <div style="font-size: 0.82rem; color: var(--color-emerald); background: #0c1510; border: 1px solid #166534; padding: 0.45rem 0.65rem; border-radius: 3px;">
          <strong>Hiệu quả chiến đấu:</strong> ${a.effect} (Tiêu hao Stamina: <em>${a.staminaCost}</em>)
        </div>
      </div>
    `).join('');

    panel.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.25rem;">Kỹ Năng Chiến Đấu & Bộ Phím Điều Khiển</h4>
        <p style="font-size: 0.82rem; color: var(--text-muted);">Nắm rõ thời điểm tung chiêu để tối ưu hóa lượng thể lực trong giao tranh.</p>
      </div>

      ${abilitiesHtml}
    `;
  },

  renderTipsTab() {
    const c = this.currentCreature;
    const panel = document.getElementById('tab-tips');
    if (!panel) return;

    panel.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
        <div style="background: #090c13; border: 1px solid var(--border-color); padding: 1.15rem; border-radius: var(--radius-sm);">
          <h4 style="color: var(--color-emerald); margin-bottom: 0.65rem; font-size: 0.88rem; font-family: var(--font-mono); text-transform: uppercase;">Thế Mạnh Cốt Lõi</h4>
          <ul style="padding-left: 1.25rem; font-size: 0.82rem; color: var(--text-muted); line-height: 1.6;">
            ${c.combatTips.strengths.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div style="background: #090c13; border: 1px solid var(--border-color); padding: 1.15rem; border-radius: var(--radius-sm);">
          <h4 style="color: var(--color-crimson-light); margin-bottom: 0.65rem; font-size: 0.88rem; font-family: var(--font-mono); text-transform: uppercase;">Điểm Yếu Cần Lưu Ý</h4>
          <ul style="padding-left: 1.25rem; font-size: 0.82rem; color: var(--text-muted); line-height: 1.6;">
            ${c.combatTips.weaknesses.map(w => `<li>${w}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div style="background: #090c13; border: 1px solid var(--border-color); padding: 1.15rem; border-radius: var(--radius-sm); margin-bottom: 1rem;">
        <h4 style="color: var(--color-amber); margin-bottom: 0.5rem; font-size: 0.88rem; font-family: var(--font-mono); text-transform: uppercase;">Cẩm Nang Săn Mồi & Kiếm Ăn</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">${c.combatTips.huntingGuide || c.combatTips.matchupsTips}</p>
      </div>

      <div style="background: #090c13; border: 1px solid var(--border-color); padding: 1.15rem; border-radius: var(--radius-sm);">
        <h4 style="color: var(--color-cyan); margin-bottom: 0.5rem; font-size: 0.88rem; font-family: var(--font-mono); text-transform: uppercase;">Chiến Thuật Phòng Thủ & Thoát Thân</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">${c.combatTips.defenseGuide || c.combatTips.matchupsTips}</p>
      </div>
    `;
  }
};

window.ModalDetails = ModalDetails;
