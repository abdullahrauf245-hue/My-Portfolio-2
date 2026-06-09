# Technical Requirements Document (TRD)

## Project Name: Muhammad Abdullah — Developer Portfolio
**Stack**: React, TypeScript, Vite, Framer Motion, pnpm workspaces, Tailwind CSS  
**Target File Structure Location**: [project_structure.md](file:///c:/replit21/My-Portfolio-2/project_structure.md)  

---

## 1. Technical Stack & Dependencies

### 1.1 Development Core
*   **Monorepo Package Manager**: `pnpm` (configured via [pnpm-workspace.yaml](file:///c:/replit21/My-Portfolio-2/pnpm-workspace.yaml)).
*   **Bundler**: `Vite` (configured via [vite.config.ts](file:///c:/replit21/My-Portfolio-2/artifacts/portfolio/vite.config.ts)).
*   **Language**: `TypeScript` (configured via [tsconfig.json](file:///c:/replit21/My-Portfolio-2/tsconfig.json) and [tsconfig.base.json](file:///c:/replit21/My-Portfolio-2/tsconfig.base.json)).
*   **Framework**: `React` (Functional components with hooks).

### 1.2 Key Libraries
*   **Animation System**: `framer-motion` (used for spring calculations, timelines, scroll-driven values, and transition state handlings).
*   **Icons**: `lucide-react` (standard outline vectors) and `react-icons/si` (brand vector logos like GitHub).
*   **Routing**: `wouter` (lightweight hash/path navigation routing).
*   **Data Feeds**: `react-github-calendar` (fetches GitHub SVG maps dynamically).

---

## 2. Architecture & File Structure

The project uses a monorepo workspace to isolate scripts, public assets, and build outputs.

```text
my-portfolio/
├── artifacts/
│   └── portfolio/               # Main Application Directory
│       ├── components.json     # shadcn-ui configuration file
│       ├── index.html          # SPA Root
│       ├── package.json        # Sub-project dependency ledger
│       ├── src/
│       │   ├── App.tsx          # Router, Theme context Provider, global layout
│       │   ├── main.tsx         # Root mounting script
│       │   ├── index.css        # Core tailwind setup + Accessibility utilities
│       │   ├── components/      # UI components (CanvasParticles, HoverCard3D, etc.)
│       │   ├── hooks/           # Shared state triggers
│       │   ├── lib/             # Utility classes (e.g. cn tailwind-merge)
│       │   └── pages/           # Routed views (Home.tsx, not-found.tsx)
│       └── tsconfig.json       # App-level TS compilation
├── attached_assets/             # Static PDF CV & Image backups
└── package.json                 # Monorepo Orchestration
```

---

## 3. High-Fidelity UI Components Design

### 3.1 3D Perspective Tilt Card (`HoverCard3D.tsx`)
*   **Logic**: Captures cursor offsets on a bounding client rectangle to apply custom 3D rotation vectors.
*   **Implementation**:
    *   Listens to `onMouseMove` events on the wrapper element.
    *   Normalizes pointer coordinate vectors `(x, y)` relative to the card's center:
        $$\text{rotateX} = - \left( \frac{y - \text{top}}{\text{height}} - 0.5 \right) \times \text{intensity}$$
        $$\text{rotateY} = \left( \frac{x - \text{left}}{\text{width}} - 0.5 \right) \times \text{intensity}$$
    *   Updates Framer Motion spring values `springX` and `springY` to smoothly transition coordinates and avoid frame stuttering.
    *   Applies a CSS radial-gradient overlay mask (spotlight effect) tracking the cursor absolute coordinates.

### 3.2 Orbital Skills Wheel (`ToolkitOrbital.tsx`)
*   **Logic**: Arranges node structures programmatically using polar coordinates mapping.
*   **Implementation**:
    *   For a given skill list, maps index locations to angles:
        $$\theta_i = i \times \frac{2\pi}{N}$$
    *   Calculates relative cartesian offsets:
        $$x_i = R \times \cos(\theta_i), \quad y_i = R \times \sin(\theta_i)$$
    *   Binds nodes to responsive drag frames.
    *   Applies physics-based drag coefficients to simulate angular momentum and deceleration.

### 3.3 Interactive Node Background (`CanvasParticles.tsx`)
*   **Logic**: Lightweight HTML5 Canvas animation runner.
*   **Implementation**:
    *   Uses a standard animation render cycle via `requestAnimationFrame`.
    *   Stores a dynamic coordinate array of particles with velocity vectors `(vx, vy)`.
    *   Draws lines linking nodes within a threshold distance threshold (e.g., 100 pixels) using opacity levels proportional to distance.
    *   Implements collision repulsion vectors relative to the user's cursor location.

---

## 4. Accessibility Theme Implementation

Accessibility adjustments are tracked via a centralized state object in `Home.tsx`:
```typescript
const [a11y, setA11y] = useState({ 
  fontSize: 0, 
  highContrast: false, 
  reducedMotion: false, 
  menuOpen: false 
});
```

### 4.1 Font Sizing
*   Calculates base font percentages: `100 + a11y.fontSize * 12.5%`.
*   Updates the root document style `document.documentElement.style.fontSize` directly.
*   Ensures all layouts use relative unit values (`rem`, `em`, `%`) to scale seamlessly.

### 4.2 High Contrast
*   Appends the CSS class `.a11y-high-contrast` to the document root element.
*   Forces specific HSL color mappings in `index.css` to hit WCAG AAA contrast ratios:
    ```css
    .a11y-high-contrast {
      --color-background-primary: #000000 !important;
      --color-text-primary: #ffffff !important;
      --color-text-secondary: #ffffff !important;
      --color-accent-orange: #ff3c00 !important;
      --color-border-subtle: #ffffff !important;
    }
    ```

### 4.3 Motion Reduction
*   Passes `a11y.reducedMotion` conditions to disable entrance, parallax, and spotlight cursor tracking.
*   Uses a conditional props overlay:
    ```typescript
    const motionProps = a11y.reducedMotion 
      ? { initial: undefined, animate: undefined, transition: { duration: 0 } } 
      : { ...standardConfig };
    ```

---

## 5. Performance and Build Optimization

### 5.1 Asset Optimization
*   SVG vectors are preferred for branding logos.
*   Downloadable CV is hosted statically inside the `public/` assets bundle.

### 5.2 Build Configuration
*   Uses Vite compiler with automatic code-splitting on routed components.
*   Bundle analyzer settings inside Vite trace vendor chunks (Framer Motion, React Calendar) to keep initial load bundles small.
