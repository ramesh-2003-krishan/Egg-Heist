export class InputManager {
  private keys: { [key: string]: boolean } = {};

  constructor() {
    window.addEventListener("keydown", (e) => {
      this.keys[e.code] = true;
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.code] = false;
    });

    // Clear keys when window loses focus
    window.addEventListener("blur", () => {
      this.keys = {};
    });
  }

  public getMovement(cameraYaw: number): { moveX: number; moveZ: number; rotationY: number } {
    let inputForward = 0;
    let inputRight = 0;

    if (this.keys["KeyW"] || this.keys["ArrowUp"]) inputForward += 1;
    if (this.keys["KeyS"] || this.keys["ArrowDown"]) inputForward -= 1;
    if (this.keys["KeyA"] || this.keys["ArrowLeft"]) inputRight -= 1;
    if (this.keys["KeyD"] || this.keys["ArrowRight"]) inputRight += 1;

    if (inputForward === 0 && inputRight === 0) {
      return { moveX: 0, moveZ: 0, rotationY: 0 };
    }

    // Normalize input direction
    const length = Math.hypot(inputForward, inputRight);
    const normForward = inputForward / length;
    const normRight = inputRight / length;

    // Transform by camera yaw angle
    const cos = Math.cos(cameraYaw);
    const sin = Math.sin(cameraYaw);

    // X: right, Z: back (standard 3D coordinate system)
    const worldMoveX = normRight * cos + normForward * sin;
    const worldMoveZ = -normForward * cos + normRight * sin;

    // Calculate facing rotation angle in world space
    const targetRotationY = Math.atan2(worldMoveX, worldMoveZ);

    return {
      moveX: worldMoveX,
      moveZ: worldMoveZ,
      rotationY: targetRotationY,
    };
  }
}
