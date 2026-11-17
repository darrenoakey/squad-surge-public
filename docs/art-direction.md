# Squad Surge — art bible

Direction name: **Tin-Toy Tidewatch**. A sunlit seaside toy diorama: chunky vinyl troopers hold a causeway against a silly, soggy horde. Bright, warm, readable, funny. Never dark, never neon, never gory.

All coordinates are native engine units from `src/game/types.ts` (lanes x = -3.2 / 0 / +3.2, `SQUAD_Z` 7, `SPAWN_Z` -42, `ROAD_HALF_WIDTH` 4.8, enemies travel toward +z). No offset adapter is needed.

## Verification status

- Camera framing numbers below are computed by projecting the listed points through the stated camera; they are exact for a 3:5 viewport.
- Colours, light intensities, material and motion values are authored targets. They have not been seen rendered and should be tuned in the browser.
- The key art was checked by pixel statistics (see Key art).

## Three rules that win every argument

1. **Readability first.** Squad is cobalt, enemies are sea-green, good gates are azure, bad gates are coral-red. Nothing else in the world may use those four hues at high saturation inside the road.
2. **Toy, not war.** Everything is rounded, bevelled and slightly too big. Things pop, bounce and scatter into cubes. No blood, no corpses, no realistic weapons.
3. **The road is the stage.** Scenery lives outside x = ±4.8 and above the horizon band. Inside the road only gameplay objects, their shadows and lane paint are allowed.

## Palette

| Role         | Hex                    | Use                          |
| ------------ | ---------------------- | ---------------------------- |
| Squad cobalt | `#2F6BFF`              | uniform torso, arms          |
| Squad helmet | `#2456D6`              | helmet                       |
| Squad navy   | `#2447B8`              | legs                         |
| Sunflower    | `#FFC93C`              | scarf, highlights, UI accent |
| Cream        | `#F4E9D0`              | webbing, backpack            |
| Boot         | `#2B3350`              | boots, gloves                |
| Blaster      | `#39424E`              | weapon body                  |
| Toy tip      | `#FF8A3D`              | muzzle tip, buoys, barrels   |
| Enemy body   | `#35B58A`              | all Soggies                  |
| Enemy belly  | `#7EDDB0`              | belly, face patch            |
| Enemy shade  | `#1F6F6A`              | limbs, toon shadow tint      |
| Enemy accent | `#FF6B5E`              | swim rings, hats             |
| Boss shell   | `#D9483B`              | boss armour                  |
| Boss body    | `#F28C6A`              | boss flesh                   |
| Gate good    | `#2EA8FF`              | tone `good`                  |
| Gate bad     | `#FF5247`              | tone `bad`                   |
| Gate mixed   | `#FFB020`              | tone `mixed`                 |
| Bullet       | `#FFE066`              | tracer, white core `#FFFFFF` |
| Telegraph    | `#FF5247` on `#FFF6E0` | warnings                     |

Enemy eyes are plain white discs with a navy pupil. Never red eyes.

## Camera

| Setting         | Value                                                             |
| --------------- | ----------------------------------------------------------------- |
| Type            | `PerspectiveCamera`, vertical FOV 44, near 0.5, far 400           |
| Position        | (0, 14, 29.5)                                                     |
| Look-at         | (0, 0, -11.8)                                                     |
| Viewport aspect | 3:5 portrait (width / height = 0.6)                               |
| Follow          | camera.x and look-at.x = squad x × 0.2, critically damped, 250 ms |
| Roll            | never                                                             |

Computed framing at 3:5 (percent from left / top):

| World point                   | Screen position                                      |
| ----------------------------- | ---------------------------------------------------- |
| Horizon                       | y 8%                                                 |
| Far vista ground, z -140      | y 19%                                                |
| Spawn line, z -42             | y 33%, road spans x 36–64%                           |
| Mid field, z -15              | y 47%                                                |
| Squad front row, z 7          | y 79%, road spans x 12–88%, lanes at x 24 / 50 / 76% |
| Despawn, z 12                 | y 95%                                                |
| Lighthouse top (14, 16, -120) | x 71%, y 6%                                          |

Consequences:

- Gameplay occupies y 33–95%. The top third is vista and sky and is the safe band for HUD.
- Formation depth budget: rows may extend behind the front row to z ≤ 11.5 only, or they leave the frame.
- If the viewport is wider than 3:5, keep vertical FOV and let side scenery fill. If narrower than 0.5, raise FOV until the road edges at z 7 stay inside x 6–94%.

**Attract mode** uses the same camera plus a slow yaw sway of ±4° over 14 s and a 0.3 unit vertical drift. The diorama must already be alive: squad weaving lanes, firing, enemies arriving.

## Rendering setup

