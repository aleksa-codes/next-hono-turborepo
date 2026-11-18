# AGENTS.md

Next.js 16 App Router frontend with React Compiler, Tailwind CSS, and
shadcn/ui. Read the [root instructions](../../AGENTS.md) for workspace tooling.

- Add UI primitives with `bun run shadcn add <component>`.
- Browser API requests use `NEXT_PUBLIC_API_BASE_URL`. Set this at build time
  for non-local deployments.
- Component tests use Vitest and React Testing Library in `src/__tests__/`.
  Mock fetch rather than depending on a running API.
