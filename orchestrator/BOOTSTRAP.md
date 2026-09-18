# BOOTSTRAP — Point d'entrée unique (humain + agent)

> FR: Comment transformer un cahier de charge en livraison autonome.
> EN: How to turn a spec into autonomous delivery.

## Pour l'HUMAIN (5 min)

1. Copier `templates/CAHIER_DE_CHARGE.md` → `MON_PROJET_SPEC.md`, remplir.
2. Copier `templates/AGENT_BRIEF.md` → `MON_PROJET_BRIEF.md`, remplir (ou demander à un agent : "Remplis AGENT_BRIEF depuis MON_PROJET_SPEC en suivant BOOTSTRAP § Pour l'agent").
3. Envoyer à l'agent le message suivant (copier-coller) :

```markdown
Lis AGENTS.md, orchestrator/BOOTSTRAP.md, skills/orchestrator/SKILL.md dans l'ordre.
Voici ton brief : <coller MON_PROJET_BRIEF.md>
Chaque besoin a son skill dans skills/. Utilise-les, contrôle-toi avec leurs checklists, boucle jusqu'à livraison complète.
Crée PROGRESS.md et DECISIONS.md et tiens-les à jour. Ne t'arrête pas avant Definition of Done (AGENTS.md §6).
```

## Pour l'AGENT (exécution obligatoire)

### Phase 0 — Intake (ne pas sauter)
- [ ] Lire AGENTS.md + ce BOOTSTRAP + skills/orchestrator/SKILL.md + ROUTER.md
- [ ] Lire le brief. Si brief incomplet (pas de scope, pas de stack, pas de critères succès) → créer `QUESTIONS.md` avec max 7 questions ciblées, puis **prendre hypothèses par défaut** (voir ci-dessous) et continuer. Ne pas bloquer.
- Hypothèses par défaut : React+Vite+TS+Tailwind / Node+TS+Fastify+Zod / pnpm / Prisma+Postgres si DB nécessaire.

### Phase 1 — Plan
- Créer `PLAN.md` : découper en EPICs → Tasks → mapper chaque task à 1+ skills (via ROUTER.md).
- Créer `PROGRESS.md` + `DECISIONS.md`.
- Estimer ordre : shared → backend → frontend → agents-ai → security → qa.

### Phase 2 — Build loop (voir skills/orchestrator)
Exécuter task par task, chaque task = PLAN→BUILD→SELF-REVIEW→FIX→LOG.

### Phase 3 — Hardening
- Passer `skills/security/SKILL.md` checklist complète.
- Passer `skills/qa-devops/SKILL.md` (lint/typecheck/test/build).

### Phase 4 — Deliver
- Vérifier Definition of Done AGENTS.md §6.
- Mettre à jour README livrable + PROGRESS.md final.
- Annoncer : scope livré, comment lancer, skills utilisés, risques résiduels.
