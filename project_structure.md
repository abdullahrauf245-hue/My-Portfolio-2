# Project Structure

This project is a monorepo workspace managed with `pnpm` optimized exclusively for the frontend portfolio application.

---

## Directory Hierarchy

```text
my-portfolio/
├── artifacts/
│   └── portfolio/     (React/Vite Frontend)
├── attached_assets/   (Static Assets / PDFs & Images)
└── scripts/           (Build & Workspace Scripts)
```

---

## Workspace Components

### 📦 Applications (`artifacts/`)

*   **`artifacts/portfolio/`** (Vite + React + TypeScript + Framer Motion)
    *   The primary frontend portfolio application.
    *   Includes parallax scrolling, responsive layouts, and an interactive accessibility menu (font size, contrast, reduced-motion controls).
    *   **Key Files**:
        *   `src/pages/Home.tsx`: Main portfolio page containing sections (Hero, About, Projects, Experience, Skills, Education, Contact).
        *   `src/components/ui/`: Reusable UI elements.

### 📂 Assets & Configurations
*   **`attached_assets/`**: Storage folder for static downloadable items (e.g., PDF resumes, user-uploaded profile pictures).
*   **`scripts/`**: Utility scripts for build and workspace orchestration.
*   **`tsconfig.base.json`**: Global base TypeScript compilation configuration.
*   **`tsconfig.json`**: Root project references.
*   **`pnpm-workspace.yaml`**: Defines the pnpm workspace package routes.
*   **`package.json`**: Root package configurations and workspace scripts.

---

## Core Workspace Scripts

Scripts can be run from the root directory using `pnpm`:

| Command | Action |
|---|---|
| `pnpm run build` | Builds the React frontend application (`@workspace/portfolio`). |
| `pnpm run typecheck` | Runs a workspace-wide TypeScript compilation check on the portfolio frontend. |
