import { Plus } from "lucide-react"
import H4 from "../globalTags/H4"
import { Button } from "../shadcn/button"
import Image from "next/image"
import Link from "next/link"
import { cn, shortenText } from "@/lib/utils"

export interface BookCardProps {
    id?: string,
    title?: string,
    img?: string,
    url?: string,
    author?: string,
}

function BookCard({ title, img, url, author }: BookCardProps) {
    return (
        <div className="bg-card w-full h-full rounded-lg flex-col justify-start items-start p-6 gap-8 inline-flex">
            <div className="self-stretch px-4 justify-center items-center gap-2.5 inline-flex">
                <Image className="w-28 h-44 rounded shadow" width={118} height={177} alt={title || 'book_thubmnail'} src={img || 'https://via.placeholder.com/118x177'} />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <h5 className={cn('text-base text-neutral font-medium tracking-normal')}>{shortenText(title, 32) || "The book tittle"}</h5>
                <p className="text-sm font-normal font-primary text-neutral-200 tracking-widest">By: {shortenText(author, 17) || "The book author name"}</p>
                {/* <div className="justify-start items-center gap-1.5 inline-flex">
                        <div className="justify-start items-center gap-1 flex">
                            <div className="w-4 h-4 rounded-full bor relative">
                                <div className="w-4 h-4 left-0 top-0 absolute rounded-full border border-[#00ff0a]" />
                                <div className="w-2 h-2 left-[4px] top-[4px] absolute bg-[#00ff0a] rounded-full" />
                            </div>
                            <div className="text-[#0e0e0e] text-xs font-medium font-['EB Garamond'] leading-none">(16)</div>
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                            <div className="w-4 h-4 rounded-full border border-[#000aff]" />
                            <div className="text-[#0e0e0e] text-xs font-medium font-['EB Garamond'] leading-none">(16)</div>
                        </div>
                        <div className="justify-start items-center gap-1 flex">
                            <div className="w-4 h-4 rounded-full border border-[#ff0000]" />
                            <div className="text-[#0e0e0e] text-xs font-medium font-['EB Garamond'] leading-none">(16)</div>
                        </div>
                    </div> */}
            </div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex mt-auto">
                <Button title="purchase" className="w-full px-3 py-2 text-base">
                    <Link href={url || '#'}>Purchase</Link>
                </Button>
                <Button title="add to collection" variant='outline' className="p-2 h-full">
                    <Plus size={24} />
                </Button>
            </div>
        </div>

    )
}

export default BookCard