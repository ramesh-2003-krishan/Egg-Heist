import * as THREE from "three";
import { EGG_TIERS } from "../config";

export class Avatar {
  public group: THREE.Group;
  public isLocal: boolean;
  public id: string;
  public speed: number = 10;
  public speedStat: number = 1;
  public carriedEggTier: string = "";
  public equippedDivineTrail: boolean = false;
  
  private torso: THREE.Mesh;
  private head: THREE.Mesh;
  private leftArm: THREE.Mesh;
  private rightArm: THREE.Mesh;
  private leftLeg: THREE.Mesh;
  private rightLeg: THREE.Mesh;
  private carriedEggGroup: THREE.Group | null = null;
  private trailParticles: THREE.Points | null = null;
  private trailPositions: Float32Array;
  private trailColors: Float32Array;
  private particleIndex: number = 0;
  
  private targetPosition: THREE.Vector3;
  private targetRotationY: number = 0;
  private animTimer: number = 0;
  private isMoving: boolean = false;

  constructor(id: string, name: string, isLocal: boolean = false, skinColorHex: number = 0x3b82f6) {
    this.id = id;
    this.isLocal = isLocal;
    this.group = new THREE.Group();

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
    this.group.add(this.torso);

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

    // Name Tag
    const nameSprite = this.createNameTagSprite(name, isLocal);
    nameSprite.position.set(0, 3.0, 0);
    this.group.add(nameSprite);

    // 3D Divine Rainbow Particle Trail Buffer
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
      this.torso.remove(this.carriedEggGroup);
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

      this.carriedEggGroup.position.set(0, 0.1, 0.55);
      this.torso.add(this.carriedEggGroup);

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

        // Rainbow Colors HSL
        const hue = (Date.now() % 2000) / 2000;
        const color = new THREE.Color().setHSL(hue, 1.0, 0.5);
        colors[idx] = color.r;
        colors[idx + 1] = color.g;
        colors[idx + 2] = color.b;

        this.trailParticles.geometry.attributes.position.needsUpdate = true;
        this.trailParticles.geometry.attributes.color.needsUpdate = true;
      }
    }

    // Limb Animations
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
    } else {
      if (!this.carriedEggTier) {
        this.leftArm.rotation.x *= 0.8;
        this.rightArm.rotation.x *= 0.8;
      }
      this.leftLeg.rotation.x *= 0.8;
      this.rightLeg.rotation.x *= 0.8;
      this.animTimer = 0;
    }
  }

  private createNameTagSprite(name: string, isLocal: boolean): THREE.Sprite {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    ctx.roundRect(8, 8, 240, 48, 12);
    ctx.fill();

    ctx.font = "Bold 24px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = isLocal ? "#60a5fa" : "#ffffff";
    ctx.fillText(name, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(2.4, 0.6, 1);
    return sprite;
  }
}
