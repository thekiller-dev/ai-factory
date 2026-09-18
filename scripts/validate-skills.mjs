#!/usr/bin/env node
// validate-skills.mjs — vérifie que chaque skills/*/SKILL.md respecte le standard
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'skills');
let fail = 0;

const requiredSections = ['checklist', 'anti-pattern', 'quand'];
const dirs = readdirSync(src, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

if (dirs.length === 0) { console.error('❌ no skills found'); process.exit(1); }

for (const d of dirs) {
  const f = join(src, d, 'SKILL.md');
  const label = `skills/${d}/SKILL.md`;
  if (!existsSync(f)) { console.error(`❌ ${label} missing`); fail++; continue; }
  const c = readFileSync(f, 'utf8');
  const errors = [];
  if (!c.startsWith('---')) errors.push('missing frontmatter ---');
  if (!/name:\s*[a-z0-9-]+/.test(c)) errors.push('frontmatter name: kebab-case requis');
  if (!/description:\s*.{20,}/.test(c)) errors.push('frontmatter description >= 20 chars requise');
  for (const s of requiredSections) {
    if (!c.toLowerCase().includes(s)) errors.push(`section contenant "${s}" manquante`);
  }
  if (!c.includes('- [ ]')) errors.push('checklist cases "- [ ]" manquantes');
  if (errors.length) { console.error(`❌ ${label}\n   - ${errors.join('\n   - ')}`); fail++; }
  else console.log(`✓ ${label}`);
}

// Vérifie ROUTER + AGENTS référencent les skills
const router = readFileSync(join(root, 'orchestrator/ROUTER.md'), 'utf8');
for (const d of dirs) {
  if (!router.includes(d)) console.warn(`⚠ ROUTER.md ne mentionne pas "${d}"`);
}
console.log(fail ? `\n❌ ${fail} skill(s) invalide(s)` : '\n✅ all skills valid');
process.exit(fail ? 1 : 0);
