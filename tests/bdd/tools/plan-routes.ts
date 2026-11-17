// Authoring tool (NOT part of the BDD run). Derives each mission's winning
// keyboard lane schedule from the unit-test autopilot on the real
// deterministic engine, then checks it still wins when every keypress lands
// late (as a browser replay does) before writing tests/bdd/routes/<id>.json.
// Usage: npx vite-node tests/bdd/tools/plan-routes.ts
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { LEVELS, type LevelId } from "../../../src/game";
import { playAutopilot, playIdle, playSchedule } from "../../unit/helpers/autopilot";

const LATE_S = [0, 0.1, 0.2, 0.3];
const FRAME_DT = [1 / 60, 1 / 30, 1 / 10];

let failed = false;
for (const level of LEVELS) {
  const id: LevelId = level.id;
  const idle = playIdle(id);
  const auto = playAutopilot(id, { thinkEvery: 0.25 });
  const line = `${id}: idle → ${idle.status} at ${idle.elapsed}s; autopilot → ${auto.status} at ${auto.elapsed}s squad ${auto.squad}, ${auto.schedule.length} switches`;
  if (auto.status !== "won") {
    console.log(`${line} — NO WIN`);
    failed = true;
    continue;
  }
  const checks: string[] = [];
  let robust = true;
  for (const late of LATE_S) {
    for (const dt of FRAME_DT) {
      const shifted = auto.schedule.map((c) => ({ t: c.t + late, lane: c.lane }));
      const trace = playSchedule(id, shifted, dt);
      if (trace.status !== "won") {
        robust = false;
        checks.push(`late ${late}s dt ${dt.toFixed(3)} → ${trace.status} ${trace.elapsed}s`);
      }
    }
  }
  console.log(`${line}; late-key robustness ${robust ? "OK" : `FAILS: ${checks.join("; ")}`}`);
  if (!robust) failed = true;
  writeFileSync(
    join(import.meta.dirname, "..", "routes", `${id}.json`),
    `${JSON.stringify(
      {
        levelId: id,
        source: `playAutopilot(thinkEvery 0.25) on the real engine: win at ${auto.elapsed}s squad ${auto.squad}; replay late 0-0.3s at 10-60 fps ${robust ? "all win" : "NOT robust"}`,
        waypoints: auto.schedule.map((c) => ({ at: c.t, lane: c.lane })),
      },
      null,
      2,
    )}\n`,
  );
}
if (failed) process.exitCode = 1;
