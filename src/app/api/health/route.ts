import { loadEmailPlugin } from "@/plugins/plugin-registry";

export async function GET() {
  const plugin = await loadEmailPlugin();
  return Response.json({ ok: true, plugin: plugin.getEmailPluginName() });
}
