# Project brief

<!-- TEMPLATE: the setup skill fills this in during the first session.
     If you are the AI and this file still contains TODO markers, run
     .claude/skills/setup/SKILL.md before doing anything else. -->

## Who

- **Owner**: TODO (name, what they do, how technical they are)
- **The project**: TODO (one paragraph: what this site/brand is, for whom)
- **Audience**: TODO (who visits, in what situation, deciding what)

## The site

- **Domain**: chaire-bopa.com
- **Live URL**: https://www.chaire-bopa.com
- **Languages**: French (only)
- **Pages**: `index` (homepage: hero, context band, mission, projets phares, approche, équipe, qui sommes-nous, soutenir), `innovations` (all 14 projects, tabbed by category: préopératoire/peropératoire/postopératoire/médico-économique - the definitive list lives in `site/src/data/projects.js`), `boptech` (the BOPtech platform), `publications`
- **Collections**: TODO (any repeated content: gallery, products, projects, events; where its data file lives)

## Derivatives

- **Decks**: TODO (list decks under site/public/decks/, each with its purpose and audience)
- **Apps**: TODO (list apps under apps/, each with what it does and where it's published)

## Governance

<!-- Filled during setup, in plain terms; revisit whenever someone new joins. -->

- **Who owns the accounts**: GitHub org `Chaire-BOPA`, repo `agentic-organization` (public). Cloudflare Pages was set up by a coworker.
- **Who can ask for changes**: at least two people so far - the coworker who originally set up the site, and Axelle Piguet (GitHub: axpiguet)
- **Who publishes**: team mode in practice, but still solo-style workflow - each person pushes directly to `main` via their own Claude session (not PRs). Worth revisiting per the README's "when you grow" note if this causes a real collision (one already happened: a coworker's commit landed while a session was mid-edit; resolved with a clean rebase, but it's a sign this repo now has more than one active editor). A second channel for the same risk: the owner sometimes uploads a file straight through GitHub's web UI (e.g. `source/brand/assets/graphics/phases.png`, 2026-08-25) instead of dropping it in `source/inbox/` - that lands as a commit on `main` mid-session too. `git fetch`/`pull --rebase` right before every push, not just at session start, catches both cases.
- **Access granted so far**: Axelle Piguet (GitHub: axpiguet) - admin, added 2026-08-17

## Current priorities

- Iterative homepage/site polish based on the owner's ongoing feedback (layout, copy, imagery) - most sessions right now are small, focused edits rather than big new builds.
- The owner has an established pattern for bigger visual pivots: export a handful of files (the homepage `.astro`, `tokens.css`, `site.css`, `Base.astro`) to a separate AI (ChatGPT) for a redesign proposal, then hand the result back as a zip with an integration doc for Claude Code to diff against the live project and merge carefully - not applied blindly. Expect this to recur; when it does, read the integration doc first, diff every file against current state before touching anything, and verify locally before publishing.
- Open fact gaps, tracked with `<!-- verify -->` notes in `source/content/`: HepatGreen, MesGardes, and the new "L'évaluation de la charge cognitive du chirurgien" project still have no real descriptions (placeholder text is live on `/innovations`). "Coût de l'hépatectomie" was removed from the validated project list on 2026-08-27 (owner's explicit call, not a gap). The homepage's productivity numbers (publications/thèses/logiciels/start-up, living in the `#projets` and `#soutenir` stat rows) are confirmed real figures.
- **Open, awaiting the owner's decision (flagged 2026-08-27)**: BOPEX (the experimentation tiers-lieu) no longer appears anywhere on the live site - it was dropped from the homepage's "Nos projets" section during the 2026-08-27 redesign pass and never given a new home. The sourced fact itself is safe (`source/content/projets.md`); BOPTECH has its own dedicated page (`boptech.astro`) but BOPEX doesn't. Ask the owner where (if anywhere) they want it before assuming it should just be re-added to the homepage.
- **Open, awaiting the owner's decision (flagged 2026-08-27)**: on `/innovations`, 10 of the 14 project cards (everything except LiverSight/BOPCAM/Goldfinger/Colette) now show a homogeneous blue SVG placeholder illustration instead of the site's older real photo for that project (e.g. PancreasSight, Henri, the greffons/compte-rendu/ressenti/pair photos) - a deliberate visual-consistency choice to match the reference mockup for this forms-only pass. The real photos are untouched on disk (`site/public/images/projets/`, `source/brand/assets/projets/`), just not displayed here for now. Revisit once real per-project visuals for the newer projects exist, or if the owner prefers the old photos back.

## History and decisions

The **detail** of how hypotheses and positioning evolved, and **why** (tied to each discussion),
lives in [`decisions.md`](decisions.md). Keep the milestones below; **after a discussion that moves
a hypothesis or the positioning, update `decisions.md`.**

<!-- Append dated one-liners for decisions worth remembering, newest first.
     Example: 2026-07-18 · dropped the blog idea, energy goes to the gallery. -->

- 2026-08-17 · Axelle Piguet onboarded as a second collaborator (GitHub: axpiguet, admin access) and set up to work through her own Claude session, pushing directly to main alongside her coworker.
- 2026-08-27 · Homepage visual direction pivoted: the continuous-gradient/mesh-echo/ambient-halo system (built up over the prior week) was replaced by a flat, hard-edged, blue-only-palette system from an externally-produced ("BOPA V2") redesign, integrated after a full diff against the live project. See `source/brand/design.md` for the specifics now in force.
- 2026-08-27 (later same day) · "Notre mission" and "Nos projets phares" rebuilt again from a second externally-sourced pack ("V3"), replacing the pipeline/vignette version from earlier that day - new `.bopa-mission-v2`/`.bopa-projects-v2` components, new illustrative project visuals (`images/projets-v2/`). BOPEX dropped out of view in the process (see the open item above).
- 2026-08-27 (third pack, same day) · `/innovations` rebuilt from a third externally-sourced pack, reorganized into the owner's validated 4-category/14-project structure ("Coût de l'hépatectomie" removed, "L'évaluation de la charge cognitive du chirurgien" added), reusing `.bopa-project-card` from the homepage rather than a new card component.