- Output sRGB, `ACESFilmicToneMapping`, exposure 1.05.
- Shadows `PCFSoftShadowMap`, one 2048 map from the sun. Shadow camera orthographic: x ±9, z +14 to -46, bias -0.0004, normalBias 0.03. Fit it to the road, not the vista.
- Every character also gets a soft dark blob under its feet (radial alpha disc, 0.35 opacity, radius = collision radius × 1.1). This is what grounds small units at distance; do not rely on the shadow map for it.
- Fog is linear and always equals the horizon colour. Vista props beyond z -90 use `fog: false` and are pre-tinted toward the horizon colour instead.
- No bloom required. If added: threshold 0.9, strength 0.25, only so tracers and gate numerals glow slightly.

### Materials

- `MeshToonMaterial` for characters and props, with a shared 4-step gradient map `[0.55, 0.78, 0.92, 1.0]`, `NearestFilter`. The dark step is deliberately light: shadows stay coloured, never grey-black.
- No outlines. Separation comes from value contrast, rim light and blob shadows.
- Road, water, terrain: `MeshStandardMaterial` roughness 0.9, metalness 0 (water roughness 0.25).
- Bullets, muzzle flashes, gate glow, telegraphs: `MeshBasicMaterial`, `toneMapped: false`.
- Geometry language: capsules, rounded boxes (bevel 0.06–0.1), spheres, short cylinders. Minimum feature size 0.12 units; anything smaller disappears at spawn distance.

### Performance shape

- One `InstancedMesh` per body part per unit type; animate with per-instance matrices on the CPU.
- Rendered squad cap 40 figures. Above 40 (sim cap is 60), keep 40 figures and show the true count in the squad badge.
- Enemy budget about 300 instances; particles about 600 instanced cubes, pooled.

## Level presets

Only light, sky, ground and props change between levels. Characters, gates and effects keep the same materials.

### `coastal-bridge` — Sunny Causeway (golden afternoon)

| Item                        | Value                                             |
| --------------------------- | ------------------------------------------------- |
| Sky top / horizon and fog   | `#4FB4F0` / `#D8F3FF`, fog 62–140                 |
| Hemisphere                  | sky `#BFE8FF`, ground `#F2D9A6`, 0.9              |
| Sun                         | `#FFE2B0`, 2.6, from target + (9, 16, 6)          |
| Rim                         | `#8FE3FF`, 0.6, from (-8, 6, -14)                 |
| Road / paint / kerb         | concrete `#E9DCC3` / `#FFF6E0` / timber `#B9824F` |
| Water shallow / deep / foam | `#3FD0C9` / `#1B8FB3` / `#F4FFFB`                 |
| Sand / grass                | `#F3D9A4` / `#8CCB5E`                             |

Props: lamp posts every 12 units, orange marker buoys `#FF8A3D`, sandbag stacks and red-white barricades on the kerbs, palm islets, two sailboats, red-and-white lighthouse `#E5483F` at (14, 0, -120), five chunky low-poly clouds.

### `industrial-port` — Port Clang (bright overcast)

| Item                      | Value                                                                         |
| ------------------------- | ----------------------------------------------------------------------------- |
| Sky top / horizon and fog | `#9FC4DA` / `#E6EEF0`, fog 58–130                                             |
| Hemisphere                | sky `#DCEAF2`, ground `#B9B2A6`, 1.1                                          |
| Sun                       | `#FFF4E0`, 1.9, from target + (-7, 18, 8)                                     |
| Rim                       | `#FFD9A0`, 0.4, from (8, 6, -14)                                              |
| Road / paint / kerb       | asphalt `#4A5562` / yellow `#FFC93C` / concrete `#C9CED3` with hazard stripes |
| Water shallow / deep      | `#2F8FA3` / `#1F6A80`                                                         |

Props: container stacks in `#E8604F`, `#2FA59A`, `#F2B632`, `#2E4A7D` flanking the road, forklifts, bollards, red gantry cranes on the horizon, gulls. Dark asphalt makes the cobalt squad and green enemies read even more strongly; keep containers desaturated by 15% beyond z -60.

### `dusk-extraction` — Last Light Jetty (sunset)

| Item                            | Value                                                              |
| ------------------------------- | ------------------------------------------------------------------ |
| Sky top / mid / horizon and fog | `#5B4B8A` / `#F08A6B` / `#FFC9A3`, fog 55–125                      |
| Hemisphere                      | sky `#B9A6E0`, ground `#E9A77A`, 0.75                              |
| Sun                             | `#FF9E5E`, 2.8, low, from target + (11, 8, 2)                      |
| Rim                             | `#FFD27A`, 0.9, from (-6, 5, -16)                                  |
| Road / paint / kerb             | timber planks `#A9744B` / `#FFE9C2` / rope-wrapped posts `#7A5236` |
| Water shallow / deep            | `#F29B7A` / `#54508F`                                              |

