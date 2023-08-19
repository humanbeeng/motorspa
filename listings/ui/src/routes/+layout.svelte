<script>
	import '../app.css';
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

	import '../theme.postcss';

	import '@skeletonlabs/skeleton/styles/skeleton.css';

	export let data;

	let { supabase } = data;
	$: ({ supabase } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((_, _session) => {
			invalidateAll();
		});

		return () => subscription.unsubscribe();
	});
</script>

<div>
	<slot />
</div>
