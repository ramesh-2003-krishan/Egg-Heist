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

5. **Central 3D Market Stall & Pet Selling**:
   - Walk to the central red/white striped awning Market Stall and press **E** or click Sell to exchange carried pets and eggs for cash balance based on formula (base price x size mult x mutation mult).
   - Hatched pets spawn as physical carryable objects at your base. Press **E** to pick them up, then press **F** to place them in base slots for passive income or carry them to the stall to sell!

6. **Red Alert & Freeze System (3-Strike Security Rules)**:
   - Attempting to grab a guarded egg while a guard animal (Chicken, Dog, Fox) is awake or chasing triggers a **Red Alert** (`redAlerts`: 0 to 3).
   - **Screen Flash & Web Audio Siren**: Triggers a red screen flash overlay and loud synth siren alert audio chime.
   - **3rd Alert Penalty Freeze**: Receiving 3 Red Alerts triggers a **3-minute (180s) penalty freeze** (`FREEZE_SECONDS = 180`).
   - **Dropped Items & Input Lock**: Carrying eggs or pets drop immediately onto the ground for rivals to claim. Movement and all hotbar/interact inputs are strictly rejected.
   - **Persistent Disconnect Protection**: Active freeze state is tracked by Bloxity ID / session key on the server. Logging out or refreshing does NOT bypass an active freeze!
   - **Visuals**: Ice-blue avatar texture tint, red 3D overhead `❄️ FROZEN (2:59)` status banner, 3 HUD alert lights (`🔴🔴⚪`), and red siren icons (`🚨`) in the leaderboard.
   - **120s Cooldown Reset**: Going 120s without a new alert resets the warning count to 0.

7. **Combat & Traps (Hotbar Controls)**:
   - **Wooden Bat (Key 1)**: Swing wooden bat (`useBat`) to strike nearby opponents, forcing them to drop their carried egg and knocking them backward.
   - **Bear Traps (Key 2)**: Place invisible traps (`placeTrap`). Opponents stepping on them are stunned for 7 seconds with a prominent overhead `🚨 TRAPPED (7.0s)` status banner.

8. **Bouncing Red Arrow Guide Trail**:
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

### 3. Production Build & Start
```bash
# Build both server and client from root
npm run build

# Start production server
cd server && npm run start
```

---

## 📦 Production Deployment

### 1. Environment Configuration

Copy the example environment files in both `client/` and `server/` directories:

#### Server Environment (`server/.env`)
```env
# Server Port (default: 2567)
PORT=2567

# Allowed Client Origin for CORS (e.g. https://your-client-domain.com or * for wildcard)
CLIENT_ORIGIN=http://localhost:5173
```

#### Client Environment (`client/.env`)
```env
# URL for the Colyseus game server (WebSocket)
VITE_SERVER_URL=ws://localhost:2567
```

> **Important Security Notice**: Never commit actual `.env` files or real secrets to version control. Always update `.env.example` templates and configure production secrets directly in your host environment.

### 2. Building for Production

From the root project directory:
```bash
npm run build
```
Or build client and server separately:
```bash
# Compile Server TypeScript (outputs to server/dist)
cd server && npm run build

# Build Client static production bundle (outputs to client/dist)
cd client && npm run build
```

### 3. Running the Server in Production

Start the compiled Node.js server:
```bash
cd server && npm run start
```
The server will run from `dist/index.js` listening on `PORT` (default `2567`).

### 4. Health Check Endpoint

Verify the server is running by sending a `GET /health` request:
```bash
curl http://localhost:2567/health
```
Response (`HTTP 200 OK`):
```json
{
  "status": "ok",
  "game": "Egg Heist"
}
```

### 5. Cloud Hosting Suggestions

- **Colyseus Backend Server**: Deploy `server/` to Node.js platforms such as Railway, Render, Fly.io, or Heroku. Ensure `PORT` is assigned by the host and set `CLIENT_ORIGIN` to your deployed client domain.
- **Frontend Client**: Deploy static output (`client/dist`) to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Define `VITE_SERVER_URL` in your platform's environment settings pointing to your live WebSocket backend (e.g. `wss://your-server.up.railway.app`).

