---
name: landing-prompt-playbook
description: Prompt playbook for generating production-quality landing pages with an AI builder. Use when the user wants a landing page, hero, pricing, nav, testimonials, or any marketing section; when prompting for HTML/Tailwind output; or when iterating on generated UI with targeted edits. Distilled from the Aura builder methodology (aura.build).
license: Distilled methodology — source aura.build/learn (see DECISIONS.md)
---

# Landing Prompt Playbook

Generate landing pages like a pro: reference-based context, stepwise refinement, targeted edits.

## 1. Prompt structure (every generation prompt)

Be explicit about all five axes — vague prompts produce generic output:

1. **Framework**: Tailwind CSS (default), vanilla HTML/CSS, or Bootstrap. Name it.
2. **Component structure**: sections and layout (nav, hero, features, pricing, testimonials, footer).
3. **Color scheme + styling**: exact palette, brand tokens, radius, shadows.
4. **Responsive behavior**: mobile-first, breakpoints (640/768/1024), stacking rules.
5. **Interactive elements + animations**: what moves, on what trigger, with what timing.

Example:

```text
Generate a responsive contact form using Tailwind CSS with form validation,
floating labels, and a subtle purple accent color.
```

## 2. Reference-based context (@-method)

Don't describe everything from scratch — point at existing material as context.
Reference full templates (~entire pages), individual components (hero, nav, cards,
buttons, forms), style snippets (border gradients, animations, blur, masks), and
previous iterations. Combine several references in one prompt:

```text
Create a landing page using @hero-section-template and @testimonial-cards.
Add a features section with gradient backgrounds and smooth scroll animations.
Use the color scheme from @brand-colors.
```

In this factory the equivalents are: `skills/design-system` tokens,
`library/01-frontend-design/` collections, and prior `PROGRESS.md` iterations.

## 3. Prompt-targeted edits (iterate, don't regenerate)

When refining, scope the edit to one section only and state what stays unchanged:

```text
Edit only the hero section: change the headline to "Build Faster with AI"
and swap the CTA button color to purple-600. Keep everything else unchanged.
```

## 4. Stepwise approach for complex pages

1. Basic structure first (layout + real copy, no polish).
2. Then styling pass (palette, typography, spacing per `skills/design-system`).
3. Then motion pass (one orchestrated moment, not effects everywhere).
4. Then responsive + accessibility pass (keyboard focus, reduced motion, contrast).

## 5. Ready-to-use component prompts

- **Hero**: "Generate a modern hero section for a SaaS product with Tailwind CSS.
  Include a headline, subheading, CTA button, and a floating mockup image on the
  right side. Make it fully responsive."
- **Targeted fix**: name the section, the change, and the invariant (see §3).
- **Responsive**: "stack vertically below 640px, multi-column above; scale spacing
  and type at 640/768/1024."
- **Framing**: ask for device framing (desktop + mobile preview) to judge realism.

## 6. Guardrails

- Real copy, never lorem ipsum — words are design content, not decoration.
- One bold element per page; cut decoration that doesn't serve the brief.
- Never regenerate a whole page to fix one section (see §3).
- Always finish with the responsive + a11y pass (see §4 step 4).
