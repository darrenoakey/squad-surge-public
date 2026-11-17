// Seaside diorama: sky, toon ocean, scrolling causeway/quay/jetty strip and fog-free vista.
// Static detail is merged into a handful of vertex-coloured meshes (few draw calls).
import * as THREE from "three";
import { Kit, rng, toonMaterial } from "./kit";
import type { Theme } from "./themes";

export const WATER_Y = -1.25;
export const DECK_HALF = 5.2;
const TILE = 64;
const TILE_COPIES = 3;
const STRIP_START = 40;
const ROAD_TEX_PERIOD = 16;
const ROAD_LEN = 220;
const HALF_PI = Math.PI / 2;

const cA = new THREE.Color();
const cB = new THREE.Color();
function mixHex(a: number, b: number, t: number): number {
  return cA.setHex(a).lerp(cB.setHex(b), t).getHex();
}

// ------------------------------------------------------------------ props --

function palm(k: Kit, x: number, y: number, z: number, r: () => number, trunk = 0xb9824f): void {
  const lean = (r() - 0.5) * 0.5;
  const dir = r() * Math.PI * 2;
  const h = 2.6 + r() * 1.4;
  const seg = 5;
  let px = x;
  let pz = z;
  let py = y;
  for (let i = 0; i < seg; i++) {
    const t = (i + 1) / seg;
    const nx = x + Math.cos(dir) * lean * h * t * t;
    const nz = z + Math.sin(dir) * lean * h * t * t;
    const ny = y + h * t;
    k.limb(
      [px, py, pz],
      [nx, ny, nz],
      0.16 - i * 0.018,
      i % 2 ? trunk : mixHex(trunk, 0x000000, 0.18),
      6,
    );
    px = nx;
    py = ny;
    pz = nz;
  }
  const leaf = 0x3fae5a;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + r();
    k.box(
      0.5,
      0.06,
      1.7,
      i % 2 ? leaf : 0x58c46a,
      {
        x: px + Math.cos(a) * 0.75,
        y: py - 0.18,
        z: pz + Math.sin(a) * 0.75,
        ry: -a + HALF_PI,
        rx: 0.45,
      },
      0.03,
    );
  }
  k.sphere(0.13, 0x7a4a2a, { x: px + 0.12, y: py - 0.15, z: pz }, 8).sphere(
    0.13,
    0x7a4a2a,
    { x: px - 0.08, y: py - 0.18, z: pz + 0.1 },
    8,
  );
}

function rock(
  k: Kit,
  x: number,
  y: number,
  z: number,
  s: number,
  color: number,
  r: () => number,
): void {
  k.rock(s, color, { x, y, z, sy: 0.6 + r() * 0.4, ry: r() * 6, rx: r() * 0.4 }, 0);
}

function buoy(k: Kit, x: number, z: number, color: number): void {
  k.sphere(0.45, color, { x, y: WATER_Y + 0.15, z, sy: 0.85 }, 12)
    .cyl(0.47, 0.47, 0.16, 0xffffff, { x, y: WATER_Y + 0.25, z }, 12)
    .cyl(0.05, 0.05, 0.8, 0x39424e, { x, y: WATER_Y + 0.85, z }, 6)
    .sphere(0.12, 0xffc93c, { x, y: WATER_Y + 1.28, z }, 8);
}

function sailboat(k: Kit, x: number, z: number, hull: number, sail: number, s = 1): void {
  const y = WATER_Y + 0.15;
  k.box(1.1 * s, 0.5 * s, 3 * s, hull, { x, y: y + 0.2 * s, z }, 0.22 * s)
    .box(0.9 * s, 0.12 * s, 2.6 * s, 0xf4e9d0, { x, y: y + 0.48 * s, z }, 0.05 * s)
    .cyl(0.05 * s, 0.05 * s, 3.4 * s, 0xf4e9d0, { x, y: y + 2.1 * s, z: z - 0.2 * s }, 6)
    .cone(
      0.9 * s,
      2.8 * s,
      sail,
      { x: x + 0.05, y: y + 2.1 * s, z: z + 0.45 * s, sx: 0.08, sz: 0.9 },
      4,
    )
    .box(0.15 * s, 0.4 * s, 0.4 * s, 0xff6b5e, { x, y: y + 3.8 * s, z: z - 0.2 * s }, 0.03);
}

function lampPost(
  k: Kit,
  glow: Kit,
  x: number,
  z: number,
  side: number,
  pole: number,
  lamp: number,
): void {
  k.cyl(0.14, 0.18, 0.3, pole, { x, y: 0.15, z }, 10)
    .cyl(0.07, 0.08, 3.6, pole, { x, y: 1.95, z }, 8)
    .limb([x, 3.7, z], [x - side * 0.8, 3.95, z], 0.06, pole, 6)
    .box(0.45, 0.16, 0.34, pole, { x: x - side * 0.95, y: 3.92, z }, 0.06);
  glow.sphere(0.2, lamp, { x: x - side * 0.95, y: 3.74, z, sy: 0.6 }, 10);
}

