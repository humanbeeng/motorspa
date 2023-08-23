import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { getSession, supabase } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(301, '/login');
	}

	const { data, error } = await supabase.from('vehicles').select(
		`model,kms, year_of_purchase, images,location, color, owner_name, price, fuel_type, is_sold, 
owner_mobile_number, brand_name`
	);

	if (error) {
		console.log(error);
	} else {
		data.map(async (v) => {
			const image_paths = v.images;
			let image_urls: string[] = [];
			image_paths.forEach((image_path: string) => {
				const { data } = supabase.storage
					.from('vehicle_images')
					.getPublicUrl(image_path, { download: false });
				image_urls = [...image_urls, data.publicUrl];

				console.log(data.publicUrl);
			});

			v.images = image_urls;
		});
	}

	return {
		vehicles: data ?? []
	};
};
