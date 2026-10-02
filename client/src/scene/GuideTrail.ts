import * as THREE from "three";
import { GAME_CONFIG } from "../config";

export class GuideTrail {
  private scene: THREE.Scene;
  private arrowGroup: THREE.Group;
  private arrows: THREE.Mesh[] = [];
  private numArrows = 7;
  private animTime = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.arrowGroup = new THREE.Group();
    this.scene.add(this.arrowGroup);

    // Create 3D Arrow Geometry (Cone + Box)
    const arrowMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < this.numArrows; i++) {
      const singleArrow = new THREE.Group();

      const stemGeo = new THREE.BoxGeometry(0.25, 0.05, 0.4);
      const stem = new THREE.Mesh(stemGeo, arrowMat);
      stem.position.z = -0.2;

      const headGeo = new THREE.ConeGeometry(0.35, 0.5, 3);
      headGeo.rotateX(Math.PI / 2);
      const head = new THREE.Mesh(headGeo, arrowMat);
      head.position.z = 0.25;

      singleArrow.add(stem, head);
      singleArrow.position.y = 0.15;

      const meshWrapper = singleArrow as unknown as THREE.Mesh;
      this.arrows.push(meshWrapper);
      this.arrowGroup.add(singleArrow);
    }
  }

  public update(
    dt: number,
    localPlayerPos?: { x: number; z: number },
    targetPos?: { x: number; z: number } | null
  ) {
    if (!localPlayerPos || !targetPos) {
      this.arrowGroup.visible = false;
      return;
    }

    this.arrowGroup.visible = true;
    this.animTime += dt * 4;

    const startX = localPlayerPos.x;
    const startZ = localPlayerPos.z;
    const endX = targetPos.x;
    const endZ = targetPos.z;

    const dx = endX - startX;
    const dz = endZ - startZ;
    const dist = Math.hypot(dx, dz);

    if (dist < 1.5) {
      this.arrowGroup.visible = false;
      return;
    }

    const angle = Math.atan2(dx, dz);

    for (let i = 0; i < this.numArrows; i++) {
      const arrow = this.arrows[i];
      const fraction = (i + 1) / (this.numArrows + 1);

      const bounceOffset = Math.sin(this.animTime - i * 0.4) * 0.12;

      const posX = startX + dx * fraction;
      const posZ = startZ + dz * fraction;

      arrow.position.set(posX, 0.15 + Math.max(0, bounceOffset), posZ);
      arrow.rotation.y = angle;
    }
  }
}
