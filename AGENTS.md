# AGENTS.md

## Build Commands
- `npm run build` - Production build with Turbopack
- `npm run dev` - Development server with Turbopack
- `npm run lint` - Linting (currently echoes "lint")

## Project Info
- Next.js 16.2.12 with Turbopack
- Tailwind CSS v4 via `@import "tailwindcss"` in `app/globals.css`
- React 19, TypeScript
- Dark mode handled by `next-themes` ThemeProvider with `defaultTheme="dark"`

## Responsive Design
- Uses `clamp()` for fluid typography and spacing
- CSS custom properties defined in `app/globals.css`
- Media queries in `app/globals.css` (mobile-first: 767px, 1024px, 1441px+)
- Component className-based responsive classes

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
