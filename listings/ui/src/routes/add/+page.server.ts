import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from '../$types';

import type { SupabaseClient } from '@supabase/supabase-js';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(301, '/login');
	}
};

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		console.log(data);

		const supabase: SupabaseClient = event.locals.supabase;
		const images = data.getAll('images');
		console.log(...images);
		let urls: string[] = [];

		images.forEach(async (image: File) => {
			if (image.size == 0) {
				return;
			}
			const res = await supabase.storage
				.from('vehicle_images')
				.upload(image.name, image, { contentType: 'multipart/form-data' });
			if (res.error) {
				console.log(res.error);
				return;
			} else {
				urls = [...urls, res.data.path];
			}
		});

		const { error } = await supabase.from('vehicles').insert({
			model: data.get('model'),
			brand_name: data.get('brand'),
			kms: data.get('kms'),
			owner_name: data.get('owner_name'),
			owner_mobile_number: data.get('owner_mobile_number'),
			fuel_type: data.get('fuel_type'),
			color: data.get('color'),
			year_of_purchase: '01-01-' + data.get('year'),
			price: data.get('price'),
			images: [...urls]
		});

		if (error) {
			console.log(error);
			return { success: false };
		}

		return { success: true };
	}
};
