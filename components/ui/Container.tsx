import { cn } from "@/lib/utils"


function Container({ children, classname }: { children: React.ReactNode, classname?: string }) {
    return (
        <div className={cn(`flex flex-col px-4 md:container ${classname ? classname : ''}`)}>
            {children}
        </div>
    )
}

export default Container