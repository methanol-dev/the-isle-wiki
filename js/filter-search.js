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
        const raw = e.target.value;
        this.searchQuery = typeof SecurityUtils !== 'undefined'
          ? SecurityUtils.sanitizeQuery(raw).toLowerCase()
          : raw.toLowerCase().trim();
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
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.35rem; color: var(--text-main); margin-bottom: 0.5rem;">Không tìm thấy loài khủng long nào</h3>
          <p style="color: var(--text-dim); margin-bottom: 1.25rem;">Hãy thử thay đổi từ khóa tìm kiếm hoặc bỏ bớt các tùy chọn lọc.</p>
          <button class="btn btn-primary" onclick="FilterSearch.resetFilters()" style="padding: 0.6rem 1.25rem; font-size: 0.88rem;">
            <span>🔄</span> Khôi phục tất cả bộ lọc
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = creatures.map((c, index) => {
      const dietBadgeClass = `badge-${c.diet}`;
      let tierBadgeClass = 'badge badge-tier-small';
      if (c.tier === 'apex') {
        tierBadgeClass = 'badge badge-apex';
      } else if (c.tier === 'heavy') {
        tierBadgeClass = 'badge badge-tier-heavy';
      } else if (c.tier === 'medium') {
        tierBadgeClass = 'badge badge-tier-medium';
      }

      return `
        <div class="creature-card" style="--card-accent: ${c.badgeColor}; animation-delay: ${Math.min(300, index * 25)}ms;" onclick="ModalDetails.open('${c.id}')">
          <div>
            <div class="creature-card-banner">
              <img src="${c.image}" alt="${c.name} The Isle Evrima" loading="lazy" class="creature-card-img" onerror="this.style.display='none'">
              <div class="card-badges-floating">
                <span class="${tierBadgeClass}">${c.tierLabelVi}</span>
                <span class="badge ${dietBadgeClass}">${c.dietLabelVi}</span>
              </div>
            </div>

            <div class="card-header">
              <div class="creature-title-group">
                <h3>${c.name}</h3>
                <div class="creature-vietnamese-name">${c.vietnameseName}</div>
                <div class="creature-scientific-name">${c.scientificName}</div>
              </div>
            </div>

            <div class="card-badges" style="margin-bottom: 0.85rem;">
              <span class="badge" style="background: rgba(15, 23, 42, 0.65); color: var(--text-muted); border-color: rgba(255, 255, 255, 0.08);">${c.locomotionLabelVi}</span>
            </div>

            <p class="creature-overview-snippet">${c.overview}</p>

            <div class="card-stats-preview">
              <div class="stat-meter-item">
                <div class="stat-meter-row">
                  <span class="stat-meter-label">Trọng lượng</span>
                  <span class="stat-meter-value">${c.statsMax.weight.toLocaleString('vi-VN')} kg</span>
                </div>
                <div class="stat-bar-track">
                  <div class="stat-bar-fill" style="width: ${Math.min(100, (c.statsMax.weight / 8000) * 100)}%; background: var(--color-cyan);"></div>
                </div>
              </div>

              <div class="stat-meter-item">
                <div class="stat-meter-row">
                  <span class="stat-meter-label">Tốc độ Sprint</span>
                  <span class="stat-meter-value">${c.statsMax.sprintSpeed} km/h</span>
                </div>
                <div class="stat-bar-track">
                  <div class="stat-bar-fill" style="width: ${Math.min(100, (c.statsMax.sprintSpeed / 60) * 100)}%; background: var(--color-emerald);"></div>
                </div>
              </div>

              <div class="stat-meter-item">
                <div class="stat-meter-row">
                  <span class="stat-meter-label">Lực cắn</span>
                  <span class="stat-meter-value">${c.statsMax.biteDamage} dmg</span>
                </div>
                <div class="stat-bar-track">
                  <div class="stat-bar-fill" style="width: ${Math.min(100, (c.statsMax.biteDamage / 1200) * 100)}%; background: var(--color-crimson);"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="growth-time-tag">
              Lớn: <strong>${c.growthTimeFormatted}</strong>
            </div>
            <div class="card-action-hint">
              Hồ sơ chi tiết ➔
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (typeof window.attachCardTilts === 'function') {
      window.attachCardTilts();
    }
  },

  resetFilters() {
    this.currentDiet = 'all';
    this.currentLocomotion = 'all';
    this.currentSort = 'weight_desc';
    this.searchQuery = '';

    const searchInput = document.getElementById('mainSearchInput');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('[data-filter-diet]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter-diet') === 'all');
    });

    document.querySelectorAll('[data-filter-loco]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter-loco') === 'all');
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'weight_desc';

    if (typeof AudioFX !== 'undefined') AudioFX.playSelect();
    if (typeof ToastService !== 'undefined') ToastService.show('Đã khôi phục toàn bộ bộ lọc và tìm kiếm!', 'info');

    this.render();
  }
};

window.FilterSearch = FilterSearch;
