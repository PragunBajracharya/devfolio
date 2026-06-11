# Pragun Bajracharya — Dev Workspace Portfolio

An interactive, **IDE-style developer portfolio** built with **Next.js (App Router) + React + TypeScript + Tailwind CSS**.

Instead of a traditional scrolling page, the whole portfolio runs as a tiny in-browser code editor: a file explorer, syntax-highlighted source files, a live rendered preview pane, a command palette, and a fully working terminal.

## ✨ Features

- **File explorer + tabs** — every section is a "source file" (`about.json`, `skills.js`, `experience.ts`, `projects.jsx`, `contact.md`, `README.md`)
- **Code ↔ live preview split** — left pane shows syntax-highlighted code, right pane shows the same data rendered as UI
- **Working terminal (REPL)** — type `help`, `projects`, `open 2`, `neofetch`, `skills`, `whoami`, `contact`… with history (↑/↓), `Tab` autocomplete, and aliases
- **Command palette** — `⌘K` / `Ctrl+K` to fuzzy-jump to any file or action
- **Keyboard shortcuts** — `Ctrl + \`` toggles the terminal
- **From-scratch syntax highlighter** — no external library
- **Boot splash, status bar, activity bar** — the full editor chrome
- Fully **responsive** (collapses to file chips + editor + terminal on mobile)

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

To build for production:

```bash
npm run build
npm run start
```

## 🧱 Project structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # renders <Workspace/>
  globals.css       # Tailwind layers + syntax/terminal token classes
components/
  Workspace.tsx     # state orchestrator (tabs, palette, terminal)
  TitleBar.tsx
  ActivityBar.tsx
  Explorer.tsx
  EditorTabs.tsx
  CodePane.tsx      # gutter + highlighted lines
  PreviewPane.tsx   # rendered "live" views per file
  Terminal.tsx      # the REPL
  StatusBar.tsx
  CommandPalette.tsx
  Boot.tsx
  icons.tsx
lib/
  data.ts           # single source of truth (profile, skills, projects, files, tree)
  highlight.ts      # tiny syntax highlighter
  commands.ts       # terminal command definitions
```

## ✏️ Editing your content

Everything lives in **`lib/data.ts`** — update `PROFILE`, `SKILLS`, `EXPERIENCE`,
`PROJECTS`, and the `FILES` map. Both the code view and the live preview read from
the same data, so you only edit once.

## 🎨 Theming

Colors, fonts and animations are defined in **`tailwind.config.ts`**. The syntax-token
colors used by the highlighter live in **`app/globals.css`** under `@layer components`.

## 📦 Deploy

Works out of the box on **Vercel** — push to a Git repo and import it. Project
images are loaded with a plain `<img>` tag, so no `next/image` domain config is needed.

---

Built by Pragun Bajracharya · MIT License
