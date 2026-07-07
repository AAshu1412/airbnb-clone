# AI-Assisted Development — Prompt Sequence

> This document records the full sequence of prompts used during development.  
> Tool: **Cursor** (Claude Opus 4 / Sonnet 4), used in agentic mode throughout.  
> Total wall-clock time: ~4 hours across two sessions.

---

## Phase 0 — Project Scaffolding & Design System

### 0.1 — Bootstrap
> Scaffold a Next.js 16 App Router project with TypeScript strict mode and Tailwind CSS v4. Use `next/image` for all photography. Set up the directory structure with `src/app/`, `src/components/`, `src/lib/`, and `public/photos/`. No backend — store all listing data, reviews, amenities, and photo metadata as typed constants in `src/lib/data.ts`.

### 0.2 — Design Tokens
> Analyse the reference page at `https://airbnb-clone-umber-two.vercel.app/` and extract the Airbnb design tokens: foreground (`#222222`), muted text, border colours, the Rausch red (`#FF385C`), the reserve-button gradient, border radii, and the font stack (Cereal / system fallback). Define them as CSS custom properties in `globals.css` and wire them into Tailwind's `@theme` block so they're available as utility classes like `text-abb-fg`, `bg-abb-rausch`, etc.

### 0.3 — Icon Library
> The reference uses Airbnb's proprietary icon set which isn't publicly available. Build a hand-crafted `icons.tsx` module that exports a single `Icon` object with named SVG components matching the reference: `Star`, `Heart`, `Share`, `Search`, `Globe`, `Menu`, `User`, `ChevronLeft`, `ChevronRight`, `Close`, `Check`, `Wifi`, `Tv`, `Kitchen`, `Washer`, `Parking`, `AC`, `Pool`, `Key`, and `Grid`. Each component should accept `size` and spread standard SVG props. Use a 32×32 viewBox with `stroke="currentColor"`, `strokeWidth={2}`, and `fill="none"` for a consistent line-art aesthetic.

---

## Phase 1 — Listing Page Core Layout

### 1.1 — Header
> Build the site header matching the reference: Airbnb logo (left), a centred search pill with "Anywhere · Any week · Add guests" and a circular search icon, and a right cluster with "Airbnb your home" text link, globe icon, and a hamburger/avatar pill. Use `border-b` for the bottom separator. The header should scroll with the page (static positioning, not sticky).

### 1.2 — Hero Gallery Grid
> Implement the 5-image hero gallery as a `1 large + 2×2 small` CSS grid with `gap-2` and `rounded-xl overflow-hidden`. Each image should darken on hover (`brightness-[0.92]` transition). Clicking any image or the "Show all photos" button opens the Photo Tour overlay. Use `next/image` with `priority` on the hero image and appropriate `sizes` hints for responsive loading.

### 1.3 — Title Row & Listing Overview
> Render the listing title, subtitle ("Entire villa in Candolim, Goa, India · 3 guests · 1 bedroom · 1 bed · 1 bathroom"), and the Share/Save action buttons. Below that, build the overview section with the host avatar, "Hosted by Mirashya Homes" byline, and the three highlight rows (Dedicated workspace, Self check-in, Free cancellation) with icons matching the reference.

### 1.4 — Guest Favourite Badge
> Implement the "Guest favourite" banner with the laurel wreath SVG framing the 4.95 rating. Add "One of the most loved homes on Airbnb" text below. This section should visually match the reference's centred decorative layout with the custom laurel paths.

### 1.5 — Description with Translation Banner & Show More
> Add a translation info banner above the description ("Some info has been automatically translated. Show original language"). Render the description text clamped to 4 visible lines using `max-h` with `overflow-hidden`. Apply a bottom `bg-gradient-to-t from-white via-white/80 to-transparent` fade mask when collapsed. Implement a "Show more ›" toggle that expands to full text and switches to "Show less" with a rotated chevron. Track expanded state with `useState`.

### 1.6 — "Where You'll Sleep" Section
> Render a bordered section with a bed illustration, room title "Bedroom", and "1 double bed" caption — matching the reference card style with rounded corners and a subtle border.

### 1.7 — Booking Card (Sticky Sidebar)
> Build the sticky booking sidebar: price display (₹28,499 total / ₹5,699 × 5 nights), date picker grid (CHECK-IN / CHECKOUT), guests dropdown, the gradient "Reserve" button, "You won't be charged yet" assurance text, and the price breakdown (base × nights, discount, service fee, taxes, total). The card should use `position: sticky; top: 28` within the right column of a `grid-cols-[1fr_372px]` layout. Add "Free cancellation before 17 October" above the Reserve button.

