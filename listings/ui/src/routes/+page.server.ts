import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { getSession, supabase } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(301, '/login');
	}

	const { data, error } = await supabase.from('vehicles').select(
		`model,kms, year_of_purchase, location, color, owner_name, price, fuel_type, is_sold, 
owner_mobile_number, brand_name`
	);

	if (error) {
		console.log(error);
	}

	return {
		vehicles: data ?? []
	};
};
