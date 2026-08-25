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
- **Pages**: `index` (homepage: hero, approche, méthode, projets, équipe, soutenir), `innovations` (all projects by phase: pré/per/postopératoire), `boptech` (the BOPtech platform), `publications`
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
- Open fact gaps, tracked with `<!-- verify -->` notes in `source/content/`: the three médico-économique projects (Hepatgreen, MESGARDES, Coût de l'hépatectomie) now all have images, but still no real descriptions (placeholder text is live on the site). The homepage hero stat band is down to one real placeholder left: "100% co-construits avec les soignants" - the other three are confirmed (54 publications, 8 thèses soutenues, projets innovants computed live from `site/src/data/projects.js`).

## History and decisions

The **detail** of how hypotheses and positioning evolved, and **why** (tied to each discussion),
lives in [`decisions.md`](decisions.md). Keep the milestones below; **after a discussion that moves
a hypothesis or the positioning, update `decisions.md`.**

<!-- Append dated one-liners for decisions worth remembering, newest first.
     Example: 2026-07-18 · dropped the blog idea, energy goes to the gallery. -->

- 2026-08-17 · Axelle Piguet onboarded as a second collaborator (GitHub: axpiguet, admin access) and set up to work through her own Claude session, pushing directly to main alongside her coworker.
