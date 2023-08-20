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
		<div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
			<label class="label text-md py-1">
				<span>Brand*</span>
				<input name="brand" class="input rounded-md capitalize" required type="text" />
			</label>

			<label class="label text-md py-1">
				<span>Model*</span>
				<input name="model" class="input rounded-md capitalize" required type="text" />
			</label>

			<label class="label text-md py-1">
				<span>Kilometers*</span>
				<input name="kms" class="input rounded-md" required type="number" min="1" max="1000000" />
			</label>

			<label class="label text-md py-1">
				<span>Year of purchase*</span>
				<input name="year" class="input rounded-md" required type="number" min="1850" max="3000" />
			</label>

			<label class="label text-md py-1">
				<span>Color</span>
				<input name="color" class="input rounded-md capitalize" type="text" />
			</label>

			<label class="label text-md py-1">
				<span>Owner name*</span>
				<input
					required
					name="owner_name"
					class="input rounded-md capitalize"
					autocapitalize="on"
					type="text"
				/>
			</label>

			<label class="label text-md py-1">
				<span>Owner Mobile Number*</span>
				<input
					required
					name="owner_mobile_number"
					class="input rounded-md"
					maxlength="10"
					type="tel"
				/>
			</label>

			<label class="label text-md py-1">
				<span>Price*</span>
				<input
					required
					name="price"
					class="input rounded-md"
					type="number"
					min="1000"
					max="1000000000"
				/>
			</label>

			<label class="label text-md py-1">
				<span>Location</span>
				<input
					name="location"
					class="input rounded-md capitalize"
					autocapitalize="on"
					type="text"
				/>
			</label>

			<label class="label text-md py-1">
				<span>Fuel Type*</span>
				<select name="fuel_type" class="select rounded-md h-auto" value="Petrol">
					<option value="Petrol">Petrol</option>
					<option value="Diesel">Diesel</option>
					<option value="Hybrid">Hybrid</option>
				</select>
			</label>

			<label class="label text-md py-1 lg:col-span-2">
				<span>Notes</span>
				<textarea name="notes" class="textarea rounded-md" />
			</label>
		</div>

		<label class="label text-md py-1">
			<span>Images</span>
			<input
				name="images"
				multiple
				class="input rounded-md capitalize"
				accept="image/*"
				type="file"
			/>
		</label>

		<button class="btn w-full bg-black rounded-md text-white lg:w-auto my-4" type="submit"
			>Add</button
		>
	</form>
</div>
