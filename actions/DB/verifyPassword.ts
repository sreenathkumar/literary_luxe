'use server'

import dbConnect from "@/dbConnect";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

async function verifyUser({ email, password }: { email: string, password: string }) {
    await dbConnect();
    try {
        const user = await User.findOne({ email })

        //compare the password
        const res = await bcrypt.compare(password, user?.password || "");

        if (res) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};


export {
    verifyUser
}