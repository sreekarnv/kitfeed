import prisma from '../../../db/prisma';

export const load = async () => {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			image: true,
			name: true,
		},
	});

	return { users };
};
