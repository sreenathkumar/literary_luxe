import { cn } from "@/lib/utils"
import LinkListItem from "./LinkListItem"
import H4 from "./H4"

interface LinkListProps {
    title?: string
    links: {
        title: string
        url?: string
    }[]
}

function LinkList({ title, links }: LinkListProps) {
    return (
        <div className={cn("flex flex-col justify-start items-start self-stretch gap-4")}>
            <H4>{title}</H4>
            <ul className={cn("self-stretch flex-col justify-start items-start flex")}>
                {
                    links.map(({ title, url }) => <LinkListItem key={title} text={title} href={url} className={cn('self-stretch py-2 justify-start items-start inline-flex text-neutral-800')} />)
                }
            </ul>
        </div>
    )
}

export default LinkList