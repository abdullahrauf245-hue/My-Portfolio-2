# My Portfolio Workspace

A modern, high-performance developer portfolio built as a monorepo workspace managed with `pnpm`. It features a React/Vite frontend with rich interactive elements, an Express/Node.js API server deployed as a serverless backend, and shared libraries for database migrations and API schemas.

---

## Project Structure

```text
my-portfolio/
├── artifacts/
│   ├── portfolio/         (React/Vite Frontend)
│   ├── api-server/        (Express/Node Backend)
│   └── mockup-sandbox/    (Mockup Testing Sandbox)
├── lib/
│   ├── db/                (Drizzle ORM Database Schema)
│   ├── api-spec/          (OpenAPI Specification)
│   ├── api-zod/           (Generated Zod Validation)
│   └── api-client-react/  (Generated React Query Client)
└── attached_assets/       (Static Assets / Resumes & Images)
```

---

## Features

### Frontend Portfolio
*   **Parallax Depth Layers**: Sections move smoothly at customized depths during scroll.
*   **Accessibility Controls**: Floating options to adjust font sizes, toggle high-contrast view, and reduce motion interactions.
*   **Interactive Modals**: Seamless Contact Modal for direct messages.

### Backend API Server
*   **Serverless Ready**: Fully configured for Vercel deployment with dynamic routing and optional port binding.
*   **Pino Logging**: Structured logging for reliable monitoring.
*   **Database Integration**: Configured with Drizzle ORM schema mapping.

---

## Getting Started

### Prerequisites
*   Node.js (v24 or later recommended)
*   `pnpm` package manager

### Installation
Install workspace dependencies:
```bash
pnpm install
```

### Running Locally

To run the portfolio development server:
```bash
pnpm --filter @workspace/portfolio run dev
```

To run the API server locally:
```bash
pnpm --filter @workspace/api-server run dev
```

### Workspace Commands

*   **Build the entire portfolio**:
    ```bash
    pnpm run build
    ```
*   **Run typecheck globally**:
    ```bash
    pnpm run typecheck
    ```

---

## Deployment on Vercel

### API Server (`artifacts/api-server`)
Deploy the serverless Express API:
1. Ensure **Vercel Deployment Protection** is disabled in your dashboard settings to allow public API calls.
2. The `vercel.json` rewrite configuration handles all incoming traffic mapping to the compiled bundle.

### Portfolio Frontend (`artifacts/portfolio`)
Build outputs compile to `artifacts/portfolio/dist/public` which can be served as a static SPA.
