/**
 * THE ISLE WIKI - COMPARE & MATCHUP TOOL
 * Side-by-side Dinosaur comparison with dynamic growth sliders and weight advantages
 */

const CompareTool = {
  creatureA: null,
  creatureB: null,
  growthA: 100,
  growthB: 100,

  init() {
    this.populateDropdowns();
    this.bindEvents();

    // Default select first two creatures (e.g. Deinosuchus and Stegosaurus)
    const all = DataService.getAllCreatures();
    if (all.length >= 2) {
      this.creatureA = all[0];
      this.creatureB = all[1];
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
        this.render();
      });
    }

    if (selectB) {
      selectB.addEventListener('change', (e) => {
        this.creatureB = DataService.getCreatureById(e.target.value);
        this.render();
      });
    }

    if (sliderA) {
      sliderA.addEventListener('input', (e) => {
        this.growthA = parseInt(e.target.value, 10);
        this.render();
      });
    }

    if (sliderB) {
      sliderB.addEventListener('input', (e) => {
        this.growthB = parseInt(e.target.value, 10);
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
      <div style="margin-bottom: 1rem;">
        <span class="badge badge-${creature.diet}">${creature.dietLabelVi}</span>
        <span class="badge" style="background: rgba(255,255,255,0.06);">${creature.tierLabelVi}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.85rem;">
        <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">⚖️ Trọng Lượng:</span>
          <strong style="color: ${isWeightHigher ? 'var(--color-emerald)' : 'var(--text-dim)'}; font-family: var(--font-mono); font-size: 1.1rem;">
            ${current.weight.toLocaleString('vi-VN')} kg
          </strong>
        </div>

        <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">❤️ Lượng Máu:</span>
          <strong style="color: ${isHealthHigher ? 'var(--color-emerald)' : 'var(--text-dim)'}; font-family: var(--font-mono); font-size: 1.1rem;">
            ${current.health.toLocaleString('vi-VN')} HP
          </strong>
        </div>

        <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">⚔️ Sát Thương:</span>
          <strong style="color: ${isDamageHigher ? 'var(--color-crimson)' : 'var(--text-dim)'}; font-family: var(--font-mono); font-size: 1.1rem;">
            ${current.biteDamage} dmg
          </strong>
        </div>

        <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">⚡ Tốc Độ Sprint:</span>
          <strong style="color: ${isSpeedHigher ? 'var(--color-amber)' : 'var(--text-dim)'}; font-family: var(--font-mono); font-size: 1.1rem;">
            ${current.sprintSpeed} km/h
          </strong>
        </div>

        <div style="background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--text-muted);">🔋 Thể Lực (Stam):</span>
          <strong style="font-family: var(--font-mono);">${current.stamina} pts</strong>
        </div>
      </div>
    `;
  },

  renderDifferential(statsA, statsB) {
    const diffBox = document.getElementById('compareDifferential');
    if (!diffBox) return;

    const ratio = (statsA.weight / statsB.weight).toFixed(2);
    const heavier = statsA.weight >= statsB.weight ? this.creatureA.name : this.creatureB.name;
    const lighter = statsA.weight >= statsB.weight ? this.creatureB.name : this.creatureA.name;
    const multiplier = statsA.weight >= statsB.weight ? ratio : (statsB.weight / statsA.weight).toFixed(2);

    let combatAnalysis = '';
    if (multiplier >= 2.0) {
      combatAnalysis = `
        <span style="color: var(--color-crimson); font-weight: 700;">⚠️ Chênh lệch thể hình áp đảo!</span> 
        ${heavier} nặng gấp <strong>${multiplier} lần</strong> ${lighter}. 
        Các đòn khóa hàm (Lockjaw), húc ngã (Knockdown) hoặc quất đuôi của ${heavier} sẽ gây choáng và sát thương hủy diệt tức thì.
      `;
    } else if (multiplier >= 1.25) {
      combatAnalysis = `
        <span style="color: var(--color-amber); font-weight: 700;">⚖️ Kèo đấu có chênh lệch vừa phải.</span> 
        ${heavier} có lợi thế đẩy lùi và kháng choáng hơn, tuy nhiên ${lighter} hoàn toàn có thể lật kèo nếu tận dụng tốc độ di chuyển và luồn lách.
      `;
    } else {
      combatAnalysis = `
        <span style="color: var(--color-emerald); font-weight: 700;">⚔️ Kèo đấu cân tài cân sức!</span> 
        Hai bên tương đương hạng cân. Kết quả trận chiến hoàn toàn phụ thuộc vào kỹ năng né chiêu, quản lý thể lực (Stamina) và lượng dinh dưỡng bổ sung.
      `;
    }

    diffBox.innerHTML = `
      <div style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-bottom: 0.5rem;">
        Phân Tích Tương Quan Lực Lượng (Weight Ratio)
      </div>
      <div class="weight-multiplier-highlight">${heavier} : ${lighter} = ${multiplier}x</div>
      <p style="margin-top: 0.75rem; font-size: 0.95rem; color: var(--text-main); max-width: 800px; margin-left: auto; margin-right: auto; line-height: 1.6;">
        ${combatAnalysis}
      </p>
    `;
  }
};

window.CompareTool = CompareTool;
