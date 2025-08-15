# Next.js 15 + Hono.js AI Coding Agent Instructions

## Project Architecture

This is a **workspace monorepo** with a strict separation between the web frontend and the API backend.

- **Web Frontend (`apps/web`)**: Next.js 15 + React 19 with React Compiler, Tailwind CSS, shadcn/ui components.
- **API Backend (`apps/api`)**: Hono.js API server running on the Node.js adapter.
- **Package Manager**: Bun (not npm/yarn) - always use `bun` commands.
- **Environment**: CORS is enabled for communication between `http://localhost:3000` (web) and `http://localhost:8000` (api).

## Code Patterns & Conventions

### API Communication

- Backend routes are prefixed with `/api/*` (e.g., `/api/users`).
- Frontend API calls must use the environment variable `process.env.NEXT_PUBLIC_API_BASE_URL` to construct the full URL.
- CORS is pre-configured for the development origin in `apps/api/src/index.ts`.

### Frontend Structure (`apps/web`)

- **Pages**: Avoid using `'use client'` in server components/pages. Create separate client components for interactivity and import them.
- **Components**: Use shadcn/ui components from `@/components/ui/` where possible. Custom components go in `@/components/`.
- **Styling**: Use Tailwind CSS utility classes. For conditional classes, use the `cn()` utility from `@/lib/utils`.
- **State & Interactivity**: Create client components by adding the `'use client'` directive at the top of the file.
- **Icons**: Use icons from the `lucide-react` package.
- **TypeScript**: Strict mode is enabled. Always use proper typing for props, state, and API responses.
- **Text**: Escape special characters in JSX (&apos;, &quot;, &gt;, &#125;) to prevent lint errors.

### Backend Structure (`apps/api`)

- **Framework**: Hono.js using the `@hono/node-server` adapter.
- **Routing**: Define all API routes within `apps/api/src/index.ts`. Follow RESTful conventions.

## File Organization

### Web Frontend (`/apps/web`)

- `src/app/` - Next.js App Router pages and layouts.
- `src/components/` - Custom, reusable React components.
- `src/components/ui/` - shadcn/ui components (managed by the CLI).
- `src/lib/` - Utility functions and helpers (e.g., `utils.ts`).

### API Backend (`/apps/api`)

- `src/index.ts` - The main server entry point where all Hono routes are defined.
- `dist/` - Compiled JavaScript output (do not edit directly).

## Common Tasks

- **Add a UI Component**: `cd apps/web && bun shadcn add <component-name>`
- **Create a new API Route**: Add a new route handler (e.g., `app.get(...)`) to the `app` instance in `apps/api/src/index.ts`.
- **Create an Interactive Component**: Create a new file in `apps/web/src/components`, and add `'use client'` as the very first line.
- **Install a Dependency**: To add a dependency to a specific app, use the `--workspace` flag from the root:
  - `bun add lucide-react --workspace @repo/web`
  - `bun add zod --workspace @repo/api`
