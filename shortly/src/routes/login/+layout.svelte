<script>
	import '$lib/app.css';
</script>

<div class="grid h-dvh w-dvw place-content-center text-clr-DarkViolet">
	<div
		class="rounded-2xl border-2 border-black p-6 [&_input:focus]:border-clr-Cyan [&_input]:outline-none"
	>
		<slot />
	</div>
</div>
