import { error } from "console";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
    },
    providers: [
        CredentialsProvider({
            name: 'Sign In',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: any) {
                const { email, password } = credentials as any;
                console.log(email)
                const res = await fetch(`${process.env.API_URL}/api/Authentication/Login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });

                const Data = await res.json();

                if (res.ok && Data) {
                    return Data;
                } else {
                    return null; // Return null when login fails
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
};


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }