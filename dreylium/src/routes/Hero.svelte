<script>
	import Picture from '$lib/components/Picture.svelte';
	import logoFiverr from '$lib/images/min/logo/fiverr.svg';
	import { websScroll } from '$lib/store';
	import { onMount } from 'svelte';

	const content = [];
	let hero;

	const handleScroll = () => {
		$websScroll.scrollIntoView({ block: 'start', behavior: 'smooth' });
	};

	onMount(() => {
		setTimeout(() => {
			hero.classList.remove('translate-y-16');
		}, 50);
		let i = 0;
		const interval = setInterval(() => {
			content[i].classList.remove('translate-y-12');
			if (i < content.length - 1) i += 1;
			else clearInterval(interval);
		}, 150);
	});
</script>

<!-- Hero -->
<div class="grid max-w-screen-xl gap-x-8 px-6 py-4 md:grid-cols-2 [&_.translate-y-12]:opacity-0">
	<!-- Hero Image -->
	<div
		class="flex translate-y-16 p-8 duration-500 lg:p-16 [&.translate-y-16]:opacity-0"
		bind:this={hero}
	>
		<Picture
			src="heroImage"
			alt="dreylium"
			className="w-full rounded-2xl border-4 object-cover p-2 lg:p-4"
		/>
	</div>
	<!-- Hero Text -->
	<section
		class="flex flex-col items-center justify-center gap-y-4 py-2 text-center md:items-start md:text-left [&>*]:duration-500"
	>
		<!-- Header -->
		<h1 class="translate-y-12 text-clr-secondary" bind:this={content[0]}>Dreylium</h1>
		<p class="translate-y-12 leading-8" bind:this={content[1]}>
			Hola! i am Dreylium<br />
			a Freelance Web Developer from Indonesia<br />
			who love to build Web Application<br />
			with Svelte &amp; TailwindCSS<br />
			with Prettier &amp; ESLint (airbnb style)
		</p>
		<!-- Learn More | Scroll to websites section -->
		<button
			bind:this={content[2]}
			on:click={handleScroll}
			type="button"
			class="translate-y-12 rounded-full border-4 border-transparent bg-clr-secondary px-8 py-3 text-clr-text hover:border-clr-secondary hover:bg-transparent md:px-16"
		>
			Let's Take a Look
		</button>
		<!-- Fiverr -->
		<a
			bind:this={content[3]}
			href="https://www.fiverr.com/s/R1dgN5"
			target="_blank"
			class="flex max-w-md translate-y-12 flex-wrap items-center justify-center gap-x-2 rounded-full border-4 border-transparent bg-clr-secondary px-8 py-3 text-clr-text hover:border-clr-secondary hover:bg-transparent md:px-16"
		>
			<span class="w-ll md:w-auto">Let's Work Together on</span>
			<img src={logoFiverr} alt="dreylium fiverr" class="h-4" />
		</a>
	</section>
</div>
