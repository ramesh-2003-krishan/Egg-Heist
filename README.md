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
│   │   ├── config.ts         # Centralized game configuration (speed, base slots, bounds)
│   │   ├── index.ts          # Express + Colyseus server entry
│   │   └── rooms/
│   │       ├── GameRoom.ts   # 60 FPS authoritative loop, slot allocation & treadmill collision
│   │       └── schema/
│   │           └── GameState.ts # Colyseus Player & GameState schema
│   └── package.json
└── client/                   # Three.js 3D Web Frontend
    ├── index.html            # Game entry point & HUD overlay
    ├── src/
    │   ├── config.ts         # Client game configuration constants
    │   ├── main.ts           # Game render loop setup
    │   ├── input/            # WASD Keyboard listener
    │   ├── network/          # Colyseus Client connection manager & HUD binder
    │   └── scene/            # 3D Scene, Bases & Treadmills, Camera, Avatars
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

### 2. Build Check
To verify TypeScript compilation for both server and client:
```bash
npm --prefix server run build
npm --prefix client run build
```

### 3. Run Development Server & Client
To launch both server (port `2567`) and client (port `5173`) simultaneously:
```bash
npm run dev
```

Open your browser to:
- **Client**: `http://localhost:5173`
- **Server Health check**: `http://localhost:2567/health`

---

## ⚙️ Features

### Phase 1: Authoritative Multiplayer Core
- **Authoritative Server State**: Player movement vectors are processed on a 60 FPS Colyseus tick loop on the server and synced binary to all clients.
- **Roblox-style Avatars**: Composite 3D blocky avatars with dynamic limb walking animations and floating name tags.
- **Third-Person Camera**: Smooth camera follow system adhering to player movement.
- **Multi-Tab Syncing**: Instant state synchronization on player join, move, and leave events.

### Phase 2: Bases, Treadmill & Speed Scaling
- **Authoritative Base Slot Allocation**: Max 4 slots laid out around the map. Each player is assigned a unique base slot upon joining; slots are automatically reclaimed when players leave.
- **Base Visuals & Animated Treadmills**: 3D colored platforms featuring continuously animated treadmill belts and custom base signs displaying the owner's name (`BASE #1: [PlayerName]`).
- **Server-Checked Treadmill Speed Growth**: Standing inside your **own** base treadmill zone triggers authoritative `speedStat` growth (+0.5 speed/sec). Opponents cannot hijack or receive speed boosts on your base treadmill.
- **Speed Scaling & Walk Animation**: Player movement speed scales dynamically based on `speedStat` (`speed = baseSpeed * (1 + speedStat * 0.05)`). Walking limb animation speed scales proportionally with player speed.
- **HUD & Name Tag Fixes**: Displays real-time `Speed`, `Money`, and an active pulse badge `🔥 On treadmill: +0.5 speed/s`. Floating name tags raised (`y = 3.0`) so they never overlap avatar heads.

---

## 🧪 Manual Testing Instructions (Two Tabs)

To manually test Phase 2 functionality:

1. **Start the servers**:
   Run `npm run dev` from the root folder (or `npm run dev` in separate terminals inside `server/` and `client/`).

2. **Open Tab 1 (Player 1)**:
   - Open browser to `http://localhost:5173`.
   - **Observe**: You spawn next to **Base #1** (Top-Left base slot).
   - **Observe**: Base #1's sign board reads `BASE #1: [Your Name]`.
   - **Observe HUD**: Displays `⚡ Speed: 10.0 (1.0x)`, `💰 Money: $0`.

3. **Open Tab 2 (Player 2)**:
   - Open a second tab or window to `http://localhost:5173`.
   - **Observe**: Player 2 spawns next to **Base #2** (Top-Right base slot).
   - **Observe**: Base #2's sign board displays Player 2's name.
   - **In Tab 1**: You see Player 2 standing at Base #2 with their name on Base #2's sign post.

4. **Test Treadmill Acceleration (Own Base)**:
   - In Tab 1, walk onto Base #1's treadmill belt using **W/A/S/D**.
   - **Observe HUD**: A green active badge pops up: `🔥 On treadmill: +0.5 speed/s`.
   - **Observe Speed**: Speed value rises continuously (`10.5`, `11.2`, `12.0`, etc.).
   - Step off the treadmill; the active badge hides and speed growth pauses.

5. **Test Opponent Treadmill Exclusion**:
   - In Tab 2, walk Player 2 onto Base #1's treadmill (Player 1's base).
   - **Observe**: Player 2 does **NOT** get a speed boost and no treadmill active badge appears on Player 2's HUD. Only the base owner gets the treadmill boost.

6. **Test Movement & Walk Animation Speed**:
   - Walk Player 1 around after accumulating speed.
   - **Observe**: Player 1 moves noticeably faster across the ground plane, and avatar leg/arm walking animations swing faster to match the higher movement speed.

7. **Test Disconnect / Slot Deallocation**:
   - Close Tab 1.
   - **In Tab 2**: Base #1's sign updates to `BASE #1: UNCLAIMED`, freeing Slot #0 for the next player who joins.
