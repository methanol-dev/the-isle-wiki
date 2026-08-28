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
          <h2 style="font-size: 1.6rem; font-weight: 900; line-height: 1.1;">${c.name}</h2>
          <div style="font-size: 0.95rem; color: var(--color-emerald); font-weight: 700; margin-top: 0.2rem;">${c.vietnameseName}</div>
          <div style="font-size: 0.8rem; color: var(--text-dim); font-style: italic;">${c.scientificName}</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
          <button class="filter-btn" onclick="ModalDetails.copyShareLink()" title="Sao chép liên kết chia sẻ" style="font-size: 0.8rem;">
            <span>🔗</span> Chia sẻ
          </button>
          <a href="./compare.html?a=${c.id}" class="filter-btn" style="font-size: 0.8rem; text-decoration: none; background: rgba(239, 68, 68, 0.15); border-color: rgba(239, 68, 68, 0.35); color: var(--text-crimson);">
            <span>⚔️</span> So sánh kèo
          </a>
          <span class="badge badge-${c.diet}">${c.dietLabelVi}</span>
          <span class="badge ${c.tier === 'apex' ? 'badge-apex' : ''}" style="background: rgba(255,255,255,0.08);">${c.tierLabelVi}</span>
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
          ToastService.show(`Đã sao chép liên kết của ${c.name} vào bộ nhớ đệm!`, 'success');
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
      <div class="growth-calculator-card">
        <div class="growth-calc-header">
          <div>
            <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem;">Thanh Trượt Tăng Trưởng Thực Tế</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Kéo thanh trượt để tính toán chỉ số tương ứng theo từng giai đoạn phát triển.</p>
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

      <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-md);">
        <h4 style="color: var(--color-emerald); margin-bottom: 0.5rem; font-size: 0.95rem;">💡 Tổng Quan Sinh Học</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${c.overview}</p>
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
          <div class="calc-stat-label">⚖️ Trọng Lượng</div>
          <div class="calc-stat-number" style="color: #38bdf8;">${stats.weight.toLocaleString('vi-VN')}<span class="calc-stat-unit">kg</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">❤️ Lượng Máu (HP)</div>
          <div class="calc-stat-number" style="color: #10b981;">${stats.health.toLocaleString('vi-VN')}<span class="calc-stat-unit">HP</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">⚔️ Sát Thương Cắn</div>
          <div class="calc-stat-number" style="color: #ef4444;">${stats.biteDamage}<span class="calc-stat-unit">dmg</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">⚡ Tốc Độ Sprint</div>
          <div class="calc-stat-number" style="color: #f59e0b;">${stats.sprintSpeed}<span class="calc-stat-unit">km/h</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">🚶 Tốc Độ Đi Bộ</div>
          <div class="calc-stat-number">${stats.trotSpeed}<span class="calc-stat-unit">km/h</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">🏊 Tốc Độ Bơi</div>
          <div class="calc-stat-number">${stats.swimSpeed}<span class="calc-stat-unit">km/h</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">🔋 Thể Lực (Stam)</div>
          <div class="calc-stat-number" style="color: #a855f7;">${stats.stamina}<span class="calc-stat-unit">pts</span></div>
        </div>
        <div class="calc-stat-box">
          <div class="calc-stat-label">⏱️ Thời Gian Lớn Còn</div>
          <div class="calc-stat-number" style="font-size: 1.05rem; color: #fbbf24;">${stats.timeRemainingFormatted}</div>
        </div>
      `;
    }
  },

  renderDietTab() {
    const c = this.currentCreature;
    const panel = document.getElementById('tab-diet');
    if (!panel) return;

    const slotsHtml = c.dietInfo.slots.map(s => `
      <div class="nutrient-card">
        <div class="nutrient-badge-symbol">Chất [ ${s.symbol} ] : ${s.name}</div>
        <div style="font-size: 0.85rem; color: var(--text-emerald); margin-bottom: 0.5rem;">✨ ${s.buffDescription}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; margin-bottom: 0.25rem;">Thức ăn cung cấp:</div>
        <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--text-dim);">
          ${s.foods.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    const organsHtml = c.dietInfo.favoriteOrgans.length > 0 ? `
      <div style="margin-top: 1.5rem; background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-md);">
        <h4 style="color: var(--color-amber); margin-bottom: 0.75rem; font-size: 1rem;">🥩 Nội Tạng Động Vật Buff Đặc Biệt</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
          ${c.dietInfo.favoriteOrgans.map(o => `
            <div style="background: rgba(255,255,255,0.03); padding: 0.75rem; border-radius: 6px; font-size: 0.85rem;">
              <strong style="color: var(--text-main);">${o.organ}:</strong>
              <div style="color: var(--text-emerald); margin-top: 0.2rem;">${o.benefit}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    panel.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">Hệ Thống 3 Nhóm Dinh Dưỡng Của ${c.name}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Duy trì đầy đủ cả 3 chất để nhận buff +50% tốc độ lớn và hồi phục thể lực nhanh nhất.</p>
      </div>

      <div class="nutrient-cards-grid">
        ${slotsHtml}
      </div>

      ${organsHtml}

      <div style="margin-top: 1.5rem; background: ${c.dietInfo.cannibalism ? 'rgba(6,182,212,0.1)' : 'rgba(239,68,68,0.1)'}; border: 1px solid ${c.dietInfo.cannibalism ? 'var(--border-accent)' : 'rgba(239,68,68,0.3)'}; padding: 1rem; border-radius: var(--radius-md); font-size: 0.85rem;">
        <strong>⚠️ Tập tính ăn đồng loại (Cannibalism):</strong>
        <p style="margin-top: 0.25rem; color: var(--text-muted);">${c.dietInfo.cannibalismNote}</p>
      </div>
    `;
  },

  renderAbilitiesTab() {
    const c = this.currentCreature;
    const panel = document.getElementById('tab-abilities');
    if (!panel) return;

    const abilitiesHtml = c.abilities.map(a => `
      <div class="ability-card">
        <div class="ability-header">
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-main);">${a.nameVi}</h4>
            <div style="font-size: 0.8rem; color: var(--text-dim);">${a.name}</div>
          </div>
          <span class="ability-keybind">⌨️ ${a.keybind}</span>
        </div>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem; line-height: 1.5;">${a.description}</p>
        <div style="font-size: 0.85rem; color: var(--color-emerald); background: rgba(16,185,129,0.08); padding: 0.5rem 0.75rem; border-radius: 4px;">
          💥 <strong>Hiệu quả chiến đấu:</strong> ${a.effect} (Tiêu hao Stamina: <em>${a.staminaCost}</em>)
        </div>
      </div>
    `).join('');

    panel.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem;">Kỹ Năng Chiến Đấu & Bộ Phím Điều Khiển</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Nắm rõ thời điểm tung chiêu để tối ưu hóa lượng thể lực trong giao tranh.</p>
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
        <div style="background: rgba(16,185,129,0.08); border: 1px solid var(--border-accent); padding: 1.25rem; border-radius: var(--radius-md);">
          <h4 style="color: var(--text-emerald); margin-bottom: 0.75rem; font-size: 1rem;">✅ Thế Mạnh Cốt Lõi</h4>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
            ${c.combatTips.strengths.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div style="background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.3); padding: 1.25rem; border-radius: var(--radius-md);">
          <h4 style="color: var(--text-crimson); margin-bottom: 0.75rem; font-size: 1rem;">❌ Điểm Yếu Cần Tránh</h4>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">
            ${c.combatTips.weaknesses.map(w => `<li>${w}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
        <h4 style="color: var(--color-amber); margin-bottom: 0.5rem; font-size: 0.95rem;">🏹 Cẩm Nang Săn Mồi & Kiếm Ăn</h4>
        <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">${c.combatTips.huntingGuide}</p>
      </div>

      <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); padding: 1.25rem; border-radius: var(--radius-md);">
        <h4 style="color: var(--color-cyan); margin-bottom: 0.5rem; font-size: 0.95rem;">🛡️ Chiến Thuật Phòng Thủ & Thoát Thân</h4>
        <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">${c.combatTips.defenseGuide}</p>
      </div>
    `;
  }
};

window.ModalDetails = ModalDetails;
