/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				clr: {
					headerBG: 'hsl(240, 28%, 22%)',
					text: '#e5eced',
					background: '#061214',
					primary: '#98d9e4',
					secondary: '#128195',
					accent: '#0ad9fe'
				}
			}
		},
		fontFamily: {
			sans: ['Titillium Web', 'sans-serif'],
			semi: ['Titillium Web SemiBold', 'sans-serif'],
			bold: ['Titillium Web Bold', 'sans-serif']
		}
	},
	plugins: []
};
