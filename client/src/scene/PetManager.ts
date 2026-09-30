import * as THREE from "three";
import { EGG_TIERS, GAME_CONFIG } from "../config";

interface PetMeshObject {
  id: string;
  group: THREE.Group;
  baseIndex: number;
}

export class PetManager {
  private scene: THREE.Scene;
  private petMeshes: Map<string, PetMeshObject> = new Map();
  private animTimer: number = 0;
  private rainbowTexture: THREE.CanvasTexture;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.rainbowTexture = this.createRainbowTexture();
  }

  public syncPets(playersMap: Map<string, any>) {
    const activePetIds = new Set<string>();

    playersMap.forEach((player) => {
      if (player.baseIndex >= 0 && player.pets) {
        const basePos = GAME_CONFIG.BASE_POSITIONS[player.baseIndex];
        const petsArray = Array.from(player.pets);

        petsArray.forEach((petData: any, idx: number) => {
          activePetIds.add(petData.id);

          let petObj = this.petMeshes.get(petData.id);
          if (!petObj) {
            const group = this.createPetMesh(petData);
            this.scene.add(group);
            petObj = { id: petData.id, group, baseIndex: player.baseIndex };
            this.petMeshes.set(petData.id, petObj);
          }

          // Arrange pets in a semi-circle on base platform
          const angle = (idx / Math.max(1, petsArray.length)) * Math.PI - Math.PI / 2;
          const radius = 3.2;
          const targetX = basePos.x + Math.sin(angle) * radius;
          const targetZ = basePos.z + GAME_CONFIG.BASE_SIZE.length / 2 - 2 + Math.cos(angle) * 1.5;

          petObj.group.position.set(targetX, 0.4, targetZ);
        });
      }
    });

    // Remove obsolete pet meshes
    this.petMeshes.forEach((petObj, id) => {
      if (!activePetIds.has(id)) {
        this.scene.remove(petObj.group);
        this.petMeshes.delete(id);
      }
    });
  }

  public update(dt: number) {
    this.animTimer += dt;

    if (this.rainbowTexture) {
      this.rainbowTexture.offset.x += dt * 0.3;
    }

    // Hovering/bobbing floating pet animation
    let index = 0;
    this.petMeshes.forEach((petObj) => {
      index++;
      petObj.group.position.y = 0.4 + Math.sin(this.animTimer * 4 + index) * 0.12;
      petObj.group.rotation.y = Math.sin(this.animTimer * 1.5 + index) * 0.2;
    });
  }

  private createPetMesh(petData: any): THREE.Group {
    const group = new THREE.Group();

    // Scale by size
    let scale = 1.0;
    if (petData.size === "small") scale = 0.65;
    if (petData.size === "giant") scale = 1.5;
    group.scale.set(scale, scale, scale);

    // Primary material derived from rarity & mutation
    const tierConfig = EGG_TIERS[petData.rarity] || EGG_TIERS.common;
    let mainMat: THREE.Material;

    if (petData.mutation === "golden") {
      mainMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.15, metalness: 0.85 });
    } else if (petData.mutation === "rainbow") {
      mainMat = new THREE.MeshStandardMaterial({ map: this.rainbowTexture, roughness: 0.2, metalness: 0.3 });
    } else if (petData.mutation === "shiny") {
      mainMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.1, metalness: 0.9 });
    } else {
      mainMat = new THREE.MeshStandardMaterial({ color: tierConfig.colorHex, roughness: 0.4 });
    }

    // Cute Roblox Blocky Pet Body (0.8 x 0.8 x 0.8)
    const bodyGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const body = new THREE.Mesh(bodyGeo, mainMat);
    body.castShadow = true;
    group.add(body);

    // Cute Eyes & Face
    const eyeGeo = new THREE.BoxGeometry(0.14, 0.14, 0.05);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.2, 0.12, 0.42);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.2, 0.12, 0.42);
    body.add(leftEye, rightEye);

    // Pet Ears/Horns based on tier
    const earGeo = new THREE.BoxGeometry(0.18, 0.25, 0.18);
    const leftEar = new THREE.Mesh(earGeo, mainMat);
    leftEar.position.set(-0.25, 0.5, 0);
    const rightEar = new THREE.Mesh(earGeo, mainMat);
    rightEar.position.set(0.25, 0.5, 0);
    body.add(leftEar, rightEar);

    // Name Sprite above pet
    const nameSprite = this.createPetNameSprite(petData.name, petData.mutation, tierConfig.color);
    nameSprite.position.set(0, 1.2, 0);
    group.add(nameSprite);

    return group;
  }

  private createPetNameSprite(name: string, mutation: string, colorHex: string): THREE.Sprite {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
    ctx.roundRect(8, 8, 240, 48, 10);
    ctx.fill();

    const titleText = mutation !== "none" ? `${mutation.toUpperCase()} ${name}` : name;
    ctx.font = "Bold 20px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = colorHex;
    ctx.fillText(titleText, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(1.8, 0.45, 1);
    return sprite;
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
