# 🥚 Egg Heist - Multiplayer 3D Browser Game

A real-time multiplayer 3D browser game built with **Node.js + Colyseus** (authoritative server) and **Three.js + Vite** (3D web client).

## 🚀 Stack & Technology
- **Backend (`/server`)**: Node.js, Express, Colyseus 0.15, `@colyseus/schema`, TypeScript.
- **Frontend (`/client`)**: Vite, Three.js, `colyseus.js`, TypeScript, Vanilla CSS.

## 📦 Project Layout
```
Egg-Heist/
├── package.json              # Root script runner (concurrently)
├── README.md                 # Project documentation
├── server/                   # Authoritative Colyseus WebSocket Server
│   ├── src/
│   │   ├── index.ts          # Express + Colyseus server entry
│   │   └── rooms/
│   │       ├── GameRoom.ts   # 60 FPS authoritative server loop & input handler
│   │       └── schema/
│   │           └── GameState.ts # Colyseus Player & GameState schema
│   └── package.json
└── client/                   # Three.js 3D Web Frontend
    ├── index.html            # Game entry point & HUD overlay
    ├── src/
    │   ├── main.ts           # Game loop setup
    │   ├── input/            # WASD Keyboard listener
    │   ├── network/          # Colyseus Client connection manager
    │   └── scene/            # 3D Scene, ground plane, 3rd-person camera, Roblox avatars
    └── package.json
```

## 🛠️ Quick Start

### 1. Install Dependencies
Run from the root directory:
```bash
# Install root, server, and client dependencies
npm install
npm --prefix server install
npm --prefix client install
```

### 2. Run Development Server & Client
To launch both server (port `2567`) and client (port `5173`) simultaneously:
```bash
npm run dev
```

Open your browser to:
- **Client**: `http://localhost:5173`
- **Server Health check**: `http://localhost:2567/health`

### 3. Multiplayer Real-time Testing
Open `http://localhost:5173` in two or more browser tabs or separate windows.
Move around using **W**, **A**, **S**, **D** or **Arrow Keys**. Each client will see other players moving in real-time across the 3D grid plane with authoritative position synchronization.

## ⚙️ Features (Phase 1)
- **Authoritative Server State**: Player movement vectors are processed on a 60 FPS Colyseus tick loop on the server and synced binary to all clients.
- **Roblox-style Avatars**: Composite 3D blocky avatars with dynamic limb walking animations and floating name tags.
- **Third-Person Camera**: Smooth camera follow system adhering to player movement.
- **Multi-Tab Syncing**: Instant state synchronization on player join, move, and leave events.
