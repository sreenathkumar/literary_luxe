import React from 'react'

function Section({ children, ...rest }: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col px-4 items-start" {...rest}>
            {children}
        </section>
    )
}

export default Section