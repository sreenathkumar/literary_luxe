
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo({ text = 'Logo', url, alt = 'logo' }: { text?: string, url?: string, alt?: string }) {
    return (
        <Link href='/' className='text-neutral'>
            {
                url ? <Image src={url} height={80} width={100} alt='' /> : <span className='font-primary text-h4 md:text-h3'>{text}</span>
            }
        </Link>
    )
}

export default Logo