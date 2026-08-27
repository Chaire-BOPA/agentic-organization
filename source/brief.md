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
- **Pages**: `index` (homepage: hero, context band, mission, projets phares, **qui sommes-nous** - a single rich chapter right after projets phares, covering the Chaire/recherche, l'environnement clinique du CHB, l'équipe (`#equipe` now lives inside it), et le mécénat -, **nous soutenir** (`#soutenir`, short/premium, real AP-HP donation link) + **nous contacter** (`#contact`, real email/address/LinkedIn de la Chaire, Web3Forms), approche), `innovations` (all 14 projects, tabbed by category: préopératoire/peropératoire/postopératoire/médico-économique - the definitive list lives in `site/src/data/projects.js`), `boptech` (the BOPtech platform), `publications`
- **Chaire contact facts (2026-08-27, owner-confirmed)**: general contact email `charles.hellec@aphp.fr`; postal address Hôpital Paul-Brousse, 12 avenue Paul Vaillant Couturier, 94804 Villejuif Cedex; the Chaire's own LinkedIn company page (distinct from personal team member profiles) is `https://www.linkedin.com/company/chaire-innovation-bopa/?viewAsMember=true`. Real AP-HP donation link: `https://soutenir.fondationaphp.fr/BOPA/`.
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
- HepatGreen, MesGardes, and "Évaluer la charge cognitive du chirurgien" now have real (if still short) owner-provided descriptions as of the 2026-08-27 V3 editorial pass - no longer an open fact gap. "Coût de l'hépatectomie" was removed from the validated project list the same day (owner's explicit call). The homepage's productivity numbers (publications/thèses/logiciels/start-up, living in the `#projets` and `#soutenir` stat rows) are confirmed real figures.
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
- 2026-08-27 (fourth pack, same day) · `/innovations` editorial pass: all 14 titles/descriptions rewritten (two renames - "Optimiser l'allocation des greffons" → LiverMatch, the VBHC project → BOPA Value), every card made non-clickable with the arrow removed (only LiverSight's video and the Compte-rendu card's Uncovr link stay as small explicit text CTAs), and a one-off gold accent (`--color-gold`) added for the Médico-économique category only.
- 2026-08-27 (sixth pack, same day) · "Nous soutenir" + "Nous contacter" rebuilt as two short, separate sections (`.bopa-support`/`.bopa-contact`) replacing the old single dark "donate" section, positioned right after the "Qui sommes-nous" chapter and ahead of "Notre approche". The owner explicitly chose to drop the old section's 5 impact cards and stat row (1.6M€/14 projets/8 thèses/2 logiciels/2 start-up) from display rather than keep or relocate them, to match the reference exactly. Real facts reused throughout (see the contact-facts line above); the contact form keeps its exact prior Web3Forms mechanism, gaining a real Sujet dropdown (the site's actual 3 contact reasons) and a consent checkbox.
- 2026-08-27 (fifth pack, same day) · "Qui sommes-nous" rebuilt as a rich 4-part chapter (`.about-v2`, own `<style>` block in `index.astro`) placed right after "Nos projets phares", replacing the old short qui-sommes-nous text block and folding the old standalone `#equipe` section into it as its "03" subsection (`#equipe` anchor now lives on that inner subsection - nav links to both still work by id). This re-homes BOPEX (see the now-removed open item above) as one of two "réalisations nées de BOPA, aujourd'hui autonomes" alongside BOPTECH, each linking to its real destination (BOpEx: `aphp.fr/bopex`, no internal page exists; BOPTECH: the site's own `/boptech`). Team roster shown: Pr Éric Vibert, Charles Hellec, Elie Farah, Axelle Piguet - the owner explicitly chose to keep this real 4 rather than the pack's suggested swap-in of an unverified fifth person ("Claire Barlette") who has no real photo/LinkedIn/credentials anywhere in the project. The owner supplied a real CHB building photo through `source/inbox/` this session, now at `site/public/photos/centre-hepato-biliaire.png` (original in `source/brand/assets/photos/`) - the section's frontmatter auto-detects it by filename the same way team headshots do, so a future replacement just needs the file swapped, no code change.
