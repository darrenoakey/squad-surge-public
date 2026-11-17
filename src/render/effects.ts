// Pooled, instanced effects: rounded-cube particles (with gravity and bounce), helmets,
// flat additive-free decals (rings, chevrons, stars, blob shadows) and score popups.
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { getToonRamp } from "./kit";

const m4 = new THREE.Matrix4();
const q4 = new THREE.Quaternion();
const e4 = new THREE.Euler();
const p4 = new THREE.Vector3();
const s4 = new THREE.Vector3();
const c4 = new THREE.Color();

// --------------------------------------------------------------- particles --

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  rz: number;
  wx: number;
  wy: number;
  wz: number;
  sx: number;
  sy: number;
  sz: number;
  life: number;
  maxLife: number;
  gravity: number;
  floor: number;
  drag: number;
  color: THREE.Color;
}

export interface Burst {
  x: number;
  y: number;
  z: number;
  count: number;
  color: number | readonly number[];
  speed?: number;
  up?: number;
  size?: number;
  life?: number;
  gravity?: number;
  spread?: number;
  /** Flatten particles into shards (sy multiplier). */
  flat?: number;
  floor?: number;
  drag?: number;
  /** Bias velocity (e.g. away from the camera / along +z). */
  bias?: [number, number, number];
}

export class ParticlePool {
  readonly mesh: THREE.InstancedMesh;
  private readonly items: Particle[] = [];
  private cursor = 0;
  private rand: () => number;

  constructor(
    geometry: THREE.BufferGeometry,
    material: THREE.Material,
    readonly capacity: number,
    seed = 1,
  ) {
    this.mesh = new THREE.InstancedMesh(geometry, material, capacity);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    this.mesh.count = 0;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(capacity * 3), 3);
    let s = seed;
    this.rand = () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
    for (let i = 0; i < capacity; i++) {
      this.items.push({
        x: 0,
        y: 0,
        z: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        rx: 0,
        ry: 0,
        rz: 0,
        wx: 0,
        wy: 0,
        wz: 0,
        sx: 1,
        sy: 1,
        sz: 1,
        life: 0,
        maxLife: 1,
        gravity: 0,
        floor: 0,
        drag: 0,
        color: new THREE.Color(),
      });
    }
  }

  burst(b: Burst): void {
    const r = this.rand;
    const colors = typeof b.color === "number" ? [b.color] : b.color;
    for (let n = 0; n < b.count; n++) {
      const p = this.items[this.cursor]!;
      this.cursor = (this.cursor + 1) % this.capacity;
      const spread = b.spread ?? 0.25;
      const a = r() * Math.PI * 2;
      const sp = (b.speed ?? 4) * (0.45 + r() * 0.75);
      p.x = b.x + (r() - 0.5) * spread;
      p.y = b.y + (r() - 0.5) * spread;
      p.z = b.z + (r() - 0.5) * spread;
      p.vx = Math.cos(a) * sp + (b.bias?.[0] ?? 0);
      p.vz = Math.sin(a) * sp + (b.bias?.[2] ?? 0);
      p.vy = (b.up ?? 4) * (0.6 + r() * 0.7) + (b.bias?.[1] ?? 0);
      p.rx = r() * 6;
      p.ry = r() * 6;
      p.rz = r() * 6;
      p.wx = (r() - 0.5) * 14;
      p.wy = (r() - 0.5) * 14;
      p.wz = (r() - 0.5) * 14;
      const size = (b.size ?? 0.2) * (0.7 + r() * 0.6);
      p.sx = size;
      p.sy = size * (b.flat ?? 1);
      p.sz = size * (b.flat !== undefined ? 1.4 : 1);
      p.maxLife = (b.life ?? 0.9) * (0.75 + r() * 0.5);
      p.life = p.maxLife;
      p.gravity = b.gravity ?? 16;
      p.floor = b.floor ?? 0;
      p.drag = b.drag ?? 0.6;
      p.color.setHex(colors[Math.floor(r() * colors.length)] ?? 0xffffff);
    }
  }

  update(dt: number): void {
    let n = 0;
    for (const p of this.items) {
      if (p.life <= 0) continue;
      if (dt > 0) {
        p.life -= dt;
        p.vy -= p.gravity * dt;
        const d = Math.exp(-p.drag * dt);
        p.vx *= d;
        p.vz *= d;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        const half = p.sy * 0.5;
        if (p.y < p.floor + half && p.vy < 0) {
          p.y = p.floor + half;
          p.vy *= -0.38;
          p.vx *= 0.65;
          p.vz *= 0.65;
          p.wx *= 0.6;
          p.wz *= 0.6;
        }
        p.rx += p.wx * dt;
        p.ry += p.wy * dt;
        p.rz += p.wz * dt;
      }
      if (p.life <= 0) continue;
      const t = p.life / p.maxLife;
      const k = t < 0.25 ? t / 0.25 : 1;
      e4.set(p.rx, p.ry, p.rz);
      q4.setFromEuler(e4);
      p4.set(p.x, p.y, p.z);
      s4.set(p.sx * k, p.sy * k, p.sz * k);
      m4.compose(p4, q4, s4);
      this.mesh.setMatrixAt(n, m4);
      this.mesh.setColorAt(n, p.color);
      n++;
    }
    this.mesh.count = n;
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  clear(): void {
    for (const p of this.items) p.life = 0;
    this.mesh.count = 0;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.mesh.dispose();
  }
}

