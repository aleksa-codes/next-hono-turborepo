# Next.js 15 + Hono.js AI Coding Agent Instructions

## Project Architecture

This is a **workspace monorepo** with a strict separation between the web frontend and the API backend.

- **Web Frontend (`apps/web`)**: Next.js 15 + React 19, Tailwind CSS, shadcn/ui components.
- **API Backend (`apps/api`)**: Hono.js API server running on the Node.js adapter.
- **Package Manager**: Bun - always use `bun` commands.
- **Testing Framework**: Vitest is used for both `web` and `api` workspaces.
- **Environment**: CORS is enabled for communication between `http://localhost:3000` (web) and `http://localhost:8000` (api).

## Code Patterns & Conventions

### API Communication

- Backend routes are prefixed with `/api/*`.
- Frontend API calls must use `process.env.NEXT_PUBLIC_API_BASE_URL`.
- CORS is pre-configured in `apps/api/src/index.ts`.

### Frontend Structure (`apps/web`)

- **Pages**: Avoid `'use client'` in server components; prefer separate client components.
- **Components**: Use shadcn/ui from `@/components/ui/` where possible.
- **Styling**: Use Tailwind CSS utility classes with the `cn()` utility.
- **State & Interactivity**: Use `'use client'` directive for interactive components.
- **Icons**: Use icons from the `lucide-react` package.
- **TypeScript**: Strict mode is enabled; always use proper typing.
- **Text**: Escape special characters in JSX (&apos;, &quot;, &gt;, &#125;) to prevent lint errors.

### Backend Structure (`apps/api`)

- **Framework**: Hono.js using the `@hono/node-server` adapter.
- **Routing**: Define all API routes within `apps/api/src/index.ts`. Routes must be chained for type-safety in tests.

### **Testing Conventions**

- **Frontend (`apps/web`):**
  - Use **React Testing Library** (`@testing-library/react`).
  - Focus on user behavior (finding elements with `screen` and interacting with `userEvent`).
  - **Mock API calls** using `vi.spyOn(global, 'fetch')`. Do not make real network requests in tests.
  - Test files are located in `src/__tests__/`.
- **Backend (`apps/api`):**
  - Use **Hono's `testClient`** from `hono/testing` for type-safe requests.
  - Test files are **colocated** with the source code (e.g., `src/index.test.ts`).

## File Organization

### Web Frontend (`/apps/web`)

- `src/app/` - Next.js App Router pages and layouts.
- `src/components/` - Custom, reusable React components.
- `src/components/ui/` - shadcn/ui components.
- `src/__tests__/` - Vitest and React Testing Library tests.
- `src/lib/` - Utility functions and helpers.

### API Backend (`/apps/api`)

- `src/index.ts` - Main server entry point and Hono routes.
- `src/index.test.ts` - Colocated Vitest tests for the API.

## Common Tasks

- **Add a UI Component**: `cd apps/web && bun shadcn add <component-name>`
- **Create an API Route**: Add a chained route handler (e.g., `.get(...)`) to the `app` instance in `apps/api/src/index.ts`.
- **Write a Component Test**: Create a file in `apps/web/src/__tests__/`. Use `render`, `screen`, and `userEvent`. Mock any `fetch` calls.
- **Install a Dependency**: To add a dependency to a specific app, from the root:
  - `cd apps/web && bun add lucide-react`
  - `cd apps/api && bun add zod`
