import svelte from '$lib/images/min/logo/svelte.svg';
import tailwindcss from '$lib/images/min/logo/tailwindcss.svg';
import eslint from '$lib/images/min/logo/eslint.svg';
import prettier from '$lib/images/min/logo/prettier.svg';



export const webs = [
	{
		name: 'shortly',
		visit: 'https://dreylium-shortly.vercel.app',
		code: 'https://github.com/dreylium/websites/tree/main/shortly',
		source: 'https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G'
	},
	{
		name: 'dreylium',
		visit: 'https://dreylium.vercel.app',
		code: 'https://github.com/dreylium/websites/tree/main/dreylium',
		source: 'https://github.com/dreylium'
	}
];

export const tech = {
	svelte: { href: 'https://svelte.dev', src: svelte },
	tailwindcss: { href: 'https://tailwindcss.com', src: tailwindcss },
	eslint: { href: 'https://eslint.org', src: eslint },
	prettier: { href: 'https://prettier.io', src: prettier }
};
