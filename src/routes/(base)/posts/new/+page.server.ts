import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import prisma from '../../../../db/prisma';

export const load = async (event) => {
	const session = await event.locals.getSession();

	if (!session?.user) {
		throw redirect(303, '/');
	}
};

export const actions = {
	default: async (event) => {
		const session = await event.locals.getSession();
		const user = session?.user;

		if (!user) {
			return fail(401, { message: 'You must be logged in to create a post.' });
		}

		const formData = await event.request.formData();

		const title = formData.get('title')?.toString();
		const description = formData.get('description')?.toString();

		if (!title || !description) {
			return fail(400, { message: 'Title and description are required.' });
		}

		await prisma.post.create({
			data: {
				body: description,
				title,
				userId: user.id,
			},
			select: {
				id: true,
				title: true,
				body: true,
				createdAt: true,
			},
		});

		throw redirect(303, '/');
	},
} satisfies Actions;
