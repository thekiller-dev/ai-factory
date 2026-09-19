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
| React/Next perf, patterns, animations, UI review | `skills/frontend-react` (+ `skills/design-system` si UI) | `library/01-frontend-design/ai-factory-skills/{react-best-practices,composition-patterns,react-view-transitions,react-native-skills,web-design-guidelines,frontend-ui-engineering}` |
| Deploy/preview cloud, coût-perf hosting | `skills/qa-devops` | `library/04-qa-debug/ai-factory-skills/{app-deploy,cli-deploy-auth,deploy-optimize}` |
| Style rédactionnel docs (voice & tone) | `skills/orchestrator` (README livrable) | `library/05-architecture/ai-factory-skills/writing-guidelines` |
| 3D/WebGL/shaders, hero animé, fond de page | `skills/frontend-react` | `library/01-frontend-design/threejs-3d-arsenal/arsenal-index` puis le skill du composant (43 : heroes, backgrounds, boutons, typo, scènes) — via npm `@designcodeio/threeui` ou port depuis source |
| Landing page IA (prompts, itérations) | `skills/frontend-react` + `skills/design-system` | `library/01-frontend-design/ai-factory-skills/landing-prompt-playbook` (méthode Aura : @-références, edits ciblés, stepwise) |
| Auth app (login, sessions, JWT, MFA, SSO) | `skills/backend-node` + `skills/security` | `library/02-backend-docs/ai-factory-skills/app-auth` (couvre web/mobile/backend, tous SDK) |
| Dataset / données synthétiques | `skills/backend-node` | `library/02-backend-docs/ai-factory-skills/data-designer` |
| Méthodes dev (spec, plan, TDD, review, debug, contexte) | `skills/orchestrator` + `skills/qa-devops` | `library/00-orchestration/ai-factory-skills/{planning-and-task-breakdown,spec-driven-development,incremental-implementation,constraint-driven-development,doubt-driven-development,idea-refine,interview-me,context-engineering,using-agent-skills,source-driven-development}` + `library/04-qa-debug/ai-factory-skills/{test-driven-development,debugging-and-error-recovery,code-review-and-quality,code-simplification}` |
| CI/CD, release, revue, sécu, perf, observabilité | `skills/qa-devops` (+ `skills/security` si sécu) | `library/04-qa-debug/ai-factory-skills/{ci-cd-and-automation,shipping-and-launch,git-workflow-and-versioning,security-and-hardening,performance-optimization,observability-and-instrumentation,deprecation-and-migration,browser-testing-with-devtools}` |
| Design d'API / contrats d'interface | `skills/backend-node` | `library/02-backend-docs/ai-factory-skills/api-and-interface-design` |
| ADR (décisions d'architecture) | `skills/orchestrator` (DECISIONS.md) | `library/05-architecture/ai-factory-skills/documentation-and-adrs` |
| PDF/Word/Excel/PPT | `skills/backend-node` | `library/02-backend-docs/anthropics/{pdf,docx,xlsx,pptx,doc-coauthoring}` + `library/02-backend-docs/docs-editor` + `library/02-backend-docs/anthropic-custom/` |
| Chatbot/RAG/MCP/prompts/evals | `skills/agents-ai` | `library/03-agents-ai/anthropics/{mcp-builder,skill-creator,claude-api,web-artifacts-builder}` + `library/03-agents-ai/openmaic` + `library/03-agents-ai/omniroute-skills/` (routage multi-modèles, coûts, cache) + `library/03-agents-ai/llmfit-advisor` |
| Browser automation / test visuel | `skills/qa-devops` | `library/03-agents-ai/agent-browser` (+ schema) + `library/04-qa-debug/webapp-testing` |
| Choix modèle local vs cloud | `skills/agents-ai` | `library/03-agents-ai/llmfit-advisor` |
| Exemples d'archi multi-agents | `skills/orchestrator` | `library/05-architecture/` (AGENTS.md i-have-adhd + vercel-agent-browser, PLATFORM_GUIDE refactoring-ui) |
