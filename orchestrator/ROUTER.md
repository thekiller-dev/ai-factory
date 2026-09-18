# ROUTER — Quel skill pour quel besoin ?

> Règle : en cas de doute, lire les 2 skills. Toujours citer le skill utilisé.

| Signal dans le brief / spec | Skill à charger | Quand |
|---|---|---|
| "page", "écran", "composant", "formulaire", "responsive", "Tailwind", "React", "état", "router" | `skills/frontend-react` | Tout UI web |
| "API", "route", "endpoint", "auth", "JWT", "DB", "Prisma", "validation", "middleware" | `skills/backend-node` | Tout serveur |
| "mot de passe", "secret", "token", "OWASP", "XSS", "CSRF", "injection", "headers", "RGPD", "audit" | `skills/security` | Toujours en phase Hardening + dès auth/data |
| "LLM", "prompt", "RAG", "embedding", "agent", "tool calling", "chatbot", "OpenAI", "Anthropic" | `skills/agents-ai` | Fonctionnalité IA |
| "test", "lint", "CI", "Docker", "deploy", "preview", "coverage" | `skills/qa-devops` | Fin de chaque lot + livraison |
| "palette", "typo", "thème", "design system", "tokens", "Figma" | `skills/design-system` | Avant tout UI |
| "plan", "découpage", "priorisation", "livraison", "bloqué", "multi-tâches" | `skills/orchestrator` | En permanence |

## Ordre de lecture recommandé par type de projet

- **Landing + CRUD simple** : orchestrator → design-system → shared types → backend-node → frontend-react → security → qa-devops
- **SaaS avec auth** : orchestrator → backend-node (auth) → security (auth review) → frontend-react → qa-devops
- **App avec IA (chatbot/RAG)** : orchestrator → agents-ai → backend-node → frontend-react → security (prompt-injection !) → qa-devops
- **Refonte / audit** : orchestrator → qa-devops (état des lieux) → security → skill du scope → qa-devops

## Matrice de conflits

- UI vs API contract → source de vérité : `packages/shared` (Zod schemas). Voir backend-node §4 + frontend-react §4.
- Design vs accessibilité → accessibilité gagne (design-system §5).
- Rapidité vs sécurité → sécurité gagne (AGENTS.md §1).
