import { Schema, type, MapSchema } from "@colyseus/schema";

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
}

export class GameState extends Schema {
  @type({ map: Player }) players = new MapSchema<Player>();
}
