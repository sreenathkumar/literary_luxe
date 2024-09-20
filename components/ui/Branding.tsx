import { cn } from "@/lib/utils"

function Branding() {
    return (
        <div className={cn("gap-4 flex-col justify-start items-start inline-flex md:max-w-[324px]")}>
            <h3 className={"self-stretch font-primary text-h3 text-neutral font-semibold leading-loose"}>LiteraryLuxe</h3>
            <p className={cn('font-primary text-body text-neutral-700')}>Where the love of reading meets convenience. Explore our curated best sellers, trending titles, and timeless classics. Join our community and elevate your literary journey. </p>
        </div>
    )
}

export default Branding