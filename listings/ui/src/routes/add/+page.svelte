<script lang="ts">
	import { enhance } from '$app/forms';
	import Navbar from '$components/ui/Navbar.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
</script>

<div>
	<Navbar {supabase} {session} />
	<form class="px-4" method="POST" use:enhance>
		<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
			<label class="label text-md py-1">
				<span>Brand*</span>
				<input class="input rounded-md capitalize" required type="text" />
			</label>

			<label class="label text-md py-1">
				<span>Model*</span>
				<input class="input rounded-md capitalize" required type="text" />
			</label>

			<label class="label text-md py-1">
				<span>Kilometers*</span>
				<input class="input rounded-md" required type="number" min="1" max="1000000" />
			</label>

			<label class="label text-md py-1">
				<span>Year of purchase*</span>
				<input class="input rounded-md" required type="number" min="1850" max="3000" />
			</label>

			<label class="label text-md py-1">
				<span>Color</span>
				<input class="input rounded-md capitalize" type="text" />
			</label>

			<label class="label text-md py-1">
				<span>Owner name</span>
				<input class="input rounded-md capitalize" autocapitalize="on" type="text" />
			</label>

			<label class="label text-md py-1">
				<span>Owner Phone Number</span>
				<input class="input rounded-md" maxlength="10" type="tel" />
			</label>

			<label class="label text-md py-1">
				<span>Price</span>
				<input class="input rounded-md" type="number" min="1000" max="1000000000" />
			</label>

			<label class="label text-md py-1">
				<span>Location</span>
				<input class="input rounded-md capitalize" autocapitalize="on" type="text" />
			</label>

			<label class="label text-md py-1">
				<span>Fuel Type*</span>
				<select class="select rounded-md h-auto" value="petrol">
					<option value="petrol">Petrol</option>
					<option value="diesel">Diesel</option>
					<option value="hybrid">Hybrid</option>
				</select>
			</label>

			<label class="label text-md py-1 col-span-2">
				<span>Notes</span>
				<textarea class="textarea rounded-md" />
			</label>
		</div>

		<button class="btn w-full bg-black rounded-md text-white md:w-auto my-4" type="submit"
			>Add</button
		>
	</form>
</div>
