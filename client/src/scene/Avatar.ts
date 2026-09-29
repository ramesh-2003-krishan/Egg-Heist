import * as THREE from "three";

export class Avatar {
  public group: THREE.Group;
  public isLocal: boolean;
  public id: string;
  
  private torso: THREE.Mesh;
  private head: THREE.Mesh;
  private leftArm: THREE.Mesh;
  private rightArm: THREE.Mesh;
  private leftLeg: THREE.Mesh;
  private rightLeg: THREE.Mesh;
  
  private targetPosition: THREE.Vector3;
  private targetRotationY: number = 0;
  private animTimer: number = 0;
  private isMoving: boolean = false;

  constructor(id: string, name: string, isLocal: boolean = false, skinColorHex: number = 0x3b82f6) {
    this.id = id;
    this.isLocal = isLocal;
    this.group = new THREE.Group();

    // Primary materials
    const mainColor = isLocal ? 0x3b82f6 : skinColorHex; // Local: Vibrant Blue, Remote: Dynamic/Random
    const shirtColor = isLocal ? 0x1d4ed8 : 0x10b981; // Shirt
    const pantsColor = 0x1f2937; // Dark pants
    const skinColor = 0xfde047; // Roblox yellow skin tone

    const shirtMat = new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.4 });
    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.3 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: pantsColor, roughness: 0.5 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

    // Torso (center pivot at (0, 1.1, 0))
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

    // Eyes (Blocky face features)
    const eyeGeo = new THREE.BoxGeometry(0.12, 0.12, 0.05);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.18, 0.08, 0.36);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.18, 0.08, 0.36);
    this.head.add(leftEye, rightEye);

    // Left Arm
    const armGeo = new THREE.BoxGeometry(0.38, 1.0, 0.38);
    armGeo.translate(0, -0.4, 0); // Pivot at shoulder
    this.leftArm = new THREE.Mesh(armGeo, skinMat);
    this.leftArm.position.set(-0.68, 0.45, 0);
    this.leftArm.castShadow = true;
    this.torso.add(this.leftArm);

    // Right Arm
    this.rightArm = new THREE.Mesh(armGeo, skinMat);
    this.rightArm.position.set(0.68, 0.45, 0);
    this.rightArm.castShadow = true;
    this.torso.add(this.rightArm);

    // Left Leg
    const legGeo = new THREE.BoxGeometry(0.42, 1.0, 0.42);
    legGeo.translate(0, -0.45, 0); // Pivot at hip
    this.leftLeg = new THREE.Mesh(legGeo, pantsMat);
    this.leftLeg.position.set(-0.24, -0.55, 0);
    this.leftLeg.castShadow = true;
    this.torso.add(this.leftLeg);

    // Right Leg
    this.rightLeg = new THREE.Mesh(legGeo, pantsMat);
    this.rightLeg.position.set(0.24, -0.55, 0);
    this.rightLeg.castShadow = true;
    this.torso.add(this.rightLeg);

    // Name Tag Floating Canvas Sprite
    const nameSprite = this.createNameTagSprite(name, isLocal);
    nameSprite.position.set(0, 2.3, 0);
    this.group.add(nameSprite);

    this.targetPosition = new THREE.Vector3();
  }

  public setPosition(x: number, y: number, z: number) {
    const newPos = new THREE.Vector3(x, y, z);
    if (this.group.position.lengthSq() === 0) {
      this.group.position.copy(newPos);
      this.targetPosition.copy(newPos);
    } else {
      // Check if avatar is actively moving for walk cycle animation
      this.isMoving = this.group.position.distanceTo(newPos) > 0.05;
      this.targetPosition.copy(newPos);
    }
  }

  public setRotationY(rotY: number) {
    this.targetRotationY = rotY;
  }

  public update(dt: number) {
    // Interpolate (lerp) position smoothly
    const lerpFactor = this.isLocal ? 0.3 : 0.2;
    this.group.position.lerp(this.targetPosition, lerpFactor);

    // Smoothly rotate toward target rotation angle
    let diff = this.targetRotationY - this.group.rotation.y;
    // Normalize diff to -PI .. PI
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    this.group.rotation.y += diff * 0.25;

    // Roblox walking limb animation
    if (this.isMoving) {
      this.animTimer += dt * 10;
      const angle = Math.sin(this.animTimer) * 0.6;
      this.leftArm.rotation.x = angle;
      this.rightArm.rotation.x = -angle;
      this.leftLeg.rotation.x = -angle;
      this.rightLeg.rotation.x = angle;
    } else {
      // Return limbs to default resting pose smoothly
      this.leftArm.rotation.x *= 0.8;
      this.rightArm.rotation.x *= 0.8;
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
