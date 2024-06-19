<script>
	import imgLogo from '$lib/images/logo.svg';
	import { account, auth } from '$lib/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let username = '';
	let password = '';
	let error = false;

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!username.match(/^[a-zA-Z0-9]+$/)) {
			error = true;
			return;
		}

		$account = username;
		goto(`${base}/`);
	};
	const handleClick = (value) => {
		$auth = value;
	};
</script>

<section class="mb-12 text-center">
	<a href="{base}/">
		<img src={imgLogo} alt="Shortly" class="mx-auto" />
	</a>
	<h1>User Login</h1>
</section>

<div class="mb-4">
	<form on:submit={handleSubmit} method="POST" action="/" class="flex flex-col gap-2">
		<input
			bind:value={username}
			type="text"
			name="email"
			placeholder="username"
			class="rounded-xl border-2 border-clr-Gray px-6 py-4"
			class:border-red-500={error}
			required
		/>
		<span class="mb-1 text-base text-red-500" class:hidden={!error}
			>Username can only contain letters and numbers</span
		>
		<input
			bind:value={password}
			type="password"
			name="password"
			placeholder="password"
			class="rounded-xl border-2 border-clr-Gray px-6 py-4"
			required
		/>
		<!-- create checkbox -->
		<div class="mb-1 flex justify-between">
			<label for="remember" class="flex items-center gap-x-1.5">
				<input type="checkbox" name="remember" id="remember" />
				Remember me
			</label>
			<a
				href="{base}/login"
				class="text-blue-500"
				handleClickSignup
				on:click={() => handleClick('forgot')}>Forgot Password?</a
			>
		</div>
		<button type="submit" class="rounded-xl bg-clr-Cyan py-4 font-PoppinsBold text-white"
			>Login</button
		>
	</form>
</div>
<span>
	Don't have an account?
	<button type="button" class="text-blue-500" on:click={() => handleClick('signup')}>
		Sign Up here</button
	>
</span>
