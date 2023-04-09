<script lang="ts">
	import UserItem from '../../../components/user-item.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<section class="max-w-5xl mx-auto">
	<h1 class="text-center font-bold text-4xl mb-6">Users</h1>
	{#each data.users as user}
		<UserItem {user} />
	{/each}
</section>