function lighthouse(k: Kit, x: number, y: number, z: number, s: number, red: number): void {
  for (let i = 0; i < 5; i++) {
    const r0 = (1.3 - i * 0.12) * s;
    k.cyl(
      r0 - 0.12 * s,
      r0,
      1.4 * s,
      i % 2 ? 0xffffff : red,
      { x, y: y + (0.7 + i * 1.4) * s, z },
      16,
    );
  }
  k.cyl(0.75 * s, 0.75 * s, 0.2 * s, 0x39424e, { x, y: y + 7.1 * s, z }, 16)
    .cyl(0.55 * s, 0.55 * s, 0.9 * s, 0xfff3c4, { x, y: y + 7.6 * s, z }, 12)
    .cone(0.75 * s, 0.8 * s, red, { x, y: y + 8.45 * s, z }, 12);
}

function container(k: Kit, x: number, y: number, z: number, color: number, rotY = 0): void {
  const dark = mixHex(color, 0x000000, 0.25);
  k.box(2.4, 2.4, 5.6, color, { x, y: y + 1.2, z, ry: rotY }, 0.08);
  for (let i = -2; i <= 2; i++) {
    const dx = Math.sin(rotY) * i * 1.05;
    const dz = Math.cos(rotY) * i * 1.05;
    k.box(2.46, 2.1, 0.14, dark, { x: x + dx, y: y + 1.2, z: z + dz, ry: rotY }, 0.03);
  }
}

function crane(k: Kit, x: number, z: number, s: number, color: number): void {
  const legH = 9 * s;
  for (const dx of [-2.2, 2.2]) {
    for (const dz of [-1.6, 1.6])
      k.box(0.5 * s, legH, 0.5 * s, color, { x: x + dx * s, y: legH / 2, z: z + dz * s }, 0.05);
  }
  k.box(5.4 * s, 0.7 * s, 4 * s, color, { x, y: legH, z }, 0.08)
    .box(1.0 * s, 0.8 * s, 16 * s, color, { x, y: legH + 1.6 * s, z: z - 3 * s }, 0.08)
    .box(2.2 * s, 1.6 * s, 2.2 * s, 0xf4e9d0, { x, y: legH + 1.2 * s, z: z + 1.4 * s }, 0.1)
    .box(0.12 * s, 4 * s, 0.12 * s, 0x39424e, { x, y: legH - 0.6 * s, z: z - 8 * s }, 0.02)
    .box(1.2 * s, 0.4 * s, 0.8 * s, 0xffc93c, { x, y: legH - 2.8 * s, z: z - 8 * s }, 0.05);
}

function cloud(
  k: Kit,
  x: number,
  y: number,
  z: number,
  s: number,
  color: number,
  r: () => number,
): void {
  const n = 4 + Math.floor(r() * 3);
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1) - 0.5;
    const rad = (1.6 + Math.sin((i / (n - 1)) * Math.PI) * 1.8 + r() * 0.6) * s;
    k.sphere(
      rad,
      color,
      { x: x + t * 7 * s, y: y + rad * 0.35, z: z + (r() - 0.5) * 2 * s, sy: 0.75 },
      12,
    );
  }
}

function islet(
  k: Kit,
  x: number,
  z: number,
  w: number,
  theme: Theme,
  r: () => number,
  palms: number,
): void {
  k.sphere(w, theme.sand, { x, y: WATER_Y - w * 0.55, z, sy: 0.75 * (1 + r() * 0.2) }, 18);
  k.sphere(
    w * 0.72,
    theme.grass,
    { x: x + (r() - 0.5) * w * 0.3, y: WATER_Y - w * 0.32, z, sy: 0.72 },
    16,
  );
  for (let i = 0; i < palms; i++) {
    const a = r() * Math.PI * 2;
    const d = r() * w * 0.35;
    palm(k, x + Math.cos(a) * d, WATER_Y + w * 0.18, z + Math.sin(a) * d, r);
  }
  for (let i = 0; i < 5; i++) {
    const a = r() * Math.PI * 2;
    rock(
      k,
      x + Math.cos(a) * w * 0.9,
      WATER_Y + 0.05,
      z + Math.sin(a) * w * 0.9,
      0.35 + r() * 0.5,
      theme.rock,
      r,
    );
  }
}

// --------------------------------------------------------------- textures --

