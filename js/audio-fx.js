/**
 * THE ISLE WIKI - AUDIO FX (WEB AUDIO API SYNTH)
 * Zero external audio dependencies. Generates dynamic sci-fi / prehistoric UI audio cues.
 */

const AudioFX = {
  ctx: null,
  enabled: true,

  init() {
    // Load preference from localStorage
    const saved = localStorage.getItem('isle_wiki_audio');
    if (saved !== null) {
      this.enabled = saved === 'true';
    }
    this.updateToggleUI();

    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        this.enabled = !this.enabled;
        localStorage.setItem('isle_wiki_audio', this.enabled);
        this.updateToggleUI();
        if (this.enabled) this.playTone(520, 0.08, 'sine');
      });
    }
  },

  getCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  },

  playTone(freq = 440, duration = 0.08, type = 'sine', gainVal = 0.05) {
    if (!this.enabled) return;
    try {
      const ctx = this.getCtx();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio context may be blocked by autoplay policies until user interaction
    }
  },

  playTick() {
    this.playTone(600, 0.03, 'triangle', 0.02);
  },

  playSelect() {
    this.playTone(480, 0.06, 'sine', 0.04);
  },

  playOpen() {
    if (!this.enabled) return;
    this.playTone(320, 0.06, 'sine', 0.04);
    setTimeout(() => this.playTone(540, 0.08, 'sine', 0.04), 50);
  },

  updateToggleUI() {
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.textContent = this.enabled ? '🔊' : '🔇';
      btn.title = this.enabled ? 'Tắt âm thanh hiệu ứng' : 'Bật âm thanh hiệu ứng';
      btn.setAttribute('aria-label', this.enabled ? 'Tắt âm thanh' : 'Bật âm thanh');
    }
  }
};

window.AudioFX = AudioFX;
