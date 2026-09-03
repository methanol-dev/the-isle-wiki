const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const dataDir = path.join(__dirname, '..', 'data');

describe('Data Integrity & Schema Validation Tests', () => {
  describe('data/creatures.json', () => {
    const rawData = fs.readFileSync(path.join(dataDir, 'creatures.json'), 'utf8');
    const creatures = JSON.parse(rawData);

    it('should be an array containing at least 17 creature species', () => {
      assert.ok(Array.isArray(creatures));
      assert.ok(creatures.length >= 17, `Expected >= 17 creatures, found ${creatures.length}`);
    });

    it('should have unique IDs without duplicates', () => {
      const ids = creatures.map(c => c.id);
      const uniqueIds = new Set(ids);
      assert.strictEqual(ids.length, uniqueIds.size, 'Duplicate creature IDs detected');
    });

    it('should have all required fields and valid schema for each creature', () => {
      const validDiets = ['carnivore', 'herbivore', 'omnivore', 'piscivore'];
      const validTiers = ['apex', 'large', 'medium', 'small'];
      const validLocomotions = ['terrestrial', 'semi-aquatic', 'aerial'];

      creatures.forEach(c => {
        assert.ok(c.id && typeof c.id === 'string', `Invalid ID for creature ${c.name}`);
        assert.match(c.id, /^[a-z0-9_-]+$/, `ID contains illegal characters: ${c.id}`);
        assert.ok(c.name && typeof c.name === 'string');
        assert.ok(c.vietnameseName && typeof c.vietnameseName === 'string');
        assert.ok(validDiets.includes(c.diet), `Invalid diet: ${c.diet} for ${c.id}`);
        assert.ok(validTiers.includes(c.tier), `Invalid tier: ${c.tier} for ${c.id}`);
        assert.ok(validLocomotions.includes(c.locomotion), `Invalid locomotion: ${c.locomotion} for ${c.id}`);
        assert.ok(c.growthTimeHours > 0, `Invalid growth time for ${c.id}`);

        // Stat sanity checks
        assert.ok(c.statsMin && c.statsMax, `Missing stats for ${c.id}`);
        assert.ok(c.statsMax.weight >= c.statsMin.weight, `Max weight < Min weight for ${c.id}`);
        assert.ok(c.statsMax.health >= c.statsMin.health, `Max health < Min health for ${c.id}`);
        assert.ok(c.statsMax.biteDamage >= c.statsMin.biteDamage, `Max damage < Min damage for ${c.id}`);

        // Diet info check
        assert.ok(c.dietInfo && Array.isArray(c.dietInfo.slots), `Invalid dietInfo for ${c.id}`);
        assert.ok(Array.isArray(c.abilities), `Missing abilities array for ${c.id}`);
      });
    });

    it('should specify weight ratio conditions for Deinosuchus grab and Omniraptor pounce', () => {
      const deino = creatures.find(c => c.id === 'deinosuchus');
      const omni = creatures.find(c => c.id === 'omniraptor');
      const ptera = creatures.find(c => c.id === 'pteranodon');

      const deinoLunge = deino.abilities.find(a => a.name.includes('Water Ambush') || a.name.includes('Lunge'));
      assert.ok(deinoLunge.description.includes('50%'), 'Deinosuchus lunge must specify 50% weight limit');

      const omniPounce = omni.abilities.find(a => a.name.includes('Pounce'));
      assert.ok(omniPounce.description.includes('100%'), 'Omniraptor pounce must specify 100% solo weight limit');

      const pteraWeaknesses = ptera.combatTips.weaknesses.join(' ');
      assert.ok(pteraWeaknesses.includes('KHÔNG THỂ') || pteraWeaknesses.includes('grab'), 'Pteranodon must state lack of grab');
    });
  });

  describe('Other JSON datasets', () => {
    it('should parse data/nutrients.json successfully', () => {
      const raw = fs.readFileSync(path.join(dataDir, 'nutrients.json'), 'utf8');
      const nutrients = JSON.parse(raw);
      assert.ok(typeof nutrients === 'object' && nutrients !== null);
    });

    it('should parse data/mechanics.json successfully', () => {
      const raw = fs.readFileSync(path.join(dataDir, 'mechanics.json'), 'utf8');
      const mechanics = JSON.parse(raw);
      assert.ok(typeof mechanics === 'object' && mechanics !== null);
    });

    it('should parse data/maps.json successfully', () => {
      const raw = fs.readFileSync(path.join(dataDir, 'maps.json'), 'utf8');
      const maps = JSON.parse(raw);
      assert.ok(typeof maps === 'object' && maps !== null);
    });

    it('should parse data/mutations.json successfully', () => {
      const raw = fs.readFileSync(path.join(dataDir, 'mutations.json'), 'utf8');
      const mutations = JSON.parse(raw);
      assert.ok(typeof mutations === 'object' && mutations !== null);
    });
  });
});
