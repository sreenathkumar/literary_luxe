import { cn } from '@/lib/utils'

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
}

function H4({ children, ...rest }: H4Props) {
    return (
        <h4 className={cn('font-primary text-xl text-neutral font-semibold tracking-wide')} {...rest}>{children}</h4>
    )
}

export default H4