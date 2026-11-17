// Procedural modelling kit: coloured primitives merged into single vertex-coloured
// geometries so whole props / characters cost one draw call each.
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const tmpColor = new THREE.Color();
const tmpMatrix = new THREE.Matrix4();
const tmpQuat = new THREE.Quaternion();
const tmpEuler = new THREE.Euler();
const tmpPos = new THREE.Vector3();
const tmpScale = new THREE.Vector3();

export interface Place {
  x?: number;
  y?: number;
  z?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  sx?: number;
  sy?: number;
  sz?: number;
}

function placeMatrix(p: Place): THREE.Matrix4 {
  tmpEuler.set(p.rx ?? 0, p.ry ?? 0, p.rz ?? 0, "YXZ");
  tmpQuat.setFromEuler(tmpEuler);
  tmpPos.set(p.x ?? 0, p.y ?? 0, p.z ?? 0);
  tmpScale.set(p.sx ?? 1, p.sy ?? 1, p.sz ?? 1);
  return tmpMatrix.compose(tmpPos, tmpQuat, tmpScale);
}

/** Normalise a geometry to non-indexed position/normal/color only. */
function normalise(geo: THREE.BufferGeometry, color: number, flat: boolean): THREE.BufferGeometry {
  let g = geo.index ? geo.toNonIndexed() : geo;
  if (g !== geo) geo.dispose();
  for (const name of Object.keys(g.attributes)) {
    if (name !== "position" && name !== "normal") g.deleteAttribute(name);
  }
  if (flat || !g.getAttribute("normal")) {
    g.deleteAttribute("normal");
    g.computeVertexNormals();
  }
  const count = g.getAttribute("position").count;
  const colors = new Float32Array(count * 3);
  tmpColor.setHex(color);
  for (let i = 0; i < count; i++) {
    colors[i * 3] = tmpColor.r;
    colors[i * 3 + 1] = tmpColor.g;
    colors[i * 3 + 2] = tmpColor.b;
  }
  g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  g = g.clearGroups() ?? g;
  return g;
}

/** Swap two vertices of every triangle (non-indexed) after a mirroring transform. */
function flipWinding(g: THREE.BufferGeometry): void {
  for (const name of Object.keys(g.attributes)) {
    const a = g.getAttribute(name) as THREE.BufferAttribute;
    const n = a.itemSize;
    const arr = a.array;
    for (let t = 0; t + 2 < a.count; t += 3) {
      for (let k = 0; k < n; k++) {
        const i1 = (t + 1) * n + k;
        const i2 = (t + 2) * n + k;
        const tmp = arr[i1]!;
        arr[i1] = arr[i2]!;
        arr[i2] = tmp;
      }
    }
    a.needsUpdate = true;
  }
}

export class Kit {
  private parts: THREE.BufferGeometry[] = [];

  add(geo: THREE.BufferGeometry, color: number, p: Place = {}, flat = false): this {
    const g = normalise(geo, color, flat);
    g.applyMatrix4(placeMatrix(p));
    this.parts.push(g);
    return this;
  }

  /** Rounded box sized w×h×d centred at placement. */
  box(w: number, h: number, d: number, color: number, p: Place = {}, radius = 0.06): this {
    const r = Math.min(radius, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001);
    const geo = r > 0.005 ? new RoundedBoxGeometry(w, h, d, 2, r) : new THREE.BoxGeometry(w, h, d);
    return this.add(geo, color, p);
  }

  sharpBox(w: number, h: number, d: number, color: number, p: Place = {}): this {
    return this.add(new THREE.BoxGeometry(w, h, d), color, p);
  }

  sphere(r: number, color: number, p: Place = {}, seg = 12): this {
    return this.add(new THREE.SphereGeometry(r, seg, Math.max(6, Math.round(seg * 0.7))), color, p);
  }

  capsule(r: number, len: number, color: number, p: Place = {}, seg = 8): this {
    return this.add(new THREE.CapsuleGeometry(r, len, 3, seg), color, p);
  }

  cyl(rTop: number, rBot: number, h: number, color: number, p: Place = {}, seg = 12): this {
    return this.add(new THREE.CylinderGeometry(rTop, rBot, h, seg), color, p);
  }

  cone(r: number, h: number, color: number, p: Place = {}, seg = 10): this {
    return this.add(new THREE.ConeGeometry(r, h, seg), color, p);
  }

  torus(r: number, tube: number, color: number, p: Place = {}, seg = 16): this {
    return this.add(new THREE.TorusGeometry(r, tube, 8, seg), color, p);
  }

  rock(r: number, color: number, p: Place = {}, detail = 0): this {
    return this.add(new THREE.IcosahedronGeometry(r, detail), color, p, true);
  }

  /** Capsule limb spanning two points. */
  limb(
    a: [number, number, number],
    b: [number, number, number],
    r: number,
    color: number,
    seg = 8,
  ): this {
    const va = new THREE.Vector3(...a);
    const vb = new THREE.Vector3(...b);
    const dir = vb.clone().sub(va);
    const len = dir.length();
    const geo = new THREE.CapsuleGeometry(r, Math.max(0.001, len), 3, seg);
    const g = normalise(geo, color, false);
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.normalize(),
    );
    const m = new THREE.Matrix4().compose(
      va.add(vb).multiplyScalar(0.5),
      q,
      new THREE.Vector3(1, 1, 1),
    );
    g.applyMatrix4(m);
    this.parts.push(g);
    return this;
  }

  /** Merge another kit's output in with a placement. */
  kit(other: Kit, p: Place = {}): this {
    const m = placeMatrix(p).clone();
    const mirrored = m.determinant() < 0;
    for (const g of other.parts) {
      const c = g.clone();
      c.applyMatrix4(m);
      if (mirrored) flipWinding(c);
      this.parts.push(c);
    }
    return this;
  }

  dispose(): void {
    for (const g of this.parts) g.dispose();
    this.parts = [];
  }

  get empty(): boolean {
    return this.parts.length === 0;
  }

  build(): THREE.BufferGeometry {
    if (this.parts.length === 0) return new THREE.BufferGeometry();
    const merged = mergeGeometries(this.parts, false);
    for (const g of this.parts) g.dispose();
    this.parts = [];
    if (!merged) throw new Error("Kit.build: geometry merge failed (attribute mismatch)");
    merged.computeBoundingSphere();
    return merged;
  }
}

let toonRamp: THREE.DataTexture | null = null;

/** Shared 4-step toon ramp [0.55, 0.78, 0.92, 1.0] (art direction). */
export function getToonRamp(): THREE.DataTexture {
  if (toonRamp) return toonRamp;
  const steps = [0.55, 0.78, 0.92, 1.0];
  const data = new Uint8Array(steps.length * 4);
  steps.forEach((v, i) => {
    const b = Math.round(v * 255);
    data.set([b, b, b, 255], i * 4);
  });
  const tex = new THREE.DataTexture(data, steps.length, 1, THREE.RGBAFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  toonRamp = tex;
  return tex;
}

export function disposeToonRamp(): void {
  toonRamp?.dispose();
  toonRamp = null;
}

export function toonMaterial(opts: THREE.MeshToonMaterialParameters = {}): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: getToonRamp(), ...opts });
}

/** Deterministic PRNG so set dressing is identical every load. */
export function rng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