---

## Phase 2 — Amenities Section

### 2.1 — Categorized Data Model
> Extend the `Amenity` type in `data.ts` with a `category` field. Define ~50 amenities grouped into categories: Bathroom, Bedroom and laundry, Entertainment, Heating and cooling, Home safety, Kitchen and dining, Location features, Outdoor, Parking and facilities, Services. Include both available and unavailable items (e.g., "Carbon monoxide alarm — unavailable", "Smoke alarm — unavailable").

### 2.2 — Amenities Preview Grid
> Display the first 10 amenities in a 2-column layout. Each row shows an icon (mapped from the icon name in data) and the label. For unavailable items, render the icon with a diagonal strikethrough line overlay (a rotated SVG `<line>`) and apply `line-through text-abb-muted` to the label. Add a "Show all N amenities" button at the bottom.

### 2.3 — Amenities Modal
> Implement a full-screen scrollable modal that groups all amenities by category. Each category gets a heading and a divider. Render each amenity row with its icon and availability status. Include a close (×) button and lock body scroll while the modal is open.

---

## Phase 3 — Calendar Section

### 3.1 — Dual-Month Calendar
> Build a dual-month calendar component displaying October and November 2025 side by side. Pre-select the range 18–23 October (5 nights). Highlight selected dates with the Airbnb dark circle style, range dates with a light gray background, and today with a subtle indicator. Add "Clear dates" and navigation arrows. Show the "5 nights in Candolim" header with formatted date range.

---

## Phase 4 — Reviews Section

### 4.1 — Rating Summary & Category Strip
> Implement the reviews header with the large "4.95" rating flanked by laurel wreaths, "Guest favourite" title, and descriptive text. Below, render a 7-column category strip: "Overall rating" (with a stacked bar chart showing the distribution) plus 6 scored categories (Cleanliness 5.0, Accuracy 5.0, Check-in 5.0, Communication 5.0, Location 4.8, Value 4.8) — each with its label, score, and a category-specific icon. Add the "How reviews work" underlined link.

### 4.2 — Horizontal Scroll Filter Pills
> Below the category strip, add a horizontally scrollable row of filter chips: Comfort (6), Accuracy (5), Hot tub (5), Condition (4), Hospitality (8), Cleanliness (4), Amenities (2), etc. Each pill should have an emoji icon, label, and count. Hide the scrollbar across all browsers using `scrollbar-width: none` and `::-webkit-scrollbar { display: none }`. Ensure the row overflows and scrolls cleanly on smaller viewports.

### 4.3 — Review Cards Grid
> Render the first 6 reviews in a 2-column grid. Each card shows the reviewer's avatar, name, location, date, and review text clamped to 3 lines with a "Show more" link. Add a "Show all N reviews" button below.

### 4.4 — Reviews Modal
> Build a scrollable modal listing all reviews with the category rating breakdown at the top. Include a search input for filtering reviews. Lock body scroll and manage focus on open/close.

---

## Phase 5 — Map, Host & Footer Sections

### 5.1 — Stylized Map
> Create a stylized Airbnb-like map section using pure SVG/CSS (no external map library). Render a decorative map with a location pin, neighbourhood shapes, and the "Where you'll be" heading. Include "Candolim, Goa, India" as the location label and neighbourhood highlights text.

### 5.2 — Host Section with Co-hosts
> Build the "Meet your host" section with: a host card (circular photo, verified badge, stats for Reviews/Rating/Years hosting), co-host avatars grid (8 co-hosts with images or initial-letter fallbacks), host response details, "Message host" button, and a shield-icon payment safety disclaimer. Below the card, add "Born in the 80s" and "Where I went to school: NICMAR GOA" detail rows with balloon and graduation cap icons.

### 5.3 — Things to Know
> Implement a 3-column "Things to know" section: Cancellation policy (calendar icon, free cancellation deadline text, "Learn more" link), House rules (key icon, check-in/checkout times, guest limit), and Safety & property (shield icon, alarm statuses, camera notice). Each column should have its icon, heading, detail lines, and an underlined "Learn more" link.

### 5.4 — Similar Listings & Footer
> Render a "More stays nearby" section with a 4-column grid of listing cards (image, title, host, price, rating). Build the footer with Airbnb-style column groups (Support, Hosting, Airbnb), language/currency selectors, and legal links.

---

## Phase 6 — Photo Tour Overlay

### 6.1 — Photo Tour Shell
> Build the full-screen Photo Tour overlay opened from "Show all photos" or any hero image click. Include a sticky top bar with back arrow, centred "Photo tour" title, and share/save buttons. Below the bar, render clickable category thumbnail tiles in a horizontal grid for quick navigation.

