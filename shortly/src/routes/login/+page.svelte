<script>
	import { auth } from '$lib/store';
	import Login from './login.svelte';
	import Signup from './signup.svelte';
	import Forgot from './forgot.svelte';
</script>

{#if $auth === 'login'}
	<Login />
{:else if $auth === 'signup'}
	<Signup />
{:else}
	<Forgot />
{/if}
