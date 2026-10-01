import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import { EGG_TIERS } from "../config";
import { BLOXITY_STATIC_CDN, getSkinTextureUrl, getUser } from "../bloxity";

// Module-level GLB cache to prevent duplicate fetch requests across avatars
let cachedGlbScene: THREE.Object3D | null = null;
let glbLoadPromise: Promise<THREE.Object3D> | null = null;

function getOrLoadPlayerGlb(loader: GLTFLoader): Promise<THREE.Object3D> {
  if (cachedGlbScene) {
    return Promise.resolve(cachedGlbScene);
  }
  if (glbLoadPromise) {
    return glbLoadPromise;
  }

  const playerGlbUrl = `${BLOXITY_STATIC_CDN}/player.glb`;
  glbLoadPromise = new Promise((resolve, reject) => {
    loader.load(
      playerGlbUrl,
      (gltf) => {
        cachedGlbScene = gltf.scene;
        resolve(cachedGlbScene);
      },
      undefined,
      (err) => {
        glbLoadPromise = null;
        reject(err);
      }
    );
  });
  return glbLoadPromise;
}

export class Avatar {
  public group: THREE.Group;
  public isLocal: boolean;
  public id: string;
  public speed: number = 10;
  public speedStat: number = 1;
  public carriedEggTier: string = "";
  public equippedDivineTrail: boolean = false;

  // Bloxity Cosmetic Fields
  public skinId: string = "";
  public hatId: string = "";
  public hairId: string = "";
  public faceId: string = "";
  public shirtId: string = "";
  public pantsId: string = "";
  public maskId: string = "";

  // Mesh & Skeleton Containers
  private boxAvatarGroup: THREE.Group;
  private playerGlbScene: THREE.Group | null = null;
  private neck1Bone: THREE.Object3D | null = null;
  private isGlbLoaded: boolean = false;

  private torso: THREE.Mesh;
  private head: THREE.Mesh;
  private leftArm: THREE.Mesh;
  private rightArm: THREE.Mesh;
  private leftLeg: THREE.Mesh;
  private rightLeg: THREE.Mesh;
  private carriedEggGroup: THREE.Group | null = null;
  private nameSprite: THREE.Sprite | null = null;
  private nameString: string = "";

  private trailParticles: THREE.Points | null = null;
  private trailPositions: Float32Array;
  private trailColors: Float32Array;
  private particleIndex: number = 0;

  private hatMesh: THREE.Object3D | null = null;
  private hairMesh: THREE.Object3D | null = null;
  private maskMesh: THREE.Object3D | null = null;

  private objLoader: OBJLoader;
  private gltfLoader: GLTFLoader;
  private textureLoader: THREE.TextureLoader;

  private targetPosition: THREE.Vector3;
  private targetRotationY: number = 0;
  private animTimer: number = 0;
  private isMoving: boolean = false;
  private currentSkinTexture: THREE.Texture | null = null;

