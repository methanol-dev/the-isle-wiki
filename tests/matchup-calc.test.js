const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const GrowthCalc = require('../js/growth-calc.js');

describe('Matchup & Combat Simulation Tests', () => {
  const deinosuchus = {
    name: 'Deinosuchus',
    growthTimeHours: 5.5,
    statsMin: { weight: 200, health: 400, biteDamage: 50, sprintSpeed: 25, trotSpeed: 15, swimSpeed: 30, stamina: 80, staminaRegen: 'Chậm', nightVision: 'Kém', fallDamageResistance: 'Thấp' },
    statsMax: { weight: 8000, health: 7500, biteDamage: 1100, sprintSpeed: 35, trotSpeed: 20, swimSpeed: 45, stamina: 120, staminaRegen: 'Khá', nightVision: 'Hoàn hảo', fallDamageResistance: 'Trung bình' }
  };

  const ceratosaurus = {
    name: 'Ceratosaurus',
    growthTimeHours: 2.5,
    statsMin: { weight: 150, health: 350, biteDamage: 40, sprintSpeed: 30, trotSpeed: 18, swimSpeed: 20, stamina: 100, staminaRegen: 'Khá', nightVision: 'Trung bình', fallDamageResistance: 'Trung bình' },
    statsMax: { weight: 2200, health: 2200, biteDamage: 280, sprintSpeed: 44, trotSpeed: 24, swimSpeed: 25, stamina: 150, staminaRegen: 'Nhanh', nightVision: 'Tốt', fallDamageResistance: 'Cao' }
  };

  function computeMatchup(creatureA, percentA, creatureB, percentB) {
    const statsA = GrowthCalc.calculateStats(creatureA, percentA);
    const statsB = GrowthCalc.calculateStats(creatureB, percentB);
    const heavier = statsA.weight >= statsB.weight ? creatureA.name : creatureB.name;
    const lighter = statsA.weight >= statsB.weight ? creatureB.name : creatureA.name;
    const maxW = Math.max(statsA.weight, statsB.weight);
    const minW = Math.min(statsA.weight, statsB.weight);
    const ratio = parseFloat((maxW / minW).toFixed(2));

    let tier = 'balanced';
    if (ratio >= 2.0) {
      tier = 'dominant';
    } else if (ratio >= 1.25) {
      tier = 'moderate';
    }

    return { statsA, statsB, heavier, lighter, ratio, tier };
  }

  it('should identify dominant weight advantage when weight ratio >= 2.0x', () => {
    // 100% Deino (8000kg) vs 100% Cerato (2200kg) -> ~3.64x
    const result = computeMatchup(deinosuchus, 100, ceratosaurus, 100);
    assert.strictEqual(result.heavier, 'Deinosuchus');
    assert.ok(result.ratio >= 2.0);
    assert.strictEqual(result.tier, 'dominant');
  });

  it('should identify balanced matchup when weight ratio < 1.25x', () => {
    // 100% Cerato (2200kg) vs same weight opponent
    const result = computeMatchup(ceratosaurus, 100, ceratosaurus, 100);
    assert.strictEqual(result.ratio, 1.0);
    assert.strictEqual(result.tier, 'balanced');
  });

  it('should identify moderate weight advantage when 1.25x <= ratio < 2.0x', () => {
    // Simulated creature with 3000kg vs 2200kg Cerato -> 3000 / 2200 = ~1.36x
    const midWeightCreature = {
      name: 'Allosaurus',
      growthTimeHours: 3.5,
      statsMin: { weight: 180, health: 300, biteDamage: 40, sprintSpeed: 30, trotSpeed: 18, swimSpeed: 20, stamina: 100, staminaRegen: 'Khá', nightVision: 'Tốt', fallDamageResistance: 'Cao' },
      statsMax: { weight: 3000, health: 3000, biteDamage: 350, sprintSpeed: 42, trotSpeed: 22, swimSpeed: 22, stamina: 140, staminaRegen: 'Nhanh', nightVision: 'Tốt', fallDamageResistance: 'Cao' }
    };
    const result = computeMatchup(midWeightCreature, 100, ceratosaurus, 100);
    assert.strictEqual(result.heavier, 'Allosaurus');
    assert.ok(result.ratio >= 1.25 && result.ratio < 2.0);
    assert.strictEqual(result.tier, 'moderate');
  });
});
