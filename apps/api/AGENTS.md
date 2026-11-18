# AGENTS.md

Hono API on `@hono/node-server`. Read the
[root instructions](../../AGENTS.md) for workspace tooling.

- Routes are under `/api/*`; chain them on the Hono instance in `src/index.ts`
  to preserve inference for Hono's test client. Colocate Vitest tests with routes.
- `WEB_BASE_URL` controls the allowed browser origin. `PORT` defaults
  to 8000. The entrypoint skips opening a socket under `NODE_ENV=test`.
