import { CheckCircle } from "lucide-react";
import { StatusCard } from "./StatusCard";

export function Dashboard() {
  return (
    <main>
      <h1>RepoDiet E2E Fixture</h1>
      <CheckCircle aria-label="healthy" />
      <StatusCard title="Repository" value="Ready" />
    </main>
  );
}
