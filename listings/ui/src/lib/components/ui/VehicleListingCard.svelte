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

<!-- <div -->
<!-- 	class="card p-3 border-1 grid grid-cols-5 justify-around h-full gap-5 shadow-sm w-full lg:w-1/2 lg:gap-3" -->
<!-- > -->
<!-- 	<div class="h-full col-span-2 border-1 lg:col-span-1 flex flex-col justify-center"> -->
<!-- 		<img src="https://placehold.co/600x600" alt={data.model} class="h-auto lg:h-40 aspect-square" /> -->
<!-- 	</div> -->

<!-- <div -->
<!-- 	class="border-l-100 col-span-3 w-full h-full justify-between flex flex-col items-start lg:col-span-4 lg:px-6" -->
<!-- > -->
<!-- 	<div> -->
<!-- 		<p class="text-2xl font-semibold text-gray-800 lg:test-4xl"> -->
<!-- 			{data.model}, -->
<!-- 			<span class="text-lg lg:text-2xl"> -->
<!-- 				{data.year_of_purchase.substring(0, 4)} -->
<!-- 			</span> -->
<!-- 		</p> -->
<!-- 		<p class="font-medium text-xl">{data.brand_name}</p> -->
<!-- 	</div> -->
<!---->
<!-- <div class="grid grid-cols-1 justify-between w-full lg:grid-cols-2"> -->
<!-- 	<div> -->
<!-- 		<p class="text-sm">Kms: {data.kms}</p> -->
<!-- 		<p class="text-sm">Location: {data.location}</p> -->
<!-- 		<p class="text-sm">Color: {data.color}</p> -->
<!-- 		<p class="text-sm">Price: {price}/-</p> -->
<!-- 	</div> -->
<!---->
<!-- 			<div> -->
<!-- 				<p class="text-sm">Owner: {data.owner_name}</p> -->
<!-- 				<p class="text-sm">Phone: {data.owner_mobile_number}</p> -->
<!-- 				<p class="text-sm">Fuel Type: {data.fuel_type}</p> -->
<!-- 			</div> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- </div> -->

<div class="shadow-sm border-gray-200 rounded-md border p-2 w-full flex flex-row gap-4 lg:w-1/2">
	<img class="h-40 aspect-square flex-none" src="https://placehold.co/600x600" alt={data.model} />
	<div class="flex-grow w-full">
		<p class="text-2xl font-bold">
			{data.model}, <span class="text-xl">{data.year_of_purchase.substring(0, 4)}</span>
		</p>
		<p class="text-xl">{data.brand_name}</p>
		<p class="text-sm">Kms: {data.kms}</p>
		<p class="text-sm">Location: {data.location}</p>
		<p class="text-sm">Color: {data.color}</p>
		<p class="text-sm">Price: {price}/-</p>
		<p class="text-sm">Owner: {data.owner_name}</p>
		<p class="text-sm">Phone: {data.owner_mobile_number}</p>
		<p class="text-sm">Fuel Type: {data.fuel_type}</p>
	</div>
</div>
