import { Input } from "@/components/shadcn/input"
import FormField from "@/components/ui/CustomField"
import { cn } from "@/lib/utils"
import SubmitBtn from "./SubmitBtn"
import PasswordField from "./PasswordField"

function SignupForm() {
    return (
        <form className="self-stretch flex flex-col">
            <div className="inline-flex gap-4">
                <FormField label="First name" htmlFor="fname">
                    <Input id="fname" type="text" placeholder="Jhon" name="fname" className={cn('border-accent-200 p-4 text-base text-neutral placeholder:text-neutral-300')} />
                </FormField>
                <FormField label="Last name" htmlFor="fname">
                    <Input id="lname" type="text" placeholder="Doe" name="lname" className={cn('border-accent-200 p-4 text-base text-neutral placeholder:text-neutral-300')} />
                </FormField>
            </div>
            <FormField label="Email" htmlFor="email">
                <Input id="email" type="email" placeholder="email@example.com" name="email" className={cn('border-accent-200 p-4 text-base text-neutral placeholder:text-neutral-300')} />
            </FormField>
            <FormField label="Password" htmlFor="password">
                <PasswordField />
            </FormField>
            <SubmitBtn text="Sign up" />
        </form>
    )
}

export default SignupForm