<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Users | {data.user?.name}</title>
</svelte:head>

<section class="max-w-xl mx-auto">
	<a href="/users" class="mb-5 block">Back</a>
	<div
		class="bg-gray-100 mb-6 py-8 rounded-xl flex flex-col justify-center items-center"
	>
		<img
			src={data.user?.image}
			alt={data.user?.name}
			class="h-20 w-20 mb-6 rounded-full"
		/>
		<p class="font-bold text-3xl mb-3">{data.user?.name}</p>
		<small class="text-gray-600 font-semibold">{data.user?.email}</small>
	</div>
</section>
