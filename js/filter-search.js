/**
 * THE ISLE WIKI - FILTER & SEARCH CONTROLLER
 */

const FilterSearch = {
  currentDiet: 'all',
  currentLocomotion: 'all',
  currentSort: 'weight_desc',
  searchQuery: '',

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('mainSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    // Filter buttons (Diet)
    const dietButtons = document.querySelectorAll('[data-filter-diet]');
    dietButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        dietButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentDiet = btn.getAttribute('data-filter-diet');
        this.render();
      });
    });

    // Locomotion / Tier buttons
    const locoButtons = document.querySelectorAll('[data-filter-loco]');
    locoButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        locoButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentLocomotion = btn.getAttribute('data-filter-loco');
        this.render();
      });
    });

    // Sorter
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.currentSort = e.target.value;
        this.render();
      });
    }
  },

  getFilteredCreatures() {
    let list = DataService.getAllCreatures();

    // 1. Search Query
    if (this.searchQuery) {
      list = list.filter(c => {
        const matchName = c.name.toLowerCase().includes(this.searchQuery);
        const matchVi = c.vietnameseName.toLowerCase().includes(this.searchQuery);
        const matchSci = c.scientificName.toLowerCase().includes(this.searchQuery);
        const matchDiet = c.dietLabelVi.toLowerCase().includes(this.searchQuery);
        const matchOverview = c.overview.toLowerCase().includes(this.searchQuery);
        return matchName || matchVi || matchSci || matchDiet || matchOverview;
      });
    }

    // 2. Diet Filter
    if (this.currentDiet !== 'all') {
      list = list.filter(c => c.diet === this.currentDiet);
    }

    // 3. Locomotion Filter
    if (this.currentLocomotion !== 'all') {
      list = list.filter(c => c.locomotion === this.currentLocomotion);
    }

    // 4. Sorting
    list.sort((a, b) => {
      switch (this.currentSort) {
        case 'weight_desc':
          return b.statsMax.weight - a.statsMax.weight;
        case 'weight_asc':
          return a.statsMax.weight - b.statsMax.weight;
        case 'speed_desc':
          return b.statsMax.sprintSpeed - a.statsMax.sprintSpeed;
        case 'growth_asc':
          return a.growthTimeHours - b.growthTimeHours;
        case 'growth_desc':
          return b.growthTimeHours - a.growthTimeHours;
        case 'name_asc':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return list;
  },

  render() {
    const grid = document.getElementById('creatureGrid');
    const countDisplay = document.getElementById('resultsCount');
    if (!grid) return;

    const creatures = this.getFilteredCreatures();

    if (countDisplay) {
      countDisplay.textContent = `Hiển thị ${creatures.length} loài khủng long`;
    }

    if (creatures.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3>Không tìm thấy loài khủng long nào</h3>
          <p>Hãy thử thay đổi từ khóa tìm kiếm hoặc bỏ bớt bộ lọc.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = creatures.map(c => {
      const dietBadgeClass = `badge-${c.diet}`;
      const tierBadgeClass = c.tier === 'apex' ? 'badge badge-apex' : 'badge';

      return `
        <div class="creature-card" style="--card-accent: ${c.badgeColor};" onclick="ModalDetails.open('${c.id}')">
          <div>
            <div class="card-header">
              <div class="creature-title-group">
                <h3>${c.name}</h3>
                <div class="creature-vietnameseName">${c.vietnameseName}</div>
                <div class="creature-scientific-name">${c.scientificName}</div>
              </div>
              <span class="badge ${dietBadgeClass}">${c.dietLabelVi}</span>
            </div>

            <div class="card-badges">
              <span class="${tierBadgeClass}">${c.tierLabelVi}</span>
              <span class="badge" style="background: rgba(255,255,255,0.06); color: var(--text-muted);">${c.locomotionLabelVi}</span>
            </div>

            <p class="creature-overview-snippet">${c.overview}</p>

            <div class="card-stats-preview">
              <div class="stat-meter-row">
                <span class="stat-meter-label">⚖️ Trọng lượng Max</span>
                <span class="stat-meter-value">${c.statsMax.weight.toLocaleString('vi-VN')} kg</span>
              </div>
              <div class="stat-meter-row">
                <span class="stat-meter-label">⚡ Tốc độ Sprint</span>
                <span class="stat-meter-value">${c.statsMax.sprintSpeed} km/h</span>
              </div>
              <div class="stat-meter-row">
                <span class="stat-meter-label">⚔️ Sát thương cắn</span>
                <span class="stat-meter-value">${c.statsMax.biteDamage} dmg</span>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="growth-time-tag">
              ⏱️ Lớn: <strong>${c.growthTimeFormatted}</strong>
            </div>
            <div class="card-action-hint">
              Xem chi tiết ➔
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
};

window.FilterSearch = FilterSearch;
