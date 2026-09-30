export const GAME_CONFIG = {
  MAX_BASE_SLOTS: 4,
  BASE_POSITIONS: [
    { x: -25, z: -25 }, // Slot 0
    { x: 25, z: -25 },  // Slot 1
    { x: 25, z: 25 },   // Slot 2
    { x: -25, z: 25 },  // Slot 3
  ],
  BASE_SIZE: { width: 10, length: 12 },
  TREADMILL_OFFSET: { x: 0, z: -2 },
  TREADMILL_SIZE: { width: 4, length: 6 },
  SPAWN_OFFSET: { x: 0, z: 4 },
  BASE_SPEED: 10,
  SPEED_GROWTH_PER_SEC: 0.5,
  SPEED_SCALE_FACTOR: 0.05,
  MAX_SPEED_CAP: 35,
  MAP_LIMIT: 48,
};
