"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const colyseus_1 = require("colyseus");
const ws_transport_1 = require("@colyseus/ws-transport");
const GameRoom_1 = require("./rooms/GameRoom");
const port = Number(process.env.PORT || 2567);
const app = (0, express_1.default)();
const clientOrigin = process.env.CLIENT_ORIGIN || process.env.CORS_ORIGIN || "*";
app.use((0, cors_1.default)({ origin: clientOrigin }));
app.use(express_1.default.json());
const server = http_1.default.createServer(app);
const gameServer = new colyseus_1.Server({
    transport: new ws_transport_1.WebSocketTransport({
        server,
    }),
});
gameServer.define("game_room", GameRoom_1.GameRoom);
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", game: "Egg Heist" });
});
server.listen(port, () => {
    console.log(`🎮 Egg Heist Colyseus Server running on http://localhost:${port}`);
});
