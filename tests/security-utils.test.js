const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const SecurityUtils = require('../js/security-utils.js');

describe('SecurityUtils Module Tests', () => {
  describe('escapeHTML()', () => {
    it('should escape dangerous HTML characters (&, <, >, ", \')', () => {
      const input = '<script>alert("XSS & attack\'s")</script>';
      const expected = '&lt;script&gt;alert(&quot;XSS &amp; attack&#039;s&quot;)&lt;/script&gt;';
      assert.strictEqual(SecurityUtils.escapeHTML(input), expected);
    });

    it('should return empty string for non-string inputs', () => {
      assert.strictEqual(SecurityUtils.escapeHTML(null), '');
      assert.strictEqual(SecurityUtils.escapeHTML(undefined), '');
      assert.strictEqual(SecurityUtils.escapeHTML(12345), '');
      assert.strictEqual(SecurityUtils.escapeHTML({}), '');
    });

    it('should keep clean alphanumeric text unchanged', () => {
      const input = 'Deinosuchus Carnivore 100%';
      assert.strictEqual(SecurityUtils.escapeHTML(input), input);
    });
  });

  describe('sanitizeQuery()', () => {
    it('should trim leading and trailing whitespaces', () => {
      const input = '   deinosuchus   ';
      assert.strictEqual(SecurityUtils.sanitizeQuery(input), 'deinosuchus');
    });

    it('should truncate strings exceeding 100 characters', () => {
      const longInput = 'a'.repeat(150);
      const result = SecurityUtils.sanitizeQuery(longInput);
      assert.strictEqual(result.length, 100);
      assert.strictEqual(result, 'a'.repeat(100));
    });

    it('should return empty string for non-string inputs', () => {
      assert.strictEqual(SecurityUtils.sanitizeQuery(null), '');
      assert.strictEqual(SecurityUtils.sanitizeQuery(undefined), '');
      assert.strictEqual(SecurityUtils.sanitizeQuery(42), '');
    });
  });

  describe('isValidId()', () => {
    it('should accept valid kebab-case, snake_case, and alphanumeric IDs', () => {
      assert.strictEqual(SecurityUtils.isValidId('deinosuchus'), true);
      assert.strictEqual(SecurityUtils.isValidId('t-rex'), true);
      assert.strictEqual(SecurityUtils.isValidId('carnotaurus_01'), true);
      assert.strictEqual(SecurityUtils.isValidId('Ceratosaurus'), true);
    });

    it('should reject invalid IDs containing path traversal or illegal characters', () => {
      assert.strictEqual(SecurityUtils.isValidId('../secret'), false);
      assert.strictEqual(SecurityUtils.isValidId('deino suchus'), false);
      assert.strictEqual(SecurityUtils.isValidId('<script>'), false);
      assert.strictEqual(SecurityUtils.isValidId('rex!@#'), false);
      assert.strictEqual(SecurityUtils.isValidId(''), false);
    });

    it('should reject non-string inputs or IDs exceeding 50 characters', () => {
      assert.strictEqual(SecurityUtils.isValidId(null), false);
      assert.strictEqual(SecurityUtils.isValidId(undefined), false);
      assert.strictEqual(SecurityUtils.isValidId(123), false);
      assert.strictEqual(SecurityUtils.isValidId('a'.repeat(51)), false);
    });
  });
});