export function makeCubePool(capacity: number): ParticlePool {
  const geo = new RoundedBoxGeometry(1, 1, 1, 1, 0.18);
  const mat = new THREE.MeshToonMaterial({ gradientMap: getToonRamp() });
  return new ParticlePool(geo, mat, capacity, 7);
}

export function makeHelmetPool(capacity: number): ParticlePool {
  const geo = new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  geo.scale(1, 0.78, 1);
  const mat = new THREE.MeshToonMaterial({ gradientMap: getToonRamp(), side: THREE.DoubleSide });
  return new ParticlePool(geo, mat, capacity, 13);
}

// ------------------------------------------------------------------ decals --

const FX_VERT = /* glsl */ `
  attribute float aAlpha;
  varying vec3 vColor;
  varying float vAlpha;
  varying vec2 vUv;
  #include <fog_pars_vertex>
  void main() {
    vColor = instanceColor;
    vAlpha = aAlpha;
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;
const FX_FRAG = /* glsl */ `
  uniform float uRadial;
  varying vec3 vColor;
  varying float vAlpha;
  varying vec2 vUv;
  #include <fog_pars_fragment>
  void main() {
    float a = vAlpha;
    if (uRadial > 0.5) {
      float d = length(vUv - 0.5) * 2.0;
      a *= smoothstep(1.0, 0.25, d);
    }
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor, a);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;

/** Immediate-mode instanced flat FX layer: begin() → push()… → end() every frame. */
export class FxLayer {
  readonly mesh: THREE.InstancedMesh;
  private readonly alpha: THREE.InstancedBufferAttribute;
  private n = 0;

  constructor(
    geometry: THREE.BufferGeometry,
    readonly capacity: number,
    opts: { radial?: boolean; depthTest?: boolean; renderOrder?: number; fog?: boolean } = {},
  ) {
    this.alpha = new THREE.InstancedBufferAttribute(new Float32Array(capacity), 1);
    this.alpha.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("aAlpha", this.alpha);
    const mat = new THREE.ShaderMaterial({
      vertexShader: FX_VERT,
      fragmentShader: FX_FRAG,
      transparent: true,
      depthWrite: false,
      depthTest: opts.depthTest ?? true,
      fog: opts.fog ?? true,
      side: THREE.DoubleSide,
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.fog,
        { uRadial: { value: opts.radial ? 1 : 0 } },
      ]),
    });
    this.mesh = new THREE.InstancedMesh(geometry, mat, capacity);
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(capacity * 3), 3);
    this.mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = opts.renderOrder ?? 2;
    this.mesh.count = 0;
  }

  begin(): void {
    this.n = 0;
  }

  push(matrix: THREE.Matrix4, color: number | THREE.Color, alpha: number): void {
    if (this.n >= this.capacity || alpha <= 0.003) return;
    this.mesh.setMatrixAt(this.n, matrix);
    this.mesh.setColorAt(this.n, typeof color === "number" ? c4.setHex(color) : color);
    this.alpha.setX(this.n, Math.min(1, alpha));
    this.n++;
  }

  /** Flat on the ground (XZ plane) helper. */
  pushFlat(
    x: number,
    y: number,
    z: number,
    sx: number,
    sz: number,
    rotY: number,
    color: number | THREE.Color,
    alpha: number,
  ): void {
    e4.set(-Math.PI / 2, rotY, 0, "YXZ");
    q4.setFromEuler(e4);
    p4.set(x, y, z);
    s4.set(sx, sz, 1);
    this.push(m4.compose(p4, q4, s4), color, alpha);
  }

  end(): void {
    this.mesh.count = this.n;
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
    this.alpha.needsUpdate = true;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
    this.mesh.dispose();
  }
}

