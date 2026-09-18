#!/usr/bin/env node
// sync-skills.mjs — skills/ (source) → .claude/skills, .codex/skills, .opencode/skills, .cursor/rules
import { cpSync, mkdirSync, rmSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'skills');
const targets = [
  '.claude/skills',
  '.codex/skills',
  '.opencode/skills',
].map((d) => join(root, d));

if (!existsSync(src)) { console.error('skills/ missing'); process.exit(1); }
const skillDirs = readdirSync(src, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
console.log(`Syncing ${skillDirs.length} skills: ${skillDirs.join(', ')}`);

for (const t of targets) {
  mkdirSync(t, { recursive: true });
  for (const s of skillDirs) {
    const from = join(src, s);
    const to = join(t, s);
    rmSync(to, { recursive: true, force: true });
    cpSync(from, to, { recursive: true });
  }
  console.log(`  ✓ ${t}`);
}

// Cursor: génère un fichier de règles agrégé
const cursorDir = join(root, '.cursor/rules');
mkdirSync(cursorDir, { recursive: true });
const { writeFileSync } = await import('node:fs');
writeFileSync(join(cursorDir, 'skills.mdc'), `---\ndescription: AI Factory skills router (auto-generated, do not edit)\nalwaysApply: true\n---\n\n# Skills router (source: skills/)\n\nLire AGENTS.md, orchestrator/BOOTSTRAP.md, orchestrator/ROUTER.md.\n\nSkills disponibles (lire le SKILL.md avant toute tâche du domaine) :\n${skillDirs.map((s) => `- skills/${s}/SKILL.md`).join('\n')}\n\nRègle: annoncer [SKILL USED] avant chaque tâche. Boucle PLAN→BUILD→REVIEW→FIX→SECURITY→QA→DELIVER. Definition of Done: AGENTS.md §6.\n`);
console.log('  ✓ .cursor/rules/skills.mdc');
console.log('Done. Run npm run skills:validate to check.');
