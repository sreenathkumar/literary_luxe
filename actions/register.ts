'use server'

import dbConnect from "@/dbConnect";
import { saltAndHashPassword } from "@/lib/password";
import User from "@/models/userModel";
import { z } from "zod";

// Allowed email domains
const allowedEmailDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];


// Form schema for validating the form data
const formSchema = z.object({
    fname: z.string({ message: "First name is required" }),
    lname: z.string({ message: "Last name is required" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    email: z.string().email().refine((email) => {
        // Extract the domain from the email
        const domain = email.split('@')[1];
        // Check if the domain is in the allowed list
        return allowedEmailDomains.includes(domain);
    }, {
        message: 'Only Gmail, Yahoo, and Outlook emails are allowed.',
    }),
})

//function to register a user
const register = async (prevState: any, data: FormData) => {
    const { fname, lname, email, password } = Object.fromEntries(data);
    const validatedFields = formSchema.safeParse({
        email: email,
        password: password,
        fname: fname,
        lname: lname,
    })

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            status: 'error',
            message: "Invalid form data",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    //connect to the database
    await dbConnect();

    //check if the user already exists
    const user = await User.findOne({ email });

    if (user) {
        return {
            status: 'error',
            errors: {
                email: ["An account with this email already exists"],
                fname: [],
                lname: [],
                password: []
            },
            message: "Email already exists",
        }
    }

    try {
        //create a new user
        const name = `${fname} ${lname}`;
        const hashPassword = await saltAndHashPassword(password as string);
        const newUser = new User({ name, email, password: hashPassword });

        //save the user
        await newUser.save();

        return {
            status: 'success',
            message: "User registered successfully",
        }
    } catch (error: any) {
        return {
            status: 'error',
            message: error.message,
        }
    }

}

export default register;