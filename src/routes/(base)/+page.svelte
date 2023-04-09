<script lang="ts">
	import PostItem from '../../components/post-item.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="max-w-5xl mx-auto">
	<h2 class="text-center font-bold text-4xl mb-6">Feed</h2>
	{#each data.posts as post}
		<PostItem {post} />
	{/each}
</section>
