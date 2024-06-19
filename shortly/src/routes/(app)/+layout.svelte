<script>
	import '$lib/app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="app flex min-h-dvh max-w-dvw flex-col overflow-x-hidden">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
