
interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
}

function H1({ children, ...rest }: H4Props) {
    return (
        <h1 className={'font-primary text-5xl tracking-tight leading-tight text-neutral md:text-heavy'} {...rest}>{children}</h1>
    )
}

export default H1