import * as THREE from "three";
import { Avatar } from "./Avatar";
import { BaseManager } from "./BaseManager";
import { EggManager } from "./EggManager";
import { PetManager } from "./PetManager";
import { GuideTrail } from "./GuideTrail";
import { TrapManager } from "./TrapManager";
import { GAME_CONFIG } from "../config";

export class SceneManager {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public baseManager: BaseManager;
  public eggManager: EggManager;
  public petManager: PetManager;
  public guideTrail: GuideTrail;
  public trapManager: TrapManager;
  private avatars: Map<string, Avatar> = new Map();
  private localAvatarId: string | null = null;

  constructor(container: HTMLElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f172a);
    this.scene.fog = new THREE.FogExp2(0x0f172a, 0.012);

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 10, 15);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.setupEnvironment();
    this.setupLighting();

    this.eggManager = new EggManager(this.scene);
    this.baseManager = new BaseManager(this.scene, this.eggManager);
    this.petManager = new PetManager(this.scene);
    this.guideTrail = new GuideTrail(this.scene);
    this.trapManager = new TrapManager(this.scene);

    window.addEventListener("resize", () => this.onWindowResize());
  }

  private ambientLight!: THREE.AmbientLight;
  private sunLight!: THREE.DirectionalLight;
  private fillLight!: THREE.DirectionalLight;
  private cloudsGroup: THREE.Group = new THREE.Group();

  private setupEnvironment() {
    // 1. Bright Green Studded Ground (Canvas Texture with repeating studs)
    const groundCanvas = document.createElement("canvas");
    groundCanvas.width = 128;
    groundCanvas.height = 128;
    const gCtx = groundCanvas.getContext("2d")!;

    // Base Grass Green
    gCtx.fillStyle = "#4ade80";
    gCtx.fillRect(0, 0, 128, 128);

    // Grid lines for tiles
    gCtx.strokeStyle = "#22c55e";
    gCtx.lineWidth = 2;
    gCtx.strokeRect(0, 0, 128, 128);
    gCtx.strokeRect(0, 0, 64, 64);
    gCtx.strokeRect(64, 0, 64, 64);
    gCtx.strokeRect(0, 64, 64, 64);
    gCtx.strokeRect(64, 64, 64, 64);

    // Studs (4x4 studs on 128x128 tile)
    const studPositions = [
      { x: 16, y: 16 }, { x: 48, y: 16 }, { x: 80, y: 16 }, { x: 112, y: 16 },
      { x: 16, y: 48 }, { x: 48, y: 48 }, { x: 80, y: 48 }, { x: 112, y: 48 },
      { x: 16, y: 80 }, { x: 48, y: 80 }, { x: 80, y: 80 }, { x: 112, y: 80 },
      { x: 16, y: 112 }, { x: 48, y: 112 }, { x: 80, y: 112 }, { x: 112, y: 112 },
    ];

    studPositions.forEach((pos) => {
      // Stud Shadow
      gCtx.beginPath();
      gCtx.arc(pos.x + 1, pos.y + 1, 8, 0, Math.PI * 2);
      gCtx.fillStyle = "#15803d";
      gCtx.fill();

      // Stud Top
      gCtx.beginPath();
      gCtx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
      gCtx.fillStyle = "#86efac";
      gCtx.fill();

      // Stud Highlight
      gCtx.beginPath();
      gCtx.arc(pos.x - 2, pos.y - 2, 4, 0, Math.PI * 2);
      gCtx.fillStyle = "#bbf7d0";
      gCtx.fill();
    });

    const groundTex = new THREE.CanvasTexture(groundCanvas);
    groundTex.wrapS = THREE.RepeatWrapping;
    groundTex.wrapT = THREE.RepeatWrapping;
    groundTex.repeat.set(25, 25);
    groundTex.colorSpace = THREE.SRGBColorSpace;

    const groundGeo = new THREE.PlaneGeometry(100, 100);
    const groundMat = new THREE.MeshStandardMaterial({
      map: groundTex,
      roughness: 0.6,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // 2. Checkered Brown Cliff Walls
    const cliffCanvas = document.createElement("canvas");
    cliffCanvas.width = 128;
    cliffCanvas.height = 128;
    const cCtx = cliffCanvas.getContext("2d")!;
    const tileSize = 32;
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        cCtx.fillStyle = (r + c) % 2 === 0 ? "#854d0e" : "#92400e";
        cCtx.fillRect(c * tileSize, r * tileSize, tileSize, tileSize);
        cCtx.strokeStyle = "#451a03";
        cCtx.lineWidth = 2;
        cCtx.strokeRect(c * tileSize, r * tileSize, tileSize, tileSize);
      }
    }
    const cliffTex = new THREE.CanvasTexture(cliffCanvas);
    cliffTex.wrapS = THREE.RepeatWrapping;
    cliffTex.wrapT = THREE.RepeatWrapping;
    cliffTex.repeat.set(16, 2);
    cliffTex.colorSpace = THREE.SRGBColorSpace;

    const cliffMat = new THREE.MeshStandardMaterial({
      map: cliffTex,
      roughness: 0.8,
    });

    // 4 Checkered Cliff Walls around boundaries
    const wallH = 14;
    const wallThick = 4;
    const mapW = 100;

    // North & South Walls
    const wallNSGeo = new THREE.BoxGeometry(mapW + wallThick * 2, wallH, wallThick);
    const northWall = new THREE.Mesh(wallNSGeo, cliffMat);
    northWall.position.set(0, wallH / 2, -mapW / 2 - wallThick / 2);
    northWall.castShadow = true;
    northWall.receiveShadow = true;
    this.scene.add(northWall);

    const southWall = new THREE.Mesh(wallNSGeo, cliffMat);
    southWall.position.set(0, wallH / 2, mapW / 2 + wallThick / 2);
    southWall.castShadow = true;
    southWall.receiveShadow = true;
    this.scene.add(southWall);

    // East & West Walls
    const wallEWGeo = new THREE.BoxGeometry(wallThick, wallH, mapW);
    const eastWall = new THREE.Mesh(wallEWGeo, cliffMat);
    eastWall.position.set(mapW / 2 + wallThick / 2, wallH / 2, 0);
    eastWall.castShadow = true;
    eastWall.receiveShadow = true;
    this.scene.add(eastWall);

    const westWall = new THREE.Mesh(wallEWGeo, cliffMat);
    westWall.position.set(-mapW / 2 - wallThick / 2, wallH / 2, 0);
    westWall.castShadow = true;
    westWall.receiveShadow = true;
    this.scene.add(westWall);

    // 3. Grass Block Platforms & Environment Decorations
    this.setupDecorations();

    // 4. Soft Drifting Clouds in Sky
    this.setupClouds();
  }

  private setupDecorations() {
    const grassTopMat = new THREE.MeshStandardMaterial({ color: 0x4ade80, roughness: 0.6 });
    const dirtSideMat = new THREE.MeshStandardMaterial({ color: 0x854d0e, roughness: 0.9 });
    const blockMat = [dirtSideMat, dirtSideMat, grassTopMat, dirtSideMat, dirtSideMat, dirtSideMat];

    // Corner grass platforms
    const platformGeo = new THREE.BoxGeometry(8, 3, 8);
    const p1 = new THREE.Mesh(platformGeo, blockMat);
    p1.position.set(-42, 1.5, -42);
    p1.castShadow = true;
    p1.receiveShadow = true;

    const p2 = new THREE.Mesh(platformGeo, blockMat);
    p2.position.set(42, 1.5, -42);
    p2.castShadow = true;
    p2.receiveShadow = true;

    const p3 = new THREE.Mesh(platformGeo, blockMat);
    p3.position.set(-42, 1.5, 42);
    p3.castShadow = true;
    p3.receiveShadow = true;

    const p4 = new THREE.Mesh(platformGeo, blockMat);
    p4.position.set(42, 1.5, 42);
    p4.castShadow = true;
    p4.receiveShadow = true;

    this.scene.add(p1, p2, p3, p4);

    // Procedural Roblox Trees
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 });
    const leavesMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.5 });

    const treePositions = [
      { x: -38, z: -38 }, { x: 38, z: -38 }, { x: -38, z: 38 }, { x: 38, z: 38 },
      { x: -44, z: 0 }, { x: 44, z: 0 }, { x: 0, z: -44 }, { x: 0, z: 44 }
    ];

    treePositions.forEach((pos) => {
      const treeGroup = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.BoxGeometry(1.2, 4, 1.2), trunkMat);
      trunk.position.y = 2;
      trunk.castShadow = true;

      const leaves = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.5, 3.5), leavesMat);
      leaves.position.y = 4.8;
      leaves.castShadow = true;

      treeGroup.add(trunk, leaves);
      treeGroup.position.set(pos.x, 0, pos.z);
      this.scene.add(treeGroup);
    });
  }

  private setupClouds() {
    this.scene.add(this.cloudsGroup);
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      roughness: 0.2,
    });

    for (let i = 0; i < 10; i++) {
      const cloud = new THREE.Group();
      const numBlocks = 3 + Math.floor(Math.random() * 4);
      for (let b = 0; b < numBlocks; b++) {
        const w = 4 + Math.random() * 5;
        const h = 2 + Math.random() * 2;
        const d = 4 + Math.random() * 5;
        const part = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), cloudMat);
        part.position.set((b - numBlocks / 2) * 3, Math.random() * 1.5, (Math.random() - 0.5) * 3);
        cloud.add(part);
      }
      cloud.position.set(
        (Math.random() - 0.5) * 120,
        22 + Math.random() * 10,
        (Math.random() - 0.5) * 120
      );
      this.cloudsGroup.add(cloud);
    }
  }

  private setupLighting() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(this.ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xfffaed, 1.3);
    this.sunLight.position.set(35, 50, 25);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 160;

    const d = 45;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;

    this.scene.add(this.sunLight);

    this.fillLight = new THREE.DirectionalLight(0x38bdf8, 0.4);
    this.fillLight.position.set(-25, 25, -25);
    this.scene.add(this.fillLight);
  }

  public setLocalAvatarId(id: string) {
    this.localAvatarId = id;
  }

  public addAvatar(id: string, name: string, isLocal: boolean): Avatar {
    const skinColors = [0xef4444, 0x10b981, 0x8b5cf6, 0xf59e0b, 0xec4899, 0x06b6d4];
    const colorHex = skinColors[Math.abs(this.hashCode(id)) % skinColors.length];

    const avatar = new Avatar(id, name, isLocal, colorHex);
    this.avatars.set(id, avatar);
    this.scene.add(avatar.group);

    if (isLocal) {
      this.localAvatarId = id;
    }

    return avatar;
  }

  public removeAvatar(id: string) {
    const avatar = this.avatars.get(id);
    if (avatar) {
      this.scene.remove(avatar.group);
      this.avatars.delete(id);
    }
  }

  public getAvatar(id: string): Avatar | undefined {
    return this.avatars.get(id);
  }

  public updateAvatarState(
    id: string,
    x: number,
    y: number,
    z: number,
    rotationY: number,
    speed?: number,
    speedStat?: number,
    carriedEggTier?: string,
    equippedDivineTrail?: boolean,
    bloxityCosmetics?: { skinId?: string; hatId?: string; hairId?: string; faceId?: string; shirtId?: string; pantsId?: string; maskId?: string },
    trappedTimer?: number
  ) {
    const avatar = this.avatars.get(id);
    if (avatar) {
      avatar.setPosition(x, y, z);
      avatar.setRotationY(rotationY);
      if (typeof speed === "number") avatar.speed = speed;
      if (typeof speedStat === "number") avatar.speedStat = speedStat;
      avatar.setCarriedEgg(carriedEggTier || "");
      if (typeof equippedDivineTrail === "boolean") {
        avatar.setEquippedDivineTrail(equippedDivineTrail);
      }
      if (bloxityCosmetics) {
        avatar.setBloxityCosmetics(bloxityCosmetics);
      }
      if (typeof trappedTimer === "number") {
        avatar.trappedTimer = trappedTimer;
      }
    }
  }

  public syncMapEggs(mapEggs: Map<string, any>) {
    this.eggManager.syncMapEggs(mapEggs);
  }

  public syncPets(playersMap: Map<string, any>) {
    this.petManager.syncPets(playersMap);
  }

  public syncTraps(trapsMap: Map<string, any>) {
    this.trapManager.syncTraps(trapsMap, this.localAvatarId);
  }

  public syncChasingChickens(chickensMap: Map<string, any>) {
    this.trapManager.syncChasingChickens(chickensMap);
  }

  public update(dt: number, playersMap?: Map<string, any>, dayNightProgress: number = 0, mapEggs?: Map<string, any>) {
    const map = playersMap || new Map();
    this.baseManager.update(dt, map);
    this.eggManager.update(dt);
    this.petManager.update(dt);
    this.petManager.syncPets(map);

    this.avatars.forEach((avatar) => avatar.update(dt));

    // Update Guide Trail Target Position
    let guideTargetPos: { x: number; z: number } | null = null;
    let localPlayerPos: { x: number; z: number } | undefined;

    if (this.localAvatarId) {
      const localAvatar = this.avatars.get(this.localAvatarId);
      const localPlayerData = map.get(this.localAvatarId);

      if (localAvatar && localPlayerData) {
        localPlayerPos = { x: localAvatar.group.position.x, z: localAvatar.group.position.z };

        // 1. If carrying egg -> point to own base incubator
        if (localPlayerData.carriedEggTier && localPlayerData.baseIndex >= 0) {
          const basePos = GAME_CONFIG.BASE_POSITIONS[localPlayerData.baseIndex];
          if (basePos) {
            guideTargetPos = {
              x: basePos.x + GAME_CONFIG.INCUBATOR_OFFSET.x,
              z: basePos.z + GAME_CONFIG.INCUBATOR_OFFSET.z,
            };
          }
        }
        // 2. If new player -> point to own base treadmill
        else if ((localPlayerData.speedStat || 1) <= 1.0 && localPlayerData.baseIndex >= 0) {
          const basePos = GAME_CONFIG.BASE_POSITIONS[localPlayerData.baseIndex];
          if (basePos) {
            guideTargetPos = {
              x: basePos.x + GAME_CONFIG.TREADMILL_OFFSET.x,
              z: basePos.z + GAME_CONFIG.TREADMILL_OFFSET.z,
            };
          }
        }
        // 3. Otherwise -> point to nearest map egg
        else if (mapEggs && mapEggs.size > 0) {
          let closestDist = Infinity;
          mapEggs.forEach((egg) => {
            const d = Math.hypot(localPlayerPos!.x - egg.x, localPlayerPos!.z - egg.z);
            if (d < closestDist) {
              closestDist = d;
              guideTargetPos = { x: egg.x, z: egg.z };
            }
          });
        }
      }
    }

    this.guideTrail.update(dt, localPlayerPos, guideTargetPos);

    // Cloud Drifting Animation
    this.cloudsGroup.children.forEach((cloud) => {
      cloud.position.x += dt * 1.5;
      if (cloud.position.x > 65) {
        cloud.position.x = -65;
      }
    });

    // Day/Night Cycle Environment Interpolation (0.0 - 0.5 Day, 0.5 - 1.0 Night)
    const cycle = dayNightProgress;
    const isDay = cycle < 0.5;
    const factor = isDay ? cycle / 0.5 : (cycle - 0.5) / 0.5;

    // Sky colors: Day sky-blue (0x38bdf8), Sunset orange (0xf97316), Night deep navy (0x0f172a)
    let skyColor = new THREE.Color(0x38bdf8);
    let fogColor = new THREE.Color(0x7dd3fc);
    let sunIntensity = 1.3;
    let ambientIntensity = 0.7;

    if (cycle < 0.4) {
      // Day
      skyColor.setHex(0x38bdf8);
      fogColor.setHex(0x7dd3fc);
      sunIntensity = 1.3;
      ambientIntensity = 0.7;
    } else if (cycle < 0.5) {
      // Sunset
      const t = (cycle - 0.4) / 0.1;
      skyColor.lerpColors(new THREE.Color(0x38bdf8), new THREE.Color(0xf97316), t);
      fogColor.lerpColors(new THREE.Color(0x7dd3fc), new THREE.Color(0xfdba74), t);
      sunIntensity = THREE.MathUtils.lerp(1.3, 0.6, t);
      ambientIntensity = THREE.MathUtils.lerp(0.7, 0.4, t);
    } else if (cycle < 0.9) {
      // Night
      skyColor.setHex(0x0f172a);
      fogColor.setHex(0x1e293b);
      sunIntensity = 0.3;
      ambientIntensity = 0.25;
    } else {
      // Sunrise
      const t = (cycle - 0.9) / 0.1;
      skyColor.lerpColors(new THREE.Color(0x0f172a), new THREE.Color(0x38bdf8), t);
      fogColor.lerpColors(new THREE.Color(0x1e293b), new THREE.Color(0x7dd3fc), t);
      sunIntensity = THREE.MathUtils.lerp(0.3, 1.3, t);
      ambientIntensity = THREE.MathUtils.lerp(0.25, 0.7, t);
    }

    this.scene.background = skyColor;
    this.scene.fog = new THREE.FogExp2(fogColor.getHex(), 0.008);
    if (this.sunLight) this.sunLight.intensity = sunIntensity;
    if (this.ambientLight) this.ambientLight.intensity = ambientIntensity;

    if (this.localAvatarId) {
      const localAvatar = this.avatars.get(this.localAvatarId);
      if (localAvatar) {
        const targetCamPos = localAvatar.group.position.clone().add(new THREE.Vector3(0, 7.5, 11));
        const targetLookAt = localAvatar.group.position.clone().add(new THREE.Vector3(0, 1.5, 0));

        this.camera.position.lerp(targetCamPos, 0.1);
        this.camera.lookAt(targetLookAt);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }
}
