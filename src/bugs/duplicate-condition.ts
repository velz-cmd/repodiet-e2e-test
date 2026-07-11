export function classifyMode(mode: string): string {
  if (mode === "safe") {
    return "automatic";
  }

  if (mode === "safe") {
    return "duplicate-condition";
  }

  return "manual-review";
}
