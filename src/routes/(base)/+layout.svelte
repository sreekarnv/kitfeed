<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Button from '../../components/button.svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/posts/new', label: 'New Post' },
	];
</script>

<header>
	<nav class="grid grid-cols-3 justify-items-center items-center py-8">
		<a class="font-semibold text-xl" href="/">Navbar</a>
		<ul class="flex items-center gap-x-4">
			{#each links as link}
				<li>
					<a class="font-semibold text-gray-700" href={link.href}>
						<!--  -->
						{link.label}
						<!--  -->
					</a>
				</li>
			{/each}
		</ul>
		<ul>
			<li class="flex gap-x-4 items-center">
				{#if $page.data.session}
					<p>Logged in as {$page.data.session?.user?.email}</p>
					<Button on:click={() => signOut()}>Sign Out</Button>
				{:else}
					<Button on:click={() => signIn('google')}>Sign In With Google</Button>
				{/if}
			</li>
		</ul>
	</nav>
</header>
<main class="p-4">
	<slot />
</main>
