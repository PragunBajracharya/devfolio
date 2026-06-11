"use client";
import { Icon } from "./icons";
import { PROFILE } from "@/lib/data";

export default function ActivityBar({
  onPalette,
  onContact,
}: {
  onPalette: () => void;
  onContact: () => void;
}) {
  const btn =
    "relative flex h-10 w-10 items-center justify-center rounded-[9px] text-faint transition-colors hover:text-text cursor-pointer";
  return (
    <div className="hidden flex-col items-center gap-1 border-r border-line bg-sidebar py-[10px] md:flex">
      <div className={`${btn} text-accent`}>
        <span className="absolute left-[-10px] top-[9px] bottom-[9px] w-[2px] rounded-[2px] bg-accent" />
        <Icon.Files className="h-[21px] w-[21px]" />
      </div>
      <div className={btn} onClick={onPalette} title="Command palette">
        <Icon.Search className="h-[21px] w-[21px]" />
      </div>
      <a
        className={btn}
        href={PROFILE.github}
        target="_blank"
        rel="noopener noreferrer"
        title="Source control"
      >
        <Icon.Git className="h-[21px] w-[21px]" />
      </a>
      <div className="flex-1" />
      <div className={btn} onClick={onContact} title="Contact">
        <Icon.Mail className="h-[21px] w-[21px]" />
      </div>
    </div>
  );
}
