// Toy-arch gates with translucent tone panels (scrolling chevrons) and big CanvasTexture
// arithmetic labels. One shared arch geometry; panels/labels per live gate.
import * as THREE from "three";
import type { GameState, GateSnapshot, GateTone } from "../game/types";
import { Kit, toonMaterial } from "./kit";

export const GATE_TONE: Record<GateTone, number> = {
  good: 0x2ea8ff,
  bad: 0xff5247,
  mixed: 0xffb020,
};
const PANEL_W = 2.9;
const PANEL_H = 2.4;
/** Label plate: lane-wide and tall so the numeral reads ≥3.4% of a 390px viewport at spawn. */
const LABEL_W = 3.1;
const LABEL_H = 3.3;
const POST_H = 2.6;
const LABEL_FONT = '"Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif';

const PANEL_VERT = /* glsl */ `
  varying vec2 vUv;
  #include <fog_pars_vertex>
  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`;
const PANEL_FRAG = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uColor2;
  uniform float uOpacity;
  uniform float uTime;
  uniform float uDir;
  uniform float uSplit;
  uniform float uFlash;
  varying vec2 vUv;
  #include <fog_pars_fragment>
  void main() {
    vec3 col = uColor;
    if (uSplit > 0.5 && vUv.x > 0.5 + (vUv.y - 0.5) * 0.25) col = uColor2;
    // scrolling chevrons
    float y = vUv.y * 4.0 - uTime * 0.45 * uDir;
    float c = fract(y + abs(vUv.x - 0.5) * 1.1 * uDir);
    float chev = smoothstep(0.0, 0.06, c) * (1.0 - smoothstep(0.22, 0.28, c));
    float a = uOpacity + chev * 0.16;
    // bright frame edge
    float edge = max(smoothstep(0.035, 0.0, min(vUv.x, 1.0 - vUv.x)), smoothstep(0.035, 0.0, min(vUv.y, 1.0 - vUv.y)));
    col = mix(col, vec3(1.0), edge * 0.6 + chev * 0.12 + uFlash * 0.5);
    a = max(a, edge * 0.9) + uFlash * 0.3;
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`;

function archGeometry(): THREE.BufferGeometry {
  const k = new Kit();
  for (const s of [-1, 1]) {
    const x = s * 1.5;
    k.cyl(0.24, 0.28, 0.24, 0xf4e9d0, { x, y: 0.12 }, 14);
    for (let i = 0; i < 5; i++)
      k.cyl(
        0.13,
        0.13,
        POST_H / 5,
        i % 2 ? 0xf4e9d0 : 0x2e4a7d,
        { x, y: 0.24 + (i + 0.5) * (POST_H / 5) * 0.92 },
        10,
      );
    k.sphere(0.24, 0xffc93c, { x, y: POST_H + 0.15 }, 12);
  }
  k.box(3.2, 0.2, 0.2, 0xf4e9d0, { y: POST_H + 0.15 }, 0.08);
  return k.build();
}

function drawLabel(canvas: HTMLCanvasElement, label: string, detail: string, tone: GateTone): void {
  const g = canvas.getContext("2d");
  if (!g) throw new Error("2D canvas unavailable for gate label");
  const W = canvas.width;
  const H = canvas.height;
  g.clearRect(0, 0, W, H);
  g.textAlign = "center";
  g.textBaseline = "alphabetic";
  g.lineJoin = "round";
  // Solid tone plate (high contrast against any sky/water/road) holding a huge white
  // numeral with an ink stroke; the cost/side-effect line sits in an ink pill below.
  const plate = tone === "bad" ? "#D93A31" : tone === "mixed" ? "#D98A00" : "#1677D2";
  const pad = W * 0.03;
  const plateH = detail ? H * 0.94 : H * 0.8;
  const plateY = (H - plateH) / 2;
  g.fillStyle = plate;
  g.strokeStyle = "#14233F";
  g.lineWidth = W * 0.022;
  g.beginPath();
  g.roundRect(pad, plateY, W - pad * 2, plateH, W * 0.07);
  g.fill();
  g.stroke();
  // inner highlight bevel
  g.strokeStyle = "rgba(255,255,255,0.35)";
  g.lineWidth = W * 0.012;
  g.beginPath();
  g.roundRect(
    pad + W * 0.025,
    plateY + W * 0.025,
    W - pad * 2 - W * 0.05,
    plateH - W * 0.05,
    W * 0.05,
  );
  g.stroke();
  // numeral ≈ 60–70% of the label height (3.3-unit plane → ~2-unit numeral)
  let size = Math.round(H * (detail ? 0.6 : 0.7));
  g.font = `800 ${size}px ${LABEL_FONT}`;
  const maxW = W * 0.86;
  const w = g.measureText(label).width;
  if (w > maxW) {
    size = Math.floor((size * maxW) / w);
    g.font = `800 ${size}px ${LABEL_FONT}`;
  }
  const base = detail ? plateY + plateH * 0.62 : plateY + plateH * 0.5 + size * 0.36;
  g.lineWidth = Math.max(10, size * 0.16);
  g.strokeStyle = "#14233F";
  g.fillStyle = "#14233F";
  g.fillText(label, W / 2 + size * 0.03, base + size * 0.05);
  g.strokeText(label, W / 2, base);
  g.fillStyle = "#FFFFFF";
  g.fillText(label, W / 2, base);
  if (detail) {
    let ds = Math.round(size * 0.36);
    g.font = `800 ${ds}px ${LABEL_FONT}`;
    const text = detail.toUpperCase();
    const dw = g.measureText(text).width;
    if (dw > maxW) {
      ds = Math.floor((ds * maxW) / dw);
      g.font = `800 ${ds}px ${LABEL_FONT}`;
    }
    const tw = Math.min(maxW, g.measureText(text).width) + ds * 0.9;
    const y = plateY + plateH - ds * 0.55;
    g.fillStyle = "#14233F";
    g.beginPath();
    g.roundRect(W / 2 - tw / 2, y - ds * 0.95, tw, ds * 1.25, ds * 0.35);
    g.fill();
    g.fillStyle = tone === "bad" ? "#FFC2BC" : tone === "mixed" ? "#FFE1A0" : "#CFEBFF";
    g.fillText(text, W / 2, y);
  }
}

interface GateView {
  id: number;
  rowId: number;
  group: THREE.Group;
  panelMat: THREE.ShaderMaterial;
  labelMat: THREE.MeshBasicMaterial;
  tex: THREE.CanvasTexture;
  canvas: HTMLCanvasElement;
  label: string;
  detail: string;
  tone: GateTone;
  popAt: number;
  /** >=0 when fading out after its row was resolved. */
  fadeAt: number;
  appearAt: number;
}

export class GateLayer {
  readonly group = new THREE.Group();
  private readonly archGeo = archGeometry();
  private readonly archMat = toonMaterial();
  private readonly panelGeo = new THREE.PlaneGeometry(PANEL_W, PANEL_H);
  private readonly labelGeo = new THREE.PlaneGeometry(LABEL_W, LABEL_H);
  private readonly views = new Map<number, GateView>();
  private readonly pool: GateView[] = [];
  /** Rows resolved by a gate event: rowId → chosen gate id. */
  private readonly resolvedRows = new Map<number, number>();

  /** Notified when a gate is chosen so the renderer can burst shards. */
  onShatter: ((x: number, y: number, z: number, color: number) => void) | null = null;

  private create(): GateView {
    const reuse = this.pool.pop();
    if (reuse) return reuse;
    const group = new THREE.Group();
    const arch = new THREE.Mesh(this.archGeo, this.archMat);
    arch.castShadow = true;
    const panelMat = new THREE.ShaderMaterial({
      vertexShader: PANEL_VERT,
      fragmentShader: PANEL_FRAG,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      fog: true,
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.fog,
        {
          uColor: { value: new THREE.Color() },
          uColor2: { value: new THREE.Color(GATE_TONE.bad) },
          uOpacity: { value: 0.42 },
          uTime: { value: 0 },
          uDir: { value: 1 },
          uSplit: { value: 0 },
          uFlash: { value: 0 },
        },
      ]),
    });
    const panel = new THREE.Mesh(this.panelGeo, panelMat);
    panel.position.y = 0.24 + PANEL_H / 2;
    panel.renderOrder = 3;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = Math.round((512 * LABEL_H) / LABEL_W);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const labelMat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      toneMapped: false,
      fog: false,
    });
    const labelMesh = new THREE.Mesh(this.labelGeo, labelMat);
    labelMesh.position.set(0, 1.0 + LABEL_H / 2, 0.12);
    labelMesh.rotation.x = -0.3;
    labelMesh.renderOrder = 4;
    group.add(arch, panel, labelMesh);
    return {
      id: -1,
      rowId: -1,
      group,
      panelMat,
      labelMat,
      tex,
      canvas,
      label: "",
      detail: "",
      tone: "good",
      popAt: -10,
      fadeAt: -1,
      appearAt: 0,
    };
  }

  private release(v: GateView): void {
    v.group.removeFromParent();
    this.views.delete(v.id);
    this.pool.push(v);
  }

  reset(): void {
    for (const v of [...this.views.values()]) this.release(v);
    this.resolvedRows.clear();
  }

  /** gate event: shatter chosen panel, fade siblings. */
  onGateChosen(gateId: number, rowId: number): void {
    this.resolvedRows.set(rowId, gateId);
    const v = this.views.get(gateId);
    if (v) {
      const p = v.group.position;
      this.onShatter?.(p.x, 1.4, p.z, GATE_TONE[v.tone]);
      this.release(v);
    }
  }

  onGrow(gateId: number, now: number): void {
    const v = this.views.get(gateId);
    if (v) v.popAt = now;
  }

  update(state: GameState, now: number, time: number): void {
    const seen = new Set<number>();
    for (const g of state.gates) {
      seen.add(g.id);
      let v = this.views.get(g.id);
      if (!v) {
        if (this.resolvedRows.get(g.rowId) === g.id) continue;
        v = this.create();
        v.id = g.id;
        v.rowId = g.rowId;
        v.fadeAt = -1;
        v.label = "";
        v.appearAt = now;
        this.views.set(g.id, v);
        this.group.add(v.group);
      }
      this.sync(v, g, now, time, state);
    }
    for (const v of [...this.views.values()]) {
      if (seen.has(v.id)) continue;
      if (v.fadeAt < 0) {
        if (this.resolvedRows.has(v.rowId)) v.fadeAt = now;
        else {
          this.release(v);
          continue;
        }
      }
      const t = (now - v.fadeAt) / 0.2;
      if (t >= 1) this.release(v);
      else {
        v.group.scale.setScalar(1 - t * 0.3);
        (v.panelMat.uniforms.uOpacity as THREE.IUniform<number>).value = 0.42 * (1 - t);
        v.labelMat.opacity = 1 - t;
      }
    }
  }

  private sync(v: GateView, g: GateSnapshot, now: number, time: number, state: GameState): void {
    if (g.label !== v.label || g.detail !== v.detail || g.tone !== v.tone) {
      if (v.label && g.label !== v.label) v.popAt = now;
      v.label = g.label;
      v.detail = g.detail;
      v.tone = g.tone;
      drawLabel(v.canvas, g.label, g.detail, g.tone);
      v.tex.needsUpdate = true;
      const u = v.panelMat.uniforms;
      (u.uColor as THREE.IUniform<THREE.Color>).value.setHex(
        g.tone === "mixed" ? GATE_TONE.good : GATE_TONE[g.tone],
      );
      (u.uColor2 as THREE.IUniform<THREE.Color>).value.setHex(GATE_TONE.bad);
      (u.uSplit as THREE.IUniform<number>).value = g.tone === "mixed" ? 1 : 0;
      (u.uDir as THREE.IUniform<number>).value = g.tone === "bad" ? -1 : 1;
    }
    v.group.position.set(g.x, 0, g.z);
    const appear = Math.min(1, (now - v.appearAt) / 0.35);
    const back = 1 - Math.pow(1 - appear, 3);
    const popT = (now - v.popAt) / 0.18;
    const pop = popT >= 0 && popT < 1 ? 1 + 0.12 * Math.sin(popT * Math.PI) : 1;
    v.group.scale.set(pop, back * pop, pop);
    const u = v.panelMat.uniforms;
    (u.uTime as THREE.IUniform<number>).value = time;
    (u.uOpacity as THREE.IUniform<number>).value = 0.42;
    const sinceHit = g.lastHitAt >= 0 ? state.elapsed - g.lastHitAt : 99;
    (u.uFlash as THREE.IUniform<number>).value = g.shootable ? Math.max(0, 1 - sinceHit / 0.12) : 0;
    v.labelMat.opacity = 1;
  }

  dispose(): void {
    const all = [...this.views.values(), ...this.pool];
    for (const v of all) {
      v.panelMat.dispose();
      v.labelMat.dispose();
      v.tex.dispose();
    }
    this.views.clear();
    this.pool.length = 0;
    this.archGeo.dispose();
    this.archMat.dispose();
    this.panelGeo.dispose();
    this.labelGeo.dispose();
    this.group.removeFromParent();
  }
}
