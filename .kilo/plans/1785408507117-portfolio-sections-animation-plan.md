# JEEVANANTHAN V — Portfolio UI & Animation Plan

## Design Direction
- **Aesthetic**: Dark minimal brutalist/editorial. Reuse existing repo assets: `--bg: #0e0e0e`, `--accent: #ff3e00`, Syne (display) + Inter (body), crosshair cursor, blob follower.
- **Narrative**: Scroll-driven developer story — establish credibility fast, then let work speak.
- **Content rule**: Every section must have a clear purpose. No filler. Projects are the hero.
- **Touch degradation**: Hide blob, remove hover-only reveals, disable parallax on coarse-pointer devices.

## Technical Stack — Animation
- **Hero section**: Use **GSAP** (`gsap` + `@gsap/react`) for sequenced entrance and idle parallax. GSAP is battle-tested for timeline orchestration and gives smoother mouse-follow interpolation than raw rAF + state.
- **All other sections**: Continue using existing CSS transitions + IntersectionObserver utility hooks (`useReveal`, `useCountUp`). Do not over-engineer with GSAP outside the hero.
- **Bundle impact**: `gsap` is ~70KB gzipped. Acceptable for a portfolio site. `@gsap/react` handles cleanup/subscriptions automatically.

---

## Decision: Content Migration Strategy
**Replace VISCERA content entirely (Option A).**
Rationale: The existing `globals.css` animation shell (`reveal-text`, `blob`, `marquee`, `project-image` hover pattern, sticky typography) is a strong foundation. Swapping content preserves the proven motion infrastructure while aligning branding with JEEVANANTHAN V.

---

## Section 1: Hero (100vh)
**Content:**
- Huge outlined text: `JEEVANANTHAN V`
- Filled subtitle: `Full Stack Developer`
- Tagline line: `Salem, Tamil Nadu, India`
- Status pill: `OPEN TO WORK` (rotates or pulses)
- Contact row: `+91 63742 30015` | `jeevananthanjeeva170902@gmail.com`

**Layout:**
- Centered stack. Name takes ~80% viewport width. Subtitle readable scale.
- Cursor blob already present in `page.tsx` — reuse as ambient parallax influencer.
- Nav (fixed, `mix-blend-mode: difference`) with anchors: `#about`, `#experience`, `#work`, `#skills`, `#contact`, plus `/freelancing` link.

**Animation Plan (GSAP-driven):**
- **Entrance timeline** (duration ~1200ms total, ease `power3.out`):
  - `0ms` →  Name container `clip-path: inset(0 0 100% 0)` → `inset(0)` over 900ms. Use GSAP `to()` on a ref wrapping the name element.
  - `200ms` → Subtitle (`Full Stack Developer`) and meta row fade+slide up from `y: 40, opacity: 0` to `y: 0, opacity: 1` over 700ms. Stagger subtitle vs meta by 120ms.
  - `400ms` → Status pill (`OPEN TO WORK`) scales from 0.8→1 with overshoot (elastic or back.out), then enters a subtle glow pulse loop (`opacity: 0.6→1`, 2s yoyo repeat `-1`, ease `sine.inOut`).
  - `600ms` → Contact row fades in over 500ms.
- **Idle parallax**: On `mousemove`, use GSAP `quickTo` (or `gsap.to` with `overwrite: 'auto'`) on the name container for `x` and `y` (+/- 10px) and `scale` (1→1.02). Throttle via GSAP's internal ticker (~60fps capped). On touch devices, reduce to 0 or disable.
- **Cleanup**: Use `@gsap/react` `useGSAP()` hook — it automatically kills tweens/timelines on unmount, preventing memory leaks.

---

## Section 2: About + Stats
**Content:**
- Leading line: `WHO I AM` or skip label, go straight to statement.
- Summary paragraph from resume.
- Stats row: `1+ Years`, `2 Companies`, `7 Projects`, `8.02 CGPA`.

**Layout:**
- Container max-width 900px for readability.
- Stats as a horizontal row of mini-cards with accent bottom border.

**Animation Plan:**
- Paragraph uses existing `.reveal-text` + IntersectionObserver.
- **Count-up**: Stats numbers increment from 0 to target value when section enters viewport. Duration 1200ms. Ease-out.
- Optional: Horizontal marquee strip with tech keywords (React, Node.js, Bootstrap, MySQL, Java, etc.) between About and Experience, reusing `.scrolling-marquee`.

