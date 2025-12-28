# AI Coding Guidelines for Antigravity Portfolio

## Project Overview
A Next.js 16 portfolio application focused on creative storytelling and visual experiences. Built with React 19, TypeScript, and Tailwind CSS v4, emphasizing motion design and immersive presentation.

## Architecture & Key Patterns

### Next.js App Router Structure
- **Entry Point**: `src/app/` uses Next.js 13+ App Router (not Pages Router)
- **Layout**: `src/app/layout.tsx` configures global fonts (Inter + Syne from Google Fonts) and CSS variables
- **Pages**: Components in `src/app/page.tsx` import sections directly—no API routes yet
- **Type Safety**: `layout.tsx` uses Next.js `Metadata` type for SEO

### Component Organization
- `src/components/sections/` → page-level sections (e.g., Hero)
- `src/components/ui/` → reusable, small UI components (currently empty; add here as needed)
- All interactive components use `"use client"` directive (e.g., Hero.tsx with Framer Motion)

### Design System & Styling
- **Tailwind v4** with CSS custom properties in `src/app/globals.css`
- **Color Tokens**: `--primary: #D4F239` (neon lime accent), `--background: #0F0F0F` (deep dark)
- **Typography**: Display headings use Syne font; body uses Inter font (configured via CSS variables)
- **Utility**: `src/lib/utils.ts` exports `cn()` function combining `clsx` + `tailwind-merge` for conditional classes
- **Tailwind Config**: Using `@theme inline` in globals.css to define custom color/typography scales

### Motion & Interactivity
- **Framer Motion**: Primary animation library (v12.23.26)
- **Pattern**: Use `motion.element` with `initial`, `animate`, `transition` props (see Hero.tsx)
- **Stagger delays**: Sequential animations use cumulative `delay` values (0.2s → 0.6s increments)
- **Common transitions**: `duration: 0.6–0.8`, `ease: "easeOut"` for entrance; `ease: "easeInOut"` for continuous

### HTML & Semantic Structure
- Use semantic elements: `<section>`, `<main>`, `<header>` where applicable
- **Accessibility**: Ensure heading hierarchy (h1 at page top), contrast ratios meet WCAG AA
- **Responsive Breakpoints**: Tailwind breakpoints (sm, md, lg) used consistently; mobile-first approach

## Development Workflow

### Local Setup
```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks
```

### TypeScript & Linting
- **Target**: ES2017 with `strict: true` mode
- **Path Alias**: `@/*` maps to `src/` (e.g., `@/components/sections/Hero`)
- **ESLint**: Uses Next.js recommended config (nextVitals + nextTs) via v9 with strict TypeScript

### Hot Reload & Dev Experience
- Next.js auto-refreshes on file changes in `src/`
- CSS changes apply instantly; component changes trigger full reload
- `display: "swap"` on Google Fonts prevents layout shift during font load

## Project-Specific Conventions

### Naming & File Organization
- Use PascalCase for component files and exports (e.g., `Hero.tsx` exports `Hero()`)
- Use camelCase for utility functions (`cn()`)
- Keep section components at `src/components/sections/`, UI atoms in `src/components/ui/`

### Code Style
- Use functional components exclusively (no class components)
- Prop drilling acceptable for 1–2 levels; extract to context if deeper nesting required
- Avoid default exports in utility files; export named functions for tree-shaking

### Imports
- Use absolute imports: `import { Hero } from "@/components/sections/Hero"`
- Always import from proper file path, not from package.json entry point

## Integration Points & Dependencies

### Key Libraries
- **framer-motion**: Animation library—check docs for `LayoutId` for shared layout animations
- **lucide-react**: Icon library (included; not yet used; add with `<Icon className="..." />`)
- **next/font**: Font optimization—fonts must be imported in `layout.tsx`
- **tailwind-merge + clsx**: Class composition via `cn()` utility

### External Metadata & Configuration
- **next.config.ts**: Currently empty; add image optimization, redirects here as needed
- **postcss.config.mjs**: Uses Tailwind default; modify for custom PostCSS plugins only if required

## Common Workflows for AI Agents

### Adding a New Section
1. Create `src/components/sections/SectionName.tsx` with `"use client"` if using state/motion
2. Import required motion/UI components
3. Add Tailwind + semantic HTML; export as named function
4. Import section in `src/app/page.tsx` and compose into `<main>`

### Updating Colors
- Edit CSS variables in `src/app/globals.css` under `:root`
- Reference via Tailwind utility: `className="text-primary"` → uses `--primary` token
- Avoid hardcoded hex colors; use design tokens

### Adding Fonts
- Import from `next/font/google` in `src/app/layout.tsx`
- Configure `variable` (CSS variable name) and `display: "swap"`
- Add to `@theme inline` block in globals.css to register with Tailwind

### Debugging
- Check browser DevTools for CSS/motion issues
- Use `npm run build` to catch type/lint errors before deployment
- Ensure all motion delays don't exceed ~3s (perceived slowness)

## Avoid & Anti-Patterns
- ❌ Don't use inline styles; leverage Tailwind + CSS variables
- ❌ Don't import components from wrong directory (e.g., `src/components` instead of `@/components`)
- ❌ Don't add state-heavy logic in `layout.tsx` (use server components by default)
- ❌ Don't chain deep motion animations without clear UX intent (risk of animation fatigue)

---
**Last Updated**: December 2025 | **Project**: Antigravity Portfolio (Next.js 16 + Tailwind v4 + Framer Motion)
