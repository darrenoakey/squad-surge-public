// Instanced articulated crowds: each rig part (body, legs, arms) is one InstancedMesh,
// so a whole squad or horde of one kind costs ~5 draw calls regardless of size.
import * as THREE from "three";

export interface RigPartDef {
  name: string;
  /** Geometry modelled with its pivot at the origin. */
  geometry: THREE.BufferGeometry;
  /** Pivot position relative to the character root. */
  pivot: [number, number, number];
}

export interface PartPose {
  rx?: number;
  ry?: number;
  rz?: number;
  tx?: number;
  ty?: number;
  tz?: number;
}

const mRoot = new THREE.Matrix4();
const mPart = new THREE.Matrix4();
const qTmp = new THREE.Quaternion();
const eTmp = new THREE.Euler();
const vTmp = new THREE.Vector3();
const sOne = new THREE.Vector3(1, 1, 1);
const cTmp = new THREE.Color();

export class InstancedRig {
  readonly group = new THREE.Group();
  private readonly meshes: THREE.InstancedMesh[] = [];
  private readonly pivots: THREE.Vector3[] = [];
  private readonly index = new Map<string, number>();
  private count = 0;

  constructor(
    parts: RigPartDef[],
    material: THREE.Material,
    readonly capacity: number,
    castShadow = true,
  ) {
    parts.forEach((p, i) => {
      const mesh = new THREE.InstancedMesh(p.geometry, material, capacity);
      mesh.name = p.name;
      mesh.castShadow = castShadow;
      mesh.receiveShadow = false;
      mesh.count = 0;
      mesh.frustumCulled = false;
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.instanceColor = new THREE.InstancedBufferAttribute(
        new Float32Array(capacity * 3).fill(1),
        3,
      );
      mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
      this.meshes.push(mesh);
      this.pivots.push(new THREE.Vector3(...p.pivot));
      this.index.set(p.name, i);
      this.group.add(mesh);
    });
  }

  begin(): void {
    this.count = 0;
  }

  get size(): number {
    return this.count;
  }

  /**
   * Add one character. `root` is the world transform; `poses` keyed by part name.
   * `tint` multiplies vertex colours (values >1 brighten for hit flashes).
   */
  push(root: THREE.Matrix4, poses: Partial<Record<string, PartPose>>, tint = 1): void {
    if (this.count >= this.capacity) return;
    const i = this.count++;
    mRoot.copy(root);
    cTmp.setRGB(tint, tint, tint);
    this.meshes.forEach((mesh, p) => {
      const pose = poses[mesh.name];
      const pivot = this.pivots[p]!;
      if (pose) {
        eTmp.set(pose.rx ?? 0, pose.ry ?? 0, pose.rz ?? 0, "YXZ");
        qTmp.setFromEuler(eTmp);
        vTmp.set(pivot.x + (pose.tx ?? 0), pivot.y + (pose.ty ?? 0), pivot.z + (pose.tz ?? 0));
      } else {
        qTmp.identity();
        vTmp.copy(pivot);
      }
      mPart.compose(vTmp, qTmp, sOne).premultiply(mRoot);
      mesh.setMatrixAt(i, mPart);
      mesh.setColorAt(i, cTmp);
    });
  }

  /** Hide a part entirely (e.g. inactive weapon models) without emitting draw calls. */
  setPartEnabled(name: string, enabled: boolean): void {
    const i = this.index.get(name);
    if (i === undefined) return;
    const mesh = this.meshes[i];
    if (mesh) mesh.userData.disabled = !enabled;
  }

  end(): void {
    for (const mesh of this.meshes) {
      mesh.count = this.count;
      mesh.visible = this.count > 0 && mesh.userData.disabled !== true;
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
  }

  dispose(): void {
    const seen = new Set<THREE.BufferGeometry>();
    for (const mesh of this.meshes) {
      if (!seen.has(mesh.geometry)) {
        seen.add(mesh.geometry);
        mesh.geometry.dispose();
      }
      mesh.dispose();
    }
    this.group.removeFromParent();
  }
}

/** Compose a character root matrix: position, yaw, bank (z roll), pitch and squash scale. */
const rootPos = new THREE.Vector3();
const rootScale = new THREE.Vector3();
const rootEuler = new THREE.Euler();
const rootQuat = new THREE.Quaternion();
export function rootMatrix(
  out: THREE.Matrix4,
  x: number,
  y: number,
  z: number,
  yaw: number,
  pitch: number,
  roll: number,
  sx: number,
  sy: number,
  sz: number,
): THREE.Matrix4 {
  rootEuler.set(pitch, yaw, roll, "YXZ");
  rootQuat.setFromEuler(rootEuler);
  rootPos.set(x, y, z);
  rootScale.set(sx, sy, sz);
  return out.compose(rootPos, rootQuat, rootScale);
}
