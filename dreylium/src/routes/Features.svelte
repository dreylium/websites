<script>
	import Picture from '$lib/components/Picture.svelte';
	import imgFast from '$lib/images/min/fast.svg';
	import { websScroll } from '$lib/store';
	import { webs } from '$lib/data';
	import { onMount } from 'svelte';

	const sections = [];

	onMount(() => {
		[$websScroll] = sections;
		// Landing Content Animation
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.remove('translate-y-16');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);
		// Landing delay for 0.25 seconds
		setTimeout(() => {
			sections.forEach((element) => {
				observer.observe(element);
			});
		}, 250);
	});
</script>

<!-- Websites -->
<div
	class="max-w-screen-xl translate-y-16 px-6 pb-8 pt-28 text-center duration-500 [&.translate-y-16]:opacity-0"
	bind:this={sections[0]}
>
	<!-- Header -->
	<h2>Here are some examples of websites that I have created</h2>
	<h3>Built with Svelte &amp; TailwindCSS</h3>
	<!-- Websites Show -->
	<div class="grid grid-cols-[minmax(0,30rem)] justify-center gap-10 py-8 lg:grid-cols-2">
		<!-- Show all websites from data.js -->
		{#each webs as { name, visit, code, source }}
			<div
				class="group grid gap-y-8 rounded-2xl border-2 p-6 text-xl shadow-[0px_0px_32px_0_rgba(255,255,255,0.08)] duration-200 hover:shadow-[0px_0px_32px_0_rgba(255,255,255,0.3)]"
			>
				<!-- Website screenshot -->
				<div class="text-center">
					<div class="mb-2 flex overflow-hidden rounded-xl">
						<Picture src={name} parent="websites" media="600px" />
					</div>
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
<!-- Responsive -->
<div
	class="max-w-screen-xl translate-y-16 px-6 py-12 text-center text-xl duration-500 [&.translate-y-16]:opacity-0"
	bind:this={sections[1]}
>
	<h2>Responsive websites that can be used on any device</h2>
	<h3 class="mb-12">Desktop | Tablet | Mobile</h3>
	<Picture src="responsive" media="600px" />
</div>
<!-- Code -->
<div
	class="max-w-screen-xl translate-y-16 px-6 py-12 text-center text-xl duration-500 [&.translate-y-16]:opacity-0"
	bind:this={sections[2]}
>
	<h2>Example of the code</h2>
	<h3 class="mb-12">Svelte &amp; TailwindCSS + Prettier &amp; ESLint</h3>
	<Picture src="view_code" media="600px" />
</div>
<!-- Perfomance -->
<div
	class="max-w-screen-xl translate-y-16 px-6 py-12 text-center text-xl duration-500 [&.translate-y-16]:opacity-0"
	bind:this={sections[3]}
>
	<h2>Optimized website ensures swift and smooth performance upon loading</h2>
	<h3>Optimized images, fonts, and more</h3>
	<div>
		<img src={imgFast} alt="Fast Websites" />
	</div>
</div>
