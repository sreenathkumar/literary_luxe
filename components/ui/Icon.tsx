import Link from "next/link"

interface IconProps extends React.HTMLAttributes<HTMLSpanElement | HTMLLinkElement> {
    url: string
}

function Icon({ children, url, ...rest }: IconProps) {
    return (
        <>
            {
                url ? <Link {...rest} href={url} target="_blank" rel="noreferrer">{children}</Link> : <span {...rest} >{children}</span>
            }
        </>

    )
}

export default Icon