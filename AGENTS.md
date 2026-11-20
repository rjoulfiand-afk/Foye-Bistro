# AGENTS.md

## Project Overview

Foye Bistro is a static landing page for a modern Asian bistro in Dharmahusada, Surabaya. The site is an editorial hospitality experience focused on menu discovery, dining spaces, VIP reservations, location details, and WhatsApp conversion.

## Working Directory

The project root contains:

- `index.html` — page structure, Tailwind CDN configuration, metadata, and static layout.
- `assets/css/custom.css` — small custom CSS layer.
- `assets/js/data.js` — centralized restaurant, menu, and space data in `FOYE_DATA`.
- `assets/js/main.js` — vanilla JavaScript rendering and interactions.
- `assets/images/brand/` — logo and favicon.
- `assets/images/hero/` — hero imagery.
- `assets/images/menu/` — menu imagery.
- `assets/images/spaces/` — indoor, outdoor, and VIP space imagery.
- `vercel.json` — Vercel caching configuration.
- `DESIGN_CONTEXT.md` — detailed visual, content, and structural context.

## Run and Verify

No package manager or build step is required. Serve the root directory with any static HTTP server, or open `index.html` directly for basic review.

Before completing JavaScript changes, run:

```bash
node --check assets/js/main.js
node --check assets/js/data.js
```

For browser behavior, verify:

- Hero image and restaurant details render.
- WhatsApp links open the correct contextual message.
- Menu category filters show the expected items.
- Full menu drawer opens, closes, and responds to `Escape`.
- Space cards render correctly on mobile and desktop.
- Google Maps, Instagram, and reservation links work.
- Mobile bottom CTA remains usable and does not hide content.

## Design Direction

Preserve the existing editorial dining identity:

- Warm paper background: `#F6F3EC`.
- Surface: `#EDE8DD`.
- Primary deep teal: `#1A4F49`.
- Dark teal: `#113632`.
- CTA red: `#C83228`.
- CTA hover red: `#A3251D`.
- Brick accent: `#A65E3E`.
- Ink text: `#1A1F1E`.

Typography:

- `Cormorant Garamond` for editorial headings.
- `Plus Jakarta Sans` for body text and interface elements.

Use restrained motion, subtle borders, compact corner radii, strong whitespace, and photography-led composition. Avoid neon gradients, excessive shadows, gratuitous floating animations, and generic dashboard styling.

## Content and Language

- Primary language: Bahasa Indonesia.
- Keep established English culinary and hospitality terms where natural, such as `Modern Asian Bistro`, `Sharing Plates`, `Artisan Drinks`, `VIP Room`, and `Chef's Pick`.
- Keep copy warm, concise, premium, and direct.
- Do not invent restaurant claims, prices, opening hours, addresses, or contact details. Use `assets/js/data.js` as the source of truth.
- Existing conversion labels include `Reservasi Meja`, `Lihat Menu`, `Buka Google Maps`, and `Tanya Ketersediaan VIP Room`.

## Code Conventions

- Prefer the smallest working change.
- Keep the current static HTML, Tailwind CDN, CSS, and vanilla JavaScript architecture.
- Do not add frameworks, dependencies, abstractions, or build tooling unless explicitly requested.
- Put editable restaurant and menu content in `assets/js/data.js`, not duplicated in rendering logic.
- Keep DOM rendering functions in `assets/js/main.js`.
- Use semantic HTML and preserve accessible labels, roles, focus behavior, and keyboard interactions.
- Escape or validate any future user-controlled content before inserting it with `innerHTML`.
- Preserve existing asset paths and naming conventions.
- Use targeted edits; avoid unrelated formatting changes.

## Git Rules

- The repository remote is configured as `origin`.
- Do not push unless explicitly requested.
- Keep commits focused and descriptive when committing is requested.
- Inspect existing changes before modifying or deleting files.

## Completion Checklist

1. Confirm the requested behavior works.
2. Run JavaScript syntax checks for changed JS files.
3. Check responsive behavior and accessibility for changed UI.
4. Review the diff for unrelated changes.
5. Report changed files, verification performed, and any skipped checks.
