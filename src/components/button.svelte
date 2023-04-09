<script lang="ts"></script>

<button
	class="bg-teal-500 text-white font-semibold px-3 py-2 rounded-xl hover:bg-teal-600 focus-visible:bg-teal-600 transition-all duration-300 ease-out"
	{...$$props}
	on:click
>
	<slot />
</button>
