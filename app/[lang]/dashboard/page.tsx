import Link from 'next/link'
import React from 'react'

function DashboardPage() {
    return (
        <div>
            <Link className='text-neutral font-bold' href={'/signup?returnTo=test.com'}>Return </Link>
        </div>
    )
}

export default DashboardPage