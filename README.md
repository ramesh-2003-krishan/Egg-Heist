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

## 🎨 Cartoony Roblox-Style HUD & UI

The user interface has been restyled to match a bright, cartoony Roblox aesthetic:
- **Typography**: Google Fonts ("Lilita One" & "Fredoka") with thick text stroke (`-webkit-text-stroke`).
- **Top-Left Bar**: Quick action icons (⚙️ Settings, 🎒 Backpack, 💬 Chat) + Fading **Event Feed** for server announcements and rare egg spawn alerts.
- **Top-Center Header**: Big outlined 3D text `EGG HEIST!`.
- **Top-Right Leaderboard**: Live room leaderboard with columns (`People`, `Money/s`, `Speed`), sorted by `Money/s`, with local player highlight & toggle close `(X)`.
- **Left-Middle Buttons**: Green **Shop** button (🛒 with red `!` badge when upgrades are affordable) and Cyan **Index** button (📖 for Egg Tiers & Pet Rarities lookup).
- **Right-Middle Buttons**: Red **Egg** status button (🥚) and Orange **Paw** active pets drawer button (🐾).
- **Bottom-Left Stats**: Large **Speed** (👟) and **Money** (💵) with dynamic green `+$X/s` passive income rate indicator.
- **Bottom-Center Hotbar**: 3-slot hotbar (1, 2, 3) displaying carried egg and tools with active slot highlight.
- **Bottom-Right Special Egg Chip**: Countdown chip (🌙) displaying `next special egg in MMm SSs`, driven by server timer.
- **Tutorial Guidance Arrows**: Red bouncing CSS arrows pointing to the treadmill (until first used) and incubator (until first egg deposited).

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
