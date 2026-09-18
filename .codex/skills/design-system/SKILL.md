---
name: design-system
description: Visual consistency gate. Use before any UI work, when creating tokens, themes, shared components, or reviewing visual consistency and a11y.
---

# Skill Design-System — Cohérence visuelle

## 1bis. Quand l'utiliser / When to use
Use before any UI work, when creating tokens, themes. Quand le brief parle de palette, typo, thème, Figma.

## 1. Source de vérité
- `packages/shared/src/tokens.ts` (couleurs, espacements, radius) + `apps/web/src/index.css` (variables Tailwind).
- Aucune couleur/typo/spacing en dur dans composants. Toujours token ou classe utilitaire mappée.

Exemple :
```ts
// packages/shared/src/tokens.ts
export const tokens = { color: { primary: '#4F46E5', ink: '#111827' }, radius: { md: '12px' } } as const;
```

## 2. Workflow
1. Lire brief section UI / maquettes. Extraire palette/typo.
2. Créer/mettre à jour tokens + thème Tailwind.
3. Créer `components/ui/` (Button, Input, Card, Badge) avant pages métier.
4. Pages métier composent uniquement avec `ui/`.

## 3. Règles
- Typo : 2 familles max, échelle 12/14/16/20/24/32.
- Contraste WCAG AA (4.5:1 texte). Vérifier paires primary/ink sur fond.
- Dark mode seulement si brief l'exige (via CSS vars, pas de duplication).
- Icônes : lucide-react uniquement, pas d'emoji UI.
- Mobile-first : base 375px, breakpoints `md:`/`lg:`.

## 4. Checklist SELF-REVIEW
- [ ] Tokens créés/màj, 0 valeur en dur (`rg "#[0-9a-fA-F]{3,6}" apps/web/src/components || justifié`)
- [ ] `ui/` : Button/Input/Card existent et sont réutilisés
- [ ] Contraste AA vérifié (citer outil/mesure dans PROGRESS.md)
- [ ] Responsive 375px + 1280px vérifié
- [ ] A11y : labels, alt, focus, rôles

## 5. Anti-patterns
- Nouvelle nuance "proche" au lieu de token → interdit.
- Copier-coller bouton au lieu de `<Button>` → interdit.