---

## Section 3: Experience
**Content:**
- Role 1: `Web Developer` @ Ethiroli Pvt Ltd — `Feb 2026 – Present`
  - Bullets from resume (3 max)
- Role 2: `Web Developer` @ Jayalakshmi Groups — `Aug 2025 – Feb 2026`
  - Bullets from resume (3 max)

**Layout:**
- Vertical timeline: vertical line on left (or center on desktop), cards on right.
- Date badges pinned to timeline node.
- Alternating left-right on desktop; single-column stack on mobile.

**Animation Plan:**
- **Timeline draw**: Vertical line starts `scaleY(0)` transform-origin top, animates to `scaleY(1)` triggered by IntersectionObserver when top of section hits viewport. Duration 1500ms.
- **Cards**: Slide in from right with opacity 0→1 and slight translateX (first card from right, second from left). Delay sequenced.
- **Bullets**: Stagger fade-up after parent card lands (delay 100ms per bullet).
- **Active state**: Timeline node dot glows accent on intersection.

---

## Section 4: Projects Grid (Index Page)
**Content (7 projects — labels + tags only, no deep descriptions):**
- **Featured label (2)**: Glamours Gatherings, Wefluence — large card tiles with project initial as SVG placeholder image and tech tag row.
- **Grid (5)**: Kottai Varahi Temple, Ethiroli Branding, Jayalakshmi Groups, Anbu Travels, Aruvi Tours — compact cards.

**Layout:**
- Featured projects: Full-width single column, one card per project. Images aspect-video (16:10).
- Grid projects: 3-column on desktop, 2 on tablet, 1 on mobile.
- Unify under `.project-card` component. Do NOT reuse `.project-row` — it implies side-by-side text+media layout which doesn't fit the project grid.
- Card links navigate to `/projects/[slug]`.

**Animation Plan:**
- **Entrance**: Section heading `SELECTED WORK` uses `.reveal-text`. Cards scale from 0.95 + opacity 0→1, staggered by 80ms per card using inline `style={{ animationDelay: '${index * 80}ms' }}` in React. `tw-animate-css` does not provide arbitrary stagger utilities in v1.3.3.
- **Hover**: SVG placeholder scales 1→1.05, grayscale filter to color (reuse existing `.project-image` pattern). Title gets underline wipe from left. Card lifts 4px with shadow.
- **Featured distinction**: Featured cards have accent border-top or subtle glow box-shadow on hover.

---

## Section 4a: Individual Project Page (`/projects/[slug]`)
**Route:** `app/projects/[slug]/page.tsx`

**Content per project:**
- Hero banner: Project title, one-line description, tech stack badges.
- Summary section: 2-3 sentence project overview.
- Role & responsibilities section (adapt from resume bullets).
- Key features list (3-5 items extracted from resume).
- Outcome / impact line (inferred from description: "Built event registration platform...", "Developed brand-influencer booking platform...").
- Tech stack full list.
- Back to portfolio link.

**Layout:**
- Max-width 900px reading container.
- Large project title at top, centered or left-aligned.
- Tech badges as inline pills.
- Single-column narrative flow. No heavy imagery — use abstract SVG pattern or gradient per project as a banner accent.

**Animation Plan:**
- **Entrance**: Staggered fade-up on title, badges, and body text using `.reveal-text` with sequential animation-delay.
- **Scroll progress**: Subtle top border or accent line that grows from 0→100% width as user scrolls through the page (using IntersectionObserver on sections).
- **Back link**: Hover arrow animation (translateX) and underline wipe.

**Data:**
- Static project data stored in `lib/data/projects.ts` as typed array. No CMS.
- Slugs: `glamours-gatherings`, `wefluence`, `kottai-varahi-temple`, `ethiroli-branding`, `jayalakshmi-groups`, `anbu-travels`, `aruvi-tours`.

---

## Section 4b: Freelancing Page (`/freelancing`)
**Route:** `app/freelancing/page.tsx`

