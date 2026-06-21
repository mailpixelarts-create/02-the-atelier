# THE ATELIER

A Parisian Artisan Cafe & Patisserie website. Elegant, creative, and timeless — designed to evoke walking through an elegant Parisian atelier on a quiet morning.

## Tech Stack

- **Vite** — Fast build tooling
- **TypeScript** — Type-safe development
- **React 18** — UI framework
- **SCSS** — Styled with design tokens
- **GSAP** — Scroll-triggered animations
- **Lenis** — Smooth scrolling
- **SplitType** — Text animation splitting
- **Embla Carousel** — Touch-friendly carousels

## Brand

- **Display Font:** Cormorant Garamond (Canela fallback)
- **Body Font:** Inter (Neue Haas Grotesk fallback)
- **Caption Font:** IBM Plex Mono
- **Palette:** Canvas, Warm White, Sand, Dark Coffee, Chocolate, Bronze, Muted Olive

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── animations/        # GSAP animation modules
├── components/        # React components
│   ├── Loader/
│   ├── Navigation/
│   ├── Hero/
│   ├── Manifesto/
│   ├── MorningRitual/
│   ├── SignatureCoffee/
│   ├── SeasonalPastries/
│   ├── TheBakery/
│   ├── TheStudio/
│   ├── Gallery/
│   ├── Journal/
│   ├── Reservation/
│   ├── Footer/
│   └── Cursor/
├── hooks/             # Custom React hooks
├── styles/            # SCSS variables, globals, animations
├── utils/             # Constants and utilities
├── App.tsx
└── main.tsx
```

## Sections

1. **Loader** — Cream background, SVG logo animation, coffee aroma particles
2. **Hero** — Full-viewport with cinematic video, headline reveal
3. **Manifesto** — Editorial quote: "Luxury begins with patience."
4. **Morning Ritual** — 5-stage timeline from Before Sunrise to Opening Doors
5. **Signature Coffee** — Grid layout for Espresso, Pour Over, Chemex, Cold Brew, House Blend
6. **Seasonal Pastries** — Large cards for Croissant, Pain au Chocolat, etc.
7. **The Bakery** — Behind-the-scenes storytelling with statistics
8. **The Studio** — Handmade ceramics and furniture
9. **Gallery** — 18-image masonry layout
10. **Journal** — Magazine-style editorial cards
11. **Reservation** — Intimate 24-seat booking form
12. **Footer** — Brand info and credits

## Design Tokens

All design tokens are defined in `src/styles/variables.scss` and can be imported in any SCSS file.

## Credits

- **Brand:** The Atelier
- **Studio:** A LOOKBOOK Studio Experience
- **Developer:** Norman James
- **Made with love by:** Empathy Studio
