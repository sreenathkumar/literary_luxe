import { Button } from "@/components/shadcn/button"

function SubmitBtn({ text }: { text: string }) {
    return (
        <Button type="submit" className="self-stretch">
            {text}
        </Button>
    )
}

export default SubmitBtn