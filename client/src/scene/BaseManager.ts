import * as THREE from "three";
import { GAME_CONFIG } from "../config";

interface BaseObject {
  slotIndex: number;
  group: THREE.Group;
  beltTexture: THREE.CanvasTexture;
  signSprite: THREE.Sprite;
  currentOwnerName: string;
}

export class BaseManager {
  public bases: BaseObject[] = [];
  public group: THREE.Group;

  private baseColors = [
    { platform: 0xef4444, accent: 0xfca5a5, label: "#ef4444" }, // Slot 0: Red
    { platform: 0x10b981, accent: 0x6ee7b7, label: "#10b981" }, // Slot 1: Green
    { platform: 0x8b5cf6, accent: 0xc4b5fd, label: "#8b5cf6" }, // Slot 2: Purple
    { platform: 0xf59e0b, accent: 0xfcd34d, label: "#f59e0b" }, // Slot 3: Amber
  ];

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    this.createBases();
  }

  private createBases() {
    GAME_CONFIG.BASE_POSITIONS.forEach((pos, index) => {
      const baseGroup = new THREE.Group();
      baseGroup.position.set(pos.x, 0, pos.z);

      const colorScheme = this.baseColors[index % this.baseColors.length];

      // 1. Base Ground Platform Slab
      const platformGeo = new THREE.BoxGeometry(
        GAME_CONFIG.BASE_SIZE.width,
        0.3,
        GAME_CONFIG.BASE_SIZE.length
      );
      const platformMat = new THREE.MeshStandardMaterial({
        color: colorScheme.platform,
        roughness: 0.6,
        metalness: 0.2,
      });
      const platform = new THREE.Mesh(platformGeo, platformMat);
      platform.position.y = 0.15;
      platform.receiveShadow = true;
      baseGroup.add(platform);

      // Platform border ring
      const borderGeo = new THREE.BoxGeometry(
        GAME_CONFIG.BASE_SIZE.width + 0.4,
        0.2,
        GAME_CONFIG.BASE_SIZE.length + 0.4
      );
      const borderMat = new THREE.MeshStandardMaterial({
        color: colorScheme.accent,
        roughness: 0.4,
      });
      const border = new THREE.Mesh(borderGeo, borderMat);
      border.position.y = 0.1;
      border.receiveShadow = true;
      baseGroup.add(border);

      // 2. Treadmill Zone
      // Treadmill outer frame
      const frameGeo = new THREE.BoxGeometry(
        GAME_CONFIG.TREADMILL_SIZE.width + 0.4,
        0.35,
        GAME_CONFIG.TREADMILL_SIZE.length + 0.4
      );
      const frameMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.8 });
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.position.set(
        GAME_CONFIG.TREADMILL_OFFSET.x,
        0.25,
        GAME_CONFIG.TREADMILL_OFFSET.z
      );
      frame.receiveShadow = true;
      frame.castShadow = true;
      baseGroup.add(frame);

      // Treadmill moving belt surface
      const beltTexture = this.createStripeTexture();
      beltTexture.wrapS = THREE.RepeatWrapping;
      beltTexture.wrapT = THREE.RepeatWrapping;
      beltTexture.repeat.set(1, 4);

      const beltGeo = new THREE.BoxGeometry(
        GAME_CONFIG.TREADMILL_SIZE.width,
        0.1,
        GAME_CONFIG.TREADMILL_SIZE.length
      );
      const beltMat = new THREE.MeshStandardMaterial({
        map: beltTexture,
        roughness: 0.7,
        metalness: 0.1,
      });
      const belt = new THREE.Mesh(beltGeo, beltMat);
      belt.position.set(
        GAME_CONFIG.TREADMILL_OFFSET.x,
        0.38,
        GAME_CONFIG.TREADMILL_OFFSET.z
      );
      belt.receiveShadow = true;
      baseGroup.add(belt);

      // 3. Base Owner Sign Post
      const poleGeo = new THREE.CylinderGeometry(0.1, 0.1, 2.2);
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.set(0, 1.4, GAME_CONFIG.BASE_SIZE.length / 2 - 0.8);
      pole.castShadow = true;
      baseGroup.add(pole);

      const signSprite = this.createSignSprite(`BASE #${index + 1}`, "UNCLAIMED", colorScheme.label);
      signSprite.position.set(0, 2.6, GAME_CONFIG.BASE_SIZE.length / 2 - 0.8);
      baseGroup.add(signSprite);

      this.group.add(baseGroup);

      this.bases.push({
        slotIndex: index,
        group: baseGroup,
        beltTexture,
        signSprite,
        currentOwnerName: "",
      });
    });
  }

  public update(dt: number, playersMap: Map<string, any>) {
    // 1. Animate moving treadmill belt textures continuously
    this.bases.forEach((base) => {
      base.beltTexture.offset.y += dt * 1.5;

      // 2. Find owner of this base slot
      let ownerName = "";
      playersMap.forEach((player) => {
        if (player.baseIndex === base.slotIndex) {
          ownerName = player.name || `Player_${player.id.slice(0, 4)}`;
        }
      });

      // Update sign sprite if owner changed
      if (base.currentOwnerName !== ownerName) {
        base.currentOwnerName = ownerName;
        const colorScheme = this.baseColors[base.slotIndex % this.baseColors.length];
        const statusText = ownerName ? `OWNER: ${ownerName}` : "UNCLAIMED";
        this.updateSignSprite(base.signSprite, `BASE #${base.slotIndex + 1}`, statusText, colorScheme.label);
      }
    });
  }

  private createStripeTexture(): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;

    // Dark grey background
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0, 0, 128, 128);

    // Dynamic bright stripes
    ctx.fillStyle = "#38bdf8";
    for (let i = 0; i < 128; i += 32) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(128, i + 16);
      ctx.lineTo(128, i + 24);
      ctx.lineTo(0, i + 8);
      ctx.closePath();
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }

  private createSignSprite(title: string, owner: string, colorHex: string): THREE.Sprite {
    const canvas = document.createElement("canvas");
    canvas.width = 384;
    canvas.height = 128;
    this.drawSignCanvas(canvas, title, owner, colorHex);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(3.6, 1.2, 1);
    return sprite;
  }

  private updateSignSprite(sprite: THREE.Sprite, title: string, owner: string, colorHex: string) {
    const texture = sprite.material.map as THREE.CanvasTexture;
    if (texture && texture.image) {
      const canvas = texture.image as HTMLCanvasElement;
      this.drawSignCanvas(canvas, title, owner, colorHex);
      texture.needsUpdate = true;
    }
  }

  private drawSignCanvas(canvas: HTMLCanvasElement, title: string, owner: string, colorHex: string) {
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Rounded sign board container
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.roundRect(8, 8, canvas.width - 16, canvas.height - 16, 16);
    ctx.fill();

    ctx.lineWidth = 4;
    ctx.strokeStyle = colorHex;
    ctx.roundRect(8, 8, canvas.width - 16, canvas.height - 16, 16);
    ctx.stroke();

    // Title text
    ctx.font = "Bold 26px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = colorHex;
    ctx.fillText(title, canvas.width / 2, 40);

    // Owner text
    ctx.font = "Bold 22px 'Segoe UI', sans-serif";
    ctx.fillStyle = owner === "UNCLAIMED" ? "#94a3b8" : "#ffffff";
    ctx.fillText(owner, canvas.width / 2, 82);
  }
}
