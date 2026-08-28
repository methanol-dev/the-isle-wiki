/**
 * THE ISLE WIKI - TOAST NOTIFICATION SERVICE
 * HUD Prehistoric notification toast for copy actions, alerts, and feedback
 */

const ToastService = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'hudToastContainer';
      this.container.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        pointer-events: none;
      `;
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'success', duration = 2800) {
    this.init();

    const toast = document.createElement('div');
    const accentColor = type === 'success' ? 'var(--color-emerald)' : (type === 'error' ? 'var(--color-crimson)' : 'var(--color-cyan)');
    const icon = type === 'success' ? '🦖' : (type === 'error' ? '⚠️' : 'ℹ️');

    toast.style.cssText = `
      background: rgba(11, 16, 22, 0.95);
      border: 1px solid ${accentColor};
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9), 0 0 20px rgba(16, 185, 129, 0.25);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      color: var(--text-main);
      padding: 0.85rem 1.4rem;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      pointer-events: auto;
      transform: translateY(20px) scale(0.95);
      opacity: 0;
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    `;

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    this.container.appendChild(toast);

    if (typeof AudioFX !== 'undefined') {
      AudioFX.playSelect();
    }

    // Trigger entrance animation
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0) scale(1)';
      toast.style.opacity = '1';
    });

    // Fade out and remove
    setTimeout(() => {
      toast.style.transform = 'translateY(-10px) scale(0.95)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }
};

window.ToastService = ToastService;
