import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Pragun Bajracharya — Dev Workspace",
	description: "Full-Stack Web Developer. An interactive IDE-style portfolio built with Next.js, React and Tailwind.",
	icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
			</head>
			<body>{children}</body>
		</html>
	);
}
