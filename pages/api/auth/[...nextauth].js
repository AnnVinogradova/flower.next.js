import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import VkProvider from "next-auth/providers/vk";
import GoogleProvider from "next-auth/providers/google";



import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		
		VkProvider({
			clientId: process.env.VK_CLIENT_ID,
			clientSecret: process.env.VK_CLIENT_SECRET
		}),

		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' }
			},
			// eslint-disable-next-line no-unused-vars
			async authorize(credentials) {
				console.log('credentials', credentials);


				if ('' === credentials.username && '111' === credentials.password)
					return { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
				return null;
			}
		})

	],

	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.debug('>> callback signIn', { user, account, profile, email, credentials });
			return true;
		},
		async redirect({ url, baseUrl }) {
			console.debug('>> callback redirect', { url, baseUrl });
			return baseUrl;
		},
		async session({ session, user, token }) {
			console.debug('>> callback session', { session, user, token });
			session.user.id = user.id;
			session.user.role = user.role;
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			console.debug('>> callback jwt', { token, user, account, profile, isNewUser });
			return token;
		}
	}
};

const resf = NextAuth(authOptions);

export default (...params) => {
	const [req] = params;
	console.log('pages/api/auth/[...nextauth].js ');
	console.log('>> ', req.method, ' запрос на', req.url, req.query);
	return resf(...params);
};