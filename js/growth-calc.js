/**
 * THE ISLE WIKI - GROWTH CALCULATOR
 * Real-time dynamic stat recalculations based on growth percent (0% - 100%)
 */

const GrowthCalc = {
  /**
   * Determine growth stage label based on growth percentage (0 - 100)
   */
  getStageInfo(percent) {
    if (percent < 20) {
      return { stage: 'hatchling', labelVi: 'Con Non (Hatchling)', color: '#38bdf8' };
    } else if (percent < 50) {
      return { stage: 'juvenile', labelVi: 'Thiếu Niên (Juvenile)', color: '#10b981' };
    } else if (percent < 80) {
      return { stage: 'subadult', labelVi: 'Trưởng Thành Non (Sub-Adult)', color: '#f59e0b' };
    } else if (percent < 100) {
      return { stage: 'adult', labelVi: 'Trưởng Thành (Adult)', color: '#ec4899' };
    } else {
      return { stage: 'perfect_adult', labelVi: 'Hoàn Hảo (100% Full Adult)', color: '#a855f7' };
    }
  },

  /**
   * Calculate exact stats for a given creature at a specific growth percentage (0 to 100)
   */
  calculateStats(creature, percent) {
    const t = Math.max(0, Math.min(100, percent)) / 100;
    const min = creature.statsMin;
    const max = creature.statsMax;

    // Weight uses exponential mass scaling curve t^2.2
    const weightT = Math.pow(t, 2.2);
    const weight = Math.round(min.weight + (max.weight - min.weight) * weightT);

    // Health scales with weight curve t^1.8
    const healthT = Math.pow(t, 1.8);
    const health = Math.round(min.health + (max.health - min.health) * healthT);

    // Bite damage scales with t^1.5
    const damageT = Math.pow(t, 1.5);
    const biteDamage = Math.round(min.biteDamage + (max.biteDamage - min.biteDamage) * damageT);

    // Sprint Speed linear interpolation
    const sprintSpeed = (min.sprintSpeed + (max.sprintSpeed - min.sprintSpeed) * t).toFixed(1);
    const trotSpeed = (min.trotSpeed + (max.trotSpeed - min.trotSpeed) * t).toFixed(1);
    const swimSpeed = (min.swimSpeed + (max.swimSpeed - min.swimSpeed) * t).toFixed(1);

    // Stamina calculation
    const stamina = Math.round(min.stamina + (max.stamina - min.stamina) * t);

    // Time remaining (in hours and minutes)
    const totalMinutes = creature.growthTimeHours * 60;
    const remainingMinutes = Math.round(totalMinutes * (1 - t));
    const remHours = Math.floor(remainingMinutes / 60);
    const remMins = remainingMinutes % 60;
    const timeRemainingFormatted = remainingMinutes <= 0 
      ? 'Đã đạt kích thước tối đa' 
      : `${remHours > 0 ? remHours + ' giờ ' : ''}${remMins} phút`;

    const stageInfo = this.getStageInfo(percent);

    return {
      growthPercent: percent,
      weight,
      health,
      biteDamage,
      sprintSpeed: parseFloat(sprintSpeed),
      trotSpeed: parseFloat(trotSpeed),
      swimSpeed: parseFloat(swimSpeed),
      stamina,
      staminaRegen: t > 0.6 ? max.staminaRegen : min.staminaRegen,
      nightVision: t > 0.5 ? max.nightVision : min.nightVision,
      fallDamageResistance: max.fallDamageResistance,
      timeRemainingFormatted,
      stageInfo
    };
  }
};

window.GrowthCalc = GrowthCalc;
