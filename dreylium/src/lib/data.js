import svelte from '$lib/images/min/logo/svelte.svg';
import tailwindcss from '$lib/images/min/logo/tailwindcss.svg';
import eslint from '$lib/images/min/logo/eslint.svg';
import prettier from '$lib/images/min/logo/prettier.svg';

export const webs = [
	{
		name: 'shortly',
		visit: 'https://dreylium.netlify.app/show/shortly/',
		code: 'https://github.com/dreylium/portfolio/tree/code/shortly',
		source: 'https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G'
	},
	{
		name: 'insure',
		visit: 'https://dreylium.netlify.app/show/insure/',
		code: 'https://github.com/dreylium/portfolio/tree/code/insure',
		source: 'https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8'
	},
	{
		name: 'dreylium',
		visit: 'https://dreylium.netlify.app',
		code: 'https://github.com/dreylium/portfolio/tree/code/portfolio',
		source: 'https://github.com/dreylium'
	}
];

export const tech = {
	svelte: { href: 'https://svelte.dev', src: svelte },
	tailwindcss: { href: 'https://tailwindcss.com', src: tailwindcss },
	eslint: { href: 'https://eslint.org', src: eslint },
	prettier: { href: 'https://prettier.io', src: prettier }
};
