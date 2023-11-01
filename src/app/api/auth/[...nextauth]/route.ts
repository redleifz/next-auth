import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"username" | "password", string> | undefined) {
                if (!credentials || !credentials.username || !credentials.password) {
                    return null;
                }


                const res = await fetch(`http://localhost:8000/api/user/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_login: credentials.username,
                        user_password: credentials.password
                    })
                });
                const data = await res.json();

                // console.log(data);

                if (data.status === 200) {
                    return data;
                } else {
                    // return data;
                    throw new Error(data.error)
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.userLogin = user.data.username;
                token.accessToken = user.data.access_token
                token.role = user.data.role 
            }
            return token
        },
        async session({ session, token }: { session: any, token: any }) {
            session.user.userLogin = token.userLogin
            session.user.accessToken = token.accessToken
            session.user.role = token.role
            console.log(session)
            return session
        },
    },
    session: {
        maxAge: 30 * 24 * 60 * 60, // The session will last 30 days
    },



}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }