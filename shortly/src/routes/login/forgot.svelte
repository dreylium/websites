<script>
	import imgLogo from '$lib/images/logo.svg';
	import { auth } from '$lib/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let email = '';
	let emailError = false;
	let isSend = false;

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) emailError = true;
		else {
			emailError = false;
			isSend = true;
		}
	};
	const handleClick = () => {
		$auth = 'login';
	};
	const handleVerify = () => {
		$auth = 'login';
		goto(`${base}/`);
	};
</script>

<section class="mb-12 text-center">
	<a href="{base}/">
		<img src={imgLogo} alt="Shortly" class="mx-auto" />
	</a>
	<h1>Account Recovery</h1>
</section>

<div class="mb-4">
	<form on:submit={handleSubmit} method="POST" action="/" class="flex flex-col gap-2">
		{#if !isSend}
			<input
				bind:value={email}
				type="text"
				name="email"
				placeholder="Your email address"
				class="rounded-xl border-2 border-clr-Gray px-6 py-4"
				class:border-red-500={emailError}
				required
			/>
			<span class="mb-1 text-base text-red-500" class:hidden={!emailError}>Email is not valid</span>
			<button type="submit" class="rounded-xl bg-clr-Cyan py-4 font-PoppinsBold text-white"
				>Send Reset Link</button
			>
		{:else}
			<span>Verification code has been sent to your {email}</span>
			<span>Please check your email</span>
			<input
				type="text"
				name="code"
				placeholder="Verification code"
				class="rounded-xl border-2 border-clr-Gray px-6 py-4"
				required
			/>
			<button
				type="submit"
				class="rounded-xl bg-clr-Cyan py-4 font-PoppinsBold text-white"
				on:click={handleVerify}>Verify</button
			>
		{/if}
	</form>
</div>
<button type="button" class="flex w-full justify-end text-blue-500" on:click={handleClick}
	>Close</button
>