/** Unit chevron (points toward -y in its plane, i.e. forward after laying flat). */
export function chevronGeometry(): THREE.BufferGeometry {
  const s = new THREE.Shape();
  s.moveTo(-0.5, 0.15);
  s.lineTo(0, -0.35);
  s.lineTo(0.5, 0.15);
  s.lineTo(0.5, 0.42);
  s.lineTo(0, -0.08);
  s.lineTo(-0.5, 0.42);
  s.closePath();
  return new THREE.ShapeGeometry(s);
}

export function starGeometry(points = 5): THREE.BufferGeometry {
  const s = new THREE.Shape();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 ? 0.22 : 0.5;
    const a = (i / (points * 2)) * Math.PI * 2;
    if (i === 0) s.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  s.closePath();
  return new THREE.ShapeGeometry(s);
}

// ---------------------------------------------------------------- popups --

const POPUP_FONT =
  '800 64px "Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';

interface Popup {
  sprite: THREE.Sprite;
  tex: THREE.CanvasTexture;
  canvas: HTMLCanvasElement;
  life: number;
  x: number;
  y: number;
  z: number;
}

export class PopupPool {
  readonly group = new THREE.Group();
  private readonly items: Popup[] = [];
  private cursor = 0;

  constructor(capacity = 18) {
    for (let i = 0; i < capacity; i++) {
      const canvas = document.createElement("canvas");
      canvas.width = 192;
      canvas.height = 96;
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        toneMapped: false,
        fog: false,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.visible = false;
      sprite.renderOrder = 20;
      this.group.add(sprite);
      this.items.push({ sprite, tex, canvas, life: 0, x: 0, y: 0, z: 0 });
    }
  }

  spawn(text: string, x: number, y: number, z: number, color = "#FFC93C"): void {
    const p = this.items[this.cursor]!;
    this.cursor = (this.cursor + 1) % this.items.length;
    const g = p.canvas.getContext("2d");
    if (!g) return;
    g.clearRect(0, 0, p.canvas.width, p.canvas.height);
    g.font = POPUP_FONT;
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.lineJoin = "round";
    g.lineWidth = 12;
    g.strokeStyle = "#14233F";
    g.strokeText(text, 96, 50);
    g.fillStyle = color;
    g.fillText(text, 96, 50);
    p.tex.needsUpdate = true;
    p.life = 0.8;
    p.x = x;
    p.y = y;
    p.z = z;
    p.sprite.visible = true;
  }

  update(dt: number): void {
    for (const p of this.items) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.sprite.visible = false;
        continue;
      }
      const t = 1 - p.life / 0.8;
      const pop = t < 0.15 ? 0.6 + (t / 0.15) * 0.55 : 1.15 - Math.min(0.15, (t - 0.15) * 0.6);
      p.sprite.position.set(p.x, p.y + t * 0.8 * 1.6, p.z);
      p.sprite.scale.set(1.5 * pop, 0.75 * pop, 1);
      p.sprite.material.opacity = t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1;
    }
  }

  clear(): void {
    for (const p of this.items) {
      p.life = 0;
      p.sprite.visible = false;
    }
  }

  dispose(): void {
    for (const p of this.items) {
      p.tex.dispose();
      (p.sprite.material as THREE.Material).dispose();
    }
    this.group.removeFromParent();
  }
}

/** Soft radial blob texture-free disc for contact shadows: uses FxLayer radial mode. */
export function discGeometry(): THREE.BufferGeometry {
  return new THREE.PlaneGeometry(1, 1);
}
