import { Schema, type, MapSchema, ArraySchema } from "@colyseus/schema";

export class Pet extends Schema {
  @type("string") id: string = "";
  @type("string") name: string = "Kitty";
  @type("string") rarity: string = "common";
  @type("string") size: string = "normal";
  @type("string") mutation: string = "none";
  @type("number") moneyPerSec: number = 1.0;
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
  @type([Egg]) incubatorEggs = new ArraySchema<Egg>();
  @type([Pet]) pets = new ArraySchema<Pet>();

  @type("number") treadmillTier: number = 1;
  @type("number") baseTier: number = 1;
  @type("number") maxPetSlots: number = 6;

  @type("boolean") hasDivineTrail: boolean = false;
  @type("boolean") equippedDivineTrail: boolean = false;
  @type("boolean") hasAngelicTreadmill: boolean = false;
  @type("boolean") equippedAngelicTreadmill: boolean = false;
  @type("string") lastHatchedReward: string = "";

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
}
