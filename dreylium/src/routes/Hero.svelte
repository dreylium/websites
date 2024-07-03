<script>
	import Picture from '$lib/components/Picture.svelte';
	import { SvgFiverr } from '$lib/assets/icons';
</script>

<!-- Hero -->
<div class="grid max-w-screen-xl gap-x-8 px-6 py-4 md:grid-cols-2">
	<!-- Hero Image -->
	<div class="flex p-8 duration-500 lg:p-16">
		<Picture
			src="heroImage.avif"
			alt="dreylium"
			className="w-full rounded-2xl border-4 object-cover p-2 lg:p-4"
		/>
	</div>
	<!-- Hero Text -->
	<section
		class="flex flex-col items-center justify-center gap-y-4 py-2 text-center md:items-start md:text-left [&>*]:duration-500"
	>
		<!-- Header -->
		<h1 class="text-clr-secondary">Dreylium</h1>
		<p class="leading-8">
			Hola! i am Dreylium<br />
			a Freelance Web Developer from Indonesia<br />
			who love to build Web Application<br />
			with Svelte &amp; TailwindCSS<br />
			with Prettier &amp; ESLint (airbnb style)
		</p>
		<!-- Fiverr -->
		<a
			href="https://www.fiverr.com/s/R1dgN5"
			target="_blank"
			class="flex max-w-md flex-wrap items-center justify-center gap-x-2 rounded-full border-4 border-transparent bg-clr-secondary px-6 py-3 text-clr-text hover:border-clr-secondary hover:bg-transparent md:px-8"
		>
			<span class="w-ll md:w-auto">Let's Work Together on</span>
			<SvgFiverr />
		</a>
	</section>
</div>
