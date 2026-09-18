---
name: orchestrator
description: Chef d'orchestre autonome. Use when planning, splitting a spec into tasks, routing to other skills, tracking PROGRESS.md, unblocking, reviewing and delivering. Toujours actif en fond.
---

# Skill Orchestrator — Autonomous Delivery Loop

## 1. Rôle / Role
Tu es le chef d'orchestre interne. Même quand tu exécutes une tâche frontend ou backend, cette skill reste active pour : découper, ordonner, contrôler, livrer.

## 2. Quand l'utiliser / When to use
- Toujours en premier et en dernier.
- À chaque nouvelle EPIC/task, à chaque blocage, avant chaque livraison.

## 3. Workflow (obligatoire)

### 3.1 PLAN
- Lire le brief + `PLAN.md` (ou créer).
- Découper : EPIC → Task (≤2h chacune) → mapper skill (via `orchestrator/ROUTER.md`).
- Format task :
  ```markdown
  - [ ] T03 — Auth API login — skill: backend-node — files: apps/api/src/routes/auth.ts — done-when: checklist backend-node §5 OK
  ```
- Ordre imposé : `packages/shared` → backend → frontend → agents-ai → security → qa.

### 3.2 BUILD
- Avant chaque task : annoncer `[SKILL USED] skills/<nom>/SKILL.md — Task: <titre>`.
- Lire le SKILL.md cible en entier, appliquer conventions + patterns.
- Écrire code + log dans `PROGRESS.md` (1 ligne par task).

### 3.3 SELF-REVIEW (bloquant)
Pour chaque task, recopier la checklist du skill cible dans `PROGRESS.md` et cocher avec preuves (fichier:ligne ou commande).
Interdit de passer à la task suivante si checklist < 100%.

### 3.4 FIX LOOP (max 3 essais)
1. Reproduire (commande + log).
2. Fix minimal selon skill.
3. Re-run checklist.
Après 3 échecs : marquer `BLOCKED` dans PROGRESS.md, passer à task indépendante, revenir plus tard.

### 3.5 HARDEN + DELIVER
- Lancer `skills/security` puis `skills/qa-devops` sur tout le scope.
- Vérifier Definition of Done (AGENTS.md §6).
- Finaliser `PROGRESS.md` : livré / comment tester / skills utilisés / dettes.

## 4. Artefacts imposés
- `PLAN.md`, `PROGRESS.md`, `DECISIONS.md` à la racine du livrable.
- `DECISIONS.md` format : `| Date | Décision | Skill source | Alternative rejetée |`.
- `PROGRESS.md` format :
  ```markdown
  ## T03 — Auth API — backend-node
  - Status: DONE / IN_PROGRESS / BLOCKED
  - Files: ...
  - Checklist: [x] zod validation ... (preuve)
  - Tests: npm run test -- auth.test.ts → PASS
  ```

## 5. Checklist orchestrator (à recopier avant livraison)
- [ ] Toutes tasks PLAN.md ont un statut (pas de vide)
- [ ] Chaque task cite son skill + preuves checklist
- [ ] Aucun BLOCKED sans explication + contournement
- [ ] DECISIONS.md à jour
- [ ] Security + QA passés (voir leurs checklists)
- [ ] README livrable + .env.example OK

## 6. Anti-patterns
- Sauter SELF-REVIEW "pour gagner du temps" → interdit.
- Demander à l'humain sans 3 tentatives loggées → interdit.
- Livrer avec TODO non documenté → interdit (tout TODO → entrée PROGRESS.md).
