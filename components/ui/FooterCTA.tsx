import { cn } from "@/lib/utils"
import H4 from "./H4"
import { Input } from "./shadcn/input"
import { Button } from "./shadcn/button"


function FooterCTA() {
    return (
        <div className={cn("flex-col justify-start items-start gap-8 inline-flex md:max-w-[364px]")}>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <H4>Subscribe</H4>
                <p className="text-body text-neutral-800">Join our community to receive updates and exclusive offers.</p>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <Input type="email" placeholder="Enter your email" />
                    <Button variant='outline' className="border-accent text-accent px-6 py-4">Subscribe</Button>
                </div>
                <p className="self-stretch text-neutral-200 text-body-sm">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
            </div>
        </div>
    )
}

export default FooterCTA