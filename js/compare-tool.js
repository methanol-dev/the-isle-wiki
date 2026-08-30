/**
 * THE ISLE WIKI - COMPARE & MATCHUP TOOL PRO MAX
 * Side-by-side Dinosaur comparison with dynamic growth sliders, battle dominance bar and weight advantages
 */

const CompareTool = {
  creatureA: null,
  creatureB: null,
  growthA: 100,
  growthB: 100,

  init() {
    this.populateDropdowns();
    this.bindEvents();

    const all = DataService.getAllCreatures();
    if (all.length >= 2) {
      // Check if URL specifies custom matchup e.g. ?a=carnotaurus&b=ceratosaurus
      const urlParams = new URLSearchParams(window.location.search);
      const paramA = urlParams.get('a');
      const paramB = urlParams.get('b');

      const foundA = paramA ? DataService.getCreatureById(paramA) : null;
      const foundB = paramB ? DataService.getCreatureById(paramB) : null;

      this.creatureA = foundA || all[0];
      this.creatureB = foundB || (foundA ? all.find(c => c.id !== foundA.id) : all[1]);

      const selectA = document.getElementById('compareSelectA');
      const selectB = document.getElementById('compareSelectB');
      if (selectA) selectA.value = this.creatureA.id;
      if (selectB) selectB.value = this.creatureB.id;
      this.render();
    }
  },

  populateDropdowns() {
    const selectA = document.getElementById('compareSelectA');
    const selectB = document.getElementById('compareSelectB');
    if (!selectA || !selectB) return;

    const creatures = DataService.getAllCreatures();
    const optionsHtml = creatures.map(c => `
      <option value="${c.id}">${c.name} (${c.vietnameseName}) - ${c.dietLabelVi}</option>
    `).join('');

    selectA.innerHTML = optionsHtml;
    selectB.innerHTML = optionsHtml;
  },

  bindEvents() {
    const selectA = document.getElementById('compareSelectA');
    const selectB = document.getElementById('compareSelectB');
    const sliderA = document.getElementById('compareSliderA');
    const sliderB = document.getElementById('compareSliderB');

    if (selectA) {
      selectA.addEventListener('change', (e) => {
        this.creatureA = DataService.getCreatureById(e.target.value);
        if (typeof AudioFX !== 'undefined') AudioFX.playSelect();
        this.render();
      });
    }

    if (selectB) {
      selectB.addEventListener('change', (e) => {
        this.creatureB = DataService.getCreatureById(e.target.value);
        if (typeof AudioFX !== 'undefined') AudioFX.playSelect();
        this.render();
      });
    }

    if (sliderA) {
      sliderA.addEventListener('input', (e) => {
        this.growthA = parseInt(e.target.value, 10);
        if (typeof AudioFX !== 'undefined') AudioFX.playTick();
        this.render();
      });
    }

    if (sliderB) {
      sliderB.addEventListener('input', (e) => {
        this.growthB = parseInt(e.target.value, 10);
        if (typeof AudioFX !== 'undefined') AudioFX.playTick();
        this.render();
      });
    }
  },

  render() {
    if (!this.creatureA || !this.creatureB) return;

    const statsA = GrowthCalc.calculateStats(this.creatureA, this.growthA);
    const statsB = GrowthCalc.calculateStats(this.creatureB, this.growthB);

    // Update Stage info labels
    const labelA = document.getElementById('compareStageA');
    const labelB = document.getElementById('compareStageB');
    if (labelA) labelA.textContent = `${statsA.stageInfo.labelVi} (${this.growthA}%)`;
    if (labelB) labelB.textContent = `${statsB.stageInfo.labelVi} (${this.growthB}%)`;

    // Render Stats A
    const bodyA = document.getElementById('compareBodyA');
    if (bodyA) {
      bodyA.innerHTML = this.getStatsHtml(this.creatureA, statsA, statsB);
    }

    // Render Stats B
    const bodyB = document.getElementById('compareBodyB');
    if (bodyB) {
      bodyB.innerHTML = this.getStatsHtml(this.creatureB, statsB, statsA);
    }

    // Calculate Differential & Combat Multiplier
    this.renderDifferential(statsA, statsB);
  },

  getStatsHtml(creature, current, opponent) {
    const isWeightHigher = current.weight >= opponent.weight;
    const isDamageHigher = current.biteDamage >= opponent.biteDamage;
    const isSpeedHigher = current.sprintSpeed >= opponent.sprintSpeed;
    const isHealthHigher = current.health >= opponent.health;

    return `
      <div style="width: 100%; height: 160px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.25rem; background: radial-gradient(circle at center, rgba(16,185,129,0.12) 0%, rgba(0,0,0,0.7) 100%); border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center;">
        <img src="${creature.image}" alt="${creature.name}" style="max-height: 88%; max-width: 90%; object-fit: contain; filter: drop-shadow(0 8px 18px rgba(0,0,0,0.8));">
      </div>

      <div style="margin-bottom: 1.25rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="badge badge-${creature.diet}">${creature.dietLabelVi}</span>
        <span class="badge ${creature.tier === 'apex' ? 'badge-apex' : (creature.tier === 'heavy' ? 'badge-tier-heavy' : (creature.tier === 'medium' ? 'badge-tier-medium' : 'badge-tier-small'))}">${creature.tierLabelVi}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="background: #090c13; border: 1px solid var(--border-color); padding: 0.75rem 1rem; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.82rem; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase; font-weight: 700;">Trọng Lượng:</span>
          <strong style="color: ${isWeightHigher ? 'var(--color-emerald)' : 'var(--text-dim)'}; font-family: var(--font-mono); font-size: 1.05rem;">
            ${current.weight.toLocaleString('vi-VN')} kg
          </strong>
        </div>

        <div style="background: #090c13; border: 1px solid var(--border-color); padding: 0.75rem 1rem; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.82rem; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase; font-weight: 700;">Lượng Máu (HP):</span>
          <strong style="color: ${isHealthHigher ? 'var(--color-emerald)' : 'var(--text-dim)'}; font-family: var(--font-mono); font-size: 1.05rem;">
            ${current.health.toLocaleString('vi-VN')} HP
          </strong>
        </div>

        <div style="background: #090c13; border: 1px solid var(--border-color); padding: 0.75rem 1rem; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.82rem; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase; font-weight: 700;">Lực Cắn (Damage):</span>
          <strong style="color: ${isDamageHigher ? 'var(--color-crimson)' : 'var(--text-dim)'}; font-family: var(--font-mono); font-size: 1.05rem;">
            ${current.biteDamage} dmg
          </strong>
        </div>

        <div style="background: #090c13; border: 1px solid var(--border-color); padding: 0.75rem 1rem; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.82rem; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase; font-weight: 700;">Tốc Độ Sprint:</span>
          <strong style="color: ${isSpeedHigher ? 'var(--color-amber)' : 'var(--text-dim)'}; font-family: var(--font-mono); font-size: 1.05rem;">
            ${current.sprintSpeed} km/h
          </strong>
        </div>

        <div style="background: #090c13; border: 1px solid var(--border-color); padding: 0.75rem 1rem; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.82rem; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase; font-weight: 700;">Thể Lực (Stam):</span>
          <strong style="font-family: var(--font-mono); color: var(--text-main); font-size: 1.05rem;">${current.stamina} pts</strong>
        </div>
      </div>
    `;
  },

  renderDifferential(statsA, statsB) {
    const diffBox = document.getElementById('compareDifferential');
    if (!diffBox) return;

    const totalWeight = statsA.weight + statsB.weight;
    const percentA = Math.round((statsA.weight / totalWeight) * 100);
    const percentB = 100 - percentA;

    const ratio = (statsA.weight / statsB.weight).toFixed(2);
    const heavier = statsA.weight >= statsB.weight ? this.creatureA.name : this.creatureB.name;
    const lighter = statsA.weight >= statsB.weight ? this.creatureB.name : this.creatureA.name;
    const multiplier = statsA.weight >= statsB.weight ? ratio : (statsB.weight / statsA.weight).toFixed(2);

    let combatAnalysis = '';
    if (multiplier >= 2.0) {
      combatAnalysis = `
        <span style="color: var(--color-crimson); font-weight: 700;">[ Chênh lệch thể hình áp đảo ]</span> 
        <strong>${heavier}</strong> nặng gấp <strong>${multiplier} lần</strong> ${lighter}. 
        Các đòn khóa hàm (Lockjaw), húc ngã (Knockdown) hoặc quất đuôi của ${heavier} sẽ gây choáng và sát thương hủy diệt tức thì.
      `;
    } else if (multiplier >= 1.25) {
      combatAnalysis = `
        <span style="color: var(--color-amber); font-weight: 700;">[ Kèo đấu chênh lệch vừa phải ]</span> 
        <strong>${heavier}</strong> có lợi thế đẩy lùi và kháng choáng hơn, tuy nhiên <strong>${lighter}</strong> hoàn toàn có thể lật kèo nếu tận dụng tốc độ di chuyển và luồn lách né chiêu.
      `;
    } else {
      combatAnalysis = `
        <span style="color: var(--color-emerald); font-weight: 700;">[ Kèo đấu cân bằng ngang ngửa ]</span> 
        Hai bên tương đương hạng cân. Kết quả trận chiến hoàn toàn phụ thuộc vào kỹ năng né chiêu, quản lý thể lực (Stamina) và lượng dinh dưỡng bổ sung.
      `;
    }

    diffBox.innerHTML = `
      <div style="font-size: 0.82rem; color: var(--text-dim); text-transform: uppercase; font-family: var(--font-mono); font-weight: 700; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
        Phân Tích Tương Quan Lực Lượng (Weight Dominance Matrix)
      </div>
      <div class="weight-multiplier-highlight" style="font-family: var(--font-mono); font-size: 1.6rem; color: var(--text-main); margin-bottom: 0.75rem;">
        ${heavier} : ${lighter} = <span style="color: var(--color-emerald);">${multiplier}x</span>
      </div>

      <!-- Visual Tug-of-war bar -->
      <div style="margin: 1.25rem auto; max-width: 600px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-family: var(--font-mono); font-weight: 700; margin-bottom: 0.35rem;">
          <span style="color: var(--color-cyan);">${this.creatureA.name} (${percentA}%)</span>
          <span style="color: var(--color-crimson);">${this.creatureB.name} (${percentB}%)</span>
        </div>
        <div style="height: 8px; border-radius: 4px; background: #1e2638; overflow: hidden; display: flex;">
          <div style="width: ${percentA}%; background: var(--color-cyan); transition: width 0.3s ease;"></div>
          <div style="width: ${percentB}%; background: var(--color-crimson); transition: width 0.3s ease;"></div>
        </div>
      </div>

      <p style="margin-top: 0.85rem; font-size: 0.9rem; color: var(--text-muted); max-width: 820px; margin-left: auto; margin-right: auto; line-height: 1.65;">
        ${combatAnalysis}
      </p>
    `;
  }
};

window.CompareTool = CompareTool;
