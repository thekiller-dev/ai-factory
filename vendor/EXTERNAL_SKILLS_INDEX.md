# EXTERNAL_SKILLS_INDEX — Inventaire des 20 repos + mapping factory

> Généré le 2026-09-18. Clones locaux : `vendor/external/*` (`--depth 1`, 3,9G, git-ignorés).
> Règle : interne `skills/` d'abord, externe en complément. Voir `vendor/README.md`.

## 0. Sources (pour re-clone)

```
https://github.com/vercel-labs/skills → vendor/external/vercel-labs-skills
https://github.com/vercel-labs/agent-skills → extraction 2026-09-18 : 9 skills → library/ (voir DECISIONS.md)
https://github.com/addyosmani/agent-skills → extraction 2026-09-18 : 25 skills → library/ai-factory-skills/ (voir DECISIONS.md)
https://github.com/anthropics/skills → re-clone 2026-09-18 : 3 nouveaux + frontend-design MAJ (voir DECISIONS.md)
https://github.com/auth0/agent-skills → extraction 2026-09-18 : méta-skill → library/02-backend-docs/ai-factory-skills/app-auth/
https://github.com/NVIDIA/skills → clone 2026-09-18 (367 skills, hors scope) : seul data-designer extrait (voir DECISIONS.md)
https://github.com/MengTo/ThreeUI → extraction 2026-09-18 : 43 prompts → library/01-frontend-design/threejs-3d-arsenal/
https://github.com/agentskills/agentskills + https://github.com/VoltAgent/awesome-agent-skills + https://officialskills.sh/ → sources de découverte, pas d'extraction en bloc
https://github.com/mattpocock/skills → vendor/external/mattpocock-skills
https://github.com/anthropics/skills → vendor/external/anthropics-skills
https://github.com/vercel-labs/agent-browser → vendor/external/vercel-agent-browser
https://github.com/Leonxlnx/taste-skill → vendor/external/taste-skill
https://github.com/obra/superpowers → vendor/external/obra-superpowers
https://github.com/anthropics/prompt-eng-interactive-tutorial → vendor/external/prompt-eng-tutorial
https://github.com/anthropics/anthropic-cookbook → vendor/external/anthropic-cookbook
https://github.com/openai/openai-cookbook → vendor/external/openai-cookbook
https://github.com/google-gemini/cookbook → vendor/external/gemini-cookbook
https://github.com/anthropics/courses → vendor/external/anthropics-courses
https://github.com/diegosouzapw/OmniRoute → vendor/external/OmniRoute
https://github.com/cathrynlavery/diagram-design → vendor/external/diagram-design
https://github.com/ayghri/i-have-adhd → vendor/external/i-have-adhd
https://github.com/AlexsJones/llmfit → vendor/external/llmfit
https://github.com/THU-MAIC/OpenMAIC → vendor/external/OpenMAIC
https://github.com/bilawalsidhu/gods-eye-view → vendor/external/gods-eye-view
https://github.com/YouMind-OpenLab/awesome-gpt-image-2 → vendor/external/awesome-gpt-image-2
https://github.com/nashsu/llm_wiki → vendor/external/llm_wiki
https://github.com/gnurio/refactoring-ui-plugin → vendor/external/refactoring-ui-plugin
```

Doublons initiaux résolus : `mattpocock/skills` (grill-me, prototype, diagnosing-bugs) = 1 repo, `anthropics/skills` (frontend-design, skill-creator, mcp-builder) = 1 repo.

## 1. Orchestrateur / process (→ skills/orchestrator)

| Externe | Contenu utile | Quand l'utiliser |
|---|---|---|
| `obra-superpowers/skills/` : `using-superpowers`, `brainstorming`, `writing-plans`, `executing-plans`, `subagent-driven-development`, `dispatching-parallel-agents`, `verification-before-completion`, `finishing-a-development-branch` | Règle "skill-first", brainstorm avant plan, plans + subagents parallèles + vérification avant Done | En permanence, avant `skills/orchestrator`. Imposer annonce `Using [skill]` |
| `mattpocock-skills/skills/engineering/` : `to-spec`, `to-tickets`, `implement`, `triage`, `wayfinder`, `wizard`, `codebase-design`, `domain-modeling` | Spec → tickets, triage, navigation codebase | Phase PLAN + découpage |
| `vercel-labs-skills/skills/find-skills` + CLI `npx skills` | Découverte de skills manquants (`find`, `add`, `update`, leaderboard skills.sh) | Quand aucun skill interne/externe ne couvre le besoin |
| `i-have-adhd/skills/i-have-adhd` + `AGENTS.md` multi-runtime | Exemple d'orchestration multi-agents (.claude/.codex/.cursor/.opencode) | Référence archi compat, pas de logique métier |
| `llmfit/skills/llmfit-advisor` | Choix de modèle local vs cloud (budget/confidentialité) | Si brief exige sobriété / offline |

## 2. Frontend / design (→ skills/frontend-react + design-system)

