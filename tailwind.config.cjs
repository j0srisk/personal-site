/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				astro: [
					'Menlo',
					'Monaco',
					'Lucida Console',
					'Liberation Mono',
					'DejaVu Sans Mono',
					'Bitstream Vera Sans Mono',
					'Courier New',
					'monospace'
				]
			}
		}
	},
	plugins: []
}
