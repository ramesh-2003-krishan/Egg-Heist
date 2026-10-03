import * as THREE from "three";
import { EGG_TIERS } from "../config";

export class EggManager {
  public scene: THREE.Scene;
  private mapEggMeshes: Map<string, THREE.Group> = new Map();
  private guardAnimalMeshes: Map<string, THREE.Group> = new Map();
  private zebraTexture: THREE.CanvasTexture;
  private rainbowTexture: THREE.CanvasTexture;
  private animTimer: number = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.zebraTexture = this.createZebraTexture();
    this.rainbowTexture = this.createRainbowTexture();
  }

  public createEggMesh(tier: string, isGuarded: boolean = false): THREE.Group {
    const group = new THREE.Group();

    const sphereGeo = new THREE.SphereGeometry(0.42, 24, 24);
    sphereGeo.scale(1, 1.35, 1);

    const tierConfig = EGG_TIERS[tier] || EGG_TIERS.common;
    let mat: THREE.Material;

    if (tier === "secret") {
      mat = new THREE.MeshStandardMaterial({ map: this.zebraTexture, roughness: 0.3, metalness: 0.1 });
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
    mesh.position.y = 0.55;
    group.add(mesh);

    // Glowing base ring for guarded eggs or high tiers
    if (isGuarded || tier === "secret" || tier === "eternal" || tier === "divine") {
      const ringGeo = new THREE.RingGeometry(0.4, 0.75, 16);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isGuarded ? 0xef4444 : tierConfig.colorHex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.y = 0.02;
      group.add(ring);
    }

    return group;
  }

  public createGuardAnimalMesh(type: string): THREE.Group {
    const animalGroup = new THREE.Group();

    let bodyColor = 0xffffff;
    let headColor = 0xffffff;
    if (type === "dog") {
      bodyColor = 0xd97706;
      headColor = 0xb45309;
    } else if (type === "fox") {
      bodyColor = 0xea580c;
      headColor = 0xc2410c;
    }

    const bodyMat = new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.4 });
    const headMat = new THREE.MeshStandardMaterial({ color: headColor, roughness: 0.4 });
    const detailMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3 });

    // Box Body
    const bodyGeo = new THREE.BoxGeometry(0.6, 0.45, 0.7);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.225;
    body.castShadow = true;
    animalGroup.add(body);

    // Box Head
    const headGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 0.4, 0.25);
    head.castShadow = true;
    animalGroup.add(head);

    // Ears / Comb
    if (type === "chicken") {
      const combGeo = new THREE.BoxGeometry(0.08, 0.16, 0.22);
      const combMat = new THREE.MeshStandardMaterial({ color: 0xef4444 });
      const comb = new THREE.Mesh(combGeo, combMat);
      comb.position.set(0, 0.65, 0.25);
      animalGroup.add(comb);
    } else {
      const earGeo = new THREE.BoxGeometry(0.12, 0.18, 0.12);
      const leftEar = new THREE.Mesh(earGeo, headMat);
      leftEar.position.set(-0.16, 0.65, 0.25);
      const rightEar = new THREE.Mesh(earGeo, headMat);
      rightEar.position.set(0.16, 0.65, 0.25);
      animalGroup.add(leftEar, rightEar);
    }

    // Snout / Beak
    const snoutGeo = new THREE.BoxGeometry(0.15, 0.12, 0.18);
    const snoutMat = new THREE.MeshStandardMaterial({ color: type === "chicken" ? 0xf59e0b : 0xfef08a });
    const snout = new THREE.Mesh(snoutGeo, snoutMat);
    snout.position.set(0, 0.35, 0.48);
    animalGroup.add(snout);

    // Sleeping Eye Slits
    const eyeGeo = new THREE.BoxGeometry(0.1, 0.03, 0.02);
    const leftEye = new THREE.Mesh(eyeGeo, detailMat);
    leftEye.position.set(-0.12, 0.42, 0.46);
    const rightEye = new THREE.Mesh(eyeGeo, detailMat);
    rightEye.position.set(0.12, 0.42, 0.46);
    animalGroup.add(leftEye, rightEye);

    // Floating zZ Sprite (Sleep indicator)
    const zSprite = this.createTagSprite("zZ", "#38bdf8");
    zSprite.position.set(0.2, 1.0, 0);
    zSprite.name = "sleepSprite";
    animalGroup.add(zSprite);

    // Floating ! Sprite (Alert indicator)
    const alertSprite = this.createTagSprite("!", "#ef4444");
    alertSprite.position.set(0, 1.15, 0);
    alertSprite.name = "alertSprite";
    alertSprite.visible = false;
    animalGroup.add(alertSprite);

    return animalGroup;
  }

  private createTagSprite(text: string, color: string): THREE.Sprite {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;
    ctx.font = "Bold 64px 'Segoe UI', sans-serif";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 6;
    ctx.fillText(text, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(0.9, 0.9, 1);
    return sprite;
  }

  public syncMapEggs(mapEggsMap: Map<string, any>) {
    // 1. Clean up old egg meshes
    this.mapEggMeshes.forEach((meshGroup, eggId) => {
      if (!mapEggsMap.has(eggId)) {
        this.scene.remove(meshGroup);
        this.mapEggMeshes.delete(eggId);
      }
    });

    // 2. Clean up old guard animal meshes
    this.guardAnimalMeshes.forEach((animalGroup, eggId) => {
      if (!mapEggsMap.has(eggId)) {
        this.scene.remove(animalGroup);
        this.guardAnimalMeshes.delete(eggId);
      }
    });

    // 3. Add or update map eggs & guard animals
    mapEggsMap.forEach((eggData, eggId) => {
      let group = this.mapEggMeshes.get(eggId);
      if (!group) {
        group = this.createEggMesh(eggData.tier, eggData.isGuarded);
        this.scene.add(group);
        this.mapEggMeshes.set(eggId, group);
      }
      group.position.set(eggData.x, 0, eggData.z);

      // Handle Guard Animal
      if (eggData.isGuarded) {
        let animalGroup = this.guardAnimalMeshes.get(eggId);
        if (!animalGroup) {
          animalGroup = this.createGuardAnimalMesh(eggData.guardType || "chicken");
          this.scene.add(animalGroup);
          this.guardAnimalMeshes.set(eggId, animalGroup);
        }

        const gX = typeof eggData.guardX === "number" ? eggData.guardX : eggData.x + 0.8;
        const gZ = typeof eggData.guardZ === "number" ? eggData.guardZ : eggData.z + 0.8;
        animalGroup.position.set(gX, 0, gZ);

        const sleepSprite = animalGroup.getObjectByName("sleepSprite");
        const alertSprite = animalGroup.getObjectByName("alertSprite");

        if (eggData.guardState === "chasing") {
          if (sleepSprite) sleepSprite.visible = false;
          if (alertSprite) alertSprite.visible = true;
          animalGroup.rotation.y += 0.1;
        } else {
          if (sleepSprite) sleepSprite.visible = true;
          if (alertSprite) alertSprite.visible = false;
        }
      }
    });
  }

  public update(dt: number) {
    this.animTimer += dt;

    if (this.rainbowTexture) {
      this.rainbowTexture.offset.x += dt * 0.2;
    }

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
