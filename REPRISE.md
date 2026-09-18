# REPRISE — État exact au 2026-09-18 (à lire par le prochain chat)

## 1. Où
- Repo : `/home/elton/ai-factory-monorepo` (28M, git propre, 3 commits)
- Stack : React+Vite+TS+Tailwind / Node+Fastify+Zod / pnpm — instructions FR+EN
- Compat : Claude Code, Codex, OpenCode, Cursor (`npm run skills:sync`)

## 2. Commits
- `f342b25` factory initiale (7 skills + workflow BOOTSTRAP/ROUTER/AGENTS)
- `3aa5fe8` index des 20 repos externes (puis clones supprimés)
- `d0f57a7` extraction curée : `library/` 18M, 127 SKILL.md (HEAD)

## 3. Structure actuelle
- `skills/` (7, loi interne) : orchestrator, frontend-react, backend-node, security, agents-ai, qa-devops, design-system
- `library/` (curé, complément) : 00-orchestration / 01-frontend-design / 02-backend-docs / 03-agents-ai / 04-qa-debug / 05-architecture (+ README.md)
- `orchestrator/` : BOOTSTRAP.md + ROUTER.md (pointe vers library/)
- `vendor/` : README.md + EXTERNAL_SKILLS_INDEX.md (archive, clones supprimés)
- `templates/` : CAHIER_DE_CHARGE.md + AGENT_BRIEF.md
- `apps/web`, `apps/api`, `packages/shared`, `docs/`, `scripts/` (sync + validate)

## 4. Règles à respecter (rappel AGENTS.md)
- `skills/` d'abord, `library/` ensuite, citer `[SKILL USED]`.
- Boucle PLAN→BUILD→REVIEW→FIX→SECURITY→QA→DELIVER. `skills:validate` doit rester vert.

## 5. Phrase à coller au prochain chat (copier-coller tel quel)
```markdown
Reprends le projet dans /home/elton/ai-factory-monorepo (lis REPRISE.md, AGENTS.md, orchestrator/ROUTER.md, library/README.md).
Historique git : d0f57a7 HEAD (library/ 127 skills), 3aa5fe8, f342b25.
Vérifie avec `git log --oneline -3 && git status --short && node scripts/validate-skills.mjs`, puis attends mes instructions.
```
