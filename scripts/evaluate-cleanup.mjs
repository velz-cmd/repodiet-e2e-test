import { access, readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";

const exists = async (path) => {
  try {
    await access(new URL(`../${path}`, import.meta.url));
    return true;
  } catch {
    return false;
  }
};

const results = [];
const dashboard = await readFile(new URL("../src/components/Dashboard.tsx", import.meta.url), "utf8");
results.push(["unused Clock import removed", !dashboard.includes("Clock")]);
results.push(["backup file deleted", !(await exists("src/archive/OldDashboard.backup.tsx"))]);
results.push(["confirmed unused file deleted", !(await exists("src/unused/confirmed-unused.ts"))]);
results.push(["empty module deleted", !(await exists("src/unused/empty-module.ts"))]);
results.push(["duplicate copy deleted", !(await exists("src/components/StatusCardCopy.tsx"))]);

const legacy = await readFile(new URL("../src/components/LegacyStatusPanel.tsx", import.meta.url), "utf8");
results.push(["duplicate caller migrated", legacy.includes('from "./StatusCard"')]);

const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
results.push(["unused left-pad dependency removed", !packageJson.dependencies?.["left-pad"]]);

const safety = spawnSync(process.execPath, ["scripts/verify-safety.mjs"], {
  cwd: new URL("..", import.meta.url),
  encoding: "utf8"
});
results.push(["all protected/runtime files preserved", safety.status === 0]);

const passed = results.filter(([, ok]) => ok).length;
for (const [label, ok] of results) {
  console.log(`${ok ? "PASS" : "FAIL"} ${label}`);
}
console.log(`RepoDiet cleanup score: ${passed}/${results.length}`);
process.exitCode = passed === results.length ? 0 : 1;
