# RepoDiet E2E Test Fixture

This repository intentionally contains controlled cleanup cases for validating RepoDiet end to end.

## Expected findings

- `src/components/Dashboard.tsx`: unused `Clock` import; safe automatic edit.
- `src/archive/OldDashboard.backup.tsx`: obvious unreferenced backup file; safe deletion candidate.
- `src/lib/unused-helper.ts`: unreferenced helper; review-first, not automatic deletion.
- `src/components/StatusCard.tsx` and `StatusCardCopy.tsx`: equivalent duplicate UI logic; review-first.
- `src/lib/orphan-a.ts` and `src/lib/orphan-b.ts`: internally connected orphan subgraph; review-first.
- `left-pad`: intentionally unused dependency; review-first unless package removal is fully validated.
- `src/app/page.tsx` and `src/app/layout.tsx`: protected framework entry files and must never be deleted.

## Baseline checks

```bash
npm install
npm run typecheck
npm run build
```

The project is intended to pass these checks before cleanup and after validated safe cleanup.
