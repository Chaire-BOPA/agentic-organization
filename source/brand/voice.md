# Voice guide

How we write, everywhere: website, decks, emails, captions. The AI reads this before writing any word a visitor will read. The setup skill personalizes the TODO sections; after that, this file grows one rule at a time as the owner gives feedback.

## Who is speaking

TODO: one paragraph. Who the voice belongs to (a person, a studio, an organization), and the relationship with the reader (peer, guide, host, expert).

## Tone

TODO: three to five words with a sentence each explaining what the word means here. Example entries to replace:

- **Warm**: we sound like a person, never like a brochure.
- **Precise**: concrete nouns and numbers where we have them, no filler.
- **Calm**: no exclamation points doing the work adjectives should do.

## Rules

These start as sensible defaults; edit them to fit.

- Short sentences win. If a sentence needs two commas, try two sentences.
- Active voice, first person where natural.
- Concrete beats abstract: "we answer within a day" says more than "responsive service".
- Cut buzzwords on sight (leverage, seamless, innovative, solutions...). Keep a running list here of words the owner has banned: TODO.
- Titles in sentence case, no period.
- Numbers, dates, and prices follow the conventions of the site language, consistently.
- Never use the em dash "—", anywhere, ever, including in code comments. Always use a plain hyphen "-" instead. The owner finds the em dash reads as an AI writing tic.
  This rule had quietly regressed by 2026-08-27: several page `<title>` tags, one `aria-label`, and a handful of section-header code comments (added across earlier passes) had em dashes that went unnoticed until the owner caught one in a browser tab title. `<title>`/`aria-label`/`alt` attributes and code comments are exactly the places a "don't use X in body copy" rule is easiest to forget to apply, since they don't visually read like "content" while writing them - grep for "—" across `site/src` (and re-check after any pack integration) rather than only proofreading the parts that look like prose.

## Languages

French (default, at `/`) and English (at `/en/`, since 2026-09-03) - a real translation, not a machine one. Since the FR/EN architecture unification (2026-09-09, see below), FR and EN text live side by side as `fr`/`en` fields or `isEn` branches inside shared components/data (no more separate `projects.en.js` or independently-drifting page files) - but the two languages' WORDS stay editorially independent of each other regardless of where the code lives; only structure/design/behavior is truly shared (see the golden rule below).

Every language is written natively. Before publishing copy in a non-default language, do a dedicated pass reading it on its own, as a native speaker would, and fix anglicisms, calques, and literal constructions. A page that reads like a translation fails this guide even if every word is technically correct.

### Golden rule (permanent, owner-set 2026-09-09): new content is bilingual by default

When the owner asks to add anything new - a project, a card, a section, a title, a paragraph, a button, a caption, a form field, anything a visitor reads - treat it as implicitly requiring both languages, even if only the French text was given. Never leave new content EN-less "because it wasn't asked for explicitly": Métatron and FluoGuide (two projects added 2026-09-08) briefly existed FR-only exactly this way, until the owner had to ask for the EN pass separately - that's the failure mode this rule exists to prevent.

For new content:
1. Add it in French.
2. Translate it into English yourself - professional, natural, matching BOPA's scientific/institutional register (same standard as the rest of this section) - never a placeholder, never left for later.
3. Add the EN version into the English page/data alongside the FR one.
4. Same structure, same design, same behavior in both languages (this part was already true - see CLAUDE.md's "Verify before publishing").

This does **not** run in reverse for pure editorial changes. "Improve this English sentence" or "replace this English text with..." touches only the EN string; the FR original is untouched. Likewise, a French-only reformulation never triggers an automatic EN retranslation - UNLESS the FR edit actually changes the meaning (adds, removes, or contradicts information), in which case the EN version is out of sync with the facts, not just the wording, and must be brought back into agreement. New content always gets both languages; a same-meaning rewording in one language stays confined to that language.

Design/structure/UX/responsive/components/animations/bug fixes are a separate axis, always shared automatically regardless of the above - that's an architecture property (one shared component/data source per page, since 2026-09-09), not an editorial one, and needs no per-task reminder.

**EN-specific conventions established 2026-09-03:**
- "Chaire Innovation BOPA" → "the BOPA Innovation Chair" (or "the BOPA Chair" for repeats in the same paragraph) - an institutional-chair title is translated, not left in French.
- Real institution names (AP-HP, Institut Mines-Télécom, Université Paris-Saclay, and each one's own "Fondation ..." name) stay in French - they're the organizations' actual registered names, not descriptive phrases.
- "Pr" (French title abbreviation) → "Prof." for a person's name in EN copy - also update the `slugify`/initials regex in `en/index.astro` if the team roster's title prefixes ever change, since it strips the title before deriving a photo slug/initials.
- Project/brand names never change (BOPA, BOPtech/BOPTECH per the casing already used inline, BOPEX, LiverSight, PancreasSight, LiverMatch, BOPCAM, Henri, Goldfinger, Colette, BOPA Value, MesGardes, HepatGreen, Uncovr) - this notation section's casing rules apply to English copy exactly as they do to French.
- Numbers follow English convention in English copy (thousand separator comma, not the French space) - e.g. FR "1 500" → EN "1,500".

## Notation

- **BOPA**: all caps, the Chaire's name (Chaire Innovation Bloc OPératoire Augmenté).
- **BOPtech**: mixed case (BOP + lowercase "tech"), the technology platform.
- **BOPEX**: all caps, the experimentation tiers-lieu.
- **BOPCAM**: all caps. Flip-flopped once already (corrected to "Bopcam" title-case, then reverted back to BOPCAM) - don't re-title-case it without asking.
- **METATRON**: all caps (owner correction, 2026-09-09; was "Métatron" - matches the wordmark's own logo typography), no accent. Same spelling FR and EN.
- Other project names are proper nouns, not acronyms - title case: **Uncovr**, **LiverSight**, **PancreasSight**, **Colette**, **Henri**, **Goldfinger**.

## Examples

Keep two or three short before/after pairs from real feedback, so the tone is shown as well as described.

- Cut the wind-up, lead with the concrete thing. BOPtech's intro was three cascading paragraphs (funders, then ecosystem, then a mission statement) before reaching "Notre offre de services" - collapsed to one tight paragraph and dropped the mission-statement paragraph entirely.
- Avoid the "De l'importance de X" template for short taglines - it states that something matters instead of saying what to do about it.
  > Before: "De l'importance de la communication." / "De l'importance de l'analyse du réel." / "De l'importance du suivi."
  > After: "Communiquer pour rassurer le patient." / "Des analyses en temps réel pour de meilleurs résultats." / "Des outils numériques pour un meilleur suivi."
