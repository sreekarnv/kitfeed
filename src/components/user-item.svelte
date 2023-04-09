<script lang="ts">
	import Button from './button.svelte';

	interface UserItem {
		id: string;
		name: string | null;
		image: string | null;
	}

	export let user: UserItem;
</script>

<div class="bg-gray-100 mb-6 p-4 rounded-xl">
	<div class="flex items-center justify-between text-gray-700">
		<div class="flex items-center gap-x-4">
			<img src={user.image} alt={user.name} class="h-16 w-16 rounded-full" />
			<p class="font-semibold text-xl">{user.name}</p>
		</div>
		<a href={`/users/${user.id}`}>
			<Button>View</Button>
		</a>
	</div>
</div>
