# Design guide

How we look, everywhere: the website, the decks, any image we produce. The AI reads this plus `tokens.css` before any visual decision. The setup skill personalizes it; after that it grows one rule at a time.

## Philosophy

Institutional but alive: a hospital-and-engineering research chair, not a startup. Confident, restrained, generous whitespace, one big scrollable home page. Inspired by owkin.com and whitelabgx.com — mostly light, clinical-clean sections, punctuated by a couple of full-bleed dark-blue blocks for emphasis rather than color everywhere. Every visual decision should be defensible against this paragraph.

## Tokens

`tokens.css` is the only place where colors, fonts, and the spacing scale are defined. Nothing in `site/` or in a deck hardcodes a hex value, a font name, or a magic pixel number. Adding a design idea that needs a new value means adding the token first, with a name that says what it's for.

- **Color**: the BOPA logo's four blues (`--bopa-blue-1..4`) are the source. `--color-accent` is the darkest (`--bopa-blue-1`, best contrast on white); `--color-dark` is a deeper navy used only for full-bleed emphasis sections (hero, one spotlight section per page — not every other section). Neutrals are cool-toned to sit with the blues: a light blue-gray `--color-bg`, deep navy `--color-ink` instead of pure black.
- A solid `--color-accent` fill on a dark navy section reads as neon, not premium. But buttons still need a visible contour there, not bare text either - the "Faire un don" CTA went from solid fill, to plain text-only, to its current form: `.btn-outline-premium` (dark translucent fill + white inset outline + white text), the same reusable class the hero buttons use. That's the standard treatment for a button on a dark section here.
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
  - Auto-advancing crossfade carousel (dots, pause on hover/focus, restart timer on manual navigation): the homepage's project carousel (`#project-slider` in `index.astro`) is the original; the team photo gallery (`#team-gallery`) copies the exact same pattern. Reuse this pattern for any future "cycle through N things" need rather than inventing a new one.
  - A gallery that should grow without a code change: read the folder with `readdirSync` in the page frontmatter instead of hardcoding a list (see the team gallery) - any file dropped into the matching `site/public/images/...` folder becomes a slide automatically. Pair with a README in `source/brand/assets/<name>/` telling the owner where to drop their own originals.
- Motion is subtle and purposeful, or absent. Never bouncy by default.

## Imagery

