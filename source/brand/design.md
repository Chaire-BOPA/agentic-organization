# Design guide

How we look, everywhere: the website, the decks, any image we produce. The AI reads this plus `tokens.css` before any visual decision. The setup skill personalizes it; after that it grows one rule at a time.

## Philosophy

Institutional but alive: a hospital-and-engineering research chair, not a startup. Confident, restrained, generous whitespace, one big scrollable home page. Inspired by owkin.com and whitelabgx.com — mostly light, clinical-clean sections, punctuated by a couple of full-bleed dark-blue blocks for emphasis rather than color everywhere. Every visual decision should be defensible against this paragraph.

## Tokens

`tokens.css` is the only place where colors, fonts, and the spacing scale are defined. Nothing in `site/` or in a deck hardcodes a hex value, a font name, or a magic pixel number. Adding a design idea that needs a new value means adding the token first, with a name that says what it's for.

- **Color**: the BOPA logo's four blues (`--bopa-blue-1..4`) are the source. `--color-accent` is the darkest (`--bopa-blue-1`, best contrast on white); `--color-dark` is a deeper navy used only for full-bleed emphasis sections (hero, one spotlight section per page — not every other section). Neutrals are cool-toned to sit with the blues: a light blue-gray `--color-bg`, deep navy `--color-ink` instead of pure black.
- **Type**: still system fonts (no webfont chosen yet), but display headings use `font-weight: 700` and `--tracking-tight` (-0.02em) to read as confident and current rather than default browser serif. Revisit if the owner picks a webfont.

## Type

- Display face and text face are both the system sans stack for now (`--font-display` / `--font-text` in tokens) — no webfont has been chosen. If the owner picks one, self-host it (put files in `site/public/fonts/`, declare with `font-display: optional`) so the site never flashes or jumps on load.
- One type scale, defined in tokens, used everywhere. Resist per-page font sizes.

## Layout and components

- Generous whitespace; when in doubt, remove an element instead of shrinking everything.
- Build a small set of components and reuse them. Keep an inventory here as they appear, with a pointer to where each lives. A new page should mostly assemble existing components.
  - `.section-block` (+ `.dark` variant): full-bleed section wrapper used to build the scrollable home page — see `site/src/styles/site.css`.
  - `.kicker`, `.lede`: small uppercase label above a heading, and a larger intro paragraph below it.
  - `.card-grid` / `.card`: simple bordered cards, used for the team and projects sections. Cards in the same row stretch to equal height on desktop by default (grid `align-items: stretch`) - no mobile override needed, `auto-fit` already collapses multi-card rows to one column there. When a card has a photo/video, make `.card` a flex column and give the media `margin-top: auto` so it lands flush at the bottom instead of leaving slack below it.
  - `.logo-grid`: partner logo wall, used by the partners section.
  - `.stat-row`: big number + label, used by the publications section.
  - `.nav-dropdown`: `<details>`-based dropdown menu, used by the two top-nav groups (La Chaire, Innovations).
- Motion is subtle and purposeful, or absent. Never bouncy by default.

## Imagery

- Originals live in `source/brand/assets/` at full resolution; the site serves processed copies only (see the images section of `source/formats/website.md`).
- Photography is candid and on-site: the real team, real equipment, real procedures - not stock photos or staged compositions. Occasional explanatory diagrams for technical concepts (e.g. a device schema) sit alongside the photography rather than replacing it.

## Responsiveness, learned the hard way

- Every visual change gets checked at mobile width (~390px) and a normal desktop before publishing, and at ~2560px if the audience uses large screens.
- When adapting to large screens, scale whole modules together (type, dimensions, spacing, wraps). Scaling only headings leaves a small design floating in whitespace.
- Late CSS wins ties: media-query override blocks go at the end of the style block they override, or they silently lose the cascade.
- Adjacent `.section-block`s stack their padding-top + padding-bottom into a gap that reads as too big (default `--space-6` top and bottom = 16rem combined). Check every new section junction for this; the fix already used several times is `padding-bottom: var(--space-5)` on the section above and `padding-top: var(--space-5)` on the one below.
- A `vw`-based width tuned for desktop (to track some other element's own `vw` sizing) silently caps that same element at a fraction of the screen on mobile too, with no visual warning - it just quietly shrinks. Anything sized in `vw` needs an explicit check at ~375px, not just at desktop widths; the hero's text column once capped itself at 50vw on a phone (half the screen, for no reason - there was no second column to leave room for).
- No split screens or side-by-side columns on phones - single column, full width, always. When adding a new two-column layout, its mobile collapse is not optional and needs verifying at ~375px before publishing, not assumed from the desktop code.
- Body paragraphs justify (with `hyphens: auto`) below 40rem instead of ragged-left; left-aligned above that. Site-wide rule, not per-component.

## Accessibility baseline

- Text over background always passes contrast (4.5:1 for body text).
- Every meaningful image has real alt text.
- The site works with keyboard only; interactive elements are actual links and buttons.
