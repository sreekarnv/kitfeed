<script>
	import Button from '../../../../components/button.svelte';
</script>

<svelte:head>
	<title>New Post</title>
</svelte:head>

<form class="mx-auto max-w-md" method="POST">
	<div class="mb-4">
		<label for="title" class="block mb-2 font-semibold">Title</label>
		<input class="rounded-xl w-full" type="text" name="title" id="title" />
	</div>
	<div class="mb-4">
		<label for="description" class="block mb-2 font-semibold">Description</label
		>
		<textarea
			class="rounded-xl w-full"
			rows={6}
			name="description"
			id="description"
		/>
	</div>
	<Button type="submit">Save Post</Button>
</form>
