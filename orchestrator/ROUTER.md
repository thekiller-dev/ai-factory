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

## Librairie curée (library/ — complément, jamais remplacement)

> Lire d'abord le skill interne, puis la librairie si besoin de profondeur. Index : `library/README.md`.

| Besoin | Interne d'abord | Complément library/ |
|---|---|---|
| Trouver un skill manquant | `skills/orchestrator` | `library/00-orchestration/find-skills` (`npx skills find`) |
| Plan, brainstorm, subagents, TDD, debug, review | `skills/orchestrator` + `skills/qa-devops` | `library/00-orchestration/obra-superpowers/` (`brainstorming`, `writing-plans`, `executing-plans`, `subagent-driven-development`, `systematic-debugging`, `test-driven-development`, `verification-before-completion`) + `library/00-orchestration/mattpocock-engineering/` (`to-spec`, `to-tickets`, `diagnosing-bugs`, `code-review`, `prototype`, `implement`) + `library/00-orchestration/i-have-adhd` |
| Belle UI / landing / image→code | `skills/design-system` + `skills/frontend-react` | `library/01-frontend-design/anthropics/frontend-design` + `library/01-frontend-design/taste/` (13 styles + image-to-code) + `library/01-frontend-design/refactoring-ui/` (10 atomiques + skills.json) + `library/01-frontend-design/diagram-design` |
| PDF/Word/Excel/PPT | `skills/backend-node` | `library/02-backend-docs/anthropics/{pdf,docx,xlsx,pptx,doc-coauthoring}` + `library/02-backend-docs/docs-editor` + `library/02-backend-docs/anthropic-custom/` |
| Chatbot/RAG/MCP/prompts/evals | `skills/agents-ai` | `library/03-agents-ai/anthropics/{mcp-builder,skill-creator,claude-api,web-artifacts-builder}` + `library/03-agents-ai/openmaic` + `library/03-agents-ai/omniroute-skills/` (routage multi-modèles, coûts, cache) + `library/03-agents-ai/llmfit-advisor` |
| Browser automation / test visuel | `skills/qa-devops` | `library/03-agents-ai/agent-browser` (+ schema) + `library/04-qa-debug/webapp-testing` |
| Choix modèle local vs cloud | `skills/agents-ai` | `library/03-agents-ai/llmfit-advisor` |
| Exemples d'archi multi-agents | `skills/orchestrator` | `library/05-architecture/` (AGENTS.md i-have-adhd + vercel-agent-browser, PLATFORM_GUIDE refactoring-ui) |
