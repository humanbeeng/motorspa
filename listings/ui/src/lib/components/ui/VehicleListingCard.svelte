<script lang="ts">
	type VehicleListingCardProps = {
		model: string;
		brand_name: string;
		kms: number;
		year_of_purchase: string;
		location: string;
		owner_name: string;
		owner_mobile_number: string;
		fuel_type: string;
		is_sold: boolean;
		price: number;
		color: string;
	};
	// TODO : Add image url to props
	export let data: VehicleListingCardProps;

	const price = data.price.toLocaleString('en-IN', {
		style: 'currency',
		currency: 'INR',
		maximumFractionDigits: 0
	});
</script>

<div
	class="card p-3 border-1 grid grid-cols-5 justify-around h-50 gap-1 shadow-sm w-full md:w-1/2 md:gap-3"
>
	<div class="h-full col-span-2 border-1 md:col-span-1">
		<img src="https://placehold.co/600x600" alt="Car image" class="h-40 aspect-square" />
	</div>

	<div
		class="border-l-100 col-span-3 w-full h-full justify-between flex flex-col items-start md:col-span-4 md:px-6"
	>
		<div>
			<p class="text-2xl font-semibold text-gray-800 md:test-4xl">
				{data.model},
				<span class="text-lg md:text-2xl">
					{data.year_of_purchase.substring(0, 4)}
				</span>
			</p>
			<p class="font-medium text-xl">{data.brand_name}</p>
		</div>

		<div class="flex flex-row justify-between w-full">
			<div>
				<p class="text-sm">Kms: {data.kms}</p>
				<p class="text-sm">Location: {data.location}</p>
				<p class="text-sm">Color: {data.color}</p>
				<p class="text-sm">Price: {price}/-</p>
			</div>

			<div>
				<p class="text-sm">Owner: {data.owner_name}</p>
				<p class="text-sm">Phone: {data.owner_mobile_number}</p>
				<p class="text-sm">Fuel Type: {data.fuel_type}</p>
			</div>
		</div>
	</div>
</div>
