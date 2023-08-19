<script lang="ts">
	export let data;
	import { Icons } from '$components/docs/icons';
	let { supabase } = data;
	$: ({ supabase } = data);

	let isLoading = false;
	async function signIn() {
		isLoading = true;
		supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: '/auth/callback'
			}
		});
		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

<!-- <div class="grid grid-cols-1 h-screen w-screen place-items-stretch lg:grid-cols-2"> -->
<!-- 	<div class="hidden bg-green-100 w-full h-screen lg:flex">Hellok</div> -->
<!-- 	<div class=" bg-red-100 w-full h-screen">Hi</div> -->
<!-- </div> -->

<div
	class="relative w-screen h-full grid grid-cols-1 place-items-stretch md:grid md:max-w-none md:grid-cols-2 lg:px-0"
>
	<div
		class="relative hidden h-full w-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
	>
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
		/>
		<div class="relative z-20 flex items-center text-2xl font-medium">
			Bhuvan Auto Works, Shimoga
		</div>
	</div>

	<div class="w-screen h-screen flex flex-col justify-center p-6 items-center lg:w-full">
		<div class="card h-40 w-full lg:w-1/2 p-6 grid grid-cols-1 shadow-sm">
			<h1 class="font-semibold pb-7 text-xl mt-2 select-none md:text-3xl md:font-semibold">
				Welcome back
			</h1>
			<button type="button" class="btn w-auto variant-filled-primary rounded-md" on:click={signIn}>
				<span>
					<Icons.google class="h-4" />
				</span>
				<span class="font-medium text-lg">Login</span>
			</button>
		</div>
	</div>
</div>
