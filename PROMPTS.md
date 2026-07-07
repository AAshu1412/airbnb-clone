# AI-Assisted Development — Prompt Sequence

> Tool: **Cursor** (Claude Opus 4 / Sonnet 4), used in agentic mode.  
> Total wall-clock time: ~4 hours across two sessions.

---

## Prompt 1 — Project Bootstrap & Design System

> Scaffold a Next.js 16 App Router project with TypeScript strict mode and Tailwind CSS v4. Analyse the reference at `https://airbnb-clone-umber-two.vercel.app/` and extract Airbnb's design tokens — foreground, muted, border colours, Rausch red, reserve gradient, border radii, and the Cereal font stack — into CSS custom properties wired through Tailwind's `@theme`. Build a hand-crafted `icons.tsx` module exporting line-art SVG components on a 32×32 viewBox with `stroke="currentColor"` since Airbnb's proprietary icon set isn't publicly available. Store all listing data, reviews, amenities, and photo metadata as typed constants in `src/lib/data.ts` with no backend.

---

## Prompt 2 — Listing Page Core Layout

> Build the full listing page in a single pass: header with logo / search pill / avatar cluster, 5-image hero gallery as a `1 large + 2×2 small` CSS grid with hover-darken transitions, title row with Share/Save actions, overview with host avatar and highlight rows, the "Guest favourite" laurel-wreathed rating banner, description with a 4-line clamp + bottom gradient fade mask + "Show more/less" toggle, "Where you'll sleep" card, dual-month calendar with a pre-selected 18–23 Oct range, and the sticky booking sidebar with price breakdown, date grid, gradient Reserve button, and "You won't be charged yet" text. Use `grid-cols-[1fr_372px]` for the two-column content+sidebar layout with `position: sticky` on the booking card.

---

## Prompt 3 — Amenities with Categorized Modal

> Extend the `Amenity` type with a `category` field and define ~50 amenities grouped into 10 categories (Bathroom, Bedroom and laundry, Entertainment, etc.) including unavailable items. Render a 2-column preview of the first 10 with a diagonal SVG strikethrough overlay on unavailable items. Build a scrollable full-list modal that dynamically groups all amenities by category with section headings and dividers, body scroll lock, and focus management.

---

## Prompt 4 — Reviews Section with Rating Breakdown & Scrollable Filters

> Implement the reviews section: large "4.95" rating with custom laurel SVG, "Guest favourite" title, a 7-column category strip (Overall rating bar chart + 6 scored categories with icons), "How reviews work" link, a horizontally scrollable row of filter pills with emoji icons and counts (scrollbar hidden via `scrollbar-width: none` and `::-webkit-scrollbar`), 2×2 review cards grid clamped to 3 lines each, "Show all N reviews" button opening a searchable modal with full ratings breakdown. Add a "Report this listing" link with flag icon centred below the booking card.

---

## Prompt 5 — Photo Tour Overlay with Dynamic Grids & URL Routing

> Build the full-screen Photo Tour overlay with a sticky top bar, category thumbnail tiles for quick jump navigation, and room-grouped photo sections in a sidebar label + photo grid layout. Implement count-aware grid logic: 1 photo → full-width; 2 → side-by-side; 3 → one full + two paired; 4 → 2×2; 5 → one full + 2×2; N>5 uses odd/even detection to eliminate whitespace. Sync open/close state with `?modal=PHOTO_TOUR_SCROLLABLE` via `history.pushState` and `popstate` listener so browser back/forward works naturally. The Lightbox single-photo viewer should support `ArrowLeft`/`ArrowRight` keyboard navigation, `Escape` to close, an `aria-live` photo counter, and focus restoration to the trigger element.

---

## Prompt 6 — Sticky Sub-Navigation & Scroll-Linked Behaviour

> Once the user scrolls past the hero gallery, slide a secondary navigation bar down from the top with `translateY` animation. Left side: anchor tabs (Photos, Amenities, Reviews, Location) with `border-bottom` active indicator driven by `IntersectionObserver`. Right side: price summary, star rating, review count, and a Reserve CTA. Smooth-scroll to each section on click with an 80px offset. Convert the main header from `sticky` to `static` so only this secondary bar sticks.

---

## Prompt 7 — Host, Things to Know & Footer Polish

> Build the "Meet your host" card with verified badge, stats (1,463 Reviews, 4.68★, 2 Years hosting), co-host avatar grid with initial-letter fallbacks, host response metrics, "Message host" CTA, and shield-icon payment disclaimer. Add "Born in the 80s" and school detail rows below the card. Implement a 3-column "Things to know" section (Cancellation policy / House rules / Safety & property) with icons and "Learn more" links. Render similar listings in a 4-column card grid and the full multi-column footer with legal links.

---

## Prompt 8 — Production Optimization & Build Validation

> Run a project-wide audit for accessibility, key/aria attributes, and proper focus containment on the lightbox and booking card overlays. Ensure the Next.js static production build runs cleanly with zero linting or unused import warnings, and verify the scroll-lock behavior locks body scroll correctly across all modals.

---

## Ongoing — Visual QA Passes

After each phase, iterative comparison against the reference to catch spacing, typography, colour, and interaction discrepancies — then fix in batch.
