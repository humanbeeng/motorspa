<script lang="ts">
	import { Icons } from '$components/docs/icons';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';
	import { error } from '@sveltejs/kit';

	export let session: Session | null;
	export let supabase: SupabaseClient;

	async function logout() {
		console.log('Logging out');
		const { error: err } = await supabase.auth.signOut();
		if (err) {
			throw error(500, 'Unable to log you out');
		}
	}
</script>

<nav
	class="w-full h-auto flex flex-row justify-between align-middle mb-4 p-4 bg-primary-900 md:p-5"
>
	<p
		class="font-bold tracking-tight text-xl md:text-2xl text-white self-center justify-self-center"
	>
		Bhuvan Auto Works
	</p>
	<div>
		{#if session}
			<button type="button" class="btn p-2 bg-white rounded-md" on:click={logout}>
				<span>
					<Icons.logout class="h-4" />
				</span>
			</button>
		{/if}
	</div>
</nav>
