process.env.NODE_ENV = "test";

import http from "http";
import express from "express";
import { Server } from "colyseus";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { Client as ColyseusClient } from "colyseus.js";
import WebSocket from "ws";
import { GameRoom } from "../src/rooms/GameRoom";
import { GameState } from "../src/rooms/schema/GameState";
import { GAME_CONFIG } from "../src/config";

// Force test freeze duration to 3 seconds for fast automated testing
GAME_CONFIG.FREEZE_SECONDS = 3;

async function runFreezeTest() {
  console.log("🚀 Starting Red Alert Freeze System Automated Test...");

  const app = express();
  const server = http.createServer(app);
  const gameServer = new Server({
    transport: new WebSocketTransport({
      server: server,
    }),
  });

  gameServer.define("game_room", GameRoom);

  await new Promise<void>((resolve) => {
    server.listen(25670, () => {
      console.log("📡 Test Server listening on ws://localhost:25670");
      resolve();
    });
  });

  try {
    // Connect client using WebSocket transport
    const client = new ColyseusClient("ws://localhost:25670");
    // Pass WebSocket implementation for Node environment
    (client as any).WebSocket = WebSocket;

    const room = await client.joinOrCreate<GameState>("game_room", { name: "TestPlayer" }, GameState);
    console.log(`✅ Joined test room with sessionId ${room.sessionId}`);

    // Helper to wait for state updates
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    await sleep(200);

    const player = room.state.players.get(room.sessionId);
    if (!player) throw new Error("Player not found in room state!");

    console.log(`👤 Initial player state: name='${player.name}', redAlerts=${player.redAlerts}, frozenTimer=${player.frozenTimer}`);

    // --- ATTEMPT 1: First Red Alert ---
    console.log("➡️ [Test] Triggering 1st Red Alert...");
    room.send("debug_trigger_alert");
    await sleep(200);

    if (player.redAlerts !== 1) throw new Error(`Expected redAlerts === 1, got ${player.redAlerts}`);
    if (player.frozenTimer > 0) throw new Error("Player should NOT be frozen after 1 alert!");
    console.log("✅ [Pass 1/4] Attempt 1: redAlerts === 1, player can still move.");

    // Test movement after Attempt 1
    const initialX = player.x;
    room.send("move", { moveX: 1, moveZ: 0, rotationY: 0 });
    await sleep(200);
    if (player.x === initialX) throw new Error("Player should be able to move after Alert 1");
    console.log(`✅ [Pass 1/4] Movement verified after Alert 1: x shifted from ${initialX.toFixed(2)} to ${player.x.toFixed(2)}`);

    // --- ATTEMPT 2: Second Red Alert ---
    await sleep(550); // Wait out 500ms red alert cooldown
    console.log("➡️ [Test] Triggering 2nd Red Alert...");
    room.send("debug_trigger_alert");
    await sleep(200);

    if ((player.redAlerts as number) !== 2) throw new Error(`Expected redAlerts === 2, got ${player.redAlerts}`);
    if (player.frozenTimer > 0) throw new Error("Player should NOT be frozen after 2 alerts!");
    console.log("✅ [Pass 2/4] Attempt 2: redAlerts === 2, player can still move.");

    // --- ATTEMPT 3: Third Red Alert & Freeze Trigger ---
    await sleep(550); // Wait out 500ms red alert cooldown
    console.log("➡️ [Test] Triggering 3rd Red Alert (Freeze Expected)...");
    room.send("debug_trigger_alert");
    await sleep(200);

    if ((player.redAlerts as number) !== 3) throw new Error(`Expected redAlerts === 3, got ${player.redAlerts}`);
    if (player.freezeEndTime <= Date.now()) throw new Error("Expected freezeEndTime to be in the future!");
    if (player.frozenTimer <= 0) throw new Error("Expected frozenTimer > 0!");
    console.log(`✅ [Pass 3/4] Attempt 3: Player FROZEN! freezeEndTime=${new Date(player.freezeEndTime).toISOString()}, frozenTimer=${player.frozenTimer.toFixed(1)}s`);

    // --- VERIFY FREEZE INPUT & MOVEMENT LOCK ---
    const frozenX = player.x;
    const frozenZ = player.z;

    console.log("🔒 [Test] Testing move command while frozen...");
    room.send("move", { moveX: 1, moveZ: 1, rotationY: 0 });
    await sleep(300);

    if (player.x !== frozenX || player.z !== frozenZ) {
      throw new Error(`Movement lock FAILED! Position changed while frozen: (${player.x}, ${player.z}) vs expected (${frozenX}, ${frozenZ})`);
    }
    console.log("✅ [Pass 3/4] Position stayed locked (movement rejected while frozen).");

    console.log("🔒 [Test] Testing interaction rejection while frozen...");
    const moneyBefore = player.money;
    room.send("interactKey");
    room.send("dropEgg");
    room.send("sellPet");
    await sleep(200);

    if (player.money !== moneyBefore) throw new Error("Interactions/sales should be rejected while frozen!");
    console.log("✅ [Pass 3/4] Interaction handlers rejected input while frozen.");

    // --- WAIT FOR FREEZE EXPIRATION (3.2 seconds) ---
    console.log("⏳ [Test] Waiting 3.2 seconds for test freeze to expire...");
    await sleep(3200);

    if (player.freezeEndTime !== 0) throw new Error(`Expected freezeEndTime === 0 after expiry, got ${player.freezeEndTime}`);
    if (player.frozenTimer !== 0) throw new Error(`Expected frozenTimer === 0 after expiry, got ${player.frozenTimer}`);
    if ((player.redAlerts as number) !== 0) throw new Error(`Expected redAlerts === 0 after expiry, got ${player.redAlerts}`);
    console.log("☀️ [Pass 4/4] Freeze EXPIRED! redAlerts reset to 0, frozenTimer reset to 0.");

    // Test movement recovery
    console.log("🏃 [Test] Testing movement recovery after unfreeze...");
    room.send("move", { moveX: 1, moveZ: 0, rotationY: 0 });
    await sleep(200);

    if (player.x === frozenX) throw new Error("Player should be able to move again after freeze expires!");
    console.log(`✅ [Pass 4/4] Movement recovered! Player x moved from ${frozenX.toFixed(2)} to ${player.x.toFixed(2)}`);

    console.log("\n=======================================================");
    console.log("🎉 ALL FREEZE TESTS PASSED SUCCESSFULLY! (Fix 1 PROVEN)");
    console.log("=======================================================\n");

    room.leave();
  } catch (err: any) {
    console.error("❌ FREEZE TEST EXCEPTION DETAILED:");
    console.error(err);
    if (err && err.stack) console.error(err.stack);
    process.exit(1);
  } finally {
    gameServer.gracefullyShutdown();
    server.close();
  }
}

runFreezeTest();
