# Project Showcase & Animation Plan (v2)

## Source of Truth
- `app/content.md` — contains full project specs: shared layout, per-project themes/colors/hero/animations, and detailed project descriptions
- Plan file: `.kilo/plans/1785408507117-portfolio-sections-animation-plan.md` (original)

## Context
The current project detail page (`app/projects/[slug]/page.tsx`) is a basic text-only component. The `content.md` file has detailed specs for each project including hero sections, themes, color palettes, animations (Framer Motion, GSAP, Lenis), layout patterns, and full project narratives. The current `lib/data/projects.ts` lacks image, theme, and animation fields needed by `content.md`.

---

## Step 1: Restructure `lib/data/projects.ts` to Include Image/Theme/Animation Data

Extend the `Project` type with fields from `content.md`:

```ts
type Project = {
  slug: string
  title: string
  description: string
  role: string
  bullets: string[]
  tech: string[]
  featured: boolean
  outcome?: string
  // NEW fields from content.md
  theme: string                    // e.g. "Luxury Fashion", "Social Media", "Temple"
  colors: { primary: string; secondary: string; accent: string }
  heroImage: string                // public/ image path or Unsplash URL
  heroAnimation: string            // e.g. "runway", "floating-cards", "sunrise", "airplane"
  features: string[]               // from content.md feature list
  problem: string                  // problem statement from content.md
  solution: string                 // solution summary
  dbTables: string[]               // database tables from content.md
  skillsDemonstrated: string[]     // skills from content.md
}
```

### Decisions
- Images: Use existing public images (`portfolio.png`, `man_mountains_clouds_...`) where thematically close. For project-specific hero images not in `public/`, use Unsplash URLs with descriptive keywords per project theme (e.g., `unsplash.com/photos/fashion-runway` for Glamours Gatherings).
- No CMS — all data in `projects.ts`.

---

## Step 2: Upgrade `app/projects/[slug]/page.tsx` to Use content.md Layout

Replace the current basic page with the shared layout schema from `content.md`:

1. **Hero Section** — fullscreen with animated background (gradient + floating particles per theme), project name left, laptop/3D mockup right, fade-in/scale animation
2. **Overview** — timeline animation (Idea → Research → Design → Development → Testing → Deployment), cards appear on scroll
3. **Problem / Solution** — split layout, background changes on scroll
4. **Features** — card grid with hover lift/glow/border animation (NOT bullet list)
5. **UI Showcase** — MacBook mockup with scroll inside
6. **Tech Stack** — hexagon layout with rotate/glow hover
7. **Architecture** — interactive diagram with expandable boxes, SVG animated lines
8. **DB Design** — 3D cards with hover-expand relationships
9. **Dev Journey** — horizontal timeline
10. **Challenges** — accordion
11. **Results** — large statistics with counter animation
12. **Gallery** — Pinterest masonry layout, images expand
13. **Testimonials** — glass cards, auto slider
14. **Next Project** — huge card with background video, arrow animation
15. **Back link** — to `/work` portfolio grid

### Animations (from content.md)
| Section | Animation | Library |
|---|---|---|
| Hero | Fade In, Scale, Floating, Mouse Parallax | GSAP + Lenis |
| Overview timeline | Cards appear while scrolling | IntersectionObserver |
| Problem/Solution | Background changes while scrolling | GSAP ScrollTrigger |
| Features | Hover: lift, glow, border animation | CSS transitions |
| UI Showcase | Scroll-based reveal | IntersectionObserver |
| Tech Stack | Hover: rotate, glow | CSS |
| Architecture | Expandable boxes, SVG lines | GSAP |
| DB Design | Hover: expand relationships | CSS |
| Dev Journey | Horizontal scroll reveal | GSAP + Lenis |
| Challenges | Accordion expand | CSS + GSAP |
| Results | Counter animation | Custom hook |
| Gallery | Image expand on click/scroll | GSAP |
| Testimonials | Auto-slider rotation | CSS animation |
| Next Project | Background video, arrow animation | GSAP |

### Layout Decision: Framer Motion vs GSAP vs CSS
- Per `content.md`, Framer Motion is listed for: Hero, UI Showcase, Architecture
- GSAP for: Overview timeline, Problem/Solution, Dev Journey, Challenges, Results
- CSS transitions for: Features cards, Tech stack, DB design
- Use `@gsap/react` for all GSAP animations (already in deps)
- Framer Motion is NOT yet a dependency — add it if Framer Motion animations are needed, or approximate with CSS + GSAP

