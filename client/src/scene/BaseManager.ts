import * as THREE from "three";
import { GAME_CONFIG } from "../config";
import { EggManager } from "./EggManager";

interface BaseObject {
  slotIndex: number;
  group: THREE.Group;
  platformMesh: THREE.Mesh;
  beltMesh: THREE.Mesh;
  beltTexture: THREE.CanvasTexture;
  signSprite: THREE.Sprite;
  incubatorGroup: THREE.Group;
  angelicGroup: THREE.Group;
  currentOwnerName: string;
  hasAngelic: boolean;
  currentTreadmillTier: number;
  currentBaseTier: number;
}

export class BaseManager {
  public bases: BaseObject[] = [];
  public group: THREE.Group;
  private eggManager: EggManager;

  private baseColors = [
    { platform: 0xef4444, accent: 0xfca5a5, label: "#ef4444" },
    { platform: 0x10b981, accent: 0x6ee7b7, label: "#10b981" },
    { platform: 0x8b5cf6, accent: 0xc4b5fd, label: "#8b5cf6" },
    { platform: 0xf59e0b, accent: 0xfcd34d, label: "#f59e0b" },
  ];

  constructor(scene: THREE.Scene, eggManager: EggManager) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.eggManager = eggManager;

    this.createBases();
  }

  private createBases() {
    GAME_CONFIG.BASE_POSITIONS.forEach((pos, index) => {
      const baseGroup = new THREE.Group();
      baseGroup.position.set(pos.x, 0, pos.z);

      const colorScheme = this.baseColors[index % this.baseColors.length];

      // Platform Slab
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

      // Border ring
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

      // Treadmill Zone
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

      const beltTexture = this.createStripeTexture(0x38bdf8);
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

      // Angelic Treadmill Group
      const angelicGroup = new THREE.Group();
      angelicGroup.position.set(
        GAME_CONFIG.TREADMILL_OFFSET.x,
        0.4,
        GAME_CONFIG.TREADMILL_OFFSET.z
      );
      angelicGroup.visible = false;

      const pillarGeo = new THREE.CylinderGeometry(0.2, 0.2, 2.5, 16);
      const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });
      const p1 = new THREE.Mesh(pillarGeo, marbleMat);
      p1.position.set(-GAME_CONFIG.TREADMILL_SIZE.width / 2 - 0.2, 1.25, -GAME_CONFIG.TREADMILL_SIZE.length / 2);
      const p2 = new THREE.Mesh(pillarGeo, marbleMat);
      p2.position.set(GAME_CONFIG.TREADMILL_SIZE.width / 2 + 0.2, 1.25, -GAME_CONFIG.TREADMILL_SIZE.length / 2);
      angelicGroup.add(p1, p2);

      const haloGeo = new THREE.TorusGeometry(GAME_CONFIG.TREADMILL_SIZE.width / 2 + 0.3, 0.12, 12, 24);
      const goldMat = new THREE.MeshStandardMaterial({ color: 0xfcb900, metalness: 0.9, roughness: 0.1 });
      const halo = new THREE.Mesh(haloGeo, goldMat);
      halo.position.set(0, 2.5, -GAME_CONFIG.TREADMILL_SIZE.length / 2);
      angelicGroup.add(halo);

      const wingMat = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, roughness: 0.3 });
      const leftWingGeo = new THREE.BoxGeometry(0.1, 1.8, 1.2);
      const leftWing = new THREE.Mesh(leftWingGeo, wingMat);
      leftWing.position.set(-GAME_CONFIG.TREADMILL_SIZE.width / 2 - 0.6, 1.6, -GAME_CONFIG.TREADMILL_SIZE.length / 2 + 0.5);
      leftWing.rotation.z = Math.PI / 8;
      const rightWing = leftWing.clone();
      rightWing.position.set(GAME_CONFIG.TREADMILL_SIZE.width / 2 + 0.6, 1.6, -GAME_CONFIG.TREADMILL_SIZE.length / 2 + 0.5);
      rightWing.rotation.z = -Math.PI / 8;
      angelicGroup.add(leftWing, rightWing);

      baseGroup.add(angelicGroup);

      // Incubator Zone
      const incubatorGroup = new THREE.Group();
      incubatorGroup.position.set(
        GAME_CONFIG.INCUBATOR_OFFSET.x,
        0.3,
        GAME_CONFIG.INCUBATOR_OFFSET.z
      );

      const nestRingGeo = new THREE.TorusGeometry(1.2, 0.25, 12, 24);
      nestRingGeo.rotateX(Math.PI / 2);
      const nestMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
      const nestRing = new THREE.Mesh(nestRingGeo, nestMat);
      nestRing.castShadow = true;
      incubatorGroup.add(nestRing);

      const bedGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.1, 24);
      const bedMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.7 });
      const bed = new THREE.Mesh(bedGeo, bedMat);
      bed.position.y = -0.05;
      incubatorGroup.add(bed);

      baseGroup.add(incubatorGroup);

      // Owner Sign
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
        platformMesh: platform,
        beltMesh: belt,
        beltTexture,
        signSprite,
        incubatorGroup,
        angelicGroup,
        currentOwnerName: "",
        hasAngelic: false,
        currentTreadmillTier: 1,
        currentBaseTier: 1,
      });
    });
  }

  public update(dt: number, playersMap: Map<string, any>) {
    this.bases.forEach((base) => {
      base.beltTexture.offset.y += dt * 1.5;

      let ownerName = "";
      let ownerIncubatorEggs: any[] = [];
      let isAngelic = false;
      let tmTier = 1;
      let bTier = 1;

      playersMap.forEach((player) => {
        if (player.baseIndex === base.slotIndex) {
          ownerName = player.name || `Player_${player.id.slice(0, 4)}`;
          if (player.incubatorEggs) ownerIncubatorEggs = Array.from(player.incubatorEggs);
          if (player.equippedAngelicTreadmill) isAngelic = true;
          tmTier = player.treadmillTier || 1;
          bTier = player.baseTier || 1;
        }
      });

      if (base.currentOwnerName !== ownerName) {
        base.currentOwnerName = ownerName;
        const colorScheme = this.baseColors[base.slotIndex % this.baseColors.length];
        const statusText = ownerName ? `OWNER: ${ownerName}` : "UNCLAIMED";
        this.updateSignSprite(base.signSprite, `BASE #${base.slotIndex + 1}`, statusText, colorScheme.label);
      }

      if (base.hasAngelic !== isAngelic) {
        base.hasAngelic = isAngelic;
        base.angelicGroup.visible = isAngelic;
      }

      // Update 3D Treadmill Tier visuals (glowing belt colors)
      if (base.currentTreadmillTier !== tmTier) {
        base.currentTreadmillTier = tmTier;
        const colors = [0x38bdf8, 0x38bdf8, 0xa855f7, 0xfcb900];
        const newColor = colors[Math.min(colors.length - 1, tmTier - 1)];
        base.beltTexture = this.createStripeTexture(newColor);
        base.beltTexture.wrapS = THREE.RepeatWrapping;
        base.beltTexture.wrapT = THREE.RepeatWrapping;
        base.beltTexture.repeat.set(1, 4);
        (base.beltMesh.material as THREE.MeshStandardMaterial).map = base.beltTexture;
        (base.beltMesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
      }

      // Update Base Platform Scale Expansion
      if (base.currentBaseTier !== bTier) {
        base.currentBaseTier = bTier;
        const scale = 1.0 + (bTier - 1) * 0.15;
        base.platformMesh.scale.set(scale, 1, scale);
      }

      this.syncIncubatorEggVisuals(base.incubatorGroup, ownerIncubatorEggs);
    });
  }

  private syncIncubatorEggVisuals(incubatorGroup: THREE.Group, eggs: any[]) {
    while (incubatorGroup.children.length > 2) {
      incubatorGroup.remove(incubatorGroup.children[incubatorGroup.children.length - 1]);
    }

    const offsets = [
      { x: -0.4, z: -0.3 },
      { x: 0.4, z: -0.3 },
      { x: 0, z: 0.4 },
      { x: -0.5, z: 0.3 },
      { x: 0.5, z: 0.3 },
      { x: 0, z: -0.5 },
    ];

    eggs.slice(0, 6).forEach((eggData, idx) => {
      const eggGroup = this.eggManager.createEggMesh(eggData.tier || "common");
      const offset = offsets[idx % offsets.length];
      eggGroup.position.set(offset.x, 0.1, offset.z);
      eggGroup.scale.set(0.75, 0.75, 0.75);
      incubatorGroup.add(eggGroup);
    });
  }

  private createStripeTexture(stripeColorHex: number): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0, 0, 128, 128);

    ctx.fillStyle = `#${stripeColorHex.toString(16).padStart(6, "0")}`;
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

    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.roundRect(8, 8, canvas.width - 16, canvas.height - 16, 16);
    ctx.fill();

    ctx.lineWidth = 4;
    ctx.strokeStyle = colorHex;
    ctx.roundRect(8, 8, canvas.width - 16, canvas.height - 16, 16);
    ctx.stroke();

    ctx.font = "Bold 26px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = colorHex;
    ctx.fillText(title, canvas.width / 2, 40);

    ctx.font = "Bold 22px 'Segoe UI', sans-serif";
    ctx.fillStyle = owner === "UNCLAIMED" ? "#94a3b8" : "#ffffff";
    ctx.fillText(owner, canvas.width / 2, 82);
  }
}
