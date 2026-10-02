export interface EggTierConfig {
  id: string;
  name: string;
  color: string;
  colorHex: number;
  weightMultiplier: number;
  spawnWeight: number;
  hatchTimeSec: number;
  moneyMultiplier: number;
}

export const EGG_TIERS: Record<string, EggTierConfig> = {
  common: {
    id: "common",
    name: "Common",
    color: "#94a3b8",
    colorHex: 0xe2e8f0,
    weightMultiplier: 0.85,
    spawnWeight: 50,
    hatchTimeSec: 5,
    moneyMultiplier: 1.0,
  },
  rare: {
    id: "rare",
    name: "Rare",
    color: "#38bdf8",
    colorHex: 0x38bdf8,
    weightMultiplier: 0.80,
    spawnWeight: 28,
    hatchTimeSec: 7,
    moneyMultiplier: 2.5,
  },
  epic: {
    id: "epic",
    name: "Epic",
    color: "#c084fc",
    colorHex: 0xa855f7,
    weightMultiplier: 0.75,
    spawnWeight: 14,
    hatchTimeSec: 9,
    moneyMultiplier: 6.0,
  },
  secret: {
    id: "secret",
    name: "Secret",
    color: "#f1f5f9",
    colorHex: 0x1e293b,
    weightMultiplier: 0.70,
    spawnWeight: 4,
    hatchTimeSec: 12,
    moneyMultiplier: 12.0,
  },
  eternal: {
    id: "eternal",
    name: "Eternal",
    color: "#ec4899",
    colorHex: 0xff00ff,
    weightMultiplier: 0.65,
    spawnWeight: 2.5,
    hatchTimeSec: 15,
    moneyMultiplier: 25.0,
  },
  divine: {
    id: "divine",
    name: "Divine",
    color: "#fbbf24",
    colorHex: 0xf59e0b,
    weightMultiplier: 0.60,
    spawnWeight: 1.5,
    hatchTimeSec: 18,
    moneyMultiplier: 50.0,
  },
};

export interface ShopUpgradeConfig {
  tier: number;
  name: string;
  cost: number;
  multiplier: number;
}

export const TREADMILL_UPGRADES: ShopUpgradeConfig[] = [
  { tier: 1, name: "Basic Slate", cost: 0, multiplier: 1.0 },
  { tier: 2, name: "Neon Runner", cost: 150, multiplier: 2.0 },
  { tier: 3, name: "Hyper Turbo", cost: 600, multiplier: 4.0 },
  { tier: 4, name: "Cosmic Overdrive", cost: 2500, multiplier: 8.0 },
];

export const BASE_UPGRADES: ShopUpgradeConfig[] = [
  { tier: 1, name: "Starter Platform", cost: 0, multiplier: 3 },
  { tier: 2, name: "Expanded Nest", cost: 300, multiplier: 4 },
  { tier: 3, name: "Grand Sanctuary", cost: 1200, multiplier: 6 },
];

export const PET_SLOT_UPGRADES: ShopUpgradeConfig[] = [
  { tier: 1, name: "6 Slots", cost: 0, multiplier: 6 },
  { tier: 2, name: "8 Slots", cost: 200, multiplier: 8 },
  { tier: 3, name: "10 Slots", cost: 800, multiplier: 10 },
  { tier: 4, name: "12 Slots", cost: 3000, multiplier: 12 },
];

export const GAME_CONFIG = {
  MAX_BASE_SLOTS: 4,
  BASE_POSITIONS: [
    { x: -25, z: -25 },
    { x: 25, z: -25 },
    { x: 25, z: 25 },
    { x: -25, z: 25 },
  ],
  BASE_SIZE: { width: 10, length: 12 },
  TREADMILL_OFFSET: { x: 0, z: -2 },
  TREADMILL_SIZE: { width: 4, length: 6 },
  INCUBATOR_OFFSET: { x: 3, z: 2 },
  INCUBATOR_SIZE: { width: 3, length: 3 },
  MAX_INCUBATOR_EGGS: 3,
  MAX_PET_SLOTS: 6,
  SPAWN_OFFSET: { x: 0, z: 4 },
  BASE_SPEED: 10,
  SPEED_GROWTH_PER_SEC: 0.5,
  ANGELIC_SPEED_GROWTH_MULT: 3.0,
  SPEED_SCALE_FACTOR: 0.05,
  MAX_SPEED_CAP: 35,
  MAP_LIMIT: 48,

  MAX_MAP_EGGS: 10,
  SPAWN_INTERVAL_SEC: 4.0,
  SPAWN_RADIUS: 16.0,
  PICKUP_RADIUS: 1.8,
  STEAL_COLLISION_RADIUS: 1.5,
  DROP_COOLDOWN_SEC: 1.5,

  DIVINE_TRAIL_CHANCE: 0.012,
  ANGELIC_TREADMILL_CHANCE: 0.009,

  BAT_COOLDOWN_SEC: 3.0,
  BAT_RANGE: 2.2,
  TRAP_STUN_DURATION_SEC: 7.0,
  TRAP_TRIGGER_RADIUS: 1.5,
  MAX_TRAPS_PER_PLAYER: 3,
  TRAP_REFILL_COST: 100,
  MARKET_STALL_POS: { x: 0, z: 0 },
  MARKET_STALL_RADIUS: 3.0,
  FUSE_MACHINE_OFFSET: { x: -3.5, z: 2 },
  FUSE_MACHINE_RADIUS: 2.5,
  CHICKEN_CHASE_SPEED: 7.5,
  CHICKEN_CHASE_DURATION: 4.0,
};

export const EGG_SELL_PRICES: Record<string, number> = {
  common: 50,
  rare: 150,
  epic: 500,
  secret: 1800,
  eternal: 5000,
  divine: 15000,
};
