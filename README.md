# My Portfolio Workspace

A modern, high-performance developer portfolio built as a monorepo workspace managed with `pnpm`. It features a React/Vite frontend with rich interactive elements.

---

## Project Structure

```text
my-portfolio/
├── artifacts/
│   └── portfolio/     (React/Vite Frontend)
└── attached_assets/   (Static Assets / Resumes & Images)
```

---

## Features

### Frontend Portfolio
*   **Parallax Depth Layers**: Sections move smoothly at customized depths during scroll.
*   **Accessibility Controls**: Floating options to adjust font sizes, toggle high-contrast view, and reduce motion interactions.
*   **Interactive Modals**: Seamless Contact Modal.

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

### Workspace Commands

*   **Build the portfolio**:
    ```bash
    pnpm run build
    ```
*   **Run typecheck**:
    ```bash
    pnpm run typecheck
    ```

---

## Deployment on Vercel

### Portfolio Frontend (`artifacts/portfolio`)
Build outputs compile to `artifacts/portfolio/dist/public` which can be served as a static SPA.
