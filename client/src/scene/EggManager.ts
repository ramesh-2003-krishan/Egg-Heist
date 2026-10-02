import * as THREE from "three";
import { EGG_TIERS, GAME_CONFIG } from "../config";

export class EggManager {
  public scene: THREE.Scene;
  private mapEggMeshes: Map<string, THREE.Group> = new Map();
  private incubatorEggMeshes: Map<string, THREE.Group> = new Map();
  private zebraTexture: THREE.CanvasTexture;
  private rainbowTexture: THREE.CanvasTexture;
  private animTimer: number = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.zebraTexture = this.createZebraTexture();
    this.rainbowTexture = this.createRainbowTexture();
  }

  public createEggMesh(tier: string): THREE.Group {
    const group = new THREE.Group();

    // Procedural Ellipsoid Mesh
    const sphereGeo = new THREE.SphereGeometry(0.42, 24, 24);
    sphereGeo.scale(1, 1.35, 1); // Egg shape

    const tierConfig = EGG_TIERS[tier] || EGG_TIERS.common;
    let mat: THREE.Material;

    if (tier === "secret") {
      mat = new THREE.MeshStandardMaterial({
        map: this.zebraTexture,
        roughness: 0.3,
        metalness: 0.1,
      });
    } else if (tier === "eternal") {
      mat = new THREE.MeshStandardMaterial({
        map: this.rainbowTexture,
        roughness: 0.2,
        metalness: 0.3,
        emissive: 0x330033,
      });
    } else if (tier === "divine") {
      mat = new THREE.MeshStandardMaterial({
        color: 0xfcb900,
        roughness: 0.15,
        metalness: 0.85,
        emissive: 0x664400,
      });

      // Gold Sparkle Particles
      const particleGeo = new THREE.BufferGeometry();
      const particleCount = 12;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 1.2;
        positions[i + 1] = (Math.random() - 0.5) * 1.4;
        positions[i + 2] = (Math.random() - 0.5) * 1.2;
      }
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0xfff0aa,
        size: 0.08,
        transparent: true,
        opacity: 0.9,
      });
      const sparkles = new THREE.Points(particleGeo, particleMat);
      group.add(sparkles);
    } else {
      mat = new THREE.MeshStandardMaterial({
        color: tierConfig.colorHex,
        roughness: 0.3,
        metalness: tier === "epic" ? 0.3 : 0.1,
      });
    }

    const mesh = new THREE.Mesh(sphereGeo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.y = 0.55; // Pivot center
    group.add(mesh);

    // Glowing base pedestal ring for high tiers
    if (tier === "secret" || tier === "eternal" || tier === "divine") {
      const ringGeo = new THREE.RingGeometry(0.3, 0.6, 16);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: tierConfig.colorHex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.y = 0.02;
      group.add(ring);
    }

    return group;
  }

  public createSleepingChickenMesh(): THREE.Group {
    const chickenGroup = new THREE.Group();

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const beakMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3 });
    const combMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x334155 });

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.55, 0.45, 0.65);
    const body = new THREE.Mesh(bodyGeo, whiteMat);
    body.position.y = 0.225;
    body.castShadow = true;
    chickenGroup.add(body);

    // Head
    const headGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const head = new THREE.Mesh(headGeo, whiteMat);
    head.position.set(0, 0.4, 0.2);
    head.castShadow = true;
    chickenGroup.add(head);

    // Beak
    const beakGeo = new THREE.BoxGeometry(0.12, 0.1, 0.18);
    const beak = new THREE.Mesh(beakGeo, beakMat);
    beak.position.set(0, 0.35, 0.42);
    chickenGroup.add(beak);

    // Comb
    const combGeo = new THREE.BoxGeometry(0.08, 0.16, 0.22);
    const comb = new THREE.Mesh(combGeo, combMat);
    comb.position.set(0, 0.62, 0.2);
    chickenGroup.add(comb);

    // Sleeping Eye Slits (Horizontal lines)
    const eyeGeo = new THREE.BoxGeometry(0.1, 0.03, 0.02);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.1, 0.42, 0.38);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.1, 0.42, 0.38);
    chickenGroup.add(leftEye, rightEye);

    // Floating zZ Sprite
    const zCanvas = document.createElement("canvas");
    zCanvas.width = 128;
    zCanvas.height = 128;
    const zCtx = zCanvas.getContext("2d")!;
    zCtx.font = "Bold 52px 'Segoe UI', sans-serif";
    zCtx.fillStyle = "#38bdf8";
    zCtx.shadowColor = "#0284c7";
    zCtx.shadowBlur = 6;
    zCtx.fillText("zZ", 32, 80);

    const zTex = new THREE.CanvasTexture(zCanvas);
    const zMat = new THREE.SpriteMaterial({ map: zTex, transparent: true });
    const zSprite = new THREE.Sprite(zMat);
    zSprite.scale.set(1.0, 1.0, 1.0);
    zSprite.position.set(0.3, 0.95, 0);
    zSprite.name = "zZSprite";
    chickenGroup.add(zSprite);

    return chickenGroup;
  }

  public syncMapEggs(mapEggsMap: Map<string, any>) {
    // 1. Remove egg meshes no longer present on map
    this.mapEggMeshes.forEach((meshGroup, eggId) => {
      if (!mapEggsMap.has(eggId)) {
        this.scene.remove(meshGroup);
        this.mapEggMeshes.delete(eggId);
      }
    });

    // 2. Add/Update egg meshes for wild eggs on ground
    mapEggsMap.forEach((eggData, eggId) => {
      let group = this.mapEggMeshes.get(eggId);
      if (!group) {
        group = this.createEggMesh(eggData.tier);
        this.scene.add(group);
        this.mapEggMeshes.set(eggId, group);
      }
      group.position.set(eggData.x, 0, eggData.z);

      // Handle Sleeping Chicken
      let chickenMesh = group.getObjectByName("sleepingChicken");
      if (eggData.hasChicken && !chickenMesh) {
        chickenMesh = this.createSleepingChickenMesh();
        chickenMesh.name = "sleepingChicken";
        chickenMesh.position.set(0.7, 0, 0);
        group.add(chickenMesh);
      } else if (!eggData.hasChicken && chickenMesh) {
        group.remove(chickenMesh);
      }
    });
  }

  public update(dt: number) {
    this.animTimer += dt;

    // Animate rainbow texture gradient offset for Eternal eggs
    if (this.rainbowTexture) {
      this.rainbowTexture.offset.x += dt * 0.2;
    }

    // Animate bobbing & gentle rotation for wild ground eggs
    this.mapEggMeshes.forEach((group) => {
      group.rotation.y += dt * 1.2;
      const eggMesh = group.children[0];
      if (eggMesh) {
        eggMesh.position.y = 0.55 + Math.sin(this.animTimer * 3 + group.position.x) * 0.08;
      }
    });
  }

  private createZebraTexture(): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 256, 256);

    ctx.fillStyle = "#0f172a";
    for (let i = -50; i < 300; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.bezierCurveTo(i + 40, 80, i - 20, 160, i + 30, 256);
      ctx.lineTo(i + 46, 256);
      ctx.bezierCurveTo(i - 4, 160, i + 56, 80, i + 16, 0);
      ctx.closePath();
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  private createRainbowTexture(): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    const grad = ctx.createLinearGradient(0, 0, 256, 0);
    grad.addColorStop(0, "#ff0000");
    grad.addColorStop(0.2, "#ff7700");
    grad.addColorStop(0.4, "#ffdd00");
    grad.addColorStop(0.6, "#00ff66");
    grad.addColorStop(0.8, "#0099ff");
    grad.addColorStop(1, "#cc00ff");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }
}
