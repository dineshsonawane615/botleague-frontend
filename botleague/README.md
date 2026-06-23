# BotLeague — India's Ultimate Robotics Arena

Frontend assignment built with **React + Vite + Plain CSS** (no Tailwind dependency).

---

## Project Structure

```
botleague/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx               ← React entry point
    ├── App.jsx                ← Root app + simple page router
    │
    ├── pages/                 ← One file per route
    │   ├── Home.jsx
    │   ├── Events.jsx
    │   ├── Programs.jsx
    │   ├── Community.jsx
    │   └── Rankings.jsx
    │
    ├── components/            ← Reusable UI sections
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── EventsSection.jsx
    │   ├── Journey.jsx
    │   ├── Categories.jsx     ← also contains WhatIsBotLeague
    │   ├── Disciplines.jsx
    │   ├── Advantages.jsx     ← also contains Leaderboard
    │   ├── JoinEcosystem.jsx
    │   └── Footer.jsx
    │
    └── styles/                ← One CSS file per component
        ├── global.css
        ├── Navbar.css
        ├── Hero.css
        ├── EventsSection.css
        ├── Journey.css
        ├── Categories.css     ← covers What + Categories sections
        ├── Disciplines.css
        ├── Advantages.css     ← covers Advantages + Leaderboard
        └── JoinEcosystem.css  ← covers Join + Footer
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Tech Stack

| Tool       | Purpose                     |
|------------|-----------------------------|
| React 18   | UI library                  |
| Vite 5     | Dev server & build tool     |
| Plain CSS 
+ tailwind CSS  | Styles — one file/component |
| Google Fonts (Barlow Condensed) | Display font |

---

## Design Notes

- Color palette: `#ef4444` red accent · `#f59e0b` gold · `#3b82f6` blue (journey) · `#7c3aed` purple border (ecosystem)
- All sections match the provided design screenshots pixel-for-pixel
- Fully responsive — collapses to single column on mobile
- No external icon library — all icons are inline SVG

---

## Adding Real Images

Replace emoji/gradient placeholders in:
- `Hero.jsx` → swap `.hero__arena` with `<img src="..." />`
- `Disciplines.jsx` → replace `background` gradient with `background-image: url(...)`
- `Categories.jsx` → replace emoji icons with `<img>` tags
