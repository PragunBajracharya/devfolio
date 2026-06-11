import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0d13",
        bg2: "#0e131b",
        panel: "#0c1017",
        sidebar: "#0a0e14",
        titlebar: "#10151e",
        line: "#1b212c",
        line2: "#222a36",
        text: "#c8d3e0",
        dim: "#6b7686",
        faint: "#454f5e",
        accent: "#39d4c5",
        accent2: "#7aa2f7",
        warn: "#e0af68",
        // syntax
        kw: "#c792ea",
        str: "#9ece6a",
        num: "#ff9e64",
        com: "#4b5566",
        prop: "#7aa2f7",
        punc: "#56c8d8",
        fn: "#7dcfff",
        tag: "#f7768e",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        load: {
          to: { width: "100%" },
        },
      },
      animation: {
        blink: "blink 1.6s infinite",
        load: "load 1.3s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