function roadTexture(theme: Theme): THREE.CanvasTexture {
  const W = 256;
  const H = Math.round((W * ROAD_TEX_PERIOD) / (DECK_HALF * 2));
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d");
  if (!g) throw new Error("2D canvas unavailable for road texture");
  const px = W / (DECK_HALF * 2); // pixels per world unit
  const X = (wx: number): number => (wx + DECK_HALF) * px;
  g.fillStyle = `#${theme.road.toString(16).padStart(6, "0")}`;
  g.fillRect(0, 0, W, H);
  const r = rng(77);
  if (theme.biome === "dusk") {
    // planks across the jetty
    for (let y = 0; y < H; y += px * 0.55) {
      g.fillStyle = r() > 0.5 ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.06)";
      g.fillRect(0, y, W, px * 0.5);
      g.fillStyle = "rgba(60,30,10,0.35)";
      g.fillRect(0, y + px * 0.5, W, px * 0.05);
      g.fillStyle = "rgba(60,30,10,0.45)";
      for (const nx of [X(-4.9), X(-1.6), X(1.6), X(4.9)])
        g.fillRect(nx - 1.5, y + px * 0.22, 3, 3);
    }
  } else {
    // per-lane slabs with gently varied tint, bevelled seams and speckle
    const slabLen = px * 4;
    for (let y = 0; y < H; y += slabLen) {
      for (let lane = -1; lane <= 1; lane++) {
        const x0 = X(lane * 3.2 - 1.6);
        const v = r();
        g.fillStyle =
          v > 0.5
            ? `rgba(255,255,255,${(0.04 + v * 0.05).toFixed(3)})`
            : `rgba(0,0,0,${(0.02 + v * 0.05).toFixed(3)})`;
        g.fillRect(x0, y, px * 3.2, slabLen);
      }
      g.fillStyle = "rgba(60,40,20,0.13)";
      g.fillRect(0, y, W, 3);
      g.fillStyle = "rgba(255,255,255,0.18)";
      g.fillRect(0, y + 3, W, 2);
    }
    for (let i = 0; i < 1400; i++) {
      g.fillStyle = r() > 0.5 ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.07)";
      g.fillRect(r() * W, r() * H, 2 + r() * 3, 2 + r() * 3);
    }
    if (theme.biome === "port") {
      // tar patches and drain covers
      for (let i = 0; i < 10; i++) {
        g.fillStyle = "rgba(20,25,35,0.18)";
        g.beginPath();
        g.ellipse(
          r() * W,
          r() * H,
          px * (0.4 + r() * 0.8),
          px * (0.3 + r() * 0.6),
          r() * 3,
          0,
          Math.PI * 2,
        );
        g.fill();
      }
    }
  }
  // soft gutter darkening along the kerbs keeps the lanes framed
  const gut = g.createLinearGradient(0, 0, W, 0);
  gut.addColorStop(0, "rgba(40,25,10,0.42)");
  gut.addColorStop(0.07, "rgba(40,25,10,0)");
  gut.addColorStop(0.93, "rgba(40,25,10,0)");
  gut.addColorStop(1, "rgba(40,25,10,0.42)");
  g.fillStyle = gut;
  g.fillRect(0, 0, W, H);
  const paint = `#${theme.paint.toString(16).padStart(6, "0")}`;
  g.fillStyle = paint;
  // solid edge lines
  for (const ex of [-4.6, 4.6]) g.fillRect(X(ex) - px * 0.14, 0, px * 0.28, H);
  // dashed lane dividers
  for (const dx of [-1.6, 1.6]) {
    for (let y = px * 1; y < H; y += px * 4) {
      g.beginPath();
      g.roundRect(X(dx) - px * 0.1, y, px * 0.2, px * 2.2, px * 0.1);
      g.fill();
    }
  }
  // lane-centre chevrons (faint) give motion read
  g.globalAlpha = 0.18;
  for (const lx of [-3.2, 0, 3.2]) {
    const y = px * 8;
    g.beginPath();
    g.moveTo(X(lx) - px * 0.6, y + px * 0.6);
    g.lineTo(X(lx), y);
    g.lineTo(X(lx) + px * 0.6, y + px * 0.6);
    g.lineTo(X(lx) + px * 0.6, y + px * 0.95);
    g.lineTo(X(lx), y + px * 0.35);
    g.lineTo(X(lx) - px * 0.6, y + px * 0.95);
    g.closePath();
    g.fill();
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  tex.repeat.set(1, ROAD_LEN / ROAD_TEX_PERIOD);
  return tex;
}

// ------------------------------------------------------------------ water --

