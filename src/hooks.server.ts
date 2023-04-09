import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	AUTH_SECRET,
} from '$env/static/private';
import type { Provider } from '@auth/core/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from './db/prisma';
import type { DefaultUser } from '@auth/core/types';

declare module '@auth/core/types' {
	interface DefaultUser {
		id: string;
	}

	interface Session {
		user: DefaultUser;
	}
}

export const handle = SvelteKitAuth({
	secret: AUTH_SECRET,
	adapter: PrismaAdapter(prisma),
	callbacks: {
		async session({ session, user }) {
			const userWithId = {
				...session.user,
				id: user.id,
			} satisfies DefaultUser;

			session.user = userWithId;

			return Promise.resolve(session);
		},
	},
	providers: [
		Google({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		}) as Provider,
	],
});