### Decision: Keep GSAP + CSS, do NOT add Framer Motion
Rationale: GSAP is already installed and battle-tested. Adding Framer Motion adds ~40KB bundle weight for animations that can be achieved with GSAP + CSS. Lenis smooth scroll can be added later if scroll-linked animations are critical.

---

## Step 3: Add Image Assets

### Required public images to add (download or generate)
- `glamours-hero.jpg` — fashion runway / luxury event (Unsplash)
- `wefluence-hero.jpg` — social media / influencer content
- `kottai-temple-hero.jpg` — temple silhouette at sunrise
- `ethiroli-hero.jpg` — creative agency / neon dark mode
- `jayalakshmi-hero.jpg` — corporate building / glassmorphism
- `anbu-travel-hero.jpg` — airplane / mountains / travel
- `aruvi-tours-hero.jpg` — waterfall / nature
- `gallery/` — placeholder gallery images per project (1-3 per project)
- `macbook-mockup.png` — for UI Showcase section
- `architect-diagram.svg` — for Architecture section
- `db-design-cards.svg` — for DB Design section

### Fallback strategy
If custom images aren't available, use the existing `placeholder.png` with per-project color theming and SVG-generated scenes matching each project's theme description (runway, temple, airplane, etc.).

---

## Step 4: Implementation Order

1. Extend `Project` type and `projects.ts` data with theme/color/heroImage/features fields
2. Create `components/project-hero.tsx` — animated hero with GSAP + background
3. Create `components/project-overview.tsx` — animated timeline
4. Create `components/project-features.tsx` — card grid with hover animations
5. Create `components/project-techstack.tsx` — hexagon layout
6. Create `components/project-architecture.tsx` — interactive diagram
7. Create `components/project-results.tsx` — counter stats
8. Create `components/project-gallery.tsx` — masonry grid
9. Create `components/project-next.tsx` — next project card
10. Update `app/projects/[slug]/page.tsx` — assemble all sections
11. Add CSS animations for hover states, card reveals, accordion
12. Add Lenis smooth scroll if scope allows (out of phase 1)

---

## Step 5: Animation Infrastructure

### Existing infrastructure to reuse
- `gsap` + `@gsap/react` — already installed, use `useGSAP()` for cleanup
- `useReveal` hook — expand to support section-level reveal with staggered children
- `useCountUp` hook — reuse for result statistics
- CSS `.reveal-text`, `.reveal-clip` — keep from current globals.css
- CSS `.blob` — keep for ambient hero background

### New utilities needed
- `useLenis` (optional) — smooth scroll integration (defer to phase 2)
- `useScrollTrigger` — GSAP ScrollTrigger for scroll-linked animations (add `gsap/ScrollPlugin`)
- Scroll-linked background transitions (Problem/Solution section)
- Horizontal timeline component (Dev Journey)
- Accordion component (Challenges section)
- Counter animation for statistics (already have `useCountUp`)
- Masonry Pinterest-style gallery grid (CSS columns)

---

## Step 6: Responsive & Touch Handling

- All GSAP scroll animations disable on touch devices (`matchMedia('(hover: none)')`)
- Hover effects (card lift, glow) fall back to opacity change on touch
- Masonry gallery switches to single column on mobile
- Hero animation reduces intensity on coarse pointer devices
- `prefers-reduced-motion` disables all animations

---

## Rollback / Migration
- Current `app/projects/[slug]/page.tsx` is backed up at its current state
- New page component is `app/projects/[slug]/page.tsx` (replaces current)
- `content.md` remains as the source of truth; no programmatic parsing — data is manually curated in `projects.ts`

---

## Out of Scope (Phase 1)
- Framer Motion integration (use GSAP + CSS instead)
- Lenis smooth scroll (defer to phase 2)
- Auto-generated images from AI (use placeholders for now)
- CMS or headless data source (static data only)
- Gallery lightbox (basic expand only)
- Testimonials auto-slider (basic CSS animation)

## Validation
- `pnpm run build` passes with zero TypeScript errors
- Each project slug renders without `notFound()` (verify all 7 slugs in data)
- Manual check: theme/color per project matches `content.md` spec
- Touch device: no GSAP scroll animations, hover effects degrade gracefully
- `prefers-reduced-motion`: all animations disabled
- Lighthouse: Performance ≥ 85, Accessibility ≥ 90