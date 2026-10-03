process.env.NODE_ENV = "test";

import http from "http";
import express from "express";
import { Server } from "colyseus";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { Client as ColyseusClient } from "colyseus.js";
import WebSocket from "ws";
import { GameRoom } from "../src/rooms/GameRoom";
import { GameState } from "../src/rooms/schema/GameState";
import { GAME_CONFIG, PET_SELL_BASE_PRICES, PET_SIZE_MULTIPLIERS, PET_MUTATION_MULTIPLIERS } from "../src/config";

async function runSellTest() {
  console.log("🚀 Starting Pet Selling Mechanics Automated Test...");

  const app = express();
  const server = http.createServer(app);
  const gameServer = new Server({
    transport: new WebSocketTransport({
      server: server,
    }),
  });

  gameServer.define("game_room", GameRoom);

  await new Promise<void>((resolve) => {
    server.listen(25671, () => {
      console.log("📡 Test Server listening on ws://localhost:25671");
      resolve();
    });
  });

  try {
    const client = new ColyseusClient("ws://localhost:25671");
    (client as any).WebSocket = WebSocket;

    const room = await client.joinOrCreate<GameState>("game_room", { name: "SellTester" }, GameState);
    console.log(`✅ Joined test room with sessionId ${room.sessionId}`);

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(200);

    const player = room.state.players.get(room.sessionId);
    if (!player) throw new Error("Player not found in room state!");

    let petSoldEventsCount = 0;
    let lastSoldAmount = 0;

    room.onMessage("petSoldSuccess", (data: { petName: string; rarity: string; amount: number }) => {
      petSoldEventsCount++;
      lastSoldAmount = data.amount;
      console.log(`📩 [Client Received] petSoldSuccess: ${data.petName} (${data.rarity}) for +$${data.amount}`);
    });

    const initialMoney = player.money;

    // --- CASE 1: sellCarriedPet inside stall zone ---
    console.log("\n➡️ [Test Case 1] Spawning ground pet, picking up, moving to stall zone, and calling sellCarriedPet...");
    room.send("debugForceGroundPet");
    await sleep(200);

    if (player.groundPets.length !== 1) throw new Error(`Expected 1 ground pet, got ${player.groundPets.length}`);
    const groundPet: any = (player.groundPets as any)[0];
    console.log(`🐶 Spawned ground pet ${groundPet.id} (${groundPet.name}, ${groundPet.rarity})`);

    // Pick up ground pet
    room.send("interactKey");
    await sleep(200);

    if (!player.carriedPet) throw new Error("Expected player to be carrying the pet!");
    const carriedPet1: any = player.carriedPet;
    console.log(`🎒 Player is carrying pet ${carriedPet1.id}`);

    // Move to central market stall (0, 0)
    room.send("debugTeleport", { x: GAME_CONFIG.MARKET_STALL_POS.x, z: GAME_CONFIG.MARKET_STALL_POS.z });
    await sleep(200);

    const expectedPrice1 = Math.floor(
      (PET_SELL_BASE_PRICES[carriedPet1.rarity] || 100) *
      (PET_SIZE_MULTIPLIERS[carriedPet1.size] || 1.0) *
      (PET_MUTATION_MULTIPLIERS[carriedPet1.mutation] || 1.0)
    );

    room.send("sellCarriedPet");
    await sleep(400);

    if (player.carriedPet !== null && player.carriedPet !== undefined) throw new Error("Expected carriedPet to be null after sale!");
    if (player.money !== initialMoney + expectedPrice1) {
      throw new Error(`Expected money to increase by ${expectedPrice1} to ${initialMoney + expectedPrice1}, got ${player.money}`);
    }
    if (petSoldEventsCount !== 1) throw new Error(`Expected petSoldEventsCount === 1, got ${petSoldEventsCount}`);
    console.log(`✅ [Pass 1/3] Case 1 SUCCESS: Carried pet sold directly for +$${expectedPrice1}! Money is now $${player.money}`);

    // --- CASE 2: storePetInShop then sellShopPet ---
    await sleep(350); // Wait out 300ms INTERACT_COOLDOWN_MS
    console.log("\n➡️ [Test Case 2] Spawning ground pet, carrying, storing in shop, then calling sellShopPet...");
    const moneyBeforeCase2 = player.money;
    room.send("debugForceGroundPet");
    await sleep(200);

    room.send("interactKey");
    await sleep(200);

    if (!player.carriedPet) throw new Error("Expected player to be carrying pet for Case 2!");

    const carriedPet2: any = player.carriedPet;
    const storedPetId = carriedPet2.id;
    const expectedPrice2 = Math.floor(
      (PET_SELL_BASE_PRICES[carriedPet2.rarity] || 100) *
      (PET_SIZE_MULTIPLIERS[carriedPet2.size] || 1.0) *
      (PET_MUTATION_MULTIPLIERS[carriedPet2.mutation] || 1.0)
    );

    // Store in shop storage
    room.send("storePetInShop");
    await sleep(200);

    if (player.carriedPet) throw new Error("Expected carriedPet to be null after storing!");
    if ((player.shopPets as any).length !== 1) throw new Error(`Expected shopPets.length === 1, got ${(player.shopPets as any).length}`);
    console.log(`📦 Pet stored in shop. shopPets count: ${(player.shopPets as any).length}`);

    // Sell stored pet
    room.send("sellShopPet", { petId: storedPetId });
    await sleep(400);

    if ((player.shopPets as any).length !== 0) throw new Error(`Expected shopPets.length === 0 after sale, got ${(player.shopPets as any).length}`);
    if (player.money !== moneyBeforeCase2 + expectedPrice2) {
      throw new Error(`Expected money to increase by ${expectedPrice2} to ${moneyBeforeCase2 + expectedPrice2}, got ${player.money}`);
    }
    if ((petSoldEventsCount as number) !== 2) throw new Error(`Expected petSoldEventsCount === 2, got ${petSoldEventsCount}`);
    console.log(`✅ [Pass 2/3] Case 2 SUCCESS: Stored pet sold from shop storage for +$${expectedPrice2}! Money is now $${player.money}`);

    // --- CASE 3: Rejection outside stall zone ---
    await sleep(350); // Wait out 300ms INTERACT_COOLDOWN_MS
    console.log("\n➡️ [Test Case 3] Spawning ground pet, carrying, moving FAR outside stall zone, and attempting sellCarriedPet...");
    const moneyBeforeCase3 = player.money;
    room.send("debugForceGroundPet");
    await sleep(200);

    room.send("interactKey");
    await sleep(200);

    if (!player.carriedPet) throw new Error("Expected player to be carrying pet for Case 3!");

    // Teleport far away (50, 50)
    room.send("debugTeleport", { x: 50, z: 50 });
    await sleep(200);

    room.send("sellCarriedPet");
    await sleep(400);

    if (!player.carriedPet) throw new Error("Expected sellCarriedPet to be REJECTED outside stall zone (pet should still be carried)!");
    if (player.money !== moneyBeforeCase3) throw new Error("Expected money to remain UNCHANGED when sale is rejected outside stall zone!");
    if (petSoldEventsCount !== 2) throw new Error("Expected NO petSoldSuccess event when sale is rejected!");
    console.log(`✅ [Pass 3/3] Case 3 SUCCESS: sellCarriedPet correctly REJECTED outside stall zone! Pet still carried, money unchanged.`);

    console.log("\n=======================================================");
    console.log("🎉 ALL PET SELL TESTS PASSED SUCCESSFULLY!");
    console.log("=======================================================\n");

    room.leave();
  } catch (err: any) {
    console.error("❌ PET SELL TEST EXCEPTION DETAILED:");
    console.error(err);
    if (err && err.stack) console.error(err.stack);
    process.exit(1);
  } finally {
    gameServer.gracefullyShutdown();
    server.close();
  }
}

runSellTest();
