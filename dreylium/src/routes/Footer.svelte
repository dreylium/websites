<script>
	import { tech } from '$lib/data';
	import { page } from '$app/stores';
</script>

<!-- Footer -->
<footer class="mt-auto w-full">
	<!-- Tech -->
	<div class="w-full min-w-8 bg-clr-text px-6 py-8" class:hidden={$page.status === 404}>
		<div class="mx-auto grid max-w-max items-center gap-x-12 gap-y-8 md:grid-cols-4">
			<!-- Show all logo with link from $lib/data -->
			{#each Object.entries(tech) as [name, { href, src }]}
				<a {href} target="_blank">
					<img {src} alt={name} class="mx-auto max-h-12" />
				</a>
			{/each}
		</div>
	</div>
	<!-- Copyright -->
	<span class="block py-6 text-center">Copyright &copy; 2024 Dreylium</span>
</footer>
