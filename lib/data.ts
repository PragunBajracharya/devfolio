// ============================================================
//  Single source of truth — powers both the "code" files and
//  the rendered live previews.
// ============================================================

export const PROFILE = {
	name: "Pragun Bajracharya",
	role: "Full-Stack Web Developer",
	location: "Ontario, Canada",
	origin: "Kathmandu, Nepal",
	status: "available",
	email: "pragunbaj99@gmail.com",
	linkedin: "https://www.linkedin.com/in/pragun-bajracharya/",
	github: "https://github.com/PragunBajracharya",
	blurb: "I build fast, secure, end-to-end web applications — from React interfaces down to Node and database layers. Recently focused on cybersecurity & computer forensics.",
};

export const STATS: [string, string][] = [
	["5+", "years coding"],
	["19", "technologies"],
	["5", "shipped projects"],
];

export const SKILLS: Record<string, string[]> = {
	Frontend: ["React", "Next.js", "JavaScript", "Redux", "jQuery", "HTML5", "CSS3"],
	Backend: ["Node.js", "PHP", "Laravel", "Python", "MySQL", "MongoDB"],
	"DevOps & Tools": ["AWS", "Docker", "Git", "GitHub", "WordPress", "Shopify"],
};

export type Role = { yr: string; role: string; org: string };
export const EXPERIENCE: Role[] = [
	{
		yr: "2023 — 2024",
		role: "PG Diploma · Cyber Security & Computer Forensics",
		org: "Lambton College — Ontario, Canada",
	},
	{
		yr: "2020 — 2022",
		role: "Web Developer",
		org: "SmartSites — Kathmandu, Nepal (2+ yrs)",
	},
	{
		yr: "2017 — 2021",
		role: "BSc · Computer & Information Sciences",
		org: "Sagarmatha College, Tribhuvan University",
	},
];

export type Project = {
	name: string;
	desc: string;
	stack: string[];
	url: string;
	img: string;
};
export const PROJECTS: Project[] = [
	{
		name: "Form Builder",
		desc: "Drag-and-drop form builder, zero frameworks — pure DOM engineering.",
		stack: ["HTML5", "JavaScript", "TailwindCSS"],
		url: "https://form-builder.pragunbaj.com/",
		img: "/images/Form-Builder-Pragun-Bajracharya.png",
	},
	{
		name: "P Chat App",
		desc: "Real-time messaging with WebSockets, JWT auth and MongoDB.",
		stack: ["React", "Node.js", "Socket.io", "MongoDB"],
		url: "https://github.com/PragunBajracharya/p-chat",
		img: "/images/P-ChatApp.png",
	},
	{
		name: "Seven-Segment Display",
		desc: "A clock built to explore bitwise logic & rendering.",
		stack: ["Next.js", "Canvas", "Bitwise"],
		url: "https://seven-segment-display.pragunbaj.com/",
		img: "/images/Seven-Segment-Display-Clock.png",
	},
	{
		name: "Sorting Visualizer",
		desc: "Watch sorting algorithms animate step by step in real time.",
		stack: ["Next.js", "Algorithms"],
		url: "https://pragunbajracharya.github.io/sorting-visualizer/",
		img: "/images/Basic-Sorting-Algorithm-Visualizer.png",
	},
	{
		name: "Chess Engine",
		desc: "Full chess rules, legal-move generation and board state.",
		stack: ["Next.js", "Game Logic"],
		url: "https://chess.pragunbaj.com/",
		img: "/images/Chess-Game-Pragun-Bajracharya.png",
	},
];

// ============================================================
//  File contents — authored to read like real source
// ============================================================
export type FileMeta = {
	lang: string;
	icon: [string, string]; // [label, colorClass]
	render: PreviewKind;
	code: string;
};
export type PreviewKind = "readme" | "about" | "skills" | "experience" | "projects" | "contact";

