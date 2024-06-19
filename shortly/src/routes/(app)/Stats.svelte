<script>
	import imgLogo1 from '$lib/images/icon-brand-recognition.svg';
	import imgLogo2 from '$lib/images/icon-detailed-records.svg';
	import imgLogo3 from '$lib/images/icon-fully-customizable.svg';

	const contents = [
		{
			img: imgLogo1,
			title: 'Brand Recognition',
			text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
		},
		{
			img: imgLogo2,
			title: 'Detailed Records',
			text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
		},
		{
			img: imgLogo3,
			title: 'Fully Customizable',
			text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
		}
	];

	let links = [];
	let currentLink = '';

	const handleSubmit = () => {
		const letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
		let result = 'https://rel.ink/';
		for (let i = 0; i < 6; i += 1) {
			result += letters[randomNum(0, 62)];
		}

		links = [...links, { source: currentLink, result }];
		currentLink = '';
	};

	const copyToClipboard = (link, id) => {
		navigator.clipboard.writeText(link);
		links[id].copied = true;
		links.forEach((item, index) => {
			if (index !== id) links[index].copied = false;
		});
	};
</script>

<div class="bg-clr-mainBg">
	<div class="px-6">
		<!-- Form for link -->
		<div class="mx-auto grid max-w-[40rem] -translate-y-[5.3rem] gap-y-6 lg:max-w-[1110px]">
			<form
				class="grid grid-cols-1 grid-rows-2 gap-x-6 gap-y-4 rounded-xl bg-clr-DarkViolet bg-form-desktop bg-no-repeat px-6 py-6 lg:grid-cols-[1fr_auto] lg:grid-rows-1 lg:px-[4rem] lg:py-[3.3rem]"
				on:submit|preventDefault={handleSubmit}
			>
				<input
					type="text"
					name="link"
					placeholder="Shorten a link here..."
					class="rounded-lg px-4 pb-2.5 pt-3.5 text-base tracking-[0.01em] focus:outline-none lg:px-8 lg:pb-[0.9rem] lg:pt-[1.2rem] lg:text-xl"
					bind:value={currentLink}
					required
				/>
				<button
					type="submit"
					class="grid place-content-center rounded-lg bg-clr-Cyan font-PoppinsBold text-white hover:bg-clr-CyanHover lg:px-[2.6rem] lg:text-[1.25rem]"
					>Shorten It!
				</button>
			</form>
			{#each links as { source, result, copied }, id}
				<div class="flex items-center rounded-lg bg-white px-8 py-4 font-PoppinsMedium">
					<span class="text-clr-DarkViolet">{source}</span>
					<a href="/pricing" class="me-6 ms-auto text-clr-Cyan">{result}</a>
					<button
						type="button"
						class="w-28 rounded-lg py-2 text-white {copied ? 'bg-black' : 'bg-clr-Cyan'}"
						on:click={() => copyToClipboard(result, id)}
						class:hover:bg-clr-CyanHover={!copied}>{copied ? 'Copied!' : 'Copy'}</button
					>
				</div>
			{/each}
		</div>
		<section class="pb-[5.6rem] pt-2 text-center lg:pb-[6.1rem] lg:pt-[2.01rem]">
			<h2
				class="mb-[1.1rem] font-PoppinsBold text-[1.675rem] text-clr-VeryDarkViolet lg:mb-[0.6rem] lg:text-[2.5rem] lg:tracking-[-0.027em]"
			>
				Advanced Statistics
			</h2>
			<p
				class="inline-block max-w-[47ch] text-base leading-[1.75] tracking-[0.01em] text-clr-GrayishViolet lg:text-lg lg:leading-[1.8] lg:tracking-[0.01em]"
			>
				Track how your links are performing across the web with our advanced statistics dashboard.
			</p>
		</section>
		<!-- Benefit -->
		<div
			class="relative mx-auto grid max-w-[1110px] justify-center gap-x-[1.9rem] gap-y-[5.5rem] pb-20 text-center lg:grid-cols-[1fr_1fr_1fr] lg:pb-[7.5rem] lg:text-left"
		>
			<svg
				width="100%"
				height="100"
				xmlns="http://www.w3.org/2000/svg"
				class="absolute top-[32%] hidden stroke-clr-Cyan lg:block"
			>
				<line x1="0" x2="100%" style="stroke-width: 16;" />
			</svg>
			{#each contents as { img, title, text }, index}
				<div
					class="relative max-w-[40rem]"
					class:lg:mt-[2.8rem]={index === 1}
					class:lg:mt-[5.5rem]={index === 2}
				>
					<div class="absolute grid w-full -translate-y-1/2 justify-center px-8 lg:justify-start">
						<div
							class="grid aspect-square w-[88px] place-content-center rounded-full bg-clr-VeryDarkBlue"
						>
							<img src={img} alt={title} class="" />
						</div>
					</div>
					<section class="rounded-md bg-white pb-[2.55rem] pe-7 ps-8 pt-[5.2rem]">
						<h3
							class="mb-[1.2rem] font-PoppinsBold text-[1.37rem] leading-[1] text-clr-VeryDarkViolet"
						>
							{title}
						</h3>
						<p class="font-PoppinsMedium text-[0.94rem] leading-[1.7] text-clr-GrayishViolet">
							{text}
						</p>
					</section>
				</div>
			{/each}
		</div>
	</div>
</div>
