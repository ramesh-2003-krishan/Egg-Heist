import * as THREE from "three";

export class TrapManager {
  private scene: THREE.Scene;
  private trapMeshes: Map<string, THREE.Group> = new Map();
  private chickenMeshes: Map<string, THREE.Group> = new Map();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  public syncTraps(trapsMap: Map<string, any>, localSessionId: string | null) {
    // 1. Remove traps no longer in state
    this.trapMeshes.forEach((mesh, id) => {
      if (!trapsMap.has(id)) {
        this.scene.remove(mesh);
        this.trapMeshes.delete(id);
      }
    });

    // 2. Add/Update traps
    trapsMap.forEach((trap, id) => {
      const isOwner = trap.ownerId === localSessionId;
      let mesh = this.trapMeshes.get(id);

      if (!mesh) {
        mesh = this.createTrapMesh(isOwner);
        this.scene.add(mesh);
        this.trapMeshes.set(id, mesh);
      }
      mesh.position.set(trap.x, 0, trap.z);
      mesh.visible = isOwner; // Only owner sees placed traps until triggered!
    });
  }

  public syncChasingChickens(chickensMap: Map<string, any>) {
    // 1. Remove chickens no longer chasing
    this.chickenMeshes.forEach((mesh, id) => {
      if (!chickensMap.has(id)) {
        this.scene.remove(mesh);
        this.chickenMeshes.delete(id);
      }
    });

    // 2. Add/Update chasing chickens
    chickensMap.forEach((chicken, id) => {
      let mesh = this.chickenMeshes.get(id);
      if (!mesh) {
        mesh = this.createAwakeChickenMesh();
        this.scene.add(mesh);
        this.chickenMeshes.set(id, mesh);
      }
      mesh.position.set(chicken.x, 0, chicken.z);
    });
  }

  private createTrapMesh(isOwner: boolean): THREE.Group {
    const group = new THREE.Group();

    // Metallic Bear Trap Base Ring
    const ringGeo = new THREE.TorusGeometry(0.6, 0.08, 8, 16);
    ringGeo.rotateX(Math.PI / 2);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.9,
      roughness: 0.3,
      transparent: true,
      opacity: isOwner ? 0.75 : 0.0,
    });
    const ring = new THREE.Mesh(ringGeo, metalMat);
    ring.position.y = 0.04;
    group.add(ring);

    // Spiked Jaws
    const teethGeo = new THREE.ConeGeometry(0.12, 0.3, 4);
    const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.5 });
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const tooth = new THREE.Mesh(teethGeo, redMat);
      tooth.position.set(Math.cos(angle) * 0.5, 0.15, Math.sin(angle) * 0.5);
      group.add(tooth);
    }

    return group;
  }

  private createAwakeChickenMesh(): THREE.Group {
    const chickenGroup = new THREE.Group();

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const beakMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3 });
    const combMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.3 });
    const redEyeMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.6, 0.5, 0.7);
    const body = new THREE.Mesh(bodyGeo, whiteMat);
    body.position.y = 0.25;
    body.castShadow = true;
    chickenGroup.add(body);

    // Head
    const headGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const head = new THREE.Mesh(headGeo, whiteMat);
    head.position.set(0, 0.45, 0.25);
    head.castShadow = true;
    chickenGroup.add(head);

    // Beak
    const beakGeo = new THREE.ConeGeometry(0.12, 0.25, 4);
    beakGeo.rotateX(Math.PI / 2);
    const beak = new THREE.Mesh(beakGeo, beakMat);
    beak.position.set(0, 0.4, 0.52);
    chickenGroup.add(beak);

    // Comb
    const combGeo = new THREE.BoxGeometry(0.1, 0.2, 0.25);
    const comb = new THREE.Mesh(combGeo, combMat);
    comb.position.set(0, 0.7, 0.25);
    chickenGroup.add(comb);

    // Angry Red Eyes
    const eyeGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const leftEye = new THREE.Mesh(eyeGeo, redEyeMat);
    leftEye.position.set(-0.12, 0.48, 0.43);
    const rightEye = new THREE.Mesh(eyeGeo, redEyeMat);
    rightEye.position.set(0.12, 0.48, 0.43);
    chickenGroup.add(leftEye, rightEye);

    // Flapping Wings
    const wingGeo = new THREE.BoxGeometry(0.08, 0.3, 0.4);
    const leftWing = new THREE.Mesh(wingGeo, whiteMat);
    leftWing.position.set(-0.35, 0.3, 0);
    leftWing.rotation.z = Math.PI / 6;

    const rightWing = new THREE.Mesh(wingGeo, whiteMat);
    rightWing.position.set(0.35, 0.3, 0);
    rightWing.rotation.z = -Math.PI / 6;

    chickenGroup.add(leftWing, rightWing);

    return chickenGroup;
  }
}
