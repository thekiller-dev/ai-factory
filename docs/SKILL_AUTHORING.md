# SKILL_AUTHORING — Comment créer un nouveau skill

1. Créer `skills/<nom>/SKILL.md` avec frontmatter :
```markdown
---
name: <nom-kebab>
description: Use when <condition claire>. Déclencheur FR + EN.
---
```
2. Sections imposées : Rôle, Quand l'utiliser, Stack/Structure, Patterns (avec exemples code), Checklist SELF-REVIEW (cases à cocher), Commandes, Anti-patterns.
3. Checklist = vérifiable (commande ou `fichier:ligne` ou `rg`).
4. Ajouter entrée dans `orchestrator/ROUTER.md` + `AGENTS.md §4`.
5. Lancer `npm run skills:sync && npm run skills:validate`.
6. Règle : 1 skill = 1 responsabilité. Si >300 lignes → splitter.
