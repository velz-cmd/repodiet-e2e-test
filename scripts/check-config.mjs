import { access, readFile } from "node:fs/promises";

const config = JSON.parse(await readFile(new URL("../fixture.config.json", import.meta.url), "utf8"));

for (const path of Object.values(config)) {
  await access(new URL(`../${path}`, import.meta.url));
}

console.log("config references are alive");
