const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const GrowthCalc = require('../js/growth-calc.js');

const mockCreature = {
  id: 'deinosuchus',
  name: 'Deinosuchus',
  growthTimeHours: 5.5,
  statsMin: {
    weight: 200,
    health: 400,
    biteDamage: 50,
    sprintSpeed: 25.0,
    trotSpeed: 15.0,
    swimSpeed: 30.0,
    stamina: 80,
    staminaRegen: 'Chậm',
    nightVision: 'Kém',
    fallDamageResistance: 'Thấp'
  },
  statsMax: {
    weight: 8000,
    health: 7500,
    biteDamage: 1100,
    sprintSpeed: 35.0,
    trotSpeed: 20.0,
    swimSpeed: 45.0,
    stamina: 120,
    staminaRegen: 'Khá',
    nightVision: 'Hoàn hảo',
    fallDamageResistance: 'Trung bình'
  }
};

describe('GrowthCalc Module Tests', () => {
  describe('getStageInfo()', () => {
    it('should classify 0% to 19.9% as Hatchling', () => {
      assert.strictEqual(GrowthCalc.getStageInfo(0).stage, 'hatchling');
      assert.strictEqual(GrowthCalc.getStageInfo(19.9).stage, 'hatchling');
    });

    it('should classify 20% to 49.9% as Juvenile', () => {
      assert.strictEqual(GrowthCalc.getStageInfo(20).stage, 'juvenile');
      assert.strictEqual(GrowthCalc.getStageInfo(49.9).stage, 'juvenile');
    });

    it('should classify 50% to 79.9% as Sub-Adult', () => {
      assert.strictEqual(GrowthCalc.getStageInfo(50).stage, 'subadult');
      assert.strictEqual(GrowthCalc.getStageInfo(79.9).stage, 'subadult');
    });

    it('should classify 80% to 99.9% as Adult', () => {
      assert.strictEqual(GrowthCalc.getStageInfo(80).stage, 'adult');
      assert.strictEqual(GrowthCalc.getStageInfo(99.9).stage, 'adult');
    });

    it('should classify 100% as Perfect Adult', () => {
      assert.strictEqual(GrowthCalc.getStageInfo(100).stage, 'perfect_adult');
    });
  });

  describe('calculateStats()', () => {
    it('should compute exact min stats at 0% growth', () => {
      const stats = GrowthCalc.calculateStats(mockCreature, 0);
      assert.strictEqual(stats.weight, mockCreature.statsMin.weight);
      assert.strictEqual(stats.health, mockCreature.statsMin.health);
      assert.strictEqual(stats.biteDamage, mockCreature.statsMin.biteDamage);
      assert.strictEqual(stats.sprintSpeed, mockCreature.statsMin.sprintSpeed);
      assert.strictEqual(stats.stamina, mockCreature.statsMin.stamina);
      assert.strictEqual(stats.staminaRegen, mockCreature.statsMin.staminaRegen);
      assert.strictEqual(stats.nightVision, mockCreature.statsMin.nightVision);
      assert.strictEqual(stats.stageInfo.stage, 'hatchling');
    });

    it('should compute exact max stats at 100% growth', () => {
      const stats = GrowthCalc.calculateStats(mockCreature, 100);
      assert.strictEqual(stats.weight, mockCreature.statsMax.weight);
      assert.strictEqual(stats.health, mockCreature.statsMax.health);
      assert.strictEqual(stats.biteDamage, mockCreature.statsMax.biteDamage);
      assert.strictEqual(stats.sprintSpeed, mockCreature.statsMax.sprintSpeed);
      assert.strictEqual(stats.stamina, mockCreature.statsMax.stamina);
      assert.strictEqual(stats.staminaRegen, mockCreature.statsMax.staminaRegen);
      assert.strictEqual(stats.nightVision, mockCreature.statsMax.nightVision);
      assert.strictEqual(stats.timeRemainingFormatted, 'Đã đạt kích thước tối đa');
      assert.strictEqual(stats.stageInfo.stage, 'perfect_adult');
    });

    it('should accurately calculate intermediate stats at 50% growth', () => {
      const stats = GrowthCalc.calculateStats(mockCreature, 50);
      const expectedWeightT = Math.pow(0.5, 1.18);
      const expectedWeight = Math.round(200 + (8000 - 200) * expectedWeightT);
      assert.strictEqual(stats.weight, expectedWeight);
      assert.strictEqual(stats.stageInfo.stage, 'subadult');
      assert.ok(stats.timeRemainingFormatted.includes('phút'));

      // Test Carnotaurus sub-adult (50%) realistic weight curve (790 - 850 kg)
      const carnoMock = {
        growthTimeHours: 3,
        statsMin: { weight: 80, health: 80, biteDamage: 25, sprintSpeed: 38, trotSpeed: 18, swimSpeed: 14, stamina: 120, staminaRegen: 'Nhanh', nightVision: 'Khá', fallDamageResistance: 'Trung bình' },
        statsMax: { weight: 1800, health: 1800, biteDamage: 240, sprintSpeed: 54, trotSpeed: 23.5, swimSpeed: 16, stamina: 160, staminaRegen: 'Nhanh', nightVision: 'Khá', fallDamageResistance: 'Trung bình' }
      };
      const carnoStats25 = GrowthCalc.calculateStats(carnoMock, 25);
      const carnoStats50 = GrowthCalc.calculateStats(carnoMock, 50);
      const carnoStats75 = GrowthCalc.calculateStats(carnoMock, 75);

      assert.ok(carnoStats25.weight >= 400 && carnoStats25.weight <= 450, `Carno 25% weight (${carnoStats25.weight}kg) should be within [400, 450] kg`);
      assert.ok(carnoStats50.weight >= 790 && carnoStats50.weight <= 850, `Carno 50% weight (${carnoStats50.weight}kg) should be within [790, 850] kg`);
      assert.ok(carnoStats75.weight >= 1250 && carnoStats75.weight <= 1350, `Carno 75% weight (${carnoStats75.weight}kg) should be within [1250, 1350] kg`);
      assert.strictEqual(carnoStats50.weight, 839);
    });

    it('should clamp growth percentages below 0 and above 100', () => {
      const negativeStats = GrowthCalc.calculateStats(mockCreature, -20);
      assert.strictEqual(negativeStats.weight, mockCreature.statsMin.weight);

      const excessStats = GrowthCalc.calculateStats(mockCreature, 150);
      assert.strictEqual(excessStats.weight, mockCreature.statsMax.weight);
    });
  });
});
