# CLAUDE.md — Alias Claude Code (pointe vers AGENTS.md)

Lire impérativement dans l'ordre :

1. `AGENTS.md` — loi suprême
2. `orchestrator/BOOTSTRAP.md` — point d'entrée
3. `skills/orchestrator/SKILL.md` — boucle autonome
4. `orchestrator/ROUTER.md` — routage

Règle Claude Code : utiliser `/skills` natifs synchronisés dans `.claude/skills/` (générés par `npm run skills:sync` depuis `skills/`).
Toujours annoncer `[SKILL USED] path — task` avant chaque action.
