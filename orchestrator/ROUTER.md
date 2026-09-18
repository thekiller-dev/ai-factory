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

## Références externes (vendor/ — complément, jamais remplacement)

> Lire d'abord le skill interne, puis l'externe si besoin de profondeur. Détail : `vendor/EXTERNAL_SKILLS_INDEX.md`.

| Besoin | Interne d'abord | Complément externe |
|---|---|---|
| Trouver un skill manquant | `skills/orchestrator` | `vendor/external/vercel-labs-skills/skills/find-skills` (`npx skills find`) |
| Plan, brainstorm, subagents, TDD, debug, review | `skills/orchestrator` + `skills/qa-devops` | `vendor/external/obra-superpowers/skills/` (`brainstorming`, `writing-plans`, `executing-plans`, `subagent-driven-development`, `systematic-debugging`, `test-driven-development`) + `vendor/external/mattpocock-skills/skills/engineering/` (`to-spec`, `diagnosing-bugs`, `code-review`, `prototype`) |
| Belle UI / landing / image→code | `skills/design-system` + `skills/frontend-react` | `vendor/external/anthropics-skills/skills/frontend-design` + `vendor/external/taste-skill/skills/` + `vendor/external/refactoring-ui-plugin/skills/` + `vendor/external/diagram-design/skills/diagram-design` |
| PDF/Word/Excel/PPT | `skills/backend-node` | `vendor/external/anthropics-skills/skills/{pdf,docx,xlsx,pptx}` |
| Chatbot/RAG/MCP/prompts/evals | `skills/agents-ai` | `vendor/external/anthropics-skills/skills/{mcp-builder,skill-creator,claude-api}` + `vendor/external/anthropics-courses` + `vendor/external/anthropic-cookbook` + `vendor/external/openai-cookbook` + `vendor/external/gemini-cookbook` (+ `vendor/external/OmniRoute/skills/` si routage multi-modèles) |
| Browser automation / test visuel | `skills/qa-devops` | `vendor/external/vercel-agent-browser/skills/agent-browser` |
| Choix modèle local vs cloud | `skills/agents-ai` | `vendor/external/llmfit/skills/llmfit-advisor` |
