"use client";
import { useCallback, useEffect, useState } from "react";
import { FILES } from "@/lib/data";
import Boot from "./Boot";
import TitleBar from "./TitleBar";
import ActivityBar from "./ActivityBar";
import Explorer from "./Explorer";
import EditorTabs from "./EditorTabs";
import CodePane from "./CodePane";
import PreviewPane from "./PreviewPane";
import Terminal from "./Terminal";
import StatusBar from "./StatusBar";
import CommandPalette from "./CommandPalette";
import { Icon } from "./icons";

type MobileView = "code" | "preview";

export default function Workspace() {
	const [tabs, setTabs] = useState<string[]>(["README.md"]);
	const [active, setActive] = useState("README.md");
	const [termCollapsed, setTermCollapsed] = useState(false);
	const [paletteOpen, setPaletteOpen] = useState(false);
	const [mobileView, setMobileView] = useState<MobileView>("code");
	const [inject, setInject] = useState<{ cmd: string; n: number }>({ cmd: "", n: 0 });

	const openFile = useCallback((name: string) => {
		if (!FILES[name]) return;
		setTabs((t) => (t.includes(name) ? t : [...t, name]));
		setActive(name);
	}, []);

	const closeTab = useCallback(
		(name: string) => {
			setTabs((t) => {
				const idx = t.indexOf(name);
				const next = t.filter((x) => x !== name);
				if (next.length === 0) {
					setActive("README.md");
					return ["README.md"];
				}
				if (active === name) setActive(next[Math.max(0, idx - 1)]);
				return next;
			});
		},
		[active],
	);

	const toggleTerminal = useCallback(() => setTermCollapsed((c) => !c), []);

	const runTerminal = useCallback((cmd: string) => {
		setTermCollapsed(false);
		setInject((prev) => ({ cmd, n: prev.n + 1 }));
	}, []);

	// global shortcuts
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setPaletteOpen((p) => !p);
			}
			if (e.ctrlKey && e.key === "`") {
				e.preventDefault();
				toggleTerminal();
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [toggleTerminal]);

	// Code / Preview toggle — only shown below the lg breakpoint, where the
	// editor + preview split collapses to a single column.
	const segBtn = (on: boolean) => `rounded-[6px] px-[10px] py-[3px] text-[11px] font-medium transition-colors ${on ? "bg-accent/15 text-accent" : "text-dim hover:text-text"}`;

	const viewToggle = (
		<div className="flex items-center gap-1 border-l border-line px-2 lg:hidden absolute right-0 top-[50%] translate-y-[-50%]">
			<button onClick={() => setMobileView("code")} className={segBtn(mobileView === "code")} aria-pressed={mobileView === "code"} aria-label="Show code" title="Code">
				<Icon.Code />
			</button>
			<button onClick={() => setMobileView("preview")} className={segBtn(mobileView === "preview")} aria-pressed={mobileView === "preview"} aria-label="Show preview" title="Preview">
				<Icon.Eye />
			</button>
		</div>
	);

	return (
		<>
			<Boot />
			<div className="grid h-screen grid-rows-[auto_1fr_auto]">
				<TitleBar onPalette={() => setPaletteOpen(true)} />

				<div className="grid min-h-0 grid-cols-1 md:grid-cols-[48px_230px_1fr]" style={{ height: `calc(100vh - ${termCollapsed ? "96px" : "292px"})` }}>
					<ActivityBar onPalette={() => setPaletteOpen(true)} onContact={() => openFile("contact.md")} />
					<Explorer activeFile={active} onOpen={openFile} />

					{/* editor zone */}
					<div className="flex min-w-0 min-h-0 flex-col bg-bg overflow-hidden">
						{/* mobile file chips */}
						<div className="no-scrollbar flex gap-[6px] overflow-x-auto border-b border-line bg-panel px-[10px] py-2 md:hidden">
							{Object.keys(FILES).map((f) => (
								<button key={f} onClick={() => openFile(f)} className={`flex-shrink-0 whitespace-nowrap rounded-[7px] border px-[10px] py-[5px] text-[11.5px] ${f === active ? "border-accent text-accent" : "border-line2 text-dim"}`}>
									{f}
								</button>
							))}
						</div>

						<EditorTabs tabs={tabs} active={active} onSelect={setActive} onClose={closeTab} rightSlot={viewToggle} />

						<div className="flex min-h-0 flex-col lg:flex-row overflow-hidden h-full">
							<CodePane file={active} mobileView={mobileView} />
							<PreviewPane file={active} mobileView={mobileView} />
						</div>
					</div>
				</div>

				<Terminal collapsed={termCollapsed} onToggle={toggleTerminal} openFile={openFile} inject={inject} />
				<StatusBar file={active} />
			</div>

			<CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} openFile={openFile} toggleTerminal={toggleTerminal} runTerminal={runTerminal} />
		</>
	);
}
