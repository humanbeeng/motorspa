<script>
	import VehicleListingCard from '$components/ui/VehicleListingCard.svelte';

	import { Icons } from '$components/docs/icons';
	import Navbar from '$components/ui/Navbar.svelte';
	export let data;

	let { vehicles } = data;
	$: ({ vehicles } = data);

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
</script>

<div>
	<Navbar {supabase} {session} />
	<div class="grid grid-cols-1 place-items-center w-full gap-4 px-2 md:px-4">
		<div class="w-full md:w-1/2">
			<form action="">
				<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-md">
					<div class="input-group-shim"><Icons.search /></div>
					<input type="search" />
					<button type="submit" class="variant-filled-primary">Search</button>
				</div>
			</form>
		</div>
		<div class="flex flex-col w-full place-items-center gap-2 mb-6">
			{#each vehicles as vehicle}
				<VehicleListingCard data={vehicle} />
			{/each}
		</div>
	</div>

	<a href="/add">
		<button class="button p-5 bg-black fixed bottom-3 text-white right-3 rounded-full"
			><Icons.add class="text-white" /></button
		>
	</a>
</div>
