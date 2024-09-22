import { cn } from "@/lib/utils"

function SectionTitle({ text }: { text: string }) {
    return (

        <div className={cn("pl-5 py-4 border-l-8 border-[#e78e46]/20")}>
            <h3 className={cn("text-white text-2xl")}>{text}</h3>
        </div>

    )
}

export default SectionTitle