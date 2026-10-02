# 🥚 Egg Heist - Bright Cartoony Roblox 3D Multiplayer Game

A bright, cartoony Roblox-style 3D real-time multiplayer browser game built with **Three.js** and **Colyseus** (server-authoritative physics & game loop).

---

## 🎮 Core Game Features & Mechanics

1. **Procedural 3D Lego World & Day/Night Cycle**:
   - Bright green Lego studded floor texture with dark drop shadows and brown checkered cliff walls.
   - Server-authoritative Day/Night cycle (120s loop) dynamically shifting sky colors (sky blue -> sunset orange -> deep night navy), fog density, and sun lighting with drifting clouds.

2. **Player Base Platforms, Treadmills & Incubators**:
   - Each player automatically gets assigned an authoritative base platform (up to 4–6 slots per room).
   - Stepping onto your personal base treadmill raises your **Speed Stat** over time. Upgrading treadmills multiplies speed growth rate up to **8x**.

3. **Eggs, Sleeping Chickens & Stealing Physics**:
   - 6 Egg Tiers: `Common`, `Rare`, `Epic`, `Secret`, `Eternal`, and `Divine`.
   - Eggs with sleeping chickens wake up an angry white 3D chicken (`CHICKEN_CHASE_SPEED = 7.5`) when picked up, chasing and pecking players until they drop the egg!
   - Steal eggs directly out of opponent base incubators! Player-to-player physical collisions cause carried eggs to drop.

4. **Egg Hatching, 3D Pets & Base Pet Fuser**:
   - Deposited eggs tick down hatch timers inside incubator nests, spawning 3D blocky pets that generate continuous passive income (`$`/sec).
   - **Pet Fuser Machine**: Stand near your base's 3D Pet Fuser (glowing purple core) and press **F** to combine 3 matching pets into 1 higher-tier pet!

5. **Central 3D Market Stall**:
   - Walk to the central red/white striped awning Market Stall and press **V** or click Sell to exchange carried eggs and pets directly for cash balance.

6. **Combat & Traps (Hotbar Controls)**:
   - **Wooden Bat (Key 1)**: Swing wooden bat (`useBat`) to strike nearby opponents, forcing them to drop their carried egg and knocking them backward.
   - **Bear Traps (Key 2)**: Place invisible traps (`placeTrap`). Opponents stepping on them are stunned for 7 seconds with a prominent overhead `🚨 TRAPPED (7.0s)` status banner.

7. **Bouncing Red Arrow Guide Trail**:
   - Dynamic 3D bouncing red arrows path on the ground pointing to your base incubator (when carrying an egg), base treadmill (when new), or nearest map egg.

---

## 🎨 Cartoony Roblox-Style HUD & UI

- **Typography**: Google Fonts ("Lilita One" & "Fredoka") with thick text stroke (`-webkit-text-stroke`) and glossy drop shadows.
- **Top-Center Banner**: Outlined 3D title `EGG HEIST 🥚` + Live `☀️ DAYTIME` / `🌙 NIGHTTIME` status chip.
- **Top-Left Bar**: Quick action icons (⚙️ Settings, 🎒 Backpack, 💬 Chat) + Fading cartoon **Event Feed** for server announcements and rare egg alerts.
- **Top-Right Leaderboard**: Live room leaderboard displaying player ranks, money, and speed.
- **Hotbar Controls**: 3-slot Roblox hotbar:
  - **Slot 1**: 🪵 Wooden Bat (`Key 1`)
  - **Slot 2**: 🪤 Bear Traps (`Key 2` x3)
  - **Slot 3**: 🥚 Drop Egg (`Key G`) / Sell at Stall (`Key V`)

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

## 👤 Bloxity Integration

### What's Integrated:
1. **SDK Authentication & User Profile**:
   - HUD auth bar displays profile display name and user avatar picture (`pfp`).
   - `Legion.SDK.auth.showAuthPopup()` triggers cross-game login popup window.
2. **3D Character Model (`player.glb`) & SkeletonUtils Cloning**:
   - Loads base avatar model from `https://static.bloxity.io/avatars/player.glb`.
   - Uses `SkeletonUtils.clone` per player to preserve skinned mesh rigging while eliminating redundant HTTP requests.
3. **Dynamic Skin Texture Synthesis**:
   - Local player skin texture URL fetched via `Legion.SDK.avatar.getSkinTextureUrl()`.
   - Remote player skin texture synthesized using spec: `https://api.bloxity.io/v1/avatar/skin-texture/s{skinId}[_pn{pantsId}][_sh{shirtId}][_fc{faceId}].png`.
4. **3D Accessories (Hats, Hair, Masks)**:
   - Attached directly to `Neck1` bone at local offset `(0, 0.8, 0)`.
   - `.obj` models loaded from `/items/hats/{id}.obj` with `/textures/hats/{id}.png`.
5. **Server Validation & Synchronization**:
   - Colyseus server validates every cosmetic ID in `updateBloxityAvatar` handler (string, at most 40 chars, regex `^[A-Za-z0-9_-]*$`).
   - Full room state synchronization broadcasts updated player look across all connected clients.
6. **Guest & Load Fallback**:
   - If player is a guest or model load fails, avatar falls back to box model displaying a `(Guest)` badge tag.

### Slug Configuration:
- `BLOXITY_GAME_SLUG`: `"egg-heist"` (defined in `client/src/bloxity.ts`).

### How to Test Login & Avatar Model by Hand:
1. Run `npm run dev`.
2. Open **Tab 1** (`http://localhost:5173`).
3. **Guest Fallback Test**:
   - Without logging in, observe your avatar uses the box avatar fallback with `Player_xxxx (Guest)` overhead name tag.
4. **Login & 3D Character Model Test**:
   - Click **"Log In with Bloxity"** in the top-right HUD.
   - Complete authentication in popup window.
   - Observe HUD avatar picture and name update instantly.
   - Observe character model converts from box avatar to 3D Bloxity character model (`player.glb`), applying skin texture and equipped accessories on the `Neck1` bone.
5. **Multiplayer Remote Sync Test**:
   - Open **Tab 2** (`http://localhost:5173`).
   - In Tab 1, equip or update avatar cosmetics via Bloxity SDK.
   - In Tab 2, observe Tab 1 player's 3D Bloxity model, skin texture, and accessories update dynamically in real time.

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
