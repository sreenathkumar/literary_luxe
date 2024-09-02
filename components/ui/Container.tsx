import { cn } from "@/lib/utils"


function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className={cn("w-full flex flex-col px-4 md:container")}>
            {children}
        </div>
    )
}

export default Container