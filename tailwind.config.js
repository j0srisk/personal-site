/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
				roboto: ['Roboto Mono', ...defaultTheme.fontFamily.mono]
			},
			boxShadow: {
				'inner-button': 'inset 0 1px 1px 0 hsla(0, 0%, 100%, 0.5)'
			}
		}
	},
	darkMode: 'class',
	plugins: []
}
