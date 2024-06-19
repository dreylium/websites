<script>
	import '$lib/app.css';
	import { base } from '$app/paths';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>Dreylium | Web Developer</title>
	<link rel="apple-touch-icon" sizes="180x180" href="{base}/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{base}/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{base}/favicon-16x16.png" />
	<link rel="manifest" href="{base}/site.webmanifest" />
</svelte:head>

<div id="app" class="flex min-h-dvh flex-col">
	<Header />
	<slot />
	<Footer />
</div>
