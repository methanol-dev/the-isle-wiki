/**
 * THE ISLE WIKI - MAIN APP ORCHESTRATOR
 */

document.addEventListener('DOMContentLoaded', async () => {
  console.log('🦖 Khởi tạo The Isle Wiki (Evrima) - Tiếng Việt...');

  // 1. Load Data
  await DataService.init();

  // 2. Initialize Components
  if (typeof FilterSearch !== 'undefined') {
    FilterSearch.init();
  }

  if (typeof ModalDetails !== 'undefined') {
    ModalDetails.init();
  }

  if (typeof CompareTool !== 'undefined') {
    CompareTool.init();
  }

  // 3. Initialize Global Quick Search Modal (Cmd+K)
  initQuickSearch();

  // 4. Initialize Mobile Navigation
  initMobileNav();

  // 5. Check URL parameters for direct opening (e.g. ?open=deinosuchus)
  checkUrlParams();
});

/**
 * Handle incoming URL parameters with strict validation
 */
function checkUrlParams() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const openId = urlParams.get('open');
    if (openId && typeof SecurityUtils !== 'undefined' && SecurityUtils.isValidId(openId)) {
      if (typeof ModalDetails !== 'undefined') {
        setTimeout(() => ModalDetails.open(openId), 150);
      }
    }
  } catch (e) {
    console.warn('URL param parse error:', e);
  }
}

/**
 * Global Cmd+K / Ctrl+K Quick Search Dialog
 */
function initQuickSearch() {
  const modal = document.getElementById('cmdSearchModal');
  const triggerBtn = document.getElementById('searchTriggerBtn');
  const input = document.getElementById('cmdSearchInput');
  const resultsContainer = document.getElementById('cmdResultsList');

  if (!modal || !input || !resultsContainer) return;

  function openSearch() {
    modal.classList.add('active');
    input.value = '';
    renderSearchResults('');
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    modal.classList.remove('active');
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openSearch);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    // Cmd+K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    // Escape
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeSearch();
    }
  });

  input.addEventListener('input', (e) => {
    const cleanQuery = typeof SecurityUtils !== 'undefined' 
      ? SecurityUtils.sanitizeQuery(e.target.value) 
      : e.target.value.trim();
    renderSearchResults(cleanQuery.toLowerCase());
  });

  function renderSearchResults(query) {
    const creatures = DataService.getAllCreatures();
    let filtered = creatures;

    if (query) {
      filtered = creatures.filter(c => 
        c.name.toLowerCase().includes(query) ||
        c.vietnameseName.toLowerCase().includes(query) ||
        c.dietLabelVi.toLowerCase().includes(query)
      );
    }

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <li style="padding: 1.5rem; text-align: center; color: var(--text-dim);">
          Không tìm thấy kết quả nào phù hợp
        </li>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map(c => `
      <li class="cmd-result-item" onclick="openCreatureFromSearch('${c.id}')">
        <div>
          <strong>${c.name}</strong> 
          <span style="color: var(--text-emerald); margin-left: 0.5rem; font-size: 0.85rem;">(${c.vietnameseName})</span>
          <div style="font-size: 0.75rem; color: var(--text-dim);">${c.scientificName}</div>
        </div>
        <span class="badge badge-${c.diet}">${c.dietLabelVi}</span>
      </li>
    `).join('');
  }

  window.openCreatureFromSearch = function(id) {
    closeSearch();
    if (typeof SecurityUtils !== 'undefined' && !SecurityUtils.isValidId(id)) {
      return;
    }
    if (typeof ModalDetails !== 'undefined') {
      ModalDetails.open(id);
    } else {
      window.location.href = `./index.html?open=${encodeURIComponent(id)}`;
    }
  };
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navbarLinks');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });
  }
}
