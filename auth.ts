import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { saltAndHashPassword } from "@lib/password"
import { ZodError } from "zod"
import { verifyUser } from "./actions/DB/verifyPassword"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@lib/db"
import { signInSchema } from "@lib/zod"


export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(client),
    providers: [
        GoogleProvider,
        FacebookProvider,
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    let user = null

                    const { email, password } = await signInSchema.parseAsync(credentials)

                    // logic to salt and hash password
                    const pwHash = await saltAndHashPassword(password)

                    // logic to verify if the user exists
                    user = await verifyUser({ email, password: pwHash })

                    if (!user) {
                        throw new Error("User not found.")
                    }

                    // return JSON object with the user data
                    return user
                } catch (error) {
                    if (error instanceof ZodError) {
                        // Return `null` to indicate that the credentials are invalid
                        return null
                    }
                }
            },
        }),
    ],

    pages: {
        signOut: '/signup',
        signIn: '/signin',
    }
})