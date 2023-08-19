import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ locals: { getSession, supabase } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(301, '/login');
	}
};

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		console.log(data);
	}
};
