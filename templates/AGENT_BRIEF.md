# Template AGENT_BRIEF (à copier en MON_PROJET_BRIEF.md)

> C'est CE fichier qu'on colle à l'agent. Il doit suffire à travailler en autonome.
> Message d'envoi : voir orchestrator/BOOTSTRAP.md (section humain).

```markdown
Lis AGENTS.md, orchestrator/BOOTSTRAP.md, skills/orchestrator/SKILL.md dans l'ordre.
Brief ci-dessous. Chaque besoin a son skill dans skills/. Utilise-les, contrôle-toi, boucle jusqu'à Done.
```

## 1. Mission (1 phrase)
Ex: Construire SaaS TODO avec auth email+password + CRUD + déployable Docker.

## 2. Spec source
- Fichier spec : ./MON_PROJET_SPEC.md (ou coller résumé ci-dessous)
- Résumé scope :
  - IN :
  - OUT :

## 3. Stack imposée
- Monorepo : apps/web (React+Vite+TS+Tailwind), apps/api (Node+Fastify+Zod), packages/shared (Zod schemas)
- DB : ...
- Auth : ...

## 4. Mapping besoins → skills (pré-rempli, agent doit suivre ROUTER.md si vide)
| Besoin | Skill |
|--------|-------|
| Plan + suivi + livraison | orchestrator |
| Design tokens + ui/ | design-system |
| Pages / composants | frontend-react |
| API / auth / DB | backend-node |
| Audit secrets/OWASP | security |
| Tests/CI/Docker | qa-devops |
| Chatbot/RAG (si applicable) | agents-ai |

## 5. Contraintes autonomie
- Ne poser aucune question sauf BLOQUANT CRITIQUE (3 tentatives loggées).
- Hypothèses autorisées : consigner dans DECISIONS.md.
- Tenir PROGRESS.md à jour à chaque task.

## 6. Definition of Done (rappel AGENTS.md §6)
- [ ] Checklists skills 100% avec preuves
- [ ] lint + typecheck + test + build verts
- [ ] security audit PASS
- [ ] README livrable + .env.example
- [ ] PROGRESS.md final

## 7. Livrables attendus (chemins)
- Code : apps/... packages/...
- Docs : PROGRESS.md, DECISIONS.md, PLAN.md, README livrable
- Commande de vérification : npm run lint && npm run typecheck && npm run test
```
