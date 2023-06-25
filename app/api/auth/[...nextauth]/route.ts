import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Cookie } from "next/font/google";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Sign In',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com'
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials: any) {
                const { email, password } = credentials as any


                const res = await fetch('https://localhost:44391/api/Authentication/Login', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                })
                const user = await res.json();
                if (res.ok && user)
                    return { user }

            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return ({ ...token, ...user })
        },
        async session({ session, token, user }) {
            session.user = token;
            return session
        }
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }