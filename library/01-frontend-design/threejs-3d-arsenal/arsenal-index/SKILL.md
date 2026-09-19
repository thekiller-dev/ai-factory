---
name: arsenal-index
description: Index of the Three.js 3D arsenal — 43 copy-ready WebGL/Canvas visual effects (heroes, backgrounds, buttons, shaders, landing pages). Use when the user wants 3D, WebGL, shaders, particle fields, animated backgrounds, hero scenes, or premium motion on a landing page. Start here, then load the matching component skill in this collection.
license: MIT — source MengTo/ThreeUI (see DECISIONS.md)
---

# Three.js 3D Arsenal — Index

43 production-grade visual effects, each with its own skill in this collection
(`<component>/SKILL.md`) giving renderer, variants, controls, verification steps
and guardrails. Two ways to use them:

1. **npm package (fastest)**: `npm install @designcodeio/threeui` then
   `import { AtTheHorizon } from "@designcodeio/threeui"` (+
   `@designcodeio/threeui/style.css`). Full-HTML components expect runtime files
   from `node_modules/@designcodeio/threeui/lib-dist/assets/` copied to `public/`.
2. **Port from source (no dependency)**: each component skill lists its verified
   source files in `MengTo/ThreeUI` (`src/shaders/...`, `public/landing-pages/...`)
   — copy byte-for-byte, adapt only the host boundary.

Alternative: 21st.dev MCP (`@mengto/library/threeui`) or shadcn CLI for single
components with live preview.

## Catalog

**Heroes & landing pages (Community)**: `sylva-hero`, `kage-landing-page`,
`complete-shelf-landing-page`, `meng-to-sketchbook-landing-page`,
`bestsellers-book-showcase`.
**Backgrounds & fields**: `portal-field`, `constellation-field`, `matrix-field`,
`warp-field`, `liquid-form`, `uplink-loader`, `star-portal`, `predictive-arc`,
`structure-flow`, `landscape`, `crt`, `woven-cloth`, `temple-night`,
`japanese-tower`.
**Buttons & controls**: `liquid-metal-button`, `rectangle-buttons`,
`circle-buttons`, `star-portal` (shader buttons), `skeuomorphic-toggle`,
`spark-badge`, `animated-top-dock`.
**Typography & text**: `typography-vortex`, `article-headings`, `gallery-heading`,
`globe-study` (text-path studies), `semantic-bloom`.
**Scenes & objects**: `energy-orb`, `brand-orbs`, `character-carousel`,
`performance-gauges`, `diagnostics-panel`, `wireframe-forms`, `koi-studies`,
`bookshelf`, `gallery`, `sylva-living-world`, `engraved-certificate`,
`elements`, `circle-buttons`.
**Pro (site-only, ex. `3d-paper`)**: full prompt required — see worklist in
`DECISIONS.md` (paste the Skill.md tab content, it gets integrated here).

## Universal rules (apply to every 3D integration)

- **Perf**: cap pixel ratio (≤ 1.5–2), lower particle/geometry counts on mobile,
  pause when off-screen or tab hidden, lazy-mount one renderer at a time.
- **Motion**: respect `prefers-reduced-motion` with a static fallback; one
  orchestrated moment beats scattered effects.
- **Lifecycle**: release everything on teardown (frames, listeners, observers,
  geometries, buffers, textures, contexts); sized overflow-controlled parent;
  verify resize, high-DPI, mobile, context-loss, clean console.
- **Brand fit**: adapt palette, typography, lighting and camera to the brief's
  design tokens (`skills/design-system`) — never ship default demo styling.
- **Guardrail**: never approximate GLSL/passes/geometry from memory — copy the
  verified source or install the package.
