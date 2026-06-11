import { PROFILE, SKILLS, EXPERIENCE, PROJECTS, FILES } from "./data";

export type CommandContext = {
  openFile: (name: string) => void;
  clear: () => void;
};

// Each command returns an HTML string (or null to print nothing).
export function createCommands(ctx: CommandContext) {
  const COMMANDS: Record<string, (arg: string) => string | null> = {
    help() {
      return `<span class="t-acc">available commands</span>
  <span class="t-acc">whoami</span>      who is pragun
  <span class="t-acc">about</span>       open about.json
  <span class="t-acc">skills</span>      list the tech stack
  <span class="t-acc">experience</span>  career timeline
  <span class="t-acc">projects</span>    list shipped projects
  <span class="t-acc">open</span> &lt;n&gt;    launch project n  (e.g. open 2)
  <span class="t-acc">contact</span>     ways to reach me
  <span class="t-acc">neofetch</span>    system info card
  <span class="t-acc">resume</span>      view resume / cv
  <span class="t-acc">clear</span>       clear the terminal
  <span class="t-mut">tip: ↑/↓ history · Tab autocompletes</span>`;
    },
    whoami() {
      return `<span class="t-ok">${PROFILE.name}</span> — ${PROFILE.role}\n${PROFILE.blurb}`;
    },
    about() {
      ctx.openFile("about.json");
      return `<span class="t-mut">opened</span> about.json`;
    },
    skills() {
      return Object.entries(SKILLS)
        .map(([g, a]) => `<span class="t-acc">${g.padEnd(16)}</span>${a.join(", ")}`)
        .join("\n");
    },
    experience() {
      return EXPERIENCE.map(
        (e) =>
          `<span class="t-acc">${e.yr}</span>  ${e.role}\n             <span class="t-mut">${e.org}</span>`
      ).join("\n");
    },
    projects() {
      return PROJECTS.map(
        (p, i) =>
          `<span class="t-warn">[${i + 1}]</span> <span class="t-ok">${p.name}</span> — <span class="t-mut">${p.desc}</span>\n      ${p.stack.join(" · ")}  <span class="term-link" data-open="${p.url}">${p.url}</span>`
      ).join("\n");
    },
    open(arg) {
      const i = parseInt(arg) - 1;
      if (isNaN(i) || !PROJECTS[i])
        return `<span class="t-er">usage: open &lt;number 1-${PROJECTS.length}&gt;</span>`;
      if (typeof window !== "undefined") window.open(PROJECTS[i].url, "_blank");
      return `<span class="t-ok">launching</span> ${PROJECTS[i].name} → ${PROJECTS[i].url}`;
    },
    contact() {
      ctx.openFile("contact.md");
      return `<span class="t-acc">email</span>     ${PROFILE.email}
<span class="t-acc">linkedin</span>  <span class="term-link" data-open="${PROFILE.linkedin}">/in/pragun-bajracharya</span>
<span class="t-acc">github</span>    <span class="term-link" data-open="${PROFILE.github}">@PragunBajracharya</span>`;
    },
    resume() {
      ctx.openFile("experience.ts");
      return `<span class="t-mut">rendering CV in editor…</span> see experience.ts + skills.js`;
    },
    neofetch() {
      return `<span class="ascii">      ╭───────────╮     </span><span class="t-acc">pragun</span>@<span class="t-acc">dev</span>
<span class="ascii">      │  &gt; _     │     </span>──────────────
<span class="ascii">      │     P B  │     </span><span class="t-acc">role</span>    ${PROFILE.role}
<span class="ascii">      │          │     </span><span class="t-acc">os</span>      Web · Cross-platform
<span class="ascii">      ╰───────────╯     </span><span class="t-acc">based</span>   ${PROFILE.location}
                       <span class="t-acc">uptime</span>  5+ years coding
                       <span class="t-acc">stack</span>   React · Node · PHP · Python
                       <span class="t-acc">status</span>  <span class="t-ok">● ${PROFILE.status}</span>
                       <span class="ascii">●</span><span style="color:#f7768e">●</span><span style="color:#e0af68">●</span><span style="color:#9ece6a">●</span><span style="color:#7aa2f7">●</span><span style="color:#c792ea">●</span>`;
    },
    clear() {
      ctx.clear();
      return null;
    },
    sudo() {
      return `<span class="t-er">[sudo]</span> nice try 😄 — you already have full read access.`;
    },
    vim() {
      return `<span class="t-warn">you opened vim.</span> to exit press :q  ...  (jk, you're stuck here forever)`;
    },
    ls() {
      return Object.keys(FILES)
        .map((f) => `<span class="t-acc">${f}</span>`)
        .join("   ");
    },
    echo(a) {
      return a || "";
    },
  };

  const ALIASES: Record<string, string> = {
    cat: "about",
    "ls -a": "ls",
    cv: "resume",
    work: "projects",
    hi: "whoami",
    hello: "whoami",
  };

  function run(raw: string): string | null {
    if (!raw) return null;
    const parts = raw.split(/\s+/);
    const cmd = parts[0];
    const arg = parts.slice(1).join(" ");
    const key = ALIASES[raw] || ALIASES[cmd] || cmd;
    if (COMMANDS[key]) return COMMANDS[key](arg);
    return `<span class="t-er">command not found:</span> ${cmd} <span class="t-mut">— type</span> <span class="t-acc">help</span>`;
  }

  return { run, names: Object.keys(COMMANDS) };
}
