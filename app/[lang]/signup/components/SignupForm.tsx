'use client'

import register from "@/actions/register"
import { Input } from "@/components/shadcn/input"
import FormField from "@/components/ui/CustomField"
import { cn } from "@/lib/utils"
import { useFormState } from "react-dom"
import PasswordField from "./PasswordField"
import SubmitBtn from "./SubmitBtn"
import Link from "next/link"


const initailState = {
    status: '',
    message: '',
    errors: {},
}

function SignupForm() {
    const [state, registerAcion] = useFormState(register, initailState);
    console.log('state in signup: ', state);

    return (
        <form className="self-stretch flex flex-col" action={registerAcion}>
            <div className="inline-flex gap-4">
                <FormField label="First name" htmlFor="fname" error={state?.errors?.fname}>
                    <Input id="fname" type="text" placeholder="Jhon" name="fname" required className={cn('border-accent-200 p-4 text-base text-neutral placeholder:text-neutral-300')} />
                </FormField>
                <FormField label="Last name" htmlFor="lname" error={state?.errors?.lname}>
                    <Input id="lname" type="text" placeholder="Doe" name="lname" required className={cn('border-accent-200 p-4 text-base text-neutral placeholder:text-neutral-300')} />
                </FormField>
            </div>
            <FormField label="Email" htmlFor="email" error={state?.errors?.email}>
                <Input id="email" type="email" placeholder="email@example.com" name="email" required className={cn('border-accent-200 p-4 text-base text-neutral placeholder:text-neutral-300')} />
            </FormField>
            <FormField label="Password" htmlFor="password" error={state?.errors?.password}>
                <PasswordField />
            </FormField>
            <SubmitBtn text="Sign up" loadingText="Signing up..." />

            {
                state.status === 'success' && <div className="text-green-500 text-base font-semibold mt-2">{state.message} <Link href={'/signin'} className="text-neutral underline tracking-wider">Signin now!</Link></div>
            }
        </form>
    )
}

export default SignupForm