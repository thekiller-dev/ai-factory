---
name: qa-devops
description: Quality + delivery gate. Use when testing, linting, typing, building, dockerizing, wiring CI, preparing deploy/preview.
---

# Skill QA-DevOps — Qualité et livraison

## 1bis. Quand l'utiliser / When to use
Use when testing, linting, building, dockerizing. Quand il faut valider, tester, livrer.

## 1. Rôle
Dernier rempart avant livraison. Aucun livrable sans vert complet.

## 2. Commandes standard (à adapter au workspace)
```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
npm run skills:validate
```

## 3. Niveaux de tests exigés
- Unit : logique métier (services, schemas, utils) — ex: vitest.
- Contract : schemas shared importés des 2 côtés (pas de drift).
- E2E/smoke minimal : 1 parcours critique (ex: signup→login→CRUD) via script ou Playwright si brief l'exige.
- Si brief sans tests explicites : au minimum unit sur chaque service + smoke build.

## 4. CI imposée (.github/workflows/validate.yml)
- job `skills-validate` : `npm run skills:validate`
- job `build-test` : lint + typecheck + test + build sur Node 20
- Interdit de merger rouge (documenter dans PROGRESS.md si contournement temporaire).

## 5. Docker / preview
- `apps/api/Dockerfile` multi-stage + non-root + `HEALTHCHECK`.
- `apps/web/Dockerfile` build statique + nginx ou équivalent.
- `.dockerignore` avec `node_modules`, `.env`, `dist`.

## 6. Checklist SELF-REVIEW (recopier dans PROGRESS.md)
- [ ] lint 0 erreur
- [ ] typecheck 0 erreur
- [ ] tests verts (coller résumé : X passed)
- [ ] build web + api OK
- [ ] skills:validate OK
- [ ] Dockerfile + .dockerignore présents si deploy demandé
- [ ] README livrable : `npm install && npm run dev` testé

## 7. Anti-patterns
- `// @ts-ignore` / `--no-verify` sans entrée DECISIONS.md → interdit.
- Test qui ne teste rien (`expect(true).toBe(true)`) → interdit.
- "Ça marche chez moi" sans log CI/commande → interdit.
