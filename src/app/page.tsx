import { Dashboard } from "@/components/Dashboard";
import { LegacyStatusPanel } from "@/components/LegacyStatusPanel";
import { StatusBadge } from "@/components/StatusBadge";
import { StatusBadgeCompact } from "@/components/StatusBadgeCompact";
import { classifyMode } from "@/bugs/duplicate-condition";
import { publicHealthLabel } from "@/lib";

export default function HomePage() {
  return (
    <main>
      <img src="/fixture-logo.svg" alt="RepoDiet fixture" width="48" height="48" />
      <h1>RepoDiet Hard E2E Test</h1>
      <p>This route is protected and must remain alive.</p>
      <Dashboard />
      <LegacyStatusPanel />
      <StatusBadge text={publicHealthLabel()} />
      <StatusBadgeCompact text={classifyMode("review")} />
    </main>
  );
}
