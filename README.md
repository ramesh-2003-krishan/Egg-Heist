# 🥚 Egg Heist - 3D Multiplayer Browser Game

A Roblox-inspired 3D real-time multiplayer browser game built with **Three.js** and **Colyseus** (server-authoritative physics & game loop).

---

## 🎮 Core Game Features

1. **Player Base Platforms & Treadmills**:
   - Each player automatically gets assigned an authoritative base platform (up to 4–6 slots per room).
   - Stepping onto your personal base treadmill raises your **Speed Stat** over time.
   - Upgrading treadmills multiplies speed growth rate up to **8x**.

2. **Procedural 3D World Eggs & Carrying/Stealing Physics**:
   - 6 Egg Tiers: `Common`, `Rare`, `Epic`, `Secret` (Zebra canvas texture), `Eternal` (Rainbow gradient), and `Divine` (Shining gold).
   - Carrying eggs reduces movement speed based on tier weight multipliers.
   - Steal eggs directly out of opponent base incubators!
   - Player-to-player physical collisions cause carried eggs to drop onto the ground.

3. **Egg Hatching, Procedural 3D Pets & Continuous Income**:
   - Deposited eggs tick down their hatch timer inside wooden incubator nests.
   - Hatched eggs generate 3D blocky pets floating around the owner's platform.
   - Pets feature procedural names, 3 sizes (`small`, `normal`, `giant`), and 4 mutations (`none`, `golden` 2x, `rainbow` 4x, `shiny` 8x).
   - Pets generate continuous passive income (`$`/sec) into your player balance.

4. **Rare Hatch Rewards (~1.2% Divine Trail & ~0.9% Angelic Treadmill)**:
   - **Divine Rainbow Particle Trail**: Avatar emits dynamic 3D rainbow particles while sprinting.
   - **Angelic Treadmill**: Upgrades base treadmill visual to 3D white marble pillars, golden halos, and white feathery wings (**3x speed growth multiplier**).
   - Animated **"YOU GOT..."** celebration banner popup for rare drops.

5. **Shop System & Upgrades**:
   - **Hotkeys**: Press **B** or **E** anytime to toggle the Shop Modal UI.
   - **⚡ Treadmill Upgrades**: Unlock Neon Runner, Hyper Turbo, and Cosmic Overdrive with custom 3D glowing treadmill belt animations.
   - **🏠 Base Upgrades**: Expand incubator capacity from 3 up to 6 eggs and enlarge base platform size.
   - **🐾 Pet Slots**: Unlock active pet slots from 6 up to 12.

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
# Install Server Dependencies
cd server
npm install

# Install Client Dependencies
cd ../client
npm install
```

### 2. Run Development Servers
From the root project directory:
```bash
npm run dev
```
- **Client**: `http://localhost:5173`
- **Colyseus Server**: `ws://localhost:2567`

### 3. Check Production Build
```bash
# Build Server
cd server && npm run build

# Build Client
cd client && npm run build
```

---

## 🧪 Manual Testing Instructions (Two Tabs)

1. Run `npm run dev`.
2. Open **Tab 1** (`http://localhost:5173`).
3. Open **Tab 2** (`http://localhost:5173`).
4. **Test Real-Time Multiplayer Sync**:
   - Use `WASD` or `Arrow Keys` in Tab 1—avatar movement & rotation update synchronously in Tab 2.
5. **Test Egg Carrying & Stealing**:
   - Pick up wild eggs from map center.
   - Deposit in your base incubator or steal from Tab 2's base nest.
   - Collide Tab 1 avatar into Tab 2 avatar while carrying an egg to drop it onto the ground.
6. **Test Incubators & Pets**:
   - Wait for incubator egg countdown to finish.
   - Observe 3D pet spawn and money continuously increment in the HUD.
7. **Test Shop Upgrades**:
   - Press **B** to open the Shop.
   - Purchase treadmill upgrades or base expansion to observe real-time 3D model changes!

---

## 📁 Architecture

```
Egg-Heist/
├── server/               # Colyseus Authoritative Node.js Server
│   ├── src/
│   │   ├── config.ts     # Central game configuration & parameters
│   │   ├── index.ts      # Server entry point
│   │   └── rooms/
│   │       ├── GameRoom.ts       # Main tick loop, physics, spawner, shop logic
│   │       └── schema/
│   │           └── GameState.ts  # Colyseus synchronization state schema
│   ├── package.json
│   └── tsconfig.json
│
├── client/               # Three.js Frontend Client
│   ├── src/
│   │   ├── config.ts     # Client game config
│   │   ├── main.ts       # Entry point
│   │   ├── network/
│   │   │   ├── NetworkManager.ts # Colyseus client connection & HUD sync
│   │   │   └── schema/GameState.ts
│   │   ├── scene/
│   │   │   ├── Avatar.ts        # 3D Avatar, egg carry pose, Rainbow Trail
│   │   │   ├── BaseManager.ts   # 3D Base platforms, treadmills, Angelic design
│   │   │   ├── EggManager.ts    # 3D Procedural egg rendering & particle effects
│   │   │   ├── PetManager.ts    # 3D Blocky procedural pets around base
│   │   │   └── SceneManager.ts  # Three.js camera, lighting, renderer
│   │   └── style.css            # Dark mode glassmorphism UI & modals
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
└── README.md
```
