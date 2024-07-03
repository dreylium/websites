<script>
	import { base } from '$app/paths';
</script>

<header class="sticky top-0 z-50 flex h-20 w-full justify-center px-6 duration-300 bg-clr-headerBG">
	<div class="flex w-full max-w-screen-xl items-center justify-between">
		<!-- Logo -->
		<a href="{base}/">
			<!-- <img src={logo} alt="dreylium" /> -->
			logo
		</a>
		<!-- Navigation -->
		<nav class="gap-x-8 flex">
			<!-- Navigation Contact -->
			<a
				href="{base}/contact"
				class="flex items-center gap-x-2 border-2 border-transparent p-1.5 duration-200 hover:text-clr-secondary"
				>Contact Us
				<!-- Message Icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/>
				</svg>
			</a>
		</nav>
	</div>
</header>
