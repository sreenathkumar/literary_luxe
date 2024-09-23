import { cn } from "@/lib/utils"
import H4 from "../globalTags/H4"
import SubscribeForm from "../SubscribeForm"


function FooterCTA() {
    return (
        <div className={cn("flex-col justify-start items-start gap-8 inline-flex md:max-w-[364px]")}>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <H4>Subscribe</H4>
                <p className="text-body text-neutral-200">Join our community to receive updates and exclusive offers.</p>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <SubscribeForm />
                <p className="self-stretch text-neutral-200 text-body-sm">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
            </div>
        </div>
    )
}

export default FooterCTA