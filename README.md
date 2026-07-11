# RepoDiet Hard E2E Test Fixture

This repository is a controlled adversarial test for RepoDiet. It contains real cleanup opportunities plus false-positive traps that must stay alive.

## Required automatic outcomes

1. Remove the unused `Clock` import from `src/components/Dashboard.tsx`.
2. Delete `src/archive/OldDashboard.backup.tsx` after deletion proof and verification.
3. Delete `src/unused/confirmed-unused.ts` only when native unused-code evidence and the internal reference graph agree.
4. Delete `src/unused/empty-module.ts` only after safety checks.
5. Consolidate `StatusCardCopy.tsx` into `StatusCard.tsx`, update `LegacyStatusPanel.tsx`, then delete the copy.
6. Remove `left-pad` only when package.json and package-lock.json are both updated and install/build pass.

## Review-only outcomes

- `StatusBadge.tsx` and `StatusBadgeCompact.tsx` are near duplicates, not exact duplicates.
- `unused-helper.ts` is ordinary unreferenced code and should not be deleted without strong native proof.
- `orphan-a.ts` and `orphan-b.ts` form an orphan island and require strong graph proof.
- `duplicate-condition.ts` contains a deterministic-looking issue, but automatic bug repair requires a registered rule and verification.

## Must never be deleted

- Next.js page, layout, loading and API route files.
- `middleware.ts`.
- Dynamically imported plugin files.
- Side-effect-only registration module.
- Config-referenced runtime hook.
- Package-exported public API.
- Generated source.
- Public asset.
- Migration.
- Package-script and CLI files.
- CI workflow and `.env.example`.

## Baseline verification

```bash
npm ci
npm run typecheck
npm test
npm run verify:safety
npm run check:config
npm run build
```

## Evaluate a RepoDiet cleanup branch

```bash
npm run evaluate:cleanup
```

The evaluator checks the expected edit, deletions, duplicate migration, dependency cleanup and preservation of protected/runtime files.
