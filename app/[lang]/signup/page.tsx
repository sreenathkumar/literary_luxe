import Container from "@/components/ui/Container"
import { cn } from "@/lib/utils"
import SignupForm from "./components/SignupForm"
import SocialAuth from "./components/SocialAuth"
import Link from "next/link"

function SignupPage() {
    return (
        <main className={cn('px-4 py-[96px]')}>
            <Container className="self-stretch flex-col justify-start items-start flex bg-card rounded-2xl px-4 py-8 gap-12">
                <h5 className="self-stretch text-neutral text-xl text-center font-semibold leading-6">Join Us on a Literary Journey</h5>
                <div className="self-stretch flex-col justify-start items-start gap-12 flex">
                    <SignupForm />
                    <div className="gap-6 flex flex-col">
                        <span className="self-stretch text-center text-neutral-300 text-base font-semibold">Or Sign in with</span>
                        <SocialAuth />
                    </div>

                </div>
                <div className="self-center justify-start items-start gap-2 inline-flex">
                    <span className="text-neutral-300 text-sm font-normal font-['EB Garamond'] leading-tight tracking-tight">Already have an account?</span>
                    <Link href='/signin' className="text-right text-neutral-300 text-sm leading-tight tracking-tight hover:text-accent">Sign in now</Link>
                </div>
            </Container>
        </main>
    )
}

export default SignupPage