- Originals live in `source/brand/assets/` at full resolution; the site serves processed copies only (see the images section of `source/formats/website.md`).
- Photography for everything that can be photographed - the real team, real equipment, real procedures, not stock photos or staged compositions. Diagrams/schematics are fine specifically for explaining how a technical mechanism works (e.g. InMachina's "comment ça marche" schema) - that's a different job than illustrating a person, place, or object, and a photo can't do it. This flip-flopped twice already (schema removed for a reused photo, then restored) - don't re-remove the InMachina schema without asking; if a similar "photo vs. diagram" call comes up elsewhere, ask rather than guessing which way this project leans.

## Responsiveness, learned the hard way

- Every visual change gets checked at mobile width (~390px) and a normal desktop before publishing, and at ~2560px if the audience uses large screens.
- When adapting to large screens, scale whole modules together (type, dimensions, spacing, wraps). Scaling only headings leaves a small design floating in whitespace.
- Late CSS wins ties: media-query override blocks go at the end of the style block they override, or they silently lose the cascade. This has caused real bugs twice now (a mobile hero width, then a mobile nav button that overflowed its menu) - when adding *any* mobile/responsive override for a selector that already has an unconditional rule elsewhere, place the `@media` block immediately after that rule (not wherever feels natural in the file), and verify the computed style at the target width, not just that the code looks right.
- Never put a standard CSS property and its `-webkit-`-prefixed twin (`backdrop-filter`, `mask-image`, etc.) as two declarations in the *same* rule - the production build's CSS minifier treats them as redundant duplicates and silently drops one (whichever came second in source), breaking whichever browser needed the dropped one. Put the `-webkit-` version in its own rule instead, guarded by `@supports not (<property>: <value>)`. This is a build-output bug, invisible in the dev server and in the source - the only way to catch it is to grep the actual files in `dist/` after `npx astro build`.
- Same "works in dev, breaks in the real build" trap for Node frontmatter code: don't resolve a filesystem path with `new URL('../relative/path', import.meta.url)` in a page's frontmatter - the production build bundles that file into `dist/.prerender/chunks/`, so the relative path resolves against the wrong location and throws `ENOENT` at build time even though `astro dev` never showed a problem. Use `path.join(process.cwd(), ...)` instead (stable in both modes, since `cwd` is always the `site/` root when running `astro dev`/`astro build` from there). Any page doing filesystem work (like the team gallery's `readdirSync`) needs an actual `npx astro build` run before shipping, not just a dev-server check.
- `.wrap`'s max-width/centering is defined as `.section-block .wrap` (site.css) - a descendant selector, not a standalone class. An element placed *between* two sections (not nested inside either one - e.g. a card straddling a section boundary with a negative margin) gets `class="wrap"` but silently stretches to the full viewport width, since the scoped rule never matches it. Give it its own explicit `max-width: var(--max-width); margin-left: auto; margin-right: auto;` (plus a `calc(100% - 2 * var(--space-4))` width so it still keeps edge padding below the max-width breakpoint) instead of assuming `.wrap` alone is enough.
- Adjacent `.section-block`s stack their padding-top + padding-bottom into a gap that reads as too big (default `--space-6` top and bottom = 16rem combined). Check every new section junction for this; the fix already used several times is `padding-bottom: var(--space-5)` on the section above and `padding-top: var(--space-5)` on the one below.
- A `vw`-based width tuned for desktop (to track some other element's own `vw` sizing) silently caps that same element at a fraction of the screen on mobile too, with no visual warning - it just quietly shrinks. Anything sized in `vw` needs an explicit check at ~375px, not just at desktop widths; the hero's text column once capped itself at 50vw on a phone (half the screen, for no reason - there was no second column to leave room for).
- No split screens or side-by-side columns on phones - single column, full width, always. When adding a new two-column layout, its mobile collapse is not optional and needs verifying at ~375px before publishing, not assumed from the desktop code.
- Body paragraphs justify, unconditionally, at every width (was mobile-only at first; corrected to apply everywhere) - but `hyphens: none`. `hyphens: auto` was tried to keep justified text from stretching, but it splits words mid-line, which reads worse than an early line wrap. Never re-enable it.
- The homepage's shared `main` gradient (see `site.css`) is a single white-to-cold-blue arc, only ever visible from the end of the hero's floating stat band through `#projets` (the hero itself, the stat band, and `#equipe`/`#soutenir` further down are all fully opaque, so whatever the gradient does behind them doesn't matter). Its stops are **fixed px, not %** - a % version was tried twice and broke twice: any edit that changed a section's height (trimmed copy, added/removed content) silently shifted which section landed on which color, once leaving the entire visible range washed-out white because `#equipe`'s start had drifted to 54% while the "fully blue" stop still targeted 80%. Fixed px doesn't drift with content-length changes above or below the gradient's own range.
  A second, subtler version of the same bug: even with fixed px, don't start the ramp's first color stop at `0px` if the top of `main` is covered by opaque content (the hero + its overlapping stat card, here) - that stretch of the ramp is spent somewhere invisible, so by the time content actually becomes visible the transition is already mostly "used up" and reads as a flat, colorless stripe rather than a perceptible gradient. Hold the starting color flat through the last opaque pixel (currently 664px) *before* the ramp begins, so the visible portion gets the ramp's full range. Re-anchor both this starting point and the endpoint (currently 3700px) if the hero/stat-band height or `#equipe`'s start position (currently ~3786px) move meaningfully - check with `document.querySelector('#equipe').getBoundingClientRect()`.
- Collapsed accordions (`<details>`) are for secondary/supplementary detail, not for a page's primary content - BOPtech's named projects (InMachina, Salle Hybride) were once the last thing on the page, hidden behind a click. Primary content goes early and stays visible by default.

## Accessibility baseline

- Text over background always passes contrast (4.5:1 for body text).
- Every meaningful image has real alt text.
- The site works with keyboard only; interactive elements are actual links and buttons.
