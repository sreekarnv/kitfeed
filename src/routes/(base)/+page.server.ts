import prisma from '../../db/prisma';

export const load = async () => {
	const posts = await prisma.post.findMany({
		select: {
			id: true,
			body: true,
			title: true,
			createdAt: true,
			user: {
				select: {
					id: true,
					name: true,
					image: true,
				},
			},
		},
	});

	return { posts };
};
