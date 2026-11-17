// Mission visual treatments for the "Tin-Toy Tidewatch" seaside vinyl-toy diorama.
// Values follow docs/art-direction.md. Every colour lives
// here so the three missions stay one consistent family.

export type BiomeId = "coastal" | "port" | "dusk";

export interface Theme {
  biome: BiomeId;
  skyTop: number;
  skyMid: number;
  skyHorizon: number;
  fog: number;
  fogNear: number;
  fogFar: number;
  hemiSky: number;
  hemiGround: number;
  hemiIntensity: number;
  sunColor: number;
  sunIntensity: number;
  /** Sun position offset from the camera target. */
  sunOffset: [number, number, number];
  rimColor: number;
  rimIntensity: number;
  rimOffset: [number, number, number];
  road: number;
  paint: number;
  kerb: number;
  kerbStripe: number;
  waterShallow: number;
  waterDeep: number;
  foam: number;
  sand: number;
  grass: number;
  rock: number;
  pillar: number;
  accent: number;
  accent2: number;
  lampGlow: number;
  exposure: number;
}

export const SQUAD = {
  cobalt: 0x2f6bff,
  helmet: 0x2456d6,
  legs: 0x2447b8,
  scarf: 0xffc93c,
  webbing: 0xf4e9d0,
  boots: 0x2b3350,
  blaster: 0x39424e,
  tip: 0xff8a3d,
  skin: 0xffd2a8,
  visor: 0x9fe8ff,
} as const;

export const SOGGY = {
  body: 0x35b58a,
  belly: 0x7eddb0,
  shade: 0x1f6f6a,
  coral: 0xff6b5e,
  white: 0xffffff,
  pupil: 0x1b1f2a,
  snorkel: 0xffc93c,
  mask: 0x8fe3ff,
  hat: 0xf6e3b4,
  shorts: 0x7a5cff,
  bossTrim: 0xff8a3d,
} as const;

const COASTAL: Theme = {
  biome: "coastal",
  skyTop: 0x4fb4f0,
  skyMid: 0x9bd7f7,
  skyHorizon: 0xd8f3ff,
  fog: 0xd8f3ff,
  fogNear: 62,
  fogFar: 140,
  hemiSky: 0xbfe8ff,
  hemiGround: 0xf2d9a6,
  hemiIntensity: 0.75,
  sunColor: 0xffe2b0,
  sunIntensity: 2.9,
  sunOffset: [9, 16, 6],
  rimColor: 0x8fe3ff,
  rimIntensity: 0.6,
  rimOffset: [-8, 6, -14],
  road: 0xe9dcc3,
  paint: 0xfff6e0,
  kerb: 0xb9824f,
  kerbStripe: 0xf4e9d0,
  waterShallow: 0x3fd0c9,
  waterDeep: 0x1b8fb3,
  foam: 0xf4fffb,
  sand: 0xf3d9a4,
  grass: 0x8ccb5e,
  rock: 0xb7a99c,
  pillar: 0xe3d3b6,
  accent: 0xff8a3d,
  accent2: 0xe5483f,
  lampGlow: 0xfff3c4,
  exposure: 1.05,
};

const PORT: Theme = {
  biome: "port",
  skyTop: 0x9fc4da,
  skyMid: 0xc3dbe6,
  skyHorizon: 0xe6eef0,
  fog: 0xe6eef0,
  fogNear: 58,
  fogFar: 130,
  hemiSky: 0xdceaf2,
  hemiGround: 0xb9b2a6,
  hemiIntensity: 1.1,
  sunColor: 0xfff4e0,
  sunIntensity: 1.9,
  sunOffset: [-7, 18, 8],
  rimColor: 0xffd9a0,
  rimIntensity: 0.4,
  rimOffset: [8, 6, -14],
  road: 0x4a5562,
  paint: 0xffc93c,
  kerb: 0xc9ced3,
  kerbStripe: 0xf2b632,
  waterShallow: 0x2f8fa3,
  waterDeep: 0x1f6a80,
  foam: 0xeef8fa,
  sand: 0xcfc6b4,
  grass: 0x8cbf6e,
  rock: 0x9b9a98,
  pillar: 0xc9ced3,
  accent: 0xe8604f,
  accent2: 0x2fa59a,
  lampGlow: 0xfff3c4,
  exposure: 1.05,
};

const DUSK: Theme = {
  biome: "dusk",
  skyTop: 0x5b4b8a,
  skyMid: 0xf08a6b,
  skyHorizon: 0xffc9a3,
  fog: 0xffc9a3,
  fogNear: 55,
  fogFar: 125,
  hemiSky: 0xb9a6e0,
  hemiGround: 0xe9a77a,
  hemiIntensity: 1.05,
  sunColor: 0xffb98a,
  sunIntensity: 2.0,
  sunOffset: [11, 9, 5],
  rimColor: 0xffd27a,
  rimIntensity: 1.1,
  rimOffset: [-6, 5, -16],
  road: 0xb89474,
  paint: 0xffe9c2,
  kerb: 0x7d5234,
  kerbStripe: 0xffd27a,
  waterShallow: 0xf29b7a,
  waterDeep: 0x54508f,
  foam: 0xfff0e2,
  sand: 0xf0c99a,
  grass: 0x6fa860,
  rock: 0x8f7c8c,
  pillar: 0x8a5d3d,
  accent: 0xffd27a,
  accent2: 0x6ee7a0,
  lampGlow: 0xffd27a,
  exposure: 1.0,
};

export const THEMES: Record<BiomeId, Theme> = { coastal: COASTAL, port: PORT, dusk: DUSK };

/** Map an arbitrary level id / biome identifier to one of the three treatments. */
export function biomeFor(levelOrBiome: string): BiomeId {
  const s = levelOrBiome.toLowerCase();
  if (/port|dock|harbo|industr|clang|crane|container/.test(s)) return "port";
  if (/dusk|extract|sunset|night|jetty|last/.test(s)) return "dusk";
  return "coastal";
}
