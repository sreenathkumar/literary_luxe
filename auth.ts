import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "./lib/password"
import { z, ZodError } from "zod"
import { verifyUser } from "./actions/DB/verifyPassword"

// signInSchema
const signInSchema = z.object({
    email: z.string({ message: "Email is required" }),
    password: z.string({ message: "Password is required" }),
})

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    providers: [
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
})