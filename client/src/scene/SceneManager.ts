import * as THREE from "three";
import { Avatar } from "./Avatar";

export class SceneManager {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private avatars: Map<string, Avatar> = new Map();
  private localAvatarId: string | null = null;

  constructor(container: HTMLElement) {
    // 1. Create Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f172a); // Dark slate blue background
    this.scene.fog = new THREE.FogExp2(0x0f172a, 0.012);

    // 2. Camera Setup
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 10, 15);

    // 3. Renderer Setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // 4. Environment: Ground Plane & Grid
    this.setupEnvironment();

    // 5. Lighting Setup
    this.setupLighting();

    // 6. Window Resize Handler
    window.addEventListener("resize", () => this.onWindowResize());
  }

  private setupEnvironment() {
    // Ground plane (100x100)
    const groundGeo = new THREE.PlaneGeometry(100, 100);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Dark grey-blue ground
      roughness: 0.8,
      metalness: 0.2,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Stylish 3D Grid helper overlay
    const grid = new THREE.GridHelper(100, 50, 0x3b82f6, 0x334155);
    grid.position.y = 0.01;
    this.scene.add(grid);

    // Outer boundary walls (Visual bounds indicator)
    const wallMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.15 });
    const wallGeo = new THREE.BoxGeometry(100, 4, 100);
    const boundsBox = new THREE.Mesh(wallGeo, wallMat);
    boundsBox.position.y = 2;
    this.scene.add(boundsBox);
  }

  private setupLighting() {
    // Ambient light
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);

    // Directional Sun Light
    const sunLight = new THREE.DirectionalLight(0xfffaed, 1.2);
    sunLight.position.set(30, 45, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 150;
    
    const d = 40;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    
    this.scene.add(sunLight);

    // Fill Light
    const fillLight = new THREE.DirectionalLight(0x60a5fa, 0.4);
    fillLight.position.set(-20, 20, -20);
    this.scene.add(fillLight);
  }

  public setLocalAvatarId(id: string) {
    this.localAvatarId = id;
  }

  public addAvatar(id: string, name: string, isLocal: boolean): Avatar {
    const skinColors = [0xef4444, 0x10b981, 0x8b5cf6, 0xf59e0b, 0xec4899, 0x06b6d4];
    const colorHex = skinColors[Math.abs(this.hashCode(id)) % skinColors.length];
    
    const avatar = new Avatar(id, name, isLocal, colorHex);
    this.avatars.set(id, avatar);
    this.scene.add(avatar.group);

    if (isLocal) {
      this.localAvatarId = id;
    }

    return avatar;
  }

  public removeAvatar(id: string) {
    const avatar = this.avatars.get(id);
    if (avatar) {
      this.scene.remove(avatar.group);
      this.avatars.delete(id);
    }
  }

  public getAvatar(id: string): Avatar | undefined {
    return this.avatars.get(id);
  }

  public getAvatarIds(): string[] {
    return Array.from(this.avatars.keys());
  }

  public getAvatarCount(): number {
    return this.avatars.size;
  }

  public updateAvatarState(id: string, x: number, y: number, z: number, rotationY: number) {
    const avatar = this.avatars.get(id);
    if (avatar) {
      avatar.setPosition(x, y, z);
      avatar.setRotationY(rotationY);
    }
  }

  public update(dt: number) {
    // Update all avatars' limb animations and position lerping
    this.avatars.forEach((avatar) => avatar.update(dt));

    // Third-Person Camera Follow
    if (this.localAvatarId) {
      const localAvatar = this.avatars.get(this.localAvatarId);
      if (localAvatar) {
        const targetCamPos = localAvatar.group.position.clone().add(new THREE.Vector3(0, 7.5, 11));
        const targetLookAt = localAvatar.group.position.clone().add(new THREE.Vector3(0, 1.5, 0));

        this.camera.position.lerp(targetCamPos, 0.1);
        this.camera.lookAt(targetLookAt);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }
}
