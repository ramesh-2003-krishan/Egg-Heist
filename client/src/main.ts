import * as THREE from "three";
import { SceneManager } from "./scene/SceneManager";
import { InputManager } from "./input/InputManager";
import { NetworkManager } from "./network/NetworkManager";
import "./style.css";

class GameApp {
  private sceneManager: SceneManager;
  private inputManager: InputManager;
  private networkManager: NetworkManager;
  private clock: THREE.Clock;

  constructor() {
    const container = document.getElementById("app");
    if (!container) {
      throw new Error("Target #app element not found in DOM");
    }

    this.sceneManager = new SceneManager(container);
    this.inputManager = new InputManager();
    this.networkManager = new NetworkManager(this.sceneManager);
    this.clock = new THREE.Clock();

    this.init();
  }

  private async init() {
    // 1. Connect to Colyseus Server
    await this.networkManager.connect();

    // 2. Start Animation Render Loop
    this.animate();
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    const dt = this.clock.getDelta();

    // Calculate camera yaw angle for camera-relative movement direction
    const cameraYaw = Math.atan2(
      this.sceneManager.camera.position.x - (this.sceneManager.getAvatar(this.networkManager.localSessionId || "")?.group.position.x || 0),
      this.sceneManager.camera.position.z - (this.sceneManager.getAvatar(this.networkManager.localSessionId || "")?.group.position.z || 0)
    );

    // Read local keyboard input
    const movement = this.inputManager.getMovement(cameraYaw);

    // Send authoritative movement input to Colyseus server
    this.networkManager.sendMoveInput(movement.moveX, movement.moveZ, movement.rotationY);

    // Render 3D Scene and update avatars
    this.sceneManager.update(dt);
  };
}

// Instantiate and start Game App
new GameApp();
