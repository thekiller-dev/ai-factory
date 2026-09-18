# AI Factory Monorepo — Orchestrateur de Skills pour Agents Autonomes

> FR: Ce repo est une **usine à agents**. Tu donnes un cahier de charge à un agent IA, il doit travailler en autonome en utilisant les skills.
> EN: This repo is an **agent factory**. Give a spec to an AI agent, it must work autonomously using the skills.

## Concept / Concept

1. L'humain remplit `templates/CAHIER_DE_CHARGE.md`
2. Il génère un `AGENT_BRIEF.md` (via `orchestrator/BOOTSTRAP.md`)
3. Il envoie le brief à **n'importe quel agent** (Claude Code, Codex, OpenCode, Cursor)
4. L'agent **DOIT** :
   - Lire `AGENTS.md` (règles globales)
   - Lire `skills/orchestrator/SKILL.md` (chef d'orchestre)
   - Pour chaque besoin → charger le skill correspondant → appliquer → auto-contrôler → cocher checklist
   - Ne jamais livrer sans `security` + `qa-devops` validés

```
cahier-de-charge ──► BOOTSTRAP ──► AGENT_BRIEF ──► agent autonome
                                                    ├──► skills/frontend-react
                                                    ├──► skills/backend-node
                                                    ├──► skills/security
                                                    ├──► skills/agents-ai
                                                    ├──► skills/qa-devops
                                                    ├──► skills/design-system
                                                    └──► orchestrator (contrôle + livraison)
```

## Structure

```
ai-factory-monorepo/
├── AGENTS.md                  # ← LOI SUPRÊME pour tous les agents
├── CLAUDE.md                  # alias pour Claude Code
├── skills/                    # ← SOURCE DE VÉRITÉ (format universel SKILL.md)
│   ├── orchestrator/SKILL.md  # chef d'orchestre, boucle autonome
│   ├── frontend-react/SKILL.md
│   ├── backend-node/SKILL.md
│   ├── security/SKILL.md
│   ├── agents-ai/SKILL.md
│   ├── qa-devops/SKILL.md
│   └── design-system/SKILL.md
├── orchestrator/
│   ├── BOOTSTRAP.md           # point d'entrée : spec → plan → exécution
│   └── ROUTER.md              # quel skill pour quel besoin
├── templates/
│   ├── CAHIER_DE_CHARGE.md
│   └── AGENT_BRIEF.md
├── scripts/
│   ├── sync-skills.mjs        # sync skills/ → .claude / .codex / .opencode / .cursor
│   └── validate-skills.mjs    # CI : vérifie chaque SKILL.md
├── .claude/skills/  .codex/skills/  .opencode/skills/  .cursor/rules/
├── apps/web  apps/api  packages/shared  # monorepo React + Node/TS
└── docs/WORKFLOW.md
```

## Démarrage rapide (2 min)

```bash
# 1. Installer
npm install
npm run skills:sync
npm run skills:validate

# 2. Nouveau projet : copier le template
cp templates/CAHIER_DE_CHARGE.md ./MON_PROJET_SPEC.md
# → remplir MON_PROJET_SPEC.md

# 3. Générer le brief agent (humain ou agent)
cp templates/AGENT_BRIEF.md ./MON_PROJET_BRIEF.md
# → suivre orchestrator/BOOTSTRAP.md pour le remplir

# 4. Lancer l'agent (exemples)
# Claude Code:
#   Ouvre ce repo dans Claude Code et colle le contenu de MON_PROJET_BRIEF.md
# Codex:
#   codex --cd $(pwd) "$(cat MON_PROJET_BRIEF.md)"
# OpenCode:
#   opencode run "$(cat MON_PROJET_BRIEF.md)"
```

## Règles d'or

- **Aucun code sans skill** : chaque fichier créé doit citer le skill utilisé.
- **Boucle autonome obligatoire** : Plan → Build → Self-Review (checklist skill) → Fix → Security → QA → Deliver.
- **Arrêt interdit** : l'agent ne demande pas d'aide sauf blocage documenté > 3 tentatives. Il log dans `PROGRESS.md`.
- Voir `AGENTS.md` pour les règles complètes.

## Compatibilité agents

| Agent | Dossier natif | Support |
|-------|---------------|---------|
| Claude Code | `.claude/skills/` | ✅ sync auto |
| OpenAI Codex | `.codex/skills/` + `AGENTS.md` | ✅ sync auto |
| OpenCode | `.opencode/skills/` | ✅ sync auto |
| Cursor | `.cursor/rules/` | ✅ sync auto |
| Générique | `skills/*/SKILL.md` | ✅ standard Anthropic |

Stack par défaut : **React 18 + Vite + TypeScript + Tailwind** (web) / **Node 20 + TS + Fastify/Express + Zod + Prisma** (api).
Skills agnostiques si besoin : l'agent peut adapter mais doit justifier dans `DECISIONS.md`.