**Content:**
- Heading: `FREELANCING` or `OPEN FOR WORK`
- Subheading: Short statement about availability and collaboration style.
- Services offered: `Web Development`, `Full-Stack Applications`, `React.js Frontend`, `Node.js Backend`, `Salesforce CRM`, `Payment Integration`.
- Process: `Brief` → `Proposal` → `Build` → `Launch` (3-4 step horizontal flow).
- Contact CTA: "Start a project" mailto link, phone number linked.
- Optional: Rate range or "starting at" — only if user confirms. Default to omitted.

**Layout:**
- Centered single-column, max-width 800px.
- Services as a 2-column chip grid.
- Process as horizontal row of steps with connector lines between them.

**Animation Plan:**
- **Entrance**: `.reveal-text` on heading. Service chips stagger in (delay 50ms per chip).
- **Process flow**: Steps fade in sequentially on intersection, connector lines draw left-to-right using `scaleX` animation.
- **CTA button**: Glow pulse loop, hover fill accent.
- **Touch fallback**: Process flow stacks vertically on mobile, removing horizontal connector need.

**Routing / Navigation:**
- Add `FREELANCE` to fixed nav as anchor to `/freelancing`.
- From Projects index and individual project pages, include a subtle text link back to main portfolio.

---

## Section 5: Skills
**Content:**
- Frontend: React.js, HTML5, CSS3, Bootstrap, Responsive Design
- Backend & Platforms: Node.js, Java Servlets, Salesforce (Apex), MySQL
- Tools: Git, GitHub, Payment Gateway Integration, EPUB Handling, PDF Accessibility

**Layout:**
- Single column or 2-column chip layout.
- Tags/pills: outlined by default, filled accent on hover.
- Optional group label `FRONTEND`, `BACKEND`, `TOOLS` as tiny uppercase above each group.

**Animation Plan:**
- Chips cascade in with `animation-delay` based on index (stagger 40ms).
- Hover: fill `var(--accent)`, color becomes white, slight scale 1.05.
- Optional: If `prefers-reduced-motion` is off, add subtle floating `translateY(-4px → 0)` loop to random chips using CSS `@keyframes float`.

---

## Section 6: Education + Certifications
**Content:**
- B.E. CSE @ K.S. Rangasamy College of Technology — `2020 – 2024` — `CGPA: 8.02/10`
- H.S.C & S.S.L.C @ Jay Matriculation Hr. Sec. School
- Certifications: Salesforce Developer, NPTEL IoT, NASSCOM FutureSkills, Algorithm Arena 1st Place

**Layout:**
- Split layout: Education left (large year mark), Certifications right (badge grid).
- On mobile, stack vertically.

**Animation Plan:**
- Education: Fade + slide up on intersection.
- Cert badges: Stagger entrance, hover lift 4px + accent fill.
- Optional: Algorithm Arena badge slightly larger or with star icon to denote achievement.

---

## Section 7: Contact / Footer
**Content:**
- CTA: `LET'S WORK TOGETHER` (link to mailto)
- Row: Location `Salem, Tamil Nadu, India` | Phone `+91 63742 30015` | Email
- Socials: LinkedIn, GitHub
- Copyright `© 2026 JEEVANANTHAN V`

**Layout:**
- Constrained container, not full-bleed black (slightly different from current footer).
- CTA centered, huge type.
- Contact row compact, muted color.
- Bottom bar split left/right.

**Animation Plan:**
- CTA hover: accent color fill, underline wipe from center outward.
- Social links: scale + slight rotate on hover.
- Optional: Input-less "quick message" hover state where CTA expands slightly.

---

## Animation Infrastructure & Technical Guidance

### Reuse from existing `globals.css` / `page.tsx`
| Existing Class / Pattern | Keep / Adapt | Usage for portfolio |
|---|---|---|
| `.blob` | **Keep** | Cursor follower for hero |
| `.reveal-text` | **Keep** | Generic section entrance |
| `.scrolling-marquee` | **Adapt** | Tech keyword strip between About & Experience |
| `.parallax-text` | **Adapt** | Hero name subtle mouse parallax |
| `.floating-label` | **Adapt** | Cert floating badges or skill chip idle float |
| `.project-image` hover | **Adapt** | Project card grayscale → color |
| `.huge-type` | **Keep** | Hero name, section headings, footer CTA |

