import prisma from '../../../../db/prisma.js';

export const load = async ({ params }) => {
	const user = await prisma.user.findUnique({
		where: {
			id: params.id,
		},
	});

	return { user };
};