export const FILES: Record<string, FileMeta> = {
	"README.md": {
		lang: "Markdown",
		icon: ["MD", "text-[#83a8ff]"],
		render: "readme",
		code: `# Pragun Bajracharya

> Full-Stack Web Developer · Ontario, Canada 🇨🇦

Welcome to my workspace. This portfolio runs as a tiny IDE —
explore the files on the left, or drive it from the terminal below.

## Quick start
- open the file tree  ->  read about.json, projects.jsx, ...
- press  Cmd/Ctrl + K  ->  jump anywhere
- focus the terminal   ->  run \\\`help\\\`, \\\`projects\\\`, \\\`neofetch\\\`

## What I do
I design and ship web apps end to end: accessible front-ends in
React / Next.js, APIs in Node and PHP, and the database, auth and
deploy layers underneath. Lately: security & computer forensics.

\\\`\\\`\\\`bash
$ whoami
pragun — builder of things that load fast and don't break
\\\`\\\`\\\``,
	},

	"about.json": {
		lang: "JSON",
		icon: ["{}", "text-[#e0af68]"],
		render: "about",
		code: `{
  "name": "Pragun Bajracharya",
  "role": "Full-Stack Web Developer",
  "based": "Ontario, Canada",
  "from": "Kathmandu, Nepal",
  "status": "open to opportunities",
  "focus": ["web apps", "cyber security", "forensics"],
  "stats": {
    "yearsCoding": 5,
    "technologies": 19,
    "projectsShipped": 5
  },
  "values": ["clean code", "performance", "security-first"],
  "currentlyLearning": ["threat hunting", "cloud security"]
}`,
	},

	"skills.js": {
		lang: "JavaScript",
		icon: ["JS", "text-[#f7df1e]"],
		render: "skills",
		code: `// the toolkit I reach for, grouped by layer
export const stack = {
  frontend: ["React", "Next.js", "JavaScript",
             "Redux", "jQuery", "HTML5", "CSS3"],
  backend:  ["Node.js", "PHP", "Laravel",
             "Python", "MySQL", "MongoDB"],
  devops:   ["AWS", "Docker", "Git",
             "GitHub", "WordPress", "Shopify"]
};

export const principle = "learn one new tool every project";`,
	},

	"experience.ts": {
		lang: "TypeScript",
		icon: ["TS", "text-[#3178c6]"],
		render: "experience",
		code: `interface Role {
  period: string;
  title: string;
  org: string;
}

export const journey: Role[] = [
  {
    period: "2023 - 2024",
    title:  "PG Diploma, Cyber Security & Forensics",
    org:    "Lambton College, Canada"
  },
  {
    period: "2020 - 2022",
    title:  "Web Developer",
    org:    "SmartSites, Nepal"   // 2+ years
  },
  {
    period: "2017 - 2021",
    title:  "BSc, Computer & Information Sciences",
    org:    "Sagarmatha College, TU"
  }
];`,
	},

	"projects.jsx": {
		lang: "JavaScript JSX",
		icon: ["JSX", "text-[#61dafb]"],
		render: "projects",
		code: `import { ProjectCard } from "./components";

// see them rendered in the preview pane ->
export default function Portfolio() {
  return projects.map((p) => (
    <ProjectCard
      key={p.name}
      title={p.name}
      stack={p.stack}
      href={p.url}
    />
  ));
}

const projects = [
  { name: "Form Builder",      stack: ["HTML5","JS","Tailwind"] },
  { name: "P Chat App",        stack: ["React","Socket.io"] },
  { name: "Seven-Segment",     stack: ["Next.js","Bitwise"] },
  { name: "Sorting Visualizer",stack: ["Next.js","Algorithms"] },
  { name: "Chess Engine",      stack: ["Next.js","Game Logic"] }
];`,
	},

	"contact.md": {
		lang: "Markdown",
		icon: ["MD", "text-[#83a8ff]"],
		render: "contact",
		code: `# Let's build something

I'm open to full-time roles, freelance work and
collaborations. The fastest way to reach me:

- **email**    -> pragunbaj99@gmail.com
- **linkedin** -> /in/pragun-bajracharya
- **github**   -> @PragunBajracharya

> Based in Canada · available worldwide / remote.`,
	},

	"package.json": {
		lang: "JSON",
		icon: ["{}", "text-[#9ece6a]"],
		render: "about",
		code: `{
  "name": "pragun-bajracharya",
  "version": "2025.6.0",
  "description": "full-stack developer",
  "author": "Pragun Bajracharya <pragunbaj99@gmail.com>",
  "license": "MIT",
  "scripts": {
    "build": "ship clean, fast, secure apps",
    "deploy": "iterate, learn, repeat"
  },
  "keywords": ["react","node","security","forensics"]
}`,
	},
};

export type TreeNode = { type: "folder"; name: string; children: string[] } | { type: "file"; name: string };

export const TREE: TreeNode[] = [
	{
		type: "folder",
		name: "src",
		children: ["about.json", "skills.js", "experience.ts", "projects.jsx", "contact.md"],
	},
	{ type: "file", name: "README.md" },
	{ type: "file", name: "package.json" },
];
