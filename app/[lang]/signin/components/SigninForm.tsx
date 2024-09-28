'use client'

import { Input } from "@/components/shadcn/input"
import FormField from "@/components/ui/CustomField"
import { cn } from "@/lib/utils"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import PasswordField from "../../signup/components/PasswordField"
import SubmitBtn from "../../signup/components/SubmitBtn"


function SigninForm() {
    const router = useRouter();
    const [formState, setFormState] = useState<{ errors: any, message: string | null }>({ errors: null, message: null });

    //============================
    // Login user
    //============================
    const handleLogin = async (data: FormData) => {
        const formData = Object.fromEntries(data);
        try {
            const res = await signIn("credentials", { ...formData, redirect: false });

            if (res?.error) {
                setFormState({
                    errors: {
                        email: ['Invalid credentials'],
                        password: ['Invalid credentials'],
                    },
                    message: res.error,
                });
                return
            }

            router.push('/dashboard');
            router.refresh();
        } catch (error: any) {
            console.log('error: ', error);
            setFormState({
                errors: {
                    email: ['Unknown error'],
                    password: ['Unknown error'],
                },
                message: error.message,
            });
        }


    };

    return (
        <form className="self-stretch flex flex-col" action={handleLogin}>
            <FormField label="Email" htmlFor="email" error={formState?.errors?.email}>
                <Input id="email" type="email" placeholder="email@example.com" name="email" required className={cn('border-accent-200 p-4 text-base text-neutral placeholder:text-neutral-300')} />
            </FormField>
            <FormField label="Password" htmlFor="password" error={formState?.errors?.password}>
                <PasswordField />
            </FormField>
            <div className="flex mb-5">
                <Link href='/forgot-password' className="self-end text-right text-neutral-300 text-sm leading-tight tracking-tight hover:text-accent">Forgot password?</Link>
            </div>
            <SubmitBtn text="Sign in" loadingText="Signing in..." />
        </form>
    )
}

export default SigninForm