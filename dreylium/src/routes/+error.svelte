<script>
	import { page } from '$app/stores';
</script>

<!-- 404 Not Found | Error page  -->
<main class="my-auto grid justify-center gap-y-8 text-center">
	<h1 class="text-7xl">{$page.status}</h1>
	<h2 class="m-0 text-5xl">Page Not Found</h2>
</main>
