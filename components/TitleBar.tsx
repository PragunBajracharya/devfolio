"use client";

export default function TitleBar({ onPalette }: { onPalette: () => void }) {
  return (
    <div className="relative flex h-[38px] select-none items-center gap-[14px] border-b border-line bg-titlebar px-[14px]">
      <div className="flex gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 text-[12px] tracking-[0.02em] text-dim">
        <span>📁</span>
        <b className="font-medium text-text">pragun-bajracharya</b>
        <span className="text-faint">— workspace</span>
      </div>
      <div className="ml-auto flex items-center gap-[6px]">
        <button
          onClick={onPalette}
          className="hidden items-center gap-[6px] rounded-[5px] border border-line2 px-2 py-[2px] text-[11px] text-faint hover:text-dim md:flex"
        >
          <b className="font-medium text-dim">⌘K</b> commands
        </button>
      </div>
    </div>
  );
}
