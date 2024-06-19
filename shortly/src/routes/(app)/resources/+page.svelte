<script>
	import { onMount } from 'svelte';

	const datas = [
		{
			title: 'User Guide',
			text: 'Step-by-step guide on how to use the URL shortening platform, including creating and shortening links, as well as additional features available.'
		},
		{
			title: 'Benefits of URL Shortening',
			text: 'Information about the benefits of using a URL shortener, such as shortening links, tracking link performance, and enhancing link management.'
		},
		{
			title: 'Tips and Tricks',
			text: 'A series of tips and tricks to maximize the use of the URL shortener, including optimizing links for social media, increasing clicks, and optimizing link management.'
		},
		{
			title: 'Security and Privacy',
			text: 'Information about the measures taken by the URL shortening platform to maintain user security and privacy, as well as advice on best practices for link security.'
		},
		{
			title: 'Frequently Asked Questions (FAQ)',
			text: 'A list of frequently asked questions about the use of the URL shortener along with comprehensive and clear answers.'
		},
		{
			title: 'Help Center',
			text: 'Links to a help center or customer support, where users can find additional information or ask questions about using the URL shortener.'
		},
		{
			title: 'News and Updates',
			text: 'The latest news and updates about the URL shortener platform, including new features, bug fixes, and other announcements.'
		},
		{
			title: 'Articles and Insights',
			text: 'Articles or blogs about effective URL shortening usage, case studies, and expert insights on current trends in link management.'
		}
	];

	let buttons = [];

	onMount(() => {
		buttons = Array.from(document.querySelectorAll('#resources button'));
	});

	const handleClick = (index) => {
		const content = buttons[index].nextElementSibling;
		const arrow = buttons[index].querySelector('svg');

		if (content.style.maxHeight === '') {
			content.style.maxHeight = `${content.scrollHeight}px`;
			arrow.style.transform = 'rotate(180deg)';
		} else {
			content.style.maxHeight = null;
			arrow.style.transform = null;
		}
	};
</script>

<div id="resources" class="mx-auto max-w-[1120px] px-6 py-24 text-clr-DarkViolet lg:px-12">
	<section class="mb-16">
		<h1 class="mb-8 text-center font-PoppinsBold text-5xl">Your Shortcut to Sharable Links</h1>
		<p class="text-center text-2xl text-gray-400">
			Get started with our free tool. No credit card required.
		</p>
	</section>
	<div class="max-w-[800px] border-t-2 border-t-gray-400">
		{#each datas as { title, text }, index}
			<div class="overflow-hidden border-b-2 border-gray-400">
				<button
					class="w-full px-4 py-6 text-left font-PoppinsMedium text-lg lg:px-6 lg:text-2xl"
					on:click={() => handleClick(index)}
				>
					<section class="flex justify-between">
						<h2>{title}</h2>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="duration-300"
						>
							<polyline points="6 9 12 15 18 9"></polyline>
						</svg>
					</section>
				</button>
				<div class="max-h-0 duration-500">
					<p class="px-6 pb-6 leading-[2] text-gray-600 lg:px-12 lg:text-xl lg:leading-[1.8]">
						{text}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
