"use client";
import { ReactNode } from "react";
import { FILES } from "@/lib/data";

export default function EditorTabs({ tabs, active, onSelect, onClose, rightSlot }: { tabs: string[]; active: string; onSelect: (n: string) => void; onClose: (n: string) => void; rightSlot?: ReactNode }) {
	return (
		<div className="flex border-b border-line bg-panel relative pr-[90px]">
			<div className="no-scrollbar flex overflow-x-auto border-b border-line bg-panel">
				{tabs.map((f) => {
					const ic = FILES[f].icon;
					const isActive = f === active;
					return (
						<div key={f} onClick={() => onSelect(f)} className={`relative flex cursor-pointer items-center gap-2 whitespace-nowrap border-r border-line px-[14px] py-[9px] text-[12.5px] transition-colors ${isActive ? "bg-bg text-text" : "text-dim hover:text-text"}`}>
							{isActive && <span className="absolute left-0 right-0 top-0 h-[2px] bg-accent" />}
							<span className={`w-[15px] text-center text-[11px] font-bold ${ic[1]}`}>{ic[0]}</span>
							<span>{f}</span>
							<span
								onClick={(e) => {
									e.stopPropagation();
									onClose(f);
								}}
								className="flex h-4 w-4 items-center justify-center rounded-[4px] text-[14px] opacity-50 hover:bg-white/10 hover:opacity-100"
							>
								×
							</span>
						</div>
					);
				})}
			</div>
			{ rightSlot }
		</div>
	);
}
