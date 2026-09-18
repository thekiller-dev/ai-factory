# WORKFLOW — Boucle autonome détaillée (complément BOOTSTRAP)

## États agent
`INTAKE → PLAN → BUILD(task) → REVIEW(task) → HARDEN → QA → DELIVER`

## Règles de transition
- Pas de BUILD sans PLAN.md + mapping skill.
- Pas de task suivante sans REVIEW 100%.
- Pas de DELIVER sans HARDEN (security) + QA verts.
- BLOCKED → log + switch task, jamais d'arrêt global.

## Exemple PROGRESS.md minimal
```markdown
# PROGRESS — <Projet>
## T01 — shared schemas — backend-node
- Status: DONE
- Files: packages/shared/src/auth.ts
- Checklist: [x] zod ... (src/auth.ts:12)
- Tests: npm run test -- shared → PASS 6/6
## Security audit — 2026-09-18
- Secrets scan: PASS
- npm audit: PASS
- Risques: aucun
```

## Message type à l'agent (copier-coller)
```markdown
Lis AGENTS.md, orchestrator/BOOTSTRAP.md, skills/orchestrator/SKILL.md dans l'ordre.
Voici ton brief : <coller AGENT_BRIEF.md + SPEC>
Chaque besoin a son skill dans skills/. Utilise-les, contrôle-toi avec leurs checklists, boucle jusqu'à livraison complète.
Crée PROGRESS.md et DECISIONS.md et tiens-les à jour. Ne t'arrête pas avant Definition of Done (AGENTS.md §6).
```