Props: warm string lights `#FFD27A` (unlit material) between posts, crates, lobster pots, a rescue boat with a green lamp `#6EE7A0` at the far end as the goal. Long shadows fall across the lanes; cap shadow darkness so enemies never drop below 40% value.

## Characters

### Trooper (squad)

- 1.3 units tall, about 2.3 heads. Helmet is the widest part (0.52 wide). Capsule torso, stub legs, mitten hands, backpack, scarf tail that trails when running.
- Formation: staggered rows behind z 7, spacing 0.62 in x and 0.7 in z, width follows `player.halfWidth`. Front row centre figure carries a small sunflower pennant so the squad centre is always findable.
- Run cycle 3.2 Hz, bob 0.06, leg swing ±35°, arms hold blaster forward. Each instance gets a random phase offset.
- Fire: 0.05 recoil kick for 60 ms, star-shaped muzzle flash 70 ms.
- Lane change: render `player.x` directly. Bank the group 14° toward `player.vx`, rear rows lag 25 ms per row, two dust puffs at the outside feet.
- Join: drop from y 2, scale 0 → 1.15 → 1 over 260 ms, azure ring expands on the ground.
- Loss: trooper pops into 6 cobalt cubes and the helmet bounces away. Squad flashes white for 80 ms (`player.lastHurtAt`).

### Weapons (visible on troopers and as tracers)

| `WeaponId` | Held model                | Tracer                                                           |
| ---------- | ------------------------- | ---------------------------------------------------------------- |
| `rifle`    | stubby blaster            | yellow bolt 0.5 long                                             |
| `smg`      | short twin-barrel         | thin fast dashes, slightly paler                                 |
| `shotgun`  | wide flared muzzle        | fan of fat short pellets                                         |
| `lancer`   | long rail with azure fins | long azure-white beam bolt 1.4 long (pierces)                    |
| `rocket`   | shoulder tube             | chunky orange-nosed rocket with puff trail, cube-burst explosion |

### Enemies — "Soggies" (`EnemyKind`)

| Kind      | Read at a glance               | Build and motion                                                                                                                                                             |
| --------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `walker`  | small green pear               | 1.2 tall, arms forward and floppy, 1.6 Hz shamble with side sway. Three accessory variants: coral swim ring, snorkel, sun hat.                                               |
| `runner`  | lean and tilted                | 1.3 tall, leaning 20° forward, yellow headband, 3.4 Hz sprint, small dust trail.                                                                                             |
| `flanker` | sideways crab-scuttler         | low and wide (0.9 tall, 1.1 wide), orange claws, faces its velocity (`vx`), scuttles at 5 Hz. Always preceded by a `flank` telegraph.                                        |
| `brute`   | big barrel-chested lump        | 2.1 tall, tiny head, life-ring armour, slow 1.0 Hz stomp with 0.04 camera trauma per step inside z > -10. Shows an HP ring above its head.                                   |
| `barrel`  | rolling hazard, not a creature | orange drum `#FF8A3D` with a white hazard band, rolling toward the squad, wobbling. Flashes faster as it nears. Explodes in orange and cream cubes on the `explosion` event. |

- Hit feedback (`lastHitAt`): 60 ms white flash and squash to 0.85 height.
- Death (`kill` event): inflate to 1.25 for 60 ms, then burst into 6–8 body-coloured cubes with gravity; the accessory bounces off separately. Score popup in Barlow Condensed rises 0.8 units.

### Bosses (`BossSnapshot`, spans most of the road)

- Level 1 **Buoy King**: hermit crab wearing a rusty red channel buoy. Level 2 **Crane Claw**: crab in a dented shipping container. Level 3 **Tide Mother**: jellyfish-crowned brute with a lantern.
- About 5 units tall, 7 wide. At z -30 it occupies y 28–38% of the screen, well clear of the squad.
- `advancing`: heavy waddle. `siege`: planted, slamming lanes. `enraged`: shell tint shifts toward `#FF5247`, steam puffs, speed lines. `dead`: three staggered bursts, then one large cube shower and a 250 ms slow-motion beat.
- Boss health bar belongs to the HUD, not world space.

## Gates and telegraphs

