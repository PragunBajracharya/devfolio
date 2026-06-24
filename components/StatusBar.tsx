"use client";
import { FILES } from "@/lib/data";

export default function StatusBar({ file }: { file: string }) {
  const meta = FILES[file];
  return (
    <div className="flex h-6 select-none items-center gap-4 bg-accent px-3 text-[11px] font-medium text-[#04221f] z-10 sticky bottom-0 w-full">
      <div className="flex items-center gap-[5px]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="9" r="2.5" />
          <path d="M6 8.5v7M18 11.5c0 3-4 2.5-4 5" />
        </svg>
        main
      </div>
      <div className="flex items-center gap-[5px]">✓ 0 ✗ 0</div>
      <div className="flex items-center gap-[5px]">{file}</div>
      <div className="ml-auto flex gap-4">
        <div>{meta.lang}</div>
        <div className="hidden sm:block">UTF-8</div>
        <div className="hidden sm:block">Pragun Bajracharya</div>
      </div>
    </div>
  );
}
