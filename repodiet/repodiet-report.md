# RepoDiet Cleanup Report

## Repository

- Owner/repo: velz-cmd/repodiet-e2e-test
- Branch: main
- URL: https://github.com/velz-cmd/repodiet-e2e-test
- Framework: Unknown JS/TS
- Package manager: npm

## Summary

- Duplicate clusters: 0
- Unused files: 0
- Unused dependencies: 0
- Orphan patterns: 0
- AI-slop signals: 0
- Safe candidates: 1

### Retained safe deletions

- `src/archive/OldDashboard.backup.tsx` — Backup/archive file with no inbound references and exact baseline hash match.

- Raw review findings: 0
- Unique review items: 0
- Do not touch protected items: 0

## Count semantics

- **Raw review findings** — total findings flagged `review_first` before path deduplication.
- **Unique review items** — deduplicated files/packages documented for patch review.
- **Do not touch** — protected framework, config, route, and runtime paths.

## Key findings

- No findings recorded.

## Patch policy

RepoDiet generated a conservative patch bundle.
No protected framework/runtime files were included in automatic delete operations.

## Next steps

1. Review Safe Candidates.
2. Apply cleanup patch.
3. Run regression checklist.
4. Re-run RepoDiet.
