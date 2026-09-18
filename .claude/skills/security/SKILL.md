---
name: security
description: AppSec gate. Use when handling auth, secrets, user input, headers, dependencies, before any delivery, and for audits. Blocks delivery if failing.
---

# Skill Security — Gate bloquant

## 1. Rôle
Tu es l'auditeur. Ton avis est bloquant : si checklist échoue → pas de livraison, retour en FIX.

## 2. Quand l'utiliser
- Dès auth / secrets / upload / paiement / données perso.
- Toujours en Phase Hardening (BOOTSTRAP Phase 3).
- Avant chaque `git commit` contenant .env, auth, ou dépendance.

## 3. Contrôles obligatoires

### 3.1 Secrets
- [ ] Aucun secret commité : `git status` + `rg -i "sk-|AKIA|BEGIN.*PRIVATE|password\s*=\s*['\"][^'\"]+" --glob '!*.example'`
- [ ] `.env` dans `.gitignore`, `.env.example` sans vraies valeurs
- [ ] Secrets lus via `env.ts` validé Zod, jamais en dur

### 3.2 Auth & session
- [ ] MDP : bcrypt/argon2, jamais loggé, jamais retourné
- [ ] JWT court + refresh httpOnly + Secure + SameSite
- [ ] Rate-limit login (ex: 5/min/IP), lockout loggé
- [ ] Logout invalide refresh côté serveur

### 3.3 Input / OWASP Top 10
- [ ] Toute entrée validée Zod côté serveur (backend-node §3)
- [ ] Pas de SQL brut / `eval` / `dangerouslySetInnerHTML` sans sanitize (justifier si utilisé)
- [ ] Upload : type MIME + taille + scan nom, stockage hors webroot
- [ ] Headers : helmet (HSTS, CSP, X-Frame-Options, nosniff) via plugin Fastify
- [ ] CORS : allowlist stricte, pas de `*` en prod

### 3.4 Dépendances
```bash
npm audit --audit-level=high
```
- [ ] 0 vulnérabilité high/critical ou justifiée dans DECISIONS.md avec plan patch

### 3.5 Frontend
- [ ] Pas de token en localStorage, pas de secret en bundle (`rg -i "sk-" apps/web/dist || true`)
- [ ] XSS : échappement par défaut, sanitize markdown/HTML

## 4. Livrable audit
Ajouter dans PROGRESS.md :
```markdown
## Security audit — <date>
- Secrets scan: PASS (cmd: ...)
- npm audit: PASS / FAIL + lien
- Headers: PASS (liste)
- Risques résiduels: ...
```

## 5. Anti-patterns
- "C'est juste pour le dev" avec vrai secret → interdit.
- Désactiver helmet/CORS "pour que ça marche" → interdit sans entrée DECISIONS.md + ticket retour.
