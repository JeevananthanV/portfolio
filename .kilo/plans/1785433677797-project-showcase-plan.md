# Next.js Premium Portfolio — Implementation Plan

## Context

The existing codebase has a Next.js 16 portfolio with a dynamic `[slug]` project route at `app/projects/[slug]/` and a 1165-line `ProjectClient.tsx` that already implements most sections. The `lib/data/projects.ts` has 7 projects with theme/color/animation data but slugs don't match the spec, and the `Project` type lacks several fields needed by the premium layout. The user's specification (from `app/content.md`) demands premium case-study pages with themed hero sections, 14 shared layout sections, per-project visual identities, and GSAP/CSS animations.

## Key Decisions

### Keep the dynamic `[slug]` route — do NOT create static pages
The dynamic route `app/projects/[slug]/page.tsx` already serves all project URLs. Creating 7 duplicate static pages adds maintenance burden with zero benefit. Update the slugs in `projects.ts` and the route handles everything.

### Slug mapping (3 changes needed)
| Current Slug | Target Slug |
|-------------|-------------|
| `glamours-gatherings` | `glamour-gatherings` |
| `kottai-varahi-temple` | `kottai-varahi` |
| `ethiroli-branding` | `ethiroli` |

The other 4 slugs (`wefluence`, `jayalakshmi-groups`, `anbu-travels`, `aruvi-tours`) already match.

### Animation library assignments per section
| Section | Animation Type | Library |
|---------|---------------|---------|
| Hero | Fade In, Scale, Floating, Mouse Parallax | GSAP + CSS |
| Overview | Cards appear while scrolling | IntersectionObserver |
| Problem/Solution | Background changes while scrolling | GSAP ScrollTrigger |
| Features | Hover: lift, glow, border animation | CSS transitions |
| UI Showcase | Scroll inside, auto-scroll | IntersectionObserver + CSS |
| Tech Stack | Hover: rotate, glow | CSS |
| Architecture | Expandable boxes, SVG animated lines | GSAP + CSS |
| Database Design | Hover: expand relationships, 3D perspective | CSS |
| Development Process | Horizontal scroll reveal | GSAP ScrollTrigger |
| Challenges | Accordion expand | CSS + GSAP |
| Results | Counter animation | Custom hook (useCountUp) |
| Gallery | Pinterest masonry, images expand | CSS columns + GSAP |
| Testimonials | Glass cards, auto-slider | embla-carousel-react + CSS |
| Next Project | Background gradient shift, arrow animation | GSAP + CSS |

### No new npm dependencies
All required packages are already installed. `gsap/ScrollPlugin` is bundled with `gsap`. `embla-carousel-react` is already a dependency. No Framer Motion or Lenis in Phase 1.

## Step 1: Update Project Data (`lib/data/projects.ts`)

- Fix slugs: `glamours-gatherings` → `glamour-gatherings`, `kottai-varahi-temple` → `kottai-varahi`, `ethiroli-branding` → `ethiroli`
- Extend `Project` type with missing fields:
  - `outcome` — result metrics per project (already optional, populate for all)
  - `gallery` — array of `{id: number; title: string; aspect: string}` per project
  - `testimonials` — array of `{quote: string; author: string; role: string}` per project
  - `devJourney` — array of `{week: string; task: string; description: string}` per project
  - `challenges` — array of `{title: string; problem: string; solution: string; outcome: string}` per project
  - `liveDemo` — URL string (or `#` placeholder)
  - `github` — URL string (or `#` placeholder)
  - `stats` — array of `{value: string; suffix: string; label: string}` per project (overrides hardcoded Results data)
- Update `tech` arrays to include Next.js/Tailwind where applicable per the recommended stack
- Keep `heroAnimation` field values aligned with content.md spec: `runway`, `floating-cards`, `sunrise`, `text-reveal`, `glassmorphism`, `airplane`, `waterfall`

## Step 2: Enhance `ProjectClient.tsx` — Per-Section Animation Implementation

### 2a. Hero Section
- Fullscreen (100vh) with animated gradient background per project theme
- Floating particles using GSAP (canvas or DOM-based)
- Glassmorphism overlay on the mockup side
- Left: project name with clip-path text reveal, description, tech tags, CTA buttons
- Right: laptop mockup with mouse parallax (GSAP + useGSAP)
- Animations: Fade In (title), Scale (mockup), Floating (background shapes), Mouse Parallax (mockup follows cursor)
- On touch devices: reduce particle count, disable parallax

