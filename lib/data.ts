// ============================================================
//  Single source of truth — powers both the "code" files and
//  the rendered live previews.
// ============================================================

export const PROFILE = {
	name: "Pragun Bajracharya",
	role: "Full-Stack Developer",
	location: "Ontario, Canada",
	origin: "Kathmandu, Nepal",
	status: "available",
	email: "pragunbaj99@gmail.com",
	linkedin: "https://www.linkedin.com/in/pragun-bajracharya/",
	github: "https://github.com/PragunBajracharya",
	blurb: "I build fast, secure, end-to-end web applications — React and Next.js on " +
		"the front, Node.js / Laravel / PHP on the back, and a Post-Graduate Diploma\n" +
		"in Cybersecurity making sure nothing falls apart in between.",
};

export const STATS: [string, string][] = [
	["5+", "years coding"],
	["19", "technologies"],
	["5", "shipped projects"],
];

export const SKILLS: Record<string, string[]> = {
	frontend: ["React", "Next.js", "JavaScript", "Redux", "jQuery", "HTML5", "CSS3", "Tailwind"],
	backend:  ["Node.js", "PHP", "Laravel", "Python", "Rest APIs", "Socket.io"],
	database: ["MySQL", "MongoDB"],
	devops:   ["AWS", "Docker", "Git", "GitHub"],
	cms:      ["WordPress", "Shopify"],
	security: ["OWASP fundamentals", "JWT / OAuth", "Web application security"]
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
		name: "Devfolio",
		desc: "An interactive IDE-style portfolio built with Next.js, React and Tailwind.",
		stack: ["Next.js", "React", "Tailwind"],
		url: "https://pragunbaj.com/",
		img: "/images/Devfolio.png",
	},
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

> Full-Stack Developer · Ontario, Canada 🇨🇦

Welcome to my workspace. This portfolio runs as a tiny IDE —
explore the files on the left, or drive it from the terminal below.

## Quick start
- open the file tree  ->  read about.json, projects.jsx, ...
- press  Cmd/Ctrl + K  ->  jump anywhere
- focus the terminal   ->  run \\\`help\\\`, \\\`projects\\\`, \\\`neofetch\\\`

## What I do
I build fast, secure, end-to-end web applications — React and Next.js on
the front, Node.js / Laravel / PHP on the back, and a Post-Graduate Diploma
in Cybersecurity making sure nothing falls apart in between.

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
  "title": "Full-Stack Developer",
  "location": "Ontario, Canada",
  "origin": "Kathmandu, Nepal",
  "status": "open to work",
  "summary": "3+ years shipping web apps across PHP, Laravel, React, and Node. I also hold a PG Diploma in Cybersecurity & Computer Forensics — which means I think about auth, input validation, and attack surfaces while I build, not after.",
  "interests": [
    "Application security",
    "Developer tooling",
    "Real-time systems",
    "Open source"
  ],
  "contact": {
    "email": "pragunbaj99@gmail.com",
    "linkedin": "https://linkedin.com/in/pragun-bajracharya",
    "github": "https://github.com/PragunBajracharya"
  }
}`,
	},

	"skills.js": {
		lang: "JavaScript",
		icon: ["JS", "text-[#f7df1e]"],
		render: "skills",
		code: `// the toolkit I reach for, grouped by layer
export const stack = {
  frontend: ["React", "Next.js", "JavaScript", "Redux", "jQuery", "HTML5", "CSS3", "Tailwind"],
  backend:  ["Node.js", "PHP", "Laravel", "Python", "Rest APIs", "Socket.io"],
  database: ["MySQL", "MongoDB"],
  devops:   ["AWS", "Docker", "Git", "GitHub"],
  cms:      ["WordPress", "Shopify"],
  security: ["OWASP fundamentals", "JWT / OAuth", "Web application security"]
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
  {
    name: "Devfolio",
    description: "An interactive IDE-style portfolio built with Next.js, React and Tailwind.",
    stack: ["Next.js", "React", "Tailwind"],
    link: "https://pragunbaj.com/"
  },
  {
    name: "P Chat App",
    description: "Real-time messaging app with JWT auth, rooms, and live presence. Built with React, Node, Express, MongoDB, and Socket.io.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.io", "Zustand"],
    link: "https://github.com/PragunBajracharya/p-chat",
    highlight: "Security-conscious: JWT sessions, protected routes, server-side validation."
  },
  {
    name: "Drag-and-Drop Form Builder",
    description: "No-framework form builder in vanilla JS. Drag, drop, reorder, and export fields.",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    link: "https://form-builder.pragunbaj.com/",
    highlight: "Zero dependencies — demonstrates raw JS and DOM mastery."
  },
  {
    name: "Sorting Algorithm Visualizer",
    description: "Animated visualizer for bubble, merge, and quicksort algorithms.",
    stack: ["Next.js"],
    link: "https://pragunbajracharya.github.io/sorting-visualizer/",
    highlight: "Good for interviews — shows CS fundamentals in action."
  },
  {
    name: "Chess Game",
    description: "Fully playable chess implementation with standard piece movement and turn logic.",
    stack: ["Next.js"],
    link: "https://chess.pragunbaj.com/",
    highlight: "Complex state management and rule enforcement in pure JS logic."
  }
];`,
	},

	"contact.md": {
		lang: "Markdown",
		icon: ["MD", "text-[#83a8ff]"],
		render: "contact",
		code: `# Let's work together

I'm currently open to full-stack developer and application security roles.

| Channel  | Link 															|
|----------|------------------------------------|
| Email    | pragunbaj99@gmail.com 							|
| LinkedIn | linkedin.com/in/pragun-bajracharya |
| GitHub   | github.com/PragunBajracharya 			|
| Portfolio| pragunbaj.com							|

> Response time: usually within 24 hours.`,
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
