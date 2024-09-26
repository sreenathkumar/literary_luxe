'use client'

import { signIn } from 'next-auth/react';
import { Button } from '../shadcn/button'
import { useParams } from 'next/navigation';

function TwitterAuth() {
    const params = useParams();
    const returnTo = params?.returnTo;


    // Handle the case when it's an array, a string, or undefined
    const returnToString = Array.isArray(returnTo)
        ? returnTo.join('/')  // Convert array to string if it's an array
        : returnTo || '';     // Use empty string if undefined


    const handleLogin = async () => {
        if (returnTo) {
            await signIn('twitter', { redirectTo: returnToString })
        }
        else {
            await signIn('twitter', { callbackUrl: '/dashboard' })
        }
    }
    return (
        <Button className="gap-2 bg-accent-900 border-accent-900" onClick={handleLogin}>
            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.8316 2.93536C23.9143 3.3418 22.9412 3.60856 21.9449 3.72675C22.9827 3.10474 23.7795 2.11976 24.1548 0.946173C23.1682 1.53158 22.0888 1.94406 20.9633 2.16579C20.0464 1.18904 18.7403 0.578613 17.2947 0.578613C14.519 0.578613 12.2685 2.82895 12.2685 5.60445C12.2685 5.99842 12.313 6.38196 12.3987 6.7499C8.22164 6.54024 4.51829 4.53938 2.03934 1.49861C1.60681 2.24091 1.35896 3.10435 1.35896 4.02531C1.35896 5.76904 2.24633 7.30732 3.59485 8.20866C2.7967 8.18371 2.01612 7.96814 1.31829 7.57995C1.31804 7.60101 1.31794 7.62209 1.318 7.64321C1.318 10.0783 3.05044 12.1097 5.34958 12.5714C4.60947 12.7727 3.83315 12.8021 3.07992 12.6576C3.71944 14.6543 5.57561 16.1073 7.77485 16.148C6.05475 17.4959 3.88757 18.2995 1.53293 18.2995C1.12719 18.2995 0.72719 18.2756 0.333984 18.2292C2.55819 19.6553 5.20001 20.4873 8.03829 20.4873C17.283 20.4873 22.3382 12.8289 22.3382 6.18732C22.3382 5.96933 22.3333 5.75258 22.3237 5.53708C23.3075 4.8257 24.1568 3.94468 24.8316 2.93536Z" fill="#55ACEE" />
            </svg>
            <span className="text-sm text-neutral">Twitter</span>
        </Button>
    )
}

export default TwitterAuth