### 2b. Project Overview
- Timeline with 6 steps: Idea → Research → Design → Development → Testing → Deployment
- Cards appear while scrolling using IntersectionObserver (reuse `useReveal` hook with staggered delays)
- Each card has a numbered circle + step label
- Description text below timeline
- Animation: Cards fade in and slide up on scroll, staggered by index

### 2c. Problem / Solution
- Split layout: text left, illustration right (or stacked on mobile)
- Background changes while scrolling using GSAP ScrollTrigger (gradient transition from transparent → project primary → transparent)
- Problem text in red accent, Solution text in project accent color
- Large themed illustration placeholder (SVG with project colors)
- Animation: Background gradient shift on scroll, text fades in on scroll

### 2d. Features
- Card grid (not bullet list) with emoji/icon per card
- Hover: lift (translateY -8px), glow (box-shadow with project accent), border animation (accent color border)
- Staggered scroll-reveal using `useReveal` with per-card delay
- Animation: CSS transitions for hover, GSAP for scroll reveal

### 2e. UI Showcase (MacBook Mockup)
- MacBook frame rendered with CSS (rounded rectangle, notch, screen bezel)
- Scrollable content area inside the mockup showing project features as tags/cards
- Auto-scroll animation on mount (GSAP or CSS scroll behavior)
- Scroll inside the mockup using IntersectionObserver
- Animation: Mockup fades in on scroll, internal content auto-scrolls

### 2f. Interactive Prototype
- CTA section with animated "Launch Prototype" button
- Magnetic hover effect on button (GSAP + useGSAP)
- Arrow icon that animates on hover
- Scroll-linked reveal animation
- Animation: Button scale on hover, arrow bounce, scroll-triggered reveal

### 2g. Technology Stack — Hexagon Layout
- Replace flat tag list with hexagonal grid layout (CSS clip-path or SVG)
- Each hexagon: rotate on hover, glow with project accent color
- Staggered entrance animation on scroll
- Animation: CSS clip-path hexagon shape, rotate + glow on hover, GSAP for scroll entrance

### 2h. Architecture — Interactive Diagram
- Vertical node diagram: User → React UI → Node API → MySQL → Admin
- SVG animated dashed lines connecting nodes (GSAP DrawSVGPlugin or CSS stroke-dasharray animation)
- Each node box expands on hover (scale + border glow)
- Nodes fade in sequentially on scroll
- Animation: SVG line draw on scroll, box expand on hover, GSAP for sequential reveal

### 2i. Database Design — 3D Cards
- Card grid with CSS perspective/transform for 3D tilt on hover
- Each card shows table name + description
- Connecting lines or relationship indicators between related tables
- Cards tilt in mouse direction (GSAP + useGSAP)
- Animation: 3D perspective tilt on hover, scroll-reveal entrance

### 2j. Development Process
- Horizontal scrollable timeline with week labels
- Week 1: Research → Week 2: UI → Week 3: Backend → Week 4: Testing → Week 5: Deployment
- Each card has week label, task name, and description
- GSAP ScrollTrigger for scroll-linked card reveal
- Per-project `devJourney` data drives content
- Animation: Cards slide in from right as user scrolls horizontally

### 2k. Challenges — Accordion
- Per-project `challenges` data drives content (title, problem, solution, outcome)
- Each item: click header → expand to show problem ↓ solution ↓ outcome
- Plus/minus icon rotation on open/close
- GSAP for smooth height animation
- Staggered scroll-reveal entrance
- Animation: Accordion expand/collapse with GSAP, scroll-triggered entrance

### 2l. Results — Counter Animation
- Per-project `stats` data drives content (value, suffix, label)
- Large animated numbers using existing `useCountUp` hook
- Scroll-triggered: counters animate when section enters viewport
- Background gradient transition using project primary color
- Animation: Counter increment on scroll, section fade-in

### 2m. Gallery — Pinterest Masonry
- CSS `column-count` for masonry layout (3 desktop, 2 tablet, 1 mobile)
- Per-project `gallery` data drives image placeholders
- Each item: gradient placeholder with title text, aspect ratio varies
- Click-to-expand: CSS transform scale on click (no lightbox library)
- Scroll-reveal entrance
- Animation: CSS columns layout, scale expand on click, scroll-triggered fade-in

