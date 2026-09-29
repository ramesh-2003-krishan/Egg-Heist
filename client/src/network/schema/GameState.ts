import { Schema, MapSchema, defineTypes } from "@colyseus/schema";

export class Player extends Schema {
  id: string = "";
  name: string = "";
  x: number = 0;
  y: number = 0;
  z: number = 0;
  rotationY: number = 0;
  speed: number = 8;
  money: number = 0;
}

defineTypes(Player, {
  id: "string",
  name: "string",
  x: "number",
  y: "number",
  z: "number",
  rotationY: "number",
  speed: "number",
  money: "number",
});

export class GameState extends Schema {
  players = new MapSchema<Player>();
}

defineTypes(GameState, {
  players: { map: Player },
});
