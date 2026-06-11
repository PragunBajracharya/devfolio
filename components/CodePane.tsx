"use client";
import { useMemo } from "react";
import { FILES } from "@/lib/data";
import { hlLine } from "@/lib/highlight";

export default function CodePane({ file, mobileView }: { file: string; mobileView: "code" | "preview" }) {
  const meta = FILES[file];
  const lines = useMemo(() => meta.code.split("\n"), [meta.code]);

  return (
    <div
      className={`lg:w-1/2 relative overflow-auto h-full lg:block ${mobileView === "code" ? "block" : "hidden"}`}
      style={{
        background:
          "radial-gradient(1200px 600px at 80% -10%, rgba(57,212,197,.04), transparent 60%), #0a0d13",
      }}
    >
      <div className="flex min-h-full text-[13px]">
        <div className="min-w-[46px] shrink-0 select-none py-[14px] text-right text-faint">
          {lines.map((_, i) => (
            <span key={i} className="gutter-line">
              {i + 1}
            </span>
          ))}
        </div>
        <div className="code-pre flex-1 py-[14px] px-[18px]">
          {lines.map((l, i) => (
            <div
              key={i}
              className="ln"
              dangerouslySetInnerHTML={{ __html: hlLine(l, meta.lang) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