const WATER_VERT = /* glsl */ `
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vec4 mv = viewMatrix * w;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

const WATER_FRAG = /* glsl */ `
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform vec3 uFoam;
  uniform vec3 uFog;
  uniform float uFogNear;
  uniform float uFogFar;
  uniform float uTime;
  uniform float uScroll;
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vec2 p = vec2(vWorld.x, vWorld.z - uScroll);
    float d = abs(vWorld.x);
    float wob = sin(p.y * 0.11 + uTime * 0.2) * 3.0 + sin(p.x * 0.07) * 4.0;
    float depthT = smoothstep(7.0, 48.0, d + wob);
    vec3 col = mix(uShallow, uDeep, depthT);
    // toon ripple bands
    float n = sin(p.x * 0.42 + sin(p.y * 0.23 + uTime * 0.7) * 1.7 + uTime * 0.35)
            * sin(p.y * 0.31 - uTime * 0.55 + sin(p.x * 0.19 + uTime * 0.2) * 1.4);
    float band = smoothstep(0.74, 0.79, n);
    col = mix(col, mix(col, uFoam, 0.55), band);
    float dark = smoothstep(-0.8, -0.86, n);
    col *= 1.0 - dark * 0.08;
    // shoreline froth hugging the deck
    float edge = 1.0 - smoothstep(5.3, 6.4 + sin(p.y * 0.9 + uTime * 2.0) * 0.3, d);
    col = mix(col, uFoam, edge * 0.75);
    float f = smoothstep(uFogNear, uFogFar, vDepth);
    gl_FragColor = vec4(mix(col, uFog, f), 1.0);
    #include <colorspace_fragment>
  }
