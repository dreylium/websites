<script>
	let monthYear = true;
	const prices = [
		{
			name: 'Basic',
			price: [1, 10],
			features: ['10 links', '5x links renewal per month']
		},
		{
			name: 'Premium',
			price: [10, 100],
			features: ['100 links', '100x links renewal per month', 'Free SSL']
		},
		{
			name: 'Enterprise',
			price: [100, 1000],
			features: [
				'1000 links',
				'Unlimited renewal links',
				'Free SSL',
				'Full support',
				'Custom name domain'
			]
		}
	];

	const toggleMonthYear = (value) => {
		monthYear = value;
	};
</script>

<div class="max-w-[1200px] mx-auto px-6 py-24 lg:px-12">
	<section class="mb-10 text-center">
		<h1 class="mb-5 text-center font-PoppinsBold text-5xl">Plans &#38; Pricing</h1>
		<p class="mb-8 text-xl">Choose a plan that's right for you.</p>
		<div class="mx-auto flex w-max justify-center gap-4 rounded-full bg-clr-CyanHover p-1.5">
			<button
				class="rounded-full px-8 py-4 duration-500"
				on:click={() => toggleMonthYear(true)}
				class:bg-clr-Cyan={monthYear}>Monthly</button
			>
			<button
				class="rounded-full px-8 py-4 duration-500"
				on:click={() => toggleMonthYear(false)}
				class:bg-clr-Cyan={!monthYear}>Yearly</button
			>
		</div>
	</section>

	<div class="flex flex-wrap justify-center gap-8">
		{#each prices as { name, price, features }}
			<section
				class="flex w-[calc(33.333%-2rem)] min-w-[20rem] flex-col items-center gap-y-8 rounded-2xl border-2 border-clr-DarkViolet p-12 text-center"
			>
				<h2 class="font-PoppinsBold text-3xl">{name}</h2>
				<h3 class="font-PoppinsMedium text-4xl">
					${monthYear ? `${price[0]}/month` : `${price[1]}/year`}
				</h3>
				<button class="rounded-full bg-clr-Cyan px-8 py-4 font-PoppinsMedium text-white"
					>Choose</button
				>
				<div>
					<h4 class="mb-4 font-PoppinsMedium">Features</h4>
					<ul class="grid list-disc gap-y-2 text-left">
						{#each features as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			</section>
		{/each}
	</div>
</div>
