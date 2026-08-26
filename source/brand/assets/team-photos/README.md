# Team headshots

Drop a real headshot here for anyone on the "Notre équipe" cards (GitHub web UI:
"Add file" → "Upload files"). Claude will process it and wire it up - once a
matching photo exists, that person's card shows the real photo instead of their
initials.

**Naming**: the filename must match the person's name, lowercase, hyphens instead
of spaces, no accents or titles (Pr/Dr) - e.g. "Pr Éric Vibert" → `eric-vibert.jpg`,
"Charles Hellec" → `charles-hellec.jpg`. If the name in `site/src/pages/index.astro`
(the `team` array) doesn't match, ask Claude to check the exact slug it expects.

Portrait or square works best - the avatar crops to a circle. Any number of
photos, added whenever someone has one ready; people without a photo yet keep
showing their initials, no code change needed either way.
