# Next.js + Hono Turborepo

A starter for a Next.js 16 frontend and a separate Hono API. Bun workspaces
share one lockfile, and Turborepo runs development, build, and test tasks
across both apps.

## Run locally

Install [Bun](https://bun.sh/) and Node.js 22 or later. From the repo root:

```sh
bun install
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
bun run dev
```

Open [the web app](http://localhost:3000). The demo calls the
[Hono test endpoint](http://localhost:8000/api/test). If you change ports,
update `NEXT_PUBLIC_API_BASE_URL` in the web app and `WEB_BASE_URL` in the API
so browser requests pass CORS.

## Workspaces and commands

| Workspace              | What's included                                             |
| ---------------------- | ----------------------------------------------------------- |
| [`apps/web`](apps/web) | Next.js, Tailwind CSS, shadcn/ui, and React Testing Library |
| [`apps/api`](apps/api) | Hono on Node.js, CORS, and a colocated endpoint test        |

From the root, run `bun run test` for both Vitest suites, `bun run build` to
build both apps, or `bun run format` to format both apps. `bun run lint`
auto-fixes files; for read-only lint use `bun x turbo run lint -- --no-fix`.
To typecheck, run `bun x tsc --noEmit` from each app.

Install from the root. For a dependency needed by one app, use
`bun add <package> --filter web` or `bun add <package> --filter api`.

## Docker

Both apps have Dockerfiles. The default Compose override expects an external
network named `app_network`. Create it once if it doesn't exist:

```sh
docker network create app_network
docker compose up --build
```

Compose publishes ports 3000 and 8000. To use the API demo in the Docker
build, pass the browser-facing `NEXT_PUBLIC_API_BASE_URL` to the web build
(`http://localhost:8000` for local use). If the web origin differs from
`http://localhost:3000`, set `WEB_BASE_URL` for the API container. The supplied
Dockerfiles and Compose files do not wire these settings automatically.

## For agents

Start with [AGENTS.md](AGENTS.md) for shared workspace guidance. Each app
has its own instructions linked from there.

## License

[MIT](LICENSE)
