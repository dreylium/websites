<script>
	import imgLogo from '$lib/images/logo.svg';
	import { account, auth } from '$lib/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let email = '';
	let username = '';
	let password = '';
	let repassword = '';
	let emailError = false;
	let usernameError = false;
	let passwordError = false;

	const handleSubmit = (event) => {
		event.preventDefault();
		// check if email is valid
		if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) emailError = true;
		else emailError = false;
		// check if username is valid
		if (!username.match(/^[a-zA-Z0-9]+$/)) usernameError = true;
		else usernameError = false;
		// check if password is valid
		if (password !== repassword) passwordError = true;
		else passwordError = false;

		if (!emailError && !usernameError && !passwordError) {
			$account = username;
			goto(`${base}/`);
		}
	};
	const handleClickLogin = () => {
		$auth = 'login';
	};
	const togglePasswordHidden = (event) => {
		const current = event.target.previousElementSibling;
		current.type = current.type === 'password' ? 'text' : 'password';
	};
</script>

<section class="mb-12 text-center">
	<a href="{base}/">
		<img src={imgLogo} alt="Shortly" class="mx-auto" />
	</a>
	<h1>User Sign Up</h1>
</section>

<div class="mb-4">
	<form on:submit={handleSubmit} action="/" class="flex flex-col gap-2">
		<input
			bind:value={email}
			type="text"
			name="email"
			placeholder="Email address"
			class="rounded-xl border-2 border-clr-Gray px-6 py-4"
			class:border-red-500={usernameError}
			required
		/>
		<span class="mb-1 text-base text-red-500" class:hidden={!emailError}>Email is not valid</span>
		<input
			bind:value={username}
			type="text"
			name="username"
			placeholder="Username"
			class="rounded-xl border-2 border-clr-Gray px-6 py-4"
			class:border-red-500={usernameError}
			required
		/>
		<span class="mb-1 text-base text-red-500" class:hidden={!usernameError}
			>Username can only contain letters and numbers</span
		>
		<div class="relative flex items-center">
			<input
				bind:value={password}
				type="password"
				name="password"
				placeholder="Password"
				class="rounded-xl border-2 border-clr-Gray py-4 pe-20 ps-6"
				required
			/>
			<button
				type="button"
				class="absolute right-6 text-clr-GrayishViolet"
				class:hidden={password === ''}
				on:click={togglePasswordHidden}>Show</button
			>
		</div>
		<div class="relative flex items-center">
			<input
				bind:value={repassword}
				type="password"
				name="repassword"
				placeholder="Confirm password"
				class="rounded-xl border-2 border-clr-Gray py-4 pe-20 ps-6"
				required
			/>
			<button
				type="button"
				class="absolute right-6 text-clr-GrayishViolet"
				class:hidden={repassword === ''}
				on:click={togglePasswordHidden}>Show</button
			>
		</div>
		<span class="mb-1 text-base text-red-500" class:hidden={!passwordError}
			>Passwords do not match</span
		>
		<button type="submit" class="rounded-xl bg-clr-Cyan py-4 font-PoppinsBold text-white"
			>Create Account</button
		>
	</form>
</div>
<span>
	Already have an account?
	<a href="{base}/login" class="text-blue-500" on:click={handleClickLogin}> Sign in</a>
</span>
