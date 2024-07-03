<script>
	import Picture from '$lib/components/Picture.svelte';
	import { websites } from '$lib/data';
</script>

<div class="max-w-screen-xl px-6 pb-8 pt-28 text-center duration-500">
	<!-- Header -->
	<h2>Here are some examples of websites that I have created</h2>
	<h3>Built with Svelte, React, TailwindCSS</h3>
	<!-- Websites Show -->
	<div class="grid grid-cols-[minmax(0,30rem)] lg:py-20 justify-center gap-10 py-8 lg:grid-cols-2">
		<!-- Show all websites from data.js -->
		{#each websites as { name, visit, code, source, app }}
			<div
				class="group grid gap-y-8 rounded-2xl border-2 p-6 text-xl shadow-[0px_0px_32px_0_rgba(255,255,255,0.08)] duration-200 hover:shadow-[0px_0px_32px_0_rgba(255,255,255,0.3)]"
			>
				<!-- Website screenshot -->
				<div class="text-center">
					<Picture src="websites/{name}.png" alt={name} />
					<div class="mt-4">{app}</div>
					<a
						class="text-xs hover:underline lg:text-base"
						href={source}
						target="_blank"
						rel="nofollow"
					>
						<span class="text-clr-primary">Design by: </span>{name}
					</a>
				</div>
				<!-- Website links -->
				<div
					class="flex flex-col items-center justify-center gap-x-6 gap-y-6 text-center md:flex-row"
				>
					<a
						href={visit}
						target="_blank"
						rel="nofollow"
						class="w-full rounded-full border-2 border-clr-text px-6 py-2 duration-200 hover:border-clr-secondary hover:text-clr-secondary"
						>Visit</a
					>
					<a
						href={code}
						target="_blank"
						rel="nofollow"
						class="w-full rounded-full border-2 border-clr-text px-6 py-2 duration-200 hover:border-clr-secondary hover:text-clr-secondary"
						>Source Code</a
					>
				</div>
			</div>
		{/each}
	</div>
</div>
