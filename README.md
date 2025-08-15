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
- ✨ **Decoupled Architecture:** Promotes clean separation of concerns between your UI and your API logic, making the project more scalable and maintainable.
- 🐳 **Dockerized:** Includes `Dockerfile` for both `web` and `api` services, with a `docker-compose.yml` for easy multi-container setup.

## What's Inside?

This monorepo includes two main applications:

### `apps/web` (Frontend)

- 🎨 **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- ✨ **shadcn/ui:** A collection of beautifully designed, accessible, and customizable components.
- 🪄 **Prettier:** An opinionated code formatter to ensure consistent code style, pre-configured with plugins for import and class sorting.
- 🤖 **React Compiler:** An experimental compiler that optimizes your React code.
- ✅ **ESLint for React Compiler:** ESLint is configured to enforce the rules of hooks and other React best practices with the compiler in mind.
- 🖼️ **Lucide Icons:** A beautiful and consistent icon set.

### `apps/api` (Backend)

- 🚄 **Hono:** A small, simple, and ultrafast web framework for the backend API.
- Cors middleware pre-configured for easy frontend communication.
- Ready to be extended with database connections, authentication, and more.

## Getting Started (Local Development)

### 1. Clone & Install

First, clone the repository. The `bun install` command will use Bun Workspaces to install dependencies for the entire monorepo (`web` and `api`).

```bash
git clone https://github.com/aleksa-codes/next-hono-turborepo
cd next-hono-turborepo
bun install
```

### 2. Set Up Environment Variables

This project uses `.env` files for environment variables. You can start by copying the examples:

In the `apps/web` directory, create `.env.local`:

```bash
# In apps/web/.env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

In the `apps/api` directory, create `.env` for any backend-specific keys (like database URLs or API keys):

```bash
# In apps/api/.env
DATABASE_URL="your-database-connection-string"
```

### 3. Run the Development Servers

Thanks to **Turborepo**, you can run both the frontend and backend development servers with a **single command** from the root directory.

```bash
# From the root directory of the project
bun run dev
```

Turborepo will start both services in parallel.

- Your Next.js frontend will be available at `http://localhost:3000`.
- Your Hono backend will be running on `http://localhost:8000`.

## 🚀 Running with Docker

This project is fully containerized, allowing for a consistent and isolated development environment.

### Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) are installed on your machine.

### 1. Set Up Environment Variables

Just like the local setup, you need to create your `.env` files. The Docker build process will securely copy these files into the respective images.

Create `apps/web/.env.local` and `apps/api/.env` as described in the "Local Development" section above.

### 2. Build and Run the Containers

From the root of the project, run the following command:

```bash
docker-compose up --build
```

- `docker-compose up` will start the `api` and `web` services.
- The `--build` flag tells Docker Compose to build the images from the Dockerfiles the first time you run it, or if any changes have been made.

### 3. Access the Applications

- Next.js Frontend: `http://localhost:3000`
- Hono Backend: `http://localhost:8000`

To stop the containers, press `CTRL + C` in the terminal, then run:

```bash
docker-compose down
```

## Available Scripts

All primary commands should be run from the **root** of the monorepo.

| Command          | Description                                                               |
| :--------------- | :------------------------------------------------------------------------ |
| `bun run dev`    | Starts the development servers for both `web` and `api` in parallel.      |
| `bun run build`  | Builds both applications for production, respecting the dependency graph. |
| `bun run lint`   | Lints the code in all workspaces.                                         |
| `bun run format` | Formats the code in all workspaces using Prettier.                        |

### Workspace-Specific Scripts

Some scripts are specific to a single workspace. The most common example is adding new UI components.

**To add a new shadcn/ui component:**

```bash
cd apps/web
bun shadcn add button
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
