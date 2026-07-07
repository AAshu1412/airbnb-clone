# AI-Assisted Development Prompts Log

This document records the sequence of prompts and instruction sets used during the development of this pixel-perfect Airbnb listing clone.

## Phase 1: Listing Description & Translation Banner
- **Prompt:**
  > "listing.description text should look like a real Airbnb description: clamp it to 4 lines when not expanded, with a fading white bottom gradient mask. When the user clicks the 'Show more' button, it should expand to full height. When expanded, change the toggle text to 'Show less' (with a rotated chevron icon). Add a translation banner above the description indicating the text has been translated from another language, matching the Airbnb design system."

## Phase 2: Categorized Amenities List & Modal Layout
- **Prompt:**
  > "Add 50 categorized amenities in data.ts. In Amenities.tsx, display a preview grid showing the top 10 specific amenities. Implement a diagonal line-through slash overlay over any unavailable items (like alarm/security indicators). When clicking the 'Show all' button, display a clean modal grouping all 50 amenities by category with divided sections and borders matching the reference."

## Phase 3: Static Main Header & Sticky Sliding Navigation
- **Prompt:**
  > "Make the main top header static (relative positioned) so it scrolls naturally off-screen. Implement a secondary sliding sticky navigation bar that descends from the top of the viewport once the user scrolls past the photo gallery. It must contain:
  > - Left-side anchor buttons (Photos, Amenities, Reviews, Location) that trigger smooth scrolling with an offset correction.
  > - Active section highlight indicators driven by an Intersection Observer.
  > - Right-side price summary cluster showing the total price for the nights stay, reviews rating indicator, and a functioning 'Reserve' button that scrolls to the booking widget."

## Phase 4: Host Card & Things to Know Column Grid
- **Prompt:**
  > "Update the 'Meet your host' card and add the missing 'Things to know' section underneath it. 
  > - Host Card: Display exactly 1,463 Reviews, 4.68★ Rating, and 2 Years hosting. Center the 'Born in the 80s' (balloon icon) and school graduation cap indicators underneath the card box. Include 'Host details' above response metrics.
  > - Things to know: Recreate a 3-column footer container for Cancellation policy (calendar icon), House rules (key icon), and Safety & property (shield icon) matching the visual elements of the reference."

## Phase 5: Reviews Horizontal Scroll Filters & Report Button
- **Prompt:**
  > "In the Reviews section, display the text 'This home is a guest favourite based on ratings, reviews and reliability' and add the 'How reviews work' link. Under the ratings category strip, add a horizontally scrollable list of filter pills (Comfort, Accuracy, Hot tub, Condition, Hospitality, Cleanliness, Amenities, etc.) with count badges and emojis, ensuring the scrollbar is hidden using CSS. Centered below the main booking card, add a 'Report this listing' button with a flag icon."

## Phase 6: Photo Tour Layout Grids & URL Routing
- **Prompt:**
  > "Arrange the photo tour modal's grid dynamically based on photo counts:
  > - 1 Photo: Full width.
  > - 2 Photos: 2-column grid.
  > - 3 Photos: First full-width, followed by a 2-column grid.
  > - 4 Photos: 2x2 grid.
  > - 5 Photos: First full-width, followed by a 2x2 grid.
  > - Sync the open/close state of the Photo Tour modal with the query parameter `?modal=PHOTO_TOUR_SCROLLABLE` using browser history state APIs so back/forward button clicks function as expected."
