<script lang="ts">
	interface PostItem {
		id: string;
		body: string;
		title: string;
		createdAt: Date;
		user: {
			id: string;
			name: string | null;
			image: string | null;
		};
	}

	export let post: PostItem;
</script>

<div class="bg-gray-100 mb-6 p-4 rounded-xl">
	<div class="flex items-center justify-between text-gray-700">
		<div class="flex items-center gap-x-4">
			<img
				src={post.user.image}
				alt={post.user.name}
				class="h-16 w-16 rounded-full"
			/>
			<p class="font-semibold text-xl">{post.user.name}</p>
		</div>
		<p>{post.createdAt.toDateString().toString()}</p>
	</div>
	<h5 class="text-2xl my-5">{post.title}</h5>
	<p>{post.body}</p>
</div>
