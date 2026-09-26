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
<!-- gitpulse:contribution index="1788608344" timestamp="2026-09-05" -->
<!-- gitpulse:contribution index="1788630903" timestamp="2026-09-05" -->
<!-- gitpulse:contribution index="1788654889" timestamp="2026-09-06" -->
<!-- gitpulse:contribution index="1788695899" timestamp="2026-09-06" -->
<!-- gitpulse:contribution index="1788717684" timestamp="2026-09-06" -->
<!-- gitpulse:contribution index="1788741702" timestamp="2026-09-07" -->
<!-- gitpulse:contribution index="1788789528" timestamp="2026-09-07" -->
<!-- gitpulse:contribution index="1788809758" timestamp="2026-09-07" -->
<!-- gitpulse:contribution index="1788828865" timestamp="2026-09-08" -->
<!-- gitpulse:contribution index="1788871081" timestamp="2026-09-08" -->
<!-- gitpulse:contribution index="1788894929" timestamp="2026-09-08" -->
<!-- gitpulse:contribution index="1788915774" timestamp="2026-09-09" -->
<!-- gitpulse:contribution index="1788957878" timestamp="2026-09-09" -->
<!-- gitpulse:contribution index="1788980703" timestamp="2026-09-09" -->
<!-- gitpulse:contribution index="1789001468" timestamp="2026-09-10" -->
<!-- gitpulse:contribution index="1789044172" timestamp="2026-09-10" -->
<!-- gitpulse:contribution index="1789066622" timestamp="2026-09-10" -->
<!-- gitpulse:contribution index="1789087790" timestamp="2026-09-11" -->
<!-- gitpulse:contribution index="1789130235" timestamp="2026-09-11" -->
<!-- gitpulse:contribution index="1789153133" timestamp="2026-09-11" -->
<!-- gitpulse:contribution index="1789174493" timestamp="2026-09-12" -->
<!-- gitpulse:contribution index="1789214297" timestamp="2026-09-12" -->
<!-- gitpulse:contribution index="1789236365" timestamp="2026-09-12" -->
<!-- gitpulse:contribution index="1789259850" timestamp="2026-09-13" -->
<!-- gitpulse:contribution index="1789304806" timestamp="2026-09-13" -->
<!-- gitpulse:contribution index="1789324369" timestamp="2026-09-13" -->
<!-- gitpulse:contribution index="1789346683" timestamp="2026-09-14" -->
<!-- gitpulse:contribution index="1789397060" timestamp="2026-09-14" -->
<!-- gitpulse:contribution index="1789416602" timestamp="2026-09-14" -->
<!-- gitpulse:contribution index="1789434626" timestamp="2026-09-15" -->
<!-- gitpulse:contribution index="1789477740" timestamp="2026-09-15" -->
<!-- gitpulse:contribution index="1789500708" timestamp="2026-09-15" -->
<!-- gitpulse:contribution index="1789520794" timestamp="2026-09-16" -->
<!-- gitpulse:contribution index="1789564169" timestamp="2026-09-16" -->
<!-- gitpulse:contribution index="1789586559" timestamp="2026-09-16" -->
<!-- gitpulse:contribution index="1789607121" timestamp="2026-09-17" -->
<!-- gitpulse:contribution index="1789650195" timestamp="2026-09-17" -->
<!-- gitpulse:contribution index="1789673616" timestamp="2026-09-17" -->
<!-- gitpulse:contribution index="1789693361" timestamp="2026-09-18" -->
<!-- gitpulse:contribution index="1789735417" timestamp="2026-09-18" -->
<!-- gitpulse:contribution index="1789757559" timestamp="2026-09-18" -->
<!-- gitpulse:contribution index="1789779525" timestamp="2026-09-19" -->
<!-- gitpulse:contribution index="1789820224" timestamp="2026-09-19" -->
<!-- gitpulse:contribution index="1789842320" timestamp="2026-09-19" -->
<!-- gitpulse:contribution index="1789864779" timestamp="2026-09-20" -->
<!-- gitpulse:contribution index="1789908716" timestamp="2026-09-20" -->
<!-- gitpulse:contribution index="1789928961" timestamp="2026-09-20" -->
<!-- gitpulse:contribution index="1789951839" timestamp="2026-09-21" -->
<!-- gitpulse:contribution index="1790002275" timestamp="2026-09-21" -->
<!-- gitpulse:contribution index="1790021762" timestamp="2026-09-21" -->
<!-- gitpulse:contribution index="1790040367" timestamp="2026-09-22" -->
<!-- gitpulse:contribution index="1790082416" timestamp="2026-09-22" -->
<!-- gitpulse:contribution index="1790105725" timestamp="2026-09-22" -->
<!-- gitpulse:contribution index="1790126130" timestamp="2026-09-23" -->
<!-- gitpulse:contribution index="1790169713" timestamp="2026-09-23" -->
<!-- gitpulse:contribution index="1790191593" timestamp="2026-09-23" -->
<!-- gitpulse:contribution index="1790211934" timestamp="2026-09-24" -->
<!-- gitpulse:contribution index="1790255626" timestamp="2026-09-24" -->
<!-- gitpulse:contribution index="1790279273" timestamp="2026-09-24" -->
<!-- gitpulse:contribution index="1790298520" timestamp="2026-09-25" -->
<!-- gitpulse:contribution index="1790342141" timestamp="2026-09-25" -->
<!-- gitpulse:contribution index="1790365815" timestamp="2026-09-25" -->
<!-- gitpulse:contribution index="1790385107" timestamp="2026-09-26" -->
<!-- gitpulse:contribution index="1790426431" timestamp="2026-09-26" -->
