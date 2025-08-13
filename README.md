# 🚀 Next.js + Hono Starter Template

A minimal and clean monorepo starter template featuring a Next.js 15 frontend and a high-performance Hono backend, **supercharged with [Turborepo](https://turbo.build/repo)**.

This template is for those who want a robust, decoupled architecture with a lightning-fast development experience. It combines the excellent frontend features of Next.js with a modern Hono API, all managed efficiently within a single repository.

## Core Features

- ⚡️ **Turborepo:** A high-performance build system for monorepos. It provides:
  - **Task Caching:** Never build or test the same code twice.
  - **Parallel Execution:** Run scripts across all your packages in parallel.
  - **Simplified Commands:** Manage the entire monorepo from the root.
- 📦 **Bun Workspaces:** Organized with Bun for easy management of frontend and backend code.
- 🚀 **Next.js 15 Frontend:** The latest version of the popular React framework for the UI.
- 🚄 **Hono Backend:** A separate, high-performance backend powered by Hono, the fast, lightweight, and modern web framework for building APIs.
- ✨ **Decoupled Architecture:** Promotes clean separation of concerns between your UI and your API logic, making the project more scalable and maintainable.

### Frontend Features (`/frontend`)

- 🎨 **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- ✨ **shadcn/ui:** A collection of beautifully designed, accessible, and customizable components.
- 🪄 **Prettier:** An opinionated code formatter to ensure consistent code style, pre-configured with plugins for import and class sorting.
- 🤖 **React Compiler:** An experimental compiler that optimizes your React code.
- ✅ **ESLint for React Compiler:** ESLint is configured to enforce the rules of hooks and other React best practices with the compiler in mind.
- 🖼️ **Lucide Icons:** A beautiful and consistent icon set.

## Getting Started

### 1. Clone & Install

First, clone the repository. The `bun install` command will use Bun Workspaces to install dependencies for the entire monorepo (`frontend` and `backend`).

```bash
git clone https://github.com/your-username/next-hono-start
cd next-hono-start
bun install
```

### 2. Set Up Environment Variables

This project uses `.env` files for environment variables. You can start by copying the examples:

In the `/frontend` directory, create `.env.local`:

```bash
# In /frontend/.env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

In the `/backend` directory, create `.env` for any backend-specific keys (like database URLs or API keys):

```bash
# In /backend/.env
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

## Available Scripts

All primary commands should be run from the **root** of the monorepo.

| Command          | Description                                                                   |
| :--------------- | :---------------------------------------------------------------------------- |
| `bun run dev`    | Starts the development servers for both `frontend` and `backend` in parallel. |
| `bun run build`  | Builds both applications for production, respecting the dependency graph.     |
| `bun run lint`   | Lints the code in all workspaces.                                             |
| `bun run format` | Formats the code in all workspaces using Prettier.                            |

### Workspace-Specific Scripts

Some scripts are specific to a single workspace and should be run from within that directory. The most common example is adding new UI components.

**To add a new shadcn/ui component:**

```bash
cd frontend
bun run shadcn
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