- A gate is a toy arch one lane wide: posts radius 0.12, height 2.6, striped caps, with a translucent panel 2.9 wide × 2.4 tall (opacity 0.42) in the tone colour. Slow upward-scrolling chevrons for `good`, downward for `bad`, split two-colour panel for `mixed`.
- `label` is drawn huge and white with a navy 0.08 outline on a canvas texture (Barlow Condensed 800). `detail` sits below at 40% of the size. At spawn distance the label must still be about 4% of viewport height: make the numeral 1.5 units tall.
- Shootable gates: the panel pulses on `lastHitAt` and the numeral ticks up with a 1.12 scale pop on `gateGrow`.
- Passing a gate (`gate` event): the chosen panel shatters into tone-coloured shards; the other gates of that `rowId` fade out in 200 ms.
- Telegraphs are flat decals on the road, never floating UI:
  - `flank`: coral chevrons sweeping in from `side` across the target lane, plus an edge arrow at the road kerb.
  - `rush`: coral lane stripe pulsing along the whole lane with forward chevrons.
  - `slam`: a coral ring that shrinks to the impact size as `remaining` reaches zero.
    Pulse rate rises from 2 Hz to 6 Hz as `remaining / duration` falls.

## Effects and camera feel

- Particles are small rounded cubes, never soft sprites. Dust is cream, sparks are sunflower, water splashes are foam-white.
- Screen shake is trauma-based, offset = trauma² × 0.18 units, decays in 0.4 s. Sources: boss slam 0.6, explosion 0.5, squad loss 0.3. Ordinary kills never shake.
- Hit-stop: 40 ms on boss phase change only.
- Water: two scrolling normal layers and a foam line where it meets the causeway. Road scrolls at `SCROLL_SPEED`; lane paint dashes are 2 units long with 2 unit gaps so speed is legible.
- Respect `prefers-reduced-motion`: no shake, no camera sway, no hit-stop.

## UI — ink on paper

Feel: a printed field manual crossed with a nautical chart. Light, warm, typographic.

| Token                             | Hex                                           |
| --------------------------------- | --------------------------------------------- |
| paper                             | `#F6EFE2`                                     |
| paper-deep                        | `#EDE3D0`                                     |
| card                              | `#FFFBF2`                                     |
| ink                               | `#14233F`                                     |
| ink-soft                          | `#4A5A78`                                     |
| rule                              | `#D9CDB6`                                     |
| azure / coral / sunflower / amber | `#2EA8FF` / `#FF5247` / `#FFC93C` / `#FFB020` |

- Type, bundled locally via `@fontsource`: **Barlow Condensed** 700/800, uppercase, tracking 0.04em, for titles, labels and every numeral (tabular figures). **Inter** 400/600 for body at 14–15 px.
- Desktop layout (≥ 1100 px): three columns `1fr | auto | 1fr`, 24 px page padding, 32 px gaps.
  - Centre: the 3:5 viewport, height `100vh - 48px`, radius 28 px, 10 px card-coloured frame, 1 px rule border, shadow `0 30px 60px -20px rgba(20,35,63,.35)`.
  - Left rail (max 360 px): mission number, name, two-line brief, tradeoff teaser, threat list, three mission cards.
  - Right rail (max 320 px): squad count as the largest numeral on the page, weapon card, kills, score, multiplier, progress, controls legend with keycaps.
- Below 1100 px the rails collapse into a bottom sheet and the viewport fills the height.
- In-viewport HUD stays in the top 30%: a 6 px ink progress track with wave ticks and a boss pip, score top-left, pause top-right. HUD cards are card colour at 92% opacity, 14 px radius, no blur.
- Primary button: sunflower pill, ink text, 56 px tall, 4 px ink bottom edge that depresses 3 px on press.
- Motion: 180 ms ease-out; numerals pop to 1.12 scale for 120 ms on change.
- Result screens: a paper "after-action card" slides over the viewport; won uses azure stamp, lost uses coral stamp. Stats come from real state only.

## Key art

`public/art/key-art-menu.jpg` — 1920 × 1080, generated once for the menu.

- Not viewed by eye. Pixel statistics show calm sky and sea over x 0–45%, y 0–45%; cobalt concentrated along y 50–67%, strongest at x 75–83%; red and coral mass at x 60–90%, y 5–45%; a busy bottom third. OCR found no legible words.
- Use: full-bleed page background in the menu state only, `center / cover`, crossfading to plain paper over 400 ms on Deploy.
- Title in DOM text, inside x 4–42%, y 6–38%, ink colour (5.1:1 against the measured sky `#4E9BC7`). Never bake text into the image.
- Add a paper gradient rising from the bottom edge to 45% height so menu cards sit on paper.
- Drop the image below 1100 px width.
- Prompt used: squad of five chunky toy troopers from behind in cobalt and sunflower, charging down a coastal causeway at green beach-tourist zombies, buoy-shelled crab boss and lighthouse in haze, golden-hour light, upper-left kept clear.

## Do not

- No dark or neon sci-fi framing, no glass blur panels, no gradients on black.
- No grey-black shadows, no outlines, no realistic firearms, no gore.
- No scenery inside the road, no saturated cobalt, sea-green, azure or coral-red in scenery near the road.
- No world-space text other than gate labels, brute HP rings and score popups.
