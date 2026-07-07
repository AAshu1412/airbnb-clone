# Airbnb Listing Clone

A pixel-perfect, behaviourally faithful clone of a real Airbnb listing page and
its two overlay views, built as a take-home task.

**Reference:** `https://airbnb-clone-pi-beryl-46.vercel.app/`
**Listing:** _Romantic Jacuzzi 1BHK Candolim | Mirashya UG10_

## Three views

| View | What it is |
|------|------------|
| **Listing page** | Full property page: header, hero gallery grid, overview, guest-favourite box, host, highlights, description, "where you'll sleep", amenities (+ modal), calendar, review summary + reviews (+ modal), map, host section, similar listings, footer. |
| **Photo Tour** | Full-screen gallery opened from **Show all photos** or any hero image — category tiles + room-grouped sections. |
| **Lightbox** | Single-photo viewer opened from any gallery photo, with prev/next arrows, a photo counter, and **←/→** keyboard navigation. |

Desktop only, per the brief.

## Tech stack

- **Next.js 16** (App Router) + **React 19**, TypeScript (strict)
- **Tailwind CSS v4** with Airbnb design tokens in `src/app/globals.css`
- `next/image` for responsive AVIF/WebP photography
- No backend — all content is static data in `src/lib/data.ts` (browser-only,
  keeps the implementation focused as the brief allows)

## Getting started

```bash
bun install
bun dev
```

## Project structure

```
src/
  app/
    layout.tsx          # fonts, metadata
    page.tsx            # composes the listing page
    globals.css         # design tokens + motion + focus rings
  components/
    Header.tsx
    BookingCard.tsx
    Amenities.tsx       # section + full-list modal
    Calendar.tsx        # dual-month, selected 18–23 Oct 2026
    Reviews.tsx         # rating summary + category strip + grid + modal
    MapSection.tsx      # stylized Airbnb-style map
    HostSection.tsx
    SimilarListings.tsx
    Footer.tsx
    icons.tsx           # hand-built Airbnb-style line icons
    gallery/
      GalleryProvider.tsx  # overlay state, keyboard + focus management
      Gallery.tsx          # hero grid (1 big + 2×2)
      PhotoTour.tsx        # full-screen tour
      Lightbox.tsx         # single-photo viewer
  lib/
    data.ts             # listing content, photos, reviews, amenities
public/photos/          # listing photography
scripts/shot.mjs        # visual-QA screenshot capture
architecture-diagram.png
```

## Interaction & accessibility

- **Keyboard:** `Esc` closes any overlay/modal; `←/→` navigate the lightbox;
  focus moves into a dialog on open and is **restored to the trigger** on close.
- **ARIA:** overlays use `role="dialog"` + `aria-modal`; the lightbox counter is
  an `aria-live` region; icon-only buttons carry `aria-label`s; decorative SVGs
  are `aria-hidden`.
- **Motion:** hover-darken on photos, fade/zoom overlay entrances — all gated
  behind `prefers-reduced-motion`.
- **Focus visible:** custom `:focus-visible` ring; scroll locked while modals
  are open.

## Architecture

See [`architecture-diagram.png`](./architecture-diagram.png) for the
production-scale marketplace design (frontend, edge/CDN, microservices,
storage, search/discovery, async pipeline, and deployment). The shaded tier is
what this clone implements.

## AI-native workflow

Built with Cursor agents. Reusable configs live in the repo:

- `.cursor/rules/airbnb-clone.mdc` — always-on project conventions
- `.cursor/agents/design-fidelity-reviewer.md` — read-only visual QA subagent
- `.cursor/agents/accessibility-auditor.md` — read-only a11y subagent
- `.cursor/skills/pixel-compare/SKILL.md` — screenshot-diff skill (`scripts/shot.mjs`)

The full sequence of prompts used is in [`PROMPTS.md`](./PROMPTS.md).

## Notes on assets

The reference is served behind a Vercel/BotID security checkpoint, so its DOM
and images cannot be scraped. All photography was reproduced from
user-provided reference screenshots of the listing; nothing was lifted from the
reference codebase.