| Externe | Contenu utile | Quand |
|---|---|---|
| `anthropics-skills/skills/frontend-design` | Référence design premium (à lire avant toute page) | Avant `skills/design-system` |
| `anthropics-skills/skills/theme-factory`, `canvas-design`, `algorithmic-art`, `brand-guidelines` | Thèmes, canvas, art génératif | Si brief créatif |
| `taste-skill/skills/` : `taste-skill`, `image-to-code-skill`, `imagegen-frontend-web/mobile`, `redesign-skill`, `brutalist/minimalist/soft-skill`, `brandkit` | Image→code, styles, re-design | Landing / refonte visuelle |
| `refactoring-ui-plugin/skills/01..10` + `skills.json` | 10 skills atomiques : hiérarchie visuelle, typo scale, palette 8-10 gris, spacing, boutons, empty states, shadows, contraste, groupement | Checklist visuelle avant REVIEW frontend |
| `diagram-design/skills/diagram-design` | Diagrammes propres | Docs / archi visuelle |
| `awesome-gpt-image-2/` (multilingue FR inclus) | Prompts génération d'images | Assets marketing, pas UI core |
| `vercel-agent-browser/skills/agent-browser` + `skill-data/` | Automatisation browser pour tests visuels / screenshots | QA visuelle (avec `skills/qa-devops`) |

## 3. Backend / docs / fichiers (→ skills/backend-node)

| Externe | Contenu utile | Quand |
|---|---|---|
| `anthropics-skills/skills/{pdf,docx,xlsx,pptx}` | Manipulation documents (PDF natif, Office) | Si brief "import/export docs" |
| `anthropics-skills/skills/webapp-testing` | Méthode test webapp | Avec `skills/qa-devops` |
| `openai-cookbook/.codex/skills/docs-editor` | Édition docs via agent | Docs livrables |
| `mattpocock/engineering/diagnosing-bugs` (+ script `hitl-loop`) | Boucle diagnostic systématique | Tout bug bloquant (avec `obra-superpowers/systematic-debugging`) |
| `gods-eye-view/` (`DATA_SOURCES.md`, `config/`, `docs/`) | Exemple d'app multi-sources temps réel | Référence archi data, pas skill directe |
| `llm_wiki/` (`llm-wiki.md`, `mcp-server/`, `plans/`) | Wiki + MCP server exemple | Si brief demande MCP / wiki |

## 4. Agents IA / LLM (→ skills/agents-ai)

| Externe | Contenu utile | Quand |
|---|---|---|
| `anthropics-skills/skills/{mcp-builder,skill-creator,claude-api}` | Créer MCP server, créer skill conforme, appeler Claude API | Création outillage agent |
| `anthropics-skills/skills/web-artifacts-builder` | Générer artefacts web via LLM | Preview IA |
| `anthropics-courses/` + `prompt-eng-tutorial/` | Cours prompting, evals, tool-use | Formation prompts + evals (`skills/agents-ai §4`) |
| `anthropic-cookbook/` (`evals/`, `capabilities/`, `claude_agent_sdk/`) + `openai-cookbook/` + `gemini-cookbook/` | Recettes + evals par provider | Implémentation multi-provider |
| `OmniRoute/skills/omni-*`, `cli-*` (~45 skills : routing, providers, budget, cache, resilience, a2a, mcp) | Routage multi-modèles, coûts, cache, résilience | Si besoin orchestration LLM avancée (sinon overkill) |
| `OpenMAIC/skills/openmaic` | Multi-agents collaboratifs | Référence si swarm demandé |
| `vercel-agent-browser/` (`agent-browser.schema.json`, `benchmarks/`, `evals/`) | Tool browser pour agents | Tool-calling browser |

## 5. QA / sécu / debug (→ skills/qa-devops + security)

| Externe | Contenu utile | Quand |
|---|---|---|
| `obra-superpowers/skills/{test-driven-development,systematic-debugging,requesting-code-review,receiving-code-review}` | TDD + debug systématique + review | Avant/après chaque lot |
| `mattpocock/engineering/{code-review,tdd,grill-with-docs,prototype}` | Review + TDD + grill docs | Qualité |
| `anthropics-skills/skills/internal-comms`, `doc-coauthoring` | Comms + co-écriture docs | README / CHANGELOG |

## 6. Poids / avertissements

- Lourds (ne jamais copier, lire ciblé) : `openai-cookbook` 1,8G, `anthropic-cookbook` 372M, `gemini-cookbook` 243M, `anthropics-courses` 202M, `OmniRoute` ~23k fichiers.
- Légers prioritaires : `obra-superpowers` 3,2M, `anthropics-skills` 16M, `refactoring-ui-plugin`, `taste-skill`, `diagram-design`, `vercel-labs-skills`.
- Cookbooks = notebooks, pas SKILL.md : utiliser comme recettes, pas comme loi.

## 7. Mapping rapide signal → externe

- "trouve un skill pour X" → `vercel-labs-skills/skills/find-skills` (`npx skills find`)
- "plan / subagents / brainstorm / debug / TDD / review" → `obra-superpowers/skills/*` + `mattpocock-skills/skills/engineering/*`
- "belle landing / image→code / re-design" → `anthropics-skills/skills/frontend-design` + `taste-skill/skills/*` + `refactoring-ui-plugin/skills/*`
- "PDF/Word/Excel/PPT" → `anthropics-skills/skills/{pdf,docx,xlsx,pptx}`
- "chatbot / RAG / MCP / prompt-injection eval" → `anthropics-skills/skills/{mcp-builder,claude-api}` + `anthropics-courses` + `anthropic/openai/gemini-cookbook` + `OmniRoute` si routage avancé
- "browser automation / test visuel" → `vercel-agent-browser`
