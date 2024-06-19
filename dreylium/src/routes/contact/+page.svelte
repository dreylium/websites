<script>
	import { onMount } from 'svelte';
	import imgFiverr from '$lib/images/min/logo/fiverr.svg';
	import imgGmail from '$lib/images/min/logo/gmail.svg';

	const contents = [];
	onMount(() => {
		let i = 0;
		// Landing Content Animation
		const interval = setInterval(() => {
			contents[i].classList.remove('translate-y-16');
			if (i < contents.length - 1) i += 1;
			else clearInterval(interval);
		}, 150);
	});
</script>

<!-- Contact -->
<div class="mx-auto py-16 [&_.translate-y-16]:opacity-0">
	<!-- Header -->
	<h1
		class="mb-16 translate-y-16 text-center tracking-normal transition-[transform,opacity] duration-500 md:text-6xl"
		bind:this={contents[0]}
	>
		Get in touch
	</h1>
	<!-- Contact -->
	<div
		class="grid gap-x-12 gap-y-6 md:grid-cols-2 [&_a]:py-6 [&_a]:transition-[transform,opacity] [&_a]:duration-500"
	>
		<!-- Fiverr -->
		<a
			href="https://www.fiverr.com/dreylium"
			class="group flex translate-y-16 flex-wrap items-center justify-center gap-4 rounded-2xl px-8 text-clr-accent outline outline-4 outline-clr-secondary hover:outline-clr-primary"
			target="_blank"
			bind:this={contents[1]}
		>
			<h2 class="mb-0 self-center group-hover:text-clr-primary">Go To</h2>
			<img src={imgFiverr} alt="fiverr" class="h-10" />
		</a>
		<!-- Gmail -->
		<a
			href="mailto:dreylium@gmail.com"
			class="group flex translate-y-16 flex-wrap items-center justify-center gap-4 rounded-2xl px-8 text-clr-accent outline outline-4 outline-clr-secondary hover:outline-clr-primary"
			target="_blank"
			bind:this={contents[2]}
		>
			<h2 class="mb-0 self-center group-hover:text-clr-primary">Contact me</h2>
			<img src={imgGmail} alt="gmail" class="h-10" />
		</a>
	</div>
</div>
