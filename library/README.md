# library/ — Skills curés (extraits, versionnés, 24M, 212 SKILL.md)

> Source : 20 repos clonés puis supprimés (3,9G). Seul l'utile est ici, rangé par domaine factory.
> Règle : `skills/` internes d'abord (loi), `library/` ensuite (profondeur). Citer les deux : `[SKILL USED] skills/frontend-react + library/01-frontend-design/anthropics/frontend-design`.

## Structure
- `00-orchestration/` : obra-superpowers (14) + mattpocock-engineering (17) + find-skills + i-have-adhd + ai-factory-skills (11 : planning-*, spec-driven, incremental, constraint-driven, doubt-driven, idea-refine, interview-me, context-engineering, using-agent-skills, source-driven + discernment-nudge) — process, plans, subagents, debug, TDD, review
- `01-frontend-design/` : anthropics (5) + taste (13) + taste-research + refactoring-ui (11 + skills.json) + diagram-design + ai-factory-skills (8 : composition-patterns, react-*, web-design-guidelines, frontend-ui-engineering, slack-gif-creator, landing-prompt-playbook) + threejs-3d-arsenal (45 : arsenal-index + 43 effets Community + 3d-paper Pro) — UI premium, image→code, checklist visuelle, 3D
- `02-backend-docs/` : anthropics pdf/docx/xlsx/pptx/doc-coauthoring + docs-editor + anthropic-custom (3) + ai-factory-skills (3 : api-and-interface-design, data-designer, app-auth) — documents & édition
- `03-agents-ai/` : anthropics mcp-builder/skill-creator/claude-api/web-artifacts-builder + openmaic + omniroute-skills (47) + llmfit-advisor + agent-browser (+ schema) + ai-factory-skills (1 : academy-guide)
- `04-qa-debug/` : webapp-testing + ai-factory-skills (15 : app-deploy, cli-deploy-auth, deploy-optimize, test-driven-development, debugging-and-error-recovery, code-review-and-quality, code-simplification, ci-cd-and-automation, shipping-and-launch, browser-testing-with-devtools, performance-optimization, observability-and-instrumentation, deprecation-and-migration, git-workflow-and-versioning, security-and-hardening)
- `05-architecture/` : AGENTS.md exemples (i-have-adhd multi-runtime, vercel-agent-browser), PLATFORM_GUIDE + README refactoring-ui, README anthropics-skills, internal-comms + ai-factory-skills (2 : writing-guidelines, documentation-and-adrs)

## Provenance (repos d'origine, re-clonables)
- https://github.com/obra/superpowers
- https://github.com/mattpocock/skills
- https://github.com/vercel-labs/skills
- https://github.com/vercel-labs/agent-skills
- https://github.com/addyosmani/agent-skills
- https://github.com/auth0/agent-skills
- https://github.com/NVIDIA/skills
- https://github.com/MengTo/ThreeUI
- https://github.com/agentskills/agentskills (spec, pas de skills à extraire)
- https://github.com/VoltAgent/awesome-agent-skills (index 1497+, pas d'extraction en bloc)
- https://github.com/anthropics/skills
- https://github.com/Leonxlnx/taste-skill
- https://github.com/gnurio/refactoring-ui-plugin
- https://github.com/cathrynlavery/diagram-design
- https://github.com/ayghri/i-have-adhd
- https://github.com/AlexsJones/llmfit
- https://github.com/THU-MAIC/OpenMAIC
- https://github.com/diegosouzapw/OmniRoute (seul `skills/` extrait)
- https://github.com/vercel-labs/agent-browser (skill + schema + AGENTS)
- https://github.com/openai/openai-cookbook (seul `.codex/skills/docs-editor` extrait)
- https://github.com/anthropics/anthropic-cookbook (seul `skills/custom_skills` extrait)

## Non extraits (volontaire — trop gros / hors scope, garder en lien)
- `openai-cookbook` (1,8G notebooks), `anthropic-cookbook` (372M), `google-gemini/cookbook` (243M), `anthropics/courses` (202M), `prompt-eng-interactive-tutorial` : recettes, pas SKILL.md → utiliser en ligne.
- `gods-eye-view`, `llm_wiki`, `awesome-gpt-image-2`, `OpenMAIC` (app, pas skills) : exemples d'archi, pas copiés.
- Voir `vendor/EXTERNAL_SKILLS_INDEX.md` pour le détail initial.

## Usage agent
1. Lire `skills/<domaine>/SKILL.md`.
2. Approfondir avec `library/<domaine>/.../SKILL.md` listé dans `orchestrator/ROUTER.md`.
3. Ne jamais modifier `library/` sans entrée `DECISIONS.md` (c'est du curé, pas du vivant).
