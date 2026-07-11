import { access, readFile } from "node:fs/promises";

const requiredPaths = [
  "src/app/page.tsx",
  "src/app/layout.tsx",
  "src/app/loading.tsx",
  "src/app/api/health/route.ts",
  "middleware.ts",
  "src/plugins/plugin-registry.ts",
  "src/plugins/email-plugin.ts",
  "src/side-effects/register.ts",
  "src/public-api.ts",
  "src/generated/api-client.generated.ts",
  "src/config/runtime-hook.ts",
  "public/fixture-logo.svg",
  "migrations/001_keep_schema.sql",
  "scripts/fixture-cli.mjs",
  "fixture.config.json",
  ".env.example"
];

for (const path of requiredPaths) {
  await access(new URL(`../${path}`, import.meta.url));
}

const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
if (packageJson.bin?.["repodiet-fixture"] !== "./scripts/fixture-cli.mjs") {
  throw new Error("CLI package reference was damaged");
}
if (packageJson.exports?.["./public-api"] !== "./src/public-api.ts") {
  throw new Error("Public package export was damaged");
}

console.log(`safety contract passed for ${requiredPaths.length} protected/runtime files`);
