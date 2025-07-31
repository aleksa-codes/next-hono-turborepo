# ⚡ Next.js + Hono Starter Template

A minimal and clean monorepo starter template featuring a Next.js 15 frontend and a high-performance Hono backend.

This template is for those who want a robust, decoupled architecture from the start. It combines the excellent frontend experience of the `next-start` template with a separate, modern API layer using Hono, all managed within a single repository using Bun Workspaces.

## Core Features

- 📦 **Monorepo Ready:** Organized with Bun Workspaces for easy management of frontend and backend code.
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

First, clone the repository. The `bun install` command will read the root `package.json` and install dependencies for the entire monorepo (`frontend` and `backend`).

```bash
git clone https://github.com/your-username/next-hono-start
cd next-hono-start
bun install
```

### 2. Set Up Environment Variables

This project uses a `.env.local` file for environment variables. Create one in the `/frontend` directory for the Next.js app.

```bash
# In /frontend/.env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

You can also create a `.env.local` in the `/backend` directory for any backend-specific keys (like `OPENAI_API_KEY`).

### 3. Run the Development Servers

This monorepo contains two services. You'll need to run them in **separate terminal windows**.

**Terminal 1: Start the Backend Server**

```bash
cd backend
bun run dev
```

Your Hono backend will be running on `http://localhost:8000`.

**Terminal 2: Start the Frontend Server**

```bash
# From the root directory
cd frontend
bun run dev
```

Open `http://localhost:3000` with your browser to see the result.

## Available Scripts

Scripts are run from within their respective workspace directories.

### Frontend (`/frontend`)

- `bun run dev`: Starts the development server.
- `bun run build`: Builds the application for production.
- `bun run start`: Starts the production server.
- `bun run lint`: Lints the code using ESLint.
- `bun run format`: Formats the code using Prettier.
- `bun run shadcn`: Adds new shadcn/ui components.

### Backend (`/backend`)

- `bun run dev`: Starts the development server with live reload.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