### 6.2 — Room-Grouped Photo Sections
> Below the category tiles, render each room/area as a section with the room name, optional caption, and its photos. Use a left sidebar layout: room label on the left, photo grid on the right. Clicking any photo opens the single-photo Lightbox.

### 6.3 — Dynamic Photo Grid Layout
> Implement count-aware grid layouts for the photo sections: 1 photo → full-width; 2 photos → side-by-side 2-column; 3 photos → first full-width then 2-column for the remaining two; 4 photos → 2×2 grid; 5 photos → first full-width then 2×2 for the rest. For N>5: if odd, lead with one full-width then pair the rest; if even, render all in a 2-column grid. This eliminates whitespace gaps and maintains consistent aspect ratios.

### 6.4 — URL State Sync
> Sync the Photo Tour open/close state with the browser URL. On open, push `?modal=PHOTO_TOUR_SCROLLABLE` via `history.pushState`. On close, remove the query param. Listen for `popstate` events so the browser back button closes the tour naturally, and loading the URL directly with the param opens the tour on mount.

---

## Phase 7 — Lightbox Overlay

### 7.1 — Single-Photo Viewer
> Implement the Lightbox overlay with: the current photo displayed at maximum viewport size, left/right arrow navigation buttons, a "X / Y" photo counter, and a close button. Support keyboard navigation: `ArrowLeft`/`ArrowRight` to navigate, `Escape` to close. Restore focus to the originating trigger element on close.

---

## Phase 8 — Sticky Sub-Navigation Header

### 8.1 — Scroll-Triggered Secondary Header
> Add a secondary navigation bar that slides down from the top when the user scrolls past the photo gallery. It should contain: left-aligned anchor tabs (Photos, Amenities, Reviews, Location) with `border-bottom` active indicator, and a right-aligned cluster showing the price summary, star rating, review count, and a "Reserve" CTA button. Use an Intersection Observer to highlight the currently visible section tab. Smooth-scroll to each section on click with an 80px offset to account for the header height.

---

## Phase 9 — Report Listing & Booking Card Additions

### 9.1 — Report This Listing
> Add a centred "Report this listing" button with a flag icon below the booking card's "You won't be charged yet" text. Style it as understated muted text with an underline and hover-to-dark transition.

---

## Phase 10 — Accessibility & Motion Polish

### 10.1 — Focus Management
> Ensure all modals and overlays set focus to the close button on open and restore focus to the trigger element on close. Use `role="dialog"`, `aria-modal="true"`, and descriptive `aria-label` attributes on all overlays. Add `aria-live="polite"` to the lightbox photo counter.

### 10.2 — Keyboard Navigation
> Verify `Escape` closes any open overlay. Arrow keys navigate the lightbox. Tab order is logical and trapped within open modals. All interactive elements have visible `:focus-visible` rings using the custom Airbnb-style focus ring defined in the design tokens.

### 10.3 — Motion & Reduced Motion
> Add smooth fade/scale entrance animations on overlays. Gate all animations behind `prefers-reduced-motion: reduce` so they are disabled for users who prefer reduced motion. Photo hover darkening transitions should be `200ms ease`.

---

## Phase 11 — Architecture Diagram

### 11.1 — Production Architecture
> Create a high-level architecture diagram for a production-scale vacation rental marketplace. Include the following tiers: Clients (Web/iOS/Android/Host Dashboard), Edge & Delivery (Global CDN, Image CDN, Edge Middleware, API Gateway), Backend Microservices (Listing, Search, Booking, Pricing, Payments, Reviews, Messaging), Storage & Data (PostgreSQL sharded, Redis, Object Storage), Search & Discovery (Elasticsearch, Geo Index, ML Ranking), Async & Pipeline (Kafka, Workers, Data Lake), and Cross-Cutting (CI/CD, Observability, Security, Multi-region, IaC). Highlight which tiers this clone implements.

---

## Ongoing — Iterative Visual QA

Throughout development, each phase included iterative visual comparison against the reference:

> Compare the current implementation against the reference screenshot. Check for discrepancies in spacing, font sizes, font weights, border radii, colours, icon sizing, and alignment. List every deviation you find and fix them.

> Verify the hover states, transitions, and interactive behaviours match the reference exactly. Check button hover colours, photo overlay darkening, modal entrance animations, and scroll behaviours.

> Run `bun run --bun build` to verify there are no TypeScript errors, unused imports, or compilation warnings. Fix any issues found.
