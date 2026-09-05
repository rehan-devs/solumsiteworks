# Solum Siteworks | Premium Civil & Structural Web Interface

An immersive, high-performance web platform built for **Solum Siteworks**, a modern design-build studio specializing in elite civil engineering, high-precision site preparation, and structural roofing interfaces. 

This interface focuses on fluid motion, structural geometry, and crisp typographic hierarchy to deliver a premium digital presence.

---

## 🛠️ Tech Stack & Architecture

This project is engineered using a modern front-end workflow focused on speed, type safety, and micro-interactions:

*   **Framework:** React + TypeScript (Vite-powered for rapid HMR)
*   **Styling:** Tailwind CSS (Modular utility-first architecture)
*   **Animations:** High-precision layout tracking and fluid scroll interactions
*   **Linting & Quality:** ESLint with strict type-aware rules for scalable component design

---

## 🚀 Getting Started

Clone the Repository

git clone [https://github.com/rehan-devs/solumsiteworks.git](https://github.com/rehan-devs/solumsiteworks.git)
cd solumsiteworks
2. Install Dependencies

npm install
Run the Development Server

npm run dev
Build for Production

npm run build
📐 Design Language & UI Overview
The layout intentionally diverges from standard construction tropes to project an elite, industrial startup aesthetic:

The Palette: An ultra-dark, premium slate base contrasted against striking structural accents to represent earth, concrete, and steel.

Typography: A bold, geometric sans-serif for heavy structural headers paired with custom editorial serif-italic highlights to emphasize high-end craftsmanship.

Layout: High-contrast grids, responsive navigation states, and stripped-down minimalist sections (Services, Portfolio, Process, Contact) that speak clearly to the user.

⚙️ Development Standards
ESLint Customization
For strict production builds, this repository is configured to utilize strict type-checked rules via tseslint:

JavaScript
// eslint.config.js snippet
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
<!-- gitpulse:contribution index="1" timestamp="2026-06-11" -->
<!-- gitpulse:contribution index="2" timestamp="2026-06-11" -->
<!-- gitpulse:contribution index="3" timestamp="2026-06-11" -->
<!-- gitpulse:contribution index="4" timestamp="2026-06-11" -->
<!-- gitpulse:contribution index="5" timestamp="2026-06-11" -->
<!-- gitpulse:contribution index="6" timestamp="2026-06-11" -->
<!-- gitpulse:contribution index="7" timestamp="2026-06-11" -->
<!-- gitpulse:contribution index="8" timestamp="2026-06-11" -->
<!-- gitpulse:contribution index="9" timestamp="2026-06-11" -->
<!-- gitpulse:contribution index="10" timestamp="2026-06-11" --><!-- gitpulse:contribution index="1788143300" timestamp="2026-08-31" -->
<!-- gitpulse:contribution index="1788191489" timestamp="2026-08-31" -->
<!-- gitpulse:contribution index="1788211107" timestamp="2026-08-31" -->
<!-- gitpulse:contribution index="1788226752" timestamp="2026-09-01" -->
<!-- gitpulse:contribution index="1788268001" timestamp="2026-09-01" -->
<!-- gitpulse:contribution index="1788289961" timestamp="2026-09-01" -->
<!-- gitpulse:contribution index="1788310147" timestamp="2026-09-02" -->
<!-- gitpulse:contribution index="1788352451" timestamp="2026-09-02" -->
<!-- gitpulse:contribution index="1788376404" timestamp="2026-09-02" -->
<!-- gitpulse:contribution index="1788397049" timestamp="2026-09-03" -->
<!-- gitpulse:contribution index="1788439019" timestamp="2026-09-03" -->
<!-- gitpulse:contribution index="1788462372" timestamp="2026-09-03" -->
<!-- gitpulse:contribution index="1788482821" timestamp="2026-09-04" -->
<!-- gitpulse:contribution index="1788525054" timestamp="2026-09-04" -->
<!-- gitpulse:contribution index="1788547746" timestamp="2026-09-04" -->
<!-- gitpulse:contribution index="1788568650" timestamp="2026-09-05" -->
