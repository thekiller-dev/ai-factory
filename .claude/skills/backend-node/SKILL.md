---
name: backend-node
description: Node 20 + TypeScript + Fastify + Zod + Prisma API delivery. Use when building routes, auth, validation, DB access, middleware in apps/api.
---

# Skill Backend Node — Fastify + TS + Zod + Prisma

## 1bis. Quand l'utiliser / When to use
Use when building routes, auth, validation, DB. Quand le brief parle d'API, endpoint, auth, DB, validation.

## 1. Stack imposée
Node 20, TypeScript strict, Fastify 4, Zod 3 (validation entrée/sortie), Prisma 5 (si DB), Pino (logs). Pas d'Express sauf brief explicite.

## 2. Structure imposée (apps/api/src)
```
routes/       # *.routes.ts (définition seule)
services/     # logique métier
schemas/      # ré-export depuis @repo/shared + extensions serveur
plugins/      # auth, cors, helmet, rate-limit
```

## 3. Patterns obligatoires
- Validation systématique :
  ```ts
  // skill: backend-node — validation Zod obligatoire
  import { LoginSchema } from '@repo/shared';
  fastify.post('/auth/login', { schema: { body: LoginSchema } }, handler);
  ```
- Erreurs : format unique `{ error: { code, message } }`, jamais de stack en prod.
- Auth : JWT court (15min) + refresh httpOnly cookie ; bcrypt `cost 12` ; jamais de MDP en clair/log.
- DB : Prisma uniquement (pas de SQL brut sauf justifié dans DECISIONS.md).
- Config : `process.env` validé par Zod au boot (`env.ts`), `.env.example` obligatoire.
- Logs : Pino, pas de `console.log`.

## 4. Contrat shared (avec frontend)
- Tout schema d'échange vit dans `packages/shared/src/*.ts` (Zod + `z.infer` types).
- L'API ne définit jamais un schema déjà dans shared.

## 5. Checklist SELF-REVIEW
- [ ] Toutes routes valident body/query/params via Zod (shared)
- [ ] Auth : hash, JWT, refresh, rate-limit login présents
- [ ] Erreurs normalisées, 4xx/5xx corrects
- [ ] `env.ts` valide config au boot, `.env.example` à jour
- [ ] Aucun secret/log sensible (`rg -i "password|secret|BEGIN PRIVATE"`)
- [ ] `npm run typecheck && npm run test` passent
- [ ] README route : méthode + path + exemple curl dans PROGRESS.md

## 6. Commandes
```bash
npm run dev --workspace=apps/api
npm run typecheck --workspace=apps/api
npm run test --workspace=apps/api
npx prisma migrate dev
```

## 7. Anti-patterns
- Validation manuelle `if (!body.email)` → Zod.
- JWT en localStorage → httpOnly cookie.
- Retourner user complet avec hash → sélectionner champs sûrs.
