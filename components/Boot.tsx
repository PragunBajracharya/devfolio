"use client";
import { useEffect, useState } from "react";

const LOGO = `  ____                                
 |  _ \\ _ __ __ _  __ _ _   _ _ __    
 | |_) | '__/ _\` |/ _\` | | | | '_ \\   
 |  __/| | | (_| | (_| | |_| | | | |  
 |_|   |_|  \\__,_|\\__, |\\__,_|_| |_|  
                  |___/  dev workspace`;

const MSGS = [
  "initializing workspace…",
  "mounting file system…",
  "starting language server…",
  "ready ✓",
];

export default function Boot() {
  const [gone, setGone] = useState(false);
  const [msg, setMsg] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setMsg((m) => Math.min(m + 1, MSGS.length - 1)),
      330
    );
    const t = setTimeout(() => {
      clearInterval(interval);
      setGone(true);
    }, 1500);
    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-80 flex flex-col items-center justify-center gap-[18px] bg-bg transition-opacity duration-500 ${
        gone ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <pre className="font-mono text-[13px] leading-[1.3] text-dim">{LOGO}</pre>
      <div className="h-[3px] w-[240px] overflow-hidden rounded-[3px] bg-line">
        <i className="block h-full w-0 animate-load bg-accent" />
      </div>
      <div className="text-[11.5px] text-faint">{MSGS[msg]}</div>
    </div>
  );
}
