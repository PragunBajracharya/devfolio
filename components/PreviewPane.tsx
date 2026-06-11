"use client";
import {
  FILES,
  PROFILE,
  STATS,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  PreviewKind,
} from "@/lib/data";
import { BrandIcons } from "./icons";

function Readme() {
  return (
    <div>
      <h1 className="mb-[6px] bg-gradient-to-r from-text to-accent bg-clip-text text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-transparent">
        {PROFILE.name}
      </h1>
      <div className="mb-[14px] font-mono text-[13px] font-semibold tracking-[0.04em] text-accent">
        // {PROFILE.role}
      </div>
      <p className="mb-[18px] max-w-[46ch] text-[14px] leading-[1.7] text-dim">
        {PROFILE.blurb}
      </p>
      <div className="flex flex-wrap gap-2">
        {[
          ["◉", PROFILE.location],
          ["↗", `from ${PROFILE.origin}`],
          ["●", PROFILE.status],
        ].map(([s, t]) => (
          <span
            key={t}
            className="rounded-full border border-line2 px-3 py-[6px] font-mono text-[11.5px] text-dim"
          >
            <b className="font-medium text-accent">{s}</b> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const mono = PROFILE.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  const Row = ({ k, v, ok }: { k: string; v: string; ok?: boolean }) => (
    <div className="flex justify-between border-b border-dashed border-line py-[7px] text-[13px] last:border-0">
      <span className="font-mono text-[12px] text-faint">{k}</span>
      <span className={ok ? "text-accent" : "text-text"}>{v}</span>
    </div>
  );
  return (
    <div>
      <div className="mb-[14px] rounded-[14px] border border-line bg-panel p-5">
        <div className="mb-[14px] flex h-14 w-14 items-center justify-center rounded-[14px] bg-gradient-to-br from-accent to-accent2 font-mono text-[20px] font-bold text-bg">
          {mono}
        </div>
        <Row k="name" v={PROFILE.name} />
        <Row k="role" v={PROFILE.role} />
        <Row k="based" v={PROFILE.location} />
        <Row k="status" v={`● ${PROFILE.status}`} ok />
      </div>
      <div className="mb-[18px] grid grid-cols-3 gap-[10px]">
        {STATS.map(([n, l]) => (
          <div
            key={l}
            className="rounded-[12px] border border-line bg-panel p-[14px] text-center"
          >
            <div className="font-mono text-[24px] font-extrabold text-accent">{n}</div>
            <div className="mt-[2px] text-[11px] text-faint">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div>
      {Object.entries(SKILLS).map(([group, arr]) => (
        <div key={group} className="mb-4">
          <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            {group}
          </h4>
          <div className="flex flex-wrap gap-[7px]">
            {arr.map((s) => (
              <span
                key={s}
                className="rounded-[7px] border border-line2 bg-panel px-[11px] py-[5px] font-mono text-[12px] text-text transition hover:-translate-y-[2px] hover:border-accent hover:text-accent"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <div className="relative pl-[22px] before:absolute before:bottom-1 before:left-1 before:top-1 before:w-[2px] before:bg-gradient-to-b before:from-accent before:to-transparent before:content-['']">
      {EXPERIENCE.map((e) => (
        <div
          key={e.yr}
          className="relative mb-[18px] before:absolute before:left-[-22px] before:top-1 before:h-[10px] before:w-[10px] before:rounded-full before:border-2 before:border-accent before:bg-bg2 before:content-['']"
        >
          <div className="font-mono text-[11px] tracking-[0.05em] text-accent">
            {e.yr}
          </div>
          <div className="my-[2px] text-[14px] font-semibold text-text">{e.role}</div>
          <div className="text-[12.5px] text-dim">{e.org}</div>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-[14px]">
      {PROJECTS.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-[14px] border border-line bg-panel transition duration-200 hover:-translate-y-[3px] hover:border-accent hover:shadow-[0_16px_40px_rgba(0,0,0,.4)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            className="block h-[150px] w-full border-b border-line object-cover saturate-90 group-hover:saturate-100"
          />
          <div className="px-4 py-[14px]">
            <div className="flex items-center gap-2 text-[15px] font-bold">
              {p.name}
              <span className="text-accent transition group-hover:-translate-y-[3px] group-hover:translate-x-[3px]">
                ↗
              </span>
            </div>
            <div className="my-[5px] text-[12.5px] text-dim">{p.desc}</div>
            <div className="flex flex-wrap gap-[6px]">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-[5px] border border-line bg-bg px-[7px] py-[2px] font-mono text-[10.5px] text-faint"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function Contact() {
  const Btn = ({
    icon,
    lbl,
    val,
    href,
  }: {
    icon: React.ReactNode;
    lbl: string;
    val: string;
    href: string;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-[12px] border border-line bg-panel px-4 py-[14px] text-text transition hover:translate-x-1 hover:border-accent"
    >
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-line2 bg-bg [&_svg]:h-[17px] [&_svg]:w-[17px] [&_svg]:fill-accent">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[11px] text-faint">{lbl}</span>
        <span className="block text-[13.5px]">{val}</span>
      </span>
    </a>
  );
  return (
    <div className="flex flex-col gap-[10px]">
      <Btn icon={BrandIcons.mail} lbl="email" val={PROFILE.email} href={`mailto:${PROFILE.email}`} />
      <Btn icon={BrandIcons.linkedin} lbl="linkedin" val="/in/pragun-bajracharya" href={PROFILE.linkedin} />
      <Btn icon={BrandIcons.github} lbl="github" val="@PragunBajracharya" href={PROFILE.github} />
    </div>
  );
}

const RENDERERS: Record<PreviewKind, () => JSX.Element> = {
  readme: Readme,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  contact: Contact,
};

export default function PreviewPane({ file, mobileView }: { file: string; mobileView: "code" | "preview" }) {
  const meta = FILES[file];
  const View = RENDERERS[meta.render];
  return (
    <div className={`lg:w-1/2 overflow-auto h-full border-l border-line bg-bg2 lg:block ${mobileView === "preview" ? "block" : "hidden"}`}>
      <div className="sticky top-0 z-[2] flex items-center gap-2 border-b border-line bg-panel px-4 py-2 text-[11px] uppercase tracking-[0.1em] text-faint">
        <span className="h-[7px] w-[7px] animate-blink rounded-full bg-accent shadow-[0_0_8px_#39d4c5]" />
        {file.replace(/\.\w+$/, "")} · rendered
      </div>
      <div className="p-[26px] font-display">
        <View />
      </div>
    </div>
  );
}
