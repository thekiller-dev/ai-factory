# Exemple concret — TODO SaaS (pour tester le système de bout en bout)

> Copie ce dossier en `MON_TODO_BRIEF.md` + `MON_TODO_SPEC.md` et envoie à un agent pour valider la factory.

## Brief envoyé à l'agent

```markdown
Lis AGENTS.md, orchestrator/BOOTSTRAP.md, skills/orchestrator/SKILL.md dans l'ordre.

Mission : Construire TODO SaaS avec auth email+password + CRUD tâches, dans apps/web + apps/api + packages/shared.

Mapping :
- orchestrator → plan + livraison
- design-system → tokens + ui/
- backend-node → POST /auth/signup, /auth/login, CRUD /tasks (Zod shared)
- frontend-react → LoginPage, TasksPage (react-hook-form + TanStack Query)
- security → audit auth + secrets
- qa-devops → lint/typecheck/test/build + Docker

Done = AGENTS.md §6. Crée PROGRESS.md + DECISIONS.md. Boucle jusqu'à vert complet.
```

## Résultat attendu (l'agent doit produire)
- `packages/shared/src/auth.ts + task.ts` (schemas Zod)
- `apps/api/src/routes/auth.routes.ts + tasks.routes.ts`
- `apps/web/src/pages/LoginPage.tsx + TasksPage.tsx`
- `PROGRESS.md` avec checklists cochées + preuves
- `npm run skills:validate && npm run typecheck && npm run test` verts
