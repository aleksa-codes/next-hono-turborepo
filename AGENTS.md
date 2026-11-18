# AGENTS.md

Bun workspace monorepo. `apps/web` is the Next.js frontend; `apps/api` is the
Hono API running on Node. Turborepo orchestrates both.

- Install from the root and keep a single root `bun.lock`. For dependency
  changes, target the workspace by name (`web` or `api`). Use
  `bun update --latest --recursive` from the root for coordinated upgrades.
- Both apps pin TypeScript to 6.0.3 for lint compatibility. The root
  `zod-validation-error` override keeps the React Hooks ESLint plugin working.
- `bun run dev` starts both apps. `bun run build`, `bun run test`, and
  `bun run format` run the corresponding task in both apps.
- `bun run lint` auto-fixes files. Use `bun x turbo run lint -- --no-fix` for
  read-only lint. Run `bun x tsc --noEmit` in each app to check types.

Also read [web instructions](apps/web/AGENTS.md) or
[API instructions](apps/api/AGENTS.md) when working inside an app.
