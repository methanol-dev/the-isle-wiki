/**
 * THE ISLE WIKI - AMBIENT PREHISTORIC PARTICLES
 * Lightweight, 60fps canvas ambient spores drifting gently in the background.
 */

(function initAmbientParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'ambientParticlesCanvas';
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0';
  canvas.style.opacity = '0.65';
  
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 35; // optimal density without CPU overhead

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2 + 0.8;
      this.speedY = Math.random() * 0.4 + 0.15;
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.alpha = Math.random() * 0.45 + 0.15;
      this.hue = Math.random() > 0.6 ? 160 : (Math.random() > 0.5 ? 190 : 45); // Emerald, Cyan, Gold
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 85%, 65%, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `hsla(${this.hue}, 90%, 60%, 0.8)`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  // Optimize: pause when tab is inactive
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });

  animate();
})();
