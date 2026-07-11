import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const pathExists = async (path) => {
  await access(new URL(path, root));
  return true;
};

test("protected framework and delivery files stay alive", async () => {
  const protectedPaths = [
    "src/app/page.tsx",
    "src/app/layout.tsx",
    "src/app/loading.tsx",
    "src/app/api/health/route.ts",
    "middleware.ts",
    "migrations/001_keep_schema.sql",
    ".github/workflows/ci.yml"
  ];

  for (const path of protectedPaths) {
    assert.equal(await pathExists(path), true, path);
  }
});

test("dynamic, side-effect, config, package-export and asset references stay alive", async () => {
  const requiredPaths = [
    "src/plugins/email-plugin.ts",
    "src/plugins/plugin-registry.ts",
    "src/side-effects/register.ts",
    "src/config/runtime-hook.ts",
    "src/public-api.ts",
    "src/generated/api-client.generated.ts",
    "public/fixture-logo.svg",
    "scripts/fixture-cli.mjs"
  ];

  for (const path of requiredPaths) {
    assert.equal(await pathExists(path), true, path);
  }

  const config = JSON.parse(await readFile(new URL("fixture.config.json", root), "utf8"));
  assert.equal(config.runtimeHook, "src/config/runtime-hook.ts");
});
