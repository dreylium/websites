<!-- <picture>
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
-->

<script>
	export let src = '';
	export let alt;
	export let className;
	export let imgClassName;
	export let width;
	export let height;

	const [baseName] = String(src).split('.');
</script>

<picture class={className}>
	<source srcSet={`/min/${baseName}.avif`} type="image/avif" />
	<source srcSet={`/min/${baseName}.webp`} type="image/webp" />
	<img src={`/images/${src}`} class={imgClassName} {alt} {width} {height} loading="lazy" />
</picture>
