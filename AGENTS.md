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
