/** @type {import('tailwindcss').Config} */

const colors = {
	clr: {
		// Primary
		Cyan: 'hsl(180, 66%, 49%)',
		CyanHover: 'hsl(179 56% 75%)',
		DarkViolet: 'hsl(257, 27%, 26%)',
		// Secondary
		Red: 'hsl(0, 87%, 67%)',
		// Neutral
		Gray: 'hsl(0, 0%, 75%)',
		GrayishViolet: 'hsl(257, 7%, 63%)',
		VeryDarkBlue: 'hsl(255, 11%, 22%)',
		VeryDarkViolet: 'hsl(260, 8%, 14%)',
		mainBg: 'hsl(230, 25%, 95%)',
		footerBg: 'hsl(266, 10%, 14%)'
	}
};
const fontFamily = {
	Poppins: 'Poppins',
	PoppinsMedium: 'Poppins-Medium',
	PoppinsBold: 'Poppins-Bold'
};
const backgroundImage = () => ({
	'form-mobile': 'url("$lib/images/bg-shorten-mobile.svg")',
	'form-desktop': 'url("$lib/images/bg-shorten-desktop.svg")',
	'boost-mobile': 'url("$lib/images/bg-boost-mobile.svg")',
	'boost-desktop': 'url("$lib/images/bg-boost-desktop.svg")'
});

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors,
			fontFamily,
			backgroundImage
		}
	},
	plugins: []
};
