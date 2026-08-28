/**
 * THE ISLE WIKI - SECURITY UTILS
 * Sanitization, escaping, and defensive programming against XSS / injection
 */

const SecurityUtils = {
  /**
   * Escape potentially dangerous HTML characters
   */
  escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  /**
   * Sanitize search input queries
   */
  sanitizeQuery(query) {
    if (typeof query !== 'string') return '';
    return query.trim().slice(0, 100); // Limit search length to prevent ReDoS / memory abuse
  },

  /**
   * Validate that an ID contains only alphanumeric characters and hyphens/underscores
   */
  isValidId(id) {
    if (typeof id !== 'string') return false;
    return /^[a-z0-9_-]{1,50}$/i.test(id);
  }
};

window.SecurityUtils = SecurityUtils;
