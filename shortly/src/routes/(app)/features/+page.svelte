<script>
	import custom from '$lib/images/features/custom.jpg';
	import analytics from '$lib/images/features/analytics.jpg';
	import tools from '$lib/images/features/tools.jpg';

	const features = [
		{
			name: 'Custom Link Shortening',
			image: custom,
			text: 'Personalize your links effortlessly. Create sleek, customized URLs that reflect your brand or message. Whether for social media, marketing, or personal use, make every link uniquely yours.'
		},
		{
			name: 'Analytics Dashboard',
			image: analytics,
			text: 'Unlock insights into link performance. Track clicks, locations of visitors, and referral sources in real-time. Optimize campaigns, understand your audience, and make data-driven decisions with ease.'
		},
		{
			name: 'Link Management Tools',
			image: tools,
			text: 'Simplify link management. Organize, edit, and control your links from one dashboard. Update URLs, adjust expiration dates, and maintain accuracy and security effortlessly, whether managing a few links or a large-scale campaign.'
		}
	];
</script>

<div class="mx-auto max-w-[1158px] px-6 py-24 lg:px-12">
	<h1 class="mb-32 text-center font-PoppinsBold text-5xl">Features</h1>
	<div class="grid gap-y-[10rem]">
		{#each features as { name, image, text }, index}
			<div class="grid grid-cols-2 items-center gap-x-16">
				<div class:order-2={index === 1}>
					<img src={image} alt={name} />
				</div>
				<section>
					<h2 class="mb-6 font-PoppinsBold text-3xl">{name}</h2>
					<p class="text-xl leading-10 text-clr-GrayishViolet">{text}</p>
				</section>
			</div>
		{/each}
	</div>
</div>
