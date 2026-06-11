export const Icon = {
	Files: (p: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
			<path d="M3 7v13h18V9h-9l-2-2H3z" />
		</svg>
	),
	Search: (p: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
			<circle cx="11" cy="11" r="7" />
			<path d="m21 21-4.3-4.3" />
		</svg>
	),
	Git: (p: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
			<circle cx="6" cy="6" r="2.5" />
			<circle cx="6" cy="18" r="2.5" />
			<circle cx="18" cy="9" r="2.5" />
			<path d="M6 8.5v7M18 11.5c0 3-4 2.5-4 5" />
		</svg>
	),
	Mail: (p: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
			<rect x="3" y="5" width="18" height="14" rx="2" />
			<path d="m3 7 9 6 9-6" />
		</svg>
	),
	Chevron: (p: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
			<path d="m9 18 6-6-6-6" />
		</svg>
	),
	Code: (p: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]">
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	),
	Eye: (p: React.SVGProps<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]">
			<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	),
};

export const BrandIcons = {
	mail: (
		<svg viewBox="0 0 24 24">
			<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
		</svg>
	),
	linkedin: (
		<svg viewBox="0 0 24 24">
			<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
		</svg>
	),
	github: (
		<svg viewBox="0 0 24 24">
			<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.54-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
		</svg>
	),
};
