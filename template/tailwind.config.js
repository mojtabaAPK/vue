/** @type {import('tailwindcss').Config} */
export default {
	daisyui: {
		themes: ["light", "dracula"],
		logs: false,
		darkTheme: "dracula",
	},
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mainCyan:'oklch( var(--main-bg-line-chart-cyan) / <alpha-value> )'
			},
			fontSize: {
				xs: '0.6rem',
			},
			strokeWidth: {
				'4': '4px',
			},
			transitionProperty: {
				'allColor': 'color, background-color, background, background-image, border-color, text-decoration-color, fill, stroke',
			},
			display: {
				'init': 'initial'
			},
			height: {
				'revert': 'revert'
			},
			flex: {
				full: '1 1 100%'
			},
		},
	},
	plugins: [
		require("daisyui"),
		require('tailwindcss-svg'),
		require('./src/plugins/tailwindcss/selector.plugin'),
	],
}

