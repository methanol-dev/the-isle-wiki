/**
 * THE ISLE WIKI - 3D CARD TILT & MOUSE SPOTLIGHT (MAGIC UI PATTERN)
 * Adds dynamic 3D perspective and subtle glowing cursor glare to cards
 */

(function initCardTilt() {
  function applyTilt(card) {
    if (card._tiltInitialized) return;
    card._tiltInitialized = true;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max tilt angle = 8 degrees
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }

  // Global observer for dynamically rendered cards
  window.attachCardTilts = function() {
    const cards = document.querySelectorAll('.creature-card, .ticker-card, .nutrient-card');
    cards.forEach(applyTilt);
  };

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(window.attachCardTilts, 100);
  });
})();
