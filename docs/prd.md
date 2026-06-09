# Product Requirements Document (PRD)

## Project Name: Muhammad Abdullah — Developer Portfolio
**Target URL**: [devbyabdullah.vercel.app](https://devbyabdullah.vercel.app)  
**Status**: Live / Production  
**Author**: Muhammad Abdullah  

---

## 1. Executive Summary & Goals

### 1.1 Purpose
The developer portfolio serves as a central professional hub for Muhammad Abdullah, a Data Science student at NUST Islamabad. The portfolio is designed to showcase his technical projects, experiences, academic credentials, and skills in a highly engaging, visual, and modern manner.

### 1.2 Objectives
*   **Establish a Strong Professional Identity**: Highlight the unique value proposition—merging academic rigor (District Topper, NUST Data Science) with a builder/hacker mindset.
*   **Provide a Rich Visual Experience**: Utilize modern design patterns (custom cursor, 3D tilt effects, parallax scrolling, particle backdrops, orbital skill rings) to instantly captivate recruiters and leaders.
*   **Demonstrate Technical Depth**: Host detailed descriptions, links, and code repos for real-world projects.
*   **Incentivize Inbound Leads**: Guide visitors toward downloading the CV or sending an inquiry through a contact form.

---

## 2. Target Audience & User Personas

### 2.1 Technical Recruiter
*   **Goal**: Quick validation of candidate's skills, resume download, and matching credentials for internships or entry-level positions.
*   **Behavior**: High-speed scanning, looks directly for Github/LinkedIn links, downloads the CV within 10 seconds of landing.
*   **Pain Points**: Clunky user interfaces, hard-to-find contact information, lack of clear summaries.

### 2.2 Engineering Lead / Technical Director
*   **Goal**: Evaluate code quality, technical execution, project difficulty, and logical thinking.
*   **Behavior**: Clicks on GitHub repository links, inspects project architectures, looks at the contribution graph, checks for complex components (e.g. 3D controls, canvas physics).
*   **Pain Points**: Template portfolios, lack of live links, poorly explained contribution details.

---

## 3. Product Features & Functional Requirements

### 3.1 Custom Splash Preloader
*   **Requirement**: A clean, black-screen intro splash showing the candidate's name in an outlined glowing font.
*   **Interactions**: Name animation, followed by a scaling horizontal divider and mono subtitle, fading out after 2.2 seconds to lock and unlock body scroll during loading.

### 3.2 Dynamic Interactive Navigation (Floating Island Header)
*   **Requirement**: A fixed header that collapses into a floating glassmorphic container upon scroll.
*   **Links**: Overview, About, Projects, Skills, Experience, Education, Activity.
*   **Features**:
    *   Left side branding/spacer.
    *   Right side social action buttons (GitHub, LinkedIn, Email).
    *   Theme toggle (Light/Dark mode).
    *   Action CTA button (Contact).
    *   Responsive hamburger menu for mobile screens.

### 3.3 Custom Pointer Cursor (Desktop-Only)
*   **Requirement**: A custom cursor composed of an ambient radial gradient glow trail, crosshair lines, and a center diamond.
*   **Interactions**: Cursor expands, scale increases, and rotates by 45 degrees when hovering over clickable elements (anchors, buttons, inputs). Disabled when reduced motion is activated.

### 3.4 Interactive Sections
*   **Overview (Hero)**: Includes large interactive title with bouncy character-by-character hover states, direct call-to-actions, and a 3D perspective-tilted profile card.
*   **About**: Concise statement emphasizing engineering principles and community participation, location tags, and NUST branding.
*   **Selected Work (Projects)**: 
    *   Support for three major projects: Muslim Traders (Enterprise Logistics), NUST Events (Full Stack Portal), and NUSTCafe (Campus Web App).
    *   Features: Title, description, bullet points, tags, GitHub link, Live Demo link, overlapping laptop and phone mockup container with 3D hover effects.
*   **Skills (Technical Arsenal)**: Visualized using `ToolkitOrbital`, which displays skill logos orbitally in 3D.
*   **Experience & Leadership Timeline**: Scroll-driven timeline using a scale-animated line that changes color and activates glowing timeline beads as the user scrolls. Bullet points reveal sequentially.
*   **Education Grid**: 3D card layout featuring achievements (e.g., BSDS @ NUST, District Topper at DPS Chakwal).
*   **Activity**: Integration of real-time Github calendar (`GitHubCalendar`) tracking the profile `abdullahrauf245-hue`, featuring custom tooltips for daily contributions.

### 3.5 Accessibility Control Widget
*   **Requirement**: Floating accessibility menu triggerable via a bottom-left widget.
*   **Options**:
    *   **Appearance**: System theme toggling.
    *   **Font Size Adjustment**: Simple buttons to select S, M, L, XL sizing, altering root font-size dynamically.
    *   **High Contrast**: Toggles high contrast colors to guarantee visual compliance.
    *   **Reduce Motion**: Toggles standard Framer Motion animations off for users sensitive to transitions.

### 3.6 Contact Modal System
*   **Requirement**: A popup contact modal triggered by CTA buttons.
*   **Integration**: Connects directly to EmailJS API.
*   **Validation**: Form inputs for Name, Email, and Message. Shows a success screen upon validation or provides an alternative direct mailto anchor if the API request fails.

---

## 4. Non-Functional Requirements

### 4.1 Performance & Responsiveness
*   **Load Time**: Must load within 2 seconds. Canvas particles should throttle dynamically on lower-end devices.
*   **Responsiveness**: Flawless layout adaptivity across ultra-wide monitors, laptops, tablets, and mobile smartphones.

### 4.2 SEO & Discoverability
*   **Meta Tags**: Pre-configured title and metadata for social card sharing (OpenGraph, Twitter tags).
*   **Search Indexing**: Standard robot configuration allowing spiders to crawl and index.

### 4.3 Technical Security
*   **Form Protection**: Basic client-side validation to block empty payloads.
*   **Access Keys**: Secure client-side EmailJS integration keys.
