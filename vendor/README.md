# vendor/ — Références externes (ne pas modifier, ne pas coder dedans)

> FR: Clones en lecture seule pour enrichir la factory. La source de vérité reste `skills/`.
> EN: Read-only clones to enrich the factory. Source of truth stays in `skills/`.

## Contenu
- `external/` : 20 repos clonés `--depth 1` (3,9G sur disque, **exclus de git** via .gitignore).
- `EXTERNAL_SKILLS_INDEX.md` : inventaire + mapping vers `skills/` internes (versionné).
- Ce README : versionné.

## Règle agent (obligatoire)
1. Toujours lire d'abord `skills/<domaine>/SKILL.md` interne.
2. Puis, si besoin de profondeur, lire la référence externe listée dans `EXTERNAL_SKILLS_INDEX.md` comme **complément**, jamais comme remplacement.
3. Citer les deux : `[SKILL USED] skills/frontend-react + vendor/external/anthropics-skills/skills/frontend-design`.

## Régénérer
```bash
# re-clone léger (liste dans EXTERNAL_SKILLS_INDEX.md § Sources)
cat vendor/EXTERNAL_SKILLS_INDEX.md | grep 'https://github.com'
```
