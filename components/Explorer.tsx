"use client";
import { useState } from "react";
import { TREE, FILES } from "@/lib/data";
import { Icon } from "./icons";

function FileRow({
  name,
  active,
  onOpen,
}: {
  name: string;
  active: boolean;
  onOpen: (n: string) => void;
}) {
  const f = FILES[name];
  return (
    <div
      onClick={() => onOpen(name)}
      className={`relative flex cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1 text-[12.5px] transition-colors ${
        active
          ? "bg-accent/[0.08] text-text"
          : "text-dim hover:bg-white/[0.03] hover:text-text"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-[5px] bottom-[5px] w-[2px] rounded-[2px] bg-accent" />
      )}
      <span className={`w-[15px] flex-shrink-0 text-center text-[11px] font-bold ${f.icon[1]}`}>
        {f.icon[0]}
      </span>
      <span>{name}</span>
    </div>
  );
}

export default function Explorer({
  activeFile,
  onOpen,
}: {
  activeFile: string;
  onOpen: (n: string) => void;
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  return (
    <div className="hidden flex-col overflow-y-auto border-r border-line bg-panel md:flex">
      <div className="flex justify-between px-4 pb-2 pt-3 text-[10.5px] uppercase tracking-[0.14em] text-faint">
        <span>Explorer</span>
        <span>⋯</span>
      </div>
      <div className="px-2 pb-[10px]">
        {TREE.map((node) =>
          node.type === "folder" ? (
            <div key={node.name}>
              <div
                onClick={() =>
                  setCollapsed((c) => ({ ...c, [node.name]: !c[node.name] }))
                }
                className="flex cursor-pointer items-center gap-[6px] rounded-[6px] px-2 py-1 text-[12.5px] text-dim hover:bg-white/[0.03]"
              >
                <Icon.Chevron
                  className={`h-[14px] w-[14px] text-faint transition-transform ${
                    collapsed[node.name] ? "-rotate-90" : ""
                  }`}
                />
                <Icon.Files className="h-[14px] w-[14px]" />
                <span>{node.name}</span>
              </div>
              {!collapsed[node.name] && (
                <div className="pl-[10px]">
                  {node.children.map((c) => (
                    <FileRow
                      key={c}
                      name={c}
                      active={c === activeFile}
                      onOpen={onOpen}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <FileRow
              key={node.name}
              name={node.name}
              active={node.name === activeFile}
              onOpen={onOpen}
            />
          )
        )}
      </div>
      <div className="mt-auto border-t border-line px-4 py-3 text-[11px] leading-[1.7] text-faint">
        <div>
          <span className="text-accent">●</span> main · synced
        </div>
        <div className="mt-1">
          type <b className="text-accent">help</b> in terminal ↓
        </div>
      </div>
    </div>
  );
}