### 2n. Testimonials — Glass Cards Auto-Slider
- Use `embla-carousel-react` (already in deps) for auto-rotation
- Glassmorphism card styling (backdrop-filter blur, semi-transparent background)
- Per-project `testimonials` data drives content
- Auto-rotation every 5 seconds with pause on hover
- Animation: CSS glassmorphism, embla carousel slide transition

### 2o. Next Project — Huge Card
- Full-width gradient card with next project's theme colors
- Background: animated gradient shift (GSAP or CSS keyframes)
- Arrow animation on hover (translateX + color change)
- "View Project" CTA button with magnetic hover
- Animation: Gradient shift CSS animation, arrow bounce on hover, scroll-triggered reveal

### 2p. Links (Live Demo + GitHub)
- Update to use `project.liveDemo` and `project.github`
- External link icons, `target="_blank"`, `rel="noopener noreferrer"`
- Styled with project accent color

### 2q. Scroll Progress Indicator
- Thin progress bar fixed at top of viewport
- GSAP ScrollTrigger-driven width animation based on scroll position
- Uses project accent color for the bar fill

### 2r. Text Reveal with Masking
- Add `.reveal-text` CSS class using `clip-path: inset(0 0 100% 0)` → `inset(0 0 0 0)`
- Apply to project titles and section headings
- Triggered by IntersectionObserver (reuse `useReveal` hook)

## Step 3: Add Animation Infrastructure

### 3a. GSAP ScrollPlugin
- Already bundled with `gsap` package — import via `gsap/ScrollPlugin`
- Register with `gsap.registerPlugin(ScrollPlugin)` in a root layout or component
- Use for: scroll-triggered background transitions, horizontal timeline, scroll progress bar

### 3b. Per-Project Theme CSS Variables
- Set CSS custom properties on each project page wrapper:
  - `--project-primary`, `--project-secondary`, `--project-accent`
- All themed components read these variables instead of hardcoded project colors
- Applied via inline style on the `<main>` element or a wrapper div

### 3c. prefers-reduced-motion Support
- Add CSS media query: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }`
- In GSAP: check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` and skip animations
- In `useReveal`: disable IntersectionObserver when reduced motion is preferred

### 3d. Touch Device Handling
- GSAP scroll animations: skip on `matchMedia('(hover: none) and (pointer: coarse)')`
- Hover effects: degrade to opacity change on touch
- Hero parallax: disable on touch devices
- Masonry gallery: single column on mobile (already handled by CSS)

## Step 4: Update ProjectsGrid Links

Update `components/sections/ProjectsGrid.tsx` to use corrected slugs:
- `glamours-gatherings` → `glamour-gatherings`
- `kottai-varahi-temple` → `kottai-varahi`
- `ethiroli-branding` → `ethiroli`

## Step 5: Validation

- `pnpm run build` passes with zero TypeScript errors
- Each project slug renders without `notFound()`
- Manual check: theme/color per project matches spec
- Touch device: no GSAP scroll animations, hover effects degrade gracefully
- `prefers-reduced-motion`: all animations disabled
- Lighthouse: Performance ≥ 85, Accessibility ≥ 90

## Out of Scope (Phase 1)
- Framer Motion integration (use GSAP + CSS instead)
- Lenis smooth scroll (defer to phase 2)
- Auto-generated images from AI (use placeholders for now)
- CMS or headless data source (static data only)
- Gallery lightbox (basic expand only)
- Three.js/React Three Fiber 3D elements (defer to phase 2)

## File Changes Summary

| File | Action |
|------|--------|
| `lib/data/projects.ts` | Update slugs, extend Project type, add missing fields per project |
| `app/projects/[slug]/page.tsx` | No changes needed (dynamic route handles all slugs) |
| `app/projects/[slug]/ProjectClient.tsx` | Rewrite with per-section animation implementations |
| `components/sections/ProjectsGrid.tsx` | Update slug links to match new slugs |
| `components/ProjectPlaceholder.tsx` | Enhance with per-project theming support |
| `styles/globals.css` | Add `.reveal-text`, scroll-progress bar, prefers-reduced-motion, theme CSS vars |
| `lib/hooks/useReveal.ts` | Extend for staggered children, prefers-reduced-motion guard |

## Dependencies

No new npm dependencies needed. All required packages are already installed:
- `gsap` + `@gsap/react` — animations + ScrollTrigger
- `@radix-ui/react-accordion` — challenges accordion
- `embla-carousel-react` — testimonials auto-slider
- `tw-animate-css` — CSS animations
- `@gsap/react` + `gsap/ScrollPlugin` — scroll-driven animations