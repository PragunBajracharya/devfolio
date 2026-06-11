"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { createCommands } from "@/lib/commands";

type Line = { html: string };

const PROMPT =
  '<span class="text-accent">pragun</span><span class="text-faint">@</span><span class="text-accent2">dev</span><span class="text-faint">:~$</span> ';

export default function Terminal({
  collapsed,
  onToggle,
  openFile,
  inject,
}: {
  collapsed: boolean;
  onToggle: () => void;
  openFile: (n: string) => void;
  inject?: { cmd: string; n: number };
}) {
  const [lines, setLines] = useState<Line[]>([
    {
      html: '<span class="t-mut">Welcome to <span class="t-acc">pragunbaj.com</span> — interactive terminal.</span>',
    },
    {
      html: '<span class="t-mut">Type</span> <span class="t-acc">help</span> <span class="t-mut">to get started, or</span> <span class="t-acc">neofetch</span> <span class="t-mut">for a quick intro.</span>',
    },
    { html: "&nbsp;" },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(0);

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useRef(
    createCommands({
      openFile,
      clear: () => setLines([]),
    })
  );

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, collapsed]);

  const runRaw = useCallback((raw: string) => {
    const trimmed = raw.trim();
    if (trimmed === "clear") {
      setLines([]);
    } else {
      setLines((prev) => {
        const next: Line[] = [...prev, { html: PROMPT + escapeHtml(raw) }];
        const out = trimmed ? commands.current.run(trimmed) : null;
        if (out !== null && out !== undefined) next.push({ html: out });
        return next;
      });
    }
    if (trimmed) {
      setHistory((h) => {
        const nh = [...h, raw];
        setHIdx(nh.length);
        return nh;
      });
    }
  }, []);

  // run a command injected from the command palette
  useEffect(() => {
    if (inject && inject.cmd) runRaw(inject.cmd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inject?.n]);

  function submit() {
    runRaw(value);
    setValue("");
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") submit();
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (hIdx > 0) {
        setHIdx(hIdx - 1);
        setValue(history[hIdx - 1] ?? "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIdx < history.length - 1) {
        setHIdx(hIdx + 1);
        setValue(history[hIdx + 1] ?? "");
      } else {
        setHIdx(history.length);
        setValue("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const c = commands.current.names.find((k) => k.startsWith(value.trim()));
      if (c) setValue(c);
    }
  }

  function onBodyClick(e: React.MouseEvent) {
    const link = (e.target as HTMLElement).closest<HTMLElement>("[data-open]");
    if (link) window.open(link.dataset.open, "_blank");
    else inputRef.current?.focus();
  }

  return (
    <div
      className={`flex flex-col border-t border-line bg-panel transition-[height] duration-200 z-10 ${
        collapsed ? "h-[34px]" : "h-[230px]"
      }`}
    >
      <div className="flex h-[34px] shrink-0 select-none items-center gap-4 border-b border-line px-[14px]">
        <span className="border-b-2 border-accent py-[2px] text-[11px] uppercase tracking-widest text-text">
          Terminal
        </span>
        <span className="cursor-pointer border-b-2 border-transparent py-[2px] text-[11px] uppercase tracking-widest text-faint">
          Output
        </span>
        <span className="hidden cursor-pointer border-b-2 border-transparent py-[2px] text-[11px] uppercase tracking-widest text-faint sm:inline">
          Problems
        </span>
        <div className="ml-auto flex gap-[10px] text-faint">
          <span
            onClick={() => setLines([])}
            title="Clear"
            className="flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-[5px] text-[14px] hover:bg-white/6 hover:text-text"
          >
            ⌫
          </span>
          <span
            onClick={onToggle}
            title="Toggle (Ctrl+`)"
            className="flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-[5px] text-[14px] hover:bg-white/6 hover:text-text"
          >
            {collapsed ? "▴" : "▾"}
          </span>
        </div>
      </div>

      <div
        ref={bodyRef}
        onClick={onBodyClick}
        className="flex-1 overflow-y-auto px-[14px] py-[10px] text-[12.5px] leading-[1.65]"
      >
        {lines.map((l, i) => (
          <div
            key={i}
            className="term-out"
            dangerouslySetInnerHTML={{ __html: l.html }}
          />
        ))}
        <div className="flex items-center gap-2 py-[2px]">
          <span
            className="shrink-0"
            dangerouslySetInnerHTML={{ __html: PROMPT }}
          />
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="flex-1 bg-transparent font-mono text-[12.5px] text-text caret-accent outline-hidden"
          />
        </div>
      </div>
    </div>
  );
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
