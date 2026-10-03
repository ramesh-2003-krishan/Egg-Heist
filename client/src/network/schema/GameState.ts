import { Schema, type, MapSchema, ArraySchema } from "@colyseus/schema";

export class Pet extends Schema {
  @type("string") id: string = "";
  @type("string") name: string = "Kitty";
  @type("string") rarity: string = "common";
  @type("string") size: string = "normal";
  @type("string") mutation: string = "none";
  @type("number") moneyPerSec: number = 1.0;
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
  @type("string") carriedBy: string = "";
  @type("number") baseIndex: number = -1;
  @type("boolean") isGroundPet: boolean = false;
}

export class Egg extends Schema {
  @type("string") id: string = "";
  @type("string") tier: string = "common";
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
  @type("string") carriedBy: string = "";
  @type("number") baseIndex: number = -1;
  @type("number") hatchTimeRemaining: number = 0;
  @type("number") dropCooldown: number = 0;
  @type("string") lastDroppedBy: string = "";
  @type("boolean") hasChicken: boolean = false;
  @type("boolean") isGuarded: boolean = false;
  @type("string") guardType: string = "chicken";
  @type("number") guardX: number = 0;
  @type("number") guardZ: number = 0;
  @type("string") guardState: string = "sleeping";
  @type("string") guardTargetId: string = "";
}

export class Trap extends Schema {
  @type("string") id: string = "";
  @type("string") ownerId: string = "";
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
}

export class ChasingChicken extends Schema {
  @type("string") id: string = "";
  @type("string") targetPlayerId: string = "";
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
  @type("number") lifetime: number = 4.0;
}

export class DroppedCoin extends Schema {
  @type("string") id: string = "";
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
  @type("number") amount: number = 0;
  @type("number") despawnTimer: number = 8.0;
}

export class Player extends Schema {
  @type("string") id: string = "";
  @type("string") name: string = "";
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
  @type("number") rotationY: number = 0;
  @type("number") speed: number = 10;
  @type("number") money: number = 0;
  @type("number") baseIndex: number = -1;
  @type("boolean") onTreadmill: boolean = false;
  @type("number") speedStat: number = 1;
  @type("string") carriedEggTier: string = "";
  @type(Egg) carriedEgg: Egg | null = null;
  @type(Pet) carriedPet: Pet | null = null;
  @type([Egg]) incubatorEggs = new ArraySchema<Egg>();
  @type([Pet]) pets = new ArraySchema<Pet>();
  @type([Pet]) groundPets = new ArraySchema<Pet>();
  @type([Pet]) shopPets = new ArraySchema<Pet>();

  @type("number") batCooldown: number = 0;
  @type("number") trapCount: number = 3;
  @type("number") trappedTimer: number = 0;
  @type("number") stolenMoneyTotal: number = 0;
  @type("number") hatchedEggsTotal: number = 0;
  @type("number") caughtStunTimer: number = 0;
  @type("number") invulnerableTimer: number = 0;

  @type("number") treadmillTier: number = 1;
  @type("number") baseTier: number = 1;
  @type("number") maxPetSlots: number = 6;

  @type("boolean") hasDivineTrail: boolean = false;
  @type("boolean") equippedDivineTrail: boolean = false;
  @type("boolean") hasAngelicTreadmill: boolean = false;
  @type("boolean") equippedAngelicTreadmill: boolean = false;
  @type("string") lastHatchedReward: string = "";

  // Red Alert & Freeze System
  @type("number") redAlerts: number = 0;
  @type("number") frozenTimer: number = 0;
  @type("number") freezeEndTime: number = 0;

  // Bloxity SDK Equipped Cosmetics
  @type("string") skinId: string = "";
  @type("string") hatId: string = "";
  @type("string") hairId: string = "";
  @type("string") faceId: string = "";
  @type("string") shirtId: string = "";
  @type("string") pantsId: string = "";
}

export class GameState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
  @type({ map: Egg }) mapEggs = new MapSchema<Egg>();
  @type({ map: Trap }) placedTraps = new MapSchema<Trap>();
  @type({ map: ChasingChicken }) chasingChickens = new MapSchema<ChasingChicken>();
  @type({ map: DroppedCoin }) droppedCoins = new MapSchema<DroppedCoin>();
  @type("number") dayNightProgress: number = 0;
  @type("string") richestPlayerId: string = "";
}
