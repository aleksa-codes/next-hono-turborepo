# Next.js 15 + Hono.js AI Coding Agent Instructions

## Project Architecture

This is a **workspace monorepo** with strict separation between frontend and backend:

- **Frontend**: Next.js 15 + React 19 with React Compiler, Tailwind CSS 4, shadcn/ui components
- **Backend**: Hono.js API server with Node.js adapter
- **Package Manager**: Bun (not npm/yarn) - always use `bun` commands
- **Environment**: CORS-enabled communication between services at localhost:3000 ↔ localhost:8000

## Development Workflow

### Key Commands

- `bun run dev` - Development servers with live reload
- `bun run format` - Prettier formatting (frontend only)
- `bun run shadcn` - Add shadcn/ui components (frontend)
- `bun x taze@latest --interactive` - Update dependencies

## Code Patterns & Conventions

### API Communication

- Backend routes: `/api/*` prefix (e.g., `/api/test`)
- Frontend calls: Use `process.env.NEXT_PUBLIC_API_BASE_URL` + route
- CORS configured for `localhost:3000` origin in `backend/src/index.ts`

### Frontend Structure

- **Pages**: Avoid using `'use client'` in server components/pages, prefer client components for interactivity
- **Components**: Use shadcn/ui components (`@/components/ui/`)
- **Styling**: Tailwind CSS with `cn()` utility from `@/lib/utils`
- **State**: Client components with `'use client'` directive for interactivity
- **Icons**: Lucide React icons preferred
- **TypeScript**: Strict mode enabled, use proper typing
- **Text**: Escape special characters in JSX (&apos;, &quot;, &gt;, &#125;) to prevent lint errors

### Backend Structure

- **Framework**: Hono.js with `@hono/node-server` adapter
- **Routing**: RESTful API routes under `/api/*`
- **CORS**: Pre-configured for frontend origin, modify for production
- **Build**: TypeScript compilation to `dist/` directory

## File Organization

### Frontend (`/frontend`)

- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable components
- `src/components/ui/` - shadcn/ui components
- `src/lib/` - Utilities and helpers
- `components.json` - shadcn/ui configuration (New York style)

### Backend (`/backend`)

- `src/index.ts` - Main server entry point
- `dist/` - Compiled JavaScript output
- Uses ES modules (`"type": "module"`)

## Tech Stack Specifics

### Next.js Configuration

- **React Compiler**: Enabled experimentally in `next.config.ts`
- **Path Aliases**: `@/*` maps to `src/*`
- **Styling**: Tailwind CSS 4 with CSS variables in `globals.css`

### Bun Workspace

- Root `package.json` defines workspaces: `["frontend", "backend"]`
- Install from root runs for all workspaces
- Scripts must be run from respective workspace directories

### Environment Variables

- Frontend: `NEXT_PUBLIC_API_BASE_URL=http://localhost:8000` in `/frontend/.env.local`
- Backend: Optional `.env.local` for API keys

## Common Tasks

- **Add UI Component**: `cd frontend && bun run shadcn add <component>`
- **API Route**: Add to `backend/src/index.ts` under `/api/*` pattern
- **Client Component**: Add `'use client'` for browser-only features
- **Styling**: Use Tailwind classes, `cn()` for conditional styles
- **CORS Issues**: Check origin configuration in `backend/src/index.ts`
