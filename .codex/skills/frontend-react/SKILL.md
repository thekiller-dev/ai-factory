---
name: frontend-react
description: React 18 + Vite + TypeScript + Tailwind UI delivery. Use when building pages, components, forms, state, routing, data-fetching in apps/web.
---

# Skill Frontend React — React + Vite + TS + Tailwind

## 1bis. Quand l'utiliser / When to use
Use when building pages, components, forms, state, routing. Quand le brief parle de page, écran, formulaire, responsive, Tailwind.

## 1. Stack imposée
- React 18, Vite 5, TypeScript strict, React Router 6, TanStack Query 5, Tailwind 3, zod + react-hook-form pour forms.
- Pas de `any` (utiliser `unknown` + narrowing). Pas de fetch brut dans composants (passer par `apps/web/src/lib/api.ts`).

## 2. Structure imposée (apps/web/src)
```
components/ui/    # boutons, inputs (design-system tokens only)
components/       # métier (AuthForm, TaskList...)
pages/            # routes (HomePage, LoginPage...)
lib/api.ts        # client API typé depuis packages/shared
hooks/            # hooks métier
```

## 3. Patterns obligatoires
- Data fetching : TanStack Query (`useQuery`/`useMutation`), pas de `useEffect` fetch.
- Forms : `react-hook-form + zodResolver(schema from packages/shared)`.
- États : local `useState` par défaut ; global `zustand` si >2 pages partagent.
- Erreur/chargement/vide : chaque page gère les 3 états.
- A11y : `<label>`, `aria-*`, contraste, focus visible, clavier navigable.
- En-tête skill obligatoire :
  ```tsx
  // skill: frontend-react — LoginPage per checklist §5
  ```

## 4. Contrat API (avec backend-node)
- Importer schemas/types depuis `@repo/shared` (jamais redéfinir).
  ```ts
  import { LoginSchema, type LoginInput } from '@repo/shared';
  ```
- Client :
  ```ts
  // lib/api.ts
  export async function api<T>(path: string, opts?: RequestInit): Promise<T> { ... }
  ```

## 5. Checklist SELF-REVIEW (recopier dans PROGRESS.md)
- [ ] TS strict `npm run typecheck` passe (0 erreur)
- [ ] ESLint passe, pas de `any`, pas de `console.log` restant
- [ ] Chaque form utilise schema shared + affiche erreurs Zod
- [ ] Loading / Error / Empty states présents
- [ ] Responsive mobile-first vérifié (375px + 1280px)
- [ ] A11y de base (labels, alt, focus, contraste)
- [ ] Aucune couleur/typo en dur (tokens design-system uniquement)
- [ ] Page testée manuellement : décrire parcours dans PROGRESS.md

## 6. Commandes
```bash
npm run dev --workspace=apps/web
npm run typecheck --workspace=apps/web
npm run lint --workspace=apps/web
npm run build --workspace=apps/web
```

## 7. Anti-patterns
- Logique métier dans JSX → extraire hook.
- `useEffect` pour fetch → TanStack Query.
- Dupliquer types backend → importer shared.