`;

// ------------------------------------------------------------ environment --

export class Environment {
  readonly group = new THREE.Group();
  private readonly disposables: { dispose(): void }[] = [];
  private readonly strip = new THREE.Group();
  private readonly waterUniforms: Record<string, THREE.IUniform>;
  private readonly roadTex: THREE.CanvasTexture;
  private readonly crests: THREE.InstancedMesh;
  private readonly crestData: { x: number; z: number; phase: number; s: number }[] = [];
  private readonly clouds: THREE.Mesh;
  private readonly stripMeshes: THREE.Mesh[] = [];
  private readonly glowMat: THREE.MeshBasicMaterial;
  private readonly foamMat: THREE.MeshBasicMaterial;

  constructor(readonly theme: Theme) {
    const r = rng(theme.biome === "coastal" ? 11 : theme.biome === "port" ? 23 : 37);

    // sky dome
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uTop: { value: new THREE.Color(theme.skyTop) },
        uMid: { value: new THREE.Color(theme.skyMid) },
        uHorizon: { value: new THREE.Color(theme.skyHorizon) },
      },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHorizon; varying vec3 vDir;
        void main(){ float h = clamp(vDir.y, 0.0, 1.0);
          vec3 c = mix(uHorizon, uMid, smoothstep(0.0, 0.16, h));
          c = mix(c, uTop, smoothstep(0.14, 0.55, h));
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`,
    });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(420, 32, 16), skyMat);
    sky.renderOrder = -10;
    this.track(sky.geometry, skyMat);
    this.group.add(sky);

    // ocean
    this.waterUniforms = {
      uShallow: { value: new THREE.Color(theme.waterShallow) },
      uDeep: { value: new THREE.Color(theme.waterDeep) },
      uFoam: { value: new THREE.Color(theme.foam) },
      uFog: { value: new THREE.Color(theme.fog) },
      uFogNear: { value: theme.fogNear },
      uFogFar: { value: theme.fogFar },
      uTime: { value: 0 },
      uScroll: { value: 0 },
    };
    const waterMat = new THREE.ShaderMaterial({
      uniforms: this.waterUniforms,
      vertexShader: WATER_VERT,
      fragmentShader: WATER_FRAG,
    });
    const water = new THREE.Mesh(new THREE.PlaneGeometry(700, 700, 1, 1), waterMat);
    water.rotation.x = -HALF_PI;
    water.position.set(0, WATER_Y, -120);
    this.track(water.geometry, waterMat);
    this.group.add(water);

    // road deck (static, texture scrolls)
    this.roadTex = roadTexture(theme);
    const roadMat = new THREE.MeshToonMaterial({
      map: this.roadTex,
      gradientMap: toonMaterial().gradientMap,
    });
    const road = new THREE.Mesh(new THREE.PlaneGeometry(DECK_HALF * 2, ROAD_LEN), roadMat);
    road.rotation.x = -HALF_PI;
    road.position.set(0, 0, STRIP_START - ROAD_LEN / 2);
    road.receiveShadow = true;
    this.track(road.geometry, roadMat, this.roadTex);
    this.group.add(road);

    const deck = new Kit();
    const deckZ = STRIP_START - ROAD_LEN / 2;
    deck.sharpBox(
      DECK_HALF * 2 + 0.4,
      0.9,
      ROAD_LEN,
      theme.biome === "dusk" ? 0x7d5234 : mixHex(theme.pillar, 0x000000, 0.12),
      { y: -0.46, z: deckZ },
    );
    // continuous kerb rails
    for (const s of [-1, 1]) {
      deck.box(
        0.36,
        0.26,
        ROAD_LEN,
        theme.kerb,
        { x: s * (DECK_HALF + 0.02), y: 0.1, z: deckZ },
        0.08,
      );
    }
    if (theme.biome === "port") {
      // quay apron on the left
      deck.sharpBox(60, 1.3, ROAD_LEN, 0xb4b8bc, { x: -DECK_HALF - 30.2, y: -0.66, z: deckZ });
      deck.sharpBox(60, 0.04, ROAD_LEN, 0xc9ced3, { x: -DECK_HALF - 30.2, y: -0.0, z: deckZ });
    }
    const deckMat = toonMaterial();
    const deckMesh = new THREE.Mesh(deck.build(), deckMat);
    deckMesh.receiveShadow = true;
    this.track(deckMesh.geometry, deckMat);
    this.group.add(deckMesh);

    // scrolling strip
    const toon = toonMaterial();
    this.glowMat = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
    this.foamMat = new THREE.MeshBasicMaterial({
      color: theme.foam,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
    });
    this.track(toon, this.glowMat, this.foamMat);
    const solid = new Kit();
    const glow = new Kit();
    const foam = new Kit();
    this.buildTile(solid, glow, foam, r);
    const solidGeo = solid.build();
    const glowGeo = glow.build();
    const foamGeo = foam.build();
    this.track(solidGeo, glowGeo, foamGeo);
    for (let i = 0; i < TILE_COPIES; i++) {
      const tile = new THREE.Group();
      tile.position.z = STRIP_START - i * TILE;
      const s = new THREE.Mesh(solidGeo, toon);
      s.castShadow = true;
      s.receiveShadow = true;
      const g = new THREE.Mesh(glowGeo, this.glowMat);
      const f = new THREE.Mesh(foamGeo, this.foamMat);
      f.renderOrder = 1;
      tile.add(s, g, f);
      this.stripMeshes.push(s, g, f);
      this.strip.add(tile);
    }
    this.group.add(this.strip);

    // wave crests
    const crestGeo = new THREE.CapsuleGeometry(0.12, 1.4, 2, 6);
    crestGeo.rotateZ(HALF_PI);
    crestGeo.scale(1, 0.3, 1);
    const crestMat = new THREE.MeshBasicMaterial({
      color: theme.foam,
      transparent: true,
      opacity: 0.85,
      fog: true,
    });
    this.crests = new THREE.InstancedMesh(crestGeo, crestMat, 160);
    this.crests.frustumCulled = false;
    this.track(crestGeo, crestMat);
    for (let i = 0; i < 160; i++) {
      const side = r() > 0.5 ? 1 : -1;
      const minX = theme.biome === "port" && side < 0 ? 16 : 6.5;
      this.crestData.push({
        x: side * (minX + r() * 22),
        z: 30 - r() * 180,
        phase: r(),
        s: 0.6 + r() * 0.9,
      });
    }
    this.group.add(this.crests);

    // vista + clouds (fog-free, pre-tinted toward the horizon)
    const vista = new Kit();
    const cloudKit = new Kit();
    this.buildVista(vista, cloudKit, r);
    const vistaMat = toonMaterial({ fog: false });
    const vistaGlowMat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      toneMapped: false,
      fog: false,
    });
    const vistaGlow = new Kit();
    if (theme.biome === "dusk") {
      vistaGlow.sphere(14, 0xffe2a8, { x: 40, y: 6, z: -330 }, 24);
      vistaGlow.sphere(0.9, 0x6ee7a0, { x: 9, y: 3.4, z: -150 }, 10);
    }
    if (theme.biome === "coastal") vistaGlow.sphere(1.1, 0xfff3c4, { x: 14, y: 14.9, z: -120 }, 10);
    const vistaMesh = new THREE.Mesh(vista.build(), vistaMat);
    this.track(vistaMesh.geometry, vistaMat, vistaGlowMat);
    this.group.add(vistaMesh);
    if (!vistaGlow.empty) {
      const vg = new THREE.Mesh(vistaGlow.build(), vistaGlowMat);
      this.track(vg.geometry);
      this.group.add(vg);
    }
    const cloudMat = new THREE.MeshToonMaterial({
      vertexColors: true,
      gradientMap: toonMaterial().gradientMap,
      fog: false,
      emissive: new THREE.Color(theme.skyHorizon),
      emissiveIntensity: 0.35,
    });
    this.clouds = new THREE.Mesh(cloudKit.build(), cloudMat);
    this.track(this.clouds.geometry, cloudMat);
    this.group.add(this.clouds);
  }

  private track(...items: { dispose(): void }[]): void {
    this.disposables.push(...items);
  }

  private buildTile(k: Kit, glow: Kit, foam: Kit, r: () => number): void {
    const t = this.theme;
    // railing posts + rails / bollards
    for (let z = -1; z > -TILE; z -= 2) {
      for (const s of [-1, 1]) {
        if (t.biome === "port" && s < 0) {
          if (Math.round(z) % 8 === -1)
            k.cyl(0.22, 0.26, 0.5, 0x39424e, { x: -DECK_HALF - 0.9, y: 0.25, z }, 10).cyl(
              0.3,
              0.3,
              0.1,
              0x39424e,
              { x: -DECK_HALF - 0.9, y: 0.52, z },
              10,
            );
          continue;
        }
        const postColor =
          t.biome === "port" ? t.kerbStripe : t.biome === "dusk" ? 0x8a5d3d : 0xf4e9d0;
        k.box(0.16, 0.9, 0.16, postColor, { x: s * (DECK_HALF + 0.35), y: 0.45, z }, 0.05);
      }
      // kerb stripe blocks
      for (const s of [-1, 1]) {
        if (Math.round(z) % 4 === -1)
          k.box(0.38, 0.27, 0.9, t.kerbStripe, { x: s * (DECK_HALF + 0.02), y: 0.11, z }, 0.06);
      }
    }
    for (const s of [-1, 1]) {
      if (t.biome === "port" && s < 0) continue;
      const railColor =
        t.biome === "dusk" ? 0x8a5d3d : t.biome === "port" ? t.kerbStripe : 0xf4e9d0;
      k.box(0.12, 0.12, TILE, railColor, { x: s * (DECK_HALF + 0.35), y: 0.9, z: -TILE / 2 }, 0.05);
      k.box(0.08, 0.08, TILE, railColor, { x: s * (DECK_HALF + 0.35), y: 0.5, z: -TILE / 2 }, 0.03);
    }
    // lamp posts
    for (let z = -8; z > -TILE; z -= 16) {
      for (const s of [-1, 1]) {
        if (t.biome === "port" && s < 0) {
          lampPost(k, glow, -DECK_HALF - 2.2, z, -1, 0x39424e, t.lampGlow);
          continue;
        }
        lampPost(
          k,
          glow,
          s * (DECK_HALF + 0.75),
          z - (s > 0 ? 8 : 0),
          s,
          t.biome === "dusk" ? 0x5a3a26 : 0x2f6bff,
          t.lampGlow,
        );
      }
    }
    // piers / piles under the deck
    const pierStep = t.biome === "dusk" ? 4 : 16;
    for (let z = -4; z > -TILE; z -= pierStep) {
      for (const s of [-1, 1]) {
        if (t.biome === "port" && s < 0) continue;
        const px = s * (DECK_HALF - 0.8);
        if (t.biome === "dusk") {
          k.cyl(0.32, 0.36, 3, 0x6b4428, { x: s * (DECK_HALF + 0.1), y: -1.4, z }, 8);
          foam.torus(
            0.55,
            0.12,
            0xffffff,
            { x: s * (DECK_HALF + 0.1), y: WATER_Y + 0.02, z, rx: HALF_PI },
            14,
          );
        } else {
          k.box(1.4, 2.2, 1.8, t.pillar, { x: px, y: -1.5, z }, 0.15);
          k.box(
            1.8,
            0.4,
            2.2,
            mixHex(t.pillar, 0x000000, 0.15),
            { x: px, y: WATER_Y + 0.1, z },
            0.12,
          );
          foam.torus(
            1.35,
            0.16,
            0xffffff,
            { x: px, y: WATER_Y + 0.03, z, rx: HALF_PI, sx: 1, sy: 1.25 },
            18,
          );
        }
      }
    }

    if (t.biome === "coastal") {
      islet(k, -11.5, -14, 3.6, t, r, 3);
      foam.torus(3.8, 0.35, 0xffffff, { x: -11.5, y: WATER_Y + 0.03, z: -14, rx: HALF_PI }, 32);
      islet(k, 14, -44, 4.6, t, r, 4);
      foam.torus(4.7, 0.4, 0xffffff, { x: 14, y: WATER_Y + 0.03, z: -44, rx: HALF_PI }, 32);
      islet(k, -15, -54, 3.4, t, r, 2);
      foam.torus(3.5, 0.3, 0xffffff, { x: -15, y: WATER_Y + 0.03, z: -52, rx: HALF_PI }, 28);
      // small pier off the big islet
      for (let i = 0; i < 6; i++)
        k.cyl(0.12, 0.12, 1.6, 0x8a5d3d, { x: 10.2 - i * 0.7, y: WATER_Y + 0.3, z: -42.6 }, 6).cyl(
          0.12,
          0.12,
          1.6,
          0x8a5d3d,
          { x: 10.2 - i * 0.7, y: WATER_Y + 0.3, z: -44.2 },
          6,
        );
      k.box(4.4, 0.14, 2.0, 0xc9965f, { x: 8.5, y: WATER_Y + 1.05, z: -43.4 }, 0.04);
      buoy(k, -8.5, -6, t.accent);
      buoy(k, 9, -26, t.accent);
      buoy(k, -9.5, -36, t.accent);
      buoy(k, 8.5, -58, t.accent);
      sailboat(k, -11, -32, 0xffffff, 0xff6b5e, 1.1);
      sailboat(k, 10.5, -18, 0xf4e9d0, 0xffc93c, 1.0);
      for (let i = 0; i < 6; i++)
        rock(
          k,
          (r() > 0.5 ? 1 : -1) * (7 + r() * 4),
          WATER_Y,
          -r() * TILE,
          0.4 + r() * 0.5,
          t.rock,
          r,
        );
    } else if (t.biome === "port") {
      const colors = [0xe8604f, 0x2fa59a, 0xf2b632, 0x2e4a7d];
      for (let z = -6; z > -TILE; z -= 6.2) {
        const stack = 1 + Math.floor(r() * 3);
        for (let h = 0; h < stack; h++)
          container(k, -10.5, h * 2.45, z, colors[Math.floor(r() * 4)] ?? 0xe8604f);
        if (r() > 0.4) container(k, -13.2, 0, z - 0.4, colors[Math.floor(r() * 4)] ?? 0x2fa59a);
      }
      for (let i = 0; i < 6; i++) {
        const z = -4 - i * 10.5;
        k.box(0.9, 0.9, 0.9, 0xc9965f, { x: -7.2, y: 0.45, z, ry: r() }, 0.06).box(
          0.7,
          0.7,
          0.7,
          0xc9965f,
          { x: -7.2, y: 1.25, z: z + 0.1, ry: r() },
          0.06,
        );
      }
      // hazard-striped barrier blocks along the quay edge
      for (let z = -2; z > -TILE; z -= 3)
        k.box(
          0.5,
          0.6,
          1.6,
          z % 6 === -2 ? 0xffc93c : 0x39424e,
          { x: -DECK_HALF - 0.45, y: 0.3, z },
          0.08,
        );
      crane(k, -15, -34, 1, 0xe8604f);
      // moored tug + buoys on the water side
      k.box(2.6, 1.0, 6, 0xe8604f, { x: 11, y: WATER_Y + 0.3, z: -20 }, 0.35)
        .box(2.2, 0.2, 5.4, 0xf4e9d0, { x: 11, y: WATER_Y + 0.85, z: -20 }, 0.06)
        .box(1.6, 1.4, 2.0, 0xf4e9d0, { x: 11, y: WATER_Y + 1.6, z: -19 }, 0.15)
        .box(1.7, 0.2, 2.1, 0x2e4a7d, { x: 11, y: WATER_Y + 2.35, z: -19 }, 0.05)
        .cyl(0.25, 0.3, 1.2, 0xf2b632, { x: 11, y: WATER_Y + 2.8, z: -19.6 }, 10)
        .torus(0.4, 0.12, 0xf4e9d0, { x: 12.35, y: WATER_Y + 0.9, z: -21, ry: HALF_PI }, 12);
      foam.torus(
        3.2,
        0.3,
        0xffffff,
        { x: 11, y: WATER_Y + 0.03, z: -20, rx: HALF_PI, sy: 1.6 },
        24,
      );
      buoy(k, 8.5, -44, 0xf2b632);
      buoy(k, 9, -6, 0xe8604f);
      for (let i = 0; i < 5; i++)
        k.cyl(0.3, 0.3, 2.5, 0x6b4428, { x: 7, y: WATER_Y + 0.4, z: -30 - i * 3 }, 8);
      k.box(1.0, 0.2, 13, 0xa9744b, { x: 7, y: WATER_Y + 1.6, z: -36 }, 0.05);
      sailboat(k, 13, -50, 0xf4e9d0, 0x2fa59a, 1.2);
    } else {
      // dusk: rocky shelves, lanterns and string lights
      for (let i = 0; i < 14; i++) {
        const s = i % 2 ? 1 : -1;
        rock(k, s * (8 + r() * 10), WATER_Y + 0.2, -r() * TILE, 0.8 + r() * 1.6, t.rock, r);
      }
      for (let z = -8; z > -TILE; z -= 8) {
        for (const s of [-1, 1]) {
          const x = s * (DECK_HALF + 0.35);
          const sag = 0.45;
          for (let i = 0; i <= 8; i++) {
            const u = i / 8;
            const y = 2.6 - Math.sin(u * Math.PI) * sag;
            glow.sphere(0.09, i % 3 === 0 ? 0xff9e5e : t.lampGlow, { x, y, z: z - u * 8 }, 6);
          }
          k.cyl(0.07, 0.07, 2.2, 0x5a3a26, { x, y: 1.5, z }, 6);
        }
      }
      islet(k, -11.5, -26, 3.6, t, r, 2);
      foam.torus(3.7, 0.35, 0xffffff, { x: -11.5, y: WATER_Y + 0.03, z: -26, rx: HALF_PI }, 30);
      sailboat(k, 12, -40, 0x5b4b8a, 0xffe9c2, 1.2);
      buoy(k, 9, -16, 0xff6b5e);
      buoy(k, -9, -50, 0xff6b5e);
    }
  }

  private buildVista(k: Kit, clouds: Kit, r: () => number): void {
    const t = this.theme;
    const fade = (c: number, a = 0.45): number => mixHex(c, t.skyHorizon, a);
    const cloudColor = t.biome === "dusk" ? 0xffd6c4 : 0xffffff;
    for (let i = 0; i < 6; i++) {
      cloud(
        clouds,
        -78 + i * 31 + r() * 10,
        11 + r() * 9,
        -255 - r() * 40,
        1.8 + r() * 1.2,
        cloudColor,
        r,
      );
    }
    if (t.biome === "coastal") {
      const hills = [
        [-46, -190, 20],
        [-22, -215, 15],
        [34, -185, 18],
        [62, -215, 24],
        [4, -240, 13],
      ] as const;
      for (const [x, z, s] of hills) {
        k.sphere(s, fade(t.grass, 0.5), { x, y: WATER_Y - s * 0.22, z, sy: 0.55 }, 20);
        k.sphere(s * 1.12, fade(t.sand, 0.5), { x, y: WATER_Y - s * 0.32, z, sy: 0.34 }, 20);
      }
      k.sphere(6, fade(t.rock, 0.35), { x: 14, y: WATER_Y - 1.5, z: -120, sy: 0.7 }, 14);
      lighthouse(k, 14, 1.6, -120, 1.75, fade(t.accent2, 0.2));
      sailboat(k, -20, -150, fade(0xffffff, 0.3), fade(0xffc93c, 0.3), 1.5);
    } else if (t.biome === "port") {
      for (let i = 0; i < 5; i++)
        crane(k, -48 + i * 24, -190 - r() * 20, 1.6, fade(i % 2 ? 0xe8604f : 0xf2b632, 0.45));
      for (let i = 0; i < 10; i++) {
        const w = 10 + r() * 14;
        const h = 5 + r() * 12;
        k.box(
          w,
          h,
          10,
          fade(i % 3 === 0 ? 0xc9ced3 : 0xa8b4bc, 0.5),
          { x: -70 + i * 15, y: WATER_Y + h / 2, z: -230 },
          0.4,
        );
      }
      k.cyl(1.4, 1.8, 30, fade(0xe8604f, 0.5), { x: 38, y: 14, z: -235 }, 12).cyl(
        1.5,
        1.5,
        3,
        fade(0xffffff, 0.5),
        { x: 38, y: 24, z: -235 },
        12,
      );
    } else {
      const cliffs = [
        [-48, -200, 22],
        [-20, -225, 16],
        [32, -195, 20],
        [62, -220, 26],
      ] as const;
      for (const [x, z, s] of cliffs)
        k.rock(s, fade(0x6a4f84, 0.35), { x, y: WATER_Y, z, sy: 0.7, ry: r() * 6 }, 1);
      // rescue boat at the end of the jetty with its green lamp
      k.box(5, 1.6, 9, fade(0xf4e9d0, 0.2), { x: 9, y: WATER_Y + 0.6, z: -150 }, 0.6)
        .box(3.4, 1.8, 3.4, fade(0xff6b5e, 0.2), { x: 9, y: WATER_Y + 2.2, z: -149 }, 0.3)
        .box(5.2, 0.4, 9.2, fade(0xff6b5e, 0.2), { x: 9, y: WATER_Y + 1.2, z: -150 }, 0.1);
    }
  }

  update(time: number, scroll: number): void {
    const off = ((scroll % TILE) + TILE) % TILE;
    this.strip.position.z = off;
    this.roadTex.offset.y = scroll / ROAD_TEX_PERIOD;
    (this.waterUniforms.uTime as THREE.IUniform<number>).value = time;
    (this.waterUniforms.uScroll as THREE.IUniform<number>).value = scroll;
    this.clouds.position.x = Math.sin(time * 0.01) * 12;

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const p = new THREE.Vector3();
    const s = new THREE.Vector3();
    const span = 180;
    this.crestData.forEach((c, i) => {
      let z = c.z + scroll;
      z = 30 - ((((30 - z) % span) + span) % span);
      const life = (time * 0.35 + c.phase) % 1;
      const k = Math.sin(life * Math.PI) * c.s;
      p.set(c.x + Math.sin(time * 0.6 + c.phase * 9) * 0.3, WATER_Y + 0.03, z);
      s.set(k, 1, Math.max(0.001, k));
      m.compose(p, q, s);
      this.crests.setMatrixAt(i, m);
    });
    this.crests.instanceMatrix.needsUpdate = true;
  }

  get drawMeshes(): number {
    return this.stripMeshes.length;
  }

  dispose(): void {
    for (const d of this.disposables) d.dispose();
    this.crests.dispose();
    this.group.removeFromParent();
  }
}