  constructor(id: string, name: string, isLocal: boolean = false, skinColorHex: number = 0x3b82f6) {
    this.id = id;
    this.isLocal = isLocal;
    this.nameString = name;
    this.group = new THREE.Group();

    this.objLoader = new OBJLoader();
    this.gltfLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();

    // Box-based Fallback Avatar Container
    this.boxAvatarGroup = new THREE.Group();
    this.group.add(this.boxAvatarGroup);

    const shirtColor = isLocal ? 0x1d4ed8 : 0x10b981;
    const pantsColor = 0x1f2937;
    const skinColor = 0xfde047;

    const shirtMat = new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.4 });
    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.3 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: pantsColor, roughness: 0.5 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.9, 1.1, 0.5);
    this.torso = new THREE.Mesh(torsoGeo, shirtMat);
    this.torso.position.y = 1.15;
    this.torso.castShadow = true;
    this.torso.receiveShadow = true;
    this.boxAvatarGroup.add(this.torso);

    // Head
    const headGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
    this.head = new THREE.Mesh(headGeo, skinMat);
    this.head.position.y = 0.9;
    this.head.castShadow = true;
    this.torso.add(this.head);

    // Eyes
    const eyeGeo = new THREE.BoxGeometry(0.12, 0.12, 0.05);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.18, 0.08, 0.36);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.18, 0.08, 0.36);
    this.head.add(leftEye, rightEye);

    // Arms & Legs
    const armGeo = new THREE.BoxGeometry(0.38, 1.0, 0.38);
    armGeo.translate(0, -0.4, 0);
    this.leftArm = new THREE.Mesh(armGeo, skinMat);
    this.leftArm.position.set(-0.68, 0.45, 0);
    this.leftArm.castShadow = true;
    this.torso.add(this.leftArm);

    this.rightArm = new THREE.Mesh(armGeo, skinMat);
    this.rightArm.position.set(0.68, 0.45, 0);
    this.rightArm.castShadow = true;
    this.torso.add(this.rightArm);

    const legGeo = new THREE.BoxGeometry(0.42, 1.0, 0.42);
    legGeo.translate(0, -0.45, 0);
    this.leftLeg = new THREE.Mesh(legGeo, pantsMat);
    this.leftLeg.position.set(-0.24, -0.55, 0);
    this.leftLeg.castShadow = true;
    this.torso.add(this.leftLeg);

    this.rightLeg = new THREE.Mesh(legGeo, pantsMat);
    this.rightLeg.position.set(0.24, -0.55, 0);
    this.rightLeg.castShadow = true;
    this.torso.add(this.rightLeg);

    // Floating Name Tag
    this.updateNameTag();

    // Divine Rainbow Particle Trail Buffer
    const count = 40;
    this.trailPositions = new Float32Array(count * 3);
    this.trailColors = new Float32Array(count * 3);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute("position", new THREE.BufferAttribute(this.trailPositions, 3));
    trailGeo.setAttribute("color", new THREE.BufferAttribute(this.trailColors, 3));

    const trailMat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    this.trailParticles = new THREE.Points(trailGeo, trailMat);

    this.targetPosition = new THREE.Vector3();

    // Load Bloxity player.glb Character Mesh
    this.loadBloxityPlayerGlb();
  }

  private loadBloxityPlayerGlb() {
    getOrLoadPlayerGlb(this.gltfLoader)
      .then((baseScene) => {
        // Clone model per player using SkeletonUtils.clone so skinned meshes work correctly
        const clonedScene = SkeletonUtils.clone(baseScene) as THREE.Group;
        this.playerGlbScene = clonedScene;
        this.playerGlbScene.scale.set(1.1, 1.1, 1.1);
        this.playerGlbScene.position.set(0, 0, 0);

        // Find Neck1 bone and setup shadows
        this.neck1Bone = null;
        this.playerGlbScene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
          if (
            !this.neck1Bone &&
            (child.name === "Neck1" || child.name === "neck1" || child.name === "Head" || child.name === "head")
          ) {
            this.neck1Bone = child;
          }
        });

        this.group.add(this.playerGlbScene);
        this.isGlbLoaded = true;

        const isGuest = this.checkIsGuest();
        if (isGuest) {
          this.boxAvatarGroup.visible = true;
          this.playerGlbScene.visible = false;
        } else {
          this.boxAvatarGroup.visible = false;
          this.playerGlbScene.visible = true;
        }

        console.log(`✅ [Bloxity] Successfully attached player.glb model (ID: ${this.id}, Guest: ${isGuest})`);

        if (this.currentSkinTexture) {
          this.applyTextureToGlb(this.currentSkinTexture);
        } else {
          this.applyBloxitySkinTexture();
        }
        this.applyBloxityAccessories();
      })
      .catch((err) => {
        console.warn("⚠️ [Bloxity] Failed to load player.glb, falling back to box avatar:", err);
        this.boxAvatarGroup.visible = true;
        this.isGlbLoaded = false;
      });
  }

  public checkIsGuest(): boolean {
    if (this.isLocal) {
      const user = getUser();
      if (!user) return true;
    }
    const hasAnyCosmetic =
      (this.skinId && this.skinId !== "-1" && this.skinId !== "0") ||
      (this.hatId && this.hatId !== "-1") ||
      (this.hairId && this.hairId !== "-1") ||
      (this.maskId && this.maskId !== "-1") ||
      (this.shirtId && this.shirtId !== "-1") ||
      (this.pantsId && this.pantsId !== "-1") ||
      (this.faceId && this.faceId !== "-1");

    return !hasAnyCosmetic;
  }

  public setBloxityCosmetics(cosmetics: {
    skinId?: string;
    hatId?: string;
    hairId?: string;
    faceId?: string;
    shirtId?: string;
    pantsId?: string;
    maskId?: string;
  }) {
    let changed = false;

    if (cosmetics.skinId !== undefined && cosmetics.skinId !== this.skinId) {
      this.skinId = cosmetics.skinId;
      changed = true;
    }
    if (cosmetics.hatId !== undefined && cosmetics.hatId !== this.hatId) {
      this.hatId = cosmetics.hatId;
      changed = true;
    }
    if (cosmetics.hairId !== undefined && cosmetics.hairId !== this.hairId) {
      this.hairId = cosmetics.hairId;
      changed = true;
    }
    if (cosmetics.faceId !== undefined && cosmetics.faceId !== this.faceId) {
      this.faceId = cosmetics.faceId;
      changed = true;
    }
    if (cosmetics.shirtId !== undefined && cosmetics.shirtId !== this.shirtId) {
      this.shirtId = cosmetics.shirtId;
      changed = true;
    }
    if (cosmetics.pantsId !== undefined && cosmetics.pantsId !== this.pantsId) {
      this.pantsId = cosmetics.pantsId;
      changed = true;
    }
    if (cosmetics.maskId !== undefined && cosmetics.maskId !== this.maskId) {
      this.maskId = cosmetics.maskId;
      changed = true;
    }

    if (this.isGlbLoaded && this.playerGlbScene) {
      const isGuest = this.checkIsGuest();
      this.boxAvatarGroup.visible = isGuest;
      this.playerGlbScene.visible = !isGuest;
    }

    this.updateNameTag();

    if (changed) {
      this.applyBloxitySkinTexture();
      this.applyBloxityAccessories();
    }
  }

  private getRemoteSkinTextureUrl(): string {
    const isValid = (id?: string) =>
      Boolean(id && id !== "-1" && id !== "undefined" && id !== "null" && id.trim() !== "");

    const sId = isValid(this.skinId) ? this.skinId : "0";
    const queryParts: string[] = [];
    if (isValid(this.pantsId)) queryParts.push(`_pn${this.pantsId}`);
    if (isValid(this.shirtId)) queryParts.push(`_sh${this.shirtId}`);
    if (isValid(this.faceId)) queryParts.push(`_fc${this.faceId}`);

    return `https://api.bloxity.io/v1/avatar/skin-texture/s${sId}${queryParts.join("")}.png`;
  }

  public applyBloxitySkinTexture() {
    let textureUrl = "";
    if (this.isLocal) {
      textureUrl = getSkinTextureUrl() || "";
    }

    if (!textureUrl) {
      textureUrl = this.getRemoteSkinTextureUrl();
    }

    if (textureUrl) {
      this.textureLoader.load(
        textureUrl,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          this.currentSkinTexture = texture;

          // Apply to Box Fallback Avatar
          const customMat = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.3,
          });
          this.torso.material = customMat;
          this.head.material = customMat;

          // Apply to GLTF player.glb Avatar
          if (this.playerGlbScene) {
            this.applyTextureToGlb(texture);
          }
        },
        undefined,
        (err) => {
          console.warn("⚠️ [Bloxity] Failed to load skin texture, keeping default look:", err);
        }
      );
    }
  }

  private applyTextureToGlb(texture: THREE.Texture) {
    if (!this.playerGlbScene) return;

    this.playerGlbScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.3,
        });
      }
    });
  }

  private applyBloxityAccessories() {
    this.loadAndAttachAccessory(this.hatId, "hat");
    this.loadAndAttachAccessory(this.hairId, "hair");
    this.loadAndAttachAccessory(this.maskId, "mask");
  }

  private loadAndAttachAccessory(id: string, slot: "hat" | "hair" | "mask") {
    const parentContainer =
      this.neck1Bone || (this.isGlbLoaded && this.playerGlbScene ? this.playerGlbScene : this.head);

    if (slot === "hat" && this.hatMesh) {
      parentContainer.remove(this.hatMesh);
      this.hatMesh = null;
    } else if (slot === "hair" && this.hairMesh) {
      parentContainer.remove(this.hairMesh);
      this.hairMesh = null;
    } else if (slot === "mask" && this.maskMesh) {
      parentContainer.remove(this.maskMesh);
      this.maskMesh = null;
    }

    const isValidId = Boolean(
      id && id !== "-1" && id !== "undefined" && id !== "null" && id.trim() !== ""
    );

    if (!isValidId) return;

    const objUrl = `${BLOXITY_STATIC_CDN}/items/hats/${id}.obj`;
    const texUrl = `${BLOXITY_STATIC_CDN}/textures/hats/${id}.png`;

    this.textureLoader.load(
      texUrl,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const hatMat = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.4 });

        this.objLoader.load(
          objUrl,
          (obj) => {
            obj.traverse((child) => {
              if ((child as THREE.Mesh).isMesh) {
                (child as THREE.Mesh).material = hatMat;
                child.castShadow = true;
              }
            });
            obj.position.set(0, 0.8, 0);
            obj.scale.set(0.25, 0.25, 0.25);

            if (slot === "hat") this.hatMesh = obj;
            else if (slot === "hair") this.hairMesh = obj;
            else if (slot === "mask") this.maskMesh = obj;

            parentContainer.add(obj);
          },
          undefined,
          (err) => {
            console.warn(`⚠️ [Bloxity] Failed to load ${slot} OBJ model (${id}):`, err);
          }
        );
      },
      undefined,
      (err) => {
        console.warn(`⚠️ [Bloxity] Failed to load ${slot} texture (${id}):`, err);
      }
    );
  }

  public setEquippedDivineTrail(equipped: boolean) {
    if (this.equippedDivineTrail === equipped) return;
    this.equippedDivineTrail = equipped;

    if (equipped && this.trailParticles && !this.group.children.includes(this.trailParticles)) {
      this.group.add(this.trailParticles);
    } else if (!equipped && this.trailParticles && this.group.children.includes(this.trailParticles)) {
      this.group.remove(this.trailParticles);
    }
  }

  public setCarriedEgg(tier: string) {
    if (this.carriedEggTier === tier) return;
    this.carriedEggTier = tier;

    if (this.carriedEggGroup) {
      this.group.remove(this.carriedEggGroup);
      this.carriedEggGroup = null;
    }

    if (tier && EGG_TIERS[tier]) {
      this.carriedEggGroup = new THREE.Group();
      const sphereGeo = new THREE.SphereGeometry(0.38, 20, 20);
      sphereGeo.scale(1, 1.35, 1);

      const mat = new THREE.MeshStandardMaterial({
        color: EGG_TIERS[tier].colorHex,
        roughness: 0.3,
        metalness: 0.2,
      });

      const eggMesh = new THREE.Mesh(sphereGeo, mat);
      eggMesh.castShadow = true;
      this.carriedEggGroup.add(eggMesh);

      this.carriedEggGroup.position.set(0, 1.25, 0.55);
      this.group.add(this.carriedEggGroup);

      this.leftArm.rotation.x = -Math.PI / 3;
      this.rightArm.rotation.x = -Math.PI / 3;
      this.leftArm.rotation.z = Math.PI / 12;
      this.rightArm.rotation.z = -Math.PI / 12;
    }
  }

  public setPosition(x: number, y: number, z: number) {
    const newPos = new THREE.Vector3(x, y, z);
    if (this.group.position.lengthSq() === 0) {
      this.group.position.copy(newPos);
      this.targetPosition.copy(newPos);
    } else {
      this.isMoving = this.group.position.distanceTo(newPos) > 0.05;
      this.targetPosition.copy(newPos);
    }
  }

  public setRotationY(rotY: number) {
    this.targetRotationY = rotY;
  }

  public update(dt: number) {
    const lerpFactor = this.isLocal ? 0.3 : 0.2;
    this.group.position.lerp(this.targetPosition, lerpFactor);

    let diff = this.targetRotationY - this.group.rotation.y;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    this.group.rotation.y += diff * 0.25;

    // Divine Rainbow Particle Trail Update
    if (this.equippedDivineTrail && this.trailParticles) {
      const positions = this.trailParticles.geometry.attributes.position.array as Float32Array;
      const colors = this.trailParticles.geometry.attributes.color.array as Float32Array;

      if (this.isMoving) {
        this.particleIndex = (this.particleIndex + 1) % 40;
        const idx = this.particleIndex * 3;
        positions[idx] = (Math.random() - 0.5) * 0.6;
        positions[idx + 1] = 0.2 + Math.random() * 0.8;
        positions[idx + 2] = -0.6 - Math.random() * 0.6;

        const hue = (Date.now() % 2000) / 2000;
        const color = new THREE.Color().setHSL(hue, 1.0, 0.5);
        colors[idx] = color.r;
        colors[idx + 1] = color.g;
        colors[idx + 2] = color.b;

        this.trailParticles.geometry.attributes.position.needsUpdate = true;
        this.trailParticles.geometry.attributes.color.needsUpdate = true;
      }
    }

    // Walking Animation Update (Procedural movement & character tilt)
    if (this.isMoving) {
      const animSpeed = 10 * (this.speed / 10);
      this.animTimer += dt * Math.min(30, animSpeed);
      const angle = Math.sin(this.animTimer) * 0.6;

      if (!this.carriedEggTier) {
        this.leftArm.rotation.x = angle;
        this.rightArm.rotation.x = -angle;
      } else {
        this.leftArm.rotation.x = -Math.PI / 3 + Math.sin(this.animTimer) * 0.1;
        this.rightArm.rotation.x = -Math.PI / 3 - Math.sin(this.animTimer) * 0.1;
      }

      this.leftLeg.rotation.x = -angle;
      this.rightLeg.rotation.x = angle;

      if (this.playerGlbScene) {
        this.playerGlbScene.rotation.z = Math.sin(this.animTimer * 0.5) * 0.05;
        this.playerGlbScene.position.y = Math.abs(Math.sin(this.animTimer * 2)) * 0.08;
      }
    } else {
      if (!this.carriedEggTier) {
        this.leftArm.rotation.x *= 0.8;
        this.rightArm.rotation.x *= 0.8;
      }
      this.leftLeg.rotation.x *= 0.8;
      this.rightLeg.rotation.x *= 0.8;
      if (this.playerGlbScene) {
        this.playerGlbScene.rotation.z *= 0.8;
        this.playerGlbScene.position.y *= 0.8;
      }
      this.animTimer = 0;
    }
  }

  private updateNameTag() {
    if (this.nameSprite) {
      this.group.remove(this.nameSprite);
      this.nameSprite = null;
    }
    this.nameSprite = this.createNameTagSprite(this.nameString, this.isLocal);
    this.nameSprite.position.set(0, 3.2, 0);
    this.group.add(this.nameSprite);
  }

  private createNameTagSprite(name: string, isLocal: boolean): THREE.Sprite {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.roundRect(8, 8, 240, 48, 12);
    ctx.fill();

    const isGuest = this.checkIsGuest();
    const displayName = isGuest && !name.includes("(Guest)") ? `${name} (Guest)` : name;

    ctx.font = "Bold 22px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = isLocal ? "#60a5fa" : isGuest ? "#9ca3af" : "#ffffff";
    ctx.fillText(displayName, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(2.4, 0.6, 1);
    return sprite;
  }
}
