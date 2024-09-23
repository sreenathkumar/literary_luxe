import { cn } from "@/lib/utils"


function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn(`flex flex-col items-start gap-[96px] md:container ${className ? className : ''}`)}>
            {children}
        </div>
    )
}

export default Container