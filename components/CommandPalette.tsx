"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { FILES, PROFILE } from "@/lib/data";

type Item = {
  type: "file" | "cmd";
  label: string;
  sub: string;
  icon: string;
  run: () => void;
};

export default function CommandPalette({
  open,
  onClose,
  openFile,
  toggleTerminal,
  runTerminal,
}: {
  open: boolean;
  onClose: () => void;
  openFile: (n: string) => void;
  toggleTerminal: () => void;
  runTerminal: (cmd: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(() => {
    const files: Item[] = Object.keys(FILES).map((f) => ({
      type: "file",
      label: f,
      sub: FILES[f].lang,
      icon: FILES[f].icon[0],
      run: () => openFile(f),
    }));
    const actions: Item[] = [
      { type: "cmd", label: "Toggle terminal", sub: "Ctrl+`", icon: "▸", run: toggleTerminal },
      { type: "cmd", label: "Run: neofetch", sub: "terminal", icon: "⌘", run: () => runTerminal("neofetch") },
      { type: "cmd", label: "Run: projects", sub: "terminal", icon: "⌘", run: () => runTerminal("projects") },
      { type: "cmd", label: "Open GitHub", sub: "external", icon: "↗", run: () => window.open(PROFILE.github, "_blank") },
      { type: "cmd", label: "Open LinkedIn", sub: "external", icon: "↗", run: () => window.open(PROFILE.linkedin, "_blank") },
      { type: "cmd", label: "Email Pragun", sub: "external", icon: "✉", run: () => window.open(`mailto:${PROFILE.email}`) },
    ];
    return [...files, ...actions];
  }, [openFile, toggleTerminal, runTerminal]);

  const filtered = useMemo(
    () => items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => setSel(0), [query]);

  if (!open) return null;

  const choose = (i: Item) => {
    i.run();
    onClose();
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-start justify-center bg-[rgba(4,6,10,.6)] pt-[12vh] backdrop-blur-[3px]"
    >
      <div className="w-[min(560px,92vw)] overflow-hidden rounded-[14px] border border-line2 bg-bg2 shadow-[0_30px_80px_rgba(0,0,0,.6)]">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              setSel((s) => (s + 1) % Math.max(filtered.length, 1));
              e.preventDefault();
            } else if (e.key === "ArrowUp") {
              setSel((s) => (s - 1 + filtered.length) % Math.max(filtered.length, 1));
              e.preventDefault();
            } else if (e.key === "Enter") {
              if (filtered[sel]) choose(filtered[sel]);
            } else if (e.key === "Escape") onClose();
          }}
          placeholder="Type a command or search files…"
          autoComplete="off"
          className="w-full border-b border-line bg-transparent px-[18px] py-4 font-mono text-[14px] text-text outline-hidden"
        />
        <div className="max-h-[320px] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-5 text-center text-[12px] text-faint">no matches</div>
          ) : (
            filtered.map((i, x) => (
              <div
                key={i.label}
                onMouseEnter={() => setSel(x)}
                onClick={() => choose(i)}
                className={`flex cursor-pointer items-center gap-3 rounded-[9px] px-3 py-[10px] text-[13px] ${
                  x === sel ? "bg-accent/10 text-text" : "text-dim"
                }`}
              >
                <span className="w-[18px] text-center text-faint">{i.icon}</span>
                <span>{i.label}</span>
                <span className="ml-auto text-[11px] text-faint">{i.sub}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
