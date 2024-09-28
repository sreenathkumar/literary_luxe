import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@lib/db"
import { signInSchema } from "@lib/zod"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import { verifyUser } from "./actions/DB/verifyPassword"


export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(client),
    providers: [
        GoogleProvider,
        FacebookProvider,
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    let user = null

                    const { email, password } = await signInSchema.parseAsync(credentials)

                    // logic to verify if the user exists
                    user = await verifyUser({ email, password });

                    if (!user) {
                        throw new Error('Invalid credentials')
                    }

                    // return JSON object with the user data
                    return user
                } catch (error: any) {
                    throw new Error(error.message || 'Unknown error')
                }
            },
        }),
    ],

    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },

    pages: {
        signOut: '/signup',
        signIn: '/signin',
    }
})