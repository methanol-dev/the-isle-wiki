/**
 * THE ISLE WIKI - DATA SERVICE
 * Handles fetching JSON datasets with fallback data support for offline/file:// protocol
 */

const DataService = {
  creatures: [],
  nutrients: [],
  mechanics: [],
  isLoaded: false,

  async init() {
    try {
      const [creaturesRes, nutrientsRes, mechanicsRes] = await Promise.all([
        fetch('./data/creatures.json'),
        fetch('./data/nutrients.json'),
        fetch('./data/mechanics.json')
      ]);

      if (!creaturesRes.ok || !nutrientsRes.ok) {
        throw new Error('Failed to load JSON data');
      }

      this.creatures = await creaturesRes.json();
      this.nutrients = await nutrientsRes.json();
      this.mechanics = await mechanicsRes.json();
      this.isLoaded = true;
    } catch (err) {
      console.warn('Fetch failed or running on file:// protocol, using embedded dataset fallback.', err);
      if (window.EMBEDDED_CREATURES) {
        this.creatures = window.EMBEDDED_CREATURES;
      }
      this.isLoaded = true;
    }
    return this.creatures;
  },

  getAllCreatures() {
    return this.creatures;
  },

  getCreatureById(id) {
    return this.creatures.find(c => c.id === id);
  },

  getNutrients() {
    return this.nutrients;
  },

  getMechanics() {
    return this.mechanics;
  }
};

window.DataService = DataService;
