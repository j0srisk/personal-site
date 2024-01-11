/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'inner-button': 'inset 0 1px 1px 0 hsla(0, 0%, 100%, 0.5)'
			}
		}
	},
	darkMode: 'class',
	plugins: []
}
