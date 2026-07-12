# Cursor Cleanup Prompt

You are cleaning a JavaScript/TypeScript repo using RepoDiet findings.

## Rules
- Do not delete framework routes, layouts, API routes, config files, env files, lockfiles, or public assets without confirmation.
- Start with safe candidates only, then handle unique review items separately.
- For unique review items, inspect imports and runtime usage before changing.
- After every cleanup batch, run lint and build.
- Preserve app behavior.

## Repo
- URL: https://github.com/velz-cmd/repodiet-e2e-test
- Branch: main
- Framework: Unknown JS/TS
- Package manager: npm

## Findings summary
- Duplicate clusters: 0
- Unused files: 0
- Unused dependencies: 0
- Orphan patterns: 0
- AI-slop signals: 0
- Safe candidates: 1
- Raw review findings: 0
- Unique review items: 1
- Do not touch protected items: 0

## Safe candidates
- `src/archive/OldDashboard.backup.tsx` — Backup/archive file with no inbound references and exact baseline hash match.

## Unique review items
- `src/components/Dashboard.tsx` — Import for "Clock" is not used in src/components/Dashboard.tsx.

## Do not touch
- (none)

## Task
Create a conservative cleanup PR that removes only safe files first, then proposes review changes separately.
