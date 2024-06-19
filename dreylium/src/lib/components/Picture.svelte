<script>
	export let src = '';
	export let media = '';
	export let parent = '';
	export let alt = '';
	export let className;

	let avif = '';
	let webp = '';
	let avifMobile = '';
	let webpMobile = '';

	const imports = async () => {
		try {
			avif = (await import(`$lib/images/min/${src}.avif`)).default;
			webp = (await import(`$lib/images/min/${src}.webp`)).default;
			if (media !== '') {
				avifMobile = (await import(`$lib/images/min/${src}_mobile.avif`)).default;
				webpMobile = (await import(`$lib/images/min/${src}_mobile.webp`)).default;
			}
		} catch (err) {
			console.log(err); // eslint-disable-line
		}
	};
	const importParets = async () => {
		try {
			avif = (await import(`$lib/images/min/${parent}/${src}.avif`)).default;
			webp = (await import(`$lib/images/min/${parent}/${src}.webp`)).default;
			if (media !== '') {
				avifMobile = (await import(`$lib/images/min/${parent}/${src}_mobile.avif`)).default;
				webpMobile = (await import(`$lib/images/min/${parent}/${src}_mobile.webp`)).default;
			}
		} catch (err) {
			console.log(err); // eslint-disable-line
		}
	};

	if (parent === '') imports();
	else importParets();
</script>

<picture>
	{#if media === ''}
		<source srcset={avif} type="image/avif" />
		<img src={webp} alt={alt !== '' ? alt : src} class={className} loading="lazy" />
	{:else}
		<source srcset={avif} type="image/avif" media="(min-width:{media})" />
		<source srcset={webp} type="image/webp" media="(min-width:{media})" />
		<source srcset={avifMobile} type="image/avif" />
		<img src={webpMobile} alt={alt !== '' ? alt : src} class={className} loading="lazy" />
	{/if}
</picture>
