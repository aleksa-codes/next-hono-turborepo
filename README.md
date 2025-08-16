# 🚀 Next.js + Hono Starter Template

A minimal and clean monorepo starter template featuring a Next.js 15 frontend and a high-performance Hono backend, **supercharged with [Turborepo](https://turbo.build/repo)**.

This template is for those who want a robust, decoupled architecture with a lightning-fast development experience. It combines the excellent frontend features of Next.js with a modern Hono API, all managed efficiently within a single repository.

## Core Features

- ⚡️ **Turborepo:** A high-performance build system for monorepos providing:
  - **Task Caching:** Never build or test the same code twice.
  - **Parallel Execution:** Run scripts across all your apps in parallel.
  - **Simplified Commands:** Manage the entire monorepo from the root.
- 📦 **Bun Workspaces:** Organized with Bun for easy management of web and api code.
- 🚀 **Next.js 15 Frontend:** The latest version of the popular React framework for the UI.
- 🚄 **Hono Backend:** A separate, high-performance backend powered by Hono, the fast, lightweight, and modern web framework for building APIs.
- ✅ **Ready for Testing:** Pre-configured with Vitest for a fast and modern unit testing experience.
  - **Frontend:** React Testing Library for user-centric component tests.
  - **Backend:** Hono's built-in testing helper for type-safe API endpoint tests.
- ✨ **Decoupled Architecture:** Promotes clean separation of concerns between your UI and your API logic, making the project more scalable and maintainable.
- 🐳 **Dockerized:** Includes `Dockerfile` for both `web` and `api` services, with a `docker-compose.yml` for easy multi-container setup.

## What's Inside?

This monorepo includes two main applications:

### `apps/web` (Frontend)

- 🎨 **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- ✨ **shadcn/ui:** A collection of beautifully designed, accessible, and customizable components.
- 🪄 **Prettier:** An opinionated code formatter to ensure consistent code style.
- 🤖 **React Compiler:** An experimental compiler that optimizes your React code.
- ✅ **ESLint for React Compiler:** ESLint is configured to enforce the rules of hooks and other React best practices.
- 🖼️ **Lucide Icons:** A beautiful and consistent icon set.

### `apps/api` (Backend)

- 🚄 **Hono:** A small, simple, and ultrafast web framework for the backend API.
- 🤝 **CORS Middleware:** Pre-configured for easy frontend communication.
- 🔌 **Extensible:** Ready to be extended with database connections, authentication, and more.

## Getting Started (Local Development)

### 1. Clone & Install

First, clone the repository. The `bun install` command will use Bun Workspaces to install dependencies for the entire monorepo (`web` and `api`).

```bash
git clone https://github.com/aleksa-codes/next-hono-turborepo
cd next-hono-turborepo
bun install
```

### 2. Set Up Environment Variables

This project uses `.env` files. You can start by copying the examples:

In the `apps/web` directory, create `.env`:

```bash
# In apps/web/.env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

In the `apps/api` directory, create `.env`:

```bash
# In apps/api/.env
WEB_BASE_URL=http://localhost:3000
```

### 3. Run the Development Servers

Thanks to **Turborepo**, you can run both the frontend and backend development servers with a **single command** from the root directory.

```bash
# From the root directory of the project
bun run dev
```

- Your Next.js frontend will be available at `http://localhost:3000`.
- Your Hono backend will be running on `http://localhost:8000`.

## 🚀 Running with Docker

This project is fully containerized. After setting up your `.env` files as described above, you can build and run the services using Docker Compose.

```bash
docker-compose up --build
```

- Your Next.js Frontend will be available at: `http://localhost:3000`
- Your Hono Backend will be running on: `http://localhost:8000`

To stop the containers, press `CTRL + C` in the terminal, then run `docker-compose down`.

## Available Scripts

All primary commands should be run from the **root** of the monorepo.

| Command          | Description                                                                |
| :--------------- | :------------------------------------------------------------------------- |
| `bun run dev`    | Starts the development servers for both `web` and `api` in parallel.       |
| `bun run build`  | Builds both applications for production.                                   |
| `bun run lint`   | Lints the code in all workspaces.                                          |
| `bun run format` | Formats the code in all workspaces using Prettier.                         |
| `bun run test`   | Runs all unit and component tests across the entire monorepo using Vitest. |

> Bun has built-in commands that share names with common `package.json` scripts, such as `build` and `test`. To ensure you are running the scripts defined in this project (and not the Bun built-ins), you **must** use the `bun run` prefix (e.g., `bun run build`, `bun run test`).

### Workspace-Specific Scripts

**To add a new shadcn/ui component:**

```bash
cd apps/web
bun shadcn add <component-name>
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
