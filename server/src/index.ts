import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "colyseus";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { GameRoom } from "./rooms/GameRoom";

const port = Number(process.env.PORT || 2567);
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const gameServer = new Server({
  transport: new WebSocketTransport({
    server,
  }),
});

gameServer.define("game_room", GameRoom);

app.get("/health", (req, res) => {
  res.json({ status: "ok", game: "Egg Heist" });
});

server.listen(port, () => {
  console.log(`🎮 Egg Heist Colyseus Server running on http://localhost:${port}`);
});