### New Utilities to Add
- **Clip-up reveal**: `.reveal-clip` with `clip-path: inset(0 0 100% 0)` → `inset(0)` transition for hero entrance. Different from `.reveal-text` (which uses `translateY`) — use `clip-path` for large display text because it clips overflow without affecting layout.
- **Count-up**: Custom hook `lib/hooks/useCountUp.ts` accepting `(target, duration = 1200)` triggered by IntersectionObserver.
- **Reveal hook**: Custom hook `lib/hooks/useReveal.ts` wrapping the IntersectionObserver logic currently in `page.tsx`, so every section component can call `useReveal(ref)` instead of duplicating code.
- **Stagger delays**: Inline `animationDelay` style in React map callbacks (`style={{ animationDelay: '${index * 40}ms' }}`). `tw-animate-css` v1.3.3 does not have built-in stagger utilities.

### Performance Constraints
- Entrance animations: `duration <= 800ms`, `easing: cubic-bezier(0.7, 0, 0.3, 1)` or `ease-out`.
- Scroll listeners: Throttle to ~16ms (requestAnimationFrame) for parallax; single IntersectionObserver for reveal triggers.
- `will-change: transform` only on actively animating elements; remove after animation ends.
- Font loading: Syne + Inter already in `layout.tsx` — keep `font-display: swap`.

### Touch / Accessibility
- Media query `(hover: none) and (pointer: coarse)`: hide blob, disable project hover zoom, use static underline for links.
- `prefers-reduced-motion: reduce`: set all animation durations to 0ms or very low values, remove parallax.

---

## Implementation Checklist
1. **Dependencies**: Add `gsap` and `@gsap/react` via pnpm.
2. **Data layer**: `lib/data/projects.ts` with typed project objects (slug, title, description, role, bullets, tech, featured).
3. **Hooks**: `lib/hooks/useCountUp.ts`, `lib/hooks/useReveal.ts` (wrapper around IntersectionObserver).
4. **Hero component**: `components/sections/Hero.tsx` using `@gsap/react` `useGSAP()` for entrance timeline and mouse parallax. Keep CSS `.blob` for cursor follower.
5. **Section components (main page)**: `Hero`, `About`, `MarqueeSkills`, `ExperienceTimeline`, `ProjectsGrid`, `SkillsChips`, `EducationCerts`, `Footer`.
6. **Page components (separate routes)**: `app/projects/[slug]/page.tsx`, `app/freelancing/page.tsx`.
7. **Global CSS additions**: `.reveal-clip` for clip-path hero entrance, `.project-card` styles, `.process-connector` draw animation.
8. **SVG placeholders**: Generate inline SVG component for project image placeholders with project initial + accent gradient.
9. **Responsive**: Verify all grids collapse properly at `768px` and `1024px` breakpoints following existing media query structure.

---

## Decisions Finalized
1. **Project images**: Generated SVG/placeholder gradients with project initials. No external image dependencies.
2. **Horizontal marquee placement**: Between About and Experience. Tech keywords create a visual pace shift before the heavier timeline.
3. **Contact interaction**: Static mailto links + social icons only. No contact form.

## Out of Scope
- Blog / journal section
- Case-study modals or project detail pages
- Dark/light theme toggle (dark only per existing repo direction)
- Content management system
- E-commerce or booking integrations

## Validation
- Run `npm run build` and verify no TypeScript errors after component creation.
- Run `npm run lint` and ensure zero warnings.
- Manual browser check: viewport 320px, 768px, 1024px+, verify layout and touch fallbacks.
- Verify `prefers-reduced-motion` media query disables animations.
- Lighthouse audit: target Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90.

---

## Rollout / Migration Path
1. Create `lib/data/projects.ts` with all 7 project entries.
2. Create `lib/hooks/useCountUp.ts` and `lib/hooks/useReveal.ts`.
3. Build section components as unconnected previews: `Hero`, `About`, `MarqueeSkills`, `ExperienceTimeline`, `ProjectsGrid`, `SkillsChips`, `EducationCerts`, `Footer`. Assemble in `app/page.tsx`.
4. Build `app/projects/[slug]/page.tsx` using shared layout and project data.
5. Build `app/freelancing/page.tsx`.
6. Update nav anchors to include `#work`, `#about`, `#experience`, `#skills`, `#contact`, and `/freelancing`.
7. Remove obsolete VISCERA content only after all new sections render and pass visual review.
8. Commit with message: `feat: replace VISCERA studio with JEEVANANTHAN V personal portfolio`
