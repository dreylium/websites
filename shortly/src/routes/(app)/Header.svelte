<script>
	import imgLogo from '$lib/images/logo.svg';
	import { account, auth } from '$lib/store';

	let mobileNav;

	const handleClickLogin = (value) => {
		$auth = value;
	};
	const handleNavBtn = () => {
		mobileNav.classList.toggle('translate-x-full');
	};
</script>

<header class="relative z-50 mt-10 max-w-[100vw] bg-white px-5 lg:mt-[3.0rem] lg:px-10">
	<!-- Logo Shortly -->
	<div class="mx-auto flex max-w-[1110px] lg:h-10">
		<a href="/" roles="header-logo" class="px-1 lg:self-end lg:px-0.5">
			<img src={imgLogo} alt="Shortly" />
		</a>
		<!-- Navigation -->
		<div
			class="hidden flex-1 font-PoppinsMedium text-[0.96rem] text-clr-GrayishViolet lg:ml-[2.7rem] lg:flex"
		>
			<nav class="items-center gap-8 lg:flex [&>a:hover]:text-clr-VeryDarkViolet">
				<a href="/features">Features</a>
				<a href="/pricing">Pricing</a>
				<a href="/resources">Resources</a>
			</nav>
			<div class="ml-auto gap-x-4 lg:flex">
				{#if $account === ''}
					<a
						href="/login"
						class="self-center px-[1.5em]"
						on:click={() => handleClickLogin('login')}>Login</a
					>
					<a
						href="/login"
						class="grid place-content-center rounded-full bg-clr-Cyan px-[1.5em] pb-0.5 text-white hover:bg-clr-CyanHover"
						on:click={() => handleClickLogin('signup')}>Sign Up</a
					>
				{:else}
					<a
						href="/login"
						class="flex items-center gap-2 rounded-full bg-clr-Cyan px-[1.5em] py-6 text-white"
						on:click={() => handleClickLogin('login')}
					>
						<span class="font-PoppinsMedium text-lg">{$account}</span>
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
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
							<circle cx="12" cy="7" r="4" />
						</svg>
					</a>
				{/if}
			</div>
		</div>
		<!-- Menu Navigation Mobile Button -->
		<button type="button" class="ml-auto lg:hidden" on:click={handleNavBtn}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</div>
	<!-- Mobile Navigation -->
	<div
		class="bg-white inset-0 translate-x-full top-16 h-dvh absolute border-b-2 border-clr-VeryDarkViolet px-8 text-center font-PoppinsMedium text-2xl text-[0.96rem] text-clr-GrayishViolet transition-transform duration-300 lg:hidden [&_a:hover]:text-clr-VeryDarkViolet"
		bind:this={mobileNav}
	>
		<nav class="mb-4 grid justify-center [&>a]:py-4">
			<a href="/features">Features</a>
			<a href="/pricing">Pricing</a>
			<a href="/resources">Resources</a>
		</nav>
		<div class="grid text-center [&>a]:py-4">
			{#if $account === ''}
				<a
					href="/login"
					class="self-center px-[1.5em]"
					on:click={() => handleClickLogin('login')}>Login</a
				>
				<a
					href="/login"
					class="hover:text-blue-20 grid place-content-center rounded-full bg-clr-Cyan px-[1.5em] pb-0.5 text-white"
					on:click={() => handleClickLogin('signup')}>Sign Up</a
				>
			{:else}
				<a
					href="/login"
					class="hover:text-blue-20 grid place-content-center rounded-full bg-clr-Cyan px-[1.5em] pb-0.5 text-white"
					on:click={() => handleClickLogin('login')}
				>
					<span class="font-PoppinsMedium text-lg">{$account}</span>
				</a>
			{/if}
		</div>
	</div>
</header>