---

## 🛠️ Modified Files Summary

- `server/src/rooms/GameRoom.ts`: Strict interaction freeze check, zeroed player movement inputs in `freezePlayer`, test-mode debug trigger endpoints, `shopPets` storage logic, double-click sell lock.
- `server/src/rooms/schema/GameState.ts`: Added `@type([Pet]) shopPets` ArraySchema field to `Player`.
- `server/src/config.ts`: Externalized sell base prices, size/mutation multipliers, red alert/freeze parameters, and shop stall radius.
- `server/test/freeze.test.ts`: Automated test suite covering Red Alert incrementing, freeze movement locking, interaction rejection, and 3-second expiration.
- `client/src/network/schema/GameState.ts`: Added `@type([Pet]) shopPets` ArraySchema field on client schema.
- `client/src/ui/UIManager.ts`: Added `showFloatingCashText`, `playCashChimeSound`, `updateShopStorageModal`, red alert lights HUD display, and context-sensitive `updateInteractionPrompt`.
- `client/src/network/NetworkManager.ts`: Wired `"petSoldSuccess"`, `storePetInShop`, `sellShopPet`, `keepShopPet`, and automatic shop storage modal sync.
- `client/index.html`: Added `#shop-storage-modal` overlay container.
- `client/src/style.css`: Added cartoony Roblox styling for shop storage panel, sell/keep buttons, and floating cash text animation.

---

## 🧪 Manual Testing Instructions (Two Windows)

### Part 1: Automated Freeze Test Suite
Run the automated test suite to verify the Red Alert & Freeze System:
```bash
npm run test:freeze
```
*Output*: 4 automated passes verifying alert increments, movement lock during freeze, interaction rejection, and full movement recovery upon expiration (`Exit code: 0`).

---

### Part 2: Two-Window Manual Game Flow Test

1. **Launch Dev Environment**:
   Run `npm run dev` from root directory.

2. **Open Two Browser Windows**:
   - **Window 1**: `http://localhost:5173` (Player 1)
   - **Window 2**: `http://localhost:5173` (Player 2)

3. **Testing Fix 1 (Red Alert Siren & 3-Strike Freeze System)**:
   - In **Window 1**, walk to a guarded egg on the map.
   - Press **E** while the guard animal is awake/chasing to attempt pickup.
   - **Observe**: Screen flashes red, siren chime sounds, and HUD displays `🚨 Alerts: 🔴⚪⚪` (1/3).
   - Repeat 2 more times to reach **3 Red Alerts**.
   - **Verify**:
     - Player becomes **FROZEN** with a red status banner `❄️ FROZEN (3:00)`.
     - In **Window 2**, Player 1's avatar tints **ice-blue** and shows overhead `❄️ FROZEN (3:00)`.
     - Try moving (`WASD`) or interacting (`E`/`G`/`1`/`2`) in **Window 1**—all inputs are strictly locked on the server.
     - Wait for freeze expiration (3:00)—player unfreezes, alerts reset to 0, and normal movement resumes.

4. **Testing Fix 2 (Pet Carrying, Shop Storage, Selling & Keeping)**:
   - In **Window 1**, carry a map egg to your base incubator nest and press **G** to place it.
   - Wait for the incubator hatch timer to expire.
   - **Observe**: When the egg hatches, a carryable 3D pet appears on the ground next to your incubator (NOT directly into passive income).
   - Walk near the pet—prompt shows `"Press E to carry [Pet Name]"`. Press **E** to pick it up.
   - Walk to the central Market Stall (striped awning at map origin).
   - Prompt updates to `"Press G to store pet in shop"`. Press **G**.
   - **Observe**: Pet transfers into **Shop Storage** and the glossy **Shop Storage Modal** opens.
   - In the Shop Panel:
     - **Choice A (Sell)**: Click **SELL ($X)**. Observe 1-second sell animation ("SELLING..."), double-click lock protection, floating `+$X` cash text, Web Audio chime sound, and server event feed announcement!
     - **Choice B (Keep)**: Store another pet and click **KEEP (Income)**. Observe pet moves into your base active pet slot and earns continuous passive `$`/sec!

